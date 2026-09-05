/**
 * PACU content validator (execution brief Step 4; planning brief §5.4;
 * director additions of 2026-09-05: cards, rules 11–12, content review).
 *
 *   node scripts/validate.mjs [--content <dir>] [--debt <file>] [--review <file>] [--strict]
 *
 * Runs against src/content/ (or --content for fixtures) and exits non-zero on
 * any error. `npm run build` runs it first. No network access, ever: link
 * checking is the weekly lychee workflow.
 *
 * Output: one line per finding, no stack traces.
 *   RULE-NN <file> <line> <message>        error   (fails the run)
 *   WARN RULE-NN <file> <line> <message>   warning (does not fail the run)
 *
 * Rules. Zod covers 3, 6, 7, 11 and the enums; this script covers everything
 * Zod cannot see across files, and re-reports Zod issues under their rule
 * number so a fixture can target them without Astro.
 *   RULE-00  schema violation not tied to a numbered rule
 *   RULE-01  slot headings missing, out of order, or unexpected (days)
 *   RULE-02  evidence empty, or trial_based with no rct/meta_rct key
 *   RULE-03  consensus_only with no consensus_basis
 *   RULE-04  citation token, evidence key, or superseded_by key not in the ledger
 *   RULE-05  ledger row with neither doi nor pmid (or year null)   — warn unless strict
 *   RULE-06  quiz item without exactly one correct option
 *   RULE-07  quiz option without an explanation
 *   RULE-08  duplicate id / key, key not matching filename, id not on the plan
 *   RULE-09  ledger access UNVERIFIED, or key listed in ledger-debt §1 — warn unless strict
 *   RULE-10  a number with a unit in a paragraph that has no [[key]] token
 *   RULE-11  a quiz option reading "all/none of the above"
 *   RULE-12  a [NUMBER NEEDED]/[TODO_VERIFY] placeholder in a day or card with draft: false
 *
 * Every placeholder and every [PRACTICE VARIES] marker, draft or not, is
 * written to docs/content-review.md (or --review) for physician review.
 *
 * Rules 5 and 9 flip from warning to error when STRICT_LEDGER in
 * src/content/schema.mjs is true (director-only) or --strict is passed
 * (self-test only).
 */

import { readdirSync, readFileSync, existsSync, writeFileSync, mkdirSync } from "node:fs";
import { join, resolve, dirname, relative, basename } from "node:path";
import { fileURLToPath } from "node:url";
import { parse as parseYaml } from "yaml";
import { z } from "astro/zod";
import {
  STRICT_LEDGER,
  RANDOMISED_DESIGNS,
  SLOTS,
  CITE_TOKEN,
  NUMBER_WITH_UNIT,
  PLACEHOLDER,
  PRACTICE_VARIES,
  ledgerSchema,
  makeDaySchema,
  makeCardSchema,
} from "../src/content/schema.mjs";

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");

function arg(name, fallback) {
  const i = process.argv.indexOf(name);
  return i !== -1 && process.argv[i + 1] ? process.argv[i + 1] : fallback;
}
const CONTENT = resolve(arg("--content", join(ROOT, "src", "content")));
const DEBT = resolve(arg("--debt", join(ROOT, "docs", "ledger-debt.md")));
const REVIEW = resolve(arg("--review", join(ROOT, "docs", "content-review.md")));
const STRICT = STRICT_LEDGER || process.argv.includes("--strict");

const LEDGER_DIR = join(CONTENT, "ledger");
const DAYS_DIR = join(CONTENT, "days");
const CARDS_DIR = join(CONTENT, "cards");

const findings = [];
const rel = (p) => relative(ROOT, p).replace(/\\/g, "/");
const error = (rule, file, line, message) =>
  findings.push({ severity: "error", rule, file: rel(file), line, message });
const warn = (rule, file, line, message) =>
  findings.push({ severity: "warn", rule, file: rel(file), line, message });
const ledgerGap = STRICT ? error : warn; // rules 5 and 9

const daySchema = makeDaySchema(z.string());
const cardSchema = makeCardSchema(z.string());

/** For docs/content-review.md: { file, line, kind, text } */
const review = [];

/* ------------------------------------------------------------------ *
 * Helpers
 * ------------------------------------------------------------------ */

const listFiles = (dir, ext) =>
  existsSync(dir)
    ? readdirSync(dir)
        .filter((f) => f.endsWith(ext))
        .sort()
    : [];

/** 1-based line of the first line starting with `<field>:`, else 1. */
function lineOfField(text, field, offset = 0) {
  const lines = text.split("\n");
  const i = lines.findIndex((l) => l.startsWith(`${field}:`) || l.startsWith(`- ${field}:`));
  return i === -1 ? 1 + offset : i + 1 + offset;
}

/** Map a Zod issue to (rule, message). "RULE-NN:" prefixes win. */
function ruleOf(issue) {
  const m = /^RULE-(\d\d):\s*(.*)$/s.exec(issue.message);
  if (m) return { rule: m[1], message: m[2] };
  const path = issue.path.length ? issue.path.join(".") : "(root)";
  return { rule: "00", message: `${path}: ${issue.message}` };
}

/** Split "---\nyaml\n---\nbody". Returns null if there is no frontmatter. */
function splitFrontmatter(raw) {
  const m = /^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/.exec(raw);
  if (!m) return null;
  const fmLines = m[1].split("\n").length + 2; // both fences
  return { yaml: m[1], body: m[2], bodyOffset: fmLines };
}

const fresh = (re) => new RegExp(re.source, re.flags);

/**
 * Body checks shared by days and cards: rule 4 tokens, rule 10 numbers,
 * rule 12 placeholders, and the review markers.
 */
function checkBody(file, body, bodyOffset, draft) {
  const bodyLines = body.split("\n");

  // Rule 4 — every [[key]] in the body exists.
  bodyLines.forEach((l, i) => {
    for (const m of l.matchAll(fresh(CITE_TOKEN))) {
      if (!ledger.has(m[1])) {
        error("04", file, i + 1 + bodyOffset, `citation token [[${m[1]}]] is not a ledger key`);
      }
    }
  });

  // Rule 12 + review — placeholders and practice-varies markers.
  bodyLines.forEach((l, i) => {
    for (const m of l.matchAll(fresh(PLACEHOLDER))) {
      review.push({ file: rel(file), line: i + 1 + bodyOffset, kind: "placeholder", text: m[0] });
      if (!draft) {
        error("12", file, i + 1 + bodyOffset, `placeholder ${m[0]} in content with draft: false`);
      }
    }
    for (const m of l.matchAll(fresh(PRACTICE_VARIES))) {
      review.push({ file: rel(file), line: i + 1 + bodyOffset, kind: "practice varies", text: m[0] });
    }
  });

  // Rule 10 — a number with a unit needs a citation token in the same paragraph.
  // A paragraph is a run of non-blank lines that is not a heading.
  let block = [];
  let blockStart = 0;
  const flush = () => {
    if (!block.length) return;
    const text = block.join("\n");
    if (!text.trim().startsWith("#")) {
      const num = NUMBER_WITH_UNIT.exec(text);
      if (num && !fresh(CITE_TOKEN).test(text)) {
        error("10", file, blockStart + bodyOffset, `"${num[0]}" has no [[key]] citation in its paragraph`);
      }
    }
    block = [];
  };
  bodyLines.forEach((l, i) => {
    if (l.trim() === "") {
      flush();
    } else {
      if (!block.length) blockStart = i + 1;
      block.push(l);
    }
  });
  flush();

  return bodyLines;
}

/* ------------------------------------------------------------------ *
 * Ledger
 * ------------------------------------------------------------------ */

const ledger = new Map(); // key -> row

const debtListed = new Set();
if (existsSync(DEBT)) {
  // §1 of docs/ledger-debt.md: keys whose access was UNVERIFIED in the CSV.
  const text = readFileSync(DEBT, "utf8");
  const section = /## 1\.[\s\S]*?(?=\n## 2\.|$)/.exec(text);
  if (section) {
    for (const m of section[0].matchAll(/^- `([a-z0-9-]+)`/gm)) debtListed.add(m[1]);
  }
}

for (const f of listFiles(LEDGER_DIR, ".yaml")) {
  const file = join(LEDGER_DIR, f);
  const raw = readFileSync(file, "utf8");
  let doc;
  try {
    doc = parseYaml(raw);
  } catch (e) {
    error("00", file, 1, `YAML did not parse: ${e.message.split("\n")[0]}`);
    continue;
  }
  if (!doc || typeof doc !== "object") {
    error("00", file, 1, "file is not a YAML mapping");
    continue;
  }

  // Rule 9 — literal UNVERIFIED. Reported here (warn/error by strictness) and
  // neutralised before Zod so the enum failure is not reported twice.
  if (doc.access === "UNVERIFIED") {
    ledgerGap("09", file, lineOfField(raw, "access"), `${doc.key ?? f}: access is UNVERIFIED`);
    doc = { ...doc, access: "paywalled" };
  }

  const parsed = ledgerSchema.safeParse(doc);
  if (!parsed.success) {
    for (const issue of parsed.error.issues) {
      const { rule, message } = ruleOf(issue);
      if (rule === "05") continue; // reported below, by strictness
      error(rule, file, lineOfField(raw, String(issue.path[0] ?? "")), message);
    }
    continue;
  }
  const row = parsed.data;

  // Rule 8 — key matches filename; key unique.
  const expectedKey = basename(f, ".yaml");
  if (row.key !== expectedKey) {
    error("08", file, lineOfField(raw, "key"), `key "${row.key}" does not match filename ${f}`);
  }
  if (ledger.has(row.key)) {
    error("08", file, lineOfField(raw, "key"), `key "${row.key}" is already used by ${ledger.get(row.key).file}`);
    continue;
  }
  ledger.set(row.key, { ...row, file: rel(file) });

  // Rule 5 — identifiers.
  if (row.doi === null && row.pmid === null) {
    ledgerGap("05", file, lineOfField(raw, "doi"), `${row.key}: neither doi nor pmid`);
  }
  if (row.year === null) {
    ledgerGap("05", file, lineOfField(raw, "year"), `${row.key}: year is null (bibliographic record incomplete)`);
  }

  // Rule 9 — access recorded as paywalled only because it was unverified.
  if (debtListed.has(row.key)) {
    ledgerGap("09", file, lineOfField(raw, "access"), `${row.key}: access unverified (docs/ledger-debt.md §1)`);
  }
}

// Rule 4 — superseded_by targets must exist. Second pass so order does not matter.
for (const row of ledger.values()) {
  const m = /^superseded_by:([a-z0-9-]+)$/.exec(row.currency);
  if (m && !ledger.has(m[1])) {
    const file = join(ROOT, row.file);
    error("04", file, lineOfField(readFileSync(file, "utf8"), "currency"), `${row.key}: superseded_by:${m[1]} is not a ledger key`);
  }
}

/* ------------------------------------------------------------------ *
 * Days
 * ------------------------------------------------------------------ */

const dayIds = new Map(); // id -> file
const quizIds = new Map(); // quiz id -> file

for (const f of listFiles(DAYS_DIR, ".md")) {
  const file = join(DAYS_DIR, f);
  const raw = readFileSync(file, "utf8");
  const parts = splitFrontmatter(raw);
  if (!parts) {
    error("00", file, 1, "no YAML frontmatter");
    continue;
  }
  const { yaml, body, bodyOffset } = parts;

  let fm;
  try {
    fm = parseYaml(yaml);
  } catch (e) {
    error("00", file, 1, `frontmatter did not parse: ${e.message.split("\n")[0]}`);
    continue;
  }

  const parsed = daySchema.safeParse(fm);
  if (!parsed.success) {
    for (const issue of parsed.error.issues) {
      const { rule, message } = ruleOf(issue);
      error(rule, file, lineOfField(yaml, String(issue.path[0] ?? ""), 1), message);
    }
    continue;
  }
  const day = parsed.data;

  // Rule 8 — id matches filename; id unique; quiz ids unique across days.
  if (`${day.id}.md` !== f) {
    error("08", file, lineOfField(yaml, "id", 1), `id "${day.id}" does not match filename ${f}`);
  }
  if (dayIds.has(day.id)) {
    error("08", file, lineOfField(yaml, "id", 1), `id "${day.id}" is already used by ${dayIds.get(day.id)}`);
  } else {
    dayIds.set(day.id, rel(file));
  }
  for (const q of day.quiz) {
    if (quizIds.has(q.id) && quizIds.get(q.id) !== rel(file)) {
      error("08", file, lineOfField(yaml, "quiz", 1), `quiz id "${q.id}" is already used by ${quizIds.get(q.id)}`);
    } else {
      quizIds.set(q.id, rel(file));
    }
  }

  // Rule 4 — evidence keys exist.
  for (const key of day.evidence) {
    if (!ledger.has(key)) {
      error("04", file, lineOfField(yaml, "evidence", 1), `evidence key "${key}" is not in the ledger`);
    }
  }

  // Rule 2 — trial_based needs randomised evidence.
  if (day.evidence_mode === "trial_based") {
    const randomised = day.evidence.some((k) => ledger.has(k) && RANDOMISED_DESIGNS.includes(ledger.get(k).design));
    if (!randomised) {
      error("02", file, lineOfField(yaml, "evidence_mode", 1), `trial_based but no evidence key has design ${RANDOMISED_DESIGNS.join(" or ")}`);
    }
  }

  // Rule 1 — slot headings present, in order, nothing extra.
  const bodyLines = checkBody(file, body, bodyOffset, day.draft);
  const headings = [];
  bodyLines.forEach((l, i) => {
    const m = /^##\s+(.+?)\s*$/.exec(l);
    if (m) headings.push({ text: m[1], line: i + 1 + bodyOffset });
  });
  const found = headings.map((h) => h.text);
  if (found.join("|") !== SLOTS.join("|")) {
    const missing = SLOTS.filter((s) => !found.includes(s));
    const extra = found.filter((s) => !SLOTS.includes(s));
    const detail = [
      missing.length ? `missing: ${missing.map((s) => `"${s}"`).join(", ")}` : "",
      extra.length ? `unexpected: ${extra.map((s) => `"${s}"`).join(", ")}` : "",
      !missing.length && !extra.length ? "out of order" : "",
    ]
      .filter(Boolean)
      .join("; ");
    error("01", file, headings[0]?.line ?? bodyOffset + 1, `slot headings must be exactly: ${SLOTS.join(" · ")} (${detail})`);
  }

  // Review — placeholders and practice-varies markers in quiz text too.
  const yamlLines = yaml.split("\n");
  yamlLines.forEach((l, i) => {
    for (const m of l.matchAll(fresh(PLACEHOLDER))) {
      review.push({ file: rel(file), line: i + 2, kind: "placeholder", text: m[0] });
      if (!day.draft) error("12", file, i + 2, `placeholder ${m[0]} in content with draft: false`);
    }
    for (const m of l.matchAll(fresh(PRACTICE_VARIES))) {
      review.push({ file: rel(file), line: i + 2, kind: "practice varies", text: m[0] });
    }
  });
}

/* ------------------------------------------------------------------ *
 * Cards
 * ------------------------------------------------------------------ */

const cardIds = new Map();

for (const f of listFiles(CARDS_DIR, ".md")) {
  const file = join(CARDS_DIR, f);
  const raw = readFileSync(file, "utf8");
  const parts = splitFrontmatter(raw);
  if (!parts) {
    error("00", file, 1, "no YAML frontmatter");
    continue;
  }
  const { yaml, body, bodyOffset } = parts;

  let fm;
  try {
    fm = parseYaml(yaml);
  } catch (e) {
    error("00", file, 1, `frontmatter did not parse: ${e.message.split("\n")[0]}`);
    continue;
  }

  const parsed = cardSchema.safeParse(fm);
  if (!parsed.success) {
    for (const issue of parsed.error.issues) {
      const { rule, message } = ruleOf(issue);
      error(rule, file, lineOfField(yaml, String(issue.path[0] ?? ""), 1), message);
    }
    continue;
  }
  const card = parsed.data;

  if (`${card.id}.md` !== f) {
    error("08", file, lineOfField(yaml, "id", 1), `id "${card.id}" does not match filename ${f}`);
  }
  if (cardIds.has(card.id)) {
    error("08", file, lineOfField(yaml, "id", 1), `id "${card.id}" is already used by ${cardIds.get(card.id)}`);
  } else {
    cardIds.set(card.id, rel(file));
  }
  for (const key of card.evidence) {
    if (!ledger.has(key)) {
      error("04", file, lineOfField(yaml, "evidence", 1), `evidence key "${key}" is not in the ledger`);
    }
  }
  if (body.trim() === "") {
    error("00", file, bodyOffset + 1, "card body is empty; the algorithm is the body");
  }
  checkBody(file, body, bodyOffset, card.draft);
}

/* ------------------------------------------------------------------ *
 * docs/content-review.md — regenerated every run, deterministic.
 * ------------------------------------------------------------------ */

review.sort((a, b) => a.file.localeCompare(b.file) || a.line - b.line);
const byFile = new Map();
for (const r of review) {
  if (!byFile.has(r.file)) byFile.set(r.file, []);
  byFile.get(r.file).push(r);
}
const reviewMd = [
  "# Content review",
  "",
  "Generated by `scripts/validate.mjs` on every run; do not edit by hand. Lists every",
  "`[NUMBER NEEDED: …]` / `[TODO_VERIFY: …]` placeholder and every `[PRACTICE VARIES: …]`",
  "statement in days and cards, for physician review before a day leaves draft.",
  "A placeholder in content with `draft: false` fails the build (rule 12).",
  "",
  `Placeholders: ${review.filter((r) => r.kind === "placeholder").length} · Practice varies: ${review.filter((r) => r.kind === "practice varies").length}`,
  "",
];
if (byFile.size === 0) {
  reviewMd.push("_(nothing to review)_", "");
}
for (const [file, items] of byFile) {
  reviewMd.push(`## ${file}`, "");
  for (const r of items) reviewMd.push(`- line ${r.line} — ${r.kind}: \`${r.text}\``);
  reviewMd.push("");
}
mkdirSync(dirname(REVIEW), { recursive: true });
writeFileSync(REVIEW, reviewMd.join("\n"), "utf8");

/* ------------------------------------------------------------------ *
 * Report
 * ------------------------------------------------------------------ */

findings.sort((a, b) => a.file.localeCompare(b.file) || a.line - b.line || a.rule.localeCompare(b.rule));
for (const x of findings) {
  const prefix = x.severity === "error" ? "" : "WARN ";
  console.log(`${prefix}RULE-${x.rule} ${x.file} ${x.line} ${x.message}`);
}
const errors = findings.filter((x) => x.severity === "error").length;
const warnings = findings.length - errors;
console.log(
  `validate: ${ledger.size} ledger rows, ${dayIds.size} days, ${cardIds.size} cards; ${errors} error${errors === 1 ? "" : "s"}, ` +
    `${warnings} warning${warnings === 1 ? "" : "s"}; ${review.length} review item${review.length === 1 ? "" : "s"} -> ${rel(REVIEW)}` +
    `${STRICT ? " (strict)" : ""}`
);
process.exit(errors ? 1 : 0);

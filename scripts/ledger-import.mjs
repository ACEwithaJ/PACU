/**
 * Ledger migration (execution brief Step 3).
 *
 *   node scripts/ledger-import.mjs [--force]
 *
 * Reads data/ledger.csv and writes one YAML file per row to
 * src/content/ledger/<key>.yaml, plus docs/ledger-debt.md.
 *
 * What it will NOT do, by design:
 *   - invent, look up or "correct" a DOI, PMID or year (UNVERIFIED -> null + debt)
 *   - guess open access (UNVERIFIED -> paywalled + debt)
 *   - overwrite an existing YAML file unless --force is given, because after
 *     the first run the YAML is authoritative and the CSV is provenance (3.5).
 *     A director who has hand-edited a YAML row must not lose that to a rerun.
 *   - modify data/ledger.csv
 */

import { readFileSync, writeFileSync, mkdirSync, existsSync, readdirSync } from "node:fs";
import { join, resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { stringify } from "yaml";

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const CSV = join(ROOT, "data", "ledger.csv");
const OUT = join(ROOT, "src", "content", "ledger");
const DEBT = join(ROOT, "docs", "ledger-debt.md");
const FORCE = process.argv.includes("--force");

/* ------------------------------------------------------------------ *
 * Day -> topic (execution brief 2.1 / 3.4).
 *
 * Derived from the day map in docs/gaps.md and the ledger's own `supports`
 * text. Fifteen vocabulary terms for sixteen days: Day 6 (postoperative
 * hypertension: POQI upper-limit statement, ASA cardiovascular monitoring
 * statement) has no term of its own and is assigned `hypotension` as the
 * nearest blood-pressure term. That assignment is listed in ledger-debt.md
 * section 4 for the director.
 * ------------------------------------------------------------------ */
const TOPIC_BY_DAY = {
  1: "residual_block",
  2: "airway",
  3: "oxygenation",
  4: "respiratory_depression",
  5: "hypotension",
  6: "hypotension", // vocabulary gap — see ledger-debt.md §4
  7: "thermoregulation",
  8: "myocardial_injury",
  9: "ponv",
  10: "analgesia",
  11: "regional",
  12: "delirium",
  13: "emergence",
  14: "osa",
  15: "discharge",
  16: "handover",
};

/* ------------------------------------------------------------------ *
 * RFC 4180 CSV parser: quoted fields, doubled quotes, CRLF or LF.
 * No dependency; the ledger is 53 rows.
 * ------------------------------------------------------------------ */
function parseCsv(text) {
  const rows = [];
  let row = [];
  let field = "";
  let inQuotes = false;
  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (inQuotes) {
      if (c === '"') {
        if (text[i + 1] === '"') {
          field += '"';
          i++;
        } else {
          inQuotes = false;
        }
      } else {
        field += c;
      }
    } else if (c === '"') {
      inQuotes = true;
    } else if (c === ",") {
      row.push(field);
      field = "";
    } else if (c === "\n" || c === "\r") {
      if (c === "\r" && text[i + 1] === "\n") i++;
      row.push(field);
      field = "";
      if (row.length > 1 || row[0] !== "") rows.push(row);
      row = [];
    } else {
      field += c;
    }
  }
  if (field !== "" || row.length) {
    row.push(field);
    rows.push(row);
  }
  return rows;
}

const text = readFileSync(CSV, "utf8").replace(/^﻿/, "");
const [header, ...records] = parseCsv(text);
const EXPECTED = [
  "key", "day", "citation", "doi", "pmid", "design", "year", "n", "access", "currency",
  "supports", "found_via", "verified_on",
];
if (header.join(",") !== EXPECTED.join(",")) {
  console.error(`ledger-import: unexpected CSV header:\n  ${header.join(",")}`);
  process.exit(1);
}

const debt = {
  access: [], // §1 access UNVERIFIED -> paywalled
  ids: [], // §2 neither DOI nor PMID
  year: [], // §4 year UNVERIFIED -> null
  nUnverified: [], // §4 n UNVERIFIED (kept as the literal string)
  topicGap: [], // §4 Day 6 vocabulary gap
};

const idOf = (v) => (v === "" || v === "UNVERIFIED" ? null : v);

mkdirSync(OUT, { recursive: true });
const existing = new Set(existsSync(OUT) ? readdirSync(OUT) : []);
let written = 0;
let skipped = 0;
const keys = new Set();

for (const r of records) {
  const o = Object.fromEntries(EXPECTED.map((h, i) => [h, (r[i] ?? "").trim()]));
  if (!o.key) continue;
  if (keys.has(o.key)) {
    console.error(`ledger-import: duplicate key in CSV: ${o.key}`);
    process.exit(1);
  }
  keys.add(o.key);

  const day = o.day === "" ? null : Number(o.day);
  const doi = idOf(o.doi);
  const pmid = idOf(o.pmid);
  if (doi === null && pmid === null) debt.ids.push(o);

  let access = o.access;
  if (access === "UNVERIFIED") {
    access = "paywalled";
    debt.access.push(o);
  }

  let year = null;
  if (/^\d{4}$/.test(o.year)) year = Number(o.year);
  else debt.year.push(o);

  if (o.n === "UNVERIFIED") debt.nUnverified.push(o);
  if (day === 6) debt.topicGap.push(o);

  const topic = day === null ? null : TOPIC_BY_DAY[day];
  if (!topic) {
    console.error(`ledger-import: no topic for day ${o.day} (key ${o.key})`);
    process.exit(1);
  }

  const doc = {
    key: o.key,
    day,
    citation: o.citation,
    doi,
    pmid,
    design: o.design,
    year,
    n: o.n,
    access,
    currency: o.currency,
    topic,
    claim_support: "magnitude", // defaulted for every row — ledger-debt.md §3
    supports: o.supports,
    found_via: o.found_via === "" ? null : o.found_via,
    verified_on: o.verified_on,
  };

  const file = `${o.key}.yaml`;
  if (existing.has(file) && !FORCE) {
    skipped++;
    continue;
  }
  const banner =
    `# Generated from data/ledger.csv by scripts/ledger-import.mjs.\n` +
    `# This file is now authoritative; the CSV is provenance. Edit here.\n` +
    `# Rerunning the import will not overwrite it without --force.\n`;
  writeFileSync(join(OUT, file), banner + stringify(doc, { lineWidth: 0 }), "utf8");
  written++;
}

/* ------------------------------------------------------------------ *
 * docs/ledger-debt.md — regenerated every run, deterministic.
 * The validator reads §1 for rule 9 warnings. Sections 1 and 2 empty is the
 * precondition for STRICT_LEDGER = true (src/content/schema.mjs).
 * ------------------------------------------------------------------ */
const stub = (o) => o.citation.replace(/\s+/g, " ").slice(0, 110).replace(/\s\S*$/, "") + "…";
const list = (arr) => (arr.length ? arr.map((o) => `- \`${o.key}\` — ${stub(o)}`).join("\n") : "_(none)_");

const md = `# Ledger debt

Generated by \`scripts/ledger-import.mjs\` from \`data/ledger.csv\` (${records.length} rows).
Regenerated on every import run; do not edit by hand. Resolve an item by editing the
row's YAML in \`src/content/ledger/\` **and** the CSV, then rerun the import with \`--force\`.

Nothing in this file was looked up, inferred or corrected by the import. Every gap is
carried through exactly as the CSV states it (execution brief, DO NOT list).

## 1. access was UNVERIFIED — written as \`paywalled\`, needs verification (${debt.access.length} rows)

Rule 9 reports each of these as a warning until \`STRICT_LEDGER\` is true. Never set to
\`open\` without checking the publisher page.

${list(debt.access)}

## 2. Neither DOI nor PMID (${debt.ids.length} rows)

Rule 5 reports each of these as a warning until \`STRICT_LEDGER\` is true. The identifier
must come from the primary record, not from memory.

${list(debt.ids)}

## 3. claim_support defaulted, needs director review, ${records.length} rows

\`claim_support\` is not in the CSV. Every row was written as \`magnitude\`. The director
decides per row whether it supports the day's mechanism, magnitude or boundary.

## 4. Other fields the import could not represent faithfully

### 4a. \`year\` was UNVERIFIED — written as \`null\` (${debt.year.length} rows)

The schema admits \`null\` for \`year\` only so this row can exist without an invented value.

${list(debt.year)}

### 4b. \`n\` is the literal string UNVERIFIED (${debt.nUnverified.length} rows)

Passes the schema (\`n\` is a string) but renders as "UNVERIFIED" on a source card.

${list(debt.nUnverified)}

### 4c. Topic vocabulary gap — Day 6 assigned \`hypotension\` (${debt.topicGap.length} rows)

The §2.1 vocabulary has fifteen terms for sixteen days. Day 6 is postoperative
hypertension (POQI upper-limit statement; ASA cardiovascular monitoring statement) and
has no term. Assigned the nearest blood-pressure term. Director to amend the vocabulary
or confirm.

${list(debt.topicGap)}
`;

mkdirSync(dirname(DEBT), { recursive: true });
writeFileSync(DEBT, md, "utf8");

console.log(
  `ledger-import: ${records.length} rows; wrote ${written} YAML files, skipped ${skipped} existing` +
    `${skipped ? " (use --force to overwrite)" : ""}; debt: ${debt.access.length} access, ` +
    `${debt.ids.length} identifier, ${debt.year.length} year, ${debt.nUnverified.length} n, ` +
    `${debt.topicGap.length} topic.`
);

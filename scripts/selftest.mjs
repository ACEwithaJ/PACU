/**
 * Validator self-test (execution brief 4.4).
 *
 *   npm run validate:selftest
 *
 * "A validator that has never been seen to fail is not verified." Each
 * directory under scripts/fixtures/ is a tiny content tree broken in exactly
 * one way. This runs the real validator against each and asserts:
 *
 *   clean/            zero findings, exit 0
 *   rule-NN[-note]/   findings on rule NN and on NO other rule
 *                     rules 05 and 09: WARN + exit 0 without --strict,
 *                                      error + exit 1 with --strict (proves the flip)
 *                     every other rule: error + exit 1
 *
 * Prints the validator's own output for each fixture so the run log is the
 * evidence. Exits non-zero if any fixture does not behave.
 */

import { spawnSync } from "node:child_process";
import { readdirSync, existsSync, mkdtempSync } from "node:fs";
import { join, resolve, dirname } from "node:path";
import { tmpdir } from "node:os";
import { fileURLToPath } from "node:url";

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const FIXTURES = join(ROOT, "scripts", "fixtures");
const VALIDATOR = join(ROOT, "scripts", "validate.mjs");
const SOFT_RULES = new Set(["05", "09"]);
const SCRATCH = mkdtempSync(join(tmpdir(), "pacu-selftest-"));

function run(fixtureDir, strict, name) {
  const args = [VALIDATOR, "--content", join(fixtureDir, "content")];
  const debt = join(fixtureDir, "docs", "ledger-debt.md");
  args.push("--debt", existsSync(debt) ? debt : join(fixtureDir, "no-debt-file.md"));
  // Never let a fixture run overwrite the real docs/content-review.md.
  args.push("--review", join(SCRATCH, `${name}${strict ? "-strict" : ""}-review.md`));
  if (strict) args.push("--strict");
  const r = spawnSync(process.execPath, args, { encoding: "utf8" });
  const lines = r.stdout.split(/\r?\n/).filter(Boolean);
  const errors = new Set();
  const warnings = new Set();
  for (const l of lines) {
    let m = /^RULE-(\d\d) /.exec(l);
    if (m) errors.add(m[1]);
    m = /^WARN RULE-(\d\d) /.exec(l);
    if (m) warnings.add(m[1]);
  }
  return { status: r.status, lines, errors, warnings, stderr: r.stderr };
}

const same = (set, arr) => set.size === arr.length && arr.every((x) => set.has(x));

let failed = 0;
const fixtures = readdirSync(FIXTURES).sort();

for (const name of fixtures) {
  const dir = join(FIXTURES, name);
  const m = /^rule-(\d\d)(?:-[a-z0-9-]+)?$/.exec(name);
  const checks = [];

  if (name === "clean") {
    const r = run(dir, false, name);
    checks.push({ label: "clean: no findings, exit 0", ok: r.status === 0 && r.errors.size === 0 && r.warnings.size === 0, r });
  } else if (m) {
    const rule = m[1];
    if (SOFT_RULES.has(rule)) {
      const soft = run(dir, false, name);
      checks.push({
        label: `${name}: WARN on ${rule} only, exit 0`,
        ok: soft.status === 0 && soft.errors.size === 0 && same(soft.warnings, [rule]),
        r: soft,
      });
      const hard = run(dir, true, name);
      checks.push({
        label: `${name} --strict: error on ${rule} only, exit 1`,
        ok: hard.status === 1 && same(hard.errors, [rule]) && hard.warnings.size === 0,
        r: hard,
      });
    } else {
      const r = run(dir, false, name);
      checks.push({
        label: `${name}: error on ${rule} only, exit 1`,
        ok: r.status === 1 && same(r.errors, [rule]) && r.warnings.size === 0,
        r,
      });
    }
  } else {
    continue;
  }

  for (const c of checks) {
    console.log(`${c.ok ? "PASS" : "FAIL"}  ${c.label}`);
    for (const l of c.r.lines) console.log(`      ${l}`);
    if (c.r.stderr.trim()) console.log(`      stderr: ${c.r.stderr.trim().split("\n")[0]}`);
    if (!c.ok) failed++;
  }
}

// Every numbered rule must have at least one fixture; a rule with no fixture
// has never been seen to fail.
const expected = ["clean", ...Array.from({ length: 14 }, (_, i) => `rule-${String(i + 1).padStart(2, "0")}`)];
for (const e of expected) {
  if (!fixtures.some((f) => f === e || f.startsWith(`${e}-`))) {
    console.log(`FAIL  fixture ${e} is missing`);
    failed++;
  }
}

console.log(`selftest: ${failed === 0 ? "all fixtures behaved" : `${failed} check(s) failed`}`);
process.exit(failed ? 1 : 0);

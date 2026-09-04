# PACU Curriculum Site — Phase 0 Execution Brief
For a Claude Code cloud session. Model: Claude Fable 5.1. Paste this whole document as the first message.

---

## BEFORE YOU START THE SESSION (director checklist, not for Claude Code)

The session can only see the repo. These must be committed to `main` first:

- [ ] `docs/planning-brief.md` (from the Claude project, `claude/planning-brief.md`)
- [ ] `docs/extraction-findings.md`
- [ ] `docs/gaps.md`
- [ ] `docs/new-sources-assessment.md`
- [ ] `data/ledger.csv` (the 53-row ledger)
- [ ] `main` branch protected: require PR, no direct push
- [ ] Repo secrets: **none**. If any exist, remove them. Deploy is Git-integrated, not token-driven.
- [ ] Cloudflare Pages **not yet connected**. You connect it after the session reports Phase 0 built. Build command `npm run build`, output `dist`.

---

## CONTEXT

You are building the skeleton of a public, static, 16-day PACU rotation curriculum site for
anesthesiology residents. It is the sibling of a neuroanesthesia site built the same way. The
method that produced that site, and what it cost, is in `docs/planning-brief.md` §0–§11. Read
that document in full before doing anything. §0 lists what is closed and must not be relitigated.

The single most important property of this project: **every clinical number on every page must
resolve to a key in the source ledger, and the ledger must resolve to a DOI or a PMID.** The
build fails otherwise. You are building the machine that enforces that, not the content.

The evidence base is thin by design. 8 of 53 ledger rows are randomised. `consensus_only` is the
common case and must not render as a failure state.

**This session has two halves separated by a hard stop.** Step 0 is preflight. You run it,
report the table, and STOP. You do not proceed to Step 1 until the director replies "go".
That stop exists because two sessions on the sibling project died on an environment assumption
nobody had checked.

---

## STEP 0 — PREFLIGHT, THEN STOP

Run each check. Fill the table with the actual output. Report it verbatim. Then stop.

| # | Check | Command | Result |
|---|---|---|---|
| 0.1 | Node version | `node -v` | |
| 0.2 | npm registry reachable | `npm view astro version` | |
| 0.3 | Git push to a branch works | `git checkout -b preflight && git commit --allow-empty -m "preflight" && git push -u origin preflight` | |
| 0.4 | doi.org reachable from sandbox | `curl -sI https://doi.org/10.1097/ALN.0000000000001985 \| head -1` | |
| 0.5 | pubmed reachable | `curl -sI https://pubmed.ncbi.nlm.nih.gov/29189290/ \| head -1` | |
| 0.6 | Required docs present | `ls docs/ data/` | |
| 0.7 | Ledger row count | `python3 -c "import csv;print(sum(1 for _ in csv.DictReader(open('data/ledger.csv'))))"` — expect 53 | |
| 0.8 | Repo secrets | `gh secret list` — expect none | |

If 0.2 fails, everything after this is blocked; report and stop.
If 0.4 or 0.5 fail, note it: link checking will run only in GitHub Actions, never locally, and
the validator must not attempt network access.
If 0.6 shows anything missing, report which and stop.

**After reporting: STOP. Wait for "go".**

---

## STEP 1 — SCAFFOLD

1.1 On a new branch `phase0-skeleton`, initialise Astro with the minimal template. TypeScript strict. No integrations yet. npm.
1.2 Commit the untouched scaffold before changing anything, so the diff of your work is readable.
1.3 Confirm `npm run build` succeeds on the bare scaffold.

## STEP 2 — CONTENT SCHEMA

Implement `src/content.config.ts` with two collections. The field names below are the contract;
adjust naming only to satisfy Astro conventions and preserve every field.

**`ledger`** — one YAML file per row, filename = `key`.
```
key            string, matches filename, immutable
day            number 1–16, or null
citation       string
doi            string | null
pmid           string | null
design         enum: rct | meta_rct | cohort | case_series | guideline | consensus_statement | advisory
year           number
n              string
access         enum: open | paywalled       (UNVERIFIED is NOT permitted — see rule 9)
currency       string: "current" | "era_limited" | "superseded_by:<key>"
topic          enum — controlled vocabulary, see 2.1
claim_support  enum: mechanism | magnitude | boundary
supports       string
found_via      string | null
verified_on    string
```
Zod refinement: at least one of `doi`, `pmid` non-null. (Rule 5.)
Zod refinement: if `currency` starts with `superseded_by:`, the referenced key must exist. Use `reference('ledger')` where Astro allows; otherwise enforce in the validator script.

2.1 Topic vocabulary, seed it from the day map in `docs/gaps.md`; the director may amend:
`residual_block | airway | oxygenation | respiratory_depression | hypotension | thermoregulation | myocardial_injury | ponv | analgesia | regional | delirium | emergence | osa | discharge | handover`

**`days`** — Markdown with frontmatter, one file per day, filename `day-NN.md`.
```
id                     string "day-NN", immutable
title                  string
claim                  string   (slot 1, one sentence)
evidence_mode          enum: trial_based | consensus_only
consensus_basis        enum | null: physiology | registry | guideline | practice_advisory | expert_consensus
physiology_status      enum: established | contested | unknown
clinical_claim_status  enum: supported | associational | uncertain | untested | refuted
evidence               array of reference('ledger'), min 1
draft                  boolean, default true
review_due             date | null
quiz                   array of QuizItem, min 1
```
Zod refinement: `consensus_only` requires non-null `consensus_basis`. (Rule 3.)
Zod refinement: `trial_based` requires at least one `evidence` key whose ledger `design` is `rct` or `meta_rct`. (Rule 2, strengthened.)

**QuizItem**
```
id            string, unique across all days
stem          string
options       array (min 3, max 5) of { text, correct: boolean, explanation: string min 1 }
```
Zod refinement: exactly one option `correct: true`. (Rule 6.) Every option has an explanation. (Rule 7.)

**Body slots.** The Markdown body uses level-2 headings as slots, in this order, all required:
`## Why it matters` · `## Mechanism` · `## Evidence` · `## What this does not show` · `## At the bedside` · `## Check yourself`
The validator, not Zod, enforces slot presence and order. (Rule 1.)

## STEP 3 — LEDGER MIGRATION

3.1 Write `scripts/ledger-import.mjs`: reads `data/ledger.csv`, writes one YAML file per row to `src/content/ledger/<key>.yaml`.
3.2 Rows with `access: UNVERIFIED` → write `access: paywalled` AND add a line to `docs/ledger-debt.md` listing the key. Do not guess open access.
3.3 Rows lacking both DOI and PMID → still write the file, but append the key to `docs/ledger-debt.md` under a separate heading. **Do not invent, look up, or "correct" any identifier.** Expect about 12.
3.4 `topic` and `claim_support` are not in the CSV. Set `topic` from the day number using the map in 2.1. Set `claim_support` to `magnitude` for every row and add a third heading to `ledger-debt.md`: "claim_support defaulted, needs director review, 53 rows."
3.5 Run the import. Commit `data/ledger.csv` unchanged alongside the generated YAML. The CSV stays as provenance; the YAML is now authoritative.
3.6 `npm run build` must pass at this point EXCEPT for rules 5 and 9, which the debt file documents. See Step 4.5 for how those are handled.

## STEP 4 — VALIDATOR

4.1 Write `scripts/validate.mjs`. It runs against `src/content/` and exits non-zero on any failure. Wire it as `npm run validate`, and make `npm run build` run it first.
4.2 Implement every rule from `docs/planning-brief.md` §5.4 that Zod does not already cover:
- Rule 1: slot headings present, in order
- Rule 4: every `[[key]]` or `{key}` citation token in body text exists in the ledger (choose one token syntax, document it in README, use it consistently)
- Rule 8: quiz `id` unique across all days; ledger `key` unique
- Rule 10: any body-text token matching a number with a unit or percent sign (`\d+(\.\d+)?\s?(%|mg|ng/L|mmHg|min|h|°C)`) must have a ledger citation token within the same paragraph
4.3 Rules 5 and 9 (identifier and access) run as **warnings** until the debt file is empty, then flip to errors. Put the flip behind a single constant `STRICT_LEDGER = false` with a comment saying when to set it true. Do not set it true yourself.
4.4 Write a fixtures directory `scripts/fixtures/` with one deliberately broken file per rule. Write `npm run validate:selftest` that confirms each fixture fails on its rule and only its rule. **A validator that has never been seen to fail is not verified.**
4.5 Output format: one line per failure, `RULE-NN <file> <line> <message>`. No stack traces.

## STEP 5 — PROTOTYPE DAY 3

The prototype is the visual contract for all sixteen days. Day 3 is chosen because it is
single-source, fully verified, and contains a teaching trap.

5.1 Author `src/content/days/day-03.md`. **Every number must come from `docs/extraction-findings.md` §B, Day 3, and every number must carry its ledger key inline.** The key is `fu-2004`. If a number you want is not in that section, leave a `[NUMBER NEEDED: <what>]` placeholder; do not fill it from memory.
5.2 `draft: true`. `evidence_mode: consensus_only`, `consensus_basis: physiology`, `physiology_status: established`, `clinical_claim_status: supported`.
5.3 The `## What this does not show` slot must state that Phase 2 of Fu 2004 found desaturation *more* common on room air (9.0% vs 2.3%), and that this is the point, not a contradiction: supplemental oxygen removes the signal. This is the trap the template must be able to hold.
5.4 Three quiz items, each with all options explained. Keyed answers must be traceable to a sentence in the extraction findings.
5.5 Build the day page layout: slot order, a visible evidence-mode chip, a visible DRAFT banner when `draft: true`, source cards rendered from the ledger with DOI links, a `paywalled` badge where applicable, and the quiz island. In-memory quiz state only; the page must say "progress is not saved."
5.6 No figures. No diagrams. Nothing reproduced.

## STEP 6 — CI

6.1 `.github/workflows/ci.yml`: on pull_request and push to main → `npm ci`, `npm run validate:selftest`, `npm run validate`, `npm run build`.
6.2 `.github/workflows/links.yml`: weekly cron, runs `lychee` against `dist/**/*.html`, opens an issue on failure. This is the review process from planning-brief D7. It must exist in Phase 0.
6.3 Do not add a deploy step. Cloudflare deploys by Git integration; the director connects it.

## STEP 7 — REPORT AND STOP

Open a PR from `phase0-skeleton` to `main`. In the PR body, and in your final message:
1. The preflight table from Step 0
2. Output of `npm run validate:selftest`, showing each fixture failing on its own rule
3. Output of `npm run validate` on the real content (expect warnings for rules 5/9, zero errors)
4. `docs/ledger-debt.md` in full
5. Every `[NUMBER NEEDED]` placeholder left in day-03
6. Anything you were uncertain about, as a list, without having resolved it
7. **Items that require the director rather than you**, as a separate list

Then stop. Do not merge. Do not start Phase 1.

---

## VERIFICATION CRITERIA (Phase 0 exit)

- [ ] `npm run validate:selftest` passes: every fixture fails, on the right rule only
- [ ] `npm run validate` on real content: zero errors
- [ ] `npm run build` passes
- [ ] 53 ledger YAML files exist; `docs/ledger-debt.md` lists the ~12 identifier gaps and ~10 access gaps
- [ ] Day 3 renders with DRAFT banner, evidence chip, source card linking to DOI 10.1378/chest.126.5.1552, and a working quiz
- [ ] Both workflows present; CI green on the PR
- [ ] After the director connects Cloudflare Pages: the branch has a preview URL and Day 3 loads there

---

## DO NOT

Each of these names an action that will look helpful and is worse than stopping.

- **Do not invent, look up, or correct any DOI or PMID.** Report the gap in `ledger-debt.md`. A wrong identifier that looks right is worse than a blank, because nothing downstream will question it.
- **Do not fill a number from memory, a textbook, or general knowledge.** If it is not in `docs/extraction-findings.md`, it is a placeholder. The sibling project shipped a sensitivity/specificity pair and a BIS threshold that traced to nothing; that is the failure this rule exists for.
- **Do not set `draft: false` on anything.** Only the director clears draft flags on clinical content.
- **Do not set `STRICT_LEDGER = true`.** The director flips it when the debt file is empty.
- **Do not guess an open-access status.** UNVERIFIED becomes `paywalled` plus a debt entry, never `open`.
- **Do not restructure the schema, the slot order, or the validator rules to make a build error go away.** Stop and report the error.
- **Do not add any authentication, storage, analytics, or CMS**, including "just a simple" one. Planning brief §9 lists these as non-goals with reasons.
- **Do not add a deploy step or any Cloudflare credential.** Deploy is Git-integrated.
- **Do not commit any PDF.** There are PDFs in the director's Drive and Claude project. None enters this repo.
- **Do not reproduce, trace, or redraw any figure from any source.** No figures in Phase 0.
- **Do not renumber or reuse any `id` or `key`, ever.**
- **Do not merge the PR.**
- **Do not start Phase 1.**
- **Do not proceed past Step 0 without the word "go" from the director.**

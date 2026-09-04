# PACU rotation curriculum

A public, static, 16-day PACU curriculum for anesthesiology residents. Sibling of the
neuroanesthesia site, built the same way. The planning brief is `docs/planning-brief.md`;
the Phase 0 execution brief is `docs/phase0-execution-brief.md`.

**The one property that matters:** every clinical number on every page resolves to a key in
the source ledger, and every ledger key resolves to a DOI or a PMID. The build fails
otherwise. This repository is the machine that enforces that.

## Layout

```
data/ledger.csv            provenance — the 53-row ledger as delivered; never edited by scripts
src/content/ledger/*.yaml  authoritative — one file per ledger row, filename = key
src/content/days/day-NN.md one file per day, YAML frontmatter + six body slots
src/content/schema.mjs     the content contract (Zod); imported by Astro AND the validator
src/content.config.ts      Astro collections: ledger, days
scripts/ledger-import.mjs  CSV -> YAML + docs/ledger-debt.md      (npm run ledger:import)
scripts/validate.mjs       the ten-rule validator                  (npm run validate)
scripts/selftest.mjs       proves each rule can fail               (npm run validate:selftest)
scripts/fixtures/          one deliberately broken content tree per rule, plus clean/
src/pages/d/[id].astro     the day page — Day 3 is the visual contract
docs/ledger-debt.md        generated: every ledger gap the import carried through unchanged
.github/workflows/         ci.yml · links.yml · bootstrap.yml
```

## Authoring a day

Frontmatter fields are the contract in `src/content/schema.mjs`. The body is six level-2
headings, in this order, all required:

```
## Why it matters
## Mechanism
## Evidence
## What this does not show
## At the bedside
## Check yourself
```

### Citation tokens

Cite a ledger row inline with double square brackets around its key:

```
Desaturation occurred in 9.0% of the room-air group [[fu-2004]].
```

The token renders as a link to that row's source card. **Every paragraph that contains a
number with a unit or a percent sign must contain at least one token** (rule 10). A number
you cannot cite is written as a placeholder, never filled from memory:

```
[NUMBER NEEDED: incidence of hypercapnia in PACU patients on oxygen]
```

## The validator

`npm run validate` runs before every build and exits non-zero on any error. Output is one
line per finding, no stack traces:

```
RULE-NN <file> <line> <message>          error — fails the build
WARN RULE-NN <file> <line> <message>     warning — reported, does not fail
```

| Rule | What fails | Enforced by |
|---|---|---|
| 00 | any schema violation not tied to a numbered rule | Zod |
| 01 | slot heading missing, out of order, or unexpected | validator |
| 02 | `evidence` empty, or `trial_based` with no `rct` / `meta_rct` key | Zod + validator |
| 03 | `consensus_only` with no `consensus_basis` | Zod |
| 04 | `[[key]]`, `evidence` key, or `superseded_by:` key not in the ledger | validator (+ Astro `reference`) |
| 05 | ledger row with neither `doi` nor `pmid` (or `year` null) | validator — **warning** until strict |
| 06 | quiz item without exactly one `correct: true` | Zod |
| 07 | quiz option with an empty `explanation` | Zod |
| 08 | duplicate day id, quiz id, or ledger key; key ≠ filename | validator |
| 09 | ledger `access: UNVERIFIED`, or key listed in `docs/ledger-debt.md` §1 | validator — **warning** until strict |
| 10 | number with a unit in a paragraph with no `[[key]]` | validator |

Rules 5 and 9 flip from warning to error when `STRICT_LEDGER` in `src/content/schema.mjs`
is set to `true`. Set it only when `docs/ledger-debt.md` sections 1 and 2 are empty. The
director flips it.

`npm run validate:selftest` runs the validator against `scripts/fixtures/` and asserts that
`clean/` produces nothing and each `rule-NN/` fails on rule NN and on no other rule. A
validator that has never been seen to fail is not verified.

## Workflows

| Workflow | Trigger | What it does |
|---|---|---|
| `ci.yml` | pull request; push to `main` | `npm ci` → self-test → validate → build |
| `links.yml` | weekly (Mon 11:00 UTC); manual | builds, runs lychee on `dist/**/*.html`, opens an issue on failure. This is the review process (planning brief D7). |
| `bootstrap.yml` | push to `phase0-skeleton`; manual | the toolchain bridge: installs, generates the lockfile and ledger YAML if absent, runs the full pipeline, commits results and `.ci/REPORT.md` back to the branch |

There is no deploy step and there are no repository secrets. Cloudflare Pages deploys by Git
integration: build command `npm run build`, output directory `dist`.

## What this repository refuses to do

- Invent, look up or correct a DOI, PMID or year. Gaps go to `docs/ledger-debt.md`.
- Fill a number from memory. If it is not in `docs/extraction-findings.md`, it is a placeholder.
- Guess open access. `UNVERIFIED` becomes `paywalled` plus a debt entry, never `open`.
- Host a PDF, reproduce a figure, add authentication, storage, analytics or a CMS.
- Renumber or reuse an id or key.

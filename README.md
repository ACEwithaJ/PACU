# PACU rotation curriculum

A public, static, 20-day PACU curriculum for anesthesiology residents, with five bedside
algorithm cards. Sibling of the neuroanesthesia site, built the same way. The planning brief
is `docs/planning-brief.md`; the Phase 0 execution brief is `docs/phase0-execution-brief.md`;
the finished-site content target is `docs/content-coverage.md`.

**The one property that matters:** every clinical number on every page resolves to a key in
the source ledger, and every ledger key resolves to a DOI or a PMID. The build fails
otherwise. This repository is the machine that enforces that.

## Layout

```
data/ledger.csv            provenance — the 53-row ledger as delivered; never edited by scripts
src/content/ledger/*.yaml  authoritative — one file per ledger row, filename = key
src/content/days/day-NN.md one file per day, YAML frontmatter + six body slots
src/content/cards/card-*.md one file per algorithm card, YAML frontmatter + the algorithm
src/content/schema.mjs     the content contract (Zod) + DAY_PLAN + CARD_PLAN; imported by Astro AND the validator
src/content.config.ts      Astro collections: ledger, days, cards
scripts/ledger-import.mjs  CSV -> YAML + docs/ledger-debt.md      (npm run ledger:import)
scripts/validate.mjs       the fifteen-rule validator               (npm run validate)
scripts/selftest.mjs       proves each rule can fail               (npm run validate:selftest)
scripts/fixtures/          one deliberately broken content tree per rule, plus clean/
src/lib/keyplace.mjs       deterministic option rotation, shared by the page and the validator
src/lib/remark-cite.mjs    renders [[key]] citations and the authoring markers
src/pages/d/[id].astro     the day page — Day 3 is the visual contract
src/pages/c/[id].astro     the card page — full-screen, prints on one sheet
src/pages/about.astro      what the labels mean, and what the site does not collect
src/pages/404.astro        real 404 (Cloudflare Pages serves it with a 404 status)
src/pages/sitemap.xml.ts   generated sitemap
docs/ledger-debt.md        generated: every ledger gap the import carried through unchanged
docs/content-review.md     generated: every placeholder and practice-varies marker, for physician review
.github/workflows/         ci.yml · links.yml · bootstrap.yml
```

## Days and cards are planned, never ad hoc

`DAY_PLAN` and `CARD_PLAN` in `src/content/schema.mjs` are the only place a day or card is
declared. A file whose id is not on the plan fails rule 8. Ids are permanent: never renumber,
never reuse. Days 1–16 are the original map; 17–20 (urinary retention, PDPH, positioning
injuries, anaphylaxis) were added by the director on 2026-09-05.

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

A card has frontmatter (`id`, `title`, `purpose`, `day`, `evidence`, `draft`) and a free body:
the algorithm, usually a numbered list. No slots, but every other rule applies.

### Citation tokens

Cite a ledger row inline with double square brackets around its key:

```
Desaturation occurred in 9.0% of the room-air group [[fu-2004]].
```

The token renders as a link to that row's source card. **Every paragraph that contains a
number with a unit or a percent sign must contain at least one token** (rule 10). That includes
thresholds: TOF 0.9, an Aldrete cut-off, a STOP-Bang score. A number you cannot cite is
written as a placeholder, never filled from memory:

```
[NUMBER NEEDED: incidence of hypercapnia in PACU patients on oxygen]
[TODO_VERIFY: sugammadex dose at deep block]          (same meaning, alternative spelling)
[PRACTICE VARIES: voiding before ambulatory discharge] (say so rather than assert one answer)
```

All three markers are collected into `docs/content-review.md` on every validator run. A
placeholder in content with `draft: false` fails the build (rule 12): a placeholder cannot be
published.

`[NUMBER NEEDED]` and `[TODO_VERIFY]` are **hidden from readers**. They stay in the source and in
the review file, and they render only when a page is opened with `?editor=1`. `[PRACTICE VARIES]`
is reader-facing and renders as a "Local practice differs" callout.

### Quiz items

Required: `id`, `stem`, `options` (3–5, each `text` / `correct` / `explanation`), exactly one
correct. Optional now, to be made required once every authored day carries them:
`teachingPoint` (one sentence), `difficulty` (`basic` | `advanced` | `expert`),
`examAlignment` (array of `ABA-BASIC` | `ABA-ADVANCED` | `ITE` | `nursing`), `tags`
(lowercase-kebab). "All of the above" and "none of the above" are rejected (rule 11).

**Write the correct option first.** It does not render first: `src/lib/keyplace.mjs` rotates the
options by a hash of the item id, so the key lands in a position that varies between items, and
rule 13 fails the build if any position holds more than 40% of the keys across the site. If it
ever does, change `KEY_SALT` in that file and re-run; item ids are permanent and must not be
renumbered to fix a distribution. An audit on 2026-09-05 found 64 of 67 keys rendering at
position A, which is what this machinery exists to prevent.

**Ask about the patient, not about the site.** Rule 14 rejects a stem containing "this day",
"this page", "this site", "teaching page", "the ledger" or "the director". Editorial reasoning
belongs in the "What this does not show" slot, not in an item.


### General recommendations

A `[GENERAL: …]` marker carries a widely taught statement that this project has **not** read from
a primary source. The director added the mechanism on 2026-09-06 so that a resident is not left
without the number they need at the bedside while retrieval catches up.

```
[GENERAL: A bladder volume of about 500 to 600 mL is the threshold most institutions use…]
```

It renders as a callout headed "General recommendation" that tells the reader, in the same
breath, that the statement is unverified here and carries no ledger entry. It is therefore exempt
from rule 10, because the callout is a stronger disclosure than a citation would be. Every one is
listed in `docs/content-review.md`, and rule 15 refuses to let a page carrying one leave draft.

Two hard limits. A general recommendation must never be the keyed answer to a quiz item, and it
must be replaced by a cited sentence as soon as a retrieval round supplies the source. It is a
bridge, not a destination.
## The validator

`npm run validate` runs before every build and exits non-zero on any error. Output is one
line per finding, no stack traces:

```
RULE-NN <file> <line> <message>          error — fails the build
WARN RULE-NN <file> <line> <message>     warning — reported, does not fail
```

| Rule | What fails | Enforced by |
|---|---|---|
| 00 | any schema violation not tied to a numbered rule (bad enum, missing field) | Zod |
| 01 | slot heading missing, out of order, or unexpected | validator |
| 02 | `evidence` empty, or `trial_based` with no `rct` / `meta_rct` key | Zod + validator |
| 03 | `consensus_only` with no `consensus_basis` | Zod |
| 04 | `[[key]]`, `evidence` key, or `superseded_by:` key not in the ledger | validator (+ Astro `reference`) |
| 05 | ledger row with neither `doi` nor `pmid` (or `year` null) | validator — **warning** until strict |
| 06 | quiz item without exactly one `correct: true` | Zod |
| 07 | quiz option with an empty `explanation` | Zod |
| 08 | duplicate day / card / quiz id or ledger key; id ≠ filename; id not on the plan | Zod + validator |
| 09 | ledger `access: UNVERIFIED`, or key listed in `docs/ledger-debt.md` §1 | validator — **warning** until strict |
| 10 | number with a unit in a paragraph with no `[[key]]` (days and cards) | validator |
| 11 | quiz option reading "all / none of the above" | Zod |
| 12 | placeholder marker in a day or card with `draft: false` | validator |
| 13 | more than 40% of quiz keys render at the same option position | validator |
| 14 | a quiz stem that asks about the site rather than about patient care | validator |
| 15 | a `[GENERAL:]` recommendation in a day or card with `draft: false` | validator |

Rules 5 and 9 flip from warning to error when `STRICT_LEDGER` in `src/content/schema.mjs`
is set to `true`. Set it only when `docs/ledger-debt.md` sections 1 and 2 are empty. The
director flips it.

`npm run validate:selftest` runs the validator against `scripts/fixtures/` and asserts that
`clean/` produces nothing and each `rule-NN[-note]/` fails on rule NN and on no other rule. A
validator that has never been seen to fail is not verified.

## Workflows

| Workflow | Trigger | What it does |
|---|---|---|
| `ci.yml` | pull request; push to `main` | `npm ci` → self-test → validate → check `docs/content-review.md` is committed fresh → build |
| `links.yml` | weekly (Mon 11:00 UTC); manual | builds, runs lychee on `dist/**/*.html`, opens an issue on failure. This is the review process (planning brief D7). |
| `bootstrap.yml` | push to any branch except `main`; manual | the toolchain bridge: installs, generates the lockfile / ledger YAML / debt / content review, runs the full pipeline. Commits generated files back only when they changed (then push again so `ci` runs on the new head). The run log goes to the `ci-reports` branch as `reports/<branch>.md`: `git fetch origin ci-reports && git show origin/ci-reports:reports/<branch>.md` |

Production: https://utk-pacu-anesthesia.com (Cloudflare Pages project `pacu`, custom domain; `pacu-7ub.pages.dev` is the fallback).

There is no deploy step and there are no repository secrets. Cloudflare Pages deploys by Git
integration: build command `npm run build`, output directory `dist`.

## What this repository refuses to do

- Invent, look up or correct a DOI, PMID or year. Gaps go to `docs/ledger-debt.md`.
- Fill a number from memory. If it is not in `docs/extraction-findings.md`, it is a placeholder.
- Guess open access. `UNVERIFIED` becomes `paywalled` plus a debt entry, never `open`.
- Host a PDF, reproduce a figure, add authentication, storage, analytics or a CMS.
- Renumber or reuse an id or key.
- Present itself as clinical decision support. Every page carries the educational-only statement.

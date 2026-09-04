# PACU Rotation Curriculum Site — Planning Brief
Draft 1, 2026-09-04. Structured after the neuroanesthesia retrospective (Part 4 skeleton).

---

## 0. How to use this document

**Closed. Do not relitigate.**
- No authentication. Static site, client-side quizzes. (§3.1)
- Public URL, no login. Therefore a publication. (§3.2)
- The source ledger is the spine. No claim may cite a key absent from it. (§6)
- Two evidence modes, copied unchanged from neuro. (§5.2)
- No web content editor. (§9)

**Open, recommendation given, awaiting your approval.** §4 table and §10.

**Not yet answerable.** §8 deployment specifics, pending the preflight in §11.0.

---

## 1. What this is

A public, static, 16-day PACU curriculum site for anesthesiology residents, built from a
pre-existing verified source ledger. Sibling to utk-neuro-anesthesia.com, but inverted in
dependency: neuro authored content then verified sources; PACU has the ledger first and derives
the day map from it.

---

## 2. What success looks like

1. A resident can be sent one URL and work a day without an account.
2. Every clinical claim on every page resolves to a ledger key, and every ledger key resolves to
   a DOI or a PMID.
3. The build fails if (2) is violated.
4. Sixteen days exist, each with the full slot template populated or explicitly marked draft.
5. Every day declares its evidence mode, and `consensus_only` days name what they rest on.
6. A named review process runs on a schedule, not a review-date field. (§11, Phase 0 exit.)
7. No third-party PDF is committed, and no reproduced figure appears.

---

## 3. Hard constraints

**3.1 No auth.** Removes residents, enrollments, tokens, sessions, day_views, attempts,
assessments tables; the email provider; the D1 dependency; and neuro's Phases 1–2 entirely.
*Consequence accepted:* no per-resident progress, no adaptive spaced retrieval, no pre/post
delta, no director completion email. Returning quiz items become deterministic per day. Quiz
state lives in memory for the session and the page must say so.

**3.2 Public URL means publication.** Original synthesis only. Original figures only — no
reproduced, traced, or redrawn diagrams. No hosted PDFs. This is stricter than neuro because
there is no login boundary at all.

**3.3 No EZproxy.** Source links go to DOI resolvers, PMC, or publisher open-access pages.
*Advantage:* no institutional dependency to verify, and the failure mode that cost this project
several sessions (proxy prefix guessing) cannot occur. *Obligation:* where two comparable sources
exist, the ledger prefers the open-access one, and paywalled entries are flagged, not excluded.

**3.4 Nothing enters the repo from Drive except text I wrote.** Reading a chapter to understand
a topic is permitted. Deriving page structure or figures from it is not.

---

## 4. Decisions already made

| # | Decision | Status |
|---|---|---|
| D1 | No auth; static site | Closed |
| D2 | Public URL | Closed |
| D3 | Ledger is the schema spine; validator enforces key integrity | Closed |
| D4 | Two evidence modes: `trial_based` / `consensus_only` | Closed, copied from neuro |
| D5 | Physiology status and clinical-claim status as separate queryable axes | Closed, copied from neuro |
| D6 | Stable IDs, never reused, never renumbered | Closed |
| D7 | Review process in Phase 0, not Phase 3 | Closed — neuro's most expensive lesson |
| D8 | Day 16 becomes 16a, "handover is a transfer of responsibility" | **RECOMMENDED — §10.1** |
| D9 | Day 11 states both compartment-syndrome positions, resolves neither | **RECOMMENDED — §10.2** |
| D10 | Days 1, 4, 8, 12, 15 retag `trial_based` → `consensus_only`; Day 5 qualified | **RECOMMENDED — §10.3** |
| D11 | Day 15 reframed around the 2024 ASA *Standard*, not only the 2013 guideline | **RECOMMENDED — §10.4** |
| D12 | Day 9 claim changes from additive to multiplicative | **RECOMMENDED — §10.5** |
| D13 | Day 4 rewritten; its sources are ward studies | **RECOMMENDED — §10.6** |
| D14 | Day 7 presents Frank vs PROTECT as unresolved tension | **RECOMMENDED — §10.7** |

---

## 5. Content model

### 5.1 The day template — PROPOSED, needs your approval

I do not have neuro's seven slots. Proposed, to be replaced with the real ones if you have them:

1. `claim` — the one-line assertion the day defends
2. `why_it_matters` — the clinical consequence of getting it wrong
3. `mechanism` — physiology; tagged with its own status axis
4. `evidence` — the ledger-backed case, rendered as cards by evidence mode
5. `what_this_does_not_show` — the boundary of the claim; **mandatory, not optional**
6. `at_the_bedside` — what the resident does differently tomorrow
7. `check_yourself` — quiz items

Slot 5 is the one I would fight for. Half the findings in `extraction-findings.md` are boundary
problems — Driver and Sun are ward studies, VISION shows association not benefit, Salzwedel
measures information not outcome. A template without a dedicated boundary slot pushes those into
prose where they get softened.

### 5.2 Evidence modes — unchanged from neuro

- `trial_based` — randomised evidence supports the claim as stated.
- `consensus_only` — must name what it rests on, from a controlled vocabulary:
  `physiology` | `registry` | `guideline` | `practice_advisory` | `expert_consensus`

### 5.3 Status axes

`physiology_status`: established | contested | unknown
`clinical_claim_status`: supported | associational | uncertain | untested | refuted

Separate axes make "show me every day where the mechanism is established but the outcome claim is
associational" a query. On current evidence that query returns most of this rotation.

### 5.4 Validator rules — the load-bearing mechanism

Build fails on:
1. Missing required slot
2. Empty evidence array for the declared mode
3. `consensus_only` with no vocabulary term
4. Any claim citing a ledger key that does not exist (orphan key)
5. Ledger row with neither DOI nor PMID
6. Quiz item with zero or two correct options
7. Quiz option missing an explanation
8. Duplicate ID
9. Ledger row with `access: UNVERIFIED`
10. Any numeric claim in a slot without an adjacent ledger key reference

Rule 10 is new versus neuro and is a direct response to its failure mode: roughly 90 DOIs were
verified but several figures traced back to nothing. A number without a key should not compile.

**Rules 5 and 9 fail today.** See §6.2.

---

## 6. The source ledger

### 6.1 Current schema
`key, day, citation, doi, pmid, design, year, n, access, currency, supports, found_via, verified_on`

Three of the four fields the retrospective asked for already exist (`access`, `year`, `design`).

**Add one: `topic` — controlled vocabulary, the clustering key.** This is what turns the ledger
into a day map rather than a pile sorted by a day number someone already assigned.

**Add one more: `claim_support_type`** — whether the row supports the day's *mechanism*, its
*magnitude*, or its *boundary*. Cheap to fill, and it makes slot 5 auto-populatable.

### 6.2 State of the ledger, measured

53 rows. Distribution:

| design | n |
|---|---|
| cohort | 20 |
| guideline | 12 |
| rct | 7 |
| consensus_statement | 6 |
| advisory | 4 |
| case_series | 3 |
| meta_rct | 1 |

**Randomised evidence is 8 of 53 rows, 15%.** Per the retrospective's instruction to count this
before writing day one: PACU is a consensus-and-cohort field. That is a finding about
perioperative medicine, not a defect in retrieval. The template should expect `consensus_only`
to be the common case and should not make it look like a failure state.

**Blocking problems:**
- **12 rows have neither DOI nor PMID.** Validator rule 5 fails the build on all twelve.
- **10 rows have `access: UNVERIFIED`.** Rule 9 fails on those. On a public site a paywalled or
  unknown link is a dead end for most readers.
- **Days 10 and 13 have zero rows.** Days 6, 12, 14 have two; Day 15 has one.

Fixing the 12 identifier gaps is Phase 0 work, not later. They are the reason the validator
cannot be turned on.

### 6.3 Currency
41 current, 9 era_limited, 3 superseded. The superseded mappings are already encoded
(`superseded_by:gan-2026`, `:devereaux-2017`, `:aldecoa-2024`), which is exactly the right shape
and should be preserved.

---

## 7. Design system

Extract from one fully authored prototype day before Phase 0, per neuro's method. **Recommend
Day 3 (Fu 2004) as the prototype.** Reasons: it is the simplest day, single-source, now fully
verified, and it contains a teaching trap (Phase 2's desaturation direction reads backwards)
that will stress-test whether the template can hold a nuance without losing it.

The prototype is authority for visual treatment. This document is authority where the two
disagree.

---

## 8. Deployment and authoring workflow — DECIDED 2026-09-04

| Layer | Decision | Rationale |
|---|---|---|
| Hosting | Cloudflare Pages, Git integration | Automatic preview URL per branch; no deploy credentials ever enter a sandbox. Cloudflare steers new full-stack projects to Workers, but Pages remains supported and is the simpler path for a pure static site. |
| Generator | Astro, content collections | Zod schemas implement validator rules 1–3, 6–8 at build time; `reference('ledger')` implements rule 4 (orphan key) natively. Zero JS by default. |
| Content | Markdown + YAML frontmatter per day; ledger as a YAML data collection, one file per key | **The repo is the ledger's source of truth. The Google Sheet is a view.** |
| Quiz | Vanilla `<script>` island, in-memory state | No auth, no persistence; the page says so. |
| CI | GitHub Actions: `validate` → `build` on every PR; weekly `lychee` link check | Rules 5, 9, 10 need a script, not a schema. The cron is the D7 review process, in Phase 0. |
| Package manager | npm | Most likely allowlisted. Preflight confirms. |
| Where coding happens | Claude Code cloud sessions only | Each session pushes to its own branch → its own Pages preview URL. `main` is protected; merge by PR. Review the rendered preview, not the diff. |

Environment specifics (registry, allowlisted hosts, Node version) remain pending the Phase 0
preflight, which runs inside the sandbox as Step 0 of the execution brief.

## 9. Non-goals

| Not building | Because |
|---|---|
| Web content editor | The most common way projects like this die |
| Any auth, ever | Reintroduces the entire dropped stack |
| Per-resident tracking | Requires auth; half-measures reintroduce it |
| Hosted PDFs | Public URL; copyright |
| Reproduced or traced figures | Public URL; copyright |
| Adaptive spaced retrieval | Requires per-resident state |
| A review-date field without a review process | Neuro shipped this; andexanet went stale unnoticed |

---

## 10. Open questions — recommendation given, your call

### 10.1 Day 16 — RECOMMEND 16a

Adopt gaps.md's 16a: handover as transfer of *responsibility*, not information. Drop the capacity
half.

Reasoning: it is the only option whose evidence is verified, and the Salzwedel extraction now
gives it a spine. **Even with the checklist, only 48.7% of items were handed over** (up from
32.4%), and duration rose 86 s → 121 s. Verbal instruction without a written checklist changed
nothing. That trio is a better day than the improvement delta alone.

Note against 16c: Dexter's PACU staffing work *is* now reachable (see round-out-sources.md), so
the capacity option is no longer unsourceable. I still recommend against it — it is a second day
wearing the same coat, and it needs an appraisal idiom this ledger was not built for.

### 10.2 Day 11 — RECOMMEND stating both positions

Adopt gaps.md's wording verbatim. Tag `clinical_claim_status: contested`. Do not resolve.
The ESRA/ASRA advisory is paediatric in scope, which is a real limitation and should be visible
on the page rather than buried.

### 10.3 The retags — RECOMMEND accepting all of gaps.md §1

Days 1, 4, 8, 12, 15 → `consensus_only` with the vocabulary terms gaps.md assigns. Day 5 →
`trial_based` qualified as exposure analysis within an RCT cohort, if the taxonomy allows a
qualifier; otherwise `consensus_only` on `registry`.

**Add Day 7 to the retag list.** See 10.7.

### 10.4 Day 15 — RECOMMEND reframing

The 2013 practice guideline has no successor. But the **ASA Standards for Postanesthesia Care
were amended 23 October 2024**, and Standard V assigns discharge responsibility to a physician
using approved criteria. So "the field ignores a stale guideline" is only half true: the
guideline is stale, the standard is current and was revisited two years ago.

Proposed claim: *"Mandatory oral intake and mandatory voiding are institutional habit, not
criteria — the guideline declines to endorse them and a majority of surveyed ASA members favour
dropping them — while the current ASA standard assigns the discharge decision to a physician
against approved criteria without specifying what those criteria contain."*

That is a sharper day: the obligation is real and current, the content is undefined.

### 10.5 Day 9 — RECOMMEND changing additive to multiplicative

Not a judgment call, a correction. Apfel 2004: interventions act independently; relative risks
**multiply**; absolute risk reduction depends on baseline risk. Also decide which risk ladder the
day quotes — Apfel 1999's 10/21/39/61/79 (paper self-inconsistent, 78 vs 79 at four factors) or
Gan 2026's rounded 10/20/40/60/80 with low/medium/high banding. **Recommend Gan 2026's**, because
it is current, it is what the guideline algorithm uses, and rounded values do not invite spurious
precision.

### 10.6 Day 4 — RECOMMEND rewriting the claim

Both main sources exclude the PACU by design. Driver's monitoring began a median 4.3 h after
surgery; Sun's began on arrival to the ward after PACU discharge. The day cannot claim PACU
structural blindness from them.

Two honest options:
- **(a) Narrow to the PACU** and rest on Epstein 2014, which is about timing of desaturation
  within the PACU stay. Requires retrieving Epstein; not currently in the held set.
- **(b) Reframe the day** as the PACU discharge decision being a handoff into the window where
  these events actually happen — median 8.8 h to first event, peak 02:00–06:00, nurses missing
  90% of hour-long desaturations on the ward.

**Recommend (b).** It uses the evidence we have honestly, and it connects to Days 14 and 15,
which are already about the boundary of the PACU stay.

### 10.7 Day 7 — RECOMMEND presenting an unresolved tension

gaps.md reconciles Frank and PROTECT as covering different temperature ranges. The extraction
makes that reconciliation weaker than it looks. Frank's hypothermic arm averaged **35.4 °C**;
PROTECT's lower arm targeted **35.5 °C**. Those are the same temperature. Frank found a
significant cardiac difference at that separation; PROTECT, far larger, found none.

Rajagopalan sits at a median separation of only 0.85 °C within a 34–36 °C band, so it partly
extends below PROTECT.

Recommend the day state plainly that a 1997 trial of 300 patients and a 2022 trial of 5013 reach
different conclusions across overlapping temperature ranges, and that the field has not resolved
it. Retag `clinical_claim_status: contested`.

### 10.8 Day template — approve or replace §5.1

If neuro's seven slots exist somewhere, use those. Otherwise approve the proposal, and in
particular the mandatory `what_this_does_not_show` slot.

---

## 11. Build phases with exit criteria

**Phase 0 — Preflight and skeleton.**
*Exit: the director can send a resident a URL, and the validator is running in CI and passing.*

0. **Preflight, before the execution brief is written.** Confirm in the target environment:
   npm registry reachability; push branch protection; which API hosts are allowlisted; whether
   repo secrets exist; the deploy target. Write answers into the execution brief as a table.
   *This is the ten-minute check that cost neuro two sessions.*
1. Close the 12 rows lacking both DOI and PMID; resolve the 10 `access: UNVERIFIED`.
2. Add `topic` and `claim_support_type` to the ledger; populate `topic` for all 53 rows.
3. Cluster by `topic` to derive the day map. Confirm it against the existing day numbers and
   report divergences rather than silently renumbering.
4. Author Day 3 as the prototype; extract design tokens from it.
5. Validator in CI with all ten rules, failing the build.
6. Stand up the review process: at minimum a scheduled link check plus a quarterly re-read queue
   of every day tagged `contested` or `uncertain`.

**Phase 1 — The must-have days.**
*Exit: Days 3, 5, 8, 9, 14 are complete, validated, and reviewed.*

**Phase 2 — Remaining days with ledger support.**
*Exit: every day with ≥2 ledger rows is authored.*

**Phase 3 — The thin and empty days.**
*Exit: Days 10 and 13 either authored from the new sources or formally cut.*

**Phase 4 — Review pass.**
*Exit: an independent adversarial content review and a separate quiz-item review, both run
against the live site and read from page markup, both writing UNVERIFIED rather than supplying a
citation from memory.*

---

## 12. Known content debt, carried in

1. Botto 2014 never retrieved — the only outstanding MUST HAVE.
2. Gross 2014 evidence categories not extracted.
3. Ruetzler 2021 surveillance population/interval and class/LOE not extracted.
4. Days 10 and 13 have zero ledger rows.
5. Edrophonium discontinued in the US — any reversal content must not offer it. Confirm against
   the FDA discontinued drug product list before it becomes a quiz item.
6. Taenzer 2010 denominator erratum: per 1000 **patient days**, not discharges.
7. ASRA LAST checklist Figure 1 correction — graphics only from asra.com.
8. Dexmedetomidine BfArM Rote-Hand-Brief (EU) — check current US labelling before any delirium
   page recommends it.
9. PRODIGY PMID ambiguity: 32925318 vs 32304460.
10. Apfel 1999 internal inconsistency at the four-factor value (78 vs 79).

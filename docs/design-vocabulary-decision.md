# The `design` vocabulary — decided 2026-09-08

The director's decision: **add `expert_opinion` and `survey`.** Done, and this file is now the
record of why rather than a request.

## What changed

`DESIGNS` gains two terms:

- **`expert_opinion`** — correspondence, letters and editorials. Carries no data by definition;
  what such a document does and does not contain belongs in the row's `supports` field.
- **`survey`** — a survey of clinicians, which is not a cohort of patients.

## Why it was needed

Three documents had been read in full and could not enter the ledger, because every available term
would have been a fabrication indistinguishable from a design somebody verified. Two retrieval
rounds refused to guess, correctly, and the gap moved from bookkeeping to blocking content.

| Row | What it is | What it unlocked |
|---|---|---|
| `larson-1998` | Letter. Anesthesiology 1998;89(5):1293-1294 | The Larson maneuver on the laryngospasm card, with its evidence base visible |
| `weiss-engelhardt-2012` | Editorial, no abstract. Paediatr Anaesth 2012;22(12):1147-1149 | Provenance for the claim that paralysis resolves or excludes laryngospasm in every case |
| `renew-2026` | Cross-sectional survey, 915 analysed, 3% response | Day 1's currency: how little the 2023 monitoring guideline changed practice |

`aldrete-1995` was a fourth instance, carrying a placeholder design since round 3 because its
publisher classifies it as correspondence. It is now `expert_opinion`.

## The guarantee this does not weaken

Every other term in the vocabulary is a claim about study design that somebody verified, and the
worry was that adding terms for documents carrying no design would dilute that.

It does not, because rule 2 already does the work: a day whose `evidence_mode` is `trial_based`
must cite at least one key whose design is `rct` or `meta_rct`. Neither new term can carry a page
that claims to rest on trials. No validator change was needed.

## What it looks like on the page

The Larson maneuver is the case worth reading. The card now states where the technique comes from
and, in the same breath, that its author reports no cases, that his own literature search found no
mention of it, and that he cannot say why it works. Before this change the site had two options:
assert the maneuver with no source, or drop a technique that is taught everywhere. Neither was
honest. A term for correspondence made the third option possible, which is to teach it and show
exactly what it rests on.

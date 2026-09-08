# The `design` vocabulary now blocks real content — a decision for the director

This supersedes `docs/renew-2026-schema-question.md`, which framed the same problem when it
affected one row. Round 6 turned it into a content blocker.

## What is blocked

Three rows read in full, whose design is known, cannot enter the ledger because `DESIGNS` has no
term for what they are.

| Row | What it is | What it would unlock |
|---|---|---|
| `larson-1998` | Letter to the editor, expert opinion. Anesthesiology 1998;89(5):1293-1294, PMID 9822036 | **The Larson maneuver rung of the laryngospasm card.** This is the origin of the technique |
| `weiss-engelhardt-2012` | Editorial, no abstract. Paediatr Anaesth 2012;22(12):1147-1149, PMID 23134160 | Provenance for the claim that paralysis treats or excludes laryngospasm in every case, which turns out to trace to an editorial |
| `renew-2026` | Cross-sectional survey of ASA members, 915 analysed, 3% response | Day 1's currency: how little the 2023 monitoring guideline changed practice |

`aldrete-1995` is a fourth instance, already in the ledger with a placeholder design, because the
publisher classifies it as correspondence.

## Why the existing terms do not fit

`DESIGNS` is rct, meta_rct, cohort, case_series, guideline, consensus_statement, advisory.

A letter reporting no cases is not a case series. An editorial is not an advisory, which this
project uses for regulatory documents and society advisories. A survey of clinicians is not a
cohort of patients. Writing any of those would be a fabrication, and once written it would be
indistinguishable from a design somebody verified.

Round 6 refused to guess, and delivered the rows with the field empty and an explanation. That was
correct behaviour and it is the second round running that the field has forced this.

## Why it matters more than it looks

The laryngospasm card is the largest unsourced block on the site, and it is built substantially
out of correspondence. The Larson maneuver has no trial behind it; its evidence base is a 1998
letter in which the author writes that he has used the technique countless times with complete
success, that a literature search revealed no mention of it, and that no sound scientific answer
can be given for why it works. That is precisely the kind of provenance this site exists to make
visible, and the vocabulary currently prevents it from being cited at all.

The alternative to citing it is describing it without a citation, which is the one thing this
project does not do.

## The options

1. **Add `expert_opinion` and `survey`.** Round 6's recommendation. `expert_opinion` would cover
   letters and editorials; `survey` covers clinician surveys. Both are honest labels for real
   document types, and both would carry their weakness on the face of the row.
2. **Add `expert_opinion` only**, and hold surveys out. Two of the three blocked rows are
   correspondence.
3. **Change nothing** and accept that correspondence cannot be cited on this site. The
   laryngospasm card then keeps unsourced steps indefinitely, or loses them.

## The argument against option 1, stated fairly

Every current term is a claim about study design that somebody verified. Adding terms for document
types that carry no design weakens that guarantee unless the validator treats them specially, for
example by refusing to let a `trial_based` day rest on an `expert_opinion` row, which rule 2
already does for randomized designs.

## Recommendation

Option 1, with rule 2 extended so that a page resting on `expert_opinion` cannot claim to be
trial-based. That keeps the guarantee where it matters and lets the site say plainly that the
Larson maneuver rests on a letter.

This is a schema change and therefore not something this session will make unasked.

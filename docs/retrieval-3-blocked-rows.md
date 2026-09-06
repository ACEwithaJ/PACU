# Retrieval round 3 — ledger rows that could not be created

Round 3's report says a set of new ledger rows was "supplied". The CSV that would carry them
was not delivered with the two markdown reports, and this project does not create a ledger row
from a citation it has not been given in full. Nothing below was invented, guessed, or filled
from memory.

Until the round-3 `new-ledger-rows.csv` arrives, the following claims stay off the site or stay
marked as general recommendations, and the pages say so in the places a reader would look.

| Row the report describes | What it would unlock | What is missing |
|---|---|---|
| `gross-2006` ASA OSA guideline, original | The 3 h and 7 h consultant medians on Day 14, correctly attributed to a superseded document | Authors, title, DOI, PMID. Report gives only "Anesthesiology 2006;104:1081-1093" |
| `das-extubation-2012` Popat 2012 | Day 2 and the laryngospasm card could cite the negative finding rather than assert it | DOI, PMID |
| `aspan-normothermia-2010` | Day 7's temperature target, if the target is ever read | Full text is paywalled; the target itself was never read, so the row would be empty where it matters |
| Dantrolene FDA labels (three SPL set IDs given) and the MHAUS guidance | Day 7 could cite the 1 mg/kg minimum and 10 mg/kg cumulative maximum against the MHAUS 2.5 mg/kg, instead of carrying both as general | Citation strings; the report gives set IDs only, and MHAUS has no revision date |
| Edrophonium Drugs@FDA record | Closes the standing Day 1 placeholder | A citable record identifier |
| `takayama-2021` Horner after interscalene block | Day 11 | Report says "DOI verified" but does not print the DOI |
| `unlu-2007` brachial plexus after sternotomy | Day 19, cardiac surgery only | Full citation, DOI, PMID |
| `bjerregaard-2016` 500 vs 800 mL catheterization thresholds | Day 17's 800 mL correction could be cited rather than described | DOI, PMID |
| `renew-2026` | Day 1 currency | Identifiers are complete in the report, but the PubMed record has no abstract, so the row would carry no finding |
| SASM 2018 | Day 14 | Report states identifiers are only partly verified |

## Identifiers the report found but this pass did not apply

- `paqueron-2002` DOI 10.1093/bja/aef262 and `warner-1994` DOI 10.1097/00000542-199412000-00006
  were read from Europe PMC and confirmed to resolve, but not from a PubMed record. The report's
  own rule keeps them UNVERIFIED, and both rows already carry a PMID, so nothing is gained by
  overriding that. Left alone.
- `hausmann-1991` has no DOI, confirmed absent rather than merely unfound.
- Legacy *Anesthesia & Analgesia* rows carry a `10.1097` DOI where the publisher displays
  `10.1213`: observed for `white-1999` and `kranke-2002`, and `wang-2000` and `leslie-1995` are
  the same vintage. Both prefixes resolve. Reconciling them is a director decision about which
  identifier the ledger is meant to hold, and it should be one pass, not one row at a time.
- `aldrete-1995` is classified by its publisher as correspondence, a letter to the editor. The
  `DESIGNS` vocabulary has no term for a letter. Recorded in the row's `supports`; adding a
  vocabulary term is a schema change and therefore a director decision.
- `gross-2014` carries no free or open badge, unlike every other ASA guideline row checked,
  while the ledger recorded it as `open`. Its access has been set back to UNVERIFIED so that it
  reappears as debt rather than asserting an access status in either direction.

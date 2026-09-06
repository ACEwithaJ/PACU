# Response to the remediation report of 2026-09-05

The report was written from the rendered site at build `f7a9643`, with the quiz keys and
explanations extracted from the page attributes. It is accurate about what it could see. This
file records what was acted on, what was rejected, and what was converted into a retrieval
target, so that a later session does not re-litigate any of it.

## Acted on in full

| Finding | What changed |
|---|---|
| P0-001 delayed-emergence order | Day 13 is ABC-first in Mechanism and At the bedside; the d13q1 explanation follows. The old string is gone from the repository. |
| P0-002 Standard III | Day 16 quotes the standard and keeps the practice-varies note only for the checklist and who leads. |
| P0-003 kPa conversion | Day 20 reads "below 3 kPa, about 22 mmHg". |
| P1-001 key position | `src/lib/keyplace.mjs` rotates options by item id; rule 13 fails above 40% at one position; fixture `rule-13` proves it fires. |
| P1-004 Day 2 claim inverted | Retitled and re-claimed to match the 77% figure the page already carried. |
| P1-012 and d08q1 wrong explanations | Both rewritten. |
| P2-002 scaffolding leaks | Placeholders hidden from readers, visible at `?editor=1`; practice-varies rendered as a callout. |
| P2-004 meta items | Rule 14 rejects them. Six stems reworded, two items replaced with clinical vignettes. |
| P2-006 navigation | Prev/next between authored days, footer links. |
| P2-007 soft 404 | Real 404 page, sitemap, robots.txt. |
| P2-008 contrast and size | Small text at 12.5px or more; low-contrast ink darkened. |
| P2-009 quiz semantics | Radiogroup, aria-checked, arrow keys, focus ring. |
| P2-019, P2-020, P3-005 | Footer and index wording; no machine tokens, no "Phase 0 skeleton", no false promise about DOIs. |
| P3-006 analytics | Disclosed in the footer and on the About page. |

## Rejected, with the reason

**P2-001, remove the DRAFT banner.** The banner is not a defect. Only the rotation director
clears clinical content, and no day has been cleared. The mechanism the report asks for already
exists: `draft: true` in the frontmatter. What is missing is the director's review, not code.

**The report's own clinical numbers.** The report supplies figures from memory in several places
and marks most of them UNVERIFIED itself: the OSA monitoring medians of 3 and 7 hours, the
36.0 °C transfer threshold, the 800 mL bladder volume, the modified Aldrete and PADSS item lists,
the MANAGE hazard ratio, dantrolene 2.5 mg/kg, physostigmine 0.5 to 2 mg, the PONV dose table.
Every one of them may well be right. None of them can go on a page under this project's rule
that a number is read from the primary record or it is a placeholder. They are retrieval targets
and they are in `COWORK-PROMPT-retrieval-3.md`.

**P1-003, the "not read" contradiction.** The report is right that it is an integrity problem
and wrong about the remedy in one respect: the fix is to read the full texts, which round 3 does,
not to delete the ledger's honesty about what was read. The `supports` notes stay until a
retrieval replaces them.

## Converted into retrieval targets (round 3)

POQI 2024; MANAGE and the ESC 2022 surveillance recommendation; Chou 2016 multimodal analgesia;
NICE CG65 and ASPAN normothermia; the ASA OSA discharge medians; the three discharge instruments'
items; the 2018 and 2019 ASA advisories' recommendation text; SASM 2018; AGS 2015 and the ESAIC
treatment stance; adult delirium screening tools; Lepousé 2006; Baldini 2009; the laryngospasm
ladder; dantrolene and physostigmine labels; the Garvey intramuscular dose and the Resuscitation
Council divergence; PDPH incidence by needle.

## Still open for the director

1. Clearing draft flags. Nothing else unblocks the site as assigned reading.
2. The local numbers in every `[PRACTICE VARIES]` note: this institution's discharge temperature,
   pressure thresholds and agents, laryngospasm dose, OSA pathway, bladder threshold, handover
   checklist, monitoring after discharge. Each becomes a "Local protocol" line once supplied.
3. The five algorithm cards: draft them from the existing days, or author them yourself.
4. Whether to add the report's suggested new days (bronchospasm and aspiration, cardiac events
   other than MINS, fluids and kidney injury, electrolytes, pediatric, obstetric, neuraxial
   recovery, minor injuries). They are reasonable and none has sources in the ledger yet.
5. Learning objectives per day. The report is right that the claim line is a thesis, not a
   measurable objective. Writing them is cheap; agreeing the verbs is a director decision.

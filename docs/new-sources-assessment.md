# Assessment of the 8 PDFs added 2026-09-04

All eight sit in the PACU folder root, not in the tier subfolders (01/02/03 are all still empty
in Drive; a new "PACU-ready" folder exists alongside them).

---

## ACCEPT — fills a zero-source day

### 1. Aubrun F, Mazoit JX, Riou B. Postoperative intravenous morphine titration.
**Br J Anaesth 2012;108(2):193–201. doi 10.1093/bja/aer458. PMID 22250276.**
Citation now fully verified, including the end page that was UNVERIFIED in round-out-sources.md.

**This is Day 10, and it makes the day's claim almost verbatim.** The claim was "endpoint is
function, not a score." Aubrun's summary states: *"Sedation is frequent during i.v. morphine
titration and should be considered as a morphine-related adverse event and not evidence of pain
relief."*

Numbers the day can use:
- >90% achieve pain relief on a titration protocol; mean dose 12 (7) mg, median 4 boluses
- ED50 for analgesia ~10.2 mg; ED50 for sedation ~15 mg; 20 mg sedates >90%
- Of patients whose titration was stopped for sedation, **25% still had VAS ≥50** and only 50%
  had VAS ≤30 — titration stopped before pain relief in a quarter of cases
- Aubrun 2001 PACU cohort (n=1050): sedation 59.8%, nausea/vomiting 11.5%, respiratory
  depression 0.4%, severe respiratory depression 0
- Mean time to complete pain relief 15 min (range 5–60)
- Elderly: weight-normalised i.v. titration dose is **not** age-modified, but ward s.c. morphine
  over the first 24 h falls ~40%

**Design caveat:** narrative review, literature searched only to June 2010. It fails the ledger's
support bar and is 14 years stale on its own search. Day 10 stays `consensus_only` on
`expert_consensus`, exactly as gaps.md §7 predicted.

**A conflict you need to resolve — Days 3 and 10 contradict each other.**
Aubrun's protocol stops titration at SpO2 <95%, justified because *"most patients in the PACU
receive supplemental oxygen."* Day 3's entire point (Fu 2004) is that on supplemental oxygen,
SpO2 does not detect hypoventilation. So Day 10's safety trigger is the monitor Day 3 says is
blind in that exact setting. That is a real tension between two days of the same rotation and it
should be taught deliberately rather than left for a resident to notice.

### 2. Bayable et al. Ann Med Surg 2023;85(9):4321–4328 — delayed awakening (already assessed)
### 3. Ellis et al. MedEdPORTAL 2017 — delayed emergence simulation case
Together these give **Day 13** its first sources. Note Ellis is 2017; check currency before use.

---

## ACCEPT WITH CAVEATS

### 4. Bai Y, Zhu S, Chen X. Impact of standardized nursing protocols in the PACU on patient
safety: a meta-analysis. **Medicine (Baltimore) 2026;105(29):e49623.**
14 studies (11 RCT, 3 cohort), 4268 patients. Adverse events OR 0.37 (95% CI 0.23–0.60);
PACU LOS MD −10.65 min (−19.10 to −2.19); comfort MD 1.88; nursing satisfaction OR 3.18.

Relevant to **Day 16** — it is randomised-weighted evidence that standardisation changes
outcomes, which the Salzwedel pair cannot supply.

**Three problems, all visible in the paper:**
- Heterogeneity for LOS is **I² = 100%**. Subgroup analysis failed to resolve it. A pooled mean
  difference under I²=100% is close to uninterpretable.
- Internal inconsistency: the text says *"Data on PACU length of stay were available from 11
  studies"* then cites four references.
- Figure captions are transposed. Fig 3 is captioned length-of-stay but section 3.3.1 describes
  it as the adverse-events plot; Fig 5 is captioned adverse events.
Usable, but only with the I² stated on the page.

### 5. Maroufi et al. **BMC Med Inform Decis Mak 2025;25:146.** ML prediction of PACU discharge
readiness. n=830, single centre (Tehran), cross-sectional. Random Forest and ANN, AUC 0.75–0.88
against staff judgement and Aldrete.

**This is direct support for gaps.md's option 16b**, "every PACU discharge decision is a
prediction." It also documents that staff decisions "generally aligned with the Aldrete score
but exhibited subjectivity in borderline cases."

Population is narrow: ASA I–II only, ages 18–60, mean PACU stay 21 min. Convenience sampling,
single centre, no external validation. Fine as a framing source, not as a basis for any number.

---

## DO NOT USE AS SUPPORT

### 6. Deshmukh PP, Chakole V. Post-Anesthesia Recovery: A Comprehensive Review of Sampe,
Modified Aldrete, and White Scoring Systems. **Cureus 2024;16(10):e70935.**

**Recommend excluding, on your own established precedent.** method.md excluded Medscape's
guideline summaries because they "carry an explicit disclosure that AI tools were used in
drafting." This paper's Acknowledgements disclose ChatGPT, Grammarly, and Paperpal in drafting.
Same standard, same outcome.

**Independent reason to distrust it.** It reports the SAMPE checklist as having *"a sensitivity
of 65.5% (95% CI: 60.7–70.1) and a specificity of 72.6% (95% CI: 66.4–78.3) in identifying frail
or prefrail individuals when compared to the Fried frailty phenotype."* Those figures are cited
to its reference [37], Shourick et al., a postal self-screening tool for frailty in French older
adults. That has nothing to do with PACU discharge readiness. A sensitivity/specificity pair has
been imported from an unrelated instrument and presented as a property of a discharge checklist.

This is precisely the failure your neuro retrospective names: "a sensitivity/specificity pair
with no published criterion." If Day 15 quotes it, the error propagates into the curriculum.

The underlying primary source is real and worth getting instead:
**Prates A, Colognese B, Caumo W, Stefani LC. Braz J Anesthesiol 2022;72:200–6.**
That paper is where the SAMPE checklist and the 26% more-conservative figure actually come from.

### 7. `pacu.pdf` — Dexter, "Post-Anesthesia Care Unit Staffing and Patient Flow"

**This is not a research article.** It is a consulting services brochure from the University of
Iowa, describing a staffing assessment offered at a stated fee of $2500. My round-out-sources.md
described it as "a standalone review." That was wrong, and I should have opened it before saying
so.

It is still useful as a **finding aid**: it carries a clean reference list of nine real Dexter
papers on PACU staffing and patient flow, 1997–2013, which is the operations literature Day 16c
would need. Treat it exactly as method.md treats the APSF newsletter — `found_via` only, never a
source row.

### 8. `Chapter 56_ Postanesthesia Care.pdf` — textbook chapter

**Copyright boundary.** Your source-material rules permit reading a chapter to understand a topic
and forbid deriving structure or figures from it, and no third-party PDF may enter the repo.
This is a publisher PDF now sitting in both Drive and the Claude project. Neither is the repo, so
nothing is breached yet, but it must not travel further. I have not read it and do not plan to
unless you want orientation from it.

Also note the site will be **public with no login**, which makes the copyright constraint
stricter than it was for neuro, per planning-brief §3.2.

---

## Net effect on the gaps

| Gap | Before | Now |
|---|---|---|
| Day 10 | zero sources | Aubrun, claim nearly verbatim |
| Day 13 | zero sources | Bayable + Ellis + 2025 differential review |
| Day 16 capacity half | zero sources | 9 Dexter citations reachable via the brochure |
| Day 16 handover half | information-transfer only | Medicine 2026 meta-analysis adds outcomes |
| Day 15 | 1 source | ML discharge-prediction paper supports the 16b framing |

Still outstanding: **Botto 2014**, the only MUST HAVE never retrieved.

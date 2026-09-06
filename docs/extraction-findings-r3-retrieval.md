# Extraction findings — retrieval round 3 (2026-09-06)

Retrieval date: **2026-09-06**. Deliverables live in `retrieval-2026-09-r3/`, outside the repository. Nothing in the repository was edited.

> **Filed under a distinct name.** `docs/extraction-findings-3.md` is the director confirmations file of the same date and is a different document; it was not overwritten. This is the round-3 retrieval report.

## Ovid access

**Ovid was allowed, and the browser session was authenticated to the University of Tennessee Health Science Center, Preston Medical Library.** Section A was therefore possible and is largely complete. Full texts were read on `www.ovid.com` and `journals.lww.com`. This authenticated session is also why Section C could not be run the way the brief specifies; see the note at the head of `ledger-debt-resolutions-3.md`.

Interfaces that worked: Ovid and LWW full texts, ScienceDirect, JAMA Network, Wiley landing pages, DailyMed, Drugs@FDA, ClinicalTrials.gov API, das.uk.com, mhaus.org.

Interfaces that did not: PubMed record pages served reCAPTCHA to the automated fetcher for most of the session, so **almost no PMID in this round was read off a PubMed record**; every affected identifier is marked `UNVERIFIED` with the route actually used. `pmc.ncbi.nlm.nih.gov` likewise. Elsevier `linkinghub` returns empty bodies to the fetcher; `rapm.bmj.com` disallows all paths in robots.txt.

---

## Section A — full texts round 2 could not read

### A1. `gan-2026` — Fifth Consensus Guidelines. FOUND AND VERIFIED, in full.

Read at `www.ovid.com`, Anesthesia & Analgesia 143(3):497-513, September 2026, DOI 10.1213/ANE.0000000000007816. The article carries a **FREE** badge, so `gan-2026` access should be **`open`**, not `paywalled`.

**Guideline 3, verbatim heading:**
> GUIDELINE 3. ADMINISTER PONV PROPHYLAXIS USING 2 INTERVENTIONS IN ADULTS AT ANY RISK FOR PONV

**Correction to the director's confirmation of 2026-09-06.** `docs/extraction-findings-3.md` records Guideline 3 as ending "IN ADULTS AT ANY RISK." The heading ends **"AT ANY RISK FOR PONV"**. Minor, but it is recorded in the repository as verbatim.

**Material correction — the rationale sentence is misattributed.** The repository records, as the Guideline 3 rationale: *"clinicians' adherence to risk-based adjustments in PONV prophylaxis is suboptimal."* That sentence **does exist in the guideline, but it sits in Guideline 5, the paediatric section**, in the paragraph on paediatric algorithmic management, and it is about paediatric risk models. It is not the stated rationale for adult Guideline 3.

The adult rationale sits under Guideline 1, verbatim:
> There is ongoing discussion on adopting a more liberal approach to PONV prophylaxis to address undetected risk factors, non-adherence to risk-stratified PONV algorithms and ambiguity in interpreting individual risk factors. This is supported by increased adoption of general multimodal PONV prophylaxis as part of enhanced recovery pathways. Increasing evidence supports the safety of antiemetics at perioperative dosages, this may shift the paradigm further towards liberal combination antiemetics. **However, practice shifts towards general, multimodal prophylaxis does not discredit the validity of PONV prediction scores, nor an appropriately implemented risk-adapted PONV protocol.**

That final sentence is not on Day 9 and it materially softens the day's framing.

**Guideline 4, verbatim heading:**
> GUIDELINE 4. PROVIDE ANTIEMETIC TREATMENT TO PATIENTS WITH PONV WHO DID NOT RECEIVE PROPHYLAXIS OR WHEN PROPHYLAXIS FAILED

The rescue-class sentence Day 9 quotes as "Guideline 4, verbatim" is body text under that heading, not the heading itself. Verbatim, with its qualifiers:
> Patients should receive rescue treatment from a different pharmacological class to the prophylactic agents administered. If more than 6 hours has elapsed, administration of a second dose of a 5-HT3 receptor antagonist or butyrophenone may be considered if no alternatives are available. Clinicians should avoid re-dosing long-acting antiemetics such as aprepitant, fosaprepitant, and palonosetron in the PACU. Transdermal scopolamine is not an effective rescue agent due to its slow onset.

Rescue evidence, verbatim: ondansetron 4 to 8 mg and droperidol 1 to 1.25 mg effective in antiemetic-naive patients (A3); metoclopramide 10 mg limited efficacy (A2); propofol 20 to 40 mg effective (A3). For patients failing ondansetron prophylaxis, other 5-HT3 antagonists gave no further benefit over redosing ondansetron or placebo (A3, low certainty), while **promethazine 6.25 mg (B1, low certainty) and amisulpride 10 mg (A3) were effective**.

**Three or more risk factors — the guideline says something different from Day 9.** Verbatim:
> In patients with 3 or more PONV risk factors, there is a paucity of clinical data on the use of 3 or more prophylactic interventions. We therefore recommend maximizing the use of risk mitigation strategies.

And: *"Published evidence on combination therapy with 3 or more agents remains limited."* Acupoint stimulation is offered as the addition for patients "who require 3 or more prophylactic interventions" (A1).

Day 9's general recommendation currently reads that "adding a third agent to the two-intervention floor is widely taught, though the guideline itself notes there is little trial evidence." The guideline does not merely note thin evidence; it **redirects to risk mitigation instead of a third agent**. This should be rewritten, not just softened.

**Doses, verbatim from Table 1 and the agent sections:**

| Agent | Guideline dose | Evidence | Timing |
|---|---|---|---|
| Ondansetron | 4 mg IV (or 16 mg ODT 1 h before induction) | — | slow IV injection |
| Dexamethasone | 4 to 8 mg IV | A1 | at induction (A1) |
| Droperidol | **0.625 mg** for prophylaxis | A1 | end of surgery (A1) |
| Haloperidol | 0.5 to 2 mg IV | A1 | induction or end of surgery |
| Amisulpride | 5 mg IV prophylaxis; **10 mg IV is the FDA recommended rescue dose** | A2 / A3 | — |
| Palonosetron | 0.075 mg IV | A1 | — |
| Aprepitant | 40 to 80 mg PO | — | — |
| Metoclopramide | 10 mg | — | **not recommended unless other dopamine antagonists are unavailable** |
| Scopolamine | transdermal patch | A1 | prior evening or 2 h before surgery |

Dexamethasone detail, verbatim: *"The recommended PONV dose of dexamethasone is 4 to 8 mg... and 8 mg dose seemed to have the optimal antiemetic and analgesic efficacy."* A Cochrane review of 38 studies and a subsequent large RCT found a single dose up to 8 mg did not increase postoperative infection, including in diabetes (A1). Transient hyperglycaemia in diabetes is small, *"2 mmol/L or 36 mg/dL"*, and was not associated with impaired wound healing.

Note against Day 9's current text: the guideline's droperidol **prophylaxis** dose is 0.625 mg, not "0.625 to 1.25 mg". 1 to 1.25 mg is the **rescue** dose.

**Intravenous aprepitant added; casopitant removed.** Both confirmed. Verbatim on aprepitant: *"It is also available as a prodrug for slow IV infusion (fosaprepitant) and injectable lipid emulsion (Aponvie®)... available in a 32 mg dose and administered as a 30-second IV injection, with 97% of receptor occupancy achieved within 5 min of administration. It is the only IV formulation with the FDA indication for PONV prophylaxis."* Verbatim on casopitant: *"Casopitant is removed from recommendations due to a lack of widespread global availability."*

**Risk ladder and bands, verbatim.** Figure 1A legend: *"0, 1, 2, 3, and 4 risk factors correspond to PONV risks of approximately 10%, 20%, 40%, 60%, and 80%, respectively."* Guideline 1: *"Patients without any Apfel risk factors should be considered low risk; those with 1 to 2 risk factors as medium risk; patients with ≥3 as high risk of PONV."* Both match Day 9 as written.

**New in the Fifth that Day 9 does not carry, and that touches Day 17:** *"Recent evidence suggests that transdermal scopolamine may increase the risk of postoperative urinary retention, especially following urogynecologic procedures."*

### A2. `aldecoa-2024` — ESAIC delirium guideline. FOUND AND VERIFIED, in full.

Read at `www.ovid.com`, Eur J Anaesthesiol 41(2):81-108, February 2024, DOI 10.1097/EJA.0000000000001876. Badges: **FREE, OPEN**, published CC BY 4.0. Ledger `open` is correct.

**Exclusion of hypoxaemia, hypoglycaemia and pain before labelling delirium or agitation: NOT FOUND.** The guideline contains 13 numbered recommendations (2.1, 3.1–3.4, 4.1–4.3, 5.1–5.2, 6.1–6.3) and none of them states this. The nearest text is the symptom-oriented treatment list and a statement that alcohol-withdrawal delirium is *"a clinical diagnosis of exclusion, after considering all other diagnoses."* **The Day 12 placeholder should be closed as NOT FOUND in this guideline**, and the rule either dropped or sourced elsewhere.

**Screening-tool recommendation: a material qualification of Day 12's claim.** The sentence Day 12 is built on is not a numbered recommendation. It is the **evidence-inclusion definition in the methods**, verbatim:
> POD had to be measured with a validated POD screening tool, at least once per day for at least 3 days starting in the recovery room or postanaesthesia care unit on the day of surgery or, at latest, on postoperative day 1.

That is a rule the task force applied when deciding which studies to admit as evidence. The only place the guideline asks anyone to start screening in recovery is in the Discussion, and it is addressed to researchers, verbatim:
> the Task Force and Advisory board of this guideline further recommends **for all future POD studies** to start screening for POD in the recovery room. The screening for POD should be continued at least until day 3 after surgery and at least twice a day.

Day 12 currently says the guideline "requires screening with a validated tool from the day of surgery onward." That overstates what the document does. It is a study-inclusion definition plus a research recommendation, not a graded clinical recommendation. This needs the director's decision before Day 12 leaves draft.

**Which validated tools are named: NOT FOUND in the main text.** The tools are in Supplement Table S2, which was not retrieved. CAM-ICU, Nu-DESC and 4AT do not appear by name in the article body.

**A PACU-relevant sentence Day 12 does not carry, verbatim:**
> If POD is detected, patients should not be discharged from the recovery room to the ward without having started cause-based and symptom-based treatment. The longer the delirium lasts and the later the treatment starts, the more likely cognitive decline and worse clinical outcomes may be expected.

**Dexmedetomidine recommendations, verbatim with grades:**
- **3.1** *"In patients undergoing surgery, we do not suggest the use of any drug as a prophylactic measure to reduce the incidence of POD."* Quality **Low**, strength **Weak**.
- **3.2** *"When dexmedetomidine is used intra-operatively or postoperatively with the aim to prevent POD, we recommend balancing the expected benefits against the most important side effects (bradycardia and hypotension)."* Quality **Moderate**, strength **Strong**. (Dexmedetomidine was associated with bradycardia, OR 1.60, 95% CI 1.30 to 1.96.)
- **6.3** *"We suggest using dexmedetomidine for the treatment of POD in cardiac surgery."* Quality **Very low**, strength **Weak**. The guideline is explicit that no recommendation is possible for non-cardiac surgery because seven of eight studies were cardiac.

**Haloperidol, verbatim with grade:**
- **6.1** *"We suggest using low-dose haloperidol for the treatment of POD if nonpharmacological measures fail. We advise a short-term, symptom-oriented therapy. The application should be bolus-wise and with the lowest dose possible. Use antipsychotic drugs with caution or not at all for people with preexisting neurologic conditions, such as Parkinson's disease or Lewy bodies dementia."* Quality **Very low**, strength **Weak**.
- Dosing, verbatim from the symptom-oriented list: *"haloperidol, e.g. starting with 0.125 to 0.25 mg single dose, maximum dose per day less than 3 mg (mortality increased ≥ 6 mg day−1!)"*.
- **6.2** *"The use of benzodiazepines for the treatment of delirium in postoperative patients is not suggested."* Quality **Very low**, strength **Weak**, with the alcohol-withdrawal exception stated.

The remaining recommendations (2.1 risk factors; 3.3 anaesthesia type; 3.4 biomarkers; 4.1–4.3 preoperative screening, team sharing, multicomponent non-pharmacological interventions; 5.1–5.2 EEG monitoring) were also captured verbatim and are available on request.

### A3. `aldrete-1995` — items and threshold. NOT FOUND. No access.

ScienceDirect states, on the article page, that **"The University of Tennessee Preston Medical Library does not subscribe to this content on ScienceDirect."** Even the authenticated session cannot read it.

Two facts worth recording anyway, read off the publisher landing page: the item is classified by the publisher as **"Correspondence / Letter to the editor"**, J Clin Anesth 1995, February, Volume 7, Issue 1, pages 89-91. That confirms the ledger's suspicion that the `design` value is a placeholder: this is a letter, not a study. The five items and the discharge threshold remain unread.

### A4. `chung-1995-padss` — items and threshold. THRESHOLD FOUND; ITEMS NOT FOUND.

Same "does not subscribe" banner. The abstract on the publisher page gives, verbatim: *"Evaluations were repeated at 30-minute intervals until patients obtained a Post-Anesthetic Discharge Score of at least 9 and fulfilled the Clinical Discharge Criteria."* Design, verbatim: *"randomized, open study"*; 247 ambulatory general-anaesthesia patients. **The five PADSS items are not in the abstract and the full text is inaccessible.**

### A5. `white-1999` — items and threshold. THRESHOLD FOUND VERBATIM; ITEMS NOT FOUND.

Full text read on Ovid. Threshold, verbatim:
> A minimal score of 12 (with no score <1 in any individual category) would be required for a patient to be fast-tracked (i.e., bypass the postanesthesia care unit) after general anesthesia.

Also, verbatim, the comparison rule used in the study: patients were *"considered fast-track-eligible if they achieved a score of 10 using the modified Aldrete scoring system or a score of ≥12 (with no score <1 in any individual category) using the new scoring system."*

**The seven items are NOT extractable.** The scoring tables on the Ovid page are rendered as images with no alt text and no HTML table (0 `<table>` elements, 24 images). The item list needs a human to read the table image, or the PDF.

**Identifier note:** the publisher displays this article's DOI as **10.1213/00000539-199905000-00018**; the ledger carries 10.1097/00000539-199905000-00018. Both resolve. The same 10.1097 versus 10.1213 divergence appears for `kranke-2002` and `urmey-1991`. See `ledger-debt-resolutions-3.md`.

### A6. `thilen-2023` — recommendation sentences with grades. FOUND AND VERIFIED.

Full text read; carries a **FREE** badge, consistent with the ledger's `open`. All four relevant recommendations, verbatim, each with both grades:

- *"When neuromuscular blocking drugs are administered, we recommend against clinical assessment alone to avoid residual neuromuscular blockade, due to the insensitivity of the assessment."* Strength of recommendation **Strong**; strength of evidence **Moderate**.
- *"We recommend quantitative monitoring over qualitative assessment to avoid residual neuromuscular blockade."* **Strong** / **Moderate**.
- *"When using quantitative monitoring, we recommend confirming a train-of-four ratio greater than or equal to 0.9 before extubation."* **Strong** / **Moderate**.
- *"We recommend using the adductor pollicis muscle for neuromuscular monitoring."* **Strong** / **Moderate**. Paired with *"We recommend against using eye muscles for neuromuscular monitoring."* **Strong** / **Moderate**.

Supporting figure Day 1 could use, verbatim: with sugammadex and a confirmed TOF ratio ≥0.9 before extubation the pooled incidence of residual blockade was 0.5% (95% CI 0.0 to 6.0), versus 2.2% (0.5 to 9.0) unconfirmed; with neostigmine, 5.3% (2.5 to 10.7) versus **44.9% (29.9 to 60.8)**.

The guideline's own limitation, verbatim: *"Direct evidence from randomized trials that compare confirming or not confirming train-of-four ratios before extubation are lacking."*

### A7. `devereaux-2017` — MINS definition and 30-day window. FOUND AND VERIFIED. Resolves two standing flags.

Full text read on jamanetwork.com. Definition, verbatim:
> Myocardial injury after noncardiac surgery (MINS) is defined as myocardial injury caused by ischemia that occurs during or within 30 days after surgery and is independently associated with mortality.

Diagnostic criteria, verbatim: *"an elevated postoperative hsTnT (ie, 20 to <65 ng/L with an absolute change ≥5 ng/L or hsTnT ≥65 ng/L)"*. Sampling: hsTnT *"measured 6 to 12 hours after surgery and daily for 3 days"*.

**Two ledger flags now closed.**
1. `n` was `UNVERIFIED (>20,000)`. The paper states **21,842 participants**.
2. The row says the 17.9% MINS incidence *"WAS NOT READ FROM THE PRIMARY RECORD."* It has now been read, verbatim: *"Among the 3904 patients (17.9%; 95% CI, 17.4%-18.4%) with MINS, 3633 (93.1%; 95% CI, 92.2%-93.8%) did not experience an ischemic symptom."* Both the 17.9% and the 93.1% on Day 8 are correct.

Mortality strata verified: 30-day death in 266 patients (1.2%; 95% CI 1.1-1.4). Peak hsTnT 20 to <65 ng/L → 3.0% (123/4049); 65 to <1000 → 9.1% (102/1118); ≥1000 → 29.6% (16/54).

**One Day 8 number not confirmed.** Day 8 states 30-day mortality of "0.5% below 20 ng/L". The paper's reference group is **peak hsTnT <5 ng/L**, not <20 ng/L, and the 0.5% figure was not located in the text read. Treat as `NOT FOUND` pending a read of the results tables.

### A8. `chung-2008-stop` — Bang thresholds and cut-off. THRESHOLDS FOUND; CUT-OFF NOT IN THIS PAPER.

Full text read on LWW. Thresholds, verbatim: *"BMI greater than 35 kg/m2, age older than 50 yr, male gender, and neck circumference greater than 40 cm"*.

**The cut-off in this paper is for STOP, not STOP-Bang**, verbatim: *"using answering yes to two or more questions as the cutoff for the STOP questionnaire to classify the patients as high or low risk of having OSA demonstrated the best combination of sensitivity and specificity."*

**The familiar STOP-Bang banding (0-2 low, 3-4 intermediate, 5-8 high) is NOT in this paper.** `chung-2012-stopbang` supports only the top of that scale (score 5-8 = high probability of moderate-to-severe OSA). The 3-4 intermediate band traces to Chung's 2016 *Chest* review, which is a narrative review and therefore excluded as a row under rule 4. **The Day 14 general recommendation asserting the full banding currently has no admissible source.**

### A9. `keita-2005` — odds ratios. FOUND AND VERIFIED.

Read on Ovid. Verbatim: *"In the multivariate analysis only the amount of intraoperative fluids (≥750 mL; P = 0.02; odds ratio = 2.3), age (≥50 yr; P = 0.008; odds ratio = 2.4), and bladder volume on entry to PACU (≥270 mL; P = 0.0001; odds ratio = 4.8) were found to independently increase the risk of urinary retention."* Incidence of retention 16%; retention defined as bladder volume >600 mL with inability to void within 30 min.

**No confidence intervals are given.** Day 17 should quote the odds ratios with their P values and say the CIs are not reported.

### A10. `leslie-1995` — atracurium duration. FOUND AND VERIFIED.

Read on Ovid. Verbatim:
> Core hypothermia prolonged the time to recovery of the first twitch in the train-of-four to 10% of its control value (T1 = 10%) after atracurium administration by ≈60% (P < 0.05), from 44 +/- 4 min to 68 +/- 7 min. In contrast, T1 = 25%-75% remained unchanged.

Design detail: six volunteers, two randomly assigned days at 34 °C or 37 °C; atracurium 0.5 mg/kg IV bolus after 2 h of propofol infusion. Propofol concentrations ≈28% higher at 34 °C (P < 0.05), matching Day 7.

### A11. `nathanson-2021` — breakthrough-pain wording. NOT ATTEMPTED THIS ROUND.

Ran out of retrieval budget before the PMC copy was opened. The Day 11 placeholder stands. This is the single Section A item left open and it should lead round 4.

---

## Section B — new targets

| Target | Outcome |
|---|---|
| B1 ASA OSA monitoring duration | **Resolved, and the answer changes Day 14.** See below. |
| B2 ASPAN normothermia | Guideline identified, target **NOT FOUND** (paywalled) |
| B3 Laryngospasm ladder | **No society guideline states it.** Negative finding confirmed on two society sites |
| B4 Horner after interscalene block | Found: 9/1322 (0.7%), retrospective, flagged |
| B5 Brachial plexus injury | Primary series found (cardiac only); **ASA 2018 advisory now read in full** |
| B6 POUR after peripheral nerve block; the 800 mL claim | No clean ambulatory PNB study; the 800 mL claim traced to a real RCT that it mischaracterises |
| B7 Ondansetron and vestibular nausea | **Not attempted** (budget) |
| B8 PDPH by needle gauge and tip | **Not attempted** (budget) |
| B9 Paediatric emergence delirium absolute incidence | **Not attempted** (budget) |
| B10 PACU hypoventilation/hypercapnia on supplemental oxygen | **Not attempted** (budget). Day 3 placeholder stands |
| B11 Emergence agitation versus POD as distinct entities | **NOT FOUND** in `aldecoa-2024`; nothing else searched |
| B12 Delirium tools validated in the PACU | **NOT FOUND** in the guideline main text (Supplement S2 not retrieved) |
| B13 Dantrolene dosing | Found and verified; a real conflict between FDA labels and MHAUS |
| B14 Edrophonium | Found and verified on Drugs@FDA, with a caveat that must travel with it |
| B15 Naloxone re-narcotisation | **NOT FOUND**; three adjacent primary studies offered instead |
| B16 SASM 2018 | Row created; identifiers partly unverified |
| B17 PubMed 42361319 | Citation verified; **the record has no abstract**, so the finding is NOT FOUND |
| B18 HATRICC-US | Re-checked; still no results |

### B1. ASA OSA guideline — where the 3 h and 7 h figures actually come from

**They are not in `gross-2014`.** I searched the full text of the 2014 guideline for "7 h", "median of 3 h", "3 h longer" and "unstimulated", and read the `†††` footnote in full. The 2014 guideline contains the discharge obligation and the room-air observation, verbatim:
> Patients at increased perioperative risk from OSA should not be discharged from the recovery area to an unmonitored setting (i.e., home or unmonitored hospital bed) until they are no longer at risk of postoperative respiratory depression. To establish that patients are able to maintain adequate oxygen saturation levels while breathing room air, respiratory function may be determined by observing patients in an unstimulated environment, preferably while asleep.

**but it contains no duration at all.**

**The 3 h and 7 h figures are in the 2006 original**, Anesthesiology 2006;104:1081-1093, verbatim:
> The consultants indicated that patients with OSA should be monitored for a median of 3 h longer than their non-OSA counterparts before discharge from the facility. They also indicated that monitoring of patients with OSA should continue for a median of 7 h after the last episode of airway obstruction or hypoxemia while breathing room air in an unstimulating environment.

What this means for Day 14, and it is a strengthening rather than a weakening of the day's argument:
1. The figures are **consultant survey medians**, not evidence, exactly as the day suspects.
2. They come from a **superseded document**, and the 2014 update **dropped them**. Quoting them as current ASA guidance is wrong.
3. The 2006 wording is *"unstimulating environment"*; the 2014 wording is *"unstimulated environment"* in a different sentence. External reviews conflate the two.
4. Day 14's claim that "the guideline does not have a number" is **correct for the current guideline** and should now say so with the 2006 provenance attached rather than hedging.

A new row `gross-2006` is supplied, marked `superseded_by:gross-2014`.

### B2. ASPAN normothermia

Current version identified as the **Second Edition (2010)**, J Perianesth Nurs 2010;25(6):346-365, DOI 10.1016/j.jopan.2010.10.006 (DOI verified by doi.org resolution). PMID 21126665 appeared in search listings only and is **UNVERIFIED**. **Full text paywalled; the stated core-temperature target was NOT READ and must not be quoted.** Currency was checked by a Crossref title search of the journal sorted by date, which found no third edition; but ASPAN now distributes its guidelines inside the paid 2025-2026 Standards volume, so a revision inside that volume cannot be excluded. Row supplied with the target field empty.

Day 7's general recommendation currently attributes a 36.0 °C definition to "nursing and national guidance". NICE CG65 supports the 36.0 °C transfer rule; **ASPAN does not yet support anything in this ledger.**

### B3. Laryngospasm management sequence — negative finding, confirmed

- **Difficult Airway Society extubation guideline** (Popat 2012, Anaesthesia 67:318-340) was read in full. It addresses laryngospasm **only as a risk**, gives no ladder, and its only pharmacological statement is about doxapram: *"robust evidence to support its use for this indication is lacking."* No jaw thrust, no laryngospasm notch, no succinylcholine for post-extubation laryngospasm. Currency confirmed on das.uk.com.
- **APAGBI has no laryngospasm guideline.** Its own clinical-guidelines index was read; the nearest items are the 2018 paediatric tracheostomy emergencies guideline and the 2019 Safe Delivery Paediatric ENT document. The joint APA/DAS/RCoA paediatric difficult airway guidelines do not mention laryngospasm.

**Conclusion for Day 2 and the laryngospasm card: no society guideline states the ladder.** It is a textbook construction. A `das-extubation-2012` row is supplied so the day can cite the negative finding honestly rather than leaving `[NUMBER NEEDED]`. Individual rungs have primary support that was not retrieved (Chung & Rowbottom 1993 for low-dose suxamethonium; Batra 2005 for propofol, which is prevention not rescue).

### B4. Horner syndrome after interscalene block

`takayama-2021`, JSES Int 2021;6(1):149-154, DOI verified, full text open. **9 of 1322 (0.7%)**. The authors themselves note it is lower than previous reports. This is passive retrospective surveillance and must not be presented as the incidence. A prospective RCT (Zhai 2015, BMC Anesthesiol) that actively examined for side effects found 1 of 32 in one arm while reporting hemidiaphragmatic paresis at 58-70%, which shows the surveillance gap. `borgeat-2001`, already in the ledger, is the best candidate for a prospective denominator, and **its full text is now reachable through the institutional session** — it should be read in round 4.

### B5. Brachial plexus injury, and the ASA advisories

**`unlu-2007`**: 3 of 575 (0.5%) after median sternotomy, all with left internal mammary artery harvest, onset after extubation within three postoperative days, two of three resolved by six months. Cardiac-surgery-specific. The general source, Welch 2009 (Anesthesiology, 380,680 cases), could not be opened by the subagent, but it is very likely reachable through the institutional session; recommend it for round 4.

**`asa-neuropathy-2018` full text IS readable** and carries a **FREE** badge, so its access should be **`open`**, not `paywalled`. Recommendations, verbatim:
> When possible, limit arm abduction in a supine patient to 90°. The prone position may allow patients to comfortably tolerate abduction of their arms to greater than 90°.
> Supine Patient with Arm on an Armboard: Position the upper extremity to decrease pressure on the postcondylar groove of the humerus (ulnar groove). Either supination or the neutral forearm positions may be used to facilitate this action.
> Supine Patient with Arms Tucked at Side: Place the forearm in a neutral position.
> Flexion of the Elbow: When possible, avoid flexion of the elbow to decrease the risk of ulnar neuropathy.

Note against Day 19's general recommendation, which says to "pad the elbow at the cubital tunnel": the advisory's wording is to **decrease pressure on the postcondylar groove**, and padding appears only as a general category (*"positioning strategies, protective padding, and proper placement of equipment"*). The day should track the advisory's wording.

The 2019 POVL advisory was not read this round.

### B6. Urinary retention after peripheral nerve block, and the 800 mL claim

**No study isolating PNB in a genuinely ambulatory population was found.** The nearest is an inpatient TKA series (Kwan 2024, n=496, POUR 24.2%, PNB OR 4.70 with a 95% CI of 1.47 to 19.0). That CI is too wide to teach from and the population is wrong. **Record as NOT FOUND rather than back-filling.**

**The 800 mL claim traces to `bjerregaard-2016`** (Anesthesiology 2016;124:1256-1264), a randomised open-label trial of catheterisation thresholds of 500 versus 800 mL in fast-track hip and knee arthroplasty, 800 randomised, 721 per-protocol. Catheterisation 32.2% versus 13.4%, RR 0.4 (0.3-0.6, P<0.0001), with **no difference in any secondary outcome** including UTI (2% in both arms). Conclusion verbatim: *"a catheterization threshold of 800 ml significantly reduced the need for postoperative urinary catheterization, without increasing urological complications."*

**The external review mischaracterises it in two ways** and Day 17's general recommendation currently inherits both: the population is inpatient fast-track arthroplasty under spinal anaesthesia, not ambulatory; and 800 mL was a **catheterise-at threshold**, not a demonstration that patients were left undrained at 800 mL. Row supplied with both caveats in `supports`.

### B13. Dantrolene — a real conflict to teach

FDA labels (Hikma generic, set ID `ab0efc75-0598-4f4e-91ad-6195bb2661fe`, updated 2024-12-11; Revonto, set ID `f1650487-32bd-4017-b9c2-b38829a531af`; Ryanodex, set ID `8f7b3ac0-604d-4c78-b545-5e0f8ea3d698`, updated 2024-10-30) all say **minimum 1 mg/kg, maximum cumulative 10 mg/kg**.

MHAUS says **2.5 mg/kg** initially, *"Repeat as frequently as needed until the patient responds"*, and *"Large doses (>10mg/kg) may be required."* Its FAQ goes further: *"individual patients may require 10-20 or more mg/kg."*

Day 7's general recommendation quotes 2.5 mg/kg without saying it is MHAUS rather than the label. **These are not reconcilable and should be cited separately**, which is exactly the kind of divergence the site handles well elsewhere. The MHAUS page carries no revision date, a currency weakness worth stating.

### B14. Edrophonium

All eight Drugs@FDA applications show marketing status **Discontinued** as of 2026-09-06; DailyMed holds one edrophonium SPL (Enlon, Baxter, 2006) with both NDCs inactivated. This closes the Day 1 `[TODO_VERIFY]` for the Drugs@FDA row.

**Caveat that must travel with the row:** FDA approved labelling supplement **NDA 019678/S-010 for Enlon-Plus on 28 October 2025**, sponsor Pharmobedient Consulting LLC. The supplement covers product name, salt equivalency, strength expression, excipient quantity and package type, and says nothing about marketing status; Drugs@FDA still shows Discontinued. But an active sponsor maintaining the application is consistent with an intent to re-market. **Any statement that edrophonium is unavailable in the United States must carry the date it was checked**, and this is a claim that will need re-checking, not a settled fact.

### B17 and B18, briefly

`renew-2026` (PubMed 42361319) is Renew JR, Linn DD, Logvinov II, Ma Y, Brull SJ, Anesth Analg 2026 Jun 25, online ahead of print, DOI 10.1213/ANE.0000000000008190 — PMID and DOI both read off the PubMed record. **The record carries no abstract**, so design, sample size and the key finding are NOT FOUND. Row supplied with those fields empty; do not cite a finding from it.

HATRICC-US (NCT04571749), from the ClinicalTrials.gov API today: **"Enrolling by Invitation"**, `hasResults: false`, primary completion and study completion both **31 July 2026 (estimated)** — a date now five weeks past — status last verified August 2025. No primary results paper exists; the only 2026 output is a pre-implementation methods paper (Front Health Serv 2026). **Day 16's statement stands unchanged**, but the estimated completion date has lapsed without an update, which is worth one line on the page.

### B15. Naloxone re-narcotisation — NOT FOUND

No primary study reports the incidence of re-sedation or recurrent respiratory depression after naloxone reversal in postoperative or ward patients. Three adjacent primary studies exist and are offered instead: Würsten 2026 (Swiss general wards, iatrogenic opioid overdose, *"Most patients (67, 55%) received naloxone just once, 34 (28%) twice and 20 (17%) three times or more"* — i.e. about 45% needed more than one dose, though the authors do not frame this as re-sedation); Weingarten 2016 (naloxone in Phase I recovery, 2.5 per 1000 anaesthetics, no re-sedation data); Weingarten 2015 (delayed respiratory depression within 48 h, and the datum most useful to Day 4 — **a prior adverse respiratory event in the PACU carried OR 5.11** for a later ward event). None was retrieved in full; all are candidates for round 4.

---

## Section D — Currency

**Day 1.** `renew-2026` exists on uptake of quantitative monitoring two years after `thilen-2023`; no finding available until the PDF is read. `asa-neuropathy-2018` and `thilen-2023` are both free to read. The edrophonium claim now has an FDA row but needs a date stamp and periodic re-check because of the October 2025 Enlon-Plus supplement.

**Day 2.** No society guideline supports the laryngospasm ladder. The DAS extubation guideline is the nearest society document and explicitly gives no sequence. The `[NUMBER NEEDED]` should become a stated negative finding.

**Day 3.** `fu-2004` has been read in full and is **open access on ScienceDirect**. Every number Day 3 uses is confirmed: phase 1 n=45 with FiO2 0.21 (n=25, up to 5 min), 0.25 (n=10) and 0.30 (n=10, 10 min); hypoventilation modelled as *"decreasing by 50% the minute ventilation"*; *"A decrease in Spo2 occurred only in patients who breathed room air. No decline occurred in patients with Fio2 levels of 0.25 and 0.30."*; phase 2 n=288 randomised (room air 155, supplemental oxygen 133), SpO2 every minute for up to 40 min; *"Arterial desaturation (Spo2 < 90%) was fourfold higher in patients who breathed room air than in patients who breathed supplemental oxygen (9.0% vs 2.3%, p = 0.02)."* Design confirmed: phase 1 prospective patient-controlled clinical trial; phase 2 prospective randomised clinical trial. **This closes the single largest concern in `method.md`.** The `fu-2004` row should move from `cohort` to a design reflecting the two phases, from `paywalled` to `open`, and every "not read" caveat on Day 3 should go.

**Day 7.** ASPAN cannot yet be cited for a temperature target. The dantrolene label/MHAUS conflict should be stated explicitly rather than resolved silently.

**Day 8.** `devereaux-2017` n = 21,842; 17.9% and 93.1% both verified against the primary record. The "0.5% below 20 ng/L" figure is not confirmed and the paper's reference group is <5 ng/L.

**Day 9.** Three changes. The Guideline 3 rationale in the repository is misattributed to the adult section when it is paediatric. The guideline's own qualifier — that the shift to general prophylaxis *"does not discredit the validity of PONV prediction scores"* — is missing from the day. And the ≥3 risk-factor recommendation is to **maximise risk mitigation**, not to add a third agent. Doses are now available and verified; droperidol prophylaxis is 0.625 mg. New in the Fifth: transdermal scopolamine may increase postoperative urinary retention, which links Day 9 to Day 17.

**Day 12.** The ESAIC screening requirement is an evidence-inclusion definition plus a recommendation addressed to researchers, not a graded clinical recommendation. The hypoxaemia/hypoglycaemia/pain exclusion rule is not in the guideline. The named tools are not in the main text. The guideline does carry a strong PACU sentence about not discharging a delirious patient without starting treatment, and it does make a weak suggestion for dexmedetomidine in cardiac surgery, which sits beside the FDA label point the day already makes.

**Day 14.** The 3 h and 7 h medians are 2006 consultant medians, dropped from the 2014 update. The STOP-Bang 0-2/3-4/5-8 banding has no admissible source in this ledger. The Bang item thresholds are now verified.

**Day 17.** The 800 mL claim rests on an inpatient fast-track arthroplasty trial of catheterisation thresholds, not on ambulatory data. Keita's odds ratios are verified but have no confidence intervals. Retention after peripheral nerve block remains NOT FOUND.

**Day 19.** The 2018 ASA neuropathy advisory is readable and its positioning recommendations are quoted above; the day's "pad the elbow at the cubital tunnel" wording should be brought into line with the advisory's "decrease pressure on the postcondylar groove". Brachial plexus incidence now has a cardiac-surgery row only.

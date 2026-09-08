# Extraction findings 4 — retrieval round 4

Retrieval date **2026-09-08**. Deliverables in `retrieval-2026-09-r4/`, outside any repository. No repository was edited.

## Browser session: LOGGED OUT

The browser driven this round was the **Mac Cowork Chrome connector, and it was not signed in to any institution**. Verified on the first page load: LWW served the abstract, not the full text, with the words *"Full Text Access for Subscribers / Individual Subscribers Log in for access / Institutional Users Access through Ovid / Not a Subscriber = Buy Article."*

That is the opposite of round 3, which ran authenticated to the University of Tennessee Preston Medical Library. The consequences run both ways and you should hold them in mind while reading:

- **Access verdicts this round are direct observations of what a logged-out reader sees.** No badge inference was needed. Where round 3 inferred from a per-article badge, this round confirms or corrects it by simply looking.
- **Paywalled full texts were unreachable.** `borgeat-2001`, Welch 2009 and the three scoring-instrument item lists could not be read at all this round. Round 3 could have read the first two and did not; this round could not. That is a real cost of the browser swap and it is stated rather than worked around.

## Two provenance classes, and how to tell them apart

Some of this round's retrieval was done by delegated sessions running alongside the browser. Their `verified_on` fields say so explicitly, and every such row ends with **"not rendered in my own browser."**

- **Read in my own browser:** `uppal-2024-rapm`, `nathanson-2021`, `asa-povl-2019`, `gross-2014`, and the four DOI-prefix articles.
- **Read by a delegated session, at a named URL:** the DailyMed labels, the Resuscitation Council UK guidance, `chung-2020-capnography`, the two paediatric delirium studies, `muth-2007`, and the `chou-2016` identifiers.

Both classes name the page that was opened. Neither contains anything filled from memory. If you hold the second class to a higher bar than the first, the rows are labelled so you can act on that.

---

## 0. The round 3 spreadsheet

**Recovered, not rebuilt.** The round 3 `new-ledger-rows.csv` was still on disk from that session, complete, with all 12 rows. It has been re-exported into this round's file rather than retyped from your table, so no transcription error could enter.

Two changes were made to it, both to satisfy this round's stricter spec:

1. **`bjerregaard-2016` design changed from `randomized trial` to `rct`.** Round 3 predated the controlled vocabulary.
2. **`renew-2026` design, n and supports emptied**, per your instruction. Round 3 had written `UNVERIFIED` into `design`, which is not a permitted value.

One row was added to close a gap in round 3's own output: your table names **three** dantrolene SPLs, but round 3 created rows for only Hikma and Ryanodex, carrying Revonto's set ID inside the Hikma row's prose. **`fda-revonto-label-2024`** is now its own row. Its dosing text was read in round 3, not re-opened this round, and its `verified_on` says so.

`memtsoudis-2018` is also in the file. It is not in your table but round 3 created it, and dropping it would lose work.

---

## 1. What the site was waiting on

### Day 11 — `nathanson-2021`. FOUND. This was the item round 3 never attempted.

Read in my own browser at the Association of Anaesthetists' Wiley site; the article is **Free Access** and rendered in full logged out.

**The breakthrough-pain sentence you asked for, verbatim:**
> The UK Defence Medical Services have successfully used continuous peripheral nerve analgesia using low-dose local anaesthetic solutions in those with high-energy injuries at risk of ACS. This provides analgesia with some preservation of sensory and motor function, thereby allowing identification of breakthrough pain, **which is considered a cardinal feature of ACS, although it should be noted that this may not always be a feature of the syndrome**.

Read the qualifier carefully. The guideline calls breakthrough pain a cardinal feature **and in the same sentence says it may not always be present**. Day 11 currently frames breakthrough pain as the signal to examine. That survives, but the day should carry the qualifier, because a resident taught to wait for breakthrough pain in a blocked limb has been taught a sign the guideline says can be absent.

**The dense-block recommendation, verbatim:**
> the use of neuraxial or peripheral regional techniques that result in dense blocks of long duration that significantly exceed the duration of surgery should be avoided. The literature review also suggested that single-shot or continuous peripheral nerve blocks using lower concentrations of local anaesthetic drugs without adjuncts are not associated with delays in diagnosis provided post-injury and postoperative surveillance is appropriate and effective.

**Surveillance recommendations, verbatim:**
> Patients at risk of acute compartment syndrome (ACS) should be identified on admission to hospital or at the time of surgery, and should be managed within agreed, multidisciplinary protocols. Post-injury and postoperative ward observations and surveillance should be able to identify the signs and symptoms of ACS; these observations should be made at set frequencies by healthcare staff trained in the pathology and recognition of ACS. The use of objective scoring charts is recommended. The equipment necessary to measure intracompartmental pressure should be available on wards caring for patients at risk of ACS.

**On the surgeon-versus-anaesthetist question, verbatim:**
> Although the patient has the right to refuse any form of treatment, such as the analgesic technique offered or the surgical procedure proposed, neither the surgeon nor the anaesthetist has the right to veto a treatment recommended by the other. Ideally, consensus should be achieved but, if consensus is not achievable, the role of the anaesthetist as the expert on pain relief should be respected.

**Two statements that matter for how Day 11 grades this source, both verbatim:**
> There are no other guidelines currently available.

> a systematic review of the available literature is absent. We offer a multi-professional, consensus opinion based on an objective review of case reports and case series.

The second is the guideline's own account of its evidence base: consensus opinion over case reports and case series. Day 11's `uncertain` status chip is well placed.

### Day 19 — `asa-povl-2019`. FOUND, and it is open.

Read in my own browser at PMC9556164. **Recommendations for Postoperative Management, verbatim:**
> Assess the vision of a high-risk patient when the patient becomes alert (e.g., in the recovery room, intensive care unit, or nursing floor). If there is concern regarding potential visual loss, obtain an urgent ophthalmologic consultation to determine its cause. CT or MRI may be used on a case-by-case basis to rule out intracranial causes of visual loss as well as to visualize an abnormal optic nerve. Additional management may include optimizing hemoglobin or hematocrit values, hemodynamic status, and arterial oxygenation.

The advisory's own Literature Findings, verbatim, are worth carrying alongside it:
> The literature is insufficient to evaluate the effect of assessing a high-risk patient's vision when the patient becomes alert.

So the recommendation exists and is explicit about the recovery room, and the advisory says plainly that the evidence for it is insufficient. That is exactly the shape Day 19 teaches elsewhere.

**Welch 2009 was NOT retrieved.** Logged out, `Anesthesiology` is paywalled. Day 19 still has no general perioperative nerve-injury denominator; `unlu-2007` remains cardiac-surgery-specific.

### Day 18 — PDPH by needle gauge and tip design. FOUND.

`uppal-2024-rapm` turned out to be **open**, and I read it in my own browser (see section 2). It answers the placeholder directly.

**Tip design, verbatim:**
> Spinal needles are classified as cutting (conventional or traumatic) or non-cutting (atraumatic or pencil point) based on their tip configuration. Cutting needles (eg, Quincke) have a sharp, slanted tip that cuts through the dura, with a distal opening. Non-cutting needles (eg, Whitacre) have a closed pencil point tip with a side port distal aperture. Non-cutting needles reduce the incidence of PDPH by limiting CSF leakage after dural puncture. In studies across obstetric, non-obstetric and neurological populations, compared with cutting needles, non-cutting needles reduced the risk of PDPH (4.2% vs 11%), the incidence of severe PDPH (1.2% vs 4.2%) and the need for an EBP (1.1% vs 3.0%).

**Statement and recommendation, verbatim:**
> Statement: Compared to cutting needles, non-cutting spinal needles are associated with decreased risk of PDPH (High Level of Certainty). However, there is limited evidence regarding a particular design of non-cutting spinal needle (Low Level of Certainty). Recommendation: Routine use of non-cutting spinal needles for LP for all populations is recommended (Grade A; High Level of Certainty).

**Needle size, verbatim, and it is more equivocal than tip design:**
> The impact of needle size on PDPH risk is likely a result of interaction among needle size, needle type and the risk of multiple redirections (for narrower gage needles). Moreover, this risk is likely non-linear, more profound for mid-gaged to wider-gaged needles, and less for narrower needles. Ten studies have compared cutting needles of different sizes... Eight studies demonstrated a reduction in PDPH risk with a narrower gage cutting needle. Of the nine studies comparing non-cutting needles of different sizes, five RCTs failed to demonstrate a significant difference, while the remaining four showed a modest benefit of narrower gage non-cutting needles over larger non-cutting types.

So: tip design has a Grade A recommendation and a clean 4.2% versus 11%. Gauge is a weaker and non-linear effect, and among non-cutting needles most trials found no difference. Day 18 should carry both, and not flatten gauge into the same confidence as tip design.

### Day 3 — hypoventilation or hypercapnia on supplemental oxygen. FOUND, and it points the other way.

`chung-2020-capnography` (J Clin Monit Comput 2020;34:541-551, DOI 10.1007/s10877-019-00333-9, open access), a **blinded** prospective multicentre observational trial in adult PACU, 250 enrolled, 172 completed.

**Oxygen exposure, verbatim:**
> The average supplemental O2 rate in the PACU was 3.8+/-2.4 L/min, delivered to 81 patients by mask and 82 patients by nasal cannula; 82% of patients were transported out of the PACU with supplemental O2.

**Incidence, verbatim (Level I thresholds: apnoea >=10 s twice in a 15 min epoch; bradypnoea <=6 bpm for >30 s; hypercapnia EtCO2 >=60 mmHg for >30 s):**
> Within Level I notifcations, 2 patients had hypercapnia, 48 had hypocapnia, 113 had apnea, 6 had tachypnea, and 53 had bradypnea.

(The misspelling is in the published text.) And:
> 163 (95%) patients had a Level II notification and 135 (78%) had a Level I notification during standard monitoring.

**Read this before writing it up.** On about 3.8 L/min of oxygen, capnography found apnoea in 113 of 172 and bradypnoea in 53 of 172, but measured hypercapnia in only 2 of 172. The Day 3 placeholder asks for "incidence of hypoventilation or hypercapnia"; the honest answer is that **apnoea and bradypnoea are common and measured hypercapnia is rare at this threshold**. A page that writes "hypercapnia is common in the PACU on oxygen" would be contradicted by the only study that measured it. What the study does support, and it supports it well, is Day 3's actual thesis: the oximeter was not showing any of this.

### Day 20 — the 500 microgram intramuscular dose. FOUND.

Resuscitation Council UK, *Emergency treatment of anaphylaxis: Guidelines for healthcare providers*, May 2021, on the society's own site. Adult and over-12 dose, verbatim: **"500 micrograms IM (0.5 mL of 1 mg/ml adrenaline)"**, into **"The anterolateral aspect of the middle third of the thigh"**, and **"Repeat the IM adrenaline dose after 5 minutes if there is no improvement in the patient's condition."** Full paediatric table captured in the ledger row.

Currency was checked three ways on the society's own site, including the 2025 Resuscitation Guidelines, which **defer to this document rather than superseding it**. One caveat: the document's own stated review date of May 2026 has passed, though RCUK material dated February 2026 carries identical doses.

This gives Day 20 the comparator it wanted. The gap is now citable on both sides: 500 micrograms IM in the community guidance, 300 micrograms in the perioperative consensus.

### Day 12 — absolute incidence of paediatric emergence delirium. FOUND, twice.

- `zhu-2023-emergence-delirium`: prospective cohort, sevoflurane VIMA, paediatric ambulatory circumcision, ages 4-12. Verbatim: **"The overall prevalence of EA and ED was 73/137 (53.3%) and 75/137 (54.7%)"**, ED by PAED >=10, EA by RASS >=1.
- `zhao-2026-emergence-delirium`: prospective observational, 155 children aged 0-3 having fundus examination. Verbatim: **"In 155 patients, ED incidence was 51%."** PAED scale; **the cut-off is not stated in the abstract and must not be attributed.**

A caution the delegated session raised and I am passing on intact: a much larger study (Štourač 2022, *Children* 9(10):1591, n=1222) reports ED incidence varying from **89.0% at PAED >=10 to 19.3% at PAED >12** in the same cohort. The incidence of paediatric emergence delirium is largely a function of the cut-off chosen. Day 12 should give the number **with its instrument and threshold attached**, or it will teach a figure that swings fourfold on a definition. Štourač is not offered as a row because its maintenance was 84.9% balanced anaesthesia and the paper does not state a sevoflurane proportion.

### Day 9 — ondansetron and vestibular nausea. PARTIALLY FOUND.

`muth-2007`, a randomised double-blind placebo-controlled trial in 63 highly susceptible subjects, rotation at 20 rpm in darkness: ondansetron 24 mg versus placebo versus dimenhydrinate. Verbatim: **"There were no differences between the groups in number of head movements tolerated, time rotating, or symptom questionnaire scores"**, concluding **"Neither ondansetron or dimenhydrinate prevented motion sickness in groups of highly susceptible people."**

**This supports only half the claim.** It shows ondansetron does not work for motion sickness. It is not a head-to-head showing ondansetron is *weaker* against vestibular input than against other emetic inputs, which is how the Day 9 placeholder is worded. Either reword the claim to what this study shows, or keep the placeholder open.

### Day 10 — multimodal analgesia. IDENTIFIERS ONLY. Recommendation NOT FOUND.

`chou-2016` now has verified identifiers: **DOI 10.1016/j.jpain.2015.12.008** and **PMID 26827847**, the PMID read off a PubMed record page that rendered once before the site began blocking, the DOI independently confirmed by doi.org resolution to the correct Elsevier PII.

**The multimodal recommendation text was not read and is not quoted.** Every full-text route failed for bot reasons rather than paywall reasons, so access is `UNVERIFIED`, not `paywalled`. A press release paraphrasing the recommendation was found and deliberately not used.

Currency is also `UNVERIFIED` and this is worth your attention: the American Pain Society **dissolved in 2019**, and a newer overlapping document exists (Association of Anaesthetists and British Pain Society, *Peri-operative pain management in adults*, Anaesthesia, DOI 10.1111/anae.16391, seen in search results and not opened). Whether Chou 2016 is still the current US document is an open question, not an assumption.

### Day 7 — the ASPAN core-temperature target. STILL NOT FOUND.

Not reachable logged out. The row stands as round 3 left it, with the target field empty. Round 3's residual doubt also stands: ASPAN now distributes its guidelines inside the paid 2025-2026 Standards volume, so a revision cannot be excluded.

---

## The four algorithm cards

### Hypotension card and Day 5 — first-move vasopressor. FOUND, with a caveat about the numbers.

Both agents are now sourced to FDA labels, and **both labels disagree with what the card currently teaches.**

- **Ephedrine** (Par Health, set ID a247857e-ba7b-4a37-b132-4ba9b0d1c4d1) matches the card. Verbatim: *"an initial dose of 5 mg to 10 mg administered by intravenous bolus. Administer additional boluses as needed, not to exceed a total dosage of 50 mg."* The card does not currently carry the 50 mg ceiling.
- **Phenylephrine** does not match, and the two products do not match each other. The Biorphen vial label says *"Initial dose is 40 mcg to 100 mcg administered by intravenous bolus. Additional boluses up to 200 mcg may be administered every 1 to 2 minutes as needed."* The Dr. Reddy's ready-to-use premix says *"50 mcg to 250 mcg by intravenous bolus administration."* The card's "50 to 100 micrograms" matches **neither**. It should cite a product.

Both labels also carry the indication wording the card needs: *"clinically important hypotension resulting primarily from vasodilation in the setting of anesthesia"* (phenylephrine) and *"clinically important hypotension occurring in the setting of anesthesia"* (ephedrine). These are indications, not outcome evidence, and the card should keep saying so.

**A sourced differential for postoperative hypotension: still NOT FOUND.** Nothing new. The `garvey-2019` non-allergic differential remains the only sourced list on the site and it is written for anaphylaxis, not for hypotension in general.

### Hypertension card and Day 6 — the four agents. FOUND, and two doses need changing.

All four labels retrieved with set IDs and verbatim dosing (full text in the ledger rows). The two that contradict the card:

- **Labetalol**: the label's initial dose is **20 mg** by slow IV over 2 minutes, with additional injections of **40 or 80 mg** at 10-minute intervals to a maximum of 300 mg. The card teaches "5 to 10 mg intravenous increments". That figure has **no label source**.
- **Hydralazine**: the label's usual dose is **20 to 40 mg, repeated as necessary**. The card teaches "5 to 10 mg intravenously". Also **no label source**.

Nicardipine (5 mg/hr, increase 2.5 mg/hr every 15 min, max 15 mg/hr) and clevidipine (1-2 mg/hr, doubling at 90-second intervals, usual 4-6 mg/hr, lipid-load limit of 1000 mL or an average 21 mg/hour per 24 hours) match the card's general description and now have exact numbers.

**Continuing a home beta-blocker perioperatively: still NOT FOUND.** No source retrieved this round.

### Delayed emergence card and Day 13 — physostigmine and the naloxone increment.

**Physostigmine: FOUND, and better than expected.** There are two current DailyMed labels and they differ in a way the card must reckon with.

- **ANTICHOLIUM (Provepharm, approved)** names the indication explicitly: *"the treatment of postoperative disorders: Central anticholinergic syndrome (CAS), Delayed postoperative awakening, Shivering"*. Its adult dose is *"0.04 mg/kg bodyweight (approx. 1 mg/min), the maximum individual dose is 2 mg"*, repeated *"after 5 to 20 minutes at the earliest"*.
- **Akorn physostigmine** is marked **"unapproved drug other"**, and its page carries the FDA disclaimer *"This drug has not been found by FDA to be safe and effective, and this labeling has not been approved by FDA."* Its dose is *"0.5 to 1.0 mg intramuscularly or intravenously"*.

The card currently teaches 0.5 to 2 mg. **The 0.5 to 1.0 mg half of that matches the unapproved label; the approved label is weight-based.** The card should pick one, cite it, and say which. Neither label contains the word asystole; do not write it.

**Naloxone 0.04 to 0.1 mg increments: NOT FOUND.** This is a clean negative and it matters. Two naloxone labels were examined. The adult postoperative text is the 0.1 to 0.2 mg you already cite. The only smaller labelled increment is **paediatric** (*"increments of 0.005 mg to 0.01 mg"*), and the only other sub-0.1 mg figure is the infusion concentration of 0.004 mg/mL. **The widely taught adult 40 microgram titration is not in the FDA label.** Do not attribute it to DailyMed. Either find a primary source for it or drop it to a stated practice convention.

### Laryngospasm card and Day 2 — NOT ATTEMPTED this round.

Chung and Rowbottom 1993, Batra 2005 and the Larson letter were not retrieved. All three are Wiley or LWW and were judged unreachable on a logged-out browser; with the round's budget going to the items that were reachable, they were left. Round 3's negative finding stands: no society guideline states the ladder. This is the largest block remaining, and it needs an authenticated session.

---

## Things this round did NOT get, stated plainly

| Target | Status | What would resolve it |
|---|---|---|
| Chung & Rowbottom 1993, Batra 2005, Larson letter | NOT ATTEMPTED | Authenticated session; all Wiley/LWW |
| `borgeat-2001` full text | NOT REACHED | Authenticated session |
| Welch 2009, general nerve-injury rate | NOT REACHED | Authenticated session |
| `white-1999` seven items | NOT REACHED | Table is an image *and* the full text is paywalled logged out. Needs a person with the PDF |
| `chung-1995-padss` five items | NOT REACHED | Institution does not subscribe. Needs a copy from elsewhere |
| `aldrete-1995` five items | NOT REACHED | Same |
| ASPAN core-temperature target | NOT REACHED | Paywalled; possibly only in the paid Standards volume |
| Chou 2016 recommendation text | NOT READ | A route with full-text access |
| Sourced differential for postoperative hypotension | NOT FOUND | Unclear one exists |
| Home beta-blocker continuation | NOT FOUND | Not searched this round |
| Adult naloxone 0.04 mg increment | NOT FOUND in any label | Primary study, or reclassify as practice convention |

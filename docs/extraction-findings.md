# Worklist extraction — findings
Extracted 2026-09-04 from the 17 PDFs now held. Every figure below was read from the PDF text.
Nothing here comes from memory or from a secondary description.

Status: 7 of 8 MUST HAVE done (Botto unobtainable), 6 of 8 SHOULD HAVE done.

---

## A. CORRECTIONS — things the project currently has wrong

### A1. Day 9's "additivity" premise is the wrong word (Apfel 2004)

gaps.md calls additivity "the entire premise of the day." The paper says the opposite of additive.

Verbatim: *"All the interventions acted independently of one another and independently of the
patients' baseline risk. Consequently, the relative risks associated with the combined
interventions could be estimated by MULTIPLYING the relative risks associated with each
intervention."*

Effects are **independent and multiplicative on the relative-risk scale**, not additive. The
paper also states absolute risk reduction is "a critical function of patients' baseline risk."
Any page saying interventions "add up" is wrong in a way that matters: it inflates expected
benefit in low-risk patients, which is exactly the error the conclusion warns against
("Prophylaxis is rarely warranted in low-risk patients").

Per-intervention RRR: ondansetron, dexamethasone, droperidol each ~26%; propofol 19%;
nitrogen (avoiding N2O) 12%. n=5199 enrolled, 4123 randomised across 64 combinations.

### A2. Devereaux 2017's asymptomatic figure in gaps.md is wrong

gaps.md §2 Day 8 proposes wording containing "only 15.8% of MINS patients in VISION had an
ischaemic symptom." The 2017 paper says **93.1%** (3633/3904) did **not** experience an
ischaemic symptom — i.e. 6.9% were symptomatic, not 15.8%. The 15.8% figure likely belongs to
Devereaux 2012. Do not carry it into Day 8.

MINS incidence CONFIRMED: **17.9%** (95% CI 17.4–18.4), 3904 patients.

hsTnT criteria, verbatim: 20 to <65 ng/L **with an absolute change ≥5 ng/L**, or hsTnT ≥65 ng/L.
30-day mortality by peak band: <20 ng/L 0.5%; 20–<65 3.0%; 65–<1000 9.1%; ≥1000 29.6%.
Overall 30-day death 266 (1.2%).

### A3. Visvanathan's bradycardia figure in the worklist is wrong

The worklist carries a secondary source's numbers. Read off the paper:
- desaturation "over 60%" (worklist said 61% — close enough)
- **bradycardia 6%**, not 11% (23% in patients aged <1 year — the secondary source may have
  conflated the paediatric subgroup)
- pulmonary oedema 4% ✓
- pulmonary aspiration 3% ✓
- **"intubation required 43%" does not appear** in the paper's abstract or results text. Treat
  as UNVERIFIED and do not use.

Presentation: 77% clinically obvious; 14% airway obstruction; 5% regurgitation/vomiting;
4% desaturation. 189 reports among the first 4000 AIMS incidents. Algorithm would have improved
recognition/management in 16%.

Bonus: Visvanathan cites the Olsson incidence as **0.78% in >130,000 anaesthetics**, which
gives Day 2 that number without needing to obtain Olsson 1984 (still worth verifying at source).

### A4. Fu 2004's design in the ledger is wrong

method.md flags that `design` was provisionally set to `cohort` and "should not be trusted."
Correct: a **two-phase study**. Phase 1 prospective patient-controlled clinical trial in the OR
(n=45). Phase 2 **prospective randomised clinical trial** in the PACU (n=288). Subjects were
surgical patients, not volunteers.

---

## B. RESOLVED — numbers the days could not be written without

### Day 3 — Fu 2004 (Chest 2004;126:1552–1558). MUST HAVE #1, previously 100% unverified.
- Phase 1: hypoventilation = 50% reduction in minute ventilation. FiO2 0.21 (n=25) for up to
  5 min or until SpO2 <90%; FiO2 0.25 (n=10) and 0.30 (n=10) for up to 10 min.
- Phase 1 result: SpO2 decline occurred **only** in the room-air group. **No decline at all** at
  FiO2 0.25 or 0.30.
- Phase 2: randomised room air (n=155) vs supplemental O2 (n=133), SpO2  every min up to 40 min.
- Phase 2 result: desaturation (SpO2 <90%) **9.0% room air vs 2.3% supplemental O2, P=0.02** —
  fourfold higher on room air.

**Teaching trap:** phase 2's direction is counterintuitive and easy to misread as "room air is
dangerous." The point is the opposite — supplemental oxygen removes the signal. Whoever writes
Day 3 needs this stated explicitly or they will invert it.

### Day 5 — Sessler 2018. MUST HAVE #2. The exposure unit is resolved.
The 1.08 (98.3% CI 1.03–1.12, P<0.001) is **per 10-minute increase in hypotension duration**,
intraoperatively. Remaining day of surgery: OR 1.03 (98.3% CI 1.01–1.05) per 10-min.
POD 1–4: OR 2.83 (98.3% CI 1.26–6.35, P=0.002) — **binary exposure, not per-time**, so it
cannot be quoted in the same units. n=9765; 42% had hypotension; 590 (6.0%) infarction;
116 (1.2%) died within 30 days.

### Day 5 — Liem 2020. MUST HAVE #3. Both circulating figures confirmed.
2 cumulative hours <60 mmHg in **144 (8%)**; 4 h <75 mmHg in **824 (48%)**. n=1710, age ≥60,
single-centre, intermediate-to-high-risk noncardiac surgery. Primary outcome peak hsTnT
≥50 ng/L within 3 postoperative days. Adjusted ORs 2.18–3.26 across thresholds.

**Worth building the day around:** "intraoperative hypotension, which independently was **not**
associated with myocardial injury." A postoperative-hypotension day whose own source finds the
intraoperative exposure null is a stronger teaching structure than the ledger currently reflects.

### Day 9 — Apfel 1999. MUST HAVE #5. The ladder, with a discrepancy.
Four predictors: female sex, history of motion sickness or PONV, non-smoking, postoperative opioids.
- **Abstract:** 0/1/2/3/4 factors → 10%, 21%, 39%, 61%, **79%**
- **Results text:** 10, 21, 39, 61, **78**
The paper is internally inconsistent at the 4-factor value. Most citations use 79%. Pick one,
and say which. AUC ~0.75.

### Day 9 — Gan 2026. MUST HAVE #7. Both halves answered.
**The rescue rule is RETAINED and stated more firmly.** Verbatim (Guideline 4): *"Patients should
receive rescue treatment from a different pharmacological class to the prophylactic agents
administered."* New qualifiers: if >6 h has elapsed, a second dose of a 5-HT3 antagonist or
butyrophenone may be considered if no alternatives exist; avoid re-dosing long-acting agents
(aprepitant, fosaprepitant, palonosetron) in the PACU; transdermal scopolamine is not an
effective rescue agent because of slow onset. Amisulpride 10 mg is the FDA-recommended rescue dose (A3).

**The Apfel score survives**, but the Fifth guideline **rounds the ladder** to approximately
10%, 20%, 40%, 60%, 80% and bands it: 0 factors = low, 1–2 = medium, ≥3 = high. So Day 9 must
choose between Apfel 1999's precise values and the guideline's rounded ones. They disagree by
1–2 points at every step.

### Day 4 — Driver 2021. SHOULD HAVE #11. Bibliographic record now complete.
**Anesth Analg 2021;132(5):1206–14. DOI 10.1213/ANE.0000000000005478.**
250 patients, 2539 RD episodes in 155 (62.0%). Median time to initial episode 8.8 [5.1–18.0] h.
Peak initial events 14:00–20:00; peak of all episodes 02:00–06:00.

**Decisive for the day:** median time from end of surgery to *start of monitoring* was
**4.3 [3.2–6.2] hours**. Monitoring did not begin until well after PACU discharge. This study
cannot support a PACU claim at all.

### Day 4 — Sun 2015. SHOULD HAVE #10. Same structural problem.
Verbatim: *"We started monitoring patients upon arrival on a nursing floor or step-down unit
after discharge from the postanesthesia care unit or intensive care unit."*

n=833. 21% had ≥10 min/h SpO2 <90%; 8% ≥20 min/h <90%; 8% ≥5 min/h <85%. 37% had ≥1 episode
<90% lasting ≥1 h; 11% ≥1 episode ≥6 h; 3% <80% for ≥30 min. Nursing records recorded clinical
hypoxaemia in only 5% (n=594 subset). **Nurses missed 90% of episodes where saturation was <90%
for at least an hour.**

That 90% is the structural-blindness number Day 4 wants — but it is a ward number.
**Both of Day 4's main sources exclude the PACU by design.** gaps.md suspected this for Driver;
it is equally true of Sun, and the day's claim needs rewriting accordingly.

### Day 7 — Frank 1997. SHOULD HAVE #12.
n=300, abdominal/thoracic/vascular surgery with documented CAD or high risk. Mean postoperative
core temperature **35.4 ± 0.1 °C** (hypothermic) vs **36.7 ± 0.1 °C** (normothermic), P<.001.
Morbid cardiac events (unstable angina/ischaemia, cardiac arrest, or MI) **1.4% vs 6.3%, P=.02**.
Hypothermia an independent predictor, RR 2.2 (95% CI 1.1–4.7, P=.04) — a 55% risk reduction with
normothermia. Postoperative VT 2.4% vs 7.9%, P=.04. Outcomes assessed double-blind.
JAMA 1997;277:1127–1134.

### Day 7 — Rajagopalan 2008. SHOULD HAVE #13.
14 studies for blood loss, 10 for transfusion. Hypothermia defined as **34–36 °C**. Median
temperature difference between arms **0.85 °C** (quartiles 0.60 / 1.1). Blood loss ratio of
geometric means 0.84 (0.74–0.96), P=0.009 → hypothermia increases blood loss ~16% (4–26%).
Transfusion RR 0.78 (95% CI 0.63–0.97), P=0.027 → relative risk of transfusion up ~22% (3–37%).

### Day 16 — Salzwedel pair. SHOULD HAVE #16. Both resolved.
**2013 (PACU), Int J Qual Health Care 25(2):176–181.** 120 video-recorded handovers: 40 before
implementation, 80 after, randomised to checklist vs no checklist. Randomisation unit is the
**handover**, not the patient or clinician. Items handed over rose from median **32.4% to 48.7%**;
duration rose from median **86 s to 121 s**. Verbal instruction *without* a written checklist
produced no increase in either.

**2016 (ICU), J Crit Care 32:170–174.** 121 handovers, prospective randomised, items split into
"must" (red) and "should" (yellow). Red items: **87.1% vs 75.0%, P<0.01**.

Both measure information transfer only. Neither measures a clinical outcome, confirming gaps.md.

**The number Day 16 should probably lead with:** even *with* the checklist, under half the items
(48.7%) were handed over. That is a more honest framing of "measurable" than the improvement
delta is.

---

## C. STILL OUTSTANDING

1. **Botto 2014 (MUST HAVE #4) was never downloaded.** It is the only must-have still missing —
   the DOI and the 30-day-outcome-by-troponin-stratum table remain unavailable. DOI is known:
   10.1097/ALN.0000000000000113. Ovid URL is in round-out-sources.md.
2. **Gross 2014 evidence categories (MUST HAVE #8)** — the Category A/B/C and Level 1/2/3 labels
   behind the monitoring and discharge-timing recommendations. PDF is held; not yet extracted.
3. **Ruetzler 2021 surveillance population/interval and class/LOE labels (SHOULD HAVE #15).**
   PDF is held; not yet extracted.
4. **Apfel 2004 per-intervention incidence table** broken down by number of antiemetics — the
   text references it; I extracted the summary RRRs but not the full table.

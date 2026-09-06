---
id: day-09
title: Two interventions for every adult, and rescue changes class
claim: Every adult now receives antiemetic prophylaxis with two interventions regardless of risk, because the interventions act independently and multiply while risk-stratified algorithms are unevenly followed; the Apfel score still estimates risk and the guideline is explicit that this shift does not discredit it, and rescue in the PACU must come from a pharmacological class the patient has not already received.
evidence_mode: trial_based
consensus_basis: null
physiology_status: established
clinical_claim_status: supported
evidence:
  - apfel-2004
  - apfel-1999
  - gan-2026
  - gan-2020
  - gan-2020-erratum
  - wang-2000
  - fda-droperidol-label-2009
  - fda-ondansetron-inj-label-2025
  - fda-scopolamine-label-2026
draft: true
review_due: null
quiz:
  - id: pacu-d09-q1
    stem: "In the IMPACT factorial trial (Apfel 2004), how did the authors say the effect of combined antiemetic interventions should be estimated?"
    teachingPoint: Interventions act independently, so relative risks multiply; they do not add.
    difficulty: basic
    examAlignment: [ABA-BASIC, ITE]
    tags: [pharmacology, ponv]
    options:
      - text: By multiplying the relative risks of each intervention
        correct: true
        explanation: The paper states that all the interventions acted independently of one another and of baseline risk, so the relative risks of combined interventions could be estimated by multiplying the relative risks of each. The word is multiplying, not adding.
      - text: By adding the absolute risk reductions of each intervention
        correct: false
        explanation: This is the error the day exists to correct. Adding inflates the expected benefit, especially in low-risk patients, which is exactly what the paper warns against.
      - text: By taking the largest single relative risk reduction
        correct: false
        explanation: Each intervention contributed its own independent effect. Combinations did better than any single agent because the effects multiply.
      - text: Combined effects could not be estimated from the trial design
        correct: false
        explanation: The factorial design across 64 combinations is precisely what allowed combined effects to be estimated as a trial result rather than an inference.
  - id: pacu-d09-q2
    stem: "A patient who received ondansetron and dexamethasone at induction is vomiting in the PACU two hours after surgery. According to the Fifth Consensus Guidelines (Gan 2026), what should the rescue treatment be?"
    teachingPoint: Rescue comes from a class not already given; repeating the prophylactic class early is not rescue.
    difficulty: advanced
    examAlignment: [ABA-ADVANCED, ITE, nursing]
    tags: [pharmacology, ponv, sequencing]
    options:
      - text: A drug from a different pharmacological class to the prophylactic agents administered
        correct: true
        explanation: Guideline 4, verbatim, says patients should receive rescue treatment from a different pharmacological class to the prophylactic agents administered. Two hours out, repeating the 5-HT3 antagonist does not qualify.
      - text: A second dose of ondansetron
        correct: false
        explanation: A second dose of a 5-HT3 antagonist may be considered only if more than 6 hours have elapsed and no alternatives exist. At two hours it is not the recommended rescue.
      - text: Transdermal scopolamine
        correct: false
        explanation: The guideline states that transdermal scopolamine is not an effective rescue agent because of its slow onset.
      - text: A repeat dose of a long-acting agent such as palonosetron
        correct: false
        explanation: The guideline advises against re-dosing long-acting agents such as aprepitant, fosaprepitant and palonosetron in the PACU.
  - id: pacu-d09-q3
    stem: "The Fifth Consensus Guidelines round the Apfel risk ladder to approximately 10%, 20%, 40%, 60% and 80% for 0 to 4 factors and band it. Which banding do they use?"
    teachingPoint: The current guideline uses rounded values and three bands; quote the version you are using and say which.
    difficulty: basic
    examAlignment: [ABA-BASIC, ITE, nursing]
    tags: [ponv, risk-stratification]
    options:
      - text: 0 factors low, 1 to 2 factors medium, 3 or more factors high
        correct: true
        explanation: The Fifth guideline bands the rounded ladder as 0 factors low, 1 to 2 medium, and 3 or more high. Prophylaxis intensity follows the band.
      - text: 0 to 1 factors low, 2 factors medium, 3 to 4 factors high
        correct: false
        explanation: One factor is already in the medium band under the Fifth guideline, because a single factor roughly doubles the baseline risk.
      - text: 0 to 2 factors low, 3 factors medium, 4 factors high
        correct: false
        explanation: This banding would leave a patient with two factors, at roughly 40% risk, in the low band. The guideline does not do that.
      - text: The guideline abandoned banding in favor of the exact 1999 percentages
        correct: false
        explanation: The reverse. The guideline rounds the 1999 values, which are themselves internally inconsistent at the four-factor step, and bands them.
  - id: pacu-d09-q4
    stem: "A 24-year-old woman who has never smoked, has a history of motion sickness, and will receive postoperative opioids is having laparoscopic surgery. How many Apfel risk factors does she carry, and what is her approximate risk of postoperative nausea and vomiting?"
    teachingPoint: Four factors puts a patient at roughly 80% risk on the guideline's rounded ladder.
    difficulty: basic
    examAlignment: [ABA-BASIC, ITE, nursing]
    tags: [ponv, risk-stratification]
    options:
      - text: "Four factors; approximately 80%"
        correct: true
        explanation: "Female sex, non-smoking status, a history of motion sickness or previous PONV, and anticipated postoperative opioids are the four predictors. On the Fifth guideline's rounded ladder that is approximately 80%; Apfel 1999 gives 79% in its abstract and 78% in its results text, an internal inconsistency that is one reason to prefer the rounded value."
      - text: "Three factors; approximately 60%"
        correct: false
        explanation: "Three factors is approximately 60%, but this patient carries all four: sex, non-smoking, motion sickness and planned opioids."
      - text: "Two factors; approximately 40%"
        correct: false
        explanation: "Two factors is approximately 40%. Counting only sex and motion sickness misses non-smoking status and the planned opioids."
      - text: "Four factors, but the risk cannot be estimated because the score is not validated in laparoscopic surgery"
        correct: false
        explanation: "The score was cross-validated between two centers and is used across surgical populations. Its limitation is that it sorts populations into bands rather than predicting an individual, with an area under the curve of about 0.75."
  - id: pacu-d09-q5
    stem: "An adult with no PONV risk factors is having general anesthesia. Under the Fifth Consensus Guidelines, what prophylaxis is recommended?"
    teachingPoint: "Two interventions for every adult, at any risk; the score estimates risk but no longer decides whether to give prophylaxis."
    difficulty: basic
    examAlignment: [ABA-BASIC, ITE, nursing]
    tags: [ponv, guidelines, sequencing]
    options:
      - text: "Prophylaxis with two interventions, as for every adult at any level of risk"
        correct: true
        explanation: "Guideline 3 reads, verbatim, administer PONV prophylaxis using 2 interventions in adults at any risk for PONV. The drivers the guideline names are undetected risk factors, non-adherence to risk-stratified algorithms, ambiguity in reading individual risk factors, and evidence that antiemetics are safe at perioperative doses."
      - text: "No prophylaxis, because the Apfel score is zero"
        correct: false
        explanation: "That was the older risk-gated position. The score remains validated for estimating risk, but the Fifth guideline no longer uses it to decide whether prophylaxis is given."
      - text: "A single agent, reserving combinations for high-risk patients"
        correct: false
        explanation: "The guideline's floor for every adult is two interventions."
      - text: "Four agents, because the interventions multiply"
        correct: false
        explanation: "Multiplication is why combinations work; the guideline's recommendation for every adult is two. What it recommends beyond two for the highest-risk patients has not yet been read from the full text and is not on this page."
---
## Why it matters

Postoperative nausea and vomiting is the PACU problem residents believe they understand best, and the one they most often reason about wrongly. Two wrong ideas persist. The first is additive: two antiemetics are twice as good as one, and a patient who vomits despite prophylaxis needs more of the same. The trial that tested prophylaxis factorially says the effects are independent and multiply [[apfel-2004]]. The second is that prophylaxis is a decision to be made patient by patient from a risk score. The current guideline has moved: every adult, at any risk, receives prophylaxis with two interventions, because risk factors go undetected, risk-stratified algorithms are unevenly followed, individual risk factors are read ambiguously, and modern antiemetics are safe at perioperative doses; and rescue must change class [[gan-2026]].

The consequence of getting this wrong runs in both directions. A patient is given nothing because a score said low risk, and a patient who vomits in the PACU is given a second dose of the drug that already failed.

## Mechanism

Each antiemetic class blocks a different input to the vomiting reflex: serotonin at 5-HT3 receptors, dopamine at D2 receptors, corticosteroid effects that are still incompletely characterized, and the removal of emetogenic anesthetic agents themselves. Because the inputs are distinct, blocking one does not change the fraction of remaining risk that another can remove. That is what independence means pharmacologically, and it is why the arithmetic is multiplicative on the relative-risk scale: each intervention removes its own fraction of whatever risk is left. It is also why a rescue drug must act on an input the prophylaxis did not touch. Repeating a class that has already failed to control the reflex adds little except its side effects.

## Evidence

Apfel 1999 identified four predictors, female sex, history of motion sickness or PONV, non-smoking status and postoperative opioids, and cross-validated the score between two centers [[apfel-1999]]. With 0, 1, 2, 3 or 4 factors the abstract gives risks of 10%, 21%, 39%, 61% and 79%; the results text gives 78% at four factors, so the paper is internally inconsistent at that step, and the discriminating power was an area under the curve of about 0.75 [[apfel-1999]].

The IMPACT trial randomized 4123 of 5199 enrolled patients across 64 combinations of six interventions [[apfel-2004]]. Ondansetron, dexamethasone and droperidol each reduced relative risk by about 26%, propofol by 19%, and avoiding nitrous oxide by 12% [[apfel-2004]]. The authors' own words on combining them: all the interventions acted independently of one another and independently of the patients' baseline risk, so the relative risks of the combined interventions could be estimated by multiplying the relative risks of each [[apfel-2004]]. Absolute risk reduction, they add, is a critical function of baseline risk, and prophylaxis is rarely warranted in low-risk patients [[apfel-2004]].

The Fifth Consensus Guidelines, in print in 2026, supersede the Fourth [[gan-2026]] [[gan-2020]]. Guideline 3, verbatim heading: administer PONV prophylaxis using 2 interventions in adults at any risk for PONV [[gan-2026]]. The reasoning is set out under Guideline 1, not under Guideline 3, and it names four drivers: undetected risk factors, non-adherence to risk-stratified PONV algorithms, ambiguity in interpreting individual risk factors, and increasing evidence that antiemetics are safe at perioperative doses, supported by the spread of multimodal prophylaxis within enhanced recovery pathways [[gan-2026]]. The same passage closes with a qualifier this page had been missing, verbatim: practice shifts towards general, multimodal prophylaxis does not discredit the validity of PONV prediction scores, nor an appropriately implemented risk-adapted PONV protocol [[gan-2026]]. The guideline retains the Apfel score for estimating risk, rounding the ladder to approximately 10%, 20%, 40%, 60% and 80% and banding it as 0 factors low, 1 to 2 medium, and 3 or more high, but the score no longer gates whether prophylaxis is given [[gan-2026]].

Guideline 4 is headed: provide antiemetic treatment to patients with PONV who did not receive prophylaxis or when prophylaxis failed [[gan-2026]]. The class-change rule this page rests on is body text under that heading rather than the heading itself, verbatim: patients should receive rescue treatment from a different pharmacological class to the prophylactic agents administered [[gan-2026]]. If more than 6 hours has elapsed, a second dose of a 5-HT3 antagonist or a butyrophenone may be considered if no alternatives are available; long-acting agents, aprepitant, fosaprepitant and palonosetron, should not be re-dosed in the PACU; and transdermal scopolamine is not an effective rescue agent because of its slow onset [[gan-2026]]. For rescue, ondansetron 4 to 8 mg and droperidol 1 to 1.25 mg are effective in antiemetic-naive patients, graded A3; metoclopramide 10 mg has limited efficacy, A2; propofol 20 to 40 mg is effective, A3 [[gan-2026]]. For a patient in whom ondansetron prophylaxis has already failed, another 5-HT3 antagonist adds nothing over redosing ondansetron or placebo, A3 and low certainty, while promethazine 6.25 mg, B1 and low certainty, and amisulpride 10 mg, A3, were effective [[gan-2026]].

The guideline's prophylactic doses, read from its Table 1 and agent sections, are ondansetron 4 mg intravenously by slow injection or 16 mg orally disintegrating 1 hour before induction; dexamethasone 4 to 8 mg intravenously at induction, A1; droperidol 0.625 mg at the end of surgery, A1; haloperidol 0.5 to 2 mg intravenously at induction or at the end of surgery, A1; amisulpride 5 mg intravenously, A2; palonosetron 0.075 mg intravenously, A1; aprepitant 40 to 80 mg by mouth; and a transdermal scopolamine patch the prior evening or 2 hours before surgery, A1 [[gan-2026]]. Metoclopramide 10 mg is not recommended unless other dopamine antagonists are unavailable [[gan-2026]]. Note the asymmetry that catches residents out: droperidol's prophylactic dose is 0.625 mg, and the 1 to 1.25 mg figure belongs to rescue [[gan-2026]]. On dexamethasone the guideline adds that 8 mg seemed to have the optimal antiemetic and analgesic efficacy, that a Cochrane review of 38 studies and a subsequent large randomized trial found a single dose up to 8 mg did not increase postoperative infection including in diabetes, A1, and that the transient rise in glucose in diabetes is small, about 2 mmol/L or 36 mg/dL, and was not associated with impaired wound healing [[gan-2026]].

For a patient carrying three or more risk factors the guideline does not recommend a third drug. Verbatim: in patients with 3 or more PONV risk factors, there is a paucity of clinical data on the use of 3 or more prophylactic interventions, we therefore recommend maximizing the use of risk mitigation strategies [[gan-2026]]. It adds that published evidence on combination therapy with 3 or more agents remains limited, and offers acupoint stimulation, graded A1, as the addition for patients who require 3 or more prophylactic interventions [[gan-2026]].

Two changes from the Fourth guideline are worth carrying. Intravenous aprepitant is added: an injectable lipid emulsion in a 32 mg dose given as a 30-second injection, with 97% receptor occupancy within 5 minutes, and it is the only intravenous formulation with an FDA indication for PONV prophylaxis [[gan-2026]]. Casopitant is removed, for lack of widespread global availability [[gan-2026]]. The Fifth also carries a sentence that belongs to Day 17 as much as to this day: recent evidence suggests that transdermal scopolamine may increase the risk of postoperative urinary retention, especially following urogynecologic procedures [[gan-2026]].

The Fifth guideline also grades as A1 that low-dose gabapentinoids, below 300 mg of pregabalin or 900 mg of gabapentin per day, reduce PONV risk despite no significant analgesic effect, and as A1 that opioid-free anesthesia reduces PONV compared with opioid-based anesthesia [[gan-2026]].

## What this does not show

The multiplicative rule is a statement about relative risk. It does not mean every patient benefits equally: the same interventions remove a large absolute risk from a patient at 80% and a small one from a patient at 10%, which is why the trial's own conclusion discouraged prophylaxis in low-risk patients [[apfel-2004]]. The Fifth guideline knows this and recommends two interventions for every adult anyway, on the grounds set out above [[gan-2026]]. That is a change of policy, not of arithmetic; the absolute benefit in a low-risk patient is still small, and a page that quotes the relative risk reductions without the baseline is still quoting half the result. The guideline itself refuses the stronger reading, saying in the same passage that the shift does not discredit the validity of PONV prediction scores nor an appropriately implemented risk-adapted protocol [[gan-2026]].

What the guideline says about patients with three or more risk factors, and the doses it recommends, were read from the full text on 2026-09-06 and now appear in the evidence slot above. What is still not on this page from the Fifth guideline is its pediatric section, its section on discharge and post-discharge nausea and vomiting, and the full evidence tables behind each grade.

The Apfel score is a population instrument with an area under the curve of about 0.75 [[apfel-1999]]. It sorts patients into bands; it does not predict an individual. The two versions of its ladder, the 1999 values and the guideline's rounded ones, disagree by one or two points at every step, and this page uses the guideline's rounded values because they are current, they are what the guideline algorithm uses, and rounded values do not invite spurious precision [[gan-2026]].

The IMPACT per-intervention incidence table broken down by number of antiemetics has not been extracted from the held paper; only the summary relative risk reductions appear here [[apfel-2004]]. The erratum to the Fourth guideline has not been read, so no dose or table from the 2020 document is quoted on this page [[gan-2020-erratum]].

The drug-specific points on the day's content list now have sources. Dexamethasone timing was tested directly: 10 mg intravenously before induction, at the end of anesthesia, or placebo, in 120 women having abdominal hysterectomy, gave PONV in the first 2 h of 15%, 45% and 53%, rescue antiemetic use of 8%, 30% and 35%, and PONV at 2 to 24 h of 25%, 28% and 55%; giving it before induction was the more effective timing [[wang-2000]]. Droperidol carries a boxed warning: cases of QT prolongation and torsade de pointes have been reported at or below recommended doses; it is reserved for patients who fail other adequate treatments, a 12-lead ECG is taken before administration, and it is withheld if the QTc exceeds 440 msec in men or 450 msec in women; the maximum recommended initial dose is 2.5 mg intramuscularly or by slow intravenous injection, with additional 1.25 mg doses to effect [[fda-droperidol-label-2009]]. Ondansetron prolongs the QT interval in a dose-dependent manner, with postmarketing torsade, and is avoided in congenital long QT syndrome; its label also states that a second intravenous dose of 4 mg postoperatively does not provide additional control of nausea and vomiting, which is the class-change rule seen from the label's side [[fda-ondansetron-inj-label-2025]]. Its limited effect on the vestibular component is not in the label and was not found in a search: [TODO_VERIFY: a source for ondansetron's limited effect on vestibular nausea]. Transdermal scopolamine is applied the evening before surgery and removed 24 h after it; plasma concentrations are detected within 4 h with the peak, on average, at 24 h, which is the onset lag that makes it useless as rescue; and elderly patients had an increased risk of neurological and psychiatric adverse reactions such as hallucinations, confusion, dizziness and drug withdrawal syndrome [[fda-scopolamine-label-2026]].

A correction to this page's own provenance. Until 2026-09-06 the rationale for Guideline 3 was given here as the sentence that clinicians' adherence to risk-based adjustments in PONV prophylaxis is suboptimal. That sentence is in the guideline, but it sits in Guideline 5, the pediatric section, and describes pediatric risk models; it is not the stated rationale for the adult recommendation. The adult reasoning quoted above was read from Guideline 1 in the full text on 2026-09-06, along with the Guideline 3 and Guideline 4 headings, the dose table, and the three-or-more-risk-factor recommendation [[gan-2026]].

## At the bedside

Give every adult two interventions from different classes; that is the guideline's floor at any risk [[gan-2026]]. Count the factors anyway and write the band down, using the rounded ladder, because the band tells you how much absolute benefit the two interventions bought, and because the guideline is explicit that the general-prophylaxis policy does not retire the score [[gan-2026]] [[apfel-2004]]. If the patient carries three or more factors, the guideline's next move is to maximize risk mitigation rather than to add a third drug [[gan-2026]].

One habit is worth naming because the guideline contradicts it. Adding a third drug for a patient with three or more risk factors is widely taught, and it is not what the guideline recommends. Its position is that clinical data on three or more prophylactic interventions are scarce, so it recommends maximizing risk mitigation instead, offering acupoint stimulation for patients who do require three or more interventions [[gan-2026]]. Treat a third agent as local practice, not as guideline.
When a patient vomits in the PACU, the first question is which classes were already given. The rescue must come from a class the patient has not received [[gan-2026]]. Do not re-dose a long-acting agent, do not reach for a scopolamine patch as rescue, and reserve a second dose of the prophylactic class for the situation the guideline describes, more than 6 h elapsed and nothing else available [[gan-2026]].

[PRACTICE VARIES: the specific rescue agents stocked and the order in which they are used differ between institutions; the class-change rule does not.]

### General recommendations

These are the numbers residents are commonly taught and expected to know. This project has not yet read them from a primary source, so each is labeled and none carries a ledger key. Where one conflicts with your institution's protocol, the protocol wins.

[GENERAL: Two adult prophylactic doses in common use are not in the Fifth guideline's table: dimenhydrinate about 1 mg/kg intravenously, and promethazine 6.25 to 12.5 mg intravenously for prophylaxis rather than rescue. The guideline's own doses are cited in the evidence slot above and are not general recommendations.]

## Check yourself

Five items. Every option carries an explanation. Progress is not saved.

---
id: day-07
title: Hypothermia has trial evidence, and the trials disagree
claim: Perioperative hypothermia has randomized outcome evidence that most PACU interventions lack, but that evidence is about avoiding moderate hypothermia rather than reaching normothermia, and the trials that found harm and the trial that found none overlap in the temperatures they studied.
evidence_mode: trial_based
consensus_basis: null
physiology_status: established
clinical_claim_status: uncertain
evidence:
  - frank-1997
  - kurz-1996
  - schmied-1996
  - rajagopalan-2008
  - sessler-2022
  - leslie-1995
  - hausmann-1991
  - kranke-2002
  - wang-2020-dex-shivering
  - fda-dexmedetomidine-label-2026
  - litman-2008
  - larach-2010
draft: true
review_due: null
quiz:
  - id: pacu-d07-q1
    stem: "In Frank 1997, patients with cardiac risk having abdominal, thoracic or vascular surgery were randomized to routine thermal care or supplemental warming. What were the mean postoperative core temperatures, and what happened to morbid cardiac events?"
    teachingPoint: A separation of about 1.3 degrees produced a large difference in cardiac events in 300 high-risk patients.
    difficulty: basic
    examAlignment: [ABA-BASIC, ITE]
    tags: [thermoregulation, cardiac]
    options:
      - text: 35.4 versus 36.7 degrees; morbid cardiac events 6.3% versus 1.4%
        correct: true
        explanation: Mean postoperative core temperature was 35.4 (SD 0.1) in the hypothermic group and 36.7 (SD 0.1) in the normothermic group; morbid cardiac events occurred in 6.3% versus 1.4%, P=.02, with hypothermia an independent predictor, RR 2.2 (95% CI 1.1 to 4.7).
      - text: 33.0 versus 37.0 degrees; no difference in cardiac events
        correct: false
        explanation: The separation was modest, about 1.3 degrees, and the difference in cardiac events was significant.
      - text: 35.4 versus 36.7 degrees; no difference in cardiac events
        correct: false
        explanation: The temperatures are right; the cardiac result is wrong. Frank 1997 found a significant difference. It is PROTECT, at a similar lower temperature, that found none.
      - text: The study did not measure core temperature
        correct: false
        explanation: Core temperature is the exposure. Outcomes were assessed double-blind.
  - id: pacu-d07-q2
    stem: "PROTECT (Sessler 2022) randomized 5056 patients to aggressive warming or routine care, reaching mean final intraoperative core temperatures of 37.1 versus 35.6 degrees. What was the result for the 30-day composite of myocardial injury, cardiac arrest and death?"
    teachingPoint: Above roughly 35.5 degrees, the largest trial found nothing to gain from warming further.
    difficulty: basic
    examAlignment: [ABA-BASIC, ITE]
    tags: [thermoregulation, cardiac]
    options:
      - text: 9.9% versus 9.6%; no difference, and no difference in infection, transfusion, length of stay or readmission
        correct: true
        explanation: The composite occurred in 246 of 2497 (9.9%) with aggressive warming and 239 of 2490 (9.6%) with routine care, with no difference in the secondary outcomes. The authors conclude that keeping core temperature at least 35.5 degrees appears sufficient.
      - text: A large reduction with aggressive warming
        correct: false
        explanation: There was no reduction. This is the trial that qualifies the older evidence.
      - text: A large increase with aggressive warming
        correct: false
        explanation: There was no difference in either direction.
      - text: The trial was stopped early for harm
        correct: false
        explanation: It completed with 5013 patients in the intention-to-treat analysis.
  - id: pacu-d07-q3
    stem: "Frank 1997's hypothermic arm averaged 35.4 degrees and found a cardiac difference. PROTECT's routine-care arm averaged 35.6 °C and found none. What is the correct reading of that pair?"
    teachingPoint: Two randomized trials reach different conclusions across overlapping temperatures, and the field has not resolved it.
    difficulty: expert
    examAlignment: [ABA-ADVANCED, ITE]
    tags: [thermoregulation, evidence-appraisal]
    options:
      - text: As an unresolved tension between a 1997 trial of 300 patients and a 2022 trial of 5013, stated plainly rather than reconciled
        correct: true
        explanation: The two lower arms sit at essentially the same temperature. One found harm, the much larger one found nothing. The field has not resolved this, which is why the clinical claim is labeled uncertain.
      - text: As proof that Frank 1997 was wrong
        correct: false
        explanation: A later larger trial with a different population and endpoint does not retroactively falsify an earlier double-blind result. It qualifies it.
      - text: As two trials of different temperature ranges that do not overlap
        correct: false
        explanation: That reconciliation is weaker than it looks. 35.4 and 35.6 are the same temperature for practical purposes.
      - text: As irrelevant to the PACU because both are intraoperative studies
        correct: false
        explanation: The temperature the patient arrives with, and the warming the PACU delivers, are exactly what these trials bear on.
  - id: pacu-d07-q4
    stem: "In the Rajagopalan 2008 meta-analysis, what did mild hypothermia, defined as 34 to 36 degrees, do to blood loss and transfusion?"
    teachingPoint: A median temperature difference under one degree increased blood loss by about a sixth and transfusion risk by about a fifth.
    difficulty: advanced
    examAlignment: [ABA-ADVANCED, ITE]
    tags: [thermoregulation, coagulation]
    options:
      - text: Increased blood loss by about 16% and the relative risk of transfusion by about 22%
        correct: true
        explanation: Across 14 studies for blood loss and 10 for transfusion, with a median temperature difference of 0.85 degrees between arms, the blood loss ratio of geometric means was 0.84 (0.74 to 0.96), about 16% more loss with hypothermia, and the transfusion RR was 0.78 (0.63 to 0.97), about 22% more transfusion.
      - text: Doubled blood loss
        correct: false
        explanation: The pooled effect was about 16%, not 100%.
      - text: No effect on either
        correct: false
        explanation: Both effects were significant, P=0.009 and P=0.027.
      - text: Reduced transfusion because cold patients bleed less
        correct: false
        explanation: Reversed. Hypothermia impairs coagulation and increased transfusion.
---
## Why it matters

Hypothermia is the PACU problem with the best evidence and the most confident teaching, and the evidence is less settled than the teaching. Three randomized trials from the 1990s found that mild hypothermia increased cardiac events, wound infection and blood loss [[frank-1997]] [[kurz-1996]] [[schmied-1996]]. One randomized trial from 2022, more than ten times larger than any of them, found that warming patients from 35.6 °C to 37.1 °C changed nothing that was measured [[sessler-2022]]. The lower arm of that trial sits at the same temperature as the hypothermic arm of the trial that found the cardiac harm.

The consequence of getting this wrong is either to warm every patient to full normothermia as if the old trials required it, or to conclude that hypothermia does not matter because the new trial found nothing. The evidence supports neither.

## Mechanism

Core temperature falls under anesthesia because vasodilatation redistributes heat from the core to the periphery and because the thermoregulatory thresholds for vasoconstriction and shivering are lowered. Below the body's normal range, coagulation enzymes and platelets function less well, oxygen consumption rises with shivering, and the sympathetic response to cold raises heart rate and blood pressure. Each of those pathways is a plausible route to bleeding, infection and cardiac events. What the mechanism does not specify is where on the temperature scale each effect becomes clinically important, and that is precisely what the trials disagree about.

## Evidence

Frank 1997 randomized 300 patients with documented coronary disease or high cardiac risk having abdominal, thoracic or vascular surgery to routine thermal care or supplemental warming [[frank-1997]]. Mean postoperative core temperature was 35.4 °C (SD 0.1) in the hypothermic group and 36.7 °C (SD 0.1) in the normothermic group, P less than .001 [[frank-1997]]. Morbid cardiac events, unstable angina or ischemia, cardiac arrest or myocardial infarction, occurred in 1.4% of normothermic and 6.3% of hypothermic patients, P=.02; hypothermia was an independent predictor, RR 2.2 (95% CI 1.1 to 4.7, P=.04), and postoperative ventricular tachycardia occurred in 2.4% versus 7.9%, P=.04, with outcomes assessed double-blind [[frank-1997]].

Kurz 1996 randomized 200 colorectal surgery patients to routine intraoperative thermal care or additional warming: final core temperature was 34.7 °C (SD 0.6) against 36.6 °C (SD 0.5); surgical wound infection occurred in 18 of 96 (19%) hypothermic and 6 of 104 (6%) normothermic patients, P=0.009; sutures were removed one day later in the hypothermic group, P=0.002; and hospitalization was prolonged by 2.6 days, about 20%, P=0.01 [[kurz-1996]]. Schmied 1996 is the blood-loss limb in total hip arthroplasty [[schmied-1996]].

Rajagopalan 2008 pooled 14 studies for blood loss and 10 for transfusion, with hypothermia defined as 34 to 36 °C and a median temperature difference between arms of 0.85 °C (quartiles 0.60 and 1.1) [[rajagopalan-2008]]. The ratio of geometric means for blood loss was 0.84 (0.74 to 0.96), P=0.009, so hypothermia increased blood loss by about 16% (4 to 26%), and the transfusion relative risk was 0.78 (95% CI 0.63 to 0.97), P=0.027, so hypothermia increased the relative risk of transfusion by about 22% (3 to 37%) [[rajagopalan-2008]].

PROTECT randomized 5056 patients, 5013 in the intention-to-treat analysis, at 12 sites: aged 45 or older with at least one cardiovascular risk factor, having inpatient noncardiac surgery of 2 to 6 h under general anesthesia [[sessler-2022]]. Aggressive warming reached a mean final intraoperative core temperature of 37.1 °C (SD 0.3) against 35.6 °C (SD 0.3) with routine care [[sessler-2022]]. The 30-day composite of myocardial injury, non-fatal cardiac arrest and all-cause mortality occurred in 246 of 2497 (9.9%) versus 239 of 2490 (9.6%), with no difference in surgical site infection, transfusion, length of stay or readmission; the authors conclude that keeping core temperature at least 35.5 °C appears sufficient [[sessler-2022]].

## What this does not show

The reconciliation usually offered, that the old trials and PROTECT cover different temperature ranges, is weaker than it looks. Frank's hypothermic arm averaged 35.4 °C and PROTECT's routine-care arm targeted and reached 35.6 °C; those are the same temperature [[frank-1997]] [[sessler-2022]]. Frank found a significant cardiac difference at that separation; PROTECT, far larger, found none. Rajagopalan sits at a median separation of only 0.85 °C within a 34 to 36 °C band, so it partly extends below PROTECT's range and partly does not [[rajagopalan-2008]]. This page states plainly that a 1997 trial of 300 patients and a 2022 trial of 5013 reach different conclusions across overlapping temperatures, and that the field has not resolved it. The claim status is uncertain for that reason.

The 1990s trials are era-limited: single surgical populations, pre-modern infection bundles, pre-modern warming equipment [[kurz-1996]]. PROTECT excluded patients with a body mass index above 30 and those on dialysis [[sessler-2022]].

The other consequences the day's content list expects have small, old sources. Leslie 1995 was read in full on 2026-09-06: six volunteers were studied on two randomly assigned days at 34 °C and at 37 °C, receiving atracurium 0.5 mg/kg after two hours of a propofol infusion [[leslie-1995]]. Mild hypothermia raised propofol concentrations by about 28%, P less than 0.05, and prolonged the time to recovery of the first twitch of the train-of-four to 10% of control by about 60%, from 44 plus or minus 4 minutes to 68 plus or minus 7 minutes, while recovery from 25% to 75% was unchanged [[leslie-1995]]. Oxygen consumption with shivering was measured by indirect calorimetry in 24 patients: shivering occurred in 8 of 12 after isoflurane, with a maximum oxygen consumption of 639 mL/min against 121 to 225 mL/min during steady-state anesthesia, and meperidine 25 mg intravenously reduced it significantly [[hausmann-1991]].

Shivering treatment has a quantitative review: meperidine 25 mg had a number needed to treat of 1.3 at 5 min (relative risk 9.6, 95% CI 5.7 to 16), clonidine 150 µg 1.3 at 5 min (RR 6.8, 3.3 to 14.2), doxapram 100 mg 1.7 and ketanserin 10 mg 2.3, with adverse-effect reporting sparse and the search closed in 2000, before dexmedetomidine [[kranke-2002]]. A later meta-analysis of six trials after spinal anesthesia found dexmedetomidine superior to clonidine for effective rate, time to cessation and recurrence, with less hypotension and more sedation, in a setting that is not the post-general-anesthesia PACU and with effect sizes not captured [[wang-2020-dex-shivering]]. Dexmedetomidine's label carries no indication for shivering; its indications are ICU sedation of intubated adults and procedural sedation, with hypotension and bradycardia, including fatalities, as its principal warnings [[fda-dexmedetomidine-label-2026]].

Malignant hyperthermia presenting late is this day's boundary. In the North American registry, postoperative malignant hyperthermia was confirmed in 10 of 528 suspected cases (1.9%); all had received a volatile agent and five also succinylcholine; all showed generalized rigidity, hypercapnia or tachypnea, tachycardia and hyperthermia; no subject had hyperthermia as the presenting sign; and the latency from the end of anesthesia to the first sign was 0 to 40 min [[litman-2008]]. Across 286 registry episodes from 1987 to 2006, the frequent initial signs were hypercarbia, sinus tachycardia and masseter spasm; a temperature abnormality, median maximum 39.1 °C, was among the first three signs in 63.5%; 78.6% had muscular abnormality with respiratory acidosis but only 26.0% metabolic acidosis; the median dantrolene dose was 5.9 mg/kg; complications occurred in 63 of 181 (34.8%), with the likelihood rising 2.9-fold per 2 °C rise in maximum temperature and 1.6-fold per 30-min delay in dantrolene [[larach-2010]]. The bedside distinction is therefore not the temperature, which comes late, but the rising carbon dioxide, the rigidity and the tachycardia in a patient who has just left a volatile anesthetic.

## At the bedside

Measure core temperature on PACU arrival and treat a reading below 35.5 °C as the level at which the randomized evidence for harm applies [[sessler-2022]] [[frank-1997]]. Below that, warm.

Above 35.5 °C, warming is comfort and shivering control, not outcome protection, on the best current evidence; do not tell a resident or a patient that the last degree to 37 °C prevents infarction or infection, because the largest trial found that it did not [[sessler-2022]]. [PRACTICE VARIES: the PACU discharge temperature criterion and the warming devices available differ between institutions; follow local protocol.]

When a colleague quotes the 1996 and 1997 trials, ask what temperature their hypothermic arms reached, and compare it with what your patient's monitor says. The disagreement in the literature is a disagreement about a few tenths of a degree, and the patient in front of you is on one side of it or the other.


### General recommendations

These are the numbers residents are commonly taught and expected to know. This project has not yet read them from a primary source, so each is labeled and none carries a ledger key. Where one conflicts with your institution's protocol, the protocol wins.

[GENERAL: National and nursing guidance commonly define hypothermia as a core temperature below 36.0 °C, ask for a temperature every 15 minutes in recovery, and do not transfer a patient to the ward below 36.0 °C. Be careful about attributing that threshold. It is the NICE inpatient warming guidance that carries the 36.0 °C transfer rule. The ASPAN normothermia guideline is often named alongside it, and this project has not read it: the current version was identified on 2026-09-06 as the second edition of 2010, its full text is paywalled, and its stated core-temperature target was not read and is not quoted here. That threshold is also half a degree above the level at which the randomized evidence of harm on this page applies, and the two are different kinds of number.]

[GENERAL: For malignant hyperthermia: stop the volatile agent, hyperventilate with 100% oxygen, give dantrolene, cool the patient and treat hyperkalemia. The dose is the place where two authorities disagree, and the disagreement is worth knowing rather than smoothing over. The Malignant Hyperthermia Association of the United States says 2.5 mg/kg initially, repeated as frequently as needed until the patient responds, and states that large doses above 10 mg/kg may be required, with its own guidance going as far as 10 to 20 or more mg/kg in individual patients. The FDA labels for the intravenous products say the opposite at both ends: a minimum of 1 mg/kg and a maximum cumulative dose of 10 mg/kg. Neither document is in this ledger yet, so both are carried here as general recommendations, and the MHAUS page carries no revision date. Follow your institution's malignant hyperthermia protocol and its cart. The MHAUS hotline is 1-800-644-9737.]

## Check yourself

Four items. Every option carries an explanation. Progress is not saved.

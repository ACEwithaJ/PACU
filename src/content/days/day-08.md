---
id: day-08
title: Myocardial injury after noncardiac surgery is silent
claim: Myocardial injury after noncardiac surgery is mostly silent and multiplies the risk of death within thirty days, so the decision not to measure troponin is a decision about what you are willing not to know, while whether looking changes outcome is unresolved.
evidence_mode: consensus_only
consensus_basis: registry
physiology_status: contested
clinical_claim_status: associational
evidence:
  - devereaux-2017
  - botto-2014
  - devereaux-2012
  - ruetzler-2021
draft: false
review_due: 2027-09-06
quiz:
  - id: pacu-d08-q1
    stem: "In the VISION high-sensitivity troponin T analysis (Devereaux 2017), what proportion of patients meeting MINS criteria did not experience an ischemic symptom?"
    teachingPoint: Silence is the rule, not the exception, so symptoms cannot be the screen.
    difficulty: basic
    examAlignment: [ABA-BASIC, ITE]
    tags: [cardiac, epidemiology]
    options:
      - text: About 93%
        correct: true
        explanation: 93.1% (3633 of 3904) had no ischemic symptom. Only 6.9% were symptomatic, which is why waiting for chest pain misses almost everyone.
      - text: About 50%
        correct: false
        explanation: Far too low. More than nine in ten MINS patients in the 2017 analysis were asymptomatic.
      - text: About 16%
        correct: false
        explanation: 15.8% is the proportion of MINS patients who did have an ischemic symptom in Botto 2014, which used a fourth-generation troponin T assay. It is the complement of silence in that older cohort, not the answer for the 2017 high-sensitivity analysis.
      - text: About 7%
        correct: false
        explanation: 6.9% is the proportion who did have a symptom. The question asks for those who did not.
  - id: pacu-d08-q2
    stem: "Under the 2017 VISION high-sensitivity troponin T criteria, which of the following meets the definition of MINS, assuming the rise is judged ischemic?"
    teachingPoint: In the 20 to under 65 ng/L band the absolute change matters; at 65 ng/L and above a single value is enough.
    difficulty: advanced
    examAlignment: [ABA-ADVANCED, ITE]
    tags: [cardiac, laboratory]
    options:
      - text: hsTnT 30 ng/L with an absolute change of 8 ng/L from a prior value
        correct: true
        explanation: The criteria are hsTnT 20 to less than 65 ng/L with an absolute change of at least 5 ng/L, or hsTnT of 65 ng/L or more. A value of 30 with a change of 8 satisfies the first arm.
      - text: hsTnT 30 ng/L with an absolute change of 3 ng/L
        correct: false
        explanation: In the 20 to under 65 band the absolute change must be at least 5 ng/L. A change of 3 does not qualify.
      - text: hsTnT 18 ng/L on a single measurement
        correct: false
        explanation: Below 20 ng/L does not meet either arm of the definition. The paper's own low-risk reference stratum is a peak below 5 ng/L, not below 20.
      - text: hsTnT 10 ng/L with a change of 6 ng/L
        correct: false
        explanation: The absolute value must be at least 20 ng/L for the change criterion to apply. A value of 10 does not enter the definition.
  - id: pacu-d08-q3
    stem: "In Botto 2014, MINS carried an adjusted 30-day mortality hazard ratio of 3.87. What does that figure establish, and what does it not?"
    teachingPoint: The association between MINS and death is strong; a benefit from detecting it has not been shown.
    difficulty: expert
    examAlignment: [ABA-ADVANCED, ITE]
    tags: [cardiac, epidemiology, evidence-appraisal]
    options:
      - text: It establishes a strong association between MINS and death; it does not establish that detecting MINS improves survival
        correct: true
        explanation: The hazard ratio is a cohort association. Whether finding MINS and acting on it improves anything is the open question this day names explicitly.
      - text: It establishes that troponin screening reduces mortality by 3.87 times
        correct: false
        explanation: No screening trial is on this page. A hazard ratio for an exposure says nothing about the effect of a test.
      - text: It establishes that MINS is a type 1 myocardial infarction
        correct: false
        explanation: Botto 2014 reports that 58.2% of MINS patients would not have met the universal definition of myocardial infarction. MINS is defined by injury, not by infarction type.
      - text: It shows the risk applies only to patients with ischemic symptoms
        correct: false
        explanation: The hazard applies to the MINS population as defined by troponin, most of whom had no symptom.
---
## Why it matters

A patient in the PACU after noncardiac surgery who is comfortable, warm and talking can be in the middle of a myocardial injury that will not announce itself. The VISION high-sensitivity troponin analysis found that 93.1% of patients meeting MINS criteria (3633 of 3904) had no ischemic symptom [[devereaux-2017]]. The injury is common, too: 17.9% of the cohort (95% CI 17.4 to 18.4) met the criteria [[devereaux-2017]].

The consequence of getting this wrong is a category error. Symptoms are treated as the screen, so the absence of symptoms is read as the absence of injury, and the patient with the highest population-attributable risk of any perioperative complication goes home undiagnosed [[botto-2014]].

## Mechanism

Surgery imposes a sustained supply-demand stress on the myocardium: tachycardia, catecholamine release, inflammation, hypercoagulability, anemia and hypotension, often together and often for days. Troponin leaks from myocytes that are injured under that stress. Whether most MINS represents supply-demand mismatch in a heart with fixed coronary disease, or plaque rupture, or a mixture whose proportions vary by patient, is not settled, and the status chip on this page says so. What is settled is that the injury is measurable by troponin and mostly not by symptoms, because the stress is diffuse and the patient is analgesed, sedated or both.

## Evidence

The definition comes from the 2017 VISION analysis of 21,842 patients, in which fifth-generation high-sensitivity troponin T was measured 6 to 12 hours after surgery and daily for three days [[devereaux-2017]]. MINS is defined there, verbatim, as myocardial injury caused by ischemia that occurs during or within 30 days after surgery and is independently associated with mortality, and the diagnostic criterion is an elevated postoperative hsTnT of 20 to less than 65 ng/L with an absolute change of at least 5 ng/L, or an hsTnT of 65 ng/L or more [[devereaux-2017]]. Both of this page's headline figures were read from that primary record on 2026-09-06: 3904 patients (17.9%, 95% CI 17.4 to 18.4) met MINS criteria, and 3633 of them (93.1%, 95% CI 92.2 to 93.8) had no ischemic symptom [[devereaux-2017]]. Thirty-day death occurred in 266 patients (1.2%, 95% CI 1.1 to 1.4), and it rose with the peak value: 3.0% at 20 to less than 65 ng/L, 9.1% at 65 to less than 1000, and 29.6% at 1000 or above [[devereaux-2017]].

The earlier VISION analysis used a fourth-generation troponin T assay and is superseded by the 2017 thresholds; it is on this page only to mark that the assay generation, and therefore the numbers, changed [[devereaux-2012]].

Botto 2014, in 15,065 patients aged 45 or older, defined MINS as a peak troponin T of 0.03 ng/mL or more judged due to ischemia and found it in 1200 patients (8.0%) [[botto-2014]]. Of those, 58.2% would not have met the universal definition of myocardial infarction [[botto-2014]]. MINS carried an adjusted hazard ratio for 30-day mortality of 3.87 (95% CI 2.96 to 5.08), and the highest population-attributable risk of any perioperative complication, 34.0% (95% CI 26.6 to 41.5) [[botto-2014]].

What follows a positive result is the subject of a scientific statement from the American Heart Association [[ruetzler-2021]]. Its surveillance population, surveillance interval and evidence classes have not yet been extracted from the held document, so this page does not quote them.

## What this does not show

Every source on this page is a cohort or a consensus statement. VISION is a prospective cohort, Botto 2014 is a cohort, and the AHA document is a statement [[devereaux-2017]] [[botto-2014]] [[ruetzler-2021]]. The claim that MINS is mostly silent and strongly associated with death is fully carried by that evidence. The claim that finding MINS and acting on it improves anything is not carried by anything here, and no trial on this page tests it. The obligation the day describes is an obligation to know, not a demonstrated benefit from knowing.

The two VISION eras do not share numbers. The incidence, the thresholds and the symptom proportion all changed when the assay changed from fourth-generation to high-sensitivity troponin T [[devereaux-2012]] [[devereaux-2017]]. A figure quoted for MINS without its assay generation is a figure without a denominator. The 2017 values are the current ones.

Botto 2014 has not yet been retrieved in full; its figures on this page are from the indexed abstract, and the 30-day outcome by troponin stratum from that paper is not available here [[botto-2014]].

## At the bedside

Do not use the absence of chest pain, dyspnea or ECG change to rule out myocardial injury after noncardiac surgery. The sources on this day say that the large majority of injured patients have none of those [[devereaux-2017]].

Know which assay your laboratory runs and which thresholds apply to it, because the definition is assay-specific [[devereaux-2017]]. [PRACTICE VARIES: whether and in whom postoperative troponin is measured routinely is an institutional decision; some centers screen high-risk patients on the first postoperative days, others measure only on clinical suspicion.]

If you decide not to measure, say what you are deciding: that you are willing not to know. If you decide to measure, know before the result arrives what you will do with a positive one, because the value of the test is entirely in what follows it, and the scientific statement that describes that pathway is the next thing to read [[ruetzler-2021]].

## Check yourself

Three items. Every option carries an explanation. Progress is not saved.

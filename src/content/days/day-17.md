---
id: day-17
title: Urinary retention is common, silent, and found with a scanner
claim: Postoperative urinary retention is common, mostly without symptoms, and predictable from age, intraoperative fluids, spinal anesthesia and the bladder volume on arrival, so the test in the PACU is a bladder scan, not a wait for a void.
evidence_mode: consensus_only
consensus_basis: registry
physiology_status: established
clinical_claim_status: associational
evidence:
  - keita-2005
  - lamonerie-2004
  - mulroy-2002
draft: true
review_due: null
quiz:
  - id: pacu-d17-q1
    stem: "Keita 2005 measured bladder volume by ultrasound on PACU arrival and before discharge in 313 patients. How was retention defined, and how common was it?"
    teachingPoint: "Retention is a volume plus an inability to void, and it occurred in one patient in six."
    difficulty: basic
    examAlignment: [ABA-BASIC, ITE, nursing]
    tags: [urinary-retention, pacu]
    options:
      - text: "Bladder volume above 600 mL with inability to void within 30 minutes; incidence 16%"
        correct: true
        explanation: "That definition gave an incidence of 16%. Independent predictors were age 50 or over, intraoperative fluids of 750 mL or more, and a bladder volume on PACU entry of 270 mL or more."
      - text: "Any patient who had not voided by discharge; incidence 2%"
        correct: false
        explanation: "The definition required a measured volume, and the incidence was far higher than 2%."
      - text: "Bladder volume above 200 mL; incidence 60%"
        correct: false
        explanation: "The threshold was 600 mL, and 16% met it."
      - text: "Retention was defined by catheterization only"
        correct: false
        explanation: "Ultrasound volume plus failure to void was the definition, which is why the study could find the silent cases."
  - id: pacu-d17-q2
    stem: "Lamonerie 2004 scanned 177 adults at recovery-room discharge. Which risk factor carried the largest odds ratio for a bladder volume above 500 mL?"
    teachingPoint: "Spinal anesthesia roughly quadrupled the odds; most distended bladders were asymptomatic."
    difficulty: advanced
    examAlignment: [ABA-ADVANCED, ITE]
    tags: [urinary-retention, regional]
    options:
      - text: "Spinal anesthesia, odds ratio 3.97"
        correct: true
        explanation: "Spinal anesthesia OR 3.97 (95% CI 1.32 to 11.89), surgery longer than 120 minutes OR 3.03, and age over 60 OR 2.11. 44% had more than 500 mL, and 54% of those, asymptomatic, could not void within 30 minutes."
      - text: "Age over 60, odds ratio 2.11"
        correct: false
        explanation: "Age was a risk factor with OR 2.11, the smallest of the three."
      - text: "Female sex"
        correct: false
        explanation: "Sex was not one of the three risk factors reported in the abstract."
      - text: "General anesthesia"
        correct: false
        explanation: "Spinal anesthesia, not general, carried the risk."
  - id: pacu-d17-q3
    stem: "In Mulroy 2002, low-risk ambulatory patients after short-acting spinal or epidural anesthesia were randomized to a pathway that did not require voiding before discharge. What replaced the void as the discharge gate?"
    teachingPoint: "A bladder ultrasound below a set volume replaced the requirement to void, and no patient came to harm."
    difficulty: advanced
    examAlignment: [ABA-ADVANCED, ITE, nursing]
    tags: [urinary-retention, ambulatory, discharge]
    options:
      - text: "A bladder ultrasound volume below 400 mL"
        correct: true
        explanation: "46 patients were discharged with a bladder ultrasound under 400 mL without voiding; 23 had more than 400 mL, of whom 20 voided within an hour and 3 were catheterized. The accelerated pathway was 22 minutes shorter, P=0.002, with no urinary problems or returns."
      - text: "A responsible adult's promise to monitor voiding at home"
        correct: false
        explanation: "The gate was a measured volume, not a promise."
      - text: "A dose of bethanechol"
        correct: false
        explanation: "No drug was used as the gate."
      - text: "Nothing; patients were discharged regardless of bladder volume"
        correct: false
        explanation: "Patients above 400 mL were held until they voided, and three were catheterized."
---
## Why it matters

The bladder is the organ the PACU manages by folklore: a void before discharge, or a wait until one happens. The sources on this day scanned bladders instead of waiting. At recovery-room discharge, 44% of unselected adults had more than 500 mL in the bladder, and 54% of those, with no symptoms, could not void within 30 min [[lamonerie-2004]]. On a PACU that measured volume on arrival and before discharge, retention defined as more than 600 mL with inability to void within 30 min occurred in 16% [[keita-2005]].

The consequence of getting this wrong is either a distended, silent bladder sent home, or a patient held for an hour for a void that a scanner would have shown was not needed.

## Mechanism

Micturition requires an intact sensory signal from a filling bladder, an intact spinal reflex, and cortical permission. Neuraxial anesthesia interrupts the first two for as long as the block lasts; opioids and anticholinergic drugs blunt detrusor contraction and the sensation of fullness; large volumes of intraoperative fluid fill the bladder faster than the recovering patient can empty it. The result is a bladder that fills without the patient knowing, which is why the sources find most distension asymptomatic and why the risk factors are the volume that went in, the block that stopped the signal, and the age that slowed the reflex.

## Evidence

Keita 2005 followed 313 PACU patients with ultrasound bladder volume on entry and before discharge [[keita-2005]]. Retention, a bladder volume above 600 mL with inability to void within 30 min, occurred in 16% [[keita-2005]]. The full text was read on 2026-09-06 and gives three independent predictors on multivariate analysis, each with an odds ratio and a P value: intraoperative fluids of 750 mL or more, odds ratio 2.3, P = 0.02; age 50 years or more, odds ratio 2.4, P = 0.008; and a bladder volume on PACU entry of 270 mL or more, odds ratio 4.8, P = 0.0001 [[keita-2005]]. The paper reports no confidence intervals for any of the three, so the precision of those estimates is unknown.

Lamonerie 2004 scanned 177 adults at recovery-room discharge: 44% had a volume above 500 mL, and 54% of those, asymptomatic, could not void within 30 min [[lamonerie-2004]]. Age over 60 carried an odds ratio of 2.11 (95% CI 1.01 to 4.38), spinal anesthesia 3.97 (1.32 to 11.89), and surgery longer than 120 min 3.03 (1.39 to 6.61) [[lamonerie-2004]].

Mulroy 2002 randomized low-risk ambulatory patients after short-acting spinal or epidural anesthesia between a standard pathway that required voiding and an accelerated pathway that did not [[mulroy-2002]]. The standard group was discharged at 153 (49) min; in the accelerated group 62 voided anyway, 46 were discharged with a bladder ultrasound below 400 mL, and 23 had more than 400 mL, of whom 20 voided within an hour and 3 were catheterized; the accelerated pathway was 22 min shorter (P=0.002) with no urinary problems or returns [[mulroy-2002]].

## What this does not show

Two of the three sources are cohorts, and the trial is small, single-institution and restricted to low-risk patients under 70 with short-acting neuraxial agents and no hernia, rectal or urological surgery [[keita-2005]] [[lamonerie-2004]] [[mulroy-2002]]. The risk factors are associations. The trial shows that a scanner can replace a void safely in a narrow population; it does not show that in every population, and it did not include peripheral nerve blocks.

The bladder-volume threshold for intervention differs between the sources, 600 mL in one and 500 mL in another, and the discharge gate in the trial was 400 mL; none of them establishes which number is right [[keita-2005]] [[lamonerie-2004]] [[mulroy-2002]]. [PRACTICE VARIES: the bladder volume at which a PACU catheterizes, and whether a scan or a void is the discharge criterion, differ between institutions.]

The retention risk after a peripheral nerve block, as distinct from a neuraxial one, was searched for again on 2026-09-06 and no study isolating peripheral blocks in a genuinely ambulatory population was found. The nearest is an inpatient knee arthroplasty series whose confidence interval is too wide to teach from and whose population is the wrong one. This page therefore says nothing about it rather than borrowing an inpatient number.

## At the bedside

Scan the bladder on arrival and before discharge in the patients the sources identify: over 50, given 750 mL or more of fluid, after a spinal, or arriving with 270 mL or more already in the bladder [[keita-2005]] [[lamonerie-2004]]. Do not wait for a symptom; most distended bladders do not produce one.

Use the volume, not the void, as the decision. A patient below the local threshold can leave without voiding; a patient above it is watched or catheterized [[mulroy-2002]].

Write the volume in the discharge note, because the ward that receives the patient will otherwise start the folklore again.


### General recommendations

These are the numbers residents are commonly taught and expected to know. This project has not yet read them from a primary source, so each is labeled and none carries a ledger key. Where one conflicts with your institution's protocol, the protocol wins.

[GENERAL: A bladder volume of about 500 to 600 mL is the threshold most institutions use to catheterize a patient who cannot void. The 800 mL figure that circulates alongside it is often misquoted, and the correction is worth carrying: it comes from a randomized trial that compared catheterizing at 500 mL with catheterizing at 800 mL in inpatients having fast-track hip and knee arthroplasty under spinal anesthesia. The higher threshold roughly halved the number of patients catheterized with no difference in any urological outcome. It is a catheterize-at threshold in inpatient arthroplasty, not evidence that an ambulatory patient can be left undrained at 800 mL, and no ledger row exists for that trial yet. Know which number your unit uses.]

## Check yourself

Three items. Every option carries an explanation. Progress is not saved.

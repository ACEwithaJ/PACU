---
id: day-09
title: Antiemetic prophylaxis multiplies, and rescue changes class
claim: Antiemetic interventions act independently, so their relative risks multiply and the absolute benefit of prophylaxis depends on baseline risk; rescue in the PACU must come from a pharmacological class the patient has not already received.
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
      - text: The guideline abandoned banding in favour of the exact 1999 percentages
        correct: false
        explanation: The reverse. The guideline rounds the 1999 values, which are themselves internally inconsistent at the four-factor step, and bands them.
  - id: pacu-d09-q4
    stem: "Apfel 1999 reports the four-factor risk as 79% in its abstract and 78% in its results text. Why does this matter when writing a teaching page?"
    teachingPoint: A source can disagree with itself; say which value you are using and why.
    difficulty: expert
    examAlignment: [ABA-ADVANCED]
    tags: [ponv, evidence-appraisal]
    options:
      - text: Because a page must pick one value and say which, rather than present the score as more precise than its source
        correct: true
        explanation: The paper is internally inconsistent at the four-factor value. Most citations use 79%. The honest move is to pick one, say which, or use the guideline's rounded 80%, which does not invite spurious precision.
      - text: Because the discrepancy invalidates the score
        correct: false
        explanation: A one-point discrepancy at one step does not invalidate a score cross-validated between two centres. It limits the precision one may claim.
      - text: Because the abstract is always correct and the results text should be ignored
        correct: false
        explanation: Neither part of a paper has automatic priority. The point is to acknowledge the discrepancy, not to adjudicate it silently.
      - text: Because the guideline uses 78% and the textbook uses 79%
        correct: false
        explanation: The Fifth guideline uses approximately 80%, a rounded value. Neither 78 nor 79 appears in its banding.
---
## Why it matters

Postoperative nausea and vomiting is the PACU problem residents believe they understand best, and the one they most often reason about wrongly. The wrong reasoning is additive: two antiemetics are twice as good as one, and a patient who vomits despite prophylaxis needs more of the same. The trial that tested prophylaxis factorially says the effects are independent and multiply, that the absolute benefit depends on where the patient started, and that prophylaxis is rarely warranted in low-risk patients [[apfel-2004]]. The current guideline says rescue must change class [[gan-2026]].

The consequence of getting this wrong runs in both directions. A low-risk patient is given three drugs for a small absolute gain, and a high-risk patient who vomits in the PACU is given a second dose of the drug that already failed.

## Mechanism

Each antiemetic class blocks a different input to the vomiting reflex: serotonin at 5-HT3 receptors, dopamine at D2 receptors, corticosteroid effects that are still incompletely characterised, and the removal of emetogenic anaesthetic agents themselves. Because the inputs are distinct, blocking one does not change the fraction of remaining risk that another can remove. That is what independence means pharmacologically, and it is why the arithmetic is multiplicative on the relative-risk scale: each intervention removes its own fraction of whatever risk is left. It is also why a rescue drug must act on an input the prophylaxis did not touch. Repeating a class that has already failed to control the reflex adds little except its side effects.

## Evidence

Apfel 1999 identified four predictors, female sex, history of motion sickness or PONV, non-smoking status and postoperative opioids, and cross-validated the score between two centres [[apfel-1999]]. With 0, 1, 2, 3 or 4 factors the abstract gives risks of 10%, 21%, 39%, 61% and 79%; the results text gives 78% at four factors, so the paper is internally inconsistent at that step, and the discriminating power was an area under the curve of about 0.75 [[apfel-1999]].

The IMPACT trial randomised 4123 of 5199 enrolled patients across 64 combinations of six interventions [[apfel-2004]]. Ondansetron, dexamethasone and droperidol each reduced relative risk by about 26%, propofol by 19%, and avoiding nitrous oxide by 12% [[apfel-2004]]. The authors' own words on combining them: all the interventions acted independently of one another and independently of the patients' baseline risk, so the relative risks of the combined interventions could be estimated by multiplying the relative risks of each [[apfel-2004]]. Absolute risk reduction, they add, is a critical function of baseline risk, and prophylaxis is rarely warranted in low-risk patients [[apfel-2004]].

The Fifth Consensus Guidelines, in print in 2026, supersede the Fourth [[gan-2026]] [[gan-2020]]. They retain the Apfel score but round the ladder to approximately 10%, 20%, 40%, 60% and 80%, banded as 0 factors low, 1 to 2 medium, and 3 or more high [[gan-2026]]. Guideline 4, verbatim: patients should receive rescue treatment from a different pharmacological class to the prophylactic agents administered [[gan-2026]]. If more than 6 h has elapsed, a second dose of a 5-HT3 antagonist or a butyrophenone may be considered if no alternatives exist; long-acting agents, aprepitant, fosaprepitant and palonosetron, should not be re-dosed in the PACU; transdermal scopolamine is not an effective rescue agent because of its slow onset; and amisulpride 10 mg is the FDA-recommended rescue dose, graded A3 [[gan-2026]].

The Fifth guideline also grades as A1 that low-dose gabapentinoids, below 300 mg of pregabalin or 900 mg of gabapentin per day, reduce PONV risk despite no significant analgesic effect, and as A1 that opioid-free anaesthesia reduces PONV compared with opioid-based anaesthesia [[gan-2026]].

## What this does not show

The multiplicative rule is a statement about relative risk. It does not mean every patient benefits equally: the same three interventions remove a large absolute risk from a patient at 80% and a small one from a patient at 10%, which is the whole reason the trial's conclusion discourages prophylaxis in low-risk patients [[apfel-2004]]. A page that quotes the relative risk reductions without the baseline is quoting half the result.

The Apfel score is a population instrument with an area under the curve of about 0.75 [[apfel-1999]]. It sorts patients into bands; it does not predict an individual. The two versions of its ladder, the 1999 values and the guideline's rounded ones, disagree by one or two points at every step, and this page uses the guideline's rounded values because they are current, they are what the guideline algorithm uses, and rounded values do not invite spurious precision [[gan-2026]].

The IMPACT per-intervention incidence table broken down by number of antiemetics has not been extracted from the held paper; only the summary relative risk reductions appear here [[apfel-2004]]. The erratum to the Fourth guideline has not been read, so no dose or table from the 2020 document is quoted on this page [[gan-2020-erratum]].

Drug-specific cautions the director's content list expects here, dexamethasone timing, the droperidol QT warning, ondansetron's QT effect and its limited action on the vestibular component, and scopolamine's anticholinergic burden in the elderly, are not in the held sources beyond what is quoted above. They are placeholders: [NUMBER NEEDED: dexamethasone timing at induction versus emergence] [NUMBER NEEDED: droperidol QT boxed warning wording and dose] [NUMBER NEEDED: ondansetron QT effect and vestibular limitation] [NUMBER NEEDED: scopolamine onset lag and anticholinergic burden in the elderly].

## At the bedside

Count the factors before the patient leaves the operating room and write the band down, using the guideline's rounded ladder and its three bands [[gan-2026]]. Match the number of prophylactic interventions to the band, remembering that the absolute benefit is what you are buying and the baseline risk is what sets its price [[apfel-2004]].

When a patient vomits in the PACU, the first question is which classes were already given. The rescue must come from a class the patient has not received [[gan-2026]]. Do not re-dose a long-acting agent, do not reach for a scopolamine patch as rescue, and reserve a second dose of the prophylactic class for the situation the guideline describes, more than 6 h elapsed and nothing else available [[gan-2026]].

[PRACTICE VARIES: the specific rescue agents stocked and the order in which they are used differ between institutions; the class-change rule does not.]

## Check yourself

Four items. Every option carries an explanation. Progress is not saved.

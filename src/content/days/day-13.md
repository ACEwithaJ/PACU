---
id: day-13
title: Delayed emergence is worked through in order
claim: Delayed emergence is worked through in a fixed order, from drug to paralysis to temperature to metabolism to the brain, and the two reversal agents carry their own hazards, because naloxone wears off before most opioids do and flumazenil can provoke seizures in patients who have been on benzodiazepines long term.
evidence_mode: consensus_only
consensus_basis: expert_consensus
physiology_status: established
clinical_claim_status: untested
evidence:
  - ellis-2017
  - link-1997
  - fda-naloxone-label-2023
  - fda-flumazenil-label-2025
  - bayable-2023
draft: true
review_due: null
quiz:
  - id: pacu-d13-q1
    stem: "A patient given naloxone in the PACU for opioid-induced somnolence wakes, then becomes drowsy again forty minutes later. What does the naloxone label say about this?"
    teachingPoint: "Naloxone's half-life is shorter than that of many opioids; the label requires continued surveillance and repeat dosing."
    difficulty: basic
    examAlignment: [ABA-BASIC, ITE, nursing]
    tags: [pharmacology, opioids, emergence]
    options:
      - text: "The duration of action of some opioids may exceed that of naloxone, so the patient should be kept under continued surveillance and repeated doses given as necessary"
        correct: true
        explanation: "That is the label's Dosage and Administration text. The serum half-life in adults ranged from 30 to 81 minutes (mean 64 minutes) in one study, shorter than most of the opioids it reverses."
      - text: "A single dose of naloxone reverses all opioid effect for at least four hours"
        correct: false
        explanation: "The label says the opposite: some opioids outlast naloxone, and re-narcotization is expected."
      - text: "Re-sedation after naloxone cannot be opioid-related and indicates an intracranial event"
        correct: false
        explanation: "Re-narcotization is the first explanation once oxygenation, ventilation, circulation and glucose have been checked. An intracranial event sits at the end of the ordered differential, not the beginning."
      - text: "The patient should be given flumazenil"
        correct: false
        explanation: "Flumazenil reverses benzodiazepines, not opioids, and carries its own boxed warning."
  - id: pacu-d13-q2
    stem: "In which patients does the flumazenil label's boxed warning say seizures are most frequent?"
    teachingPoint: "Flumazenil is dangerous in exactly the patients most likely to be slow to wake from a benzodiazepine."
    difficulty: basic
    examAlignment: [ABA-BASIC, ITE]
    tags: [pharmacology, benzodiazepines, emergence]
    options:
      - text: "Patients on benzodiazepines for long-term sedation, and overdose patients showing signs of serious cyclic antidepressant overdose"
        correct: true
        explanation: "That is the boxed warning. The adult reversal dose is 0.2 mg over 15 seconds, repeated at 60-second intervals up to four further doses, to a maximum of 1 mg; re-sedation occurred in 3% to 9% of conscious-sedation studies, and the terminal half-life is 40 to 80 minutes."
      - text: "Patients who have never received a benzodiazepine"
        correct: false
        explanation: "Chronic exposure, not naivety, is the risk the warning names."
      - text: "Children only"
        correct: false
        explanation: "The warning is not age-specific; it is about chronic benzodiazepine use and cyclic antidepressant overdose."
      - text: "There is no seizure warning on the flumazenil label"
        correct: false
        explanation: "The seizure warning is the boxed warning, the strongest a label carries."
  - id: pacu-d13-q3
    stem: "Link 1997 studied central anticholinergic syndrome in the recovery room. After excluding prolonged anesthetic or relaxant effect, respiratory depression and metabolic disorder, what did the study find?"
    teachingPoint: "Central anticholinergic syndrome is a diagnosis of exclusion that responds to physostigmine and can relapse."
    difficulty: advanced
    examAlignment: [ABA-ADVANCED, ITE]
    tags: [pharmacology, emergence]
    options:
      - text: "18 of 962 patients (1.9%) had a distinct central anticholinergic syndrome; all woke after physostigmine, and 6 relapsed and needed a second dose"
        correct: true
        explanation: "The syndrome was diagnosed only after the commoner causes were excluded, which is the order this day teaches. Untreated somnolence had lasted more than 2 hours in 6 of the 18, and one patient needed a third dose."
      - text: "Central anticholinergic syndrome did not occur"
        correct: false
        explanation: "It occurred in 1.9% of recovery-room inpatients over two months."
      - text: "Physostigmine was ineffective"
        correct: false
        explanation: "All 18 woke after physostigmine; the problem was relapse, not failure."
      - text: "It was diagnosed before other causes were considered"
        correct: false
        explanation: "The study excluded the other causes first, which is why the figure is credible."
---
## Why it matters

A patient who does not wake is the PACU emergency that is most often mishandled by being handled in the wrong order. The list of causes is long and the dangerous ones are not the common ones, so the sequence matters more than the list. The simulation case used to teach this groups the causes as residual anesthetics, pharmacological actions, surgical complications, neurological events, endocrine disturbances and patient factors [[ellis-2017]]. The two drugs reached for first, naloxone and flumazenil, each carry a label warning that bears directly on the PACU: naloxone can be outlasted by the opioid it reverses, and flumazenil can provoke seizures in exactly the patients most likely to be slow to wake from a benzodiazepine [[fda-naloxone-label-2023]] [[fda-flumazenil-label-2025]].

The consequence of getting this wrong runs two ways: a reversal agent given for a cause it does not treat, or a stroke found after an hour of waiting for the anesthetic to wear off.

## Mechanism

Emergence requires that the airway is open and gas is moving, that the circulation is delivering it, that the brain is fuelled, that the muscles can obey, that the drug effect at the brain has fallen below the threshold for consciousness, that the brain is warm enough and its electrolytes are within the range it tolerates, and that the brain itself is intact. Each of those is a separate mechanism with a separate test, and each can look like the others from the end of the bed.

The order the day teaches follows danger first, then frequency and reversibility. First, the things that kill in minutes and are already on the monitor: oxygenation, ventilation, and circulation. Second, glucose, because a meter answers in seconds. Third, residual paralysis, because a quantitative monitor answers in seconds and the patient cannot tell you. Fourth, residual drug: volatile, opioid, benzodiazepine, and the anticholinergic syndrome. Fifth, temperature, sodium and the other electrolytes. Last, because it is the rarest and the least reversible, the intracranial event. Putting oxygenation first is not a claim about what is commonest; it is a claim about what a delay costs, and it is the same order every resuscitation framework teaches. The order is expert consensus, not a trial result, and the status chip says so.

Central anticholinergic syndrome sits inside the drug tier: a central effect of antimuscarinic drugs that presents as somnolence or agitation and responds to physostigmine [[link-1997]].

## Evidence

The evidence for the differential is descriptive. Link 1997 followed 962 recovery-room inpatients for two months and, after excluding prolonged anesthetic or relaxant effect, respiratory depression and metabolic disorder, found a distinct central anticholinergic syndrome in 18 (1.9%), with 6 of 60 after hysterectomy (P=0.003); untreated somnolence had lasted more than 2 h in 6 of the 18, all woke after physostigmine, and 6 relapsed and needed a second dose, one a third [[link-1997]].

A 2023 cross-sectional study describes the distribution of normal emergence, delayed awakening, hypoactive emergence and emergence delirium and the factors associated with delay; several of its reported confidence intervals do not contain their own point estimates, so this page uses it for the shape of the differential and quotes none of its numbers [[bayable-2023]].

The naloxone label states that, since the duration of action of some opioids may exceed that of naloxone, the patient should be kept under continued surveillance and repeated doses given as necessary; in one study the adult serum half-life ranged from 30 to 81 min (mean 64 min); for postoperative opioid depression the dose is increments of 0.1 to 0.2 mg intravenously at two to three minute intervals to the desired degree of reversal; and abrupt reversal may result in nausea, vomiting, sweating, tremulousness, tachycardia, increased blood pressure, seizures, ventricular tachycardia and fibrillation, pulmonary edema and cardiac arrest [[fda-naloxone-label-2023]].

The flumazenil label carries a boxed warning: the use of flumazenil has been associated with the occurrence of seizures, most frequent in patients who have been on benzodiazepines for long-term sedation or in overdose cases showing signs of serious cyclic antidepressant overdose [[fda-flumazenil-label-2025]]. For reversal of sedation in adults the dose is 0.2 mg intravenously over 15 s, with further 0.2 mg doses at 60-s intervals up to four additional doses and a maximum cumulative dose of 1 mg; re-sedation occurred in 3% to 9% of conscious-sedation studies and the terminal half-life is 40 to 80 min [[fda-flumazenil-label-2025]].

## What this does not show

No source on this page tests the ordered differential against any other order, or against no order. The sequence is expert consensus about frequency and reversibility, and the simulation case that carries it is an educational resource, not a study [[ellis-2017]]. The labels establish the pharmacology of the two reversal agents; they say nothing about how often each cause occurs in a PACU.

The requirement that a neurological examination be performed and documented before the patient leaves the PACU is on the director's content list and has no source: [TODO_VERIFY: a society standard or guideline statement requiring neurological examination before PACU discharge in delayed emergence.] It remains consensus on this page.

The anesthetic-specific numbers the list expects, how long each volatile agent or opioid delays emergence in a given patient, are not in the held sources: [NUMBER NEEDED: incidence of delayed emergence by anesthetic agent and the time thresholds used to define it]. A published study of physostigmine after desflurane has been retracted and is not cited here.

## At the bedside

Work the order and say it aloud: oxygen and carbon dioxide, circulation, glucose, paralysis, drug, temperature and sodium, brain. Look at the saturation, the capnograph and the chest before anything else, and take a blood gas if the carbon dioxide is a question. Each step has a test that takes less time than waiting: the oximeter and capnograph, the blood pressure, the glucose meter, the twitch monitor, the drug chart, the thermometer, the electrolytes. Do not skip to the end, and do not stop before it.

If you give naloxone, you have committed to watching the patient for longer than the naloxone lasts; the label says so, and the re-narcotized patient is the one who has been handed to the ward in the meantime [[fda-naloxone-label-2023]]. Give it in the label's small increments rather than a full ampoule, because abrupt reversal has its own list of harms [[fda-naloxone-label-2023]].

Before you give flumazenil, ask what benzodiazepines the patient takes at home. The boxed warning is about chronic use, and the answer changes the decision [[fda-flumazenil-label-2025]].

When the commoner causes are excluded and the patient remains somnolent or agitated after antimuscarinic drugs, think of central anticholinergic syndrome; it responds to physostigmine and it can relapse [[link-1997]]. [PRACTICE VARIES: the availability of physostigmine, and the local threshold for imaging a patient who has not woken, differ between institutions.]


### General recommendations

These are the numbers residents are commonly taught and expected to know. This project has not yet read them from a primary source, so each is labeled and none carries a ledger key. Where one conflicts with your institution's protocol, the protocol wins.

[GENERAL: Three figures in this sequence carry no source. Naloxone in smaller increments of 0.04 to 0.1 mg is widely used to avoid abrupt reversal, and it is not the label figure; the label increments of 0.1 to 0.2 mg are cited in the evidence slot above, as is the flumazenil regimen. Physostigmine is usually quoted as 0.5 to 2 mg intravenously given slowly, with atropine available for bradycardia and an awareness of its seizure risk; that dose is not in any source this project holds. And dextrose for a low glucose is universal practice rather than a sourced recommendation.]

## Check yourself

Three items. Every option carries an explanation. Progress is not saved.

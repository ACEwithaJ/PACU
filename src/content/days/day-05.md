---
id: day-05
title: Postoperative hypotension is a dose
claim: Postoperative hypotension behaves like a dose, with depth and duration below an absolute threshold predicting myocardial injury and death, and the evidence for that is associational, not causal.
evidence_mode: consensus_only
consensus_basis: registry
physiology_status: established
clinical_claim_status: associational
evidence:
  - sessler-2018
  - liem-2020
  - salmasi-2017
  - mcevoy-2019
  - sessler-2019
draft: false
review_due: 2027-09-06
quiz:
  - id: pacu-d05-q1
    stem: "In the POISE-2 substudy (Sessler 2018), the intraoperative odds ratio of 1.08 for the composite of myocardial infarction and death is expressed per what unit of exposure?"
    teachingPoint: Hypotension is quantified as time below a threshold, so its risk is stated per increment of duration, not per event.
    difficulty: basic
    examAlignment: [ABA-BASIC, ITE]
    tags: [hemodynamics, epidemiology]
    options:
      - text: Per 10-minute increase in the duration of hypotension
        correct: true
        explanation: The 1.08 (98.3% CI 1.03 to 1.12) is per 10-minute increase in intraoperative hypotension duration. Duration is the exposure unit, which is what makes hypotension a dose.
      - text: Per 10 mmHg fall in systolic pressure below baseline
        correct: false
        explanation: The exposure was clinically important hypotension, defined as a systolic pressure below 90 mmHg requiring treatment, counted by duration. Depth below baseline was not the unit.
      - text: Per episode of hypotension, regardless of length
        correct: false
        explanation: Counting episodes would discard the information the study was designed to capture. The odds ratio rises with each additional 10 minutes.
      - text: Per patient who received any vasopressor
        correct: false
        explanation: Vasopressor use was not the exposure. The analysis used measured hypotension and its duration.
  - id: pacu-d05-q2
    stem: "In Liem 2020, patients aged 60 or older were monitored on a high-dependency ward after intermediate-to-high-risk noncardiac surgery. Which statement about the intraoperative exposure in that study is correct?"
    teachingPoint: A day about postoperative hypotension has a source in which the intraoperative exposure was not independently associated with injury.
    difficulty: advanced
    examAlignment: [ABA-ADVANCED, ITE]
    tags: [hemodynamics, epidemiology]
    options:
      - text: Intraoperative hypotension was the strongest predictor of myocardial injury
        correct: false
        explanation: The opposite. The study found that intraoperative hypotension, independently, was not associated with myocardial injury.
      - text: Intraoperative hypotension was independently not associated with myocardial injury
        correct: true
        explanation: Liem 2020 reports that intraoperative hypotension, which independently was not associated with myocardial injury, is separable from the postoperative exposure. The postoperative exposure carried the association.
      - text: Intraoperative hypotension was not measured
        correct: false
        explanation: It was measured and analyzed. The finding was a null independent association, which is a result, not an omission.
      - text: The study excluded patients with any intraoperative hypotension
        correct: false
        explanation: No such exclusion is described. The cohort was defined by age and surgical risk, not by intraoperative pressure.
  - id: pacu-d05-q3
    stem: "A resident wants to write a PACU hypotension protocol using a single fixed mean arterial pressure number rather than a percentage below each patient's baseline. Which ledger source most directly supports doing that?"
    teachingPoint: Absolute thresholds perform about as well as relative reductions, which is what allows a protocol to use one number.
    difficulty: advanced
    examAlignment: [ABA-ADVANCED, ITE, nursing]
    tags: [hemodynamics, protocol]
    options:
      - text: Salmasi 2017, which found absolute thresholds perform about as well as percentage reductions from baseline
        correct: true
        explanation: Salmasi 2017 is the absolute-versus-relative comparison. Its finding that absolute MAP thresholds perform about as well as percentage reductions from baseline is what lets a protocol use a fixed number.
      - text: Sessler 2018, because POISE-2 randomized patients to a blood pressure target
        correct: false
        explanation: POISE-2 randomized aspirin and clonidine, not a pressure target. Hypotension in the substudy was an observed exposure.
      - text: The POQI statements, which specify a single mandatory MAP for every patient
        correct: false
        explanation: The POQI statements describe ranges and risk, and record that a 2007 review found 140 definitions of intraoperative hypotension. They do not mandate one number for everyone.
      - text: Liem 2020, because it used only relative thresholds
        correct: false
        explanation: Liem 2020 characterized multiple absolute MAP thresholds from 50 to 75 mmHg by cumulative minutes, duration and area under threshold. It is an absolute-threshold study, but the direct absolute-versus-relative comparison is Salmasi 2017.
  - id: pacu-d05-q4
    stem: "The POQI postoperative blood pressure statement describes the odds of a poor outcome with hypotension on postoperative days 1 to 4 as almost three times as high. Why does the statement single out that period?"
    teachingPoint: The largest hypotension exposure is the one nobody is watching.
    difficulty: advanced
    examAlignment: [ABA-ADVANCED, ITE, nursing]
    tags: [hemodynamics, ward, monitoring]
    options:
      - text: Because prolonged hypotension can go unseen when ward vital signs are taken only every 4 to 6 hours
        correct: true
        explanation: The statement links the elevated odds on days 1 to 4 to intermittent ward observation, where vital signs are taken only every 4 to 6 hours and prolonged hypotension can go unseen.
      - text: Because anesthetic drugs reach peak effect on postoperative day 2
        correct: false
        explanation: The statement makes no such claim. The point is about observation frequency, not drug pharmacology.
      - text: Because the PACU does not measure blood pressure after the first hour
        correct: false
        explanation: PACU observation is continuous by staffing. The unobserved period the statement describes begins after the patient leaves.
      - text: Because hypotension on those days is always caused by bleeding
        correct: false
        explanation: The statement does not attribute the hypotension to a single cause. It describes exposure and observation, not etiology.
---
## Why it matters

Residents leave the operating room having learned to treat a low number. The PACU is where that number stops being watched continuously, and the ward is where it stops being watched at all. The sources for this day quantify hypotension as an exposure, by depth and duration, and find that the exposure keeps accruing after surgery ends. The POQI postoperative statement puts it plainly: ward vital signs are taken only every 4 to 6 h, so prolonged hypotension on postoperative days 1 to 4 can go unseen, and the odds of a poor outcome in that period are described as almost three times as high [[mcevoy-2019]].

The consequence of getting this wrong is not one missed reading. It is treating hypotension as a moment rather than as an accumulating dose, and handing the largest part of that dose to the setting least able to see it.

## Mechanism

Perfusion of the myocardium and the kidney depends on the pressure gradient across each organ's vascular bed. When mean pressure falls below the range those beds can autoregulate, flow falls with pressure, and oxygen delivery falls with it. In a heart that is already working harder after surgery, from pain, catecholamines and inflammation, supply falls while demand rises. Injury is a function of how far pressure falls and for how long, because the deficit accumulates over time rather than occurring at a threshold. That is why every source on this day expresses the exposure in minutes below a level, not as a single reading.

## Evidence

The POQI consensus statement on intraoperative hypotension records that a mean arterial pressure below 60 to 70 mmHg is associated with myocardial injury, acute kidney injury and death, and that injury is a function of both severity and duration [[sessler-2019]]. The same statement notes that a 2007 systematic review found 140 different definitions of intraoperative hypotension across 130 studies, which is why the day insists on an absolute threshold and a duration rather than a word [[sessler-2019]].

Sessler 2018 analyzed 9765 patients from the POISE-2 trial, in which clinically important hypotension was a systolic pressure below 90 mmHg requiring treatment [[sessler-2018]]. Hypotension occurred in 42% of patients; 590 (6.0%) had a myocardial infarction and 116 (1.2%) died within 30 days [[sessler-2018]]. For the composite of infarction and death, the intraoperative odds ratio was 1.08 (98.3% CI 1.03 to 1.12, P less than 0.001) per 10-minute increase in hypotension duration, and for the remainder of the day of surgery it was 1.03 (98.3% CI 1.01 to 1.05) per 10-minute increase [[sessler-2018]]. On postoperative days 1 to 4 the odds ratio was 2.83 (98.3% CI 1.26 to 6.35, P=0.002), but that exposure was binary, hypotension present or absent, so it cannot be quoted in the same per-time units as the other two [[sessler-2018]].

Liem 2020 followed 1710 patients aged 60 or older after intermediate-to-high-risk noncardiac surgery, with frequent hemodynamic sampling on a high-dependency ward for the first 24 h, and characterized multiple absolute MAP thresholds from 50 to 75 mmHg by cumulative minutes, duration and area under threshold [[liem-2020]]. Two cumulative hours below 60 mmHg occurred in 144 patients (8%), and four hours below 75 mmHg in 824 (48%) [[liem-2020]]. The primary outcome was a peak high-sensitivity troponin T of 50 ng/L or more within three postoperative days, and adjusted odds ratios across the thresholds ranged from 2.18 to 3.26 [[liem-2020]].

Salmasi 2017 supplies the comparison that makes a protocol possible: absolute MAP thresholds perform about as well as percentage reductions from each patient's baseline [[salmasi-2017]]. A PACU can therefore use one fixed number without pretending to know every patient's baseline.

The POQI postoperative statement gathers these into a bedside form: a systolic pressure below 90 mmHg, or more than 30% below baseline, is likely to put most patients at risk of end-organ injury, and risk rises with each 10-minute epoch of hypotension intraoperatively and on the day of surgery [[mcevoy-2019]].

## What this does not show

None of these sources randomized anyone to a blood pressure. Sessler 2018 sits inside a randomized trial, but hypotension there was an observed exposure, not an allocated one, so the design is a cohort analysis within a trial population [[sessler-2018]]. Liem 2020, Salmasi 2017 and both POQI statements are cohort and consensus [[liem-2020]] [[salmasi-2017]] [[mcevoy-2019]] [[sessler-2019]]. The dose-and-duration structure is real and quantified, and it is associational. Whether treating the exposure changes any outcome is not established by anything on this page.

Liem 2020 also carries a result that cuts against the intuition the day builds on: in that cohort, intraoperative hypotension was independently not associated with myocardial injury [[liem-2020]]. The exposure that carried the association was the postoperative one. That is the reason this day is about the PACU and the ward rather than the operating room, and it is also a warning against assuming that the intraoperative and postoperative exposures are the same thing measured twice.

The 98.3% confidence intervals in Sessler 2018 are not a misprint: they reflect the trial's correction for multiple comparisons, and they should be quoted as printed [[sessler-2018]].

Until this day was cleared it also carried a working differential for PACU hypotension and a set of first-move vasopressor doses, marked as general recommendations. Neither had a source in this ledger, and none of those agents has outcome evidence in this setting, so both were removed rather than relabeled as a local preference. What survives here is what the sources actually establish: that hypotension is an exposure that accrues, that absolute thresholds perform about as well as thresholds relative to a patient's own baseline, and that anaphylaxis presents as hypotension often enough to belong on any list you make.
## At the bedside

Record hypotension the way the sources measure it: how far below which number, and for how long. A single reading is a sample of an exposure, not the exposure.

When you set a PACU threshold, use an absolute number and say what it is. Salmasi 2017 is the reason you may do that without a baseline for every patient [[salmasi-2017]]. [PRACTICE VARIES: the absolute MAP or systolic threshold at which a PACU protocol triggers treatment, and the first-line treatment, differ between institutions; follow local protocol.]

Before you sign a patient out to a ward where vital signs are taken every 4 to 6 h, ask how much of their hypotension dose has already accrued and whether the next four hours unobserved are acceptable [[mcevoy-2019]]. The decision to discharge from the PACU is a decision about who watches the pressure next.

Treat the association as a reason to look and to act on a protocol, not as proof that the protocol changes outcome. Say so when you teach it.

## Check yourself

Four items. Every option carries an explanation. Progress is not saved.

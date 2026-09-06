---
id: day-04
title: PACU discharge is a handoff into the window where respiratory depression happens
claim: Opioid-induced respiratory depression after surgery is episodic and mostly unwitnessed, begins hours after PACU discharge and peaks overnight on wards where intermittent checks miss most of it, so the PACU discharge decision is a handoff into the window where these events actually happen.
evidence_mode: consensus_only
consensus_basis: registry
physiology_status: established
clinical_claim_status: associational
evidence:
  - khanna-2020
  - driver-2021
  - sun-2015
  - taenzer-2010
  - taenzer-2010-erratum
  - epstein-2014
draft: false
review_due: 2027-09-06
quiz:
  - id: pacu-d04-q1
    stem: "In Driver 2021, a post hoc analysis of PRODIGY patients monitored on general care floors, what was the median time from the end of surgery to the start of monitoring, and why does it matter for a PACU curriculum?"
    teachingPoint: The strongest respiratory-depression data begin after the PACU, so they describe the handoff, not the PACU.
    difficulty: expert
    examAlignment: [ABA-ADVANCED, ITE]
    tags: [respiratory, opioids, evidence-appraisal]
    options:
      - text: A median of 4.3 hours, so the study cannot support a claim about the PACU itself
        correct: true
        explanation: Monitoring began a median 4.3 h (3.2 to 6.2) after the end of surgery, well after PACU discharge. The study describes what happens in the window the PACU hands the patient into.
      - text: Immediately on PACU arrival, so the study describes PACU events
        correct: false
        explanation: Monitoring started on the ward. Both main ward studies on this page exclude the PACU by design.
      - text: 8.8 hours, which was the time to the first respiratory depression episode
        correct: false
        explanation: 8.8 h (5.1 to 18.0) is the median time to the first episode. Monitoring began earlier, at a median 4.3 h.
      - text: The study did not record when monitoring began
        correct: false
        explanation: It did, and that number is the decisive one for how the day may use it.
  - id: pacu-d04-q2
    stem: "In Sun 2015, blinded continuous oximetry was started on arrival to the ward after PACU discharge. Of episodes in which saturation was below 90% for at least an hour, what proportion did nursing records capture?"
    teachingPoint: Intermittent spot checks on the ward missed nine in ten prolonged desaturations.
    difficulty: basic
    examAlignment: [ABA-BASIC, ITE, nursing]
    tags: [respiratory, monitoring, ward]
    options:
      - text: About 10%; nurses missed 90% of them
        correct: true
        explanation: Nursing records recorded clinical hypoxemia in only 5% of the subset examined, and nurses missed 90% of episodes where saturation was below 90% for at least an hour.
      - text: About 50%
        correct: false
        explanation: Far higher than the study found. Intermittent observation captured a small minority.
      - text: Nearly all, because ward nurses check saturation every four hours
        correct: false
        explanation: A four-hourly check is exactly the observation pattern that missed the episodes. An hour-long desaturation can sit entirely between two checks.
      - text: The study did not compare with nursing records
        correct: false
        explanation: The comparison with nursing records is the structural-blindness result the day rests on.
  - id: pacu-d04-q3
    stem: "Taenzer 2010 reported rescue events falling from 3.4 to 1.2 after continuous oximetry surveillance was introduced on one ward. Per what denominator must those rates be quoted?"
    teachingPoint: An erratum ten years later corrected the denominator; quoting the original label is quoting a wrong number.
    difficulty: advanced
    examAlignment: [ABA-ADVANCED, ITE]
    tags: [monitoring, evidence-appraisal]
    options:
      - text: Per 1000 patient days
        correct: true
        explanation: The 2020 erratum corrected the denominator label from patient discharges to patient days. The authors state the findings are unaltered, but any page quoting 3.4 to 1.2 must say per 1000 patient days.
      - text: Per 1000 patient discharges
        correct: false
        explanation: That was the original, incorrect label. Many secondary sources still reproduce it.
      - text: Per 100 admissions
        correct: false
        explanation: Neither the original nor the corrected paper used this denominator.
      - text: Per month of surveillance
        correct: false
        explanation: The comparison was 11 months before and 10 months after, but the rates are expressed per 1000 patient days.
  - id: pacu-d04-q4
    stem: "In PRODIGY (Khanna 2020), 1335 patients on parenteral opioids were monitored with blinded continuous capnography and oximetry on inpatient wards. What proportion had at least one respiratory depression episode?"
    teachingPoint: Nearly half of ward patients on parenteral opioids had at least one episode by the study's definition.
    difficulty: basic
    examAlignment: [ABA-BASIC, ITE, nursing]
    tags: [respiratory, opioids, monitoring]
    options:
      - text: 46%
        correct: true
        explanation: 46% of patients had at least one episode, defined by respiratory rate, saturation, end-tidal carbon dioxide, apnea, or a respiratory opioid-related adverse event, across 16 sites.
      - text: 4.6%
        correct: false
        explanation: An order of magnitude too low. The point of blinded continuous monitoring was that the episodes were common and otherwise unseen.
      - text: 90%
        correct: false
        explanation: 90% is the proportion of prolonged desaturations that nurses missed in Sun 2015, not the PRODIGY episode rate.
      - text: 8.8%
        correct: false
        explanation: 8.8 is the median number of hours to the first episode in Driver 2021, not a proportion.
---
## Why it matters

The PACU discharge order is written by the person with the most continuous view of the patient, and it sends the patient to the place with the least. The sources for this day were designed to see what ward observation cannot. On the ward, with blinded continuous monitoring, 46% of patients on parenteral opioids had at least one respiratory depression episode [[khanna-2020]]. Nurses missed 90% of episodes in which saturation stayed below 90% for at least an hour [[sun-2015]]. The first episode arrived a median 8.8 h after surgery, and all episodes peaked between 02:00 and 06:00 [[driver-2021]].

The consequence of getting this wrong is a discharge decision made as if the PACU's observation continued after the patient left it.

## Mechanism

Opioids depress the brainstem response to carbon dioxide and, with sedatives and residual anesthetic, reduce upper airway tone and the arousal that would normally terminate an obstructed or hypopneic breath. The result is episodic rather than continuous: periods of slow or shallow breathing, or obstruction, interrupted by arousals, each episode ending before the next spot check and leaving nothing behind for an intermittent observer to see. Sleep deepens the depression, which is why the events cluster overnight. Continuous monitoring sees the episodes; a check every few hours samples the gaps between them.

## Evidence

PRODIGY monitored 1335 patients on parenteral opioids with blinded continuous capnography and oximetry at 16 sites in the US, Europe and Asia, with vital signs otherwise taken intermittently per standard of care [[khanna-2020]]. A respiratory depression episode was a respiratory rate of 5 per minute or less, a saturation of 85% or less, an end-tidal carbon dioxide of 15 mmHg or less or 60 mmHg or more for at least 3 min, apnea longer than 30 s, or any respiratory opioid-related adverse event; 46% of patients had at least one, and a risk score was derived from 46 candidate factors [[khanna-2020]].

Driver 2021, a post hoc analysis of PRODIGY patients from two US sites, found 2539 episodes in 155 of 250 patients (62.0%), a median time to the first episode of 8.8 h (5.1 to 18.0), a peak of initial events between 14:00 and 20:00 and a peak of all episodes between 02:00 and 06:00 [[driver-2021]]. Monitoring began a median 4.3 h (3.2 to 6.2) after the end of surgery, well after PACU discharge [[driver-2021]].

Sun 2015 started blinded continuous oximetry on arrival to the ward after PACU or ICU discharge in 833 patients [[sun-2015]]. Saturation was below 90% for at least 10 min per hour in 21% and at least 20 min per hour in 8%; 37% had at least one episode below 90% lasting an hour or more, 11% an episode of 6 h or more, and 3% were below 80% for 30 min or more [[sun-2015]]. Nursing records captured clinical hypoxemia in only 5% of the subset examined, and nurses missed 90% of episodes below 90% lasting at least an hour [[sun-2015]].

Taenzer 2010 introduced continuous oximetry surveillance with pager notification on one postoperative unit, 11 months before and 10 months after, with two concurrent unchanged comparison units: rescue events fell from 3.4 (1.89 to 4.85) to 1.2 (0.53 to 1.88) and ICU transfers from 5.6 (3.7 to 7.4) to 2.9 (1.4 to 4.3) per 1000 patient days [[taenzer-2010]]. The denominator was corrected by erratum ten years later, from patient discharges to patient days; the authors state the findings are unaltered [[taenzer-2010-erratum]].

Inside the PACU, Epstein 2014 recorded saturation every 30 to 60 s in 137,757 patients and compared hypoxemic episodes, saturation below 90% for at least 2 min, beginning before and after 30 min from admission; it carries the observation that desaturation is not front-loaded into the first minutes of the PACU stay [[epstein-2014]].

## What this does not show

Both of the day's main ward sources exclude the PACU by design. Driver's monitoring began a median 4.3 h after surgery and Sun's began on arrival to the ward, so neither can support a claim that PACU observation is structurally blind [[driver-2021]] [[sun-2015]]. PACU observation is continuous by staffing rather than by device, and the only PACU-specific source here is about the timing of desaturation within the stay, not about opioid-induced respiratory depression as such [[epstein-2014]]. That is why the day is framed around the discharge decision and the window it hands the patient into, not around the PACU itself.

Nothing here is a randomized trial. PRODIGY is prospective observational with blinded monitoring, Sun 2015 is blinded observational, Driver 2021 is a post hoc analysis, Epstein 2014 is a retrospective analysis of recorded data, and Taenzer 2010 is a before-and-after study with concurrent controls [[khanna-2020]] [[sun-2015]] [[driver-2021]] [[epstein-2014]] [[taenzer-2010]]. No trial on this page shows that continuous monitoring changes outcome, in the PACU or on the ward. Taenzer's fall in rescue events is the closest thing to it and it is not randomized [[taenzer-2010]].

The PRODIGY primary record carries a PubMed identifier ambiguity in one institutional record that has not been resolved [[khanna-2020]].

## At the bedside

When you write the PACU discharge order, name the window you are sending the patient into: the first episode is likeliest hours from now and the peak is overnight [[driver-2021]]. Ask what will be watching then, and how often.

Treat the intermittent ward check as what the sources show it to be, a sample that misses most prolonged desaturation [[sun-2015]]. Where continuous monitoring exists for a patient on parenteral opioids, the case for using it after PACU discharge is the case this day makes; where it does not, the discharge decision should be made knowing that. [PRACTICE VARIES: which patients receive continuous oximetry or capnography after PACU discharge, and on which units, is an institutional decision; find out what your wards can see.]

Do not read a quiet PACU stay as evidence that the ward will be quiet. The PACU is the part of the day when someone is looking.

## Check yourself

Four items. Every option carries an explanation. Progress is not saved.

---
id: day-03
title: Supplemental oxygen hides hypoventilation
claim: Supplemental oxygen does not prevent hypoventilation; it removes the pulse oximeter's ability to detect it.
evidence_mode: consensus_only
consensus_basis: physiology
physiology_status: established
clinical_claim_status: supported
evidence:
  - fu-2004
  - doufas-2023
  - guay-2009
  - barker-1989
  - fda-methylene-blue-label-2025
draft: false
review_due: 2027-09-06
quiz:
  - id: pacu-d03-q1
    stem: In phase 1 of Fu 2004, surgical patients had their minute ventilation halved while breathing room air, or oxygen at an FiO2 of 0.25 or 0.30. In which group did SpO2 fall?
    options:
      - text: Only the room-air group
        correct: true
        explanation: SpO2 decline occurred only in the room-air group. There was no decline at all at FiO2 0.25 or 0.30, even though every subject was hypoventilating to the same degree.
      - text: All three groups, in proportion to the drop in ventilation
        correct: false
        explanation: Ventilation fell equally in every group, but saturation fell in none of the oxygen groups. The oximeter tracked oxygenation, not ventilation.
      - text: The FiO2 0.25 group but not the FiO2 0.30 group
        correct: false
        explanation: Neither oxygen group showed any decline. Even a modest increase in inspired oxygen was enough to keep SpO2 up during hypoventilation.
      - text: None of the groups, because the hypoventilation was too brief
        correct: false
        explanation: The room-air group did desaturate. The brevity of the protocol did not protect them; the inspired oxygen protected the other two groups.
  - id: pacu-d03-q2
    stem: In phase 2 of Fu 2004, PACU patients were randomized to room air or supplemental oxygen and desaturation was counted. Desaturation was more common on room air. What is the correct reading of that result?
    options:
      - text: Room air is unsafe in the PACU and every patient should receive oxygen
        correct: false
        explanation: This is the trap. Desaturation was more common on room air because room air lets the oximeter see hypoventilation. The oxygen group hypoventilated too; the monitor simply could not show it.
      - text: Supplemental oxygen removed the desaturation signal, so the oximeter lost its value as a ventilation monitor
        correct: true
        explanation: The point of phase 2 is the opposite of what the direction suggests. Supplemental oxygen removes the signal. Fewer desaturations on oxygen means less detection, not less hypoventilation.
      - text: The two groups hypoventilated at different rates, so the comparison is not valid
        correct: false
        explanation: Randomization is what makes the comparison valid. The groups differed in inspired oxygen, and inspired oxygen is exactly what changed the oximeter's sensitivity.
      - text: The result was not significant, so no conclusion can be drawn
        correct: false
        explanation: The difference was statistically significant. The finding stands; what needs care is its interpretation.
  - id: pacu-d03-q3
    stem: Which statement about the design of Fu 2004 is correct?
    options:
      - text: Both phases studied healthy volunteers in a laboratory
        correct: false
        explanation: Subjects were surgical patients, not volunteers. Phase 1 was conducted in the operating room and phase 2 in the PACU.
      - text: Phase 2 was a prospective randomized clinical trial of surgical patients in the PACU
        correct: true
        explanation: Phase 1 was a prospective patient-controlled clinical trial in the operating room; phase 2 was a prospective randomized clinical trial in the PACU.
      - text: The study was a retrospective review of PACU oximetry records
        correct: false
        explanation: Both phases were prospective. Phase 2 assigned inspired oxygen by randomization and measured SpO2 every minute.
      - text: Phase 1 randomized patients to room air or oxygen; phase 2 was observational
        correct: false
        explanation: The randomized phase was phase 2, in the PACU. Phase 1 was the patient-controlled hypoventilation study in the operating room.
---
## Why it matters

Most patients arrive in the PACU breathing supplemental oxygen, and most are monitored with a pulse oximeter. The oximeter is trusted as the monitor that will announce respiratory trouble. On supplemental oxygen it cannot do that job for hypoventilation: a patient can retain carbon dioxide for a long time while the saturation stays reassuring. How often that happens on a typical PACU has never been measured, so this page teaches the mechanism rather than a rate. The nearest measurement is from the ward, where patients on supplemental oxygen had 2.7 times the rate of opioid-induced respiratory depression episodes of patients on room air (incidence rate ratio 2.7, 95% CI 1.4 to 5.1) while their desaturation events did not differ [[doufas-2023]].

The consequence of getting this wrong is not a missed alarm. It is an alarm that is structurally impossible on the monitor you are watching.

## Mechanism

Pulse oximetry measures arterial hemoglobin saturation, which sits on the flat upper part of the oxyhemoglobin dissociation curve whenever alveolar oxygen is generous. Hypoventilation raises alveolar carbon dioxide and lowers alveolar oxygen. On room air, the fall in alveolar oxygen is enough to move saturation off the flat part of the curve, so the oximeter reads the change. With supplemental oxygen, the alveolar oxygen tension starts high enough that the same rise in carbon dioxide leaves saturation on the flat part, and the oximeter reads nothing.

That is the whole mechanism: oxygen does not treat hypoventilation, it hides its only oximetric sign. Carbon dioxide rises exactly as it would have; the monitor no longer reports it.

## Evidence

Fu 2004 is a two-phase study in surgical patients, not volunteers [[fu-2004]]. Phase 1, in the operating room, was a prospective patient-controlled clinical trial of 45 patients [[fu-2004]]. Phase 2, in the PACU, was a prospective randomized clinical trial of 288 patients [[fu-2004]].

In phase 1, hypoventilation was defined as a 50% reduction in minute ventilation [[fu-2004]]. Patients breathed room air (FiO2 0.21, n=25) for up to 5 min or until SpO2 fell below 90%, or oxygen at FiO2 0.25 (n=10) or 0.30 (n=10) for up to 10 min [[fu-2004]]. SpO2 declined only in the room-air group; there was no decline at all at FiO2 0.25 or 0.30 [[fu-2004]].

In phase 2, PACU patients were randomized to room air (n=155) or supplemental oxygen (n=133), with SpO2 recorded every minute for up to 40 min [[fu-2004]]. Desaturation, defined as SpO2 below 90%, occurred in 9.0% of the room-air group and 2.3% of the supplemental-oxygen group, P=0.02, roughly fourfold higher on room air [[fu-2004]].

## What this does not show

Phase 2 found desaturation *more* common on room air: 9.0% versus 2.3% [[fu-2004]]. Read quickly, that says room air is dangerous and oxygen is protective. That reading inverts the study. Both groups were recovering from anesthesia and both hypoventilated; the room-air group desaturated because room air lets the oximeter see hypoventilation, and the oxygen group did not desaturate because oxygen removes the signal. The direction of the result is the point, not a contradiction of it.

The study does not show that room air is the right choice for PACU patients, and it does not show that supplemental oxygen harms them. It shows that on supplemental oxygen the pulse oximeter is not a ventilation monitor. Whether routine oxygen changes any patient outcome is a separate question this source does not answer. The ward observation that respiratory depression episodes were 2.7 times more frequent on supplemental oxygen while desaturations did not differ is the same mechanism seen with capnography, and it comes from the ward, not the PACU [[doufas-2023]].

The oximeter reads wrong in a second way, and this day carries it as its boundary. In methemoglobinemia the pulse oximeter overestimates the true saturation in proportion to the methemoglobin fraction until about 35%, where it plateaus at 84 to 86% and does not fall further even as the true saturation continues to drop; that plateau was measured in anesthetized dogs, and the design vocabulary has no term for an animal study [[barker-1989]]. In a summary of 242 published episodes related to local anesthetics, a saturation of 90% or below with an arterial oxygen tension of 70 mmHg or more was present in 91.8%, the gap between the oximeter and co-oximetry ranged from minus 6.2% to 44.7%, a single spray of benzocaine was enough to induce it, coma was reported at methemoglobin fractions of 32.2% in children and 29.1% in adults, and rebound to 59.9% up to 18 h after methylene blue was described with mucosal benzocaine; the author's conclusion is that benzocaine should no longer be used [[guay-2009]]. The treatment has a label: methylene blue 1 mg/kg intravenously over 5 to 30 min, repeated once after an hour if the fraction stays above 30% or symptoms persist; it is contraindicated in G6PD deficiency, where it risks hemolysis and may not work, it carries a boxed warning for serotonin syndrome with serotonergic drugs and opioids, and it can itself lower the oximeter reading [[fda-methylene-blue-label-2025]].

## At the bedside

Decide, for each patient on oxygen, what is actually monitoring ventilation. If the answer is the oximeter, nothing is. Look at the patient: respiratory rate, depth, pattern, and level of consciousness are the ventilation monitors the oximeter is standing in for. Where capnography is available, it measures the thing you care about.

Treat a normal saturation on oxygen as information about oxygenation only. Treat a falling saturation on oxygen as late, because the reserve that oxygen provides has already been spent.

When you consider removing supplemental oxygen, be clear about the reason: it restores the oximeter's sensitivity to hypoventilation. It does not make the patient safer by itself, and this source does not test whether it does.

## Check yourself

Three items. Every option carries an explanation. Progress is not saved.

---
id: day-01
title: Residual block is common, invisible, and dangerous
claim: Residual neuromuscular blockade below a train-of-four ratio of 0.9 is common, is not detectable by clinical examination or qualitative nerve stimulation, and is strongly associated with critical respiratory events in the PACU.
evidence_mode: consensus_only
consensus_basis: guideline
physiology_status: established
clinical_claim_status: associational
evidence:
  - murphy-2008
  - saager-2019
  - thilen-2023
  - kirmeier-2019
  - blobner-2020
  - fortier-2015
  - kopman-1997
  - fda-neostigmine-label-2024
  - herbstreit-2010
  - fda-sugammadex-label-2026
draft: true
review_due: null
quiz:
  - id: pacu-d01-q1
    stem: "In RECITE-US (Saager 2019), patients were judged ready for extubation by routine clinical judgment and qualitative peripheral nerve stimulation. What proportion had a train-of-four ratio below 0.9 at extubation?"
    teachingPoint: The clinical exam and a qualitative twitch monitor passed two out of three patients who were still blocked.
    difficulty: basic
    examAlignment: [ABA-BASIC, ITE]
    tags: [pharmacology, neuromuscular, monitoring]
    options:
      - text: About 65%
        correct: true
        explanation: 64.7% (165 of 255) had a TOF ratio below 0.9 at extubation, and 31.0% of those were below 0.6. Every one of them had been judged suitable for extubation.
      - text: About 10%
        correct: false
        explanation: Far too low. The point of the study is that residual block is the majority finding, not a rarity.
      - text: About 35%
        correct: false
        explanation: 31.0% is the fraction of the blocked patients who were below 0.6, not the overall proportion below 0.9.
      - text: None, because qualitative stimulation excludes residual block
        correct: false
        explanation: Qualitative stimulation cannot detect fade above roughly the range these patients were in. That is why the guideline recommends quantitative monitoring.
  - id: pacu-d01-q2
    stem: "In Murphy 2008, patients who developed a critical respiratory event in the first 15 minutes of PACU stay were matched to controls. What was the mean train-of-four ratio in cases versus controls?"
    teachingPoint: The cases were profoundly blocked; the controls were essentially recovered.
    difficulty: basic
    examAlignment: [ABA-BASIC, ITE]
    tags: [neuromuscular, epidemiology]
    options:
      - text: 0.62 in cases versus 0.98 in controls
        correct: true
        explanation: Mean TOF ratio was 0.62 (SD 0.20) in cases and 0.98 (SD 0.07) in controls, a difference of 0.36 (95% CI 0.30 to 0.43). 73.8% of cases were below 0.70; no control was.
      - text: 0.90 in cases versus 0.95 in controls
        correct: false
        explanation: The separation was far larger than that. Cases averaged 0.62.
      - text: 0.98 in cases versus 0.62 in controls
        correct: false
        explanation: Reversed. The patients with respiratory events were the blocked ones.
      - text: The study did not measure TOF ratio
        correct: false
        explanation: Quantitative TOF measurement on PACU arrival is the study's central measurement.
  - id: pacu-d01-q3
    stem: "The 2023 ASA guideline recommends sugammadex for deep, moderate and shallow rocuronium- or vecuronium-induced block. From what depth of block does it describe neostigmine as a reasonable alternative?"
    teachingPoint: Neostigmine's place in the guideline is narrow; from minimal block only.
    difficulty: advanced
    examAlignment: [ABA-ADVANCED, ITE]
    tags: [pharmacology, neuromuscular]
    options:
      - text: Minimal block only, TOF ratio 0.4 to less than 0.9
        correct: true
        explanation: The guideline describes neostigmine as a reasonable alternative only from minimal block, a TOF ratio of 0.4 to less than 0.9. A documented quantitative TOF ratio of 0.9 or more needs no antagonism at all.
      - text: Any depth of block, provided the dose is increased
        correct: false
        explanation: The guideline restricts neostigmine to minimal block. The dose-ceiling and paradoxical-weakness questions are not in the held sources and are placeholders on this page.
      - text: Deep block, because sugammadex is reserved for moderate block
        correct: false
        explanation: Reversed. Sugammadex is recommended for deep, moderate and shallow block.
      - text: Neostigmine is no longer recommended at any depth
        correct: false
        explanation: It remains a reasonable alternative from minimal block.
  - id: pacu-d01-q4
    stem: "POPULAR (Kirmeier 2019) found that use of neuromuscular blocking agents was associated with postoperative pulmonary complications, adjusted OR 1.86, and that neither reversal agents nor neuromuscular monitoring reduced that risk in the cohort. How should that finding be interpreted?"
    teachingPoint: A cohort can show that a problem is common and associated with harm without showing that the available prevention works.
    difficulty: expert
    examAlignment: [ABA-ADVANCED, ITE]
    tags: [neuromuscular, evidence-appraisal]
    options:
      - text: As the boundary of the claim; the association with harm stands, but the benefit of monitoring and reversal is not established by this cohort
        correct: true
        explanation: POPULAR is the reason residual block cannot be called the most preventable cause of PACU respiratory morbidity. Its endpoint was complications after PACU discharge, so PACU-treated block is largely excluded, but the finding still complicates any claim that prevention works.
      - text: As proof that monitoring and reversal are useless
        correct: false
        explanation: An observational cohort cannot establish that. It failed to show benefit; it did not show harm from monitoring.
      - text: As irrelevant, because it is a European study
        correct: false
        explanation: 22,803 patients in 211 hospitals across 28 countries is not a finding to dismiss by geography.
      - text: As superseded by the 2023 ASA guideline
        correct: false
        explanation: The guideline postdates POPULAR and recommends monitoring; it does not overturn a cohort result. The two coexist.
---
## Why it matters

The patient who arrives in the PACU breathing, obeying commands and holding their head up can still have a train-of-four ratio far below the threshold at which the pharyngeal muscles protect the airway. In RECITE-US, patients were judged suitable for extubation by routine clinical judgment and qualitative peripheral nerve stimulation, and 64.7% of them (165 of 255) had a TOF ratio below 0.9 at extubation, with 31.0% of those below 0.6 [[saager-2019]]. The examination that was supposed to catch residual block passed two-thirds of the patients who had it.

The consequence of getting this wrong arrives in the first minutes of the PACU stay, as hypoxemia or airway obstruction in a patient nobody thought was at risk.

## Mechanism

Non-depolarizing blockers occupy nicotinic receptors at the neuromuscular junction. Recovery is a gradient: the diaphragm and the large muscles that generate a head lift or a hand grip recover before the small muscles of the pharynx and the upper esophagus that keep the airway open and protect it from aspiration. A patient can therefore breathe adequately and pass every bedside test while the muscles that matter in the PACU are still partly blocked. Qualitative nerve stimulation, watching or feeling for fade, cannot resolve the difference between a TOF ratio of 0.5 and 0.9; only a quantitative monitor that measures the ratio can. That gap between what the bedside can see and what the junction is doing is the whole mechanism of the day.

## Evidence

Murphy 2008 screened 7459 general anesthetics over one year; 61 patients developed a predefined critical respiratory event in the first 15 min of PACU stay, and 42 were matched to controls [[murphy-2008]]. Mean TOF ratio was 0.62 (SD 0.20) in cases and 0.98 (SD 0.07) in controls, a difference of 0.36 (95% CI 0.30 to 0.43, P less than 0.0001); 73.8% of cases had a TOF ratio below 0.70 and no control did [[murphy-2008]]. The commonest events were severe hypoxemia in 22 of 42 (52.4%) and upper airway obstruction in 15 of 42 (35.7%) [[murphy-2008]].

RECITE-US supplies the prevalence: in a blinded multicenter cohort across 10 US community and academic hospitals, 64.7% of patients had residual block at extubation despite having been judged suitable for extubation by clinical judgment and qualitative stimulation [[saager-2019]]. The Canadian RECITE study is the companion incidence estimate; its primary record has not been reached, so no figure from it appears here [[fortier-2015]].

The 2023 ASA practice guideline states a TOF ratio of 0.9 or more as the recovery threshold, recommends quantitative monitoring over qualitative or clinical assessment, recommends sugammadex for deep, moderate and shallow rocuronium- or vecuronium-induced block, describes neostigmine as a reasonable alternative only from minimal block (TOF ratio 0.4 to less than 0.9), and states that patients with a documented quantitative TOF ratio of 0.9 or more do not require pharmacological antagonism [[thilen-2023]]. Its full text was read on 2026-09-06 and the four recommendations that matter here all carry the same grading, strong strength of recommendation on moderate strength of evidence: against clinical assessment alone, because the assessment is insensitive; for quantitative monitoring over qualitative assessment; for confirming a train-of-four ratio of 0.9 or more before extubation; and for using the adductor pollicis rather than the eye muscles [[thilen-2023]].

The size of the effect the guideline is asking for is in its own pooled figures. With sugammadex and a confirmed train-of-four ratio of 0.9 or more before extubation, the pooled incidence of residual blockade was 0.5%, 95% CI 0.0 to 6.0, against 2.2%, 0.5 to 9.0, when the ratio was not confirmed; with neostigmine the same comparison was 5.3%, 2.5 to 10.7, against 44.9%, 29.9 to 60.8 [[thilen-2023]]. That last pair is the number to remember. The guideline also states its own limit, verbatim: direct evidence from randomized trials that compare confirming or not confirming train-of-four ratios before extubation are lacking [[thilen-2023]].

POPULAR, a prospective cohort of 22,803 patients from 211 hospitals in 28 European countries, found that use of neuromuscular blocking agents was associated with postoperative pulmonary complications, adjusted OR 1.86 (95% CI 1.53 to 2.26), and reported that neither reversal agents nor neuromuscular monitoring reduced that risk in the cohort [[kirmeier-2019]]. Its primary endpoint was a complication occurring or persisting after PACU discharge, so block treated in the PACU is largely excluded from it [[kirmeier-2019]].

An exploratory reanalysis of POPULAR compared a 0.95 with a 0.9 extubation threshold and carries the contested position that 0.9 may be too permissive; that position has been disputed in print [[blobner-2020]].

## What this does not show

No randomized trial shows that residual block below 0.9 causes PACU respiratory morbidity, and there could not easily be one [[murphy-2008]]. Murphy 2008 is a matched case-control study nested in a single-center cohort; RECITE-US and POPULAR are observational cohorts; the ASA document is a guideline [[murphy-2008]] [[saager-2019]] [[kirmeier-2019]] [[thilen-2023]]. The association is strong and consistent. Whether monitoring and reversal prevent the harm is not established here, and POPULAR points the other way for the complications it measured [[kirmeier-2019]]. That is why the claim says common, invisible and associated, and not most preventable.

The threshold itself is a convention under challenge. The reanalysis arguing for 0.95 is exploratory and contested, and this page does not adopt it [[blobner-2020]].

The clinical signs fail at a measured point. In awake volunteers, a sustained 5-s head lift was achieved at a mean TOF ratio of 0.60 (range 0.45 to 0.75); diplopia and difficulty tracking a moving object accompanied a ratio of 0.90 or below in every subject; the incisor clench on a tongue depressor did not return until the ratio exceeded 0.85; and grip strength was 59% of control at 0.70, where every subject was symptomatic [[kopman-1997]]. A head lift is present well below the threshold the guideline sets.

Neostigmine has a ceiling written on its label: a dose of 0.03 to 0.07 mg/kg will generally achieve a TOF ratio of 90%, the recommended maximum total dose is 0.07 mg/kg or 5 mg, whichever is less, and a first-twitch response of at least 10% of baseline must be present before it is given [[fda-neostigmine-label-2024]]. The same label warns that large doses given when blockade is minimal can produce neuromuscular dysfunction, and a volunteer study measured that effect: neostigmine 0.03 mg/kg with glycopyrrolate, given after the TOF ratio had recovered to 1.0, reduced genioglossus activity in response to negative pharyngeal pressure by 37% (SD 29), P=0.005, almost to the level seen at a ratio of 0.5, and increased upper airway collapsibility [[fda-neostigmine-label-2024]] [[herbstreit-2010]]. The sources describe weakness from neostigmine at minimal block or after full recovery; none retrieved describes paradoxical weakness from neostigmine given at deep block, and this page does not claim it.

Sugammadex is dosed by depth: 2 mg/kg at the reappearance of the second twitch, 4 mg/kg at one to two post-tetanic counts, and 16 mg/kg about 3 min after 1.2 mg/kg of rocuronium [[fda-sugammadex-label-2026]]. Its label records anaphylaxis in 0.3% of 299 healthy volunteers (one case, in the 16 mg/kg group), marked bradycardia, some resulting in cardiac arrest, within minutes of administration, a higher risk of recurrent block after lower-than-recommended doses, an effect on hormonal contraceptives equivalent to a missed dose with a non-hormonal back-up method advised for the next 7 days, and waits before re-dosing a steroidal blocker of 5 min after 1.2 mg/kg rocuronium, 4 h after 0.6 mg/kg rocuronium or 0.1 mg/kg vecuronium, and 24 h after a 16 mg/kg dose or in renal impairment [[fda-sugammadex-label-2026]].

Edrophonium has no marketed finished product in the United States: every FDA application for it, under the brand names Enlon, Enlon-Plus, Reversol and Tensilon and as generics, was listed as discontinued in Drugs@FDA when this was checked on 2026-09-06, and the one DailyMed listing has both of its national drug codes inactivated. No reversal content on this site names it. Two cautions attach to that sentence. It is a dated claim rather than a settled fact, because the FDA approved a labeling supplement for Enlon-Plus in October 2025 and an active sponsor maintaining an application is consistent with an intent to re-market, so it needs re-checking rather than repeating. And it still has no ledger row: [TODO_VERIFY: a ledger row for the Drugs@FDA record before this statement appears in a quiz item.]

## At the bedside

Measure, do not judge. A quantitative TOF ratio is the only bedside finding on this page that distinguishes a recovered junction from a blocked one, and the guideline recommends it over clinical assessment [[thilen-2023]]. A head lift or a hand grip tells you about large muscles that recover first.

If the ratio is documented at 0.9 or more, no antagonism is needed; if it is below 0.9, the choice of agent depends on the measured depth, with neostigmine reasonable only from minimal block [[thilen-2023]]. [PRACTICE VARIES: the institutional preference between sugammadex and neostigmine, and the availability of quantitative monitors in the PACU, differ between hospitals.]

Treat hypoxemia or airway obstruction in the first minutes of PACU stay as residual block until a monitor says otherwise, because those were the two commonest events in the matched cohort and the cases were, on average, still deeply blocked [[murphy-2008]].


### General recommendations

These are the numbers residents are commonly taught and expected to know. This project has not yet read them from a primary source, so each is labeled and none carries a ledger key. Where one conflicts with your institution's protocol, the protocol wins.

[GENERAL: One monitoring detail carries no source. Acceleromyographic devices read high and need normalization to a baseline; electromyographic devices do not. The site itself is not general: the guideline recommends the adductor pollicis over the eye muscles, and that is cited in the evidence slot above.]

[GENERAL: Sugammadex is not recommended when the creatinine clearance is below 30 mL/min, because the sugammadex-relaxant complex is cleared renally.]

## Check yourself

Four items. Every option carries an explanation. Progress is not saved.

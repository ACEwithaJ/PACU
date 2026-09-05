# Retrieval round 2 — extraction findings

Retrieved 2026-09-06. Every number below was read from the PubMed abstract of the primary
source, from a full text I opened, from an FDA label on DailyMed, or from a society document
on its own site. The record I read is named after each block. Nothing here is from memory or
from a secondary description unless it is marked `SECONDARY:`. `NOT FOUND` means I looked and
did not find it in the record I could reach.

Companion files: `new-ledger-rows.csv` (54 rows, keys as used below) and
`ledger-debt-resolutions.md`.

## How this round was done, and its two limits

Interfaces: PubMed record pages and search-result pages were read in the director's Chrome
through the Claude extension (identifiers, citation, abstract). doi.org resolution was used
to confirm DOIs. FDA labels were read on DailyMed. Society documents were read on asahq.org,
asra.com and clinicaltrials.gov. Two full texts were read in full (Uppal 2023 on
jamanetwork.com; Garvey 2019 on sciencedirect.com, which shows "Open archive").

Limit 1, access. The Chrome browser is authenticated to publishers through the UT Health
Science Center Preston Medical Library (banner visible on the Wiley page for Olsson 1984), so a
full text that renders there does not prove public access. The unauthenticated fetcher got
HTTP 403 from Wiley and Chest/Elsevier and 402 from Ovid. I therefore wrote `open` only where
PubMed itself lists "Free PMC article"/"Free article", or where the host is a public society or
government site, or where the publisher page itself said "Open archive". Everything hosted on
Ovid/LWW, Wiley or ScienceDirect without such a marker is `UNVERIFIED`. This is why 33 of 54
new rows carry `UNVERIFIED` access.

Limit 2, Ovid. The extension's site permissions block reading on ovid.com, where every
Anesthesiology, Anesthesia & Analgesia and EJA full text resolves. Aldecoa 2024 (ESAIC
delirium guideline) is the one target where this cost a required quotation. Allowing ovid.com
for the extension would unlock it and the LWW-hosted access checks.

Author lists: the tool's output filter intermittently redacted author strings. Where I could
only capture the first author, the citation says "et al." and `verified_on` says "confirm".
Where a co-author list appears in a citation it was read from the PubMed record.

---

## A. Days with no sources (target list A)

### Day 10 — PACU opioid titration
Claim: endpoint is function, not a score.

- `paqueron-2002` (PubMed 12393765, BJA 2002;89:697-701). Makes the claim directly. 73 PACU
  patients; 52 slept during titration, 21 did not; morphine stopped at sleep. Sleep group
  Ramsay 1.7 (0.4) → 2.4 (0.6), BIS 95 (5.0) → 89.8 (10.2) at sleep onset. VAS fell 78 (17)
  → 39 (21) in sleepers and 64 (16) → 30.4 (11) in the awake group. 13/52 sleepers (25%) still
  had VAS >50 mm at 30 min. Conclusion verbatim: "morphine-induced sedation should not be
  considered as an indicator of an appropriate correct level of analgesia during i.v.
  morphine titration." DOI: not on the PubMed record. I tested the candidate 10.1093/bja/aef274
  at doi.org; it resolves to a different Elsevier PII than PubMed's link for this paper, so it
  is NOT this article's DOI. Leave UNVERIFIED.
- `frasca-2007` (PubMed 17898402, Anesth Analg 2007;105:1143-7). Case-control, 26 patients with
  Ramsay >3 and VRS ≥3 at PACU discharge vs 52 matched controls. Severe/moderate/no PACU pain
  58/16/26% vs 18/25/57%; bad first-night sleep 54% vs 10% (P = 0.001); severe pain at 24 h
  50% vs 6% (P < 0.0001); not satisfied 20% vs 2%. First author not captured by the tool;
  confirm on the record.
- `aubrun-2003` (PubMed 12766651). n = 3045. Bolus 2 mg (≤60 kg) or 3 mg (>60 kg) every 5 min;
  threshold VAS 30; mean initial VAS 73 ± 19; mean dose to relief 0.17 ± 0.10 mg/kg, median
  4 boluses (1–20); VAS ≥70 predicted >0.15 mg/kg (sensitivity 0.77, specificity 0.54).
- `aubrun-2001` (PubMed 11298174, EJA 2001;18:159-65). Four regimens; group 4 (5-min boluses,
  unlimited, early s.c.) end-PACU VAPS 26 ± 17 mm and 73% relieved; sedation 62% and 61% in
  groups 3 and 4 vs 27% in group 1. Total n was in a sentence the output filter blocked; read
  from the paper.
- `asa-acute-pain-2012` (PubMed 22227789). Identifiers from the search list only; not read.
  Candidate guideline row; do not cite until read and its currency checked.
- Aubrun 2012 review (PubMed 22250276, DOI 10.1093/bja/aer458) confirmed on its record; it is
  a review and stays a finding aid, as new-sources-assessment.md already concluded.

### Day 13 — Delayed emergence
- `bayable-2023` (PubMed 37663712, PMC10473332). Normal emergence 91.7%; delayed awakening
  2.6%; hypoactive emergence 3.9%; emergence delirium 1.8%. Associated: opioids AOR 2.3,
  surgery >2 h AOR 1.91, crystalloid >3000 ml AOR 3.12, intraoperative hypotension AOR 3.37.
  CAUTION: several 95% CIs in the abstract do not contain their point estimates (AOR 1.33 with
  CI 0.83–7.19; AOR 2.38 with CI 2.05–7.15; AOR 2.3 with CI 2.20–5.76). The statistics are
  internally inconsistent. Use for the shape of the differential, not for numbers.
- `ellis-2017` (PubMed 30800829, PMC6338181). Simulation case, not a study. Causes listed:
  residual anesthetics, pharmacologic actions, surgical complications, neurologic events,
  endocrine disturbances, patient factors; pseudocholinesterase deficiency emphasised. No
  numbers.
- `link-1997` (PubMed 9049553) — central anticholinergic syndrome. 18/962 recovery-room
  inpatients (1.9%) after prolonged anaesthetic/relaxant effect, respiratory depression and
  metabolic disorder were excluded; 6/60 after hysterectomy (P = 0.003); untreated somnolence
  >2 h in 6/18; all woke with physostigmine, 6 relapsed and needed a second dose (one a
  third).
- Naloxone, FDA label (Hospira, rev 07/2023), `fda-naloxone-label-2023`:
  - Dosage and Administration: "Since the duration of action of some opioids may exceed that of
    naloxone, the patient should be kept under continued surveillance. Repeated doses of
    naloxone should be administered, as necessary."
  - Pharmacokinetics: "In one study, the serum half-life in adults ranged from 30 to 81 minutes
    (mean 64 ± 12 minutes)."
  - Postoperative opioid depression: "Naloxone hydrochloride should be injected in increments of
    0.1 to 0.2 mg intravenously at two to three minute intervals to the desired degree of
    reversal."
  - Precautions: "Abrupt postoperative reversal of opioid depression may result in nausea,
    vomiting, sweating, tremulousness, tachycardia, increased blood pressure, seizures,
    ventricular tachycardia and fibrillation, pulmonary edema, and cardiac arrest which may
    result in death."
- Flumazenil, FDA label (Fresenius Kabi, rev Jan 2025), `fda-flumazenil-label-2025`:
  - Boxed warning: "THE USE OF FLUMAZENIL HAS BEEN ASSOCIATED WITH THE OCCURRENCE OF SEIZURES.
    THESE ARE MOST FREQUENT IN PATIENTS WHO HAVE BEEN ON BENZODIAZEPINES FOR LONG-TERM SEDATION
    OR IN OVERDOSE CASES WHERE PATIENTS ARE SHOWING SIGNS OF SERIOUS CYCLIC ANTIDEPRESSANT
    OVERDOSE."
  - Reversal of sedation/anesthesia (adults): 0.2 mg IV over 15 s; further 0.2 mg at 60-s
    intervals, up to 4 additional; maximum cumulative 1 mg. Resedation 3% to 9% in
    conscious-sedation studies; terminal half-life 40 to 80 minutes.
- Neurological examination before leaving: NOT FOUND as a sourced item; it remains consensus.
- Currency: Acta Anaesthesiol Scand 2007;51:278-83 (physostigmine after desflurane, PubMed
  17250745) is RETRACTED. Do not cite.

### Day 17 — Postoperative urinary retention
- `keita-2005` (PubMed 16037182). n = 313, PACU ultrasound. Retention = bladder volume >600 mL
  with inability to void within 30 min; incidence 16%. Independent predictors: age ≥50 yr,
  intraoperative fluids ≥750 mL, bladder volume on PACU entry ≥270 mL (odds ratios were in a
  blocked sentence; read from paper).
- `lamonerie-2004` (PubMed 14977795). n = 177 at recovery-room discharge; 44% had >500 ml; of
  those, 54% (asymptomatic) could not void within 30 min. Age >60 OR 2.11 (1.01–4.38); spinal
  anaesthesia OR 3.97 (1.32–11.89); surgery >120 min OR 3.03 (1.39–6.61).
- `mulroy-2002` (PubMed 12151918), also Day 15 — see Day 15 below.

### Day 18 — Post-dural puncture headache
Full text of `uppal-2023` read on jamanetwork.com (open access). Grades are USPSTF evidence
grades; "certainty" is the panel's level of certainty.

- Q1 statement: "PDPH should be suspected if headache or neurological symptoms, which may be
  relieved when lying flat, occur within 5 days of a neuraxial procedure" (certainty moderate).
  Recommendation: inpatients who have received a neuraxial procedure should be reviewed and
  evaluated for symptoms of PDPH; outpatients should be instructed to report symptoms (grade A,
  high).
- Clinical features paragraph: typical symptoms "neck stiffness; pain in the cervical,
  thoracic, or lumbar vertebral area; subjective hearing symptoms; visual disturbances; and
  vertigo." IHS definition quoted by the paper: headache within 5 days of lumbar puncture,
  remitting spontaneously within 2 weeks or after sealing of the leak.
- Q2: younger adults and female sex associated with increased risk (certainty high).
- Q5 conservative measures (7 recommendations): routine bed rest not supported, may be used as
  a temporizing measure (C, low); maintain hydration orally, IV only if oral cannot be
  maintained (C, low); abdominal binders and aromatherapy not supported (D, low); regular
  multimodal analgesia including acetaminophen and NSAIDs for all unless contraindicated (B,
  low); short-term opioids if multimodal analgesia ineffective (C, low), long-term opioids not
  recommended (D, moderate); caffeine may be offered in the first 24 hours, maximum 900 mg per
  day (200–300 mg if breastfeeding) (B, low); hydrocortisone, theophylline, triptans,
  ACTH/cosyntropin, neostigmine or atropine, piritramide, methergine and gabapentin not
  supported (I, low).
- Q6 procedural: sphenopalatine ganglion block not supported (I, low); greater occipital nerve
  block may be offered after spinal anesthesia with ≤22 G needle, though headache may recur
  (C, moderate); epidural saline temporary only; fibrin glue reserved for refractory cases or
  when autologous blood is contraindicated (I, low).
- Q7 imaging: brain imaging may be considered when nonorthostatic headache is present or
  develops after initial orthostatic headache, or when onset is more than 5 days after
  suspected dural puncture (C, low); focal neurological deficits, visual changes, alterations
  in consciousness, or seizures, especially postpartum, should prompt neuroimaging to evaluate
  alternative diagnoses (B, moderate). Alternative diagnoses named: subdural hematoma, cerebral
  venous sinus thrombosis.
- Q9 epidural blood patch: recent series report complete remission in 33% to 91% (low); most
  recommended volume 15–20 mL (low); >30 mL does not increase success (moderate). EBP should be
  considered when PDPH is refractory to conservative therapy and impairs activities of daily
  living (B, moderate); consider for severe neurological symptoms such as hearing loss and
  cranial neuropathies (C, moderate); if performed within 48 hours of dural puncture, counsel
  about a more likely need for repeat EBP (B, moderate); perform at or 1 space below the known
  puncture level (B, moderate); consent must include repeat dural puncture, backache and
  neurological complications (A, high); inject slowly and incrementally, stop for substantial
  backache or headache (B, moderate); epidural analgesia should not be withheld after a prior
  EBP (C, low).
- Q10 follow-up: inadvertent dural puncture/PDPH associated with chronic headache, backache,
  neckache, depression, cranial nerve palsy, SDH and CVST (moderate); follow up until headache
  resolves (B, moderate); urgent neuroimaging and referral for worsening symptoms despite EBP,
  new focal neurologic symptoms, or a change in the nature of the headache (B, moderate).
- `uppal-2024-rapm` (PubMed 37582578) is the full guideline (50 recommendations); not read.

### Day 19 — Positioning injuries
- `asa-neuropathy-2018` (PubMed 29116945): current version; supersedes 2011 (PubMed 21364463)
  and 2000 (PubMed 10754638). Text NOT read.
- `asa-povl-2019` (PubMed 30531555, PMC9556164): current version; supersedes 2012 (PubMed
  22227790) and 2006 (PubMed 16732103). Text NOT read; PMC copy is free.
- `povl-study-group-2012` (PubMed 22185873): 80 ION cases vs 315 controls after spinal fusion.
  Male sex OR 2.53 (1.35–4.91); obesity OR 2.83 (1.52–5.39); Wilson frame OR 4.30 (2.13–8.75);
  anesthesia duration OR 1.39 per hour (1.22–1.58); estimated blood loss OR 1.34 per litre
  (1.13–1.61); colloid as % of non-blood replacement OR 0.67 per 5% (0.52–0.82); AUC 0.85.
- `warner-1994` (PubMed 7992900): persistent ulnar neuropathy 414/1,129,692 = 1 per 2,729; 9%
  bilateral; initial symptoms in most noted >24 h after the procedure; male gender and
  hospitalization >14 days (P < 0.01); very thin and obese habitus; neither anesthetic
  technique nor position associated; 53% of one-year survivors recovered fully. No DOI on the
  record.
- Brachial plexus injury specifically: no dedicated primary row retrieved; covered only by the
  ASA advisory (unread).

### Day 20 — Anaphylaxis in the PACU
- `harper-2018-nap6` (PubMed 29935567). Incidence ≈1:10,000 anaesthetics (true incidence
  possibly ≈70% higher). 199 culprits: antibiotics 94, NMBAs 65, chlorhexidine 18, Patent Blue
  9. Teicoplanin 12% of antibiotic exposures but 38% of antibiotic anaphylaxis. Succinylcholine
  two-fold more likely than other NMBAs, mainly bronchospasm. "There were no reports of local
  anaesthetic or latex-induced anaphylaxis." Presenting features: hypotension 46%,
  bronchospasm 18%, tachycardia 9.8%, desaturation 4.7%, bradycardia 3%, reduced/absent
  capnography 2.3%; all patients hypotensive during the episode. "Onset was rapid for
  neuromuscular blocking agents and antibiotics, but delayed with chlorhexidine and Patent
  Blue dye." 10 deaths, 40 cardiac arrests (PEA usual, often with bradycardia). Poor outcomes
  associated with ASA class, obesity, beta-blocker and ACE-inhibitor use.
- `garvey-2019` (PubMed 31130272), full text read on ScienceDirect (open archive):
  - Table 1, grading (modified Ring and Messmer): I "Skin, mucosal signs, or both: generalised
    erythema, extensive urticaria, or both with or without angioedema"; II "Moderate
    multi-organ involvement: skin, mucosal signs, or both with or without moderate
    hypotension, tachycardia, moderate bronchospasm or gastrointestinal symptoms"; III
    "Life-threatening mono- or multi-organ involvement: life-threatening hypotension,
    tachycardia, or bradycardia with or without cardiac arrhythmia, severe bronchospasm, skin,
    mucosal signs, or both, or gastrointestinal symptoms"; IV "Cardiac or respiratory arrest".
    "Skin or mucosal signs may be absent, especially in Grades III and IV, where they may only
    appear once adequate perfusion has been restored."
  - Table 4, adult doses: Grade II — i.v. epinephrine 20 µg bolus; if inadequate response at
    2 min escalate to 50 µg, repeat every 2 min; if no i.v. access 300 µg i.m.; crystalloid
    500 ml rapid bolus, repeat as needed. Grade III — 50 µg bolus, or 100 µg if inadequate
    response to other vasopressors or bronchodilators; escalate to 200 µg at 2 min, repeat
    every 2 min; crystalloid 1 L rapid bolus, repeat up to 30 ml/kg. Grade IV — 1 mg, repeat per
    ALS; suggest external cardiac massage if systolic <50 mm Hg or end-tidal CO2 <3 kPa
    (20 mm Hg). Refractory (inadequate response >10 min): double the epinephrine dose; after
    more than three boluses add infusion 0.05–0.1 µg/kg/min; for hypotension consider
    vasopressin 1–2 IU ± 2 IU/h, glucagon 1–2 mg if on beta-blockers, norepinephrine
    0.05–0.5 µg/kg/min; consider ECLS. Tryptase at 1 h, 2–4 h, and baseline ≥24 h.
  - Delphi Table 3 additions: "Consider bolus of i.m. epinephrine 500 μg while infusion being
    prepared" (conditional, median 7, DI 0.44); "Sugammadex has no immediate role in
    resuscitation of suspected anaphylaxis" (median 9, DI 0.13).
  - Text on dosing: "we can only suggest initial doses for Grades II (20 μg) and III (50 μg)
    reactions ... some of the group maintained that 10 μg was more appropriate than 20 μg."
  - Table 2 non-allergic differential: isolated hypotension — relative anaesthetic overdose,
    neuraxial vasodilatation, bone cement implantation syndrome, amniotic fluid embolism,
    pulmonary embolism, tricyclics, bleeding, other shock; isolated bronchospasm —
    asthma/COPD, airway hyperreactivity, inadequate depth, tube malposition, aspiration;
    angioedema — airway manipulation, ACE-inhibitor angioedema "(onset 1–8 h after surgery)",
    hereditary/acquired.
  - "Reactions to latex are decreasing with the implementation of primary and secondary
    prevention measures." Per-case mortality "one in 26.6 cases in the UK".
- BOUNDARY for the director: the item "delayed presentations to latex and chlorhexidine" is
  half-supported. Delayed onset with chlorhexidine (and Patent Blue) is a NAP6 finding. Latex
  produced zero NAP6 cases and Garvey 2019 describes latex reactions as decreasing. No source
  retrieved supports a latex-specific delayed-presentation claim.

### Day 3 boundary — methaemoglobinaemia
- `guay-2009` (PubMed 19224791): 242 episodes; SpO2 ≤90% with PaO2 ≥70 mm Hg in 91.8%; SpO2
  minus co-oximetry −6.2% to 44.7%; "A single spray of benzocaine may induce
  methemoglobinemia"; coma at MetHb 32.2% (children) and 29.1% (adults); rebound MetHb up to
  59.9% up to 18 h after methylene blue with mucosal benzocaine; "Benzocaine should no longer
  be used." Prilocaine limits: adults 5.0 mg/kg (3.2 renal insufficiency; 1.3 with other
  oxidizers); children >6 mo 2.5 mg/kg.
- `barker-1989` (PubMed 2912291), dogs: SpO2 overestimated SaO2 in proportion to MetHb until
  ≈35% MetHb, "At this level the SpO2 values reached a plateau of 84–86% and did not decrease
  further"; with further true desaturation SpO2 changed much less than SaO2 (slopes
  0.16–0.32). This is the primary source of the "~85% plateau"; it is an animal study and the
  design vocabulary has no term for it.
- Methylene blue, FDA label (Amneal, rev 11/2025), `fda-methylene-blue-label-2025`:
  indication acquired methemoglobinemia; "Administer methylene blue injection 1 mg/kg
  intravenously over 5 to 30 minutes. If the methemoglobin level remains greater than 30% or if
  clinical signs and symptoms persist, a repeat dose of methylene blue injection 1 mg/kg may be
  given one hour after the first dose."; contraindicated in G6PD deficiency (hemolytic anemia)
  and "may not be effective in patients with glucose-6-phosphate dehydrogenase (G6PD)
  deficiency"; boxed warning for serotonin syndrome with serotonergic drugs and opioids; "The
  presence of methylene blue in the blood may result in an underestimation of the oxygen
  saturation reading by pulse oximetry."
- Benzocaine FDA safety communication: NOT retrieved (Guay 2009 and the label carry the
  benzocaine trigger; the FDA communication itself was not fetched).

### Day 7 boundary — malignant hyperthermia presenting late
- `litman-2008` (PubMed 18946294): postoperative MH in 10/528 NAMHR suspected cases (1.9%);
  all had volatile agents, 5 also succinylcholine; all showed generalized rigidity,
  hypercapnia and/or tachypnea, tachycardia and hyperthermia; "No subject demonstrated
  hyperthermia as the presenting sign"; latency from end of anaesthesia to first sign 0 to
  40 min.
- `larach-2010` (PubMed 20081135): 286 episodes 1987–2006; young males 74.8%; frequent initial
  signs hypercarbia, sinus tachycardia, masseter spasm; temperature abnormality (median maximum
  39.1 °C) first-to-third sign in 63.5%; 78.6% muscular abnormality plus respiratory acidosis,
  only 26.0% metabolic acidosis; median dantrolene 5.9 mg/kg (3.0–10.0); complications 63/181
  (34.8%); complication likelihood ×2.9 per 2 °C rise in maximum temperature and ×1.6 per
  30-min delay in dantrolene.
- MHAUS guidance page: NOT retrieved this round.

---

## B. Placeholders on authored pages (target list B)

### Day 1
- Head lift and clinical signs vs TOF 0.9 — `kopman-1997` (PubMed 9105219): sustained 5-s
  head-lift achieved at mean TOF 0.60 (range 0.45–0.75); diplopia and difficulty tracking at
  TOF ≤0.90 in all subjects; incisor clench not until TOF >0.85; grip 59% of control at 0.70;
  "none considered themselves remotely 'street ready'" at 0.70. Fortier 2015 (RECITE) abstract
  confirms the study definition (TOF <0.9) but its clinical-judgement figures were not in the
  retrieved abstract text.
- Neostigmine ceiling — FDA label (Hikma, rev 4/2024), `fda-neostigmine-label-2024`, §2.2: "A
  0.03 mg/kg to 0.07 mg/kg dose ... will generally achieve a TOF twitch ratio of 90%"; "The
  recommended maximum total dose is 0.07 mg/kg or up to a total of 5 mg, whichever is less";
  first-twitch response of at least 10% of baseline required before dosing. §5.4: "Large doses
  of Neostigmine Methylsulfate Injection, USP administered when neuromuscular blockade is
  minimal can produce neuromuscular dysfunction." §5.1: atropine or glycopyrrolate before
  neostigmine to lessen bradycardia.
- Paradoxical weakness — `herbstreit-2010` (PubMed 20980910): neostigmine 0.03 mg/kg +
  glycopyrrolate after TOF recovery to 1.0 reduced genioglossus activity by 37 ± 29%
  (P = 0.005) to near the TOF-0.5 level and increased airway collapsibility. NOTE: the
  placeholder says "at deep block"; the label (§5.4) and Herbstreit address minimal block and
  full recovery. No retrieved source describes paradoxical weakness from neostigmine given at
  DEEP block; the page wording should follow the sources (minimal block / after recovery).
- Sugammadex — FDA label (Fresenius Kabi, rev 6/2026), `fda-sugammadex-label-2026`: 2 mg/kg at
  T2 reappearance; 4 mg/kg at 1–2 post-tetanic counts; 16 mg/kg ≈3 min after 1.2 mg/kg
  rocuronium. Anaphylaxis "0.3% (n=1 in the Sugammadex Injection 16 mg/kg group)" of 299
  volunteers. "Cases of marked bradycardia, some of which have resulted in cardiac arrest, have
  been observed within minutes after the administration." Recurrence: lower-than-recommended
  doses increase the risk. Hormonal contraceptives: equivalent to a missed dose; "additional,
  non-hormonal contraceptive method or back-up method of contraception for the next 7 days".
  Re-dosing waits: 5 min (1.2 mg/kg rocuronium), 4 h (0.6 mg/kg rocuronium or 0.1 mg/kg
  vecuronium), 24 h after 16 mg/kg or in renal impairment.
- Edrophonium US availability — Drugs@FDA (openFDA drugsfda endpoint, active ingredient
  EDROPHONIUM CHLORIDE): all 8 applications Discontinued — NDA019677 and NDA019678 ENLON-PLUS
  (Pharmobedient), ANDA088873 ENLON (Pharmobedient), ANDA089624 REVERSOL (Organon), NDA007959
  TENSILON and TENSILON PRESERVATIVE FREE (PAI Holdings), ANDA040043 and ANDA040044 edrophonium
  chloride (Watson), ANDA040131 edrophonium chloride (Hospira). DailyMed holds a single legacy
  ENLON SPL (Baxter, 17 Oct 2006) whose NDCs are marked "inactivated". openFDA NDC directory
  returns only a bulk-ingredient listing. The TODO_VERIFY is resolved: no marketed finished
  edrophonium product in the US.

### Day 2
- Succinylcholine, FDA label (Quelicin, Hospira, rev 11/2022), `fda-succinylcholine-label-2022`:
  IV "The average dose required to produce neuromuscular blockade and to facilitate tracheal
  intubation is 0.6 mg/kg"; IM "up to 3 mg/kg to 4 mg/kg to infants, older pediatric patients,
  or adults. The total dose administered by the intramuscular route should not exceed 150 mg";
  IM onset "usually observed in about 2 to 3 minutes." Boxed warning: hyperkalemic
  rhabdomyolysis/cardiac arrest in children with undiagnosed myopathy. The label has no
  laryngospasm-specific dose.
- Larson manoeuvre — `larson-1998` (PubMed 9822036) is a letter without an abstract. It does
  not meet the support bar; a 2015 Paediatr Anaesth letter (PubMed 26426878) calls the
  technique "so far unproven". The management SEQUENCE (CPAP, jaw thrust, deepen, relaxant)
  has no guideline or primary row retrieved: NOT FOUND as a sourced ladder.
- Olsson 1984 abstract (now on PubMed 6496018): 1,232 laryngospasms in 156,064 anaesthetics
  (136,929 patients). This gives Day 2 its incidence from the primary record; per anaesthetic
  that is 0.79% and per patient 0.87% (my arithmetic from the abstract's counts; the abstract
  itself quotes rates per 1000 in subgroups: >50/1000 in children with asthma, airway
  infection, previous anaesthetic complication, oesophagoscopy, hypospadias repair; >25/1000
  at age 1–3 months).

### Day 3
- Incidence of hypoventilation on supplemental oxygen in the PACU: NOT FOUND for the PACU.
  Nearest primary: `doufas-2023` (PubMed 37794334, ward patients, PRODIGY post hoc): on
  supplemental oxygen vs room air, all opioid-induced respiratory depression episodes IRR 2.7
  (1.4–5.1), apnea IRR 2.8 (1.5–5.2), bradypnea IRR 3.0 (1.2–7.9); high PRODIGY score IRR 4.5;
  "Despite oxygen desaturation events not differing between SO and RA, SO may clinically
  promote OIRD." Setting is the surgical ward. Fu 2004 design confirmed on PubMed 15539726:
  phase 1 prospective patient-controlled clinical trial (n = 45), phase 2 prospective
  randomized clinical trial (n = 288), matching extraction-findings A4.

### Day 6
- Clonidine withdrawal — FDA label (clonidine HCl tablets, Solco/Major, rev 07/2022),
  `fda-clonidine-label-2022`, WARNINGS: "Sudden cessation of clonidine treatment has, in some
  cases, resulted in symptoms such as nervousness, agitation, headache, and tremor accompanied
  or followed by a rapid rise in blood pressure and elevated catecholamine concentrations in
  the plasma" — the fetch tool returned the first 125 characters verbatim and the remainder as
  a paraphrase (more likely after higher doses or with beta-blockers; rare hypertensive
  encephalopathy, cerebrovascular accident, death; taper over 2 to 4 days). Re-quote the full
  sentence from the label before it goes on a page. PRECAUTIONS: continue to within four hours
  of surgery and resume as soon as possible thereafter. Other antihypertensive classes: NOT
  retrieved.

### Day 7
- Kurz 1996 by arm (PubMed 8606715 abstract; the director's PDF was not available to me):
  final core temperature 34.7 ± 0.6 °C vs 36.6 ± 0.5 °C; surgical-wound infection 18/96 (19%)
  hypothermia vs 6/104 (6%) normothermia, P = 0.009; sutures removed one day later
  (P = 0.002); hospitalization prolonged by 2.6 days (≈20%), P = 0.01.
- Drug metabolism — `leslie-1995` (PubMed 7726398): propofol blood concentrations ≈28% higher
  at 34 °C than 37 °C (P < 0.05); the atracurium duration figure is in the truncated part of
  the abstract — read the paper.
- Oxygen consumption with shivering — `hausmann-1991` (PubMed 2058825, German): shivering in
  recovery in 8/12 isoflurane patients with maximum VO2 639 ml/min vs steady-state anaesthesia
  121–225 ml/min; meperidine 25 mg IV reduced VO2 significantly. Small and old; the only
  primary surfaced in one search.
- Shivering treatment — `kranke-2002` (PubMed 11812718): meperidine 25 mg NNT 1.3 at 5 min
  (RR 9.6, 5.7–16); clonidine 150 µg NNT 1.3 at 5 min (RR 6.8, 3.3–14.2); doxapram 100 mg NNT
  1.7; ketanserin 10 mg NNT 2.3. Dexmedetomidine is not in Kranke (search to 2000);
  `wang-2020-dex-shivering` (PubMed 32571181, post-spinal) finds dexmedetomidine superior to
  clonidine (effect sizes and doses not in the abstract). Dexmedetomidine has no FDA
  indication for shivering (see Day 12 label).
- Late MH: see A above (litman-2008, larach-2010).

### Day 9
- Dexamethasone timing — `wang-2000` (PubMed 10866900): 10 mg IV before induction vs end of
  anesthesia vs placebo; PONV 0–2 h 15% vs 45% vs 53%; rescue 8% vs 30% vs 35%; PONV 2–24 h
  25% and 28% vs 55%; induction timing more effective.
- Droperidol — FDA label (American Regent, rev Jan 2009), boxed warning: "Cases of QT
  prolongation and/or torsade de pointes have been reported in patients receiving droperidol
  at doses at or below recommended doses"; reserve for patients who fail other adequate
  treatments; 12-lead ECG before administration; do not give if QTc >440 msec (males) or
  >450 msec (females). Dose: "The maximum recommended initial dose of droperidol is 2.5 mg IM
  or slow IV. Additional 1.25 mg doses of droperidol may be administered to achieve the
  desired effect."
- Ondansetron — FDA label (injection, rev Nov 2025), §5.2: "Ondansetron prolongs the QT
  interval in a dose-dependent manner"; postmarketing torsade; avoid in congenital long QT;
  ECG monitoring with electrolyte abnormalities, CHF, bradyarrhythmias or other QT-prolonging
  drugs. §14.3: "Administration of a second intravenous dose of ondansetron 4 mg
  postoperatively does not provide additional control of nausea and vomiting." Vestibular
  component: NOT FOUND in the label and NOT FOUND in one PubMed search for a primary trial.
- Scopolamine — FDA label (transdermal, Rhodes, rev 5/2026): "Apply one scopolamine
  transdermal system the evening before scheduled surgery. Remove the transdermal system 24
  hours following surgery."; "circulating plasma concentrations are detected within 4 hours
  with peak concentrations being obtained, on average, within 24 hours"; "Elderly patients had
  an increased risk of neurologic and psychiatric adverse reactions, such as hallucinations,
  confusion, dizziness, and drug withdrawal syndrome."; angle-closure glaucoma warning.
- Gan 2026 (gan-2026): NOT read (paywalled on Ovid; extension blocked). Its rescue-class
  wording remains unverified.

### Day 11
- Lipid emulsion — ASRA checklist PDF v1.1 (asra.com; `neal-2021-checklist`): >70 kg "Bolus
  ~100 mL over 2-3 min", "Infuse ~250 mL over 15-20 min"; <70 kg "Bolus ~1.5 mL/kg over 2-3
  min", "Infuse ~0.25 mL/kg/min"; if unstable "Repeat bolus", "Double infusion"; "Maximum lipid
  dose: 12 mL/kg". Epinephrine: "Smaller than normal dose preferred", "Start with <1 mcg/kg".
  Avoid: "Local anesthetics, Beta-blockers, Calcium channel blockers, Vasopressin". Seizure:
  "Benzodiazepine preferred". Observe "2 hrs after seizure" or "4-6 hrs after cardiovascular
  instability". RAPM page shows "This article has been corrected since it published Online
  First. Figure 1 has been replaced." asra.com states the checklist "is currently being
  reviewed. An update is expected in early 2027."
- Phrenic palsy — `urmey-1991` (PubMed 2006740): 13/13 hemidiaphragmatic paresis within 5 min
  after paresthesia-technique interscalene block (34–52 mL 1.5% mepivacaine); resolved by 3–5 h.
- Horner syndrome — NOT FOUND in the Borgeat 2001 abstract (`borgeat-2001`, PubMed 11605927:
  pneumothorax 0.2%, CNS toxicity 0.2%, symptomatic 14% at 10 days → 0.2% at 9 months).
- Pneumothorax after supraclavicular block — `gauss-2014` (PubMed 24641639): 4/6366 (0.06%;
  95% CI 0.001–0.124) clinically symptomatic; 3 of 4 after a two-day latency; historical
  non-ultrasound risk quoted up to 6.1%.
- Compartment syndrome position — `nathanson-2021` (PubMed 34096035, PMC9292897), Association
  of Anaesthetists guideline: avoid dense, long-duration blocks that significantly exceed the
  duration of surgery; lower-concentration blocks without adjuncts not associated with
  diagnostic delay provided surveillance is appropriate; observations at set frequencies by
  trained staff; objective scoring charts; documented consent; neither surgeon nor
  anaesthetist may veto the other. The exact "breakthrough pain in a blocked limb is the
  trigger" wording is not in the abstract; read the PMC full text for it.

### Day 12
- ESAIC 2024 wording on excluding hypoxaemia, hypoglycaemia and pain: NOT READ. The DOI resolves
  to ovid.com full text, which the extension cannot read; PMC returned a reCAPTCHA to the
  fetcher; ovid returned 402 to the fetcher. Director action needed (allow ovid.com or read
  the PMC copy).
- Paediatric emergence delirium — `sikich-2004` (PubMed 15114210): PAED scale, five items (eye
  contact with caregiver; purposeful actions; aware of surroundings; restless; inconsolable),
  each 1–4, reverse-scored where applicable, summed; internal consistency 0.89; reliability
  0.84 (0.76–0.90); scores greater after sevoflurane than halothane (P < 0.008); sensitivity
  0.64. No cut-off in the abstract. `costi-2014` (PubMed 25212274, Cochrane, 158 RCTs, 14,045
  children): halothane RR 0.51 (0.41–0.63) and propofol RR 0.35 (0.25–0.51) vs sevoflurane;
  dexmedetomidine adjunct RR 0.37 (0.29–0.47); fentanyl RR 0.37 (0.27–0.50). Absolute
  incidence after sevoflurane: NOT FOUND in either abstract.
- Dexmedetomidine US labelling — FDA label (Precedex, Hospira, rev 5/2026): indications are ICU
  sedation of intubated adults (infusion "not to exceed 24 hours") and procedural sedation of
  non-intubated adults and children 1 month to <18 years for non-invasive procedures. No
  indication or dosing for delirium, emergence agitation or shivering; emergence
  delirium/agitation appear only as pediatric adverse reactions after discontinuation. §5.2
  hypotension/bradycardia with fatalities; §5.3 transient hypertension during loading.

### Day 14
- STOP-Bang items — `chung-2008-stop` (PubMed 18431116): STOP = Snoring, Tiredness, Observed
  apnea, blood Pressure; sensitivity at AHI >5/>15/>30 = 65.6/74.3/79.5%, rising to
  83.6/92.9/100% with BMI, age, neck circumference, gender. The numeric Bang thresholds and the
  ≥3 cut-off are NOT in the abstract; read the full text.
- Cut-offs for increased risk — `chung-2012-stopbang` (PubMed 22401881, PMC3325050): STOP-Bang 5
  OR 4.8 (moderate/severe) and 10.4 (severe); 6 OR 6.3 and 11.6; 7–8 OR 6.9 and 14.9;
  probability of moderate/severe OSA 0.36 → 0.60 from score 3 to 7–8; "a STOP-Bang score of
  5-8 identified patients with high probability of moderate/severe OSA."
- SASM 2016 guideline identifiers now confirmed (see debt resolutions); its cut-off wording was
  not read this round.

### Day 15
- ASA Standards for Postanesthesia Care, last amended October 23, 2024 (asahq.org),
  `asa-pacu-standards-2024`. Standard V verbatim: "A PHYSICIAN IS RESPONSIBLE FOR THE DISCHARGE
  OF THE PATIENT FROM THE POSTANESTHESIA CARE UNIT. 1. When discharge criteria are used, they
  must be approved by the Department of Anesthesiology and the medical staff. They may vary
  depending upon whether the patient is discharged to a hospital room, to the ICU, to a short
  stay unit or home. 2. In the absence of the physician responsible for the discharge, the
  PACU nurse shall determine that the patient meets the discharge criteria. The name of the
  physician accepting responsibility for discharge shall be noted on the record." Standard
  III: "UPON ARRIVAL IN THE PACU, THE PATIENT SHALL BE RE-EVALUATED AND A VERBAL REPORT
  PROVIDED TO THE RESPONSIBLE NURSE BY THE MEMBER OF THE ANESTHESIA CARE TEAM WHO ACCOMPANIES
  THE PATIENT." III.2: "Information concerning the preoperative condition and the
  surgical/anesthetic course shall be transmitted to the receiving nurse."
- Modified Aldrete — `aldrete-1995` (PubMed 7772368): identifiers confirmed; no abstract on the
  record; items and threshold NOT FOUND in any record I could read.
- PADSS — `chung-1995-padss` (PubMed 8534468): threshold "at least 9" confirmed in the
  abstract; the five items NOT in the abstract.
- Fast-track — `white-1999` (PubMed 10320170): identifiers confirmed; no abstract; items NOT
  FOUND.
- Ambulatory discharge after neuraxial — `mulroy-2002` (PubMed 12151918): low-risk patients
  after short-acting spinal/epidural need not void before discharge; accelerated pathway 22
  min shorter (P = 0.002), bladder ultrasound <400 ml used as the discharge gate, no urinary
  returns. Peripheral nerve block retention risk: NOT retrieved.
- Currency: PubMed search for a newer ASA postanesthetic care GUIDELINE returned only the 2013
  update (PubMed 23364567, DOI confirmed) and the 2002 original (PubMed 11873052). The 2024
  amendment is to the STANDARDS document, not the guideline.

### Day 16
- HATRICC-US (NCT04571749): NO published primary results. ClinicalTrials.gov record read in the
  browser 2026-09-06: recruitment status "Enrolling by invitation"; "No Results Posted";
  Primary Completion (Estimated) 2026-07-31; Study Completion (Estimated) 2026-07-31; Enrollment
  (Estimated) 4000. PubMed search returns only the 2021 protocol (lanefall-2021-protocol,
  PubMed 34130725) and a 2023 fidelity/qualitative-comparative-analysis paper (Jt Comm J Qual
  Patient Saf 2023;49(8):356-364, PubMed 37208240, Free PMC).

---

## C. Ledger rows with gaps
See `ledger-debt-resolutions.md`.

---

## Currency

Items found while doing A–C that qualify or add to an authored day.

1. Day 3/4 — `doufas-2023` (PRODIGY post hoc, BMC Anesthesiol 2023): on supplemental oxygen,
   opioid-induced respiratory depression episodes were 2.7× more frequent (IRR 2.7, 1.4–5.1)
   while desaturation events did not differ. This is Fu 2004's mechanism observed on the ward
   with capnography and directly strengthens Day 3's claim; it also bears on Day 4.
2. Day 20 — NAP6 recorded no latex anaphylaxis and Garvey 2019 describes latex reactions as
   decreasing. The director's item pairing latex with chlorhexidine as delayed presentations
   is not supported for latex by these sources.
3. Day 11 — asra.com: the LAST checklist "is currently being reviewed. An update is expected in
   early 2027." The RAPM article carries a "Figure 1 has been replaced" correction; the PDF on
   asra.com is v1.1.
4. Day 13 — Acta Anaesthesiol Scand 2007;51:278-83 on physostigmine after desflurane (PubMed
   17250745) is RETRACTED.
5. Day 14 — SASM published a companion guideline on intraoperative management of OSA in 2018
   (Anesth Analg 2018;127:967-987, PubMed 29944522, DOI 10.1213/ANE.0000000000003434, Free PMC).
   It does not supersede the 2016 preoperative-screening guideline (chung-2016-sasm) but should
   be cited alongside it if Day 14 discusses intraoperative choices.
6. Day 1 — Anesth Analg 2026 (PubMed 42361319) reports the impact of the 2023 ASA NMB
   guidelines on quantitative monitoring two years later; not read; candidate for the boundary
   slot.
7. Day 8 — ruetzler-2021's bibliographic details, previously taken from Wikipedia, are now
   confirmed on PubMed (34601955; Circulation 2021;144(19):e287-e305); CONFIRM BEFORE USE can be
   cleared. Botto 2014 identifiers confirmed in a PubMed search-result summary (PMID 24534856,
   DOI 10.1097/ALN.0000000000000113); its abstract is still unread.
8. Day 19 — both ASA advisories are current (2018 and 2019); the 2011/2012 versions in older
   references are superseded.
9. Day 15 — no guideline successor to ASA 2013 exists in PubMed; the 2024 change is to the
   Standards.
10. Day 13 — bayable-2023's abstract reports several confidence intervals that exclude their
    own point estimates. Treat its numbers as unreliable.

## Not found / not done
- PACU-specific incidence of hypoventilation on supplemental oxygen (Day 3): not found.
- Ondansetron vestibular limitation (Day 9): not found in the label or in one search.
- Laryngospasm management ladder as a guideline row (Day 2): not found; Larson 1998 is a letter.
- Horner syndrome incidence (Day 11): not in the Borgeat abstract.
- Modified Aldrete items, PADSS items, fast-track items (Day 15): identifiers only; full texts
  not read.
- ESAIC 2024 exclusion wording (Day 12): full text not readable (Ovid permission).
- Gan 2026 rescue-class wording (Day 9): full text not readable (Ovid, paywalled).
- MHAUS guidance page, FDA benzocaine safety communication, ASA advisory recommendation texts,
  ASA 2012 acute pain guideline text: not read this round.
- Peripheral-nerve-block retention risk and brachial plexus primary (Days 15, 19): not retrieved.
- No PDFs were saved (the `pdfs/` folder is empty); all full texts were read in the browser or
  by the fetch tool.

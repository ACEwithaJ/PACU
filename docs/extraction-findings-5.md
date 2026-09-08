# Extraction findings 5 — retrieval round 5

Retrieval date **2026-09-08**. Deliverables in `retrieval-2026-09-r5/`, outside any repository. No repository was edited.

## Browser session: LOGGED OUT. Section 1 could not be run as designed.

You asked for this round to run authenticated. **It did not, and I stopped and said so before starting section 1 rather than discovering it halfway through.**

Browser 1, macOS, was the connector selected. Verified on the first page load, using `borgeat-2001` itself as the test: `journals.lww.com` redirected `/fulltext/` to `/abstract/` with `redirectionsource=fulltextview`, served 2,604 characters of article, and displayed *"Full Text Access for Subscribers / Individual Subscribers Log in for access / Institutional Users Access through Ovid / Not a Subscriber = Buy Article."* No Preston Medical Library banner. That is a logged-out session.

Round 3's authenticated session was **Browser 2, Windows**. If round 6 needs entitlement, that is the one to pick, or Browser 1 needs signing in first.

**What that cost.** Most of section 1 is unread: the laryngospasm rungs, Welch 2009, Chou 2016's recommendation text, the ASPAN target, and the three discharge-score item lists. Each is listed explicitly below as NOT READ.

**What rescued part of it.** You sent the `borgeat-2001` PDF directly. That worked, and it is the fastest route left: a PDF you attach is read in full, immediately, with no entitlement problem. The list of PDFs that would finish section 1 is at the end of this file.

## Provenance classes

- **Read by me, in full:** `borgeat-2001` (from your PDF), the Europe PMC record for `renew-2026`, and the logged-out access checks.
- **Read by a delegated session at a named URL:** `elboghdadly-2024`, `thompson-2024-accaha`, `fleisher-2014`, `kim-2016-naloxone`, and the ASA standards checks. Those rows say so in `verified_on` and none was filled from memory.

---

## The headline finding: Borgeat 2001 does not contain Horner syndrome

Read in full from your PDF. Anesthesiology 2001;95:875-880.

**Horner syndrome is NOT in this paper. Not in the abstract, not in the tables, not in the discussion.** I read every table and all body text. The words Horner, ptosis and miosis do not appear.

Table 2, *Acute Complications after 520 ISB*, lists exactly: SNC intoxication 1 (0.2%), cardiac intoxication 0, pneumothorax 1 (0.2%), aspiration of blood 3 (0.6%), hematoma 0, spinal anesthesia 0, epidural anesthesia 0.

Table 3, *Nonacute Complications after 520 ISB*: sulcus ulnaris syndrome 8 (1.5%), complex regional pain syndrome 5 (1%), carpal tunnel syndrome 4 (0.8%), plexus neuropathy 1 (0.2%), severe plexus damage 1 (0.2%).

**This closes the question the site has been carrying since round 3.** The ledger note on `borgeat-2001` says Horner "is NOT reported in the abstract; if the day needs a Horner figure it must come from the full text or another source." The full text has now been read: it is not there either. Day 11 cannot get a prospective Horner denominator from this paper, and `takayama-2021`'s retrospective 9 of 1322 remains the only figure the site has, correctly flagged as passive surveillance.

**What the paper does give Day 11**, and it is worth having, is a genuine prospective complication denominator:

- 521 consecutive adults enrolled, 520 analysed; one excluded for iatrogenic surgical axillary nerve damage. 234 with an interscalene catheter, 286 single injection.
- Standardised technique: nerve stimulator, triceps contraction below 0.5 mA at 0.1 ms; ropivacaine 0.6%, 40 mL under 60 kg and 50 mL over; catheter infusion ropivacaine 0.2% from 6 h.
- Symptomatic at day 10: **74 (14%)**, none with muscular weakness. 1 month: **41 (7.9%)**. 3 months: **20 (3.9%)**. 6 months: **5 (0.9%)**. 9 months: **1 (0.2%)**, the patient with the plexus lesion.
- Catheter versus single injection was nonsignificant at every timepoint: 11% versus 17% at day 10, 6.0% versus 9.5% at 1 month, 0.4% versus 1.4% at 6 months.
- Conclusion, VERBATIM: *"Interscalene brachial plexus block performed with a standardized technical approach, material, and drugs is associated with an incidence of short- and severe long-term complications of 0.4%."*
- Also: transient burning pain on injection in **21%**; transient scapular pain during catheter placement in 15 patients (**6.4%**); all symptoms appeared within 23 days, with 0.2% first appearing between day 15 and day 23.

Every figure the existing ledger row carries for this paper is confirmed correct.

---

## Section 2 — the two rows the schema rejected

### `chou-2016` currency: RESOLVED. It is `current`.

You asked whether the Association of Anaesthetists and British Pain Society document supersedes it. **It does not.** The AoA/BPS statement was opened and read in full.

**Citation:** El-Boghdadly K, Levy NA, Fawcett WJ, Knaggs RD, Laycock H, Baird E, Cox FJ, Eardley W, Kemp H, Malpus Z, Partridge A, Partridge J, Patel A, Price C, Robinson J, Russon K, Walumbe J, Lobo DN. *Peri-operative pain management in adults: a multidisciplinary consensus statement from the Association of Anaesthetists and the British Pain Society.* Anaesthesia 2024;79(11):1220-1236. DOI 10.1111/anae.16391. Free to read on the British Pain Society site.

**Four reasons it does not supersede Chou 2016, all read on pages opened:**

1. Different jurisdiction and different societies. UK, Association of Anaesthetists and British Pain Society; Chou is US, American Pain Society with ASA and ASRA.
2. **It cites Chou 2016 as its own reference 2** rather than replacing it.
3. It is explicitly ungraded. VERBATIM: *"Our methodology did not include a full systematic review with quantitative or qualitative synthesis, nor grading of recommendations, due to the breadth of the topic and expected heterogeneity in evidence."* Substituting it for Chou would weaken the evidentiary claim, not strengthen it.
4. It nowhere claims to supersede any prior guideline.

**So `chou-2016` currency should be `current`**, and `elboghdadly-2024` is supplied as its own row, an additional current UK-side citation, not a replacement.

**It does give Day 10 a usable multimodal sentence**, VERBATIM: *"Throughout the peri-operative pathway and, where not contraindicated, multimodal analgesia should be encouraged, including paracetamol; non-steroidal anti-inflammatory drugs; a-2 adrenergic agonists; N-methyl-D-aspartate antagonists; corticosteroids; and regional analgesia."* And: *"Intra-operative analgesia should be multimodal and extend into the postoperative period."* Both ungraded, and the page must say so.

**Chou 2016's own recommendation text is still NOT READ.** Logged out, jpain.org returns 403 and ScienceDirect is robots-disallowed. Neither is a paywall. Day 10 can now be written from `elboghdadly-2024` with its ungraded qualifier, or wait for the Chou PDF.

**One flag:** a 2026 ASA guideline on perioperative pain management using local and regional analgesia for named surgeries appears to exist (Anesthesiology, DOI 10.1097/ALN.0000000000005790, PMID 41363869, both from search results only, LWW returned 402). Its title suggests a narrower scope than Chou, but it is UNVERIFIED and worth one check before Day 10 is cleared.

### `renew-2026` design: STILL UNREAD, and I did not invent one.

I opened the Europe PMC core record in my own browser. It returns publication type **"Journal Article"** and nothing else, no abstract, `isOpenAccess: N`. "Journal Article" is not a study design.

**The schema and the evidence are in conflict here, and I have resolved it in favour of the evidence.** The row is delivered with `design` set to the literal string `DESIGN-UNREAD-SEE-FINDINGS`, which will fail your validator. That is the intended outcome. Writing `cohort`, or any of the other six terms, would be a fabrication of exactly the kind this project exists to prevent, and it would be indistinguishable in the ledger from a design someone had actually read.

Three ways out, your choice:
1. **Send the PDF.** It is one article; design, n and the uptake finding take a minute once it is open.
2. **Add an eighth vocabulary term**, `unknown` or `unread`, so rows like this can sit in the ledger honestly rather than being either excluded or falsified.
3. **Leave the row out** until it is read.

`n` is likewise `UNREAD` for the same reason.

---

## Section 3 — the three claims that may have no source

### 3a. Home beta-blocker continuation: **FOUND**, and the current guideline is newer than the site assumes.

The 2014 ACC/AHA guideline has been superseded. **Thompson A, Fleischmann KE, Smilowitz NR, et al. 2024 AHA/ACC/ACS/ASNC/HRS/SCA/SCCT/SCMR/SVM Guideline for Perioperative Cardiovascular Management for Noncardiac Surgery. Circulation 2024;150(19):e351-e442. DOI 10.1161/CIR.0000000000001285.** The article page is marked **Free Access**.

Section 7.7, **COR 1, LOE B-NR**, VERBATIM:
> In patients on stable doses of beta blockers undergoing NCS, beta blockers should be continued through the perioperative period as appropriate based on the clinical circumstances.

Two adjacent recommendations Day 6 should carry with it, because they are the other half of the teaching point:
> **(COR 2b, LOE B-NR)** In patients scheduled for elective NCS who have a new indication for beta blockade, beta blockers may be initiated far enough before surgery (optimally >7 days) to permit assessments of tolerability and drug titration if needed.

> **(COR 3: Harm, LOE B-R)** In patients undergoing NCS and with no immediate need for beta blockers, beta blockers should not be initiated on the day of surgery due to increased risk for postoperative mortality.

**Route caveat, and it needs one confirmatory read before the quote is published.** The Circulation article page loaded and confirmed the pagination and Free Access status, but its section 7.7 body text was truncated out of what the fetcher returned. The quoted wording above comes from **the AHA's own official slide set** for this guideline on professional.heart.org, which reproduces the recommendation tables with COR and LOE. That is an AHA publication, but it is not the journal article. One read of Circulation page e399 settles it.

The 2014 predecessor is supplied as its own row marked `superseded_by:thompson-2024-accaha`. Its Class I wording was, VERBATIM: *"Beta blockers should be continued in patients undergoing surgery who have been on beta blockers chronically."* Note the 2024 version adds "on stable doses" and "as appropriate based on the clinical circumstances" — a real softening that Day 6 should reproduce rather than quoting the older, blunter sentence.

**ESC 2022 remains UNVERIFIED** on this point; only a third-party PDF mirror was reachable and the relevant section was truncated. Not needed for a US-practice site.

### 3b. The adult naloxone 0.04 mg increment: **one primary study, and it does not support the claim as written.**

**Kim HK, Nelson LS. Reversal of Opioid-Induced Ventilatory Depression Using Low-Dose Naloxone (0.04 mg): a Case Series. J Med Toxicol 2016;12(1):107-110.** DOI 10.1007/s13181-015-0499-3. Paywalled on Springer.

| The card says | The study did |
|---|---|
| Adult increments of **0.04 to 0.1 mg** | Start **0.04 mg IV**, titrated; median total **0.08 mg**, range **0.04 to 0.12 mg** |
| PACU / postoperative | **Emergency department**, via toxicology consultation |
| — | **15 patients**, 12 of whom had ingested methadone 30-180 mg |
| — | **Retrospective case series**, no control group |
| — | **2 of 15 developed acute opioid withdrawal** after the 0.08 mg dose |

Conclusion, VERBATIM: *"ED patients with moderate to severe opioid-induced ventilatory depression can be reversed using 0.04 mg IV naloxone with appropriate dose titration."*

**No society guideline recommending 0.04 mg adult increments exists.** The obvious candidate, the ASA/ASRA guideline on respiratory depression with neuraxial opioids (Anesthesiology 2016;124:535-552), gives **no naloxone dose at all**; its only statements are that *"Reversal agents should be available for administration to all patients experiencing significant respiratory depression after neuraxial opioid administration"* and *"In the presence of severe respiratory depression, initiate appropriate resuscitation."*

**Recommendation:** the "0.04 to 0.1 mg" range as written is still unsourced. Its upper bound matches nothing. Either state the Kim figures with their setting and population attached, or drop the range and keep the label's 0.1 to 0.2 mg with a sentence that smaller increments are widely used without a labelled or trial basis.

### 3c. A society standard requiring a documented neurological examination before PACU discharge: **NOT FOUND.**

Both ASA documents were opened.

**ASA Standards for Postanesthesia Care** (last amended 23 October 2024). Standard IV, VERBATIM: *"The patient shall be observed and monitored by methods appropriate to the patient's medical condition. Particular attention should be given to monitoring oxygenation, ventilation, circulation, level of consciousness and temperature."* And: *"An accurate written report of the recovery period shall be maintained. Use of an appropriate scoring system is encouraged to assist with management and discharge readiness."*

**ASA Practice Guidelines for Postanesthetic Care** (2013), VERBATIM: *"Mental status should be periodically assessed during emergence and recovery."*

Neither requires a documented neurological examination, neither ties any assessment to the discharge decision, and **neither mentions delayed emergence anywhere.** Level of consciousness appears only as one of several parameters monitored during the stay, and discharge criteria are explicitly delegated to the local department.

**Verdict: NOT FOUND.** If Day 13 wants a statement here it must be rewritten to what these sources actually say. ASPAN is the one unchecked possibility and is genuinely paywalled: the 2025-2026 Standards are purchase-only at $109 member / $229 non-member, confirmed on aspan.org, which is a real paywall rather than a bot block.

---

## Section 1 — what was NOT READ, itemised

| Target | Status | Why |
|---|---|---|
| Chung & Rowbottom 1993, low-dose suxamethonium | **NOT READ** | Wiley, logged out |
| Batra 2005, propofol — and whether it is prevention or rescue | **NOT READ** | Wiley, logged out. Round 3's flag that it is prevention stands unconfirmed |
| The Larson letter, and the later letter calling it unproven | **NOT READ** | LWW, logged out |
| Jaw thrust / CPAP for laryngospasm | **NOT SEARCHED** this round | Budget went to what was reachable |
| Atropine for bradycardia in children | **NOT SEARCHED** this round | As above |
| Negative-pressure pulmonary edema management beyond the five-case series | **NOT SEARCHED** this round | As above |
| A sourced differential for postoperative hypotension | **NOT SEARCHED** this round | Round 4's finding that it is unclear one exists still stands, unconfirmed |
| `white-1999` seven items | **NOT READ** | Full text paywalled logged out; the table is an image even under entitlement |
| `chung-1995-padss` five items | **NOT READ** | Institution does not subscribe |
| `aldrete-1995` five items | **NOT READ** | Institution does not subscribe; publisher classifies it as correspondence |
| Welch 2009, general nerve injury rate | **NOT READ** | LWW, logged out |
| Chou 2016 recommendation text | **NOT READ** | jpain.org 403, ScienceDirect robots-disallowed. A block, not a paywall |
| ASPAN normothermia target | **NOT READ** | Genuine paywall confirmed on aspan.org |

## The fastest way to finish section 1

Attaching PDFs works, as `borgeat-2001` just proved. In rough order of how much each unblocks:

1. **`white-1999`** — unblocks Day 15 with `chung-1995-padss` and `aldrete-1995`. If the table is an image in the PDF I will transcribe it by eye and say that is what I did.
2. **`chung-1995-padss`** and **`aldrete-1995`** — the other two Day 15 item lists.
3. **Chung & Rowbottom 1993** and **Batra 2005** — the two laryngospasm rungs, the largest single block on the site.
4. **Welch 2009** — Day 19's general nerve-injury denominator.
5. **Chou 2016** — Day 10's graded multimodal recommendation, though `elboghdadly-2024` now covers the claim in ungraded form.
6. **`renew-2026`** — one article, closes the schema conflict above.

Alternatively, run round 6 on **Browser 2, Windows**, which held the institutional session in round 3, and all of the above except the ASPAN volume and the two unsubscribed J Clin Anesth papers become reachable directly.

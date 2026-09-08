# Ledger debt resolutions, round 6
**Date: 2026-09-08**

## Browser and entitlement, stated first as required

**ENTITLEMENT IS LIVE.** Browser 1, Windows, deviceId 57a1be79. An article on
`journals.lww.com` rendered full text with no "Buy Article" prompt and carried a
*Preston Medical Library* download badge.

**The brief's browser labels are wrong and should be corrected before round 7.** It named
"Browser 2, Windows"; the connected pair is Browser 1 = Windows, Browser 2 = macOS. The
discrepancy was put to the operator rather than guessed.

**Method for access verdicts** (round 4's, unchanged): judged from the per-article FREE or
OPEN badge and the ScienceDirect `/abs/` path, never from whether text appeared under an
authenticated session.

**Method refinement adopted this round.** Wiley's **Full Access** badge is a property of
the session, not the article, and is NOT equivalent to **Free Access** or **Open Access**.
Any verdict in earlier rounds that treated "Full Access" as a free badge should be
re-checked.

---

## Access verdicts

| Key | Verdict | Route, and what was actually observed |
|---|---|---|
| chung-rowbottom-1993 | **open** | Wiley article page badge reads **Free Access**; PubMed record badge reads **Free article**. Two independent per-article badges. |
| visvanathan-2005 | **open** | PubMed record then PMC full text at PMC1744026, reached via the PMID-to-PMC redirect. Article body served free by PMC. |
| mcevoy-2019-poqi3 | **open** | PubMed record badge **Free article**; ScienceDirect labels it **Open archive**, "Under an Elsevier user license". Full text read. |
| elboghdadly-2024 | **open** | Publisher's own Wiley article page badge reads **Open Access**. This supersedes Europe PMC's `isOpenAccess = N`, which is wrong. |
| memtsoudis-2018 | **open** | PubMed record carries a **Free PMC article** badge. Resolves the standing "no free full text renders anywhere" question. |
| chung-1995-padss | **paywalled** | ScienceDirect, verbatim: "The University of Tennessee Preston Medical Library does not subscribe to this content on ScienceDirect." URL resolved to `/abs/`. |
| aldrete-1995 | **paywalled** | Same verbatim non-subscription banner; `/abs/` path. |
| cowling-haas-2002 | **paywalled** | Same verbatim non-subscription banner; `/abs/` path. Not carried into the ledger; see below. |
| white-1999 | **paywalled** | LWW full text rendered only under entitlement; no per-article free or open badge present. |
| larson-1998 | **paywalled** | LWW full text under entitlement; no free badge. PubMed lists Ovid and Wolters Kluwer only. |
| abelson-2015 | **paywalled** | Wiley badge reads **Full Access**, which is entitlement-derived. No Free or Open badge. |
| batra-2005 | **paywalled** | No free badge on the PubMed record; full-text sources listed as Ovid and Wiley. |
| weiss-engelhardt-2012 | **paywalled** | No free badge on the PubMed record; Ovid and Wiley only. |
| welch-2009 | **paywalled** | No free badge on the PubMed record; Ovid and Wolters Kluwer only. |
| renew-2026 | **paywalled** | Clean logged-out observation: an unauthenticated agent received **402 Payment Required** from both the DOI resolver and the LWW page. I read it only under entitlement. |
| thompson-2024-accaha | **UNVERIFIED** | Full text rendered while not signed in to AHA, but **no per-article FREE or OPEN badge was visible**, and the session may hold institutional IP access exactly as it does for LWW. Under this project's method that is UNVERIFIED. Do not upgrade to open on the assumption that AHA guidelines are free. |
| asa-2026-regional-analgesia | **UNVERIFIED** | Identity confirmed on the PubMed record; no access badge observed or tested. |
| kim-2016-naloxone | **UNVERIFIED** | Identity confirmed on the PubMed record; no access badge observed or tested. |
| hausmann-1991 | **UNVERIFIED** | The **abstract is readable on PubMed**. Full-text access was not established; no free badge observed. |

---

## Identifier resolutions

### PMIDs cleared from UNVERIFIED — all three, via a qualifying route

The brief noted these were read off Europe PMC and therefore did not qualify. A subagent
sent to verify them **could not reach PubMed** (NCBI served it a reCAPTCHA challenge) and
fell back to Europe PMC, OpenAlex, Semantic Scholar and Crossref. That output was
**discarded as non-qualifying** and all three were re-read in the browser on actual PubMed
record pages.

| Key | PMID | PubMed record prints | Status |
|---|---|---|---|
| elboghdadly-2024 | 39319373 | Anaesthesia 2024 Nov;79(11):1220-1236; DOI 10.1111/anae.16391 | **VERIFIED** |
| thompson-2024-accaha | 39316661 | Circulation 2024 Nov 5;150(19):e351-e442; DOI 10.1161/CIR.0000000000001285 | **VERIFIED** |
| kim-2016-naloxone | 26289651 | J Med Toxicol 2016 Mar;12(1):107-10; DOI 10.1007/s13181-015-0499-3 | **VERIFIED** |

### A wrong DOI caught before it entered the ledger

**chung-rowbottom-1993** — the correct DOI is **10.1111/j.1365-2044.1993.tb06908.x**.

I first tried `...tb06907.x` and it resolved to a **different article entirely**: Grace D,
Orr DA, "Continuous spinal anaesthesia in acute respiratory failure", Anaesthesia
1993;48(3):226-228. Same journal, same issue, adjacent pages. **If any existing row carries
tb06907 for the suxamethonium paper, it is wrong.** Correct identifiers came from the
PubMed record (PMID 8460802).

### elboghdadly-2024 pagination — CLOSED, with a primary source

**79(11):1220-1236 is confirmed.** The publisher's own Wiley article page prints
"Volume 79, Issue 11" and "Pages 1220-1236"; the PubMed record independently prints
"2024 Nov;79(11):1220-1236." It no longer rests on Europe PMC alone.

### elboghdadly-2024 licence — STILL NOT RESOLVED. No licence asserted.

Per the brief, no licence is being asserted, because no single clean source states one.

| Source | Licence claim |
|---|---|
| Wiley article page (publisher, primary) | badges **Open Access**; **names no licence at all** — a full-page search found no Creative Commons string |
| Crossref (publisher-deposited) | CC BY-NC-ND 4.0 |
| Europe PMC | CC BY-NC-ND, but `isOpenAccess = N` |
| PDF footer | CC BY 2.5 non-commercial |

Crossref's publisher-deposited **CC BY-NC-ND 4.0** is the best-supported candidate and the
PDF footer's "CC BY 2.5" is the outlier, but the publisher's own page declines to name a
licence, so the field stays unasserted. **One thing is newly settled: Europe PMC's
`isOpenAccess = N` is simply wrong**, since the publisher badges the article Open Access.
That flag should stop being weighted in this project.

### hausmann-1991 — identifiers found; the row should NOT be retired

**PMID 2058825**, read on the PubMed record page. Anaesthesist 1991 Apr;40(4):229-234.
**No DOI is printed on the record**, consistent with a 1991 Springer German-language paper.

The brief authorised retiring the Day 7 row if this defeated a fourth attempt. **It did
not.** The record was reachable at PubMed with a readable abstract containing the oxygen
consumption figures, which suggests the previous three rounds were searching Springer when
the answer was on PubMed. Do not retire the row — but see the qualifier in
`extraction-findings-6.md`: the abstract gives **absolute VO2 values, not a percentage or
fold increase**, so if Day 7 quotes a percentage the row still needs rewriting.

### memtsoudis-2018 — resolved, with one identity caveat

PMID **29944522**, DOI **10.1213/ANE.0000000000003434**, Anesth Analg 2018;127(4):967-987,
the SASM guideline on intraoperative management of adult patients with obstructive sleep
apnoea. PubMed types it Practice Guideline and Systematic Review, and carries a **Free PMC
article** badge.

**Caveat:** this was identified by matching the brief's clues (Crossref CC BY-NC-ND, no
embargo, PMCID exists), not from the ledger row itself. **Confirm the ledger's
memtsoudis-2018 key points at this paper** before applying the verdict; Memtsoudis
published several papers in 2018.

### renew-2026 — the blocking field is filled

Design was the only thing keeping it out of the ledger. It is now read from the full text:
a **cross-sectional survey** of ASA members, 915 analysed of 981 responses, 3% response
rate. Article type is RESEARCH LETTER, publish ahead of print 25 June 2026, so there is
**no volume, issue or page range yet** — the citation must stay as ahead-of-print until
it is assigned.

Note that `design` is nevertheless **left empty in the CSV**, because "survey" is not one
of the seven permitted values. See the enum gap below.

---

## Two decisions requiring the project's input

### 1. The `design` enum cannot express four documents I read

`design` is empty on **aldrete-1995, larson-1998, weiss-engelhardt-2012 and renew-2026**.
In every case the design was read and is known; the enum has no value for it. Writing
`cohort` or `case_series` would be fabrication, and the brief's field rules forbid a
placeholder string, so the field is empty and explained.

- aldrete-1995: Correspondence / Letter to the editor
- larson-1998: Letter, expert opinion, no cases and no data
- weiss-engelhardt-2012: Editorial, no abstract
- renew-2026: cross-sectional survey

**Recommendation: add `expert_opinion` and `survey` to the permitted values.** This will
recur every round, because the laryngospasm card is built substantially out of
correspondence and editorials.

### 2. `day` is unknown for eleven rows and was not guessed

The brief supplies day numbers for Day 15, Day 19, Day 6, Day 10 and Day 7, and those are
filled. It **never says which day the laryngospasm card or the hypotension card sits on**,
and gives no day for elboghdadly-2024, renew-2026, memtsoudis-2018 or kim-2016-naloxone.
`day` is empty on those eleven rows rather than invented. The project can fill them from
its own page map immediately.

---

## Deliberately not carried into the ledger

**cowling-haas-2002**, "Hypotension in the PACU: An algorithmic approach", J Perianesth
Nurs 2002;17(3):159-163, DOI 10.1053/jpan.2002.33208, PMID 12046010.

It is the closest thing in the literature to what the hypotension card wants, and it is
recorded here so round 7 does not re-find it and re-chase it. It is **not** in the CSV
because it supports nothing that was read: the institution does not subscribe, the
algorithm is Figure 1 and is not readable, and the article carries 9 references and has
been cited twice in twenty-four years. **Recommendation: do not chase it.** Even obtained,
a 2002 nursing narrative is weaker than mcevoy-2019-poqi3, which is open and was read.

---

## What would unblock the biggest remaining gap, per the brief's instruction

**Attach `PMC1744026` as a PDF** — Visvanathan T, Kluger MT, Webb RK, Westhorpe RN,
"Crisis management during anaesthesia: laryngospasm", Qual Saf Health Care 2005;14(3):e3.
It is free, 78.2 KB, and already open at PMC.

Why it is the highest-value attachment available: the paper contains a **laryngospasm
sub-algorithm**, an actual published management sequence validated against 189 real
incidents, and reports that correct application "would have led to earlier recognition of
the problem and/or better management in 16% of cases." The abstract gave the incidence data
now in the ledger; **the sub-algorithm is only in the PDF**, which PMC serves into Chrome's
internal viewer where the browser tools cannot read it, and the PMC domain refuses
page-content reads.

Since round 3 the site has carried, correctly, that no society guideline states a
laryngospasm management sequence. This document is not a society guideline, but it is the
closest thing found in six rounds to a published, data-backed sequence, and it would speak
to the largest unsourced block on the site. Round 5's most consequential finding came from
an attached PDF; this is the same play.

Second-cheapest attachment, for the negative-pressure pulmonary oedema rung: **Scarbrough
FE et al, "Pulmonary edema following postoperative laryngospasm: case reports and review of
the literature", Anesth Prog 1997;44(3):110-116**, which PMC lists as a free article. Not
retrieved this round.

---

## New debts opened this round

1. **thompson-2024-accaha carries a published correction.** The Circulation article page
   displays "This article has been corrected. VIEW CORRECTION". The correction was **not
   read**. Before the newly quoted beta-blocker wording is published, someone must check
   whether the correction touches section 7.7. This is new and was not previously flagged.
2. **Page e399 was not confirmed.** The beta-blocker recommendations were read from the
   article's own recommendation-table graphic; the HTML carries no page numbers. The
   article range e351-e442 is confirmed. If the site cites to page level, verify e399
   against the PDF.
3. **Day 10 versus the 2026 ASA guideline is open.** The guideline is confirmed to exist
   and to be current. Its recommendations were not read, so **no `superseded_by:` value has
   been written against any Day 10 row.** Doing that comparison is the top item for round 7
   and is now cheap, since Anesthesiology is LWW and the entitlement reaches it.
4. **A rescue citation for propofol in laryngospasm, if the card wants one.** Batra 2005 is
   prevention. Afshan G et al, "Is there a role of a small dose of propofol in the treatment
   of laryngeal spasm?", Paediatr Anaesth 2002;12(7):625-628, is the rescue-facing paper.
   Not retrieved or read this round.
5. **Atropine for laryngospasm-associated bradycardia remains NOT FOUND.** visvanathan-2005
   supplies the frequency (6% overall, 23% under 1 year) but nothing supports atropine as
   the treatment. If nothing turns up in round 7, that rung should carry a stated negative.

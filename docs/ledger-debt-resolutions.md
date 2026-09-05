# Ledger debt resolutions

Retrieval date 2026-09-06. For each row in `docs/ledger-debt.md` sections 1 and 2: what I found
and the record I read it from. Nothing in `data/ledger.csv` or `src/content/ledger/` was
edited; the director applies these.

Access rule as applied. The browser used is authenticated to publishers through the UT Health
Science Center library, so "the full text renders" does not establish public access; the
unauthenticated fetcher was refused by Wiley (403), Chest/Elsevier (403) and Ovid (402). I have
written `open` only where PubMed's own record lists "Free PMC article" or "Free article" (the
PMC page is the freely readable copy). Where the only link is Ovid/LWW, Wiley, Elsevier or OUP
and PubMed shows no free marker, access stays `UNVERIFIED` with the reason stated. In every
such case the article is very likely paywalled, but I did not open a logged-out publisher page
to confirm it, so I have not written `paywalled`.

## Section 2 — rows with neither DOI nor PMID (10 rows)

| key | PMID | DOI | Citation on the record | Record read |
|---|---|---|---|---|
| fortier-2015 | 25902322 | 10.1213/ANE.0000000000000757 | Anesth Analg. 2015 Aug;121(2):366-72 | PubMed record 25902322 (via search "The RECITE Study" Canadian) |
| olsson-1984 | 6496018 | 10.1111/j.1399-6576.1984.tb02121.x | Acta Anaesthesiol Scand. 1984 Oct;28(5):567-75 | PubMed record 6496018; Wiley landing page also opened (title matches) |
| sun-2015 | 26287299 | 10.1213/ANE.0000000000000836 | Anesth Analg. 2015 Sep;121(3):709-715 | PubMed record 26287299; PMCID PMC4825673 |
| mcevoy-2019 | 30916008 | 10.1016/j.bja.2019.01.019 | Br J Anaesth. 2019 May;122(5):575-586 | PubMed record 30916008 (page range resolved: 575-586) |
| sessler-2019 | 30916004 | 10.1016/j.bja.2019.01.013 | Br J Anaesth. 2019 May;122(5):563-574 | PubMed record 30916004 |
| sessler-2019-d6 | 30916004 | 10.1016/j.bja.2019.01.013 | same paper as sessler-2019 | PubMed record 30916004 |
| apfel-1999 | 10485781 | 10.1097/00000542-199909000-00022 | Anesthesiology. 1999 Sep;91(3):693-700 | PubMed record 10485781 |
| chung-2016-sasm | 27442772 | 10.1213/ANE.0000000000001416 | Anesth Analg. 2016 Aug;123(2):452-73 | PubMed record 27442772; PMCID PMC4956681 (volume and pages resolved) |
| salzwedel-2013 | 23360810 | 10.1093/intqhc/mzt009 | Int J Qual Health Care. 2013 Apr;25(2):176-81 | PubMed record 23360810 |
| salzwedel-2016 | 26818630 | 10.1016/j.jcrc.2015.12.016 | J Crit Care. 2016 Apr;32:170-4 | PubMed record 26818630 |

All ten resolved. Every identifier above was read from the PubMed record page itself (not a
search summary), except that the mcevoy/sessler pair were first seen in a PubMed search list
and then confirmed by opening each record.

## Section 1 — rows with UNVERIFIED access (10 rows)

| key | Access finding | Basis |
|---|---|---|
| fortier-2015 | UNVERIFIED | PubMed record shows only an Ovid/LWW full-text link, no free marker; publisher page not opened logged-out |
| olsson-1984 | UNVERIFIED | Wiley page opened in the institution-authenticated browser (shows "Login" and institutional banner); fetcher 403; cannot establish public access |
| fu-2004 | UNVERIFIED | PubMed record shows only an Elsevier/Chest link, no free marker; journal.chestnet.org returned 403 to the fetcher |
| driver-2021 | UNVERIFIED | Ovid/LWW link only; no free marker |
| sun-2015 | **open** | PubMed record lists "Free PMC article" (PMC4825673) |
| apfel-1999 | UNVERIFIED | Ovid/LWW link only; no free marker |
| apfel-2004 | **open** | PubMed search-result summary for record 15190136 marks "Free PMC article" (record page not separately opened) |
| salzwedel-2013 | UNVERIFIED | OUP link only; no free marker |
| salzwedel-2016 | UNVERIFIED | Elsevier link only; no free marker |
| agarwala-2019 | UNVERIFIED | Ovid/LWW link only; no free marker |

Two of ten resolved to `open`. The other eight are almost certainly paywalled but were not
confirmed on a logged-out publisher page; the ledger's provisional `paywalled` is the safer
value than `open` for them, and the director may keep it.

## Identifiers confirmed or corrected on other existing rows (bonus)

| key | Finding | Record read |
|---|---|---|
| fu-2004 | PMID **15539726**; DOI 10.1378/chest.126.5.1552 confirmed; design confirmed as trial (phase 1 prospective patient-controlled clinical trial, phase 2 prospective randomized clinical trial), matching extraction-findings A4 | PubMed record 15539726 |
| driver-2021 | PMID **33857962**; DOI 10.1213/ANE.0000000000005478 confirmed; year 2021 confirmed (May 1;132(5):1206-1214) | PubMed record 33857962 |
| apfel-2004 | PMID **15190136**; DOI 10.1056/NEJMoa032196 confirmed | PubMed search-result summary (docsum) |
| agarwala-2019 | DOI **10.1213/ANE.0000000000004118**; PMID 30995210 confirmed; Anesth Analg 2019 May;128(5):e71-e78 | PubMed record 30995210 |
| asa-pacu-2013 / -d3 / -d6 | PMID **23364567**; DOI confirmed | PubMed record 23364567 |
| thilen-2023 | PMID **36520073**; DOI matches ledger | PubMed search-result summary (docsum with DOI) |
| ruetzler-2021 | PMID **34601955**; DOI 10.1161/CIR.0000000000001024 confirmed; Circulation 2021 Nov 9;144(19):e287-e305 — resolves method.md's "CONFIRM BEFORE USE" (bibliography previously from Wikipedia) | PubMed record 34601955 |
| botto-2014 | DOI **10.1097/ALN.0000000000000113**; PMID 24534856 matches; Anesthesiology 2014 Mar;120(3):564-78 | PubMed search-result summary (docsum). Abstract still not read; remains the unretrieved MUST HAVE |
| kurz-1996 | PMID and DOI confirmed; results-by-arm read from the abstract (see extraction-findings-2.md, Day 7) | PubMed record 8606715 |

## Not resolved
- fortier-2015, olsson-1984, fu-2004, driver-2021, apfel-1999, salzwedel-2013, salzwedel-2016,
  agarwala-2019: access remains UNVERIFIED for the reason above. A logged-out check of eight
  publisher pages would close these.
- `n` for fortier-2015, sun-2015, salzwedel-2013/2016, apfel-1999/2004 (debt §4b): abstract
  denominators are in extraction-findings-2.md / the retrieval log where they were visible
  (sun-2015: 833 analysed of 1500 monitored; salzwedel-2013: 120 handovers; salzwedel-2016: 121
  handovers; apfel-1999: 520 + 2202), but I did not re-verify them against full texts and did
  not put them in a CSV row because those rows already exist.

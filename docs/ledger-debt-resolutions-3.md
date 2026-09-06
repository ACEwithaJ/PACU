# Ledger debt resolutions 3

Retrieval date **2026-09-06**. Addresses `docs/ledger-debt.md` section 1 (41 rows with unverified access) and records identifiers found for existing rows. Nothing in the repository was edited.

## Method, and a deviation you need to weigh

The brief asks for each publisher page to be opened **logged out**. That was not possible as specified, because the browser this round ran in was **authenticated to the University of Tennessee Health Science Center, Preston Medical Library** — the same authentication that made Section A possible. An authenticated session renders subscription content, so "the full text appeared" proves nothing about what a logged-out reader sees.

Two logged-out routes were tried first and mostly failed. The cloud fetcher is genuinely logged out, but publishers block it: Wiley 403, Elsevier linkinghub empty bodies, ScienceDirect and BMJ robots-disallowed, LWW 402, PubMed and PMC reCAPTCHA. Of the 16 non-LWW rows it was pointed at, it returned a verdict for only 4. A block is not a paywall, so those were left UNVERIFIED rather than guessed.

So access was determined from **entitlement-independent signals on the article page itself**, not from whether text rendered:

- **LWW and Ovid** publish a per-article access badge. Free-to-all articles carry **FREE**; open-access articles carry **OPEN**. The badge is a property of the article, not of the reader. Validated against two controls with known status: `murphy-2008` (ledger `paywalled`) showed no badge; `asa-pacu-2013` and `thilen-2023` (ledger `open`) both showed **Free**. Both controls behaved correctly under an authenticated session.
- **ScienceDirect** serves non-open articles at `/science/article/abs/pii/...` and open articles at `/science/article/pii/...`. The `/abs/` segment is set by the article's status, not the reader's. Corroborated by the library banner, which said plainly *"The University of Tennessee Preston Medical Library does not subscribe to this content"* on `aldrete-1995`, `chung-1995-padss` and `salzwedel-2016` — all three of which also carried `/abs/`.
- **Wiley** labels free content "Free Access" and open content "Open Access"; absence of both was read as paywalled.
- Four rows were determined by the logged-out cloud fetcher directly and are marked as such.

Where a page returned only a short stub even under entitlement, that is recorded, because it means no full text is being served to anyone by that route.

**Bottom line: 5 of 41 are open, 34 are paywalled, 2 remain UNVERIFIED.**

## Section 1 results — 41 rows

### Open (5)

| key | evidence | route |
|---|---|---|
| `driver-2021` | article carries **Open** badge | Ovid, badge |
| `asa-acute-pain-2012` | article carries **Free** badge | Ovid, badge |
| `asa-neuropathy-2018` | article carries **Free** badge; full text read and quoted in `extraction-findings-3.md` | Ovid, badge + read |
| `fu-2004` | canonical URL is `/science/article/pii/` with no `/abs/`; page shows **"Full text access"**; full text read and every Day 3 number verified | ScienceDirect |
| `harper-2018-nap6` | canonical URL is `/science/article/pii/` with no `/abs/`; open-access marker present | ScienceDirect |

### Paywalled (34)


Explicitly, the 34:

| key | evidence |
|---|---|
| `fortier-2015` | Ovid, no badge, 29,926 char render |
| `apfel-1999` | Ovid, no badge |
| `agarwala-2019` | Ovid, no badge |
| `aubrun-2003` | Ovid, no badge |
| `frasca-2007` | Ovid, no badge |
| `keita-2005` | Ovid, no badge; abstract and full text read under entitlement |
| `mulroy-2002` | Ovid, no badge |
| `povl-study-group-2012` | Ovid, no badge |
| `guay-2009` | Ovid, no badge |
| `litman-2008` | Ovid, no badge |
| `larach-2010` | Ovid, no badge |
| `kopman-1997` | Ovid, no badge |
| `herbstreit-2010` | Ovid, no badge |
| `kranke-2002` | Ovid, no badge; confirmed by direct navigation |
| `leslie-1995` | Ovid, no badge; full text read under entitlement |
| `wang-2000` | Ovid, no badge |
| `borgeat-2001` | Ovid, no badge |
| `sikich-2004` | Ovid, no badge |
| `chung-2008-stop` | Ovid, no badge; full text read under entitlement |
| `white-1999` | Ovid, no badge; full text read under entitlement |
| `barker-1989` | Ovid, no badge; **abstract-only stub (237 chars) even under entitlement** |
| `urmey-1991` | Ovid, no badge; **stub render (1,819 chars) even under entitlement** |
| `warner-1994` | Ovid, no badge; **stub render (258 chars) even under entitlement** |
| `aldrete-1995` | ScienceDirect `/abs/` path, plus the explicit banner *"does not subscribe to this content"* |
| `chung-1995-padss` | ScienceDirect `/abs/` path, plus the same banner |
| `salzwedel-2016` | ScienceDirect `/abs/` path, plus the same banner |
| `olsson-1984` | Wiley landing page, no Free Access or Open Access marker, 3,743 char render |
| `aubrun-2001` | Wiley, no Free Access or Open Access marker |
| `link-1997` | Wiley, no Free Access or Open Access marker |
| `gauss-2014` | Wiley, no Free Access or Open Access marker |
| `salzwedel-2013` | **logged-out fetcher**: OUP, *"You do not currently have access to this article."* Short-term access offered at EUR 53 |
| `paqueron-2002` | **logged-out fetcher**: OUP, *"You do not currently have access to this article"*; *"This PDF is available to Subscribers Only"* |
| `lamonerie-2004` | **logged-out fetcher**: OUP, *"You do not currently have access to this article."* |
| `wang-2020-dex-shivering` | **logged-out fetcher**: Sage, *"Restricted access"*; *"Get full access to this article"* |

### Still UNVERIFIED (2)

| key | why |
|---|---|
| `uppal-2024-rapm` | `rapm.bmj.com` disallows all paths in robots.txt to the logged-out fetcher, and the row was not reached in the browser before the retrieval budget ran out. One browser navigation would settle it |
| `hausmann-1991` | Anaesthesist 1991, German. No DOI on the record and no publisher landing page located. Springer's archive should be checked directly |

## Identifiers found for existing rows

| key | field | finding | provenance |
|---|---|---|---|
| `devereaux-2017` | `n` | **21,842 participants** (was `UNVERIFIED (>20,000)`) | read from the JAMA full text |
| `devereaux-2017` | `supports` | the 17.9% MINS incidence and 93.1% asymptomatic proportion were read from the primary record and are correct; remove the "NOT READ FROM THE PRIMARY RECORD" caveat | JAMA full text |
| `fu-2004` | `design`, `n`, `access` | design is two-phase: phase 1 prospective patient-controlled clinical trial (n=45), phase 2 prospective randomised clinical trial (n=288). Access is **open** | ScienceDirect full text |
| `paqueron-2002` | `doi` | **10.1093/bja/aef262**. Confirmed to resolve to the correct article on OUP. **Not read from a PubMed record** (PubMed served reCAPTCHA); read from the Europe PMC core record, which is MEDLINE-derived. Under the round's own rule this stays `UNVERIFIED` until seen on PubMed, but it is very likely right | Europe PMC core record + OUP resolution |
| `warner-1994` | `doi` | **10.1097/00000542-199412000-00006** resolves on the publisher. Same provenance caveat as above; could not be confirmed on a PubMed record and the publisher served only a stub | Europe PMC core record + publisher resolution |
| `hausmann-1991` | `doi` | **no DOI on the record.** Confirmed absent, not merely unfound | Europe PMC core record |
| `white-1999` | `doi` | publisher displays **10.1213/00000539-199905000-00018**; ledger carries the 10.1097 prefix. Both resolve | Ovid article page |
| `kranke-2002` | `doi` | publisher displays **10.1213/00000539-200202000-00043**; ledger carries the 10.1097 prefix. Both resolve | Ovid article page |
| `urmey-1991` | `doi` | ledger already carries the 10.1213 prefix, consistent with the publisher | Ovid |
| `aldrete-1995` | `design` | publisher classifies the item as **Correspondence, Letter to the editor**, J Clin Anesth 1995;7(1):89-91. Confirms the `design` value is a placeholder that needs a director decision | ScienceDirect landing page |
| `chung-1995-padss` | `design`, `n` | **randomised, open study**, 247 ambulatory general-anaesthesia patients; discharge threshold **≥9** confirmed | ScienceDirect abstract |
| `gan-2026` | `access` | article carries a **FREE** badge; should be **open**, not paywalled | Ovid |
| `aldecoa-2024` | `access` | carries **FREE** and **OPEN** badges and is published CC BY 4.0; `open` is correct | Ovid |
| `thilen-2023` | `access` | carries a **FREE** badge; `open` is correct | Ovid |
| `asa-neuropathy-2018` | `access` | carries a **FREE** badge; should be **open**, not paywalled | Ovid |
| `gross-2014` | `access` | **no FREE or OPEN badge**, unlike every other ASA guideline row checked. The ledger records this row as `open`; that should be re-checked before it is relied on | Ovid |

## Systematic note on the 10.1097 versus 10.1213 prefix

Several legacy *Anesthesia & Analgesia* rows carry a `10.1097` DOI in the ledger while the publisher displays `10.1213` for the same article (`white-1999`, `kranke-2002` observed directly; `wang-2000` and `leslie-1995` are the same vintage and should be checked). Both prefixes resolve, so nothing is broken, but if the ledger is meant to hold the canonical identifier, these should be reconciled in one pass rather than one at a time.

## What round 4 should pick up first

1. `nathanson-2021` breakthrough-pain wording — the only Section A item not attempted, and the Day 11 placeholder depends on it.
2. `borgeat-2001` and Welch 2009 — both now reachable through the institutional session, and between them they would give Day 11 a prospective Horner denominator and Day 19 a general perioperative nerve-injury rate.
3. The four unattempted Section B targets: ondansetron and vestibular nausea, PDPH by needle gauge and tip design, paediatric emergence delirium absolute incidence, and PACU hypoventilation on supplemental oxygen.
4. `uppal-2024-rapm` and `hausmann-1991` access, one navigation each.
5. The `white-1999` and PADSS item lists, which need a human to read a table image and a paywalled PDF respectively. Neither is retrievable by these methods.

# Ledger debt resolutions 4

Retrieval date **2026-09-08**. No repository was edited.

## Browser session: LOGGED OUT

The Mac Cowork Chrome connector used this round was **not signed in to any institution**. Confirmed on first load: LWW served the abstract with *"Full Text Access for Subscribers / Individual Subscribers Log in for access / Institutional Users Access through Ovid / Not a Subscriber = Buy Article."*

This matters for how much weight the verdicts below carry. Round 3 had to infer access from per-article badges and URL paths because an authenticated session renders subscription content and therefore proves nothing about a logged-out reader. **This round did not need to infer.** Every verdict below is what a logged-out reader actually saw. Where that confirms round 3's inference, the inference is now validated; where it corrects it, the correction is stated.

Verdicts read directly from the page. A redirect from `/fulltext/` to `/abstract/` with a "Buy Article" prompt is a paywall. Full text rendering with no subscription prompt is open.

---

## 1. The three loose ends

| key | verdict | evidence | route |
|---|---|---|---|
| `gross-2014` | **paywalled** | doi.org redirected to the `/abstract/` path with `redirectionsource=fulltextview`; page carried *"Full Text Access for Subscribers... Not a Subscriber = Buy Article"*; 3,857 characters, no full text, no FREE or OPEN badge | journals.lww.com, my own browser, logged out |
| `uppal-2024-rapm` | **open** | full text rendered logged out, 250,464 characters, article header carries a **FREE** label, no subscription prompt on the article; content was read and quoted (see `extraction-findings-4.md`, Day 18) | rapm.bmj.com, my own browser, logged out |
| `hausmann-1991` | **still UNVERIFIED** | Springer's volumes-and-issues listing for Der Anaesthesiologie returned *"No results were found"* for volume 40 issue 4, so no article landing page was reached. This is a failure to locate the record, not evidence about access | link.springer.com, delegated fetch |

**`gross-2014` is the correction that matters.** The ledger records it as `open`. It is not. Round 3 flagged this as the one ASA guideline with no FREE badge and asked for it to be settled; it is now settled by direct observation, and **the ledger value should change to `paywalled`.**

`uppal-2024-rapm` moves from UNVERIFIED to **open**, and the round got the Day 18 needle-gauge content out of it as a side effect.

`hausmann-1991` is the one loose end still open. It was already the weakest row on the site: German-language, 1991, no DOI, and its figures were never read. Given that Day 7 uses it only for a shivering oxygen-consumption figure, the director may prefer to drop the row rather than spend another round on it.

---

## 2. The 10.1097 versus 10.1213 question — reported, nothing changed

You asked which prefix each publisher currently displays. All four articles were opened individually in my own browser, logged out, and the DOI was read off the rendered page. Nothing was changed.

| key | DOI in the ledger | DOI the publisher displays | canonical URL path | note |
|---|---|---|---|---|
| `white-1999` | 10.1097/00000539-199905000-00018 | **10.1213**/00000539-199905000-00018 | `/anesthesia-analgesia/abstract/10.1213/...` | prefix differs |
| `kranke-2002` | 10.1097/00000539-200202000-00043 | **10.1213**/00000539-200202000-00043 | `/anesthesia-analgesia/abstract/10.1213/...` | prefix differs |
| `wang-2000` | 10.1097/00000539-200007000-00025 | **10.1213**/00000539-200007000-00025 | `/anesthesia-analgesia/abstract/10.1213/...` | prefix differs |
| `leslie-1995` | 10.1097/00000539-199505000-00027 | **no DOI displayed on the page** | `/anesthesia-analgesia/abstract/00000539-199505000-00027` | the URL carries the bare article identifier with **no DOI prefix at all** |

So the pattern is not quite the one round 3 described. Three of the four display 10.1213 where the ledger has 10.1097. The fourth, `leslie-1995`, displays **no DOI**, and its canonical URL has no prefix — yet `doi.org/10.1097/00000539-199505000-00027` still resolves to it, which is how it was reached.

Nothing is broken. Both prefixes resolve for the three, and the registered 10.1097 DOI is the only identifier `leslie-1995` has. If the ledger is meant to hold the identifier the publisher itself asserts, three rows should change and one cannot.

**A useful by-product:** all four articles redirected to `/abstract/` with a "Buy Article" prompt, independently confirming round 3's `paywalled` verdicts for `white-1999`, `kranke-2002`, `wang-2000` and `leslie-1995`. Round 3 reached those by badge inference under an authenticated session. A logged-out reader sees the same answer. That is four-for-four agreement, and it is reasonable to carry more confidence into round 3's other badge-derived verdicts because of it.

---

## 3. Identifiers and access recorded this round

| key | field | finding | route |
|---|---|---|---|
| `uppal-2024-rapm` | `access` | **open** | rapm.bmj.com, my own browser, logged out |
| `gross-2014` | `access` | **paywalled**, correcting the ledger's `open` | journals.lww.com, my own browser, logged out |
| `nathanson-2021` | `access` | **open** (Free Access, full text rendered logged out) | Association of Anaesthetists Wiley site, my own browser |
| `asa-povl-2019` | `access` | **open** | PMC9556164, my own browser |
| `white-1999` | `doi` | publisher displays **10.1213**/00000539-199905000-00018 | Ovid article page, my own browser |
| `kranke-2002` | `doi` | publisher displays **10.1213**/00000539-200202000-00043 | Ovid article page, my own browser |
| `wang-2000` | `doi` | publisher displays **10.1213**/00000539-200007000-00025 | Ovid article page, my own browser |
| `leslie-1995` | `doi` | **publisher displays none**; canonical URL has no DOI prefix | Ovid article page, my own browser |
| `chou-2016` | `doi`, `pmid` | **10.1016/j.jpain.2015.12.008** and **PMID 26827847**. PMID read off a PubMed record page that rendered once before the site began blocking; DOI independently confirmed by doi.org resolving to the correct Elsevier PII | delegated session |
| `chou-2016` | `access` | **UNVERIFIED**, not paywalled. jpain.org returned 403 on both fulltext and pdf, ScienceDirect is robots-disallowed, linkinghub returned empty. None of these is a paywall | delegated session |
| `chung-2020-capnography` | `doi` | **10.1007/s10877-019-00333-9**, read on the Springer article page | delegated session |
| `zhu-2023-emergence-delirium` | `doi` | **10.3389/fped.2023.1115124**, read on the open-access article | delegated session |
| `zhao-2026-emergence-delirium` | `doi` | **10.1038/s41390-025-04608-7**, read on the publisher article page | delegated session |
| `muth-2007` | `doi`, `pmid` | **no DOI on the document**; PMID seen only in a search-result URL and therefore **UNVERIFIED** | delegated session |
| eight DailyMed labels | set IDs, revision dates | all read off the DailyMed page opened; listed in the CSV rows | delegated session |

---

## 4. Flags raised this round that need a decision, not a retrieval

1. **`gross-2014` access is wrong in the ledger.** Change `open` to `paywalled`.
2. **Two card doses have no label source.** Labetalol "5 to 10 mg increments" and hydralazine "5 to 10 mg" are both taught on the hypertension card; the labels say 20 mg and 20 to 40 mg respectively. Someone has to decide whether the card teaches the label or teaches practice, and say which.
3. **The adult naloxone 0.04 mg increment is not in any label examined.** The smallest labelled increment is paediatric. Either source it primarily or reclassify it.
4. **Physostigmine has two labels and the card matches the unapproved one.** The approved product (Anticholium) is weight-based at 0.04 mg/kg to a maximum single dose of 2 mg and explicitly names central anticholinergic syndrome and delayed postoperative awakening as indications. The card's 0.5 to 1.0 mg matches the Akorn label, which carries the FDA disclaimer that the drug has not been found safe and effective.
5. **Paediatric emergence delirium incidence is cut-off dependent.** In one 1222-patient cohort it ranges from 89.0% at PAED >=10 to 19.3% at PAED >12. Any figure Day 12 publishes must carry its instrument and threshold.
6. **`chou-2016` currency is genuinely open.** The American Pain Society dissolved in 2019 and a newer Association of Anaesthetists and British Pain Society document exists. Do not assume Chou 2016 is current.
7. **Two DailyMed transcription oddities** to check before quoting: the Akorn physostigmine label appears to print "Past Anesthesia Care" where "Post" is meant, and the Cleviprex DailyMed title prints "clevipidine".

---

## 5. What round 5 needs, and the one thing that would change its yield

Everything still outstanding is behind a paywall, and this round was logged out. **Run round 5 on an authenticated session and the following become one afternoon's work:** Chung & Rowbottom 1993 and Batra 2005 for the laryngospasm rungs, the Larson letter, `borgeat-2001` for a prospective Horner denominator, Welch 2009 for a general nerve-injury rate, `white-1999`'s table (the full text renders under entitlement, and the table image can then be read), and the Chou 2016 recommendation text.

The three item lists remain the hardest. `white-1999` needs entitlement plus someone reading a table image. `chung-1995-padss` and `aldrete-1995` need a copy from outside the institution, which does not subscribe. No browser session of either kind will solve those two.

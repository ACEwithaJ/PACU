# Ledger debt resolutions 5

Retrieval date **2026-09-08**. No repository was edited.

## Browser session: LOGGED OUT

Browser 1, macOS, was the connector used and it was **not signed in to any institution**. Verified on the first page load using `borgeat-2001` as the test article: `journals.lww.com` redirected `/fulltext/` to `/abstract/`, served 2,604 characters, and displayed *"Full Text Access for Subscribers / Individual Subscribers Log in for access / Institutional Users Access through Ovid / Not a Subscriber = Buy Article"*, with no library banner.

I stopped and reported this before starting section 1 rather than after. Round 3's authenticated session was **Browser 2, Windows**.

**Method for access verdicts, unchanged from round 4 and now used a third time.** A logged-out session shows directly what a logged-out reader sees, so no inference is needed. Where entitlement-independent signals were used instead, they are named: the per-article FREE or OPEN badge on LWW and Ovid, and the ScienceDirect `/abs/` path segment. Round 4 validated that method four times over against direct logged-out observation; this round adds a fifth.

---

## 1. Access verdicts recorded this round

| key | verdict | evidence | route |
|---|---|---|---|
| `borgeat-2001` | **paywalled** | `/fulltext/` redirected to `/abstract/`; 2,604 characters; "Not a Subscriber = Buy Article"; no FREE or OPEN badge | journals.lww.com, my own browser, logged out |
| `elboghdadly-2024` | **open** | complete full text freely downloadable from the British Pain Society with no login | britishpainsociety.org, delegated session |
| `thompson-2024-accaha` | **open** | article page displays **"Free Access"** | ahajournals.org, delegated session |
| `fleisher-2014` | **open** | JACC article page rendered the recommendation text without a subscription prompt | jacc.org, delegated session |
| `kim-2016-naloxone` | **paywalled** | Springer article page displayed a subscription notice; Europe PMC records `isOpenAccess: No` | link.springer.com, delegated session |
| `renew-2026` | **paywalled** | LWW paywalled logged out; Europe PMC `isOpenAccess: N` | Europe PMC core record, my own browser |
| ASPAN 2025-2026 Standards | **paywalled — genuine, not a block** | purchase-only, $109 member / $229 non-member, stated on the society's own page | aspan.org, delegated session |
| `chou-2016` | **still UNVERIFIED** | jpain.org returned 403 on both fulltext and pdf; ScienceDirect robots-disallowed. **Neither is a paywall**, so this stays UNVERIFIED rather than becoming `paywalled` | delegated session |
| `hausmann-1991` | **still UNVERIFIED** | not re-attempted this round; round 4 could not locate the record at all on Springer | — |
| `memtsoudis-2018` | **still UNVERIFIED** | not re-attempted this round | — |

The two loose ends in section 4 of the round 5 brief, `hausmann-1991` and `memtsoudis-2018`, were **not attempted**. Section 1 and section 3 consumed the round. Both remain exactly as round 4 left them, and the round 4 recommendation stands: `hausmann-1991` is a 1991 German-language row with no DOI whose figures were never read, used by Day 7 for one shivering oxygen-consumption figure, and retiring it is probably cheaper than another round of chasing it.

---

## 2. Field changes recommended for existing rows

| key | field | change | basis |
|---|---|---|---|
| `borgeat-2001` | `supports` | **Add the explicit negative:** Horner syndrome is not reported anywhere in the full text, not merely absent from the abstract. The current note says "if the day needs a Horner figure it must come from the full text or another source" — the full text has now been read and it is not there | full PDF read 2026-09-08 |
| `borgeat-2001` | `n` | confirm as **521 enrolled, 520 analysed** (one excluded for iatrogenic surgical axillary nerve damage); 234 catheter, 286 single injection | full PDF |
| `borgeat-2001` | `supports` | all existing figures confirmed correct: 14% at 10 days, 7.9% at 1 month, 3.9% at 3 months, 0.9% at 6 months, 0.2% at 9 months, acute pneumothorax 1 (0.2%), CNS toxicity 1 (0.2%), overall short- and severe long-term complications 0.4% | full PDF |
| `chou-2016` | `currency` | **`current`.** The AoA/BPS 2024 statement does not supersede it: different jurisdiction, different societies, explicitly ungraded, and it cites Chou as its own reference 2 | `elboghdadly-2024` read in full |
| `chou-2016` | `access` | keep **UNVERIFIED**. 403 and robots-disallowed are blocks, not paywalls | delegated session |
| `renew-2026` | `design`, `n` | **still unread.** Europe PMC gives publication type "Journal Article" only, no abstract. See the schema conflict below | Europe PMC core record, my own browser |
| `asa-acute-pain-2012` | `currency` | consider `superseded_by:chou-2016`, which the existing ledger comment already implies but the field may not carry | not re-checked this round; flagged only |

---

## 3. The schema conflict on `renew-2026`, stated plainly

Your field rules say `design` must be one of seven terms and cannot be empty, and that a row with an unfillable field should be delivered anyway with an explanation rather than left blank.

I have delivered the row, and I have **not** filled `design` with a permitted value. It carries the literal string `DESIGN-UNREAD-SEE-FINDINGS`, which will fail validation.

That is deliberate. The Europe PMC record gives publication type "Journal Article", which is not a study design, and there is no abstract. Choosing any of the seven terms would be a fabrication, and once written into the ledger it would be indistinguishable from a design someone had actually read. The whole point of this ledger is that the difference is visible.

Three ways to resolve it, and the choice is yours:

1. **Send the PDF.** One article; design, sample size and the uptake finding take a minute.
2. **Add an eighth vocabulary term** — `unknown` or `unread` — so that rows whose design has genuinely not been established can sit in the ledger honestly. This will recur; `renew-2026` is unlikely to be the last online-ahead-of-print record with no abstract.
3. **Hold the row out** of the ledger until it is read.

I would not recommend picking a term to satisfy the validator.

---

## 4. Identifier provenance flags

Every PMID recorded this round came from the **Europe PMC REST core record**, not from a PubMed page, because PubMed served JS-shell or captcha responses throughout. Under this project's own rule that is not a qualifying route, so all of the following are marked `UNVERIFIED` in the CSV even though they are very likely correct:

- `elboghdadly-2024` — PMID 39319373
- `thompson-2024-accaha` — PMID 39316661
- `kim-2016-naloxone` — PMID 26289651, PMCID PMC4781798
- `renew-2026` — PMID **42361319** is the exception: it was read off an actual PubMed record page in round 3 and is carried forward as verified.

Two further pagination flags:

- `elboghdadly-2024` volume 79, issue 11, pages 1220-1236 come from Europe PMC only. The freely readable PDF is the **early-view version and carries no page numbers**, and Wiley returned 403. Pagination is therefore unconfirmed.
- `elboghdadly-2024` licence is **contradictory across three sources**: the PDF footer says Creative Commons Attribution 2.5 non-commercial, Europe PMC records CC BY-NC-ND, and Europe PMC's `isOpenAccess` flag is N. It is free to read regardless; the licence field should not be asserted without one more check.

---

## 5. One route finding worth keeping

**A PDF attached to the conversation is the highest-yield route available when the browser is logged out.** `borgeat-2001` went from "unreachable, three rounds running" to fully read, tables and all, in a single step — and it produced the round's most consequential finding, which was a negative one that no amount of abstract-reading would have settled.

For the remaining section 1 items, attaching PDFs will be faster than another authenticated round for everything except Welch 2009 and the laryngospasm rungs, where either route works. The two J Clin Anesth item lists and the ASPAN volume will not yield to any browser session, entitled or not, because the institution does not hold them.

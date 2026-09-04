# method.md

Retrieval date: 2026-09-02. All `verified_on` values in the ledger carry that date.

## What I searched

Roughly two dozen targeted searches, one to two per day, weighted toward the days whose claims
carry a number. Queries were built around author-plus-year-plus-journal where I expected a known
landmark (Murphy 2008, Kurz 1996, Botto 2014), and around the claim itself where I did not
(negative pressure pulmonary oedema case series, compartment syndrome and regional anaesthesia,
handover checklist randomised trials). For guideline days I searched the society name plus the
document title plus the year, then followed to the publisher's full-text page to read the
recommendation language directly rather than a summary of it.

I deliberately spent extra searches on two things: whether any guideline underpinning a day had
been superseded, and whether a landmark trial had been qualified by a later one. Both paid off —
see the currency section of gaps.md.

## Which interfaces responded and which did not

**Responded well.** PubMed abstract pages returned reliably and are the source of most confirmed
PMIDs. PMC returned full open-access records for the AIMS crisis-management series. Publisher
full-text pages at LWW (Anesthesiology, Anesthesia & Analgesia) and BJA/ScienceDirect rendered
abstracts and, for several guidelines, enough of the recommendation text to quote the strength
language directly. Society-hosted PDFs (ASA, ESRA member sites) were reachable and useful.
The Lancet and Lancet Respiratory Medicine returned abstract-level detail.

**Blocked or unusable.** Direct fetching of any URL I had not already seen in a search result was
refused by the fetch tool, which meant I could not construct a PubMed URL from a known PMID and
open it; every record had to be reached through a search that surfaced it. This is the single
largest constraint on this ledger and it is why several rows carry a verified citation with an
UNVERIFIED DOI or PMID: the record existed and was described, but the canonical page was never
returned by a query. Per your instruction I did not attempt `curl` against doi.org or
eutils.ncbi.nlm.nih.gov.

**Worked around by triangulation.** Where a publisher page would not surface, I accepted a
bibliographic identifier only from a structured, PMID-annotated secondary record —
ClinicalTrials.gov reference tables, PMC reference lists carrying DOIs, and institutional
repository records (Minnesota, Stony Brook, Duke, SUNY, Maastricht, Amsterdam UMC). Every row
sourced this way says so in `found_via` and says so again in `verified_on`. I treated these as
weaker than a PubMed record and flagged them rather than silently promoting them.

## What I excluded and why

Excluded as support, per your quality bar: UpToDate, OpenAnesthesia, StatPearls, textbook
chapters, and narrative reviews. Several of these surfaced repeatedly and were genuinely useful
as *finding aids* — the APSF newsletter in particular is how I located Fu 2004, RECITE-US and the
perioperative hypotension cluster — so they appear in `found_via` and nowhere else.

Excluded on quality grounds beyond your list: ResearchGate and Academia.edu article pages, used
only to confirm that a paper exists and never as the source of a number; Wikipedia, with one
exception noted below; and Medscape's guideline summary pages, which now carry an explicit
disclosure that AI tools were used in drafting.

One source I would normally have excluded and did not: the AHA scientific statement on MINS
(ruetzler-2021) is in the ledger with bibliographic detail taken from a Wikipedia citation,
because no publisher or PubMed record surfaced across several queries. It is flagged CONFIRM
BEFORE USE in both the row and the worklist. If you would rather it not be in the ledger at all,
delete that row; it does not carry a number that any other row needs.

Excluded on design grounds: Segall 2012 (Anesth Analg 2012;115:102-115), a systematic review of
postoperative handover, which does not map to any term in your controlled `design` vocabulary and
which I did not want to shoehorn into `meta_rct` since it is not restricted to randomised trials.
It is a good source and it is deliberately absent; add it if you widen the vocabulary.

Excluded on scope grounds: the PACU-capacity operations literature for Day 16. It is real work,
mostly by Dexter and colleagues, but it publishes in journals and a study-design idiom that this
ledger's quality bar was not written for, and mixing it in would have produced rows I could not
appraise honestly. This is discussed in gaps.md section 5.

Nothing was excluded as preprint-only. No preprints surfaced.

## Where I am least confident

**Ranked, most concerning first.**

1. **Day 3 rests on one primary source I never reached.** Fu 2004 is the whole day, and every
number attached to it in the ledger came from secondary description — a US patent specification,
a University of Florida teaching page, and APSF correspondence. Its DOI, PMID, sample size, study
design and population are all unverified. I assigned `design` as `cohort` provisionally because
your vocabulary has no UNVERIFIED option for that column; that assignment may be wrong and should
not be trusted. It is item 1 on the MUST HAVE list for this reason.

2. **The PRODIGY PMID is ambiguous.** PubMed surfaced record 32925318 for the PRODIGY primary
publication; one institutional record (University of Iowa) gives PMID 32304460 against the same
DOI and the same abstract text. I used 32925318 because that is the PubMed record I actually
retrieved, and flagged the conflict in the row. Resolve before the identifier goes anywhere
durable.

3. **Percentage figures read from secondary quotation rather than the source table.** Three
specific instances, all flagged in the ledger and all on the worklist: Visvanathan's outcome
breakdown among 189 laryngospasm incidents; Liem's 8% and 48% threshold-duration figures; and
the 17.9% MINS incidence attributed to Devereaux 2017. In each case a downstream paper quotes the
number and I could not open the upstream table. None of these three numbers should appear on a
teaching page in its current state.

4. **Salmasi 2017's PMID came from a PMID-annotated reference list, not from PubMed.** PLOS ONE
reference lists render PMIDs as structured metadata, which makes them more reliable than a bare
citation, but it is still a secondary route and the row says so.

5. **Author lists and pagination are incomplete on four rows.** The 2025 BMC Anesthesiology NPPE
case series (no author list captured), Driver 2021 (no volume, pages, DOI or PMID), McEvoy 2019
(no page range), and the 2016 SASM guideline (no pagination or authors). The citations in those
rows are therefore not verbatim-complete, which is a deviation from your spec. I chose to include
them flagged rather than omit sources that days 2, 4, 5 and 14 need.

6. **Day 15 rests on a thirteen-year-old guideline and I did not confirm it is the current
version.** I found no successor to the 2013 ASA Postanesthetic Care guideline and no evidence of
one in progress, but absence of a search hit is not confirmation. Worth one check before the day
asserts current status, particularly since Day 15's entire argument is that the guideline says
something the field ignores.

7. **The edrophonium finding is from drug-availability databases, not from FDA primary sources.**
The discontinuation is consistently reported across multiple independent records and I am
confident it is correct, but for a claim that exists specifically to prevent the failure mode you
described, it should be confirmed against the FDA discontinued drug product list before it goes
into a quiz item or a correction notice.

## What I did not do

I did not open, stage, read or summarise anything in the Google Drive folder "NEURO TOPCIS" or
any other folder of third-party PDFs. No PDF is attached to or embedded in these deliverables.
No curriculum content of any kind is included — no pearls, practice points, pitfalls, quiz items
or teaching prose. The suggested claim reframings in gaps.md section 2 are reframings of the
sixteen one-line claims you supplied, which I read as within scope; if you intended those to be
off-limits too, ignore that section and treat the appraisal underneath it as the deliverable.

I did not resolve the compartment-syndrome disagreement on Day 11. Both positions are stated with
their sources and the call is yours.

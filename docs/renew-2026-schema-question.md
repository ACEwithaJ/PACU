# `renew-2026` and the design vocabulary — a decision for the director

Round 5 delivered this row with `design` set to the literal string `DESIGN-UNREAD-SEE-FINDINGS`,
knowing it would fail validation, and said so plainly rather than picking a term. That was the
right call and it is worth recording why, because the situation will recur.

## The row

Renew JR, Linn DD, Logvinov II, Ma Y, Brull SJ. The Impact of the "2023 American Society of
Anesthesiologists Practice Guidelines for Monitoring and Antagonism of Neuromuscular Blockade" on
Quantitative Neuromuscular Monitoring Two Years Later. Anesth Analg. 2026 Jun 25, online ahead of
print. DOI 10.1213/ANE.0000000000008190, PMID 42361319.

Both identifiers were read off a PubMed record in round 3. The paper itself has never been read:
the record carries no abstract, Europe PMC gives publication type "Journal Article" and
`isOpenAccess: N`, and the publisher is paywalled to a logged-out session.

"Journal Article" is a publication type, not a study design. `DESIGNS` offers rct, meta_rct,
cohort, case_series, guideline, consensus_statement and advisory. None of them is known to be
true, and once one is written into the ledger it becomes indistinguishable from a design somebody
actually read. That is the exact failure this ledger exists to prevent.

## The three ways out

1. **Send the PDF.** One article. Design, sample size and the uptake finding take a minute.
2. **Add an eighth vocabulary term**, `unknown` or `unread`, so a row whose design has genuinely
   not been established can sit in the ledger honestly. This is a schema change and therefore the
   director's decision. It would recur: an online-ahead-of-print record with no abstract is not a
   rare thing, and this project has now hit it twice.
3. **Hold the row out** until it is read. This is what has been done, for the second round running.

The row is held out. Nothing on the site cites it and nothing is lost by waiting, except that Day
1 has no currency signal on whether the 2023 monitoring guideline changed practice.

## The wider question the second option raises

An eighth term would let the ledger distinguish three states that it currently collapses into
two: a design that was read, a design that is genuinely unknown, and a row that cannot exist. At
present the second state has no home, so such rows are simply absent, and their absence is
invisible to a reader. A term would make the gap visible on the page instead of only in this file.

Against that: every value in the vocabulary is currently a claim somebody verified, and adding a
non-claim weakens that guarantee unless the validator treats it specially, for example by refusing
to let a page cite a row whose design is unknown.

Not a decision to take quickly, which is why it is written down rather than acted on.

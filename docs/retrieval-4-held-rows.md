# Retrieval round 4 — two rows held out of the ledger

Round 4 delivered 27 rows. Twenty-five were added. Two were held back, both because the round 4
prompt asked the retriever to leave a field empty that the content schema requires. That was an
error in the prompt, not in the retrieval, and neither row can be admitted without either
inventing a value or changing the schema. Both need a director decision.

## `renew-2026` — `design` cannot be empty

The prompt said "the PubMed record has no abstract, so leave design, n and supports empty". The
schema declares `design: z.enum(DESIGNS)` with no empty option, so the row fails to parse.

The row is otherwise complete and its identifiers are read from the record: Renew JR, Linn DD,
Logvinov II, Ma Y, Brull SJ. The Impact of the 2023 American Society of Anesthesiologists
Practice Guidelines for Monitoring and Antagonism of Neuromuscular Blockade on Quantitative
Neuromuscular Monitoring Two Years Later. Anesth Analg. 2026 Jun 25, online ahead of print.
DOI 10.1213/ANE.0000000000008190, PMID 42361319.

The paper's design is genuinely unknown because the record carries no abstract, so this project
will not assign one. Options, all the director's:

1. Read the paper and supply the design, which is what round 5 on an authenticated session would
   do anyway.
2. Leave the row out until then. Nothing on the site cites it and it carries no finding.
3. Add a vocabulary term for a source whose design is not yet known, which is a schema change.

Day 1 loses nothing by waiting. The row exists only as a currency signal, that somebody looked at
uptake of the 2023 guideline two years on, and that signal is recorded here.

## `chou-2016` — `currency` cannot be `UNVERIFIED`

The currency field accepts `current`, `era_limited`, or `superseded_by:<key>`. Round 4 set it to
`UNVERIFIED` deliberately and explained why, and the explanation is a good one: the American Pain
Society dissolved in 2019, and a newer overlapping document exists (Association of Anaesthetists
and British Pain Society, Peri-operative pain management in adults, Anaesthesia,
DOI 10.1111/anae.16391, seen in a search result and not opened). Whether Chou 2016 is still the
current United States document is an open question.

Marking it `current` would assert the thing round 4 refused to assert. Marking it
`superseded_by:` would name a successor nobody has read. So the row waits.

Identifiers are verified and recorded: DOI 10.1016/j.jpain.2015.12.008, PMID 26827847.
Its multimodal-analgesia recommendation text was never read and must not be quoted.

Day 10's placeholder therefore stands.

---

## Resolved 2026-09-08 by retrieval round 5

**`chou-2016` is admitted.** Round 5 opened the newer document that raised the currency doubt, the
Association of Anaesthetists and British Pain Society consensus statement of 2024, and read it in
full. It does not supersede Chou 2016: different jurisdiction and societies, it cites Chou as its
own reference 2, it is explicitly ungraded, and it nowhere claims to replace a prior guideline.
So `chou-2016` currency is `current` and the row is now in the ledger. Its access stays UNVERIFIED,
because a 403 and a robots exclusion are blocks rather than paywalls, and its recommendation text
is still unread and must not be quoted.

The newer statement is in the ledger in its own right as `elboghdadly-2024`, which does give Day 10
a usable multimodal sentence, ungraded, and the page says so.

**`renew-2026` is still held out**, now for a second round, and the reason has sharpened from a
prompt error into a real question about the design vocabulary. See
`docs/renew-2026-schema-question.md`.

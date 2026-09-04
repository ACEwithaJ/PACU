/**
 * PACU — content contract (execution brief Step 2; planning brief §5).
 *
 * Plain JavaScript on purpose. This one module is imported by BOTH
 *   - src/content.config.ts      (Astro build-time validation, via astro:content)
 *   - scripts/validate.mjs       (CI validator, plain Node, no TypeScript loader)
 * so it must run under Node 20 without a compile step. Never fork it: a rule
 * enforced in two places drifts.
 *
 * Rule numbers refer to planning-brief.md §5.4. Where Zod enforces a rule, the
 * issue message is prefixed "RULE-NN:" so the validator can report it under
 * that number instead of as a generic schema failure (RULE-00).
 */

import { z } from "astro/zod";

/* ------------------------------------------------------------------ *
 * STRICT_LEDGER — the single flip for rules 5 and 9.
 *
 * false: a ledger row with neither DOI nor PMID (rule 5), or whose access is
 *        unverified (rule 9), is a WARNING. docs/ledger-debt.md documents
 *        every such row.
 * true:  both become ERRORS and fail the build.
 *
 * Set this to true ONLY when docs/ledger-debt.md sections 1 and 2 are empty.
 * The director flips it; a session does not (execution brief, DO NOT list).
 * ------------------------------------------------------------------ */
export const STRICT_LEDGER = false;

/* ------------------------------------------------------------------ *
 * Controlled vocabularies
 * ------------------------------------------------------------------ */

export const DESIGNS = [
  "rct",
  "meta_rct",
  "cohort",
  "case_series",
  "guideline",
  "consensus_statement",
  "advisory",
];

/** UNVERIFIED is not permitted (rule 9). */
export const ACCESS = ["open", "paywalled"];

/** Execution brief §2.1. The director may amend. */
export const TOPICS = [
  "residual_block",
  "airway",
  "oxygenation",
  "respiratory_depression",
  "hypotension",
  "thermoregulation",
  "myocardial_injury",
  "ponv",
  "analgesia",
  "regional",
  "delirium",
  "emergence",
  "osa",
  "discharge",
  "handover",
];

export const CLAIM_SUPPORT = ["mechanism", "magnitude", "boundary"];

export const EVIDENCE_MODES = ["trial_based", "consensus_only"];

export const CONSENSUS_BASIS = [
  "physiology",
  "registry",
  "guideline",
  "practice_advisory",
  "expert_consensus",
];

export const PHYSIOLOGY_STATUS = ["established", "contested", "unknown"];

export const CLINICAL_CLAIM_STATUS = [
  "supported",
  "associational",
  "uncertain",
  "untested",
  "refuted",
];

/** Designs that count as randomised evidence for rule 2. */
export const RANDOMISED_DESIGNS = ["rct", "meta_rct"];

/** Body slots: level-2 headings, this order, all required (rule 1). */
export const SLOTS = [
  "Why it matters",
  "Mechanism",
  "Evidence",
  "What this does not show",
  "At the bedside",
  "Check yourself",
];

/**
 * Citation token syntax: [[key]] where key is a ledger key. Documented in the
 * README. Used by rule 4 (orphan key) and rule 10 (uncited number).
 */
export const CITE_TOKEN = /\[\[([a-z0-9-]+)\]\]/g;

/** Rule 10, verbatim from execution brief 4.2. */
export const NUMBER_WITH_UNIT = /\d+(\.\d+)?\s?(%|mg|ng\/L|mmHg|min|h|°C)/;

const KEY = /^[a-z0-9-]+$/;
const CURRENCY = /^(current|era_limited|superseded_by:[a-z0-9-]+)$/;

/* ------------------------------------------------------------------ *
 * ledger — one YAML file per row, filename = key
 * ------------------------------------------------------------------ */

const nullableString = z.string().trim().min(1).nullable();

export const ledgerSchema = z
  .object({
    key: z.string().regex(KEY, "key must be lowercase-kebab"),
    day: z.number().int().min(1).max(16).nullable(),
    citation: z.string().trim().min(1),
    doi: nullableString,
    pmid: nullableString,
    design: z.enum(DESIGNS),
    /**
     * The brief says `number`. One imported row (driver-2021) carries
     * year UNVERIFIED in the CSV and the import must not invent one, so null
     * is admitted here and the validator reports it under rule 5 as an
     * incomplete bibliographic record. Director item.
     */
    year: z.number().int().min(1900).max(2100).nullable(),
    n: z.string().trim().min(1),
    access: z.enum(ACCESS, {
      errorMap: () => ({
        message: "RULE-09: access must be open or paywalled (UNVERIFIED is not permitted)",
      }),
    }),
    currency: z
      .string()
      .regex(CURRENCY, 'currency must be "current", "era_limited" or "superseded_by:<key>"'),
    topic: z.enum(TOPICS),
    claim_support: z.enum(CLAIM_SUPPORT),
    supports: z.string().trim().min(1),
    found_via: z.string().nullable(),
    verified_on: z.string().trim().min(1),
  })
  .superRefine((row, ctx) => {
    // Rule 5 — at least one identifier. A build failure only once STRICT_LEDGER
    // is true; until then the validator reports it as a warning.
    if (STRICT_LEDGER && row.doi === null && row.pmid === null) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["doi"],
        message: "RULE-05: ledger row has neither doi nor pmid",
      });
    }
  });

/* ------------------------------------------------------------------ *
 * days — Markdown with frontmatter, one file per day, filename day-NN.md
 * ------------------------------------------------------------------ */

export const quizOptionSchema = z.object({
  text: z.string().trim().min(1),
  correct: z.boolean(),
  explanation: z.string().trim().min(1, "RULE-07: every quiz option needs an explanation"),
});

export const quizItemSchema = z
  .object({
    id: z.string().regex(KEY, "quiz id must be lowercase-kebab"),
    stem: z.string().trim().min(1),
    options: z.array(quizOptionSchema).min(3).max(5),
  })
  .superRefine((item, ctx) => {
    const correct = item.options.filter((o) => o.correct).length;
    if (correct !== 1) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["options"],
        message: `RULE-06: quiz item "${item.id}" has ${correct} correct options; exactly one is required`,
      });
    }
  });

/**
 * @param {import("astro/zod").ZodTypeAny} ledgerRef
 *   Astro passes reference("ledger") so keys resolve at build time (rule 4);
 *   the validator passes z.string() and checks existence itself.
 */
export function makeDaySchema(ledgerRef) {
  return z
    .object({
      id: z.string().regex(/^day-\d{2}$/, 'id must be "day-NN"'),
      title: z.string().trim().min(1),
      claim: z.string().trim().min(1),
      evidence_mode: z.enum(EVIDENCE_MODES),
      consensus_basis: z.enum(CONSENSUS_BASIS).nullable(),
      physiology_status: z.enum(PHYSIOLOGY_STATUS),
      clinical_claim_status: z.enum(CLINICAL_CLAIM_STATUS),
      evidence: z.array(ledgerRef).min(1, "RULE-02: evidence must list at least one ledger key"),
      draft: z.boolean().default(true),
      review_due: z.coerce.date().nullable().default(null),
      quiz: z.array(quizItemSchema).min(1),
    })
    .superRefine((day, ctx) => {
      // Rule 3 — consensus_only must name what it rests on.
      if (day.evidence_mode === "consensus_only" && day.consensus_basis === null) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          path: ["consensus_basis"],
          message: "RULE-03: consensus_only requires a consensus_basis",
        });
      }
      // Rule 8 — quiz ids unique within the day (cross-day uniqueness is the validator's).
      const seen = new Set();
      for (const q of day.quiz) {
        if (seen.has(q.id)) {
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            path: ["quiz"],
            message: `RULE-08: quiz id "${q.id}" appears twice in this day`,
          });
        }
        seen.add(q.id);
      }
    });
}

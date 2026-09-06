/**
 * PACU — content contract (execution brief Step 2; planning brief §5;
 * director decisions of 2026-09-05: 20 days, cards collection, quiz fields).
 *
 * Plain JavaScript on purpose. This one module is imported by BOTH
 *   - src/content.config.ts      (Astro build-time validation, via astro:content)
 *   - scripts/validate.mjs       (CI validator, plain Node, no TypeScript loader)
 * so it must run under Node 20 without a compile step. Never fork it: a rule
 * enforced in two places drifts.
 *
 * Rule numbers refer to planning-brief.md §5.4 (1–10) and README (11–12).
 * Where Zod enforces a rule, the issue message is prefixed "RULE-NN:" so the
 * validator can report it under that number instead of as RULE-00.
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
 * The day plan. Ids are permanent: never renumber, never reuse (D6).
 * Days 1–16 are the original map (docs/gaps.md); 17–20 were added by the
 * director on 2026-09-05 for domains that had no home
 * (docs/content-coverage.md). `title` is a working title for the index
 * until the day is authored; the authored day's own title wins.
 * ------------------------------------------------------------------ */
export const DAY_PLAN = [
  { day: 1, topic: "residual_block", title: "Residual neuromuscular blockade" },
  { day: 2, topic: "airway", title: "Upper airway obstruction and laryngospasm" },
  {
    day: 3,
    topic: "oxygenation",
    title: "Supplemental oxygen hides hypoventilation",
    // Director 2026-09-05: methemoglobinemia lives here (boundary slot:
    // a second way the oximeter reads wrong). Needs its own ledger rows.
    also: ["methemoglobinemia"],
  },
  { day: 4, topic: "respiratory_depression", title: "Respiratory depression after the PACU" },
  { day: 5, topic: "hypotension", title: "Postoperative hypotension" },
  { day: 6, topic: "hypertension", title: "Postoperative hypertension" },
  {
    day: 7,
    topic: "thermoregulation",
    title: "Perioperative hypothermia",
    // Director 2026-09-05: malignant hyperthermia presenting late in the
    // PACU lives here (boundary slot). Needs its own ledger rows.
    also: ["malignant hyperthermia presenting late in the PACU"],
  },
  { day: 8, topic: "myocardial_injury", title: "Myocardial injury after noncardiac surgery" },
  { day: 9, topic: "ponv", title: "Postoperative nausea and vomiting" },
  { day: 10, topic: "analgesia", title: "PACU opioid titration" },
  { day: 11, topic: "regional", title: "Regional anesthesia complications in the PACU" },
  { day: 12, topic: "delirium", title: "Postoperative delirium" },
  { day: 13, topic: "emergence", title: "Delayed emergence" },
  { day: 14, topic: "osa", title: "Obstructive sleep apnea" },
  { day: 15, topic: "discharge", title: "Discharge criteria" },
  { day: 16, topic: "handover", title: "Handover as a transfer of responsibility" },
  { day: 17, topic: "urinary_retention", title: "Postoperative urinary retention" },
  { day: 18, topic: "pdph", title: "Post-dural puncture headache" },
  { day: 19, topic: "positioning_injury", title: "Positioning injuries" },
  { day: 20, topic: "anaphylaxis", title: "Anaphylaxis in the PACU" },
];
export const DAY_COUNT = DAY_PLAN.length;

/**
 * The five algorithm cards (director's list). A card is a standalone,
 * full-screen-legible bedside artifact. It carries the same citation rules
 * as a day: every [[key]] must exist (rule 4) and every number must be cited
 * (rule 10). Authored in Phase 2 after the day it depends on.
 */
export const CARD_PLAN = [
  { id: "card-delayed-emergence", title: "Delayed emergence", dependsOn: 13 },
  { id: "card-hypoxemia", title: "Postoperative hypoxemia", dependsOn: 3 },
  { id: "card-hypotension", title: "PACU hypotension", dependsOn: 5 },
  { id: "card-hypertension", title: "PACU hypertension", dependsOn: 6 },
  { id: "card-laryngospasm", title: "Laryngospasm", dependsOn: 2 },
];

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

/**
 * Execution brief §2.1 plus the director's additions of 2026-09-05:
 * hypertension (Day 6 had no term), and one term per new day 17–20.
 */
export const TOPICS = [
  "residual_block",
  "airway",
  "oxygenation",
  "respiratory_depression",
  "hypotension",
  "hypertension",
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
  "urinary_retention",
  "pdph",
  "positioning_injury",
  "anaphylaxis",
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

/** Quiz item calibration (director's question schema). */
export const DIFFICULTY = ["basic", "advanced", "expert"];
export const EXAM_ALIGNMENT = ["ABA-BASIC", "ABA-ADVANCED", "ITE", "nursing"];

/** Designs that count as randomized evidence for rule 2. */
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

/**
 * Markers the validator collects into docs/content-review.md (rule 12).
 *   [NUMBER NEEDED: what]     a number not in the held sources (execution brief 5.1)
 *   [TODO_VERIFY: what]       same meaning, the director's spelling
 *   [PRACTICE VARIES: what]   practice differs between institutions; the page says so
 * A placeholder in a day or card with draft: false is an error: a placeholder
 * cannot be published.
 */
export const PLACEHOLDER = /\[(NUMBER NEEDED|TODO_VERIFY):\s*([^\]]*)\]/g;
export const PRACTICE_VARIES = /\[PRACTICE VARIES:\s*([^\]]*)\]/g;

/**
 * [GENERAL: text] — a widely taught recommendation this project has NOT
 * verified against a primary record.
 *
 * Added by the director on 2026-09-06 so that a resident is not left without
 * the number they need at the bedside while retrieval catches up. It is
 * deliberately a different kind of statement from everything else here: it
 * renders inside a callout that says so, it is exempt from rule 10 because
 * the callout itself is the disclosure, it is collected into
 * docs/content-review.md as a retrieval target, and rule 15 refuses to let a
 * page carrying one leave draft.
 *
 * It must never become a keyed quiz answer. Replace it with a cited sentence
 * as soon as a retrieval round supplies the source.
 */
export const GENERAL_REC = /\[GENERAL:\s*([^\]]*)\]/g;

/** Rule 11: options that test nothing. */
export const FORBIDDEN_OPTION = /^\s*(all|none|both|neither)\s+of\s+the\s+above\b/i;

const KEY = /^[a-z0-9-]+$/;
const CURRENCY = /^(current|era_limited|superseded_by:[a-z0-9-]+)$/;

/* ------------------------------------------------------------------ *
 * ledger — one YAML file per row, filename = key
 * ------------------------------------------------------------------ */

const nullableString = z.string().trim().min(1).nullable();

export const ledgerSchema = z
  .object({
    key: z.string().regex(KEY, "key must be lowercase-kebab"),
    day: z.number().int().min(1).max(DAY_COUNT).nullable(),
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
 * quiz items
 * ------------------------------------------------------------------ */

export const quizOptionSchema = z.object({
  text: z
    .string()
    .trim()
    .min(1)
    .refine((t) => !FORBIDDEN_OPTION.test(t), {
      message: 'RULE-11: "all/none of the above" is not a permitted option',
    }),
  correct: z.boolean(),
  explanation: z.string().trim().min(1, "RULE-07: every quiz option needs an explanation"),
});

/**
 * The brief's contract (id, stem, options) plus the director's optional
 * fields. Optional now so Day 3's three items keep building; make them
 * required once every authored day carries them.
 */
export const quizItemSchema = z
  .object({
    id: z.string().regex(KEY, "quiz id must be lowercase-kebab"),
    stem: z.string().trim().min(1),
    options: z.array(quizOptionSchema).min(3).max(5),
    teachingPoint: z.string().trim().min(1).optional(),
    difficulty: z.enum(DIFFICULTY).optional(),
    examAlignment: z.array(z.enum(EXAM_ALIGNMENT)).min(1).optional(),
    tags: z.array(z.string().regex(KEY, "tags are lowercase-kebab")).optional(),
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

/* ------------------------------------------------------------------ *
 * days — Markdown with frontmatter, one file per day, filename day-NN.md
 * ------------------------------------------------------------------ */

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
      // The day must be on the plan.
      const n = Number(day.id.slice(4));
      if (!DAY_PLAN.some((d) => d.day === n)) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          path: ["id"],
          message: `RULE-08: ${day.id} is not on DAY_PLAN (src/content/schema.mjs); days are never added ad hoc`,
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

/* ------------------------------------------------------------------ *
 * cards — Markdown with frontmatter, one file per card, filename <id>.md
 * The body is the algorithm: numbered steps, each a claim, each cited.
 * ------------------------------------------------------------------ */

export function makeCardSchema(ledgerRef) {
  return z
    .object({
      id: z.string().regex(/^card-[a-z0-9-]+$/, 'id must be "card-<slug>"'),
      title: z.string().trim().min(1),
      /** One sentence: when a resident reaches for this card. */
      purpose: z.string().trim().min(1),
      /** The day whose evidence this card summarizes. */
      day: z.number().int().min(1).max(DAY_COUNT),
      evidence: z.array(ledgerRef).min(1, "RULE-02: evidence must list at least one ledger key"),
      draft: z.boolean().default(true),
    })
    .superRefine((card, ctx) => {
      if (!CARD_PLAN.some((c) => c.id === card.id)) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          path: ["id"],
          message: `RULE-08: ${card.id} is not on CARD_PLAN (src/content/schema.mjs)`,
        });
      }
    });
}

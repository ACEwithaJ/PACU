import { defineCollection, reference } from "astro:content";
import { glob } from "astro/loaders";
import { ledgerSchema, makeDaySchema, makeCardSchema } from "./content/schema.mjs";

/**
 * The source ledger. One YAML file per row, filename = key. Generated once
 * from data/ledger.csv by scripts/ledger-import.mjs; the YAML is authoritative
 * from then on and the CSV is provenance (execution brief 3.5).
 */
const ledger = defineCollection({
  loader: glob({ pattern: "**/*.yaml", base: "./src/content/ledger" }),
  schema: ledgerSchema,
});

/**
 * One Markdown file per day, day-NN.md. `evidence` holds ledger references,
 * so an orphan key (rule 4) fails the Astro build as well as the validator.
 */
const days = defineCollection({
  loader: glob({ pattern: "day-*.md", base: "./src/content/days" }),
  schema: makeDaySchema(reference("ledger")),
});

/**
 * The algorithm cards (director's list, 2026-09-05). Same citation rules as
 * a day; rendered full-screen at /c/<id>/.
 */
const cards = defineCollection({
  loader: glob({ pattern: "card-*.md", base: "./src/content/cards" }),
  schema: makeCardSchema(reference("ledger")),
});

export const collections = { ledger, days, cards };

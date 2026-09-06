/**
 * Deterministic placement of the correct quiz option (audit finding P1-001).
 *
 * Authored items keep the correct option first, which is the natural way to
 * write them and the worst way to render them: 64 of 67 rendered keys were
 * "A". Rather than shuffle randomly (unreproducible, untestable), the
 * options are ROTATED so that the correct option lands at a position derived
 * from the item id. The same function runs in Quiz.astro (render) and in
 * scripts/validate.mjs (rule 13: no position may hold more than 40% of keys
 * across the site), so the check tests exactly what the reader sees.
 *
 * Plain JS with no dependencies so the validator can import it under Node 20.
 */

/** Sum of char codes, salted. Small, stable, easy to reproduce by hand. */
export function seedOf(id, salt = KEY_SALT) {
  let s = 0;
  for (const ch of `${salt}${id}`) s += ch.charCodeAt(0);
  return s;
}

/**
 * The salt exists so the site-wide distribution can be rebalanced without
 * touching any item id (ids are permanent). If rule 13 fails after new items
 * are added, change this one string and re-run the validator.
 */
export const KEY_SALT = "pacu-2026";

/** Index the correct option will occupy after rotation. */
export function targetIndex(id, n, salt = KEY_SALT) {
  return seedOf(id, salt) % n;
}

/**
 * Rotate `options` so that the (single) correct option sits at targetIndex.
 * Relative order of the distractors is preserved. Returns a new array.
 */
export function placeOptions(id, options, salt = KEY_SALT) {
  const n = options.length;
  const from = options.findIndex((o) => o.correct);
  if (from === -1 || n === 0) return options.slice();
  const to = targetIndex(id, n, salt);
  const shift = ((to - from) % n + n) % n;
  return options.map((_, i) => options[((i - shift) % n + n) % n]);
}

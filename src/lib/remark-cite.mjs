/**
 * remark plugin for the authoring markers.
 *
 *   [[key]]                    -> <a class="cite" href="#src-key">key</a>
 *   [NUMBER NEEDED: text]      -> <span class="ed-note" data-kind="placeholder">…</span>
 *   [TODO_VERIFY: text]        -> <span class="ed-note" data-kind="verify">…</span>
 *   [PRACTICE VARIES: text]    -> <span class="varies"><strong>Local practice differs.</strong> text</span>
 *   [GENERAL: text]            -> <span class="general">…</span>, a labelled callout saying the
 *                                 statement is widely taught but unverified here
 *
 * The citation token is the one the validator enforces (rules 4 and 10) and it
 * renders as an in-page link so the key stays visible next to the number it
 * supports. The editorial markers stay in the source, where the validator
 * collects them into docs/content-review.md, but they are hidden from readers
 * by CSS unless the page is opened with ?editor=1 (audit finding P2-002).
 * The practice-varies marker is reader-facing and renders as a callout.
 *
 * No dependency on unist-util-visit: the walk is a dozen lines.
 */

const TOKEN = /\[\[([a-z0-9-]+)\]\]|\[(NUMBER NEEDED|TODO_VERIFY|PRACTICE VARIES|GENERAL):\s*([^\]]*)\]/g;

export default function remarkCite() {
  return (tree) => walk(tree);
}

function walk(node) {
  if (!Array.isArray(node.children)) return;
  const out = [];
  for (const child of node.children) {
    if (child.type === "text" && new RegExp(TOKEN.source).test(child.value)) {
      out.push(...split(child.value));
    } else {
      walk(child);
      out.push(child);
    }
  }
  node.children = out;
}

function html(value) {
  return { type: "html", value };
}

const escapeHtml = (s) =>
  s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c] ?? c);

function split(value) {
  const nodes = [];
  let last = 0;
  for (const m of value.matchAll(new RegExp(TOKEN.source, "g"))) {
    if (m.index > last) nodes.push({ type: "text", value: value.slice(last, m.index) });
    if (m[1]) {
      nodes.push({
        type: "link",
        url: `#src-${m[1]}`,
        title: null,
        data: { hProperties: { className: ["cite"], "data-key": m[1] } },
        children: [{ type: "text", value: m[1] }],
      });
    } else if (m[2] === "PRACTICE VARIES") {
      nodes.push(html(`<span class="varies"><strong>Local practice differs.</strong> ${escapeHtml(m[3].trim())}</span>`));
    } else if (m[2] === "GENERAL") {
      nodes.push(
        html(
          `<span class="general"><strong>General recommendation.</strong> ` +
            `${escapeHtml(m[3].trim())} ` +
            `<em>Widely taught and not verified against a primary source by this project; ` +
            `it carries no ledger entry. Follow your institution's protocol.</em></span>`
        )
      );
    } else {
      const kind = m[2] === "TODO_VERIFY" ? "verify" : "placeholder";
      nodes.push(html(`<span class="ed-note" data-kind="${kind}">[${m[2]}: ${escapeHtml(m[3].trim())}]</span>`));
    }
    last = m.index + m[0].length;
  }
  if (last < value.length) nodes.push({ type: "text", value: value.slice(last) });
  return nodes;
}

/**
 * remark plugin: [[key]] -> <a class="cite" href="#src-key">key</a>
 *
 * The citation token syntax is the one the validator enforces (rule 4, rule
 * 10). Rendering it as an in-page link to the source card keeps the key
 * visible next to the number it supports — that visibility is the point of
 * rule 10, so the token is not hidden behind a footnote number.
 *
 * No dependency on unist-util-visit: the walk is a dozen lines.
 */

const TOKEN = /\[\[([a-z0-9-]+)\]\]/g;

export default function remarkCite() {
  return (tree) => walk(tree);
}

function walk(node) {
  if (!Array.isArray(node.children)) return;
  const out = [];
  for (const child of node.children) {
    if (child.type === "text" && TOKEN.test(child.value)) {
      TOKEN.lastIndex = 0;
      out.push(...split(child.value));
    } else {
      walk(child);
      out.push(child);
    }
  }
  TOKEN.lastIndex = 0;
  node.children = out;
}

function split(value) {
  const nodes = [];
  let last = 0;
  for (const m of value.matchAll(TOKEN)) {
    if (m.index > last) nodes.push({ type: "text", value: value.slice(last, m.index) });
    nodes.push({
      type: "link",
      url: `#src-${m[1]}`,
      title: null,
      data: { hProperties: { className: ["cite"], "data-key": m[1] } },
      children: [{ type: "text", value: m[1] }],
    });
    last = m.index + m[0].length;
  }
  if (last < value.length) nodes.push({ type: "text", value: value.slice(last) });
  return nodes;
}

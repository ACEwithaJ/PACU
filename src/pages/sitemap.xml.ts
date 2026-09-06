import type { APIRoute } from "astro";
import { getCollection } from "astro:content";

/**
 * Hand-rolled sitemap (audit finding P2-007). No integration, no dependency.
 */
export const GET: APIRoute = async ({ site }) => {
  const base = (site?.href ?? "https://utk-pacu-anesthesia.com/").replace(/\/$/, "");
  const days = await getCollection("days");
  const cards = await getCollection("cards");
  const urls = [
    "/",
    "/about/",
    ...days.map((d) => `/d/${d.data.id}/`).sort(),
    ...cards.map((c) => `/c/${c.data.id}/`).sort(),
  ];
  const body =
    `<?xml version="1.0" encoding="UTF-8"?>\n` +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
    urls.map((u) => `  <url><loc>${base}${u}</loc></url>`).join("\n") +
    `\n</urlset>\n`;
  return new Response(body, { headers: { "Content-Type": "application/xml; charset=utf-8" } });
};

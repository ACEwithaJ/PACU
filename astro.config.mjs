// @ts-check
import { defineConfig } from "astro/config";
import remarkCite from "./src/lib/remark-cite.mjs";

// Static site, no integrations, no adapter (planning brief §8: Cloudflare Pages
// by Git integration; build command `npm run build`, output `dist`).
export default defineConfig({
  output: "static",
  trailingSlash: "ignore",
  build: { format: "directory" },
  markdown: {
    smartypants: true,
    remarkPlugins: [remarkCite],
  },
});

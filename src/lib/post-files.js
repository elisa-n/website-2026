// Build-time helper for src/routes.js and react-router.config.js (runs in
// Node, not in the browser). Uses the same naming rule as posts.server.js:
//   alt-text.fi.md -> /fi/blogi/alt-text
//   alt-text.en.md or alt-text.md -> /blog/alt-text
import { readdirSync } from "node:fs";
import { join } from "node:path";

const blogPaths = { en: "/blog", fi: "/fi/blogi" };

export function postPaths() {
  return readdirSync(join(process.cwd(), "src/posts"))
    .map((file) => file.match(/^(.+?)(?:\.(en|fi))?\.md$/))
    .filter(Boolean)
    .map(([, slug, lang = "en"]) => ({ lang, path: `${blogPaths[lang]}/${slug}` }));
}

export function postLanguages() {
  return new Set(postPaths().map((post) => post.lang));
}

// Loads every Markdown file in src/posts at build time. The .server suffix
// keeps this module (and the post bodies) out of the browser bundle; pages
// get post data through their loaders instead.
//
// The file name sets the post's address and language:
//   alt-text.en.md  ->  /blog/alt-text
//   alt-text.fi.md  ->  /fi/blogi/alt-text
// Files with the same name are language versions of one post. Either version
// is optional, and a file without a language (alt-text.md) is English.
//
// Each file starts with a front matter block:
//
// ---
// title: Post title
// date: 2026-08-14
// summary: One or two sentences shown on the blog page.
// ---

import { locales, pages } from "./i18n.js";

const files = import.meta.glob("../posts/*.md", {
  query: "?raw",
  import: "default",
  eager: true,
});

function parseFrontMatter(raw) {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
  if (!match) return { data: {}, body: raw };

  const data = {};
  for (const line of match[1].split(/\r?\n/)) {
    const i = line.indexOf(":");
    if (i === -1) continue;
    const key = line.slice(0, i).trim();
    const value = line.slice(i + 1).trim().replace(/^(["'])(.*)\1$/, "$2");
    data[key] = value;
  }
  return { data, body: match[2] };
}

const fileName = new RegExp(`([^/]+?)(?:\\.(${locales.join("|")}))?\\.md$`);

export function postPath(slug, lang) {
  return `${pages.blog[lang]}/${slug}`;
}

export const posts = Object.entries(files)
  .map(([file, raw]) => {
    const [, slug, lang = "en"] = file.match(fileName);
    const { data, body } = parseFrontMatter(raw);
    return {
      slug,
      lang,
      path: postPath(slug, lang),
      title: data.title ?? slug,
      date: data.date,
      summary: data.summary,
      body,
    };
  })
  .sort((a, b) => (b.date ?? "").localeCompare(a.date ?? ""));

export function getPost(slug, lang) {
  return posts.find((post) => post.slug === slug && post.lang === lang);
}

// Addresses of every language version of a post, e.g. { en: "/blog/x", fi: "/fi/blogi/x" }.
export function getVersions(slug) {
  return Object.fromEntries(
    posts.filter((post) => post.slug === slug).map((post) => [post.lang, post.path]),
  );
}

// One entry per post for a blog listing: the version in `locale` when it
// exists, otherwise the post's only version.
export function listPosts(locale) {
  const bySlug = new Map();
  for (const post of posts) {
    const current = bySlug.get(post.slug);
    if (!current || (post.lang === locale && current.lang !== locale)) {
      bySlug.set(post.slug, post);
    }
  }
  return [...bySlug.values()]
    .sort((a, b) => (b.date ?? "").localeCompare(a.date ?? ""))
    .map(({ slug, lang, path, title, date, summary }) => ({ slug, lang, path, title, date, summary }));
}

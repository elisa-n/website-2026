import { getVersions, posts } from "../lib/posts.server.js";
import { locales, pages } from "../lib/i18n.js";
import { absoluteUrl } from "../lib/seo.js";

const lastmodByPage = { blog: posts[0]?.date };

function alternatesFor(paths) {
  const langs = locales.filter((lang) => paths[lang]);
  if (langs.length < 2) return [];
  return [
    ...langs.map((lang) => ({ lang, path: paths[lang] })),
    { lang: "x-default", path: paths.en },
  ];
}

function urlEntry({ path, lastmod, alternates = [] }) {
  const lines = [`    <loc>${absoluteUrl(path)}</loc>`];
  if (lastmod) lines.push(`    <lastmod>${lastmod}</lastmod>`);
  for (const alt of alternates) {
    lines.push(
      `    <xhtml:link rel="alternate" hreflang="${alt.lang}" href="${absoluteUrl(alt.path)}"/>`,
    );
  }
  return `  <url>\n${lines.join("\n")}\n  </url>`;
}

export function loader() {
  const entries = [];

  // Pages with versions in both languages list each other as alternates.
  for (const [key, paths] of Object.entries(pages)) {
    const alternates = alternatesFor(paths);
    for (const lang of locales) {
      entries.push({ path: paths[lang], lastmod: lastmodByPage[key], alternates });
    }
  }

  for (const post of posts) {
    entries.push({
      path: post.path,
      lastmod: post.date,
      alternates: alternatesFor(getVersions(post.slug)),
    });
  }

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${entries.map(urlEntry).join("\n")}
</urlset>
`;

  return new Response(xml, {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
}

import { site } from "../content/site.js";
import { text } from "../content/text.js";
import { locales, pages } from "./i18n.js";

export function absoluteUrl(path) {
  return new URL(path, site.url).href;
}

// Builds the <head> tags for a page: title, description, canonical URL,
// language alternates and Open Graph / Twitter tags for link previews.
// Pass `page` (a key of `pages`) for the fixed pages, or `alternates` with the
// addresses of each language version (e.g. { en: "/blog/x", fi: "/fi/blogi/x" }).
export function seo({
  locale = "en",
  page,
  alternates = pages[page],
  title,
  description,
  type = "website",
  extra = [],
}) {
  const t = text[locale];
  const fullTitle = title ? `${title} – ${site.name}` : `${site.name} – ${t.role}`;
  const url = absoluteUrl(alternates[locale]);
  const versions = locales.filter((lang) => alternates[lang]);
  description ??= t.description;

  const tags = [
    { title: fullTitle },
    { name: "description", content: description },
    { tagName: "link", rel: "canonical", href: url },
    { property: "og:type", content: type },
    { property: "og:site_name", content: site.name },
    { property: "og:title", content: title ?? fullTitle },
    { property: "og:description", content: description },
    { property: "og:url", content: url },
    { property: "og:locale", content: t.ogLocale },
    { name: "twitter:card", content: site.ogImage ? "summary_large_image" : "summary" },
    ...extra,
  ];

  // Language alternates only make sense when there's more than one version.
  if (versions.length > 1) {
    for (const lang of versions) {
      const alternate = { tagName: "link", rel: "alternate", hrefLang: lang, href: absoluteUrl(alternates[lang]) };
      tags.push(alternate);
      if (lang !== locale) tags.push({ property: "og:locale:alternate", content: text[lang].ogLocale });
    }
    tags.push({ tagName: "link", rel: "alternate", hrefLang: "x-default", href: absoluteUrl(alternates.en) });
  }

  if (site.ogImage) {
    tags.push({ property: "og:image", content: absoluteUrl(site.ogImage) });
  }

  return tags;
}

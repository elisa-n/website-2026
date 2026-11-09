import { useLocation, useMatches } from "react-router";

export const locales = ["en", "fi"];

// Pages that exist in both languages. Blog posts may have one or both
// versions; see src/lib/posts.server.js.
export const pages = {
  about: { en: "/", fi: "/fi" },
  blog: { en: "/blog", fi: "/fi/blogi" },
  experience: { en: "/experience", fi: "/fi/kokemus" },
  contact: { en: "/contact", fi: "/fi/yhteystiedot" },
};

function normalize(pathname) {
  return pathname.length > 1 ? pathname.replace(/\/+$/, "") : pathname;
}

export function getLocale(pathname) {
  const path = normalize(pathname);
  return path === "/fi" || path.startsWith("/fi/") ? "fi" : "en";
}

export function useLocale() {
  const { pathname } = useLocation();
  const matches = useMatches();
  // Static hosts serve a single 404.html for every unknown URL, so the
  // not-found page is always English (with a Finnish line in its content).
  if (matches.some((match) => match.id === "routes/not-found")) return "en";
  return getLocale(pathname);
}

// The same page in the other language, or the closest equivalent.
// `versions` lists a blog post's language versions, when on a post.
export function alternatePath(pathname, locale, versions) {
  const path = normalize(pathname);
  const other = locale === "en" ? "fi" : "en";
  if (versions?.[other]) return versions[other];
  const page = Object.values(pages).find((paths) => paths[locale] === path);
  if (page) return page[other];
  if (path.startsWith(`${pages.blog[locale]}/`)) return pages.blog[other];
  return pages.about[other];
}

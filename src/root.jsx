import { useEffect, useRef } from "react";
import {
  Link,
  Links,
  Meta,
  NavLink,
  Outlet,
  Scripts,
  ScrollRestoration,
  isRouteErrorResponse,
  useLocation,
  useMatches,
} from "react-router";
import fontHref from "@fontsource-variable/atkinson-hyperlegible-next/index.css?url";
import stylesHref from "./styles.css?url";
import { site } from "./content/site.js";
import { text } from "./content/text.js";
import { alternatePath, pages, useLocale } from "./lib/i18n.js";
import ThemeToggle, { themeScript } from "./components/ThemeToggle.jsx";
import { GlobeIcon } from "./components/icons.jsx";
import { NotFoundContent } from "./routes/not-found.jsx";

export const links = () => [
  { rel: "icon", href: "/favicon.svg", type: "image/svg+xml" },
  { rel: "stylesheet", href: fontHref },
  { rel: "stylesheet", href: stylesHref },
];

export function Layout({ children }) {
  const { pathname } = useLocation();
  const locale = useLocale();
  const otherLocale = locale === "en" ? "fi" : "en";
  const t = text[locale];
  // On a blog post, the loader lists its language versions.
  const postVersions = useMatches().at(-1)?.loaderData?.versions;

  const nav = [
    // { to: pages.about[locale], label: t.nav.about, end: true },
    // { to: pages.blog[locale], label: t.nav.blog },
    { to: pages.experience[locale], label: t.nav.experience },
    { to: pages.contact[locale], label: t.nav.contact },
  ];

  return (
    // The theme script adds attributes to <html> before React hydrates.
    <html lang={locale} suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="color-scheme" content="light dark" />
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Oxygen+Mono&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Lunasima:wght@400;700&family=Oxygen+Mono&display=swap"
          rel="stylesheet"
        />

        <Meta />
        <Links />
      </head>
      <body>
        <header className="site-header">
          <div className="skip-slot">
            <a className="skip-link" href="#main">
              {t.skipLink}
            </a>
          </div>
          <div className="site-header__inner">
            <nav aria-label={t.navLabel}>
              <ul className="site-nav">
                <li>
                  <NavLink to={pages.about[locale]} end className="site-name">
                    {site.name}
                  </NavLink>
                </li>
                {nav.map((item) => (
                  <li key={item.to}>
                    <NavLink to={item.to} end={item.end}>
                      {item.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="site-tools">
              <Link
                to={alternatePath(pathname, locale, postVersions)}
                lang={otherLocale}
                hrefLang={otherLocale}
                className="language-switch"
              >
                <GlobeIcon />
                {t.languageSwitch}
              </Link>
              <ThemeToggle labels={t.themeToggle} />
            </div>
          </div>
        </header>

        <main id="main" tabIndex={-1} className="wrap">
          {children}
        </main>

        <footer className="site-footer">
          <div className="wrap">
            <div className="site-footer__inner">
              <p>
                {t.footer.before}
                <Link to={pages.contact[locale]}>{t.footer.link}</Link>
                {t.footer.after}
              </p>
              <p suppressHydrationWarning>
                © {new Date().getFullYear()} {site.name}
              </p>
            </div>
          </div>
        </footer>

        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  const { pathname } = useLocation();
  const isFirstRender = useRef(true);

  // After client-side navigation, move focus to the new page's heading so
  // screen reader and keyboard users start at the top of the new content.
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    document.querySelector("main h1")?.focus({ preventScroll: true });
  }, [pathname]);

  return <Outlet />;
}

export function ErrorBoundary({ error }) {
  if (isRouteErrorResponse(error) && error.status === 404) {
    return <NotFoundContent />;
  }

  return (
    <>
      <title>{`Something went wrong – ${site.name}`}</title>
      <h1 tabIndex={-1}>Something went wrong</h1>
      <p className="lede">
        This page couldn’t be loaded. Try refreshing, or go to the{" "}
        <Link to="/">home page</Link>.
      </p>
    </>
  );
}

import { Link } from "react-router";
import { site } from "../content/site.js";
import { text } from "../content/text.js";
import { getLocale, pages, useLocale } from "../lib/i18n.js";
import { seo } from "../lib/seo.js";

export const meta = ({ location }) =>
  seo({ locale: getLocale(location.pathname), page: "about" });

export default function About() {
  const locale = useLocale();
  const t = text[locale].about;

  return (
    <>
      <section className="hero">
        <h1 id="hero-title" tabIndex={-1}>
          {t.heroTitle}
        </h1>
        <p className="lede">{t.lede(site.name)}</p>
      </section>

      {/* <section className="section" aria-labelledby="services-title">
        <h2 id="services-title">{t.servicesTitle}</h2>
        <ul className="services">
          {t.services.map((service) => (
            <li key={service.title}>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
            </li>
          ))}
        </ul>
      </section> */}

      <section className="section">
        <h2 id="background-title">{t.backgroundTitle}</h2>
        {t.background.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </section>
    </>
  );
}

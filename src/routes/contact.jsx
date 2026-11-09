import { site } from "../content/site.js";
import { text } from "../content/text.js";
import { getLocale, useLocale } from "../lib/i18n.js";
import { seo } from "../lib/seo.js";

export const meta = ({ location }) => {
  const locale = getLocale(location.pathname);
  const t = text[locale].contact;
  return seo({
    locale,
    page: "contact",
    title: t.title,
    description: t.description,
  });
};

export default function Contact() {
  const t = text[useLocale()].contact;

  return (
    <>
      <h1 tabIndex={-1}>{t.title}</h1>
      <p className="lede">{t.lede}</p>

      <p className="email">
        {t.bodyStart} <a href={`mailto:${site.email}`}>{t.mail}</a>
        {t.bodyEnd}
      </p>

      <p>{t.body}</p>

      <section className="section" aria-labelledby="elsewhere-title">
        <h2 id="elsewhere-title">{t.elsewhere}</h2>
        <ul className="link-list">
          {site.links.map((link) => (
            <li key={link.href}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}

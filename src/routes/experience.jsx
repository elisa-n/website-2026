import { text } from "../content/text.js";
import { getLocale, useLocale } from "../lib/i18n.js";
import { seo } from "../lib/seo.js";
import { ChevronIcon } from "../components/icons.jsx";

export const meta = ({ location }) => {
  const locale = getLocale(location.pathname);
  const t = text[locale].experience;
  return seo({
    locale,
    page: "experience",
    title: t.title,
    description: t.description,
  });
};

// Turns a job description into markup: lines starting with "•" become a
// real list (so screen readers announce it as one and don't read "bullet"),
// other lines become paragraphs.
function JobText({ text }) {
  const lines = text
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);
  const isList = lines.every((line) => line.startsWith("•"));

  if (isList) {
    return (
      <ul>
        {lines.map((line) => (
          <li key={line}>{line.replace(/^•\s*/, "")}</li>
        ))}
      </ul>
    );
  }
  return lines.map((line) => <p key={line}>{line}</p>);
}

export default function Experience() {
  const t = text[useLocale()].experience;
  return (
    <>
      <h1 tabIndex={-1}>{t.title}</h1>
      <section className="experience-lede">
        <p className="lede">{t.lede}</p>
      </section>

      <section className="section">
        <h2 id="services-title">{t.certsTitle}</h2>
        <dl className="certificates">
          {t.certs.map((cert) => (
            <>
              <dt key={cert.title}>
                <a href={cert.href} target="_blank" rel="noopener noreferrer">
                  {cert.title}
                </a>
              </dt>
              <dd>{cert.text}</dd>
            </>
          ))}
        </dl>
      </section>

      <section className="section">
        <h2 id="services-title">{t.experiencesTitle}</h2>
        <ul className="experience">
          {t.experiences.map((experience) => (
            <li key={experience.title + experience.dates}>
              <details className="disclosure">
                <summary className="disclosure__toggle">
                  <span className="disclosure__label">
                    <div className="experience_title">
                      <h3>{experience.title}</h3>
                      <div className="experience__timeAndCompany">
                        <p className="experience__dates">{experience.dates}</p>
                        <p>{experience.company}</p>
                      </div>
                    </div>
                  </span>
                  <span className="chevron-wrapper">
                    <ChevronIcon />
                  </span>
                </summary>
                <div className="disclosure__content">
                  <JobText text={experience.text} />
                </div>
              </details>
            </li>
          ))}
        </ul>
      </section>

      <section className="section">
        <h2 id="education-title">{t.educationTitle}</h2>
        <ul className="education">
          {t.educations.map((education) => (
            <li key={education.title}>
              <span className="education-title">{education.title}</span>
              {education.loc}
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}

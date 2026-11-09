// All text that changes between languages. Keep the English and Finnish
// entries in the same shape: each page reads the entry for the current language.

export const text = {
  en: {
    role: "Accessibility consultant",
    description:
      "Elisa Naskali is an accessibility specialist and a web developer.",
    dateLocale: "en-GB",
    ogLocale: "en_GB",

    skipLink: "Skip to content",
    navLabel: "Main",
    nav: {
      about: "About",
      blog: "Blog",
      contact: "Contact",
      experience: "Experience",
    },
    languageSwitch: "Suomeksi",
    themeToggle: {
      toDark: "Switch to dark mode",
      toLight: "Switch to light mode",
    },
    footer: {
      before:
        "This site aims to meet WCAG 2.2 level AA. If something doesn’t work for you, ",
      link: "let me know",
      after: ".",
    },

    about: {
      heroTitle: "It's very nice to meet you",
      lede: (name) =>
        `I’m Elisa, an accessibility consultant and a web developer.`,
      servicesTitle: "What I do",
      services: [
        {
          title: "Lorem ipsum",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
      ],
      backgroundTitle: "",
      background: [""],
    },

    blog: {
      title: "Blog",
      lede: "My thoughts on accessibility, development and testing.",
      empty: "No posts yet. Add a Markdown file to src/posts to publish one.",
      allPosts: "All posts",
      languageOnly: { fi: "Finnish only" },
    },

    contact: {
      title: "Contact",
      description: "",
      lede: "",
      bodyStart: "Send me an ",
      mail: "e-mail",
      bodyEnd: " to get in touch.",
      elsewhere: "Elsewhere",
    },

    experience: {
      title: "Experience",
      description:
        "Elisa Naskali’s experience in accessibility and web development.",
      lede: "I’ve worked with web services for over eight years, first as a front-end developer and then as an UX and accessibility consultant. I've worked with both public and private sector organizations, banks and online shops.",
      certsTitle: "Certifications",
      certs: [
        {
          title: "IAAP CPWA",
          href: "https://www.accessibilityassociation.org/cpwa",
          text: "IAAP Certified Professional in Web Accessibility, includes CPACC & WAS certifications",
        },

        {
          title: "Github Copilot",
          href: "https://github.com/features/copilot",
          text: "",
        },
      ],
      experiencesTitle: "Work",
      showMore: "Show more",
      showLess: "Show less",
      experiences: [
        {
          title: "UX & Accessibility Specialist",
          dates: "September 2023 – present",
          company: "Eficode",
          href: "https://www.eficode.com",
          text: `• Accessibility evaluations to web and mobile services and PDF-files providing customers with concrete technical remediation instructions. 
           • Targeted accessibility trainings tailored on customers' needs.
          • Continuous accessibility consultation and support to help customers build and strengthen their in-house accessibility capabilities and processes.
          • Contributing to accessibility-related business and service development initiatives.`,
        },
        {
          title: "Developer",
          dates: "July 2022 - August 2023",
          company: "Bou",
          href: "https://www.wearebou.com",
          text: `• Building websites and web applications for client projects as a full-stack developer and accessibility specialist, using React, TypeScript and Next.js.
          • Developing internal tooling and shaping the company's accessibility practices.`,
        },
        {
          title: "Research Assistant (Master's Thesis & Developer)",
          dates: "May 2021 - August 2021 & January 2022 - June 2022",
          company: "Aalto University",
          href: "https://www.aalto.fi/",
          text: `• Writing my master's thesis on the accessibility of digital health services for older adults with type 2 diabetes, using qualitative interviews and a mixed-methods survey.
          • Conducting user research to design a web & mobile platform for developer experience research. Architecture and development of an accessible website with Gatsby (JS, React ). `,
        },
        {
          title: "Developer",
          dates:
            "September 2018 - September 2020 (Trainee May 2018 - August 2018)",
          company: "Exove",
          href: "https://www.exove.com",
          text: "• Working as a full-stack developer, building digital services for public and private sector clients with React, SCSS, WordPress and Drupal 8.",
        },
      ],
      educationTitle: "Education",
      educations: [
        {
          title: "MsC: Human-Computer Interaction",
          loc: ", Aalto University (2020 - 2022)",
        },
        {
          title: "Exchange Student: General Studies and Humanities",
          loc: ", Yonsei University (2021-2021)",
        },
        {
          title: "BsC: Computer Science",
          loc: ", Aalto University (2016-2020)",
        },
      ],
    },
  },

  fi: {
    role: "Saavutettavuuskonsultti",
    description:
      "Elisa Naskali on saavutettavuusasiantuntija ja webbikehittäjä.",
    dateLocale: "fi-FI",
    ogLocale: "fi_FI",

    skipLink: "Siirry sisältöön",
    navLabel: "Päävalikko",
    nav: {
      about: "Minusta",
      blog: "Blogi",
      contact: "Yhteystiedot",
      experience: "Kokemus",
    },
    languageSwitch: "In English",
    themeToggle: {
      toDark: "Vaihda tummaan tilaan",
      toLight: "Vaihda vaaleaan tilaan",
    },
    footer: {
      before:
        "Sivu pyrkii täyttämään WCAG 2.2 -ohjeiston AA-tason. Jos jokin ei toimi, ",
      link: "kerro siitä minulle",
      after: ".",
    },

    about: {
      heroTitle: "Onpa hauska tavata",
      lede: (name) =>
        `Olen Elisa, saavutettavuusasiantuntija ja web-kehittäjä.`,
      servicesTitle: "Mitä teen",
      services: [
        {
          title: "",
          text: "",
        },
      ],
      backgroundTitle: "",
      background: [""],
      cta: {
        before: "Onko sinulla projekti mielessä? ",
        link: "Ota yhteyttä",
        after: ".",
      },
    },

    blog: {
      title: "Blogi",
      lede: "Ajatuksiani saavutettavuudesta, kehityksestä ja testauksesta.",
      empty: "Ei vielä kirjoituksia.",
      allPosts: "Kaikki kirjoitukset",
      // Tag for posts that don't have a Finnish version.
      languageOnly: { en: "Vain englanniksi" },
    },

    contact: {
      title: "Yhteystiedot",
      description:
        "Ota yhteyttä saavutettavuusauditointeihin, koulutukseen ja katselmointeihin liittyen.",
      lede: "",
      bodyStart: "Parhaiten saat minut kiinni ",
      mail: "sähköpostilla",
      bodyEnd: ".",
      elsewhere: "Muualla verkossa",
    },
    experience: {
      title: "Kokemus",
      description:
        "Elisa Naskalin kokemus saavutettavuudesta ja web-kehityksestä.",
      lede: "Olen työskennellyt verkkopalveluiden parissa yli kahdeksan vuotta, aluksi front-end-kehittäjänä ja sittemmin UX- ja saavutettavuuskonsulttina. Olen tehnyt töitä sekä julkisen että yksityisen sektorin organisaatioiden, pankkien ja verkkokauppojen kanssa. ",
      certsTitle: "Sertifikaatit",
      certs: [
        {
          title: "IAAP CPWA",
          href: "https://www.accessibilityassociation.org/cpwa",
          text: "IAAP Certified Professional in Web Accessibility, sisältää CPACC & WAS sertifikaatit",
        },

        {
          title: "Github Copilot",
          href: "https://github.com/features/copilot",
          text: "",
        },
      ],
      experiencesTitle: "Työkokemus",
      showMore: "Näytä lisää",
      showLess: "Näytä vähemmän",
      experiences: [
        {
          title: "UX- ja saavutettavuusasiantuntija",
          dates: "Syyskuu 2023 – toistaiseksi ",
          company: "Eficode",
          href: "https://www.eficode.com",
          text: `• Verkko- ja mobiilipalveluiden sekä PDF-tiedostojen saavutettavuusarvioinnit, ja niiden pohjalta luodut konkreettiset korjausohjeet.
           • Asiakkaiden tarpeisiin räätälöidyt saavutettavuuskoulutukset.
          • Jatkuva saavutettavuuskonsultointi ja -tuki. Asiakkaiden tukeminen heidän saavutettavuusosaamisensa ja -prosessiensa vahvistamisessa.
          • Osallistuminen liiketoiminnan ja palvelujen kehitystyöhön saavutettavuusteknologian osalta.`,
        },
        {
          title: "Developer",
          dates: "Heinäkuu 2022 – Elokuu 2023",
          company: "Bou",
          href: "https://www.wearebou.com",
          text: `• Verkkosivustojen ja verkkosovellusten rakentaminen asiakasprojekteihin full-stack-kehittäjänä ja saavutettavuusasiantuntijana Reactilla, TypeScriptillä ja Next.js:llä.
          • Sisäisten työkalujen kehittäminen ja yrityksen saavutettavuuskäytäntöjen luominen ja kehitys.`,
        },
        {
          title: "Tutkimusassistentti (diplomityö ja fullstack-kehittäjä)",
          dates: "Toukokuu 2021 – Elokuu 2021 & Tammikuu 2022 – Kesäkuu 2022",
          company: "Aalto-yliopisto",
          href: "https://www.aalto.fi/",
          text: `• Diplomityön kirjoittaminen digitaalisten terveyspalveluiden saavutettavuudesta tyypin 2 diabetesta sairastaville ikääntyneille laadullisten haastattelujen ja monimenetelmäisen kyselytutkimuksen avulla.
          • Käyttäjätutkimuksen tekeminen kehittäjäkokemuksen tutkimukseen tarkoitetun verkko- ja mobiilialustan suunnittelua varten. Saavutettavan verkkosivuston arkkitehtuuri ja kehitys Gatsbyllä.`,
        },
        {
          title: "Developer",
          dates:
            "Syyskuu 2018 – Syyskuu 2020 (Trainee Toukokuu 2018 – Elokuu 2018)",
          company: "Exove",
          href: "https://www.exove.com",
          text: "• Työskentely full-stack-kehittäjänä, digitaalisten palveluiden rakentaminen julkisen ja yksityisen sektorin asiakkaille Reactilla, SCSS:llä, WordPressillä ja Drupal 8:lla.",
        },
      ],
      educationTitle: "Koulutus",
      educations: [
        {
          title: "Diplomi-insinööri: Human-Computer Interaction",
          loc: ", Aalto Yliopisto (2020 - 2022)",
        },
        {
          title: "Vaihto-opiskelu: Humanistiset opinnot",
          loc: ", Yonsei University (2021-2021)",
        },
        {
          title: "Tekniikan kandidaatti: Tietotekniikka",
          loc: ", Aalto Yliopisto (2016-2020)",
        },
      ],
    },
  },
};

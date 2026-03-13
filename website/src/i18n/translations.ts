export const translations = {
  de: {
    nav: {
      home: 'Home',
      about: 'Über uns',
      news: 'News',
      events: 'Events',
      gallery: 'Galerie',
      data: 'Daten',
      contact: 'Kontakt',
    },
    footer: {
      imprint: 'Impressum',
      privacy: 'Datenschutz',
      copyright: '© 2026 GreenSport Graubünden. Alle Rechte vorbehalten.',
      tagline: 'Nachhaltiger Alpensport in Graubünden',
    },
    home: {
      heroTitle: 'Nachhaltiger Alpensport in Graubünden',
      heroSubtitle: 'Wir analysieren und fördern die Nachhaltigkeit von Sportveranstaltungen im Alpenraum.',
      heroCta: 'Events entdecken',
      highlightEvents: '12',
      highlightEventsLabel: 'Events analysiert',
      highlightRegions: '5',
      highlightRegionsLabel: 'Regionen',
      highlightCo2: '32%',
      highlightCo2Label: 'CO₂-Reduktion',
      eventsTitle: 'Kommende Events',
      greenScoreTitle: 'Green Score',
      greenScoreText: 'Unser datenbasiertes Bewertungssystem misst die Nachhaltigkeit von Alpensport-Veranstaltungen anhand objektiver Kriterien.',
      greenScoreCta: 'Mehr erfahren',
      missionTitle: 'Unsere Mission',
      missionText: 'GreenSport Graubünden setzt sich dafür ein, den Alpensport nachhaltiger zu gestalten. Durch transparente Datenanalyse und enge Zusammenarbeit mit Veranstaltern schaffen wir die Grundlage für umweltbewusste Sportevents.',
    },
    about: {
      title: 'Über uns',
      missionTitle: 'Unsere Mission',
      missionText: 'GreenSport Graubünden ist eine Initiative zur Förderung der Nachhaltigkeit im Alpensport. Wir analysieren Sportveranstaltungen in Graubünden nach ökologischen, sozialen und ökonomischen Kriterien und machen die Ergebnisse öffentlich zugänglich.',
      storyTitle: 'Unsere Geschichte',
      storyText: 'Entstanden als Forschungsprojekt an der Fachhochschule Graubünden (FHGR), hat sich GreenSport Graubünden zu einer umfassenden Plattform für nachhaltigen Alpensport entwickelt. Seit 2024 arbeiten wir mit Veranstaltern, Gemeinden und Sportverbänden zusammen, um messbare Nachhaltigkeitsziele zu definieren und umzusetzen.',
      valuesTitle: 'Unsere Werte',
      values: [
        { title: 'Transparenz', text: 'Offene Daten und nachvollziehbare Bewertungsmethoden für alle Stakeholder.' },
        { title: 'Nachhaltigkeit', text: 'Ökologische, soziale und wirtschaftliche Verantwortung im Alpensport.' },
        { title: 'Gemeinschaft', text: 'Zusammenarbeit mit Veranstaltern, Gemeinden und der Bevölkerung.' },
        { title: 'Innovation', text: 'Datenbasierte Lösungen und neue Technologien für nachhaltigeren Sport.' },
      ],
      orgTitle: 'Organisatorischer Kontext',
      orgText: 'GreenSport Graubünden ist ein Projekt der Fachhochschule Graubünden (FHGR) im Rahmen des Studiengangs Multimedia Production. Die Plattform verbindet wissenschaftliche Methodik mit praxisnaher Kommunikation, um Nachhaltigkeit im Alpensport sichtbar und messbar zu machen.',
    },
    news: {
      title: 'News',
      readMore: 'Weiterlesen',
    },
    events: {
      title: 'Events',
      upcoming: 'Kommende Events',
      past: 'Vergangene Events',
      location: 'Ort',
      date: 'Datum',
      greenScore: 'Green Score',
    },
  },
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      news: 'News',
      events: 'Events',
      gallery: 'Gallery',
      data: 'Data',
      contact: 'Contact',
    },
    footer: {
      imprint: 'Imprint',
      privacy: 'Privacy Policy',
      copyright: '© 2026 GreenSport Graubünden. All rights reserved.',
      tagline: 'Sustainable Alpine Sports in Graubünden',
    },
    home: {
      heroTitle: 'Sustainable Alpine Sports in Graubünden',
      heroSubtitle: 'We analyze and promote the sustainability of sports events in the Alpine region.',
      heroCta: 'Discover Events',
      highlightEvents: '12',
      highlightEventsLabel: 'Events Analyzed',
      highlightRegions: '5',
      highlightRegionsLabel: 'Regions',
      highlightCo2: '32%',
      highlightCo2Label: 'CO₂ Reduction',
      eventsTitle: 'Upcoming Events',
      greenScoreTitle: 'Green Score',
      greenScoreText: 'Our data-driven rating system measures the sustainability of alpine sports events based on objective criteria.',
      greenScoreCta: 'Learn more',
      missionTitle: 'Our Mission',
      missionText: 'GreenSport Graubünden is committed to making alpine sports more sustainable. Through transparent data analysis and close collaboration with event organizers, we create the foundation for environmentally conscious sports events.',
    },
    about: {
      title: 'About Us',
      missionTitle: 'Our Mission',
      missionText: 'GreenSport Graubünden is an initiative to promote sustainability in alpine sports. We analyze sports events in Graubünden according to ecological, social, and economic criteria and make the results publicly accessible.',
      storyTitle: 'Our Story',
      storyText: 'Originally a research project at the University of Applied Sciences of the Grisons (FHGR), GreenSport Graubünden has evolved into a comprehensive platform for sustainable alpine sports. Since 2024, we have been working with event organizers, municipalities, and sports associations to define and implement measurable sustainability goals.',
      valuesTitle: 'Our Values',
      values: [
        { title: 'Transparency', text: 'Open data and traceable evaluation methods for all stakeholders.' },
        { title: 'Sustainability', text: 'Ecological, social, and economic responsibility in alpine sports.' },
        { title: 'Community', text: 'Collaboration with organizers, municipalities, and the public.' },
        { title: 'Innovation', text: 'Data-driven solutions and new technologies for more sustainable sports.' },
      ],
      orgTitle: 'Organizational Context',
      orgText: 'GreenSport Graubünden is a project of the University of Applied Sciences of the Grisons (FHGR) as part of the Multimedia Production program. The platform combines scientific methodology with practical communication to make sustainability in alpine sports visible and measurable.',
    },
    news: {
      title: 'News',
      readMore: 'Read more',
    },
    events: {
      title: 'Events',
      upcoming: 'Upcoming Events',
      past: 'Past Events',
      location: 'Location',
      date: 'Date',
      greenScore: 'Green Score',
    },
  },
} as const;

export type Locale = 'de' | 'en';

export function t(locale: Locale) {
  return translations[locale];
}

export function getLocaleFromUrl(url: URL): Locale {
  const [, locale] = url.pathname.split('/');
  if (locale === 'en') return 'en';
  return 'de';
}

export function getLocalePath(locale: Locale, path: string): string {
  return `/${locale}${path}`;
}

export interface NewsArticle {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
}

export interface EventItem {
  name: string;
  date: string;
  location: string;
  description: string;
  greenScore: number;
  upcoming: boolean;
}

export const newsArticles: Record<'de' | 'en', NewsArticle[]> = {
  de: [
    { slug: 'engadin-skimarathon-nachhaltigkeit', title: 'Engadin Skimarathon setzt neue Nachhaltigkeitsstandards', date: '2026-02-28', excerpt: 'Der Engadin Skimarathon hat ein umfassendes Nachhaltigkeitskonzept umgesetzt, das als Vorbild für andere Grossveranstaltungen dient. Von der Anreise bis zur Abfallentsorgung wurden alle Prozesse optimiert.' },
    { slug: 'laax-erneuerbare-energien', title: 'LAAX investiert in erneuerbare Energien', date: '2026-02-15', excerpt: 'Das Skigebiet LAAX setzt konsequent auf erneuerbare Energien und hat seine CO₂-Emissionen in den letzten drei Jahren um 40% reduziert. Neue Solarpanels auf den Bergstationen liefern sauberen Strom.' },
    { slug: 'green-score-methodik', title: 'Neue Green-Score-Methodik vorgestellt', date: '2026-01-20', excerpt: 'GreenSport Graubünden präsentiert die überarbeitete Green-Score-Methodik. Das Bewertungssystem umfasst nun 25 Indikatoren in fünf Kategorien und ermöglicht eine differenziertere Bewertung.' },
    { slug: 'arosa-lenzerheide-tourismus', title: 'Arosa Lenzerheide: Vorreiter im nachhaltigen Tourismus', date: '2025-12-10', excerpt: 'Die Region Arosa Lenzerheide wurde für ihre Bemühungen im nachhaltigen Tourismus ausgezeichnet. Das integrierte Mobilitätskonzept und die Förderung regionaler Produkte setzen Massstäbe.' },
    { slug: 'klimawandel-wintersport', title: 'Klimawandel und Wintersport: Anpassungsstrategien', date: '2025-11-15', excerpt: 'Wie sich der Klimawandel auf den Wintersport in Graubünden auswirkt und welche Strategien Veranstalter und Destinationen entwickeln, um sich anzupassen.' },
    { slug: 'davos-co2-kompensation', title: 'Davos Klosters lanciert CO₂-Kompensationsprogramm', date: '2025-10-22', excerpt: 'Die Destination Davos Klosters hat ein innovatives CO₂-Kompensationsprogramm für Sportveranstaltungen eingeführt. Teilnehmer können ihren ökologischen Fussabdruck direkt bei der Anmeldung kompensieren.' },
  ],
  en: [
    { slug: 'engadin-ski-marathon-sustainability', title: 'Engadin Ski Marathon Sets New Sustainability Standards', date: '2026-02-28', excerpt: 'The Engadin Ski Marathon has implemented a comprehensive sustainability concept that serves as a model for other major events. All processes from travel to waste disposal have been optimized.' },
    { slug: 'laax-renewable-energy', title: 'LAAX Invests in Renewable Energy', date: '2026-02-15', excerpt: 'The ski resort LAAX is consistently investing in renewable energy and has reduced its CO₂ emissions by 40% over the past three years. New solar panels on mountain stations provide clean electricity.' },
    { slug: 'green-score-methodology', title: 'New Green Score Methodology Introduced', date: '2026-01-20', excerpt: 'GreenSport Graubünden presents the revised Green Score methodology. The rating system now includes 25 indicators across five categories for more differentiated evaluation.' },
    { slug: 'arosa-lenzerheide-tourism', title: 'Arosa Lenzerheide: Pioneer in Sustainable Tourism', date: '2025-12-10', excerpt: 'The Arosa Lenzerheide region has been recognized for its sustainable tourism efforts. The integrated mobility concept and promotion of regional products set new benchmarks.' },
    { slug: 'climate-change-winter-sports', title: 'Climate Change and Winter Sports: Adaptation Strategies', date: '2025-11-15', excerpt: 'How climate change affects winter sports in Graubünden and what strategies organizers and destinations are developing to adapt.' },
    { slug: 'davos-carbon-offset', title: 'Davos Klosters Launches Carbon Offset Program', date: '2025-10-22', excerpt: 'The destination Davos Klosters has introduced an innovative CO₂ offset program for sports events. Participants can offset their ecological footprint directly during registration.' },
  ],
};

export const events: Record<'de' | 'en', EventItem[]> = {
  de: [
    { name: 'Engadin Skimarathon', date: '8. März 2026', location: 'Maloja – S-chanf', description: 'Der grösste Skilanglauf-Volkslauf der Schweiz über 42 km durch das Engadin.', greenScore: 82, upcoming: true },
    { name: 'Arosa Lenzerheide Bikefest', date: '15.–17. Mai 2026', location: 'Arosa Lenzerheide', description: 'Dreitägiges Mountainbike-Festival mit Rennen, Workshops und Ausstellungen.', greenScore: 76, upcoming: true },
    { name: 'LAAX Open', date: '20.–24. Januar 2026', location: 'LAAX', description: 'Internationaler Snowboard- und Freeski-Wettbewerb mit Weltcup-Status.', greenScore: 88, upcoming: true },
    { name: 'Davos Nordic', date: '12.–14. Dezember 2025', location: 'Davos', description: 'FIS Langlauf-Weltcup-Rennen in der Bündner Alpenstadt.', greenScore: 79, upcoming: false },
    { name: 'Tour de Ski Lenzerheide', date: '28.–29. Dezember 2025', location: 'Lenzerheide', description: 'Etappen der prestigeträchtigen Tour de Ski im Herzen Graubündens.', greenScore: 71, upcoming: false },
    { name: 'Glacier 3000 Run', date: '5. September 2025', location: 'Les Diablerets – Glacier 3000', description: 'Berglauf zum ewigen Eis – eine einzigartige Herausforderung in alpiner Kulisse.', greenScore: 85, upcoming: false },
    { name: 'Swiss Epic', date: '18.–21. August 2025', location: 'Graubünden', description: 'Viertägiges Mountainbike-Etappenrennen durch die spektakulärsten Landschaften Graubündens.', greenScore: 73, upcoming: false },
  ],
  en: [
    { name: 'Engadin Ski Marathon', date: 'March 8, 2026', location: 'Maloja – S-chanf', description: 'The largest cross-country skiing race in Switzerland, covering 42 km through the Engadin valley.', greenScore: 82, upcoming: true },
    { name: 'Arosa Lenzerheide Bikefest', date: 'May 15–17, 2026', location: 'Arosa Lenzerheide', description: 'Three-day mountain bike festival with races, workshops, and exhibitions.', greenScore: 76, upcoming: true },
    { name: 'LAAX Open', date: 'January 20–24, 2026', location: 'LAAX', description: 'International snowboard and freeski competition with World Cup status.', greenScore: 88, upcoming: true },
    { name: 'Davos Nordic', date: 'December 12–14, 2025', location: 'Davos', description: 'FIS Cross-Country World Cup races in the alpine town of Davos.', greenScore: 79, upcoming: false },
    { name: 'Tour de Ski Lenzerheide', date: 'December 28–29, 2025', location: 'Lenzerheide', description: 'Stages of the prestigious Tour de Ski in the heart of Graubünden.', greenScore: 71, upcoming: false },
    { name: 'Glacier 3000 Run', date: 'September 5, 2025', location: 'Les Diablerets – Glacier 3000', description: 'Mountain run to eternal ice – a unique challenge in an alpine setting.', greenScore: 85, upcoming: false },
    { name: 'Swiss Epic', date: 'August 18–21, 2025', location: 'Graubünden', description: 'Four-day mountain bike stage race through the most spectacular landscapes of Graubünden.', greenScore: 73, upcoming: false },
  ],
};

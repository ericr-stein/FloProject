# Projektkontext

## Ausgangslage und Zielsetzung

Das Projekt **GreenSport Graubünden** wurde im Rahmen des Moduls WINF1 an der Fachhochschule Graubünden initiiert, um eine zweisprachige Webplattform (Deutsch/Englisch) zur Erfassung, zum Vergleich und zur visuellen Aufbereitung des ökologischen Fussabdrucks alpiner Sportveranstaltungen im Kanton Graubünden zu entwickeln. Wie in Deliverable A (Themenbeschreibung) dargelegt, besteht ein fundamentales Informationsdefizit hinsichtlich der Nachhaltigkeitsdaten alpiner Sportveranstaltungen. GreenSport Graubünden schliesst diese Lücke, indem es CO₂-Bilanzen, Energieverbrauchsdaten und Mobilitätskennzahlen in einem interaktiven Dashboard zusammenführt.

Die in Deliverable B (Spezifikation) definierten Anforderungen bilden die Grundlage für das vorliegende Wireframe- und Layout-Konzept. Die Plattform umfasst sieben Hauptseiten (Home, Über uns, News, Events, Galerie, Daten & Statistiken, Kontakt) sowie zwei Rechtsseiten (Impressum, Datenschutzerklärung). Die technische Umsetzung erfolgt mit Astro 5.x, Tailwind CSS 4.x und einer Docker-basierten Bereitstellung über nginx:alpine.

## Zielgruppen und Nutzungskontext

Die Wireframes berücksichtigen drei primäre Zielgruppen: (1) Event-Organisatoren und Nachhaltigkeitsverantwortliche, die detaillierte Vergleichsdaten benötigen, (2) sportbegeisterte Personen und Athletinnen/Athleten, die sich über die Umweltbilanz ihrer Veranstaltungen informieren möchten, sowie (3) Medienschaffende und Forschende, die aggregierte Daten für Berichterstattung und Analyse suchen.

## Designgrundlagen

Das visuelle Erscheinungsbild folgt dem in der Brandspezifikation definierten Farbschema:

- **Alpine Green (#2D6A4F):** Primärfarbe für Navigation, Buttons und Akzente
- **Mountain Blue (#264653):** Sekundärfarbe für Überschriften und Footer
- **Alpine Gold (#E9C46A):** Akzentfarbe für Hervorhebungen und Call-to-Action-Elemente

Die Gestaltung folgt einem Mobile-first-Ansatz mit drei definierten Breakpoints: 375px (Smartphone), 768px (Tablet), 1280px (Desktop). Die nachfolgenden Wireframes bilden primär die Desktop-Ansicht (1280px) ab; für jede Seite werden zusätzlich die wesentlichen Unterschiede der mobilen Darstellung dokumentiert.

\newpage

# Wireframes & Layout-Konzept

## Gemeinsame Komponenten

Bevor die einzelnen Seitenlayouts spezifiziert werden, dokumentiert dieser Abschnitt die seitenübergreifend verwendeten Komponenten. Diese gewährleisten visuelle und funktionale Konsistenz über die gesamte Plattform hinweg.

### Header — Desktop-Variante

```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│  ┌──────────┐                                                   │
│  │ GREENSPORT│   Home   Über uns   News   Events               │
│  │ GRAUBÜNDEN│                                                  │
│  │ [Logo]    │   Galerie   Daten   Kontakt        [DE | EN]    │
│  └──────────┘                                                   │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

**Annotationen — Header Desktop:**

- **Positionierung:** Sticky-Header, bleibt beim Scrollen am oberen Bildschirmrand fixiert. Hintergrundfarbe Mountain Blue (#264653) mit weisser Schrift.
- **Logo:** Links positioniert, Klick führt stets zur Startseite. Grösse 48×48px mit Wortmarke.
- **Navigation:** Horizontale Hauptnavigation, zentriert. Schriftgrösse 16px, Schriftart DejaVu Sans. Aktiver Menüpunkt wird durch eine Unterstreichung in Alpine Gold (#E9C46A) hervorgehoben.
- **Sprachumschalter:** Rechts positioniert als Toggle-Element «DE | EN». Aktive Sprache ist fett hervorgehoben.
- **Informationshierarchie:** Logo (Markenidentifikation) → Navigation (Orientierung) → Sprachumschalter (sekundäre Funktion).
- **Responsives Verhalten:** Bei Viewport-Breiten unter 768px kollabiert die Navigation in ein Hamburger-Menü (siehe Mobile-Variante).

### Header — Mobile-Variante

```
┌───────────────────────────────┐
│  [Logo]            [☰] [DE]  │
└───────────────────────────────┘

        ↓ (nach Tap auf ☰)

┌───────────────────────────────┐
│  [Logo]            [✕] [DE]  │
├───────────────────────────────┤
│                               │
│    Home                       │
│    ─────────────────────────  │
│    Über uns                   │
│    ─────────────────────────  │
│    News                       │
│    ─────────────────────────  │
│    Events                     │
│    ─────────────────────────  │
│    Galerie                    │
│    ─────────────────────────  │
│    Daten & Statistiken        │
│    ─────────────────────────  │
│    Kontakt                    │
│    ─────────────────────────  │
│                               │
│    [DE | EN]                  │
│                               │
└───────────────────────────────┘
```

**Annotationen — Header Mobile:**

- **Hamburger-Menü:** Drei horizontale Linien (☰), 44×44px Touch-Target gemäss WCAG-Richtlinien. Öffnet ein Full-Screen-Overlay mit vertikaler Navigation.
- **Animation:** Slide-in von rechts, 300ms ease-in-out Transition. Hintergrund erhält einen semi-transparenten Overlay (rgba(0,0,0,0.5)).
- **Sprachumschalter:** Wird im mobilen Menü am unteren Ende angezeigt, zusätzlich als kompakte Variante neben dem Hamburger-Icon.
- **Schliessen:** Tap auf ✕-Symbol oder ausserhalb des Menüs schliesst die Navigation.

### Footer — Desktop-Variante

```
┌─────────────────────────────────────────────────────────────────┐
│                         FOOTER                                  │
│  ┌───────────────┐  ┌───────────────┐  ┌───────────────┐      │
│  │  GREENSPORT   │  │  Navigation   │  │  Kontakt      │      │
│  │  GRAUBÜNDEN   │  │               │  │               │      │
│  │               │  │  Home         │  │  E-Mail       │      │
│  │  Nachhaltiger │  │  Über uns     │  │  Telefon      │      │
│  │  Alpensport   │  │  News         │  │  Adresse      │      │
│  │  in Graubünden│  │  Events       │  │               │      │
│  │               │  │  Galerie      │  │  Social Media │      │
│  │               │  │  Daten        │  │  [f] [t] [i]  │      │
│  │               │  │  Kontakt      │  │               │      │
│  └───────────────┘  └───────────────┘  └───────────────┘      │
│                                                                 │
│─────────────────────────────────────────────────────────────────│
│  © 2026 GreenSport Graubünden  │  Impressum  │  Datenschutz   │
└─────────────────────────────────────────────────────────────────┘
```

**Annotationen — Footer Desktop:**

- **Hintergrund:** Mountain Blue (#264653), weisse Schrift. Visuell abgegrenzt vom Seiteninhalt.
- **Drei-Spalten-Layout:** (1) Markenidentität mit Kurztext, (2) Seitennavigation als Linkliste, (3) Kontaktdaten und Social-Media-Icons.
- **Rechtliche Links:** Unterhalb der Trennlinie, zentriert. Impressum und Datenschutz als separate Links.
- **Social-Media-Icons:** Facebook, Twitter/X, Instagram — jeweils 32×32px mit Hover-Effekt (Farbe wechselt zu Alpine Gold).
- **Responsives Verhalten:** Unter 768px wechselt das Layout zu einer einspaltigen vertikalen Anordnung.

### Footer — Mobile-Variante

```
┌───────────────────────────────┐
│                               │
│      GREENSPORT GRAUBÜNDEN    │
│      Nachhaltiger Alpensport  │
│                               │
│      ─────────────────────    │
│                               │
│      Home · Über uns · News   │
│      Events · Galerie · Daten │
│      Kontakt                  │
│                               │
│      ─────────────────────    │
│                               │
│      info@greensport-gr.ch    │
│      [f]  [t]  [i]           │
│                               │
│      ─────────────────────    │
│      © 2026 GreenSport GR    │
│      Impressum | Datenschutz  │
│                               │
└───────────────────────────────┘
```

### Sprachumschalter-Komponente

```
Desktop:                    Mobile:
┌────────────┐             ┌──────┐
│  DE  |  EN │             │  DE  │
│  ──     ·  │             └──────┘
└────────────┘
```

**Annotationen — Sprachumschalter:**

- **Funktionsweise:** Toggle zwischen Deutsch und Englisch. Aktive Sprache ist unterstrichen und fett.
- **Persistenz:** Die gewählte Sprache wird im `localStorage` des Browsers gespeichert und bei erneutem Besuch automatisch wiederhergestellt.
- **URL-Strategie:** Sprachpräfix in der URL (`/de/...` bzw. `/en/...`). Beim Umschalten bleibt die aktuelle Seite erhalten, nur das Sprachpräfix ändert sich.
- **Kein Seitenneuladen:** Der Sprachwechsel erfolgt clientseitig ohne vollständigen Page Reload, sofern die Zielseite bereits vorgeladen ist.

### Kartenkomponenten

**Event-Karte:**

```
┌─────────────────────────┐
│  ┌───────────────────┐  │
│  │                   │  │
│  │   [Event-Bild]    │  │
│  │                   │  │
│  └───────────────────┘  │
│                         │
│  📅 15. März 2026       │
│  📍 Davos               │
│                         │
│  Engadin Skimarathon    │
│                         │
│  Kurzbeschreibung des   │
│  Events in max. 2       │
│  Zeilen...              │
│                         │
│  Green Score: ██████ 78 │
│                         │
│  [Details ansehen →]    │
│                         │
└─────────────────────────┘
```

**Artikel-Karte (News):**

```
┌─────────────────────────┐
│  ┌───────────────────┐  │
│  │   [Artikel-Bild]  │  │
│  └───────────────────┘  │
│                         │
│  [Kategorie-Tag]        │
│  12. Februar 2026       │
│                         │
│  Artikelüberschrift     │
│  in maximal zwei Zeilen │
│                         │
│  Kurzer Auszug aus dem  │
│  Artikel, abgeschnitten │
│  nach 120 Zeichen...    │
│                         │
│  [Weiterlesen →]        │
│                         │
└─────────────────────────┘
```

**Statistik-Karte:**

```
┌─────────────────────────┐
│                         │
│    ┌─────────────┐      │
│    │  [Icon]     │      │
│    │   ↓CO₂     │      │
│    └─────────────┘      │
│                         │
│       1'250 t           │
│    CO₂ eingespart       │
│                         │
│  Gegenüber dem Vorjahr  │
│  konnten die Events     │
│  15 % CO₂ reduzieren.  │
│                         │
└─────────────────────────┘
```

**Annotationen — Kartenkomponenten:**

- **Einheitliche Gestaltung:** Alle Karten verwenden abgerundete Ecken (border-radius: 12px), einen subtilen Schatten (box-shadow: 0 2px 8px rgba(0,0,0,0.1)) und einen weissen Hintergrund.
- **Hover-Effekt:** Beim Überfahren mit der Maus hebt sich die Karte leicht an (transform: translateY(-4px)) und der Schatten verstärkt sich.
- **Bildverhältnis:** Event- und Artikel-Bilder verwenden einheitlich das Seitenverhältnis 16:9 mit `object-fit: cover`.
- **Green Score Visualisierung:** Horizontaler Fortschrittsbalken in Alpine Green, Wert rechts als Zahl.
- **Responsives Verhalten:** Karten füllen auf mobilen Geräten die volle Breite aus; auf Desktop werden sie in 2er- oder 3er-Raster angeordnet.

\newpage

## Seiten-Wireframes

### Home (Startseite)

Die Startseite bildet den zentralen Einstiegspunkt der Plattform und muss die drei Kernbotschaften — Nachhaltigkeit, Alpensport und Daten — unmittelbar kommunizieren.

**Desktop-Wireframe (1280px):**

```
┌─────────────────────────────────────────────────────────────────┐
│  [Logo]     Home  Über uns  News  Events  Galerie  Daten  Kontakt  [DE|EN] │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│                                                                 │
│              ┌─────────────────────────────────┐                │
│              │                                 │                │
│              │       HERO-BILD / VIDEO         │                │
│              │    (Alpenpanorama mit Event)     │                │
│              │                                 │                │
│              │   "Nachhaltiger Alpensport       │                │
│              │    in Graubünden"                │                │
│              │                                 │                │
│              │   Untertitel: Transparenz für    │                │
│              │   den ökologischen Fussabdruck   │                │
│              │   alpiner Sportveranstaltungen   │                │
│              │                                 │                │
│              │   [Daten entdecken]  [Events →] │                │
│              │                                 │                │
│              └─────────────────────────────────┘                │
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│              SCHLÜSSELZAHLEN (Statistik-Leiste)                 │
│                                                                 │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐         │
│  │   30+        │  │   1'250 t    │  │   78/100     │         │
│  │   Events     │  │   CO₂        │  │   Ø Green    │         │
│  │   erfasst    │  │   berechnet  │  │   Score      │         │
│  └──────────────┘  └──────────────┘  └──────────────┘         │
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│              NÄCHSTE VERANSTALTUNGEN                             │
│              "Kommende Events in Graubünden"                    │
│                                                                 │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐         │
│  │ [Bild]       │  │ [Bild]       │  │ [Bild]       │         │
│  │              │  │              │  │              │         │
│  │ 📅 15.03.26  │  │ 📅 22.03.26  │  │ 📅 05.04.26  │         │
│  │ 📍 Davos     │  │ 📍 Laax      │  │ 📍 St. Moritz│         │
│  │              │  │              │  │              │         │
│  │ Engadin      │  │ LAAX Open    │  │ Berglauf     │         │
│  │ Skimarathon  │  │              │  │ Engadin      │         │
│  │              │  │              │  │              │         │
│  │ Score: ██ 78 │  │ Score: ██ 65 │  │ Score: ██ 85 │         │
│  │              │  │              │  │              │         │
│  │ [Details →]  │  │ [Details →]  │  │ [Details →]  │         │
│  └──────────────┘  └──────────────┘  └──────────────┘         │
│                                                                 │
│              [Alle Events anzeigen →]                           │
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│              GREEN SCORE VORSCHAU                                │
│              "Wie nachhaltig sind unsere Events?"               │
│                                                                 │
│  ┌────────────────────────────────────────────────┐            │
│  │                                                │            │
│  │   ┌──────┐                                     │            │
│  │   │Radar │   Engadin Skimarathon    78/100     │            │
│  │   │Chart │   LAAX Open              65/100     │            │
│  │   │      │   Swissalpine Davos      85/100     │            │
│  │   │      │   Arosa IceCross         72/100     │            │
│  │   └──────┘                                     │            │
│  │                                                │            │
│  │   [Alle Daten & Statistiken →]                 │            │
│  │                                                │            │
│  └────────────────────────────────────────────────┘            │
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│              AKTUELLES AUS DEM BLOG                             │
│                                                                 │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐         │
│  │ [Bild]       │  │ [Bild]       │  │ [Bild]       │         │
│  │ [Kategorie]  │  │ [Kategorie]  │  │ [Kategorie]  │         │
│  │ Artikeltitel │  │ Artikeltitel │  │ Artikeltitel │         │
│  │ Auszug...    │  │ Auszug...    │  │ Auszug...    │         │
│  │ [Lesen →]    │  │ [Lesen →]    │  │ [Lesen →]    │         │
│  └──────────────┘  └──────────────┘  └──────────────┘         │
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│              CALL TO ACTION                                     │
│                                                                 │
│  ┌────────────────────────────────────────────────┐            │
│  │                                                │            │
│  │  Hintergrund: Alpine Green (#2D6A4F)           │            │
│  │                                                │            │
│  │  "Engagieren Sie sich für nachhaltigen         │            │
│  │   Alpensport in Graubünden"                    │            │
│  │                                                │            │
│  │  [Kontakt aufnehmen]    [Daten erkunden]       │            │
│  │                                                │            │
│  └────────────────────────────────────────────────┘            │
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│  FOOTER (siehe gemeinsame Komponenten)                         │
└─────────────────────────────────────────────────────────────────┘
```

**Mobile-Wireframe (375px):**

```
┌───────────────────────────────┐
│  [Logo]            [☰] [DE]  │
├───────────────────────────────┤
│                               │
│  ┌───────────────────────┐   │
│  │                       │   │
│  │    HERO-BILD/VIDEO    │   │
│  │                       │   │
│  │  "Nachhaltiger        │   │
│  │   Alpensport"         │   │
│  │                       │   │
│  │  [Daten entdecken]    │   │
│  │                       │   │
│  └───────────────────────┘   │
│                               │
│  ┌───────┐ ┌───────┐        │
│  │ 30+   │ │1'250t │        │
│  │Events │ │ CO₂   │        │
│  └───────┘ └───────┘        │
│  ┌────────────────┐         │
│  │  78/100 Ø Score│         │
│  └────────────────┘         │
│                               │
│  NÄCHSTE EVENTS              │
│                               │
│  ┌───────────────────────┐   │
│  │ [Event-Karte 1]       │   │
│  └───────────────────────┘   │
│  ┌───────────────────────┐   │
│  │ [Event-Karte 2]       │   │
│  └───────────────────────┘   │
│                               │
│  [Alle Events →]             │
│                               │
│  GREEN SCORE VORSCHAU        │
│  ┌───────────────────────┐   │
│  │ [Vereinfachtes Chart] │   │
│  │ Rangliste als Liste   │   │
│  └───────────────────────┘   │
│                               │
│  AKTUELLES                   │
│  ┌───────────────────────┐   │
│  │ [Artikel-Karte 1]     │   │
│  └───────────────────────┘   │
│  ┌───────────────────────┐   │
│  │ [Artikel-Karte 2]     │   │
│  └───────────────────────┘   │
│                               │
│  CTA-BANNER                  │
│  ┌───────────────────────┐   │
│  │ [Kontakt aufnehmen]   │   │
│  └───────────────────────┘   │
│                               │
│  FOOTER                      │
└───────────────────────────────┘
```

**Detailspezifikation — Home:**

- **Hero-Sektion:** Vollbreites Hintergrundbild (oder Looping-Video) mit Textoverlay. Gradient-Overlay von unten (rgba(38,70,83,0.7)) für Lesbarkeit. Höhe Desktop: 70vh, Mobile: 50vh. Zwei CTA-Buttons nebeneinander: Primär (Alpine Gold, dunkler Text) und Sekundär (transparenter Rahmen, weisse Schrift).
- **Schlüsselzahlen:** Drei Statistik-Karten mit animiertem Zähler (CountUp.js), der beim Scrollen in den Viewport aktiviert wird. Hintergrund: helles Grau (#F8F9FA).
- **Events-Teaser:** Maximal drei Event-Karten im horizontalen Raster. Auf Mobile: vertikale Anordnung, nur zwei Karten sichtbar. Sortierung nach Datum (nächstliegend zuerst).
- **Green Score Vorschau:** Radar-Chart (Chart.js) mit den Top-4-Events. Rechts daneben eine Rangliste. Auf Mobile: Chart über der Liste gestapelt.
- **Blog-Teaser:** Drei neueste Artikel als Karten. Horizontales Scrollen auf Mobile mit Scroll-Snap.
- **CTA-Banner:** Alpine Green Hintergrund, zentrierter Text, zwei Buttons. Padding: 80px vertikal.

\newpage

### Über uns / About

```
┌─────────────────────────────────────────────────────────────────┐
│  HEADER (siehe gemeinsame Komponenten)                         │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│              SEITENHEADER                                       │
│  ┌────────────────────────────────────────────────┐            │
│  │  Hintergrund: Mountain Blue mit Bergsilhouette │            │
│  │                                                │            │
│  │         "Über GreenSport Graubünden"           │            │
│  │         Breadcrumb: Home > Über uns             │            │
│  │                                                │            │
│  └────────────────────────────────────────────────┘            │
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│              MISSION & VISION                                   │
│                                                                 │
│  ┌──────────────────────┐  ┌──────────────────────┐           │
│  │                      │  │                      │           │
│  │  Unsere Mission      │  │                      │           │
│  │                      │  │  [Bild: Team oder    │           │
│  │  Fliesstext zur      │  │   Alpenpanorama]     │           │
│  │  Mission und zum     │  │                      │           │
│  │  Projektanlass.      │  │                      │           │
│  │  Transparenz,        │  │                      │           │
│  │  Vergleichbarkeit,   │  │                      │           │
│  │  Nachhaltigkeit.     │  │                      │           │
│  │                      │  │                      │           │
│  └──────────────────────┘  └──────────────────────┘           │
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│              UNSERE GESCHICHTE (Timeline)                       │
│                                                                 │
│      2024                2025                2026               │
│        ●───────────────────●───────────────────●               │
│        │                   │                   │               │
│   ┌─────────┐        ┌─────────┐        ┌─────────┐          │
│   │ Idee &  │        │ Erste   │        │ Platt-  │          │
│   │ Konzept │        │ Daten-  │        │ form-   │          │
│   │         │        │ analyse │        │ Launch  │          │
│   └─────────┘        └─────────┘        └─────────┘          │
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│              UNSERE WERTE                                       │
│                                                                 │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐         │
│  │    [Icon]    │  │    [Icon]    │  │    [Icon]    │         │
│  │              │  │              │  │              │         │
│  │ Transparenz  │  │ Wissenschaft-│  │ Regionale    │         │
│  │              │  │ lichkeit     │  │ Verankerung  │         │
│  │ Offene Daten │  │ Fundierte    │  │ Fokus auf    │         │
│  │ und nach-    │  │ Methodik     │  │ Graubünden   │         │
│  │ vollziehbare │  │ und repro-   │  │ und den      │         │
│  │ Methoden     │  │ duzierbare   │  │ Alpenraum    │         │
│  │              │  │ Ergebnisse   │  │              │         │
│  └──────────────┘  └──────────────┘  └──────────────┘         │
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│              PARTNER & QUELLEN                                  │
│                                                                 │
│  ┌──────┐  ┌──────┐  ┌──────┐  ┌──────┐  ┌──────┐           │
│  │Logo 1│  │Logo 2│  │Logo 3│  │Logo 4│  │Logo 5│           │
│  │FHGR  │  │BASPO │  │mycli-│  │Swiss │  │Grau- │           │
│  │      │  │      │  │mate  │  │Olymp.│  │bünden│           │
│  └──────┘  └──────┘  └──────┘  └──────┘  └──────┘           │
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│  FOOTER                                                        │
└─────────────────────────────────────────────────────────────────┘
```

**Mobile-Wireframe — Über uns:**

```
┌───────────────────────────────┐
│  [Logo]            [☰] [DE]  │
├───────────────────────────────┤
│  SEITENHEADER                │
│  "Über GreenSport Graubünden"│
│  Home > Über uns              │
├───────────────────────────────┤
│                               │
│  [Bild]                      │
│                               │
│  Unsere Mission              │
│  Fliesstext zur Mission...   │
│                               │
├───────────────────────────────┤
│                               │
│  UNSERE GESCHICHTE           │
│                               │
│  ● 2024 — Idee & Konzept    │
│  │                           │
│  ● 2025 — Erste Daten       │
│  │                           │
│  ● 2026 — Plattform-Launch  │
│                               │
├───────────────────────────────┤
│                               │
│  UNSERE WERTE                │
│                               │
│  ┌───────────────────────┐   │
│  │ [Icon] Transparenz    │   │
│  │ Offene Daten und...   │   │
│  └───────────────────────┘   │
│  ┌───────────────────────┐   │
│  │ [Icon] Wissenschaft   │   │
│  │ Fundierte Methodik... │   │
│  └───────────────────────┘   │
│  ┌───────────────────────┐   │
│  │ [Icon] Regional       │   │
│  │ Fokus auf Graubünden  │   │
│  └───────────────────────┘   │
│                               │
│  PARTNER (horizontal scroll) │
│  [Logo][Logo][Logo]→         │
│                               │
│  FOOTER                      │
└───────────────────────────────┘
```

**Detailspezifikation — Über uns:**

- **Seitenheader:** Wiederverwendbare Komponente für alle Unterseiten. Hintergrund Mountain Blue mit dezenter Bergsilhouette als SVG-Grafik. Höhe: 200px Desktop, 150px Mobile. Breadcrumb-Navigation unterhalb des Seitentitels.
- **Mission-Sektion:** Zwei-Spalten-Layout (60/40). Text links, Bild rechts. Auf Mobile: Bild über dem Text, volle Breite.
- **Timeline:** Horizontale Darstellung auf Desktop mit Verbindungslinien. Auf Mobile: vertikale Timeline links mit Punkten und Verbindungsstrichen.
- **Werte-Karten:** Drei Karten mit Icons (SVG), Titel und Beschreibungstext. Icons in Alpine Green. Auf Mobile: vertikale Stapelung.
- **Partner-Logos:** Horizontale Reihe mit Graustufenlogos, die bei Hover Farbe erhalten. Auf Mobile: horizontales Scrollen.

\newpage

### News / Blog

**Desktop-Wireframe — Übersichtsseite:**

```
┌─────────────────────────────────────────────────────────────────┐
│  HEADER                                                        │
├─────────────────────────────────────────────────────────────────┤
│  SEITENHEADER: "News & Blog"  /  Home > News                  │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  FEATURED ARTICLE                                               │
│  ┌────────────────────────────────────────────────┐            │
│  │ ┌──────────────────┐  ┌──────────────────────┐ │            │
│  │ │                  │  │                      │ │            │
│  │ │  [Grosses Bild]  │  │ [Kategorie-Tag]     │ │            │
│  │ │                  │  │                      │ │            │
│  │ │                  │  │ Hauptartikel-Titel   │ │            │
│  │ │                  │  │ in grosser Schrift   │ │            │
│  │ │                  │  │                      │ │            │
│  │ │                  │  │ Auszug aus dem       │ │            │
│  │ │                  │  │ Artikel mit mehr     │ │            │
│  │ │                  │  │ Text als bei einer   │ │            │
│  │ │                  │  │ normalen Karte...    │ │            │
│  │ │                  │  │                      │ │            │
│  │ │                  │  │ [Weiterlesen →]      │ │            │
│  │ └──────────────────┘  └──────────────────────┘ │            │
│  └────────────────────────────────────────────────┘            │
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  FILTER & SUCHE                                                 │
│  ┌────────────────────────────────────────────────┐            │
│  │  [Alle] [Nachhaltigkeit] [Events] [Daten]     │            │
│  │                                                │            │
│  │                           [🔍 Suche...]        │            │
│  └────────────────────────────────────────────────┘            │
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  ARTIKEL-RASTER                                                 │
│                                                                 │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐         │
│  │ [Bild]       │  │ [Bild]       │  │ [Bild]       │         │
│  │ [Kategorie]  │  │ [Kategorie]  │  │ [Kategorie]  │         │
│  │ Titel        │  │ Titel        │  │ Titel        │         │
│  │ Auszug...    │  │ Auszug...    │  │ Auszug...    │         │
│  │ [Lesen →]    │  │ [Lesen →]    │  │ [Lesen →]    │         │
│  └──────────────┘  └──────────────┘  └──────────────┘         │
│                                                                 │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐         │
│  │ [Bild]       │  │ [Bild]       │  │ [Bild]       │         │
│  │ [Kategorie]  │  │ [Kategorie]  │  │ [Kategorie]  │         │
│  │ Titel        │  │ Titel        │  │ Titel        │         │
│  │ Auszug...    │  │ Auszug...    │  │ Auszug...    │         │
│  │ [Lesen →]    │  │ [Lesen →]    │  │ [Lesen →]    │         │
│  └──────────────┘  └──────────────┘  └──────────────┘         │
│                                                                 │
│  ┌────────────────────────────────────────────────┐            │
│  │    [← Zurück]    Seite 1 von 3    [Weiter →]  │            │
│  └────────────────────────────────────────────────┘            │
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│  FOOTER                                                        │
└─────────────────────────────────────────────────────────────────┘
```

**Desktop-Wireframe — Artikeldetail:**

```
┌─────────────────────────────────────────────────────────────────┐
│  HEADER                                                        │
├─────────────────────────────────────────────────────────────────┤
│  Breadcrumb: Home > News > Artikeltitel                        │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  ┌────────────────────────────────────────────────┐            │
│  │                                                │            │
│  │          [ARTIKEL-HEADERBILD]                   │            │
│  │                                                │            │
│  └────────────────────────────────────────────────┘            │
│                                                                 │
│  [Kategorie]    12. Februar 2026    Lesezeit: 5 Min.           │
│                                                                 │
│  Artikelüberschrift in grosser Schrift                          │
│  ═══════════════════════════════════                            │
│                                                                 │
│  ┌──────────────────────────────────────┐  ┌──────────┐       │
│  │                                      │  │ SIDEBAR  │       │
│  │  Artikeltext in voller Länge,        │  │          │       │
│  │  formatiert mit Zwischenüberschriften,│  │ Inhalts- │       │
│  │  Absätzen, Zitaten und Bildern.      │  │ verzeich-│       │
│  │                                      │  │ nis      │       │
│  │  ## Zwischenüberschrift              │  │          │       │
│  │                                      │  │ 1. Abschn│       │
│  │  Weiterer Text mit Daten und         │  │ 2. Abschn│       │
│  │  Fakten zur Nachhaltigkeit.          │  │ 3. Abschn│       │
│  │                                      │  │          │       │
│  │  > Zitat oder Hervorhebung           │  │──────────│       │
│  │                                      │  │          │       │
│  │  ## Fazit                            │  │ TEILEN   │       │
│  │                                      │  │ [f][t][m]│       │
│  │  Abschliessender Text.               │  │          │       │
│  │                                      │  │          │       │
│  └──────────────────────────────────────┘  └──────────┘       │
│                                                                 │
│  VERWANDTE ARTIKEL                                              │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐         │
│  │ [Artikel]    │  │ [Artikel]    │  │ [Artikel]    │         │
│  └──────────────┘  └──────────────┘  └──────────────┘         │
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│  FOOTER                                                        │
└─────────────────────────────────────────────────────────────────┘
```

**Mobile-Wireframe — News:**

```
┌───────────────────────────────┐
│  [Logo]            [☰] [DE]  │
├───────────────────────────────┤
│  "News & Blog"               │
├───────────────────────────────┤
│                               │
│  FEATURED ARTICLE            │
│  ┌───────────────────────┐   │
│  │ [Bild]                │   │
│  │ [Kategorie]           │   │
│  │ Hauptartikel-Titel    │   │
│  │ Auszug...             │   │
│  │ [Weiterlesen →]       │   │
│  └───────────────────────┘   │
│                               │
│  FILTER (horizontal scroll)  │
│  [Alle][Nachh.][Events][Dat] │
│                               │
│  ┌───────────────────────┐   │
│  │ [Artikel-Karte]       │   │
│  └───────────────────────┘   │
│  ┌───────────────────────┐   │
│  │ [Artikel-Karte]       │   │
│  └───────────────────────┘   │
│  ┌───────────────────────┐   │
│  │ [Artikel-Karte]       │   │
│  └───────────────────────┘   │
│                               │
│  [Mehr laden ↓]              │
│                               │
│  FOOTER                      │
└───────────────────────────────┘
```

**Detailspezifikation — News:**

- **Featured Article:** Prominente Darstellung des neuesten oder redaktionell ausgewählten Artikels. Zwei-Spalten-Layout auf Desktop (Bild links 50%, Text rechts 50%). Auf Mobile: Bild oben, Text darunter.
- **Kategorie-Filter:** Horizontale Chip-Leiste mit Kategorien. Aktive Kategorie erhält Alpine Green Hintergrund mit weisser Schrift. Filter werden als URL-Parameter persistiert (`?kategorie=nachhaltigkeit`).
- **Artikel-Raster:** 3-Spalten-Grid auf Desktop, 2 Spalten auf Tablet, 1 Spalte auf Mobile. Pagination mit 6 Artikeln pro Seite. Auf Mobile: «Mehr laden»-Button statt Pagination (Infinite Scroll Pattern).
- **Artikeldetail:** Maximale Textbreite 720px für optimale Lesbarkeit. Sticky Sidebar (Inhaltsverzeichnis) auf Desktop, entfällt auf Mobile. Share-Buttons für soziale Medien.

\newpage

### Events

**Desktop-Wireframe:**

```
┌─────────────────────────────────────────────────────────────────┐
│  HEADER                                                        │
├─────────────────────────────────────────────────────────────────┤
│  SEITENHEADER: "Veranstaltungen"  /  Home > Events             │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  TAB-NAVIGATION                                                 │
│  ┌────────────────────────────────────────────────┐            │
│  │  [● Kommende Events]     [○ Vergangene Events] │            │
│  └────────────────────────────────────────────────┘            │
│                                                                 │
│  FILTER-LEISTE                                                  │
│  ┌────────────────────────────────────────────────┐            │
│  │  Sportart: [Alle ▼]   Region: [Alle ▼]        │            │
│  │  Sortierung: [Datum ▼]                         │            │
│  └────────────────────────────────────────────────┘            │
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  EVENT-LISTE                                                    │
│                                                                 │
│  ┌────────────────────────────────────────────────┐            │
│  │ ┌──────────┐                                   │            │
│  │ │          │  Engadin Skimarathon               │            │
│  │ │ [Bild]   │  📅 15. März 2026  📍 Davos        │            │
│  │ │          │  Sportart: Langlauf                │            │
│  │ │          │  Teilnehmende: ~14'000             │            │
│  │ │          │  Green Score: ████████░░ 78/100    │            │
│  │ └──────────┘  [Details ansehen →]               │            │
│  └────────────────────────────────────────────────┘            │
│                                                                 │
│  ┌────────────────────────────────────────────────┐            │
│  │ ┌──────────┐                                   │            │
│  │ │          │  LAAX Open                         │            │
│  │ │ [Bild]   │  📅 22. März 2026  📍 Laax         │            │
│  │ │          │  Sportart: Snowboard/Freeski       │            │
│  │ │          │  Teilnehmende: ~5'000              │            │
│  │ │          │  Green Score: ██████░░░░ 65/100    │            │
│  │ └──────────┘  [Details ansehen →]               │            │
│  └────────────────────────────────────────────────┘            │
│                                                                 │
│  ┌────────────────────────────────────────────────┐            │
│  │ ┌──────────┐                                   │            │
│  │ │          │  Swissalpine Davos                  │            │
│  │ │ [Bild]   │  📅 05. April 2026  📍 Davos       │            │
│  │ │          │  Sportart: Berglauf                │            │
│  │ │          │  Teilnehmende: ~3'000              │            │
│  │ │          │  Green Score: ██████████ 85/100    │            │
│  │ └──────────┘  [Details ansehen →]               │            │
│  └────────────────────────────────────────────────┘            │
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│  FOOTER                                                        │
└─────────────────────────────────────────────────────────────────┘
```

**Desktop-Wireframe — Event-Detailansicht:**

```
┌─────────────────────────────────────────────────────────────────┐
│  HEADER                                                        │
├─────────────────────────────────────────────────────────────────┤
│  Breadcrumb: Home > Events > Engadin Skimarathon               │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  ┌────────────────────────────────────────────────┐            │
│  │              [EVENT-HEADERBILD]                 │            │
│  └────────────────────────────────────────────────┘            │
│                                                                 │
│  ┌──────────────────────────────────────┐  ┌──────────┐       │
│  │                                      │  │ INFO-BOX │       │
│  │  Engadin Skimarathon                 │  │          │       │
│  │  ═════════════════                   │  │ 📅 Datum  │       │
│  │                                      │  │ 📍 Ort    │       │
│  │  Beschreibungstext des Events        │  │ 🏃 Sport  │       │
│  │  mit Details zur Veranstaltung,      │  │ 👥 Teiln. │       │
│  │  Geschichte und Bedeutung für        │  │          │       │
│  │  den alpinen Sporttourismus.         │  │ GREEN    │       │
│  │                                      │  │ SCORE    │       │
│  │                                      │  │          │       │
│  │                                      │  │  78/100  │       │
│  │                                      │  │ ████████ │       │
│  │                                      │  │          │       │
│  └──────────────────────────────────────┘  └──────────┘       │
│                                                                 │
│  NACHHALTIGKEITSDATEN                                           │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐         │
│  │  CO₂-Bilanz  │  │  Energie     │  │  Mobilität   │         │
│  │   450 t      │  │  80% erneuer.│  │  45% ÖV      │         │
│  │   [Chart]    │  │  [Chart]     │  │  [Chart]     │         │
│  └──────────────┘  └──────────────┘  └──────────────┘         │
│                                                                 │
│  [← Zurück zur Übersicht]                                      │
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│  FOOTER                                                        │
└─────────────────────────────────────────────────────────────────┘
```

**Mobile-Wireframe — Events:**

```
┌───────────────────────────────┐
│  [Logo]            [☰] [DE]  │
├───────────────────────────────┤
│  "Veranstaltungen"           │
├───────────────────────────────┤
│                               │
│  [● Kommend] [○ Vergangen]   │
│                               │
│  Sportart: [Alle ▼]         │
│  Region:   [Alle ▼]         │
│                               │
│  ┌───────────────────────┐   │
│  │ [Bild]                │   │
│  │ Engadin Skimarathon   │   │
│  │ 📅 15.03.26 📍 Davos   │   │
│  │ Score: ████████ 78    │   │
│  │ [Details →]           │   │
│  └───────────────────────┘   │
│                               │
│  ┌───────────────────────┐   │
│  │ [Bild]                │   │
│  │ LAAX Open             │   │
│  │ 📅 22.03.26 📍 Laax    │   │
│  │ Score: ██████ 65      │   │
│  │ [Details →]           │   │
│  └───────────────────────┘   │
│                               │
│  FOOTER                      │
└───────────────────────────────┘
```

**Detailspezifikation — Events:**

- **Tab-Navigation:** Zwei Tabs (Kommende/Vergangene). Aktiver Tab erhält Unterstreichung in Alpine Gold und fette Schrift. Inaktiver Tab in Grau. URL-Parameter: `?tab=upcoming` / `?tab=past`.
- **Filter:** Dropdown-Selects für Sportart und Region. Sortierung nach Datum (Standard), Green Score oder alphabetisch. Filter werden als URL-Parameter gespeichert und sind dadurch verlinkbar.
- **Event-Karten (Liste):** Horizontales Layout auf Desktop (Bild links 30%, Informationen rechts 70%). Green Score als horizontaler Fortschrittsbalken mit Farbkodierung (Grün ≥70, Gelb 40–69, Rot <40). Auf Mobile: vertikale Stapelung.
- **Event-Detail:** Zweispaltig mit Fliesstext links und fixierter Info-Box rechts. Nachhaltigkeitsdaten als drei kleine Diagramme (Donut-Charts). Auf Mobile: Info-Box über dem Text, Diagramme vertikal gestapelt.

\newpage

### Galerie / Gallery

**Desktop-Wireframe:**

```
┌─────────────────────────────────────────────────────────────────┐
│  HEADER                                                        │
├─────────────────────────────────────────────────────────────────┤
│  SEITENHEADER: "Galerie"  /  Home > Galerie                    │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  KATEGORIE-FILTER                                               │
│  ┌────────────────────────────────────────────────┐            │
│  │  [Alle] [Events] [Natur] [Nachhaltigkeits-    │            │
│  │                           massnahmen] [Behind  │            │
│  │                           the Scenes]          │            │
│  └────────────────────────────────────────────────┘            │
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  FOTO-RASTER (Masonry Layout)                                   │
│                                                                 │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐      │
│  │          │  │          │  │          │  │          │      │
│  │  Foto 1  │  │  Foto 2  │  │          │  │  Foto 4  │      │
│  │          │  │          │  │  Foto 3  │  │          │      │
│  │          │  └──────────┘  │  (hoch)  │  └──────────┘      │
│  └──────────┘  ┌──────────┐  │          │  ┌──────────┐      │
│  ┌──────────┐  │          │  │          │  │          │      │
│  │          │  │  Foto 6  │  └──────────┘  │  Foto 8  │      │
│  │  Foto 5  │  │          │  ┌──────────┐  │          │      │
│  │          │  └──────────┘  │  Foto 7  │  └──────────┘      │
│  └──────────┘               │          │                      │
│                              └──────────┘                      │
│                                                                 │
│  [Mehr Bilder laden ↓]                                         │
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  VIDEO-SEKTION                                                  │
│  "Videos"                                                       │
│                                                                 │
│  ┌──────────────────┐  ┌──────────────────┐                   │
│  │                  │  │                  │                   │
│  │   [▶ Video 1]    │  │   [▶ Video 2]    │                   │
│  │                  │  │                  │                   │
│  │  Titel Video 1   │  │  Titel Video 2   │                   │
│  └──────────────────┘  └──────────────────┘                   │
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│  FOOTER                                                        │
└─────────────────────────────────────────────────────────────────┘
```

**Lightbox-Overlay:**

```
┌─────────────────────────────────────────────────────────────────┐
│  Hintergrund: rgba(0, 0, 0, 0.9)                      [✕]     │
│                                                                 │
│              ┌───────────────────────────────┐                  │
│              │                               │                  │
│   [←]        │       VERGRÖSSERTES BILD      │        [→]      │
│              │                               │                  │
│              │                               │                  │
│              └───────────────────────────────┘                  │
│                                                                 │
│              Bildtitel / Beschreibung                            │
│              Event: Engadin Skimarathon 2025                    │
│              Fotograf: Max Mustermann                           │
│                                                                 │
│              ○ ○ ● ○ ○ ○ ○ ○  (Bild 3 von 8)                  │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

**Mobile-Wireframe — Galerie:**

```
┌───────────────────────────────┐
│  [Logo]            [☰] [DE]  │
├───────────────────────────────┤
│  "Galerie"                   │
├───────────────────────────────┤
│                               │
│  Filter (horizontal scroll)  │
│  [Alle][Events][Natur]→      │
│                               │
│  ┌───────────┐┌───────────┐  │
│  │  Foto 1   ││  Foto 2   │  │
│  └───────────┘└───────────┘  │
│  ┌───────────┐┌───────────┐  │
│  │  Foto 3   ││  Foto 4   │  │
│  └───────────┘└───────────┘  │
│  ┌───────────┐┌───────────┐  │
│  │  Foto 5   ││  Foto 6   │  │
│  └───────────┘└───────────┘  │
│                               │
│  [Mehr laden ↓]              │
│                               │
│  VIDEOS                      │
│  ┌───────────────────────┐   │
│  │ [▶ Video 1]           │   │
│  │ Titel                 │   │
│  └───────────────────────┘   │
│  ┌───────────────────────┐   │
│  │ [▶ Video 2]           │   │
│  │ Titel                 │   │
│  └───────────────────────┘   │
│                               │
│  FOOTER                      │
└───────────────────────────────┘
```

**Detailspezifikation — Galerie:**

- **Masonry Layout:** CSS Grid mit `grid-auto-rows: 200px` und `grid-row: span 2` für Hochformatbilder. Vier Spalten auf Desktop, drei auf Tablet, zwei auf Mobile.
- **Lazy Loading:** Bilder werden mittels `loading="lazy"` und Intersection Observer nachgeladen. Platzhalter zeigen ein unscharfes Vorschaubild (LQIP — Low Quality Image Placeholder).
- **Lightbox:** Fullscreen-Overlay mit Navigation per Pfeiltasten (← →), Swipe-Gesten auf Touch-Geräten und Escape zum Schliessen. Bildunterschrift mit Titel, Event-Zuordnung und Fotograf. Punktindikator zeigt Position innerhalb der Serie.
- **Video-Sektion:** YouTube/Vimeo-Embeds mit Fassade (Thumbnail + Play-Button). Erst bei Klick wird der Player geladen (Performance-Optimierung). Zwei Spalten auf Desktop, eine Spalte auf Mobile.
- **Kategorie-Filter:** Gleiche Chip-Leiste wie bei News. Filtert Fotos und Videos gleichzeitig. Animation: Fotos, die nicht zum Filter passen, werden mit einer Fade-Out-Animation ausgeblendet.

\newpage

### Daten & Statistiken / Data

**Desktop-Wireframe:**

```
┌─────────────────────────────────────────────────────────────────┐
│  HEADER                                                        │
├─────────────────────────────────────────────────────────────────┤
│  SEITENHEADER: "Daten & Statistiken"  /  Home > Daten          │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  EINLEITUNGSTEXT                                                │
│  ┌────────────────────────────────────────────────┐            │
│  │  Die folgenden Datenvisualisierungen zeigen    │            │
│  │  den ökologischen Fussabdruck alpiner Sport-   │            │
│  │  veranstaltungen in Graubünden im Vergleich.   │            │
│  │  Datenquellen: BASPO, myclimate, Eigene Erhebg.│            │
│  └────────────────────────────────────────────────┘            │
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  SEKTION 1: CO₂-VERGLEICH                                      │
│  "CO₂-Fussabdruck nach Veranstaltung"                          │
│                                                                 │
│  ┌────────────────────────────────────────────────┐            │
│  │                                                │            │
│  │  Engadin Skimarathon  ████████████████░░ 450t  │            │
│  │  LAAX Open            █████████████░░░░░ 380t  │            │
│  │  Swissalpine Davos    ██████░░░░░░░░░░░ 180t  │            │
│  │  Arosa IceCross       █████████████░░░░░ 350t  │            │
│  │  Berglauf Engadin     ████░░░░░░░░░░░░░ 120t  │            │
│  │                                                │            │
│  │  [Filter: Jahr ▼]  [Sortierung ▼]             │            │
│  │                                                │            │
│  └────────────────────────────────────────────────┘            │
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  SEKTION 2: GREEN SCORE RADAR                                   │
│  "Green Score — Mehrdimensionale Bewertung"                     │
│                                                                 │
│  ┌──────────────────────┐  ┌──────────────────────┐           │
│  │                      │  │                      │           │
│  │   Event auswählen:   │  │                      │           │
│  │   [Engadin Skimar. ▼]│  │     RADAR-CHART      │           │
│  │                      │  │                      │           │
│  │   Dimensionen:       │  │      Mobilität       │           │
│  │   ● ÖV-Anbindung    │  │        /\             │           │
│  │   ● Energiemix       │  │       /  \            │           │
│  │   ● Abfallmanagement │  │  Abfall ── Energie   │           │
│  │   ● Zertifizierungen │  │       \  /            │           │
│  │   ● Mobilität        │  │        \/             │           │
│  │                      │  │     Zertifiz.         │           │
│  │   Gesamtscore: 78    │  │                      │           │
│  │                      │  │                      │           │
│  └──────────────────────┘  └──────────────────────┘           │
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  SEKTION 3: ANREISE-RECHNER                                     │
│  "Berechnen Sie Ihren Anreise-Fussabdruck"                     │
│                                                                 │
│  ┌────────────────────────────────────────────────┐            │
│  │                                                │            │
│  │  Startort:     [________________]  [📍]        │            │
│  │                                                │            │
│  │  Ziel-Event:   [Engadin Skimarathon ▼]        │            │
│  │                                                │            │
│  │  Verkehrsmittel:                               │            │
│  │  (●) Auto   (○) Zug/ÖV   (○) Bus   (○) Velo  │            │
│  │                                                │            │
│  │  Personen:  [2 ▼]                              │            │
│  │                                                │            │
│  │  [Berechnen]                                   │            │
│  │                                                │            │
│  │  ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─  │            │
│  │                                                │            │
│  │  ERGEBNIS:                                     │            │
│  │  ┌───────────────────────────────────┐        │            │
│  │  │  Auto:  45.2 kg CO₂              │        │            │
│  │  │  Zug:    8.4 kg CO₂   (-81%)     │        │            │
│  │  │  Bus:   12.1 kg CO₂   (-73%)     │        │            │
│  │  │                                   │        │            │
│  │  │  Tipp: Mit dem Zug sparen Sie     │        │            │
│  │  │  36.8 kg CO₂ pro Person!          │        │            │
│  │  └───────────────────────────────────┘        │            │
│  │                                                │            │
│  └────────────────────────────────────────────────┘            │
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  SEKTION 4: ZEITVERLAUF                                         │
│  "Entwicklung der Nachhaltigkeit über die Jahre"               │
│                                                                 │
│  ┌────────────────────────────────────────────────┐            │
│  │                                                │            │
│  │  100 ┤                                         │            │
│  │      │              ╱──●                       │            │
│  │   75 ┤         ●──╱                            │            │
│  │      │        ╱                                │            │
│  │   50 ┤   ●──╱                                  │            │
│  │      │                                         │            │
│  │   25 ┤                                         │            │
│  │      │                                         │            │
│  │    0 ┤───┬────┬────┬────┬────                  │            │
│  │      2022  2023  2024  2025  2026              │            │
│  │                                                │            │
│  │  [Events auswählen: ☑ Alle  ☑ Engadin ...]    │            │
│  │                                                │            │
│  └────────────────────────────────────────────────┘            │
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  DOWNLOAD & TEILEN                                              │
│  ┌────────────────────────────────────────────────┐            │
│  │  [📥 Daten als CSV]  [📊 Bericht als PDF]      │            │
│  │  [Teilen: f t in]                              │            │
│  └────────────────────────────────────────────────┘            │
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│  FOOTER                                                        │
└─────────────────────────────────────────────────────────────────┘
```

**Mobile-Wireframe — Daten:**

```
┌───────────────────────────────┐
│  [Logo]            [☰] [DE]  │
├───────────────────────────────┤
│  "Daten & Statistiken"       │
├───────────────────────────────┤
│                               │
│  Einleitungstext...          │
│                               │
│  CO₂-VERGLEICH               │
│  ┌───────────────────────┐   │
│  │ [Horizontales         │   │
│  │  Balkendiagramm,      │   │
│  │  vereinfacht]         │   │
│  └───────────────────────┘   │
│                               │
│  GREEN SCORE                 │
│  Event: [Auswahl ▼]         │
│  ┌───────────────────────┐   │
│  │ [Radar-Chart]         │   │
│  │ Score: 78/100         │   │
│  └───────────────────────┘   │
│                               │
│  ANREISE-RECHNER             │
│  ┌───────────────────────┐   │
│  │ Startort: [________]  │   │
│  │ Event:    [_____ ▼]   │   │
│  │ Mittel:   [Auto ▼]   │   │
│  │ Personen: [2 ▼]      │   │
│  │ [Berechnen]           │   │
│  │                       │   │
│  │ Ergebnis: 45.2 kg    │   │
│  └───────────────────────┘   │
│                               │
│  ZEITVERLAUF                 │
│  ┌───────────────────────┐   │
│  │ [Liniendiagramm,     │   │
│  │  horizontal scroll]   │   │
│  └───────────────────────┘   │
│                               │
│  [📥 CSV] [📊 PDF]           │
│                               │
│  FOOTER                      │
└───────────────────────────────┘
```

**Detailspezifikation — Daten & Statistiken:**

- **CO₂-Vergleich (Balkendiagramm):** Horizontale Balken mit Chart.js. Tooltips bei Hover zeigen exakte Werte und Zusammensetzung (Mobilität, Energie, Infrastruktur, Abfall). Filter für Jahr und Sortierung (aufsteigend/absteigend). Farbe: Gradientvon Alpine Green (niedrig) zu Rot (hoch). Auf Mobile: Balken füllen volle Breite, Touch-Tooltip bei Tap.
- **Green Score Radar:** Radar-/Spinnennetz-Diagramm mit fünf Achsen. Dropdown zur Event-Auswahl. Möglichkeit, zwei Events gleichzeitig zu vergleichen (zweite Fläche im Radar). Links: Legende mit Dimensionserklärung. Auf Mobile: Dropdown über dem Chart, Legende darunter.
- **Anreise-Rechner:** Formular mit vier Eingabefeldern. Startort mit Autocomplete (Schweizer Städte). Verkehrsmittel als Radio-Button-Gruppe. Ergebnis wird inline angezeigt, ohne Seitenneuladen. Vergleichsansicht zeigt CO₂-Werte aller Verkehrsmittel simultan. Auf Mobile: Eingabefelder vertikal gestapelt, Verkehrsmittelwahl als Dropdown statt Radio-Buttons.
- **Zeitverlauf (Liniendiagramm):** Mehrere Linien (eine pro Event) mit Checkbox-Filter. X-Achse: Jahre, Y-Achse: Green Score (0–100). Tooltips bei Hover. Auf Mobile: horizontales Scrollen mit Touch-Geste, vereinfachte Legende.
- **Download-Bereich:** CSV-Export der rohen Daten, PDF-Export eines formatierten Berichts. Share-Buttons für soziale Medien und Link-Kopieren.

\newpage

### Kontakt / Contact

**Desktop-Wireframe:**

```
┌─────────────────────────────────────────────────────────────────┐
│  HEADER                                                        │
├─────────────────────────────────────────────────────────────────┤
│  SEITENHEADER: "Kontakt"  /  Home > Kontakt                    │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  ┌──────────────────────────┐  ┌──────────────────────┐       │
│  │                          │  │                      │       │
│  │  KONTAKTINFORMATIONEN    │  │  KONTAKTFORMULAR     │       │
│  │                          │  │                      │       │
│  │  📧 E-Mail               │  │  Name:               │       │
│  │  info@greensport-gr.ch   │  │  [________________]  │       │
│  │                          │  │                      │       │
│  │  📞 Telefon              │  │  E-Mail:             │       │
│  │  +41 81 000 00 00        │  │  [________________]  │       │
│  │                          │  │                      │       │
│  │  📍 Adresse              │  │  Betreff:            │       │
│  │  Fachhochschule          │  │  [________________]  │       │
│  │  Graubünden              │  │                      │       │
│  │  Pulvermühlestrasse 57   │  │  Nachricht:          │       │
│  │  7000 Chur               │  │  [________________]  │       │
│  │                          │  │  [________________]  │       │
│  │  ─────────────────────   │  │  [________________]  │       │
│  │                          │  │  [________________]  │       │
│  │  SOCIAL MEDIA            │  │                      │       │
│  │                          │  │  ☐ Datenschutz-      │       │
│  │  [f] Facebook            │  │    erklärung         │       │
│  │  [t] Twitter/X           │  │    akzeptiert        │       │
│  │  [i] Instagram           │  │                      │       │
│  │  [in] LinkedIn           │  │  [Nachricht senden]  │       │
│  │                          │  │                      │       │
│  └──────────────────────────┘  └──────────────────────┘       │
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  STANDORT                                                       │
│  ┌────────────────────────────────────────────────┐            │
│  │                                                │            │
│  │         [EINGEBETTETE KARTE]                    │            │
│  │         OpenStreetMap / Leaflet                 │            │
│  │         Fachhochschule Graubünden, Chur         │            │
│  │                                                │            │
│  └────────────────────────────────────────────────┘            │
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│  FOOTER                                                        │
└─────────────────────────────────────────────────────────────────┘
```

**Mobile-Wireframe — Kontakt:**

```
┌───────────────────────────────┐
│  [Logo]            [☰] [DE]  │
├───────────────────────────────┤
│  "Kontakt"                   │
├───────────────────────────────┤
│                               │
│  KONTAKTINFORMATIONEN        │
│                               │
│  📧 info@greensport-gr.ch    │
│  📞 +41 81 000 00 00         │
│  📍 FHGR, Chur               │
│                               │
│  [f] [t] [i] [in]           │
│                               │
│  ─────────────────────────   │
│                               │
│  KONTAKTFORMULAR             │
│                               │
│  Name:                       │
│  [________________________]  │
│  E-Mail:                     │
│  [________________________]  │
│  Betreff:                    │
│  [________________________]  │
│  Nachricht:                  │
│  [________________________]  │
│  [________________________]  │
│                               │
│  ☐ Datenschutz akzeptiert    │
│  [Nachricht senden]          │
│                               │
│  ─────────────────────────   │
│                               │
│  ┌───────────────────────┐   │
│  │ [Karte]               │   │
│  └───────────────────────┘   │
│                               │
│  FOOTER                      │
└───────────────────────────────┘
```

**Detailspezifikation — Kontakt:**

- **Zwei-Spalten-Layout:** Kontaktinformationen links (40%), Formular rechts (60%). Auf Mobile: Informationen oben, Formular darunter.
- **Kontaktformular:** Clientseitige Validierung (Name: Pflicht, E-Mail: Pflicht + Format-Check, Betreff: Pflicht, Nachricht: Pflicht + min. 20 Zeichen). Datenschutz-Checkbox muss aktiviert sein. Absende-Button: Alpine Green, volle Breite auf Mobile. Erfolgsmeldung: Inline-Banner in Grün mit Bestätigungstext. Fehlermeldung: Inline-Banner in Rot.
- **Social-Media-Links:** Icons in Kreisform, 44×44px Touch-Target. Hover: Hintergrundfarbe wechselt zur jeweiligen Plattformfarbe.
- **Karte:** OpenStreetMap via Leaflet.js. Interaktiv auf Desktop (Zoom, Pan), statisches Bild mit Link auf Mobile (Performance). Marker an der Adresse der FHGR.

\newpage

### Impressum

**Desktop-Wireframe:**

```
┌─────────────────────────────────────────────────────────────────┐
│  HEADER                                                        │
├─────────────────────────────────────────────────────────────────┤
│  SEITENHEADER: "Impressum"  /  Home > Impressum                │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  ┌────────────────────────────────────────────────┐            │
│  │                                                │            │
│  │  Impressum                                     │            │
│  │  ═════════                                     │            │
│  │                                                │            │
│  │  Angaben gemäss Art. 3 Abs. 1 UWG /            │            │
│  │  § 5 TMG (DE-Äquivalent)                       │            │
│  │                                                │            │
│  │  ──────────────────────────────────────        │            │
│  │                                                │            │
│  │  Betreiber                                     │            │
│  │  GreenSport Graubünden                         │            │
│  │  c/o Fachhochschule Graubünden                 │            │
│  │  Pulvermühlestrasse 57                         │            │
│  │  7000 Chur, Schweiz                            │            │
│  │                                                │            │
│  │  ──────────────────────────────────────        │            │
│  │                                                │            │
│  │  Kontakt                                       │            │
│  │  E-Mail: info@greensport-gr.ch                 │            │
│  │  Telefon: +41 81 000 00 00                     │            │
│  │                                                │            │
│  │  ──────────────────────────────────────        │            │
│  │                                                │            │
│  │  Verantwortlich für den Inhalt                 │            │
│  │  [Name der verantwortlichen Person]            │            │
│  │  Fachhochschule Graubünden                     │            │
│  │                                                │            │
│  │  ──────────────────────────────────────        │            │
│  │                                                │            │
│  │  Haftungsausschluss                            │            │
│  │  [Standardtext Haftungsausschluss]             │            │
│  │                                                │            │
│  │  ──────────────────────────────────────        │            │
│  │                                                │            │
│  │  Urheberrecht                                  │            │
│  │  [Standardtext Urheberrecht]                   │            │
│  │                                                │            │
│  └────────────────────────────────────────────────┘            │
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│  FOOTER                                                        │
└─────────────────────────────────────────────────────────────────┘
```

**Mobile-Wireframe — Impressum:**

```
┌───────────────────────────────┐
│  [Logo]            [☰] [DE]  │
├───────────────────────────────┤
│  "Impressum"                 │
├───────────────────────────────┤
│                               │
│  Angaben gemäss Art. 3       │
│  Abs. 1 UWG                  │
│                               │
│  ─────────────────────────   │
│                               │
│  Betreiber                   │
│  GreenSport Graubünden       │
│  c/o FHGR                   │
│  Pulvermühlestrasse 57       │
│  7000 Chur                   │
│                               │
│  ─────────────────────────   │
│                               │
│  Kontakt                     │
│  info@greensport-gr.ch       │
│  +41 81 000 00 00            │
│                               │
│  ─────────────────────────   │
│                               │
│  Verantwortlich              │
│  [Name]                      │
│                               │
│  ─────────────────────────   │
│                               │
│  Haftungsausschluss          │
│  [Standardtext...]           │
│                               │
│  ─────────────────────────   │
│                               │
│  Urheberrecht                │
│  [Standardtext...]           │
│                               │
│  FOOTER                      │
└───────────────────────────────┘
```

**Detailspezifikation — Impressum:**

- **Einspaltiges Layout:** Maximale Textbreite 720px, zentriert. Klare typografische Hierarchie mit Zwischenüberschriften (H2) und Trennlinien.
- **Responsives Verhalten:** Keine strukturellen Änderungen zwischen Desktop und Mobile — lediglich Schriftgrösse und Seitenränder passen sich an.
- **Typografie:** Fliesstext in 16px DejaVu Serif für bessere Lesbarkeit juristischer Texte. Überschriften in DejaVu Sans.

\newpage

### Datenschutzerklärung

**Desktop-Wireframe:**

```
┌─────────────────────────────────────────────────────────────────┐
│  HEADER                                                        │
├─────────────────────────────────────────────────────────────────┤
│  SEITENHEADER: "Datenschutzerklärung"  /  Home > Datenschutz   │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  ┌─────────────┐  ┌───────────────────────────────────┐       │
│  │             │  │                                   │       │
│  │ INHALTS-    │  │  Datenschutzerklärung             │       │
│  │ VERZEICHNIS │  │  ═══════════════════              │       │
│  │             │  │                                   │       │
│  │ 1. Allgem.  │  │  Stand: März 2026                 │       │
│  │ 2. Verant-  │  │                                   │       │
│  │    wortlich │  │  1. Allgemeines                    │       │
│  │ 3. Daten-   │  │  ────────────                     │       │
│  │    erhebung │  │  Diese Datenschutzerklärung        │       │
│  │ 4. Cookies  │  │  informiert über Art, Umfang und   │       │
│  │ 5. Rechte   │  │  Zweck der Erhebung personen-      │       │
│  │ 6. Kontakt  │  │  bezogener Daten...                │       │
│  │             │  │                                   │       │
│  │             │  │  2. Verantwortliche Stelle         │       │
│  │             │  │  ────────────────────              │       │
│  │             │  │  GreenSport Graubünden             │       │
│  │             │  │  c/o Fachhochschule Graubünden     │       │
│  │             │  │  [Adresse]                         │       │
│  │             │  │                                   │       │
│  │             │  │  3. Datenerhebung auf der Website  │       │
│  │             │  │  ───────────────────────────       │       │
│  │             │  │  Beim Besuch der Website werden    │       │
│  │             │  │  automatisch technische Daten      │       │
│  │             │  │  erfasst (Server-Logfiles)...      │       │
│  │             │  │                                   │       │
│  │             │  │  4. Cookies und Tracking           │       │
│  │             │  │  ──────────────────────            │       │
│  │             │  │  [Detaillierter Text...]           │       │
│  │             │  │                                   │       │
│  │             │  │  5. Ihre Rechte                    │       │
│  │             │  │  ──────────────                    │       │
│  │             │  │  [Text zu Betroffenenrechten...]   │       │
│  │             │  │                                   │       │
│  │             │  │  6. Kontakt für Datenschutz        │       │
│  │             │  │  ────────────────────────          │       │
│  │             │  │  [Kontaktdaten...]                 │       │
│  │             │  │                                   │       │
│  └─────────────┘  └───────────────────────────────────┘       │
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│  FOOTER                                                        │
└─────────────────────────────────────────────────────────────────┘
```

**Mobile-Wireframe — Datenschutz:**

```
┌───────────────────────────────┐
│  [Logo]            [☰] [DE]  │
├───────────────────────────────┤
│  "Datenschutzerklärung"      │
├───────────────────────────────┤
│                               │
│  INHALTSVERZEICHNIS          │
│  (als aufklappbares Akkord.) │
│  [▼ Zum Abschnitt springen] │
│                               │
│  ─────────────────────────   │
│                               │
│  1. Allgemeines              │
│  Diese Datenschutzerklärung  │
│  informiert über Art...      │
│                               │
│  2. Verantwortliche Stelle   │
│  GreenSport Graubünden...    │
│                               │
│  3. Datenerhebung            │
│  Beim Besuch der Website...  │
│                               │
│  4. Cookies und Tracking     │
│  [Text...]                   │
│                               │
│  5. Ihre Rechte              │
│  [Text...]                   │
│                               │
│  6. Kontakt                  │
│  [Kontaktdaten...]           │
│                               │
│  [↑ Nach oben]               │
│                               │
│  FOOTER                      │
└───────────────────────────────┘
```

**Detailspezifikation — Datenschutzerklärung:**

- **Zwei-Spalten-Layout (Desktop):** Sticky Inhaltsverzeichnis links (25%), Fliesstext rechts (75%). Das Inhaltsverzeichnis scrollt mit und hebt den aktuell sichtbaren Abschnitt hervor (Scroll-Spy via Intersection Observer).
- **Mobile:** Inhaltsverzeichnis als aufklappbares Akkordeon-Element am Seitenanfang. Einzelspaltige Darstellung des Textes. «Nach oben»-Button am Ende des Textes.
- **Typografie:** Identisch mit Impressum — DejaVu Serif für Fliesstext, DejaVu Sans für Überschriften.
- **Smooth Scroll:** Klick auf einen Inhaltsverzeichnis-Eintrag scrollt sanft zum entsprechenden Abschnitt (CSS `scroll-behavior: smooth`).

\newpage

# Nutzerführung & Interaktionskonzept

## User Flows

Die nachfolgenden User Flows beschreiben die typischen Nutzungspfade der drei in Deliverable B definierten Zielgruppen durch die Plattform. Jeder Flow wird als Schritt-für-Schritt-Sequenz dargestellt und mit dem zugehörigen Interaktionskontext annotiert.

### User Flow 1: Neuer Besucher — Erstbesuch und Orientierung

Dieser Flow beschreibt den typischen Weg einer Person, die zum ersten Mal auf die Plattform gelangt — etwa über eine Suchmaschine, einen Social-Media-Beitrag oder eine Empfehlung.

```
START
  │
  ▼
┌─────────────────────┐
│  1. LANDING (Home)  │  Einstieg über Suchmaschine oder Link
│  Hero-Bereich       │  → Sofortige Orientierung: Worum geht es?
│  Schlüsselzahlen    │  → Vertrauensaufbau durch Daten
└─────────┬───────────┘
          │
          ▼
┌─────────────────────┐
│  2. SCROLL / BROWSE │  Scrollen durch Startseite
│  Event-Teaser       │  → Erkenntnis: Es gibt konkrete Events
│  Green Score Preview│  → Neugier: Was ist der Green Score?
└─────────┬───────────┘
          │
          ├──────────────────────────────┐
          ▼                              ▼
┌─────────────────────┐    ┌─────────────────────┐
│  3a. EVENTS-SEITE   │    │  3b. DATEN-SEITE    │
│  Event-Übersicht    │    │  CO₂-Vergleich      │
│  Filter nach Region │    │  Green Score Radar  │
│  → Event auswählen  │    │  → Rechner nutzen   │
└─────────┬───────────┘    └─────────┬───────────┘
          │                          │
          ▼                          ▼
┌─────────────────────┐    ┌─────────────────────┐
│  4a. EVENT-DETAIL   │    │  4b. ANREISE-RECHNER│
│  Nachhaltigkeitsdaten│    │  Eigenen CO₂-Wert  │
│  Green Score Detail │    │  berechnen          │
│  → Vergleichen      │    │  → Vergleich sehen  │
└─────────┬───────────┘    └─────────┬───────────┘
          │                          │
          └──────────┬───────────────┘
                     ▼
          ┌─────────────────────┐
          │  5. KONTAKT-SEITE   │
          │  Formular ausfüllen │
          │  oder Social Media  │
          │  → Nachricht senden │
          └─────────────────────┘
                     │
                     ▼
                   ENDE
```

**Annotationen zum Flow:**

- **Schritt 1:** Die Verweildauer auf der Startseite beträgt erfahrungsgemäss 15–30 Sekunden. Die Hero-Sektion muss den Zweck der Plattform in unter 5 Sekunden kommunizieren. Die Schlüsselzahlen (animierte Counter) erzeugen Glaubwürdigkeit und wecken Interesse.
- **Schritt 2:** Das Scrollen durch die Startseite fungiert als «Appetitanreger». Die Teaser-Sektionen (Events, Green Score, Blog) bieten jeweils einen klaren CTA, der zur jeweiligen Detailseite führt.
- **Schritt 3a/3b:** Die Verzweigung spiegelt die unterschiedlichen Interessenprofile wider: Sportbegeisterte tendieren zu Events, datenaffine Personen zu den Statistiken.
- **Schritt 5:** Der Kontakt-Schritt ist optional, stellt aber das gewünschte Endziel der Customer Journey dar (Lead-Generierung).

### User Flow 2: Event-Organisator — Datenvergleich und Benchmarking

```
START
  │
  ▼
┌─────────────────────┐
│  1. DIREKTEINSTIEG  │  Bookmark oder direkter Link
│  Daten & Statistiken│  zu /daten
└─────────┬───────────┘
          │
          ▼
┌─────────────────────┐
│  2. CO₂-VERGLEICH   │  Balkendiagramm analysieren
│  Filter setzen:     │  → Jahr auswählen
│  Jahr, Sortierung   │  → Hover für Details
└─────────┬───────────┘
          │
          ▼
┌─────────────────────┐
│  3. GREEN SCORE     │  Radar-Chart
│  Eigenes Event      │  → Eigenes Event auswählen
│  auswählen          │  → Mit anderem Event vergleichen
│  Vergleich starten  │  → Stärken/Schwächen identifiz.
└─────────┬───────────┘
          │
          ▼
┌─────────────────────┐
│  4. ZEITVERLAUF     │  Liniendiagramm
│  Entwicklung über   │  → Eigene Verbesserungen sehen
│  die Jahre prüfen   │  → Trend erkennen
└─────────┬───────────┘
          │
          ▼
┌─────────────────────┐
│  5. EXPORT          │  Daten herunterladen
│  CSV-Download       │  → Für eigene Berichte nutzen
│  PDF-Bericht        │  → Teilen mit Stakeholdern
└─────────────────────┘
          │
          ▼
        ENDE
```

**Annotationen zum Flow:**

- **Schritt 1:** Event-Organisatoren kennen die Plattform bereits und steigen direkt auf der Daten-Seite ein. Die URL-Struktur `/daten` ist kurz und merkfähig.
- **Schritt 2–4:** Der sequenzielle Analysefluss führt von der Makroperspektive (Gesamtvergleich) über die Detailansicht (einzelnes Event) zum Langzeittrend. Jede Sektion baut auf der vorherigen auf.
- **Schritt 5:** Die Download-Funktion ist für diese Zielgruppe besonders relevant. CSV ermöglicht die Weiterverarbeitung in Excel/Tableau, PDF eignet sich für die Präsentation vor Gremien.

### User Flow 3: Wiederkehrender Besucher — Gezielte Information

```
START
  │
  ├─────────────────────────────┐
  ▼                             ▼
┌─────────────────────┐  ┌─────────────────────┐
│  1a. NEWS-SEITE     │  │  1b. EVENTS-SEITE   │
│  Direkt über        │  │  Direkt über        │
│  Bookmark/Link      │  │  Bookmark/Link      │
└─────────┬───────────┘  └─────────┬───────────┘
          │                        │
          ▼                        ▼
┌─────────────────────┐  ┌─────────────────────┐
│  2a. ARTIKEL LESEN  │  │  2b. EVENT-DETAIL   │
│  Neuester Artikel   │  │  Bestimmtes Event   │
│  oder nach Kategorie│  │  prüfen             │
└─────────┬───────────┘  └─────────┬───────────┘
          │                        │
          ▼                        ▼
┌─────────────────────┐  ┌─────────────────────┐
│  3a. TEILEN         │  │  3b. DATEN          │
│  Artikel auf Social │  │  Aktuelle Zahlen    │
│  Media teilen       │  │  prüfen             │
└─────────────────────┘  └─────────────────────┘
          │                        │
          └──────────┬─────────────┘
                     ▼
                   ENDE
```

**Annotationen zum Flow:**

- **Schritt 1a/1b:** Wiederkehrende Besucher umgehen die Startseite und navigieren direkt zu den für sie relevanten Inhalten. Die Plattform unterstützt dies durch klare URL-Strukturen und die Möglichkeit, Seiten zu bookmarken.
- **Schritt 2:** Der Fokus liegt auf der schnellen Informationsaufnahme. Lesezeit-Angaben bei Artikeln und kompakte Event-Zusammenfassungen unterstützen dieses Verhalten.
- **Schritt 3:** Die Share-Funktionalität ist für wiederkehrende Besucher besonders relevant, da sie als Multiplikatoren fungieren.

## Interaktionsmuster

### Navigationsverhalten

**Sticky Header:**
Der Header bleibt beim Scrollen am oberen Bildschirmrand fixiert. Bei Abwärts-Scroll wird der Header auf eine kompakte Version reduziert (Höhe von 80px auf 56px, Logo verkleinert). Bei Aufwärts-Scroll erscheint der Header wieder in voller Grösse. Diese Auto-Hide-Funktionalität maximiert den verfügbaren Bildschirmbereich beim Lesen, während die Navigation jederzeit erreichbar bleibt.

**Mobile Hamburger-Menü:**
Das Hamburger-Icon (☰) öffnet ein Fullscreen-Overlay mit vertikaler Navigation. Die Animation erfolgt als Slide-in von rechts (300ms ease-in-out). Ein semi-transparenter Hintergrund-Overlay verhindert Interaktion mit dem darunterliegenden Inhalt. Das Menü wird geschlossen durch: (a) Tap auf ✕-Symbol, (b) Tap ausserhalb des Menüs, (c) Wischen nach rechts (Swipe-Geste), (d) Betätigung der Browser-Zurück-Taste.

**Breadcrumb-Navigation:**
Jede Unterseite zeigt eine Breadcrumb-Leiste unterhalb des Seitenheaders: `Home > [Hauptseite] > [ggf. Detailseite]`. Die Breadcrumbs werden dynamisch aus der Seitenstruktur generiert. Auf Mobile werden lange Breadcrumb-Pfade mit Ellipsis abgekürzt (`... > Events > Detail`).

**Back-to-Top-Button:**
Ab einer Scrolltiefe von 300px erscheint ein kreisrunder Button (48×48px) in der rechten unteren Bildschirmecke. Farbe: Alpine Green mit weissem Pfeil-Icon. Tap/Klick scrollt sanft zum Seitenanfang. Der Button blendet aus, sobald der Nutzer wieder oben angekommen ist.

### Sprachumschaltung

Die Sprachumschaltung folgt einem konsistenten Muster über alle Seiten hinweg:

1. **Aktivierung:** Klick/Tap auf den inaktiven Sprachcode (DE oder EN) im Header.
2. **Verarbeitung:** Die aktuelle URL wird transformiert (`/de/events` → `/en/events`). Die gewählte Sprache wird im `localStorage` unter dem Schlüssel `greensport-lang` gespeichert.
3. **Darstellung:** Sämtliche UI-Elemente (Navigation, Buttons, Labels, Footer) werden in der gewählten Sprache angezeigt. Inhaltliche Texte (Artikel, Event-Beschreibungen) werden ebenfalls in der Zielsprache geladen.
4. **Erstbesuch:** Beim ersten Besuch wird die Browser-Sprache via `navigator.language` geprüft. Ist diese `de` oder `de-CH`, wird Deutsch als Standard gesetzt; andernfalls Englisch.
5. **Persistenz:** Bei jedem weiteren Besuch wird die gespeicherte Präferenz verwendet, unabhängig von der Browser-Einstellung.

### Chart-Interaktionen

**Hover-Tooltips:**
Alle Diagramme (Balken, Radar, Linie) zeigen bei Hover über ein Datenelement einen Tooltip mit detaillierten Informationen. Der Tooltip erscheint nach 200ms Verweildauer und verschwindet beim Verlassen des Datenelements. Tooltip-Design: weisser Hintergrund, subtiler Schatten, Pfeil zum Datenpunkt.

**Click for Details:**
Klick auf einen Balken im CO₂-Vergleichsdiagramm öffnet eine Detail-Ansicht (Accordion unterhalb des Diagramms) mit der Aufschlüsselung nach Kategorien (Mobilität, Energie, Infrastruktur, Abfall). Klick auf einen Punkt im Liniendiagramm zeigt den exakten Wert und das Erhebungsdatum.

**Filter-Controls:**
Dropdown-Filter oberhalb der Diagramme ermöglichen die Einschränkung der angezeigten Daten. Filterwerte werden als URL-Parameter persistiert, sodass gefilterte Ansichten verlinkbar und bookmarkbar sind. Bei Filteränderung wird das Diagramm mit einer sanften Animation (400ms) aktualisiert.

**Touch-Interaktion (Mobile):**
Auf Touch-Geräten werden Hover-Tooltips durch Tap-Tooltips ersetzt. Ein erster Tap zeigt den Tooltip, ein zweiter Tap auf dasselbe Element öffnet die Detailansicht. Tap ausserhalb schliesst den Tooltip. Pinch-to-Zoom ist auf Diagrammen deaktiviert, um versehentliches Zoomen zu verhindern.

### Galerie-Interaktionen

**Lightbox-Navigation:**

- **Desktop:** Pfeil-Tasten (← →) für Vor/Zurück, Escape zum Schliessen. Klick auf den linken/rechten Bildrand navigiert ebenfalls.
- **Mobile:** Swipe-Gesten (links/rechts) für Navigation, Swipe nach unten zum Schliessen. Pinch-to-Zoom für Bildvergrösserung.
- **Gemeinsam:** Bildübergang mit einer Fade/Slide-Animation (300ms). Positionsindikator (Punkte) am unteren Rand.

**Lazy Loading:**
Bilder im Raster werden mit `loading="lazy"` und Intersection Observer nachgeladen. Während des Ladens wird ein unscharfes Platzhalter-Bild (LQIP) angezeigt, das mittels einer Blur-Auflösung-Animation (600ms) durch das scharfe Bild ersetzt wird.

**Filtern mit Animation:**
Beim Wechsel eines Kategorie-Filters werden nicht passende Bilder mit einer Fade-Out-Animation (300ms) ausgeblendet und passende Bilder mit einer Fade-In-Animation (300ms) eingeblendet. Das Raster ordnet sich mit einer Layout-Animation (400ms) neu an.

### Scroll-Verhalten

**Smooth Scroll:**
Alle internen Ankerlinks (Breadcrumbs, Inhaltsverzeichnis, «Nach oben»-Button, CTA-Links auf der Startseite) verwenden CSS `scroll-behavior: smooth`. Die Scrolldauer beträgt circa 500ms und folgt einer ease-in-out-Kurve.

**Scroll-basierte Animationen:**
Elemente (Karten, Statistik-Zahlen, Sektionen) erscheinen beim Scrollen in den Viewport mit einer dezenten Einblend-Animation (Fade-in von unten, 400ms, 50px Offset). Die Animationen werden via Intersection Observer ausgelöst und laufen nur einmal ab. Auf Geräten mit `prefers-reduced-motion: reduce` werden alle Animationen deaktiviert.

**Infinite Scroll (Mobile News):**
Auf der mobilen News-Übersicht wird statt Pagination ein «Mehr laden»-Button am Ende der Liste angezeigt. Tap lädt 6 weitere Artikel nach und fügt sie ans Ende der Liste an. Ein Ladeindikator (Spinner) zeigt den Ladezustand an.

## Konsistenzkonzept

### Kartenpatterns

Über die gesamte Plattform hinweg werden drei Kartentypen konsistent eingesetzt:

| Kartentyp | Verwendung | Elemente |
|---|---|---|
| **Event-Karte** | Home (Teaser), Events (Liste), verwandte Events | Bild, Datum, Ort, Titel, Green Score, CTA |
| **Artikel-Karte** | Home (Blog-Teaser), News (Übersicht), verwandte Artikel | Bild, Kategorie, Datum, Titel, Auszug, CTA |
| **Statistik-Karte** | Home (Schlüsselzahlen), Daten (Highlights) | Icon, Kennzahl, Bezeichnung, Kurzbeschreibung |

Alle Karten verwenden identische Gestaltungsprinzipien: 12px Eckenradius, einheitlicher Schatten, konsistente Paddings (16px Mobile, 24px Desktop), und denselben Hover-Effekt (Lift + Schatten-Verstärkung).

### Button-Hierarchie

| Stufe | Stil | Verwendung |
|---|---|---|
| **Primär** | Alpine Green Hintergrund, weisse Schrift | Hauptaktionen: «Daten entdecken», «Berechnen», «Nachricht senden» |
| **Sekundär** | Transparenter Hintergrund, Alpine Green Rahmen und Schrift | Nebenaktionen: «Alle Events anzeigen», «Weiterlesen» |
| **Tertiär** | Kein Rahmen, Alpine Green Schrift mit Pfeil (→) | Inline-Links: «Details ansehen →», «Lesen →» |
| **Akzent** | Alpine Gold Hintergrund, dunkle Schrift | Hervorgehobene CTAs: Hero-Button auf der Startseite |

Alle Buttons haben eine Mindestgrösse von 44×44px (Touch-Target), einen Hover-Zustand (leichte Verdunkelung, 150ms Transition) und einen Focus-Zustand (2px Outline in Alpine Gold für Tastaturnavigation).

### Lade- und Fehlerzustände

**Ladezustände:**

- **Diagramme:** Skeleton-Loading-Animation (pulsierende graue Flächen in der Form des erwarteten Diagramms). Dauer: bis Daten geladen und gerendert sind.
- **Bilder:** LQIP-Platzhalter (unscharfe 20px-Version) mit progressiver Schärfung.
- **Seitenübergänge:** Dezente Fortschrittsleiste am oberen Bildschirmrand (2px Höhe, Alpine Green).

**Fehlerzustände:**

- **Formular-Fehler:** Inline-Fehlermeldung unterhalb des betroffenen Feldes in Rot (#E63946). Feld erhält einen roten Rahmen. Fehlermeldung erscheint mit einer Slide-Down-Animation (200ms).
- **Netzwerk-Fehler (Diagramme):** Anstelle des Diagramms wird ein Platzhalter mit dem Text «Daten konnten nicht geladen werden» und einem «Erneut versuchen»-Button angezeigt.
- **Leere Zustände:** Wenn ein Filter keine Ergebnisse liefert, wird eine freundliche Meldung mit einer Illustration angezeigt: «Keine Events in dieser Kategorie gefunden. Versuchen Sie einen anderen Filter.»

**404-Seite:**
Eine eigene 404-Seite mit Bergillustration, dem Text «Diese Seite scheint sich im Nebel verirrt zu haben» und Links zur Startseite sowie zur Suche.

### Barrierefreiheit

Die Plattform berücksichtigt grundlegende WCAG-2.1-Richtlinien (Stufe AA):

- **Farbkontraste:** Alle Text-Hintergrund-Kombinationen erfüllen das Kontrastverhältnis 4.5:1 (Normaler Text) bzw. 3:1 (grosser Text). Die Primärfarbe Alpine Green (#2D6A4F) auf Weiss erreicht ein Verhältnis von 7.3:1.
- **Tastaturnavigation:** Alle interaktiven Elemente sind per Tab-Taste erreichbar. Fokus-Reihenfolge folgt der visuellen Leserichtung. Sichtbarer Fokusring (2px Alpine Gold Outline).
- **Screenreader:** Semantisches HTML (nav, main, article, section, aside). ARIA-Labels für Icons und interaktive Elemente ohne sichtbaren Text. Alt-Texte für alle Bilder.
- **Reduzierte Bewegung:** `@media (prefers-reduced-motion: reduce)` deaktiviert alle Animationen und Transitionen.

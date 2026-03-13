# Projektkontext {#projektkontext}

## Ausgangslage

Das Projekt **GreenSport Graubünden** wurde im Rahmen des Moduls Wirtschaftsinformatik 1 (WINF1) an der Fachhochschule Graubünden konzipiert und umgesetzt. Es handelt sich um eine zweisprachige Webplattform (Deutsch/Englisch), die sich der Nachhaltigkeit im alpinen Sportbereich widmet. Die Plattform richtet sich an Veranstalterinnen und Veranstalter von Sportanlässen, Athletinnen und Athleten sowie Akteurinnen und Akteure im Tourismus des Kantons Graubünden.

## Zielsetzung

Die zentrale Zielsetzung des Projekts umfasst folgende Aspekte:

- **Transparenz:** Die Plattform schafft Transparenz über die ökologischen Auswirkungen alpiner Sportveranstaltungen durch die systematische Erfassung und Aufbereitung relevanter Nachhaltigkeitsdaten.
- **Vergleichbarkeit:** Durch standardisierte Kennzahlen und den sogenannten *Green Score* werden Veranstaltungen hinsichtlich ihrer Nachhaltigkeit vergleichbar gemacht.
- **Förderung nachhaltiger Praktiken:** Die Plattform bietet konkrete Handlungsempfehlungen und Best-Practice-Beispiele, um Veranstalter bei der Umsetzung nachhaltiger Massnahmen zu unterstützen.

## Kernfunktionalität

Der Mehrwert der Plattform liegt insbesondere in den interaktiven Datenvisualisierungen, die es den Nutzerinnen und Nutzern ermöglichen, fundierte Entscheidungen auf Basis aktueller Nachhaltigkeitsdaten zu treffen. Die Daten-Seite der Website stellt verschiedene Diagramme und Kennzahlen bereit, die einen schnellen Überblick über den ökologischen Fussabdruck einzelner Veranstaltungen bieten.

## Bezug zu den Deliverables A–C

Die vorliegende Dokumentation baut auf den folgenden, bereits eingereichten Deliverables auf:

- **Deliverable A — Themenwahl:** Definition des Projektthemas, Zielgruppenanalyse und Abgrenzung des Projektumfangs.
- **Deliverable B — Spezifikation:** Detaillierte funktionale und nicht-funktionale Anforderungen, Sitemap, sowie die Wahl der Technologien (Astro, Tailwind CSS, Chart.js).
- **Deliverable C — Wireframes:** Visuelle Entwürfe aller Seitentypen in Mobile- und Desktop-Ansicht, die als Grundlage für die Umsetzung dienten.

\newpage

# Zugang zur Website {#zugang}

## Voraussetzungen

Für den Betrieb der Website werden folgende Komponenten benötigt:

- **Docker Desktop** (Windows/macOS) oder **Docker Engine + Docker Compose** (Linux)
- **Git** zur Versionsverwaltung

Es werden keine weiteren Abhängigkeiten benötigt, da sämtliche Build- und Laufzeitumgebungen innerhalb der Docker-Container bereitgestellt werden.

## Schritt-für-Schritt-Anleitung

### 1. Repository klonen

```bash
git clone https://github.com/ericr-stein/FloProject.git
cd FloProject
```

### 2. Website starten

```bash
docker compose up -d website
```

Dieser Befehl startet den Webserver im Hintergrund. Das verwendete Image basiert auf **nginx:1.27-alpine**, einem besonders schlanken und sicheren Webserver-Image.

### 3. Website aufrufen

Die Website ist anschliessend unter folgender Adresse erreichbar:

```
http://localhost:8080
```

Die Startseite (`/`) leitet automatisch auf die deutsche Version (`/de/`) weiter. Die englische Version ist unter `/en/` verfügbar.

### 4. Automatisierte Tests ausführen

```bash
docker compose run --rm tests
```

Die Tests werden mittels Playwright in einem Chromium-Browser innerhalb eines Docker-Containers ausgeführt. Sie prüfen Seitenladung, Navigation, responsives Design und Zweisprachigkeit.

### 5. Website stoppen

```bash
docker compose down
```

## Alternative: Make-Befehle

Für eine vereinfachte Bedienung stehen folgende Make-Targets zur Verfügung:

| Befehl            | Funktion                          |
|-------------------|-----------------------------------|
| `make docker-up`  | Alle Container starten            |
| `make test`       | Tests in Docker ausführen         |
| `make docker-down`| Alle Container stoppen            |

## Sprachversionen

| Sprache  | URL-Pfad | Beispiel                          |
|----------|----------|-----------------------------------|
| Deutsch  | `/de/`   | `http://localhost:8080/de/`       |
| Englisch | `/en/`   | `http://localhost:8080/en/`       |

\newpage

# Brand Design — Umsetzung auf der Website {#brand-design}

Die Gestaltung der Website folgt konsequent dem im Vorfeld definierten Brand Book des Projekts GreenSport Graubünden. Dieses Kapitel dokumentiert die Umsetzung der Markenrichtlinien auf der Website.

## Farbpalette

Die Farbpalette wurde vollständig aus dem Brand Book übernommen und im gesamten Projekt — Website wie auch PDF-Deliverables — konsistent angewendet.

### Primärfarben

| Farbe      | Hex-Code  | Verwendung                                      |
|------------|-----------|------------------------------------------------|
| Primary    | `#2D6A4F` | Header, Call-to-Action-Buttons, aktive Zustände |
| Secondary  | `#264653` | Footer, Hero-Overlays, sekundäre Buttons        |
| Accent     | `#E9C46A` | Highlights, Badges, Green-Score-Indikatoren     |

### Neutrale Farben

| Farbe       | Hex-Code  | Verwendung                      |
|-------------|-----------|--------------------------------|
| Background  | `#F8F9FA` | Seitenhintergrund              |
| Text        | `#1A1A2E` | Fliesstext, Überschriften      |

Die Primärfarbe `#2D6A4F` (ein sattes Waldgrün) transportiert die zentrale Markenbotschaft — Nachhaltigkeit und Naturverbundenheit — und wird als dominanter Farbton im Header, in Buttons und bei interaktiven Elementen eingesetzt. Die Sekundärfarbe `#264653` (dunkles Petrol) findet im Footer und bei Overlays Anwendung und schafft einen professionellen Kontrast. Die Akzentfarbe `#E9C46A` (warmes Gold) wird gezielt für Hervorhebungen, Bewertungselemente und den Green Score verwendet.

## Typografie

Für die gesamte Website wird die Schriftfamilie **Inter** eingesetzt — sowohl für Überschriften als auch für den Fliesstext. Inter ist eine humanistische Sans-Serif-Schrift, die für Bildschirmdarstellungen optimiert wurde und sich durch hohe Lesbarkeit bei verschiedenen Grössen auszeichnet.

Die Schriftgrössenhierarchie folgt einem konsistenten System:

- **H1:** Seitentitel (2.5 rem)
- **H2:** Abschnittstitel (2 rem)
- **H3:** Unterabschnitte (1.5 rem)
- **Body:** Fliesstext (1 rem / 16px)
- **Small:** Fussnoten, Metadaten (0.875 rem)

## Komponenten

Die UI-Komponenten der Website folgen einheitlichen Gestaltungsprinzipien:

- **Karten (Cards):** Abgerundete Ecken (`border-radius: 0.5rem`), dezenter Schatten, weisser Hintergrund. Werden für Event-Übersichten, News-Artikel und Galerie-Elemente eingesetzt.
- **Buttons:** Primäre Buttons in `#2D6A4F` mit weisser Schrift, sekundäre Buttons mit Rahmen. Hover-Effekte mit sanfter Abdunklung.
- **Navigation:** Horizontale Desktop-Navigation mit Hover-Unterstrichen, mobiles Hamburger-Menü mit Slide-In-Effekt.

## Datenvisualisierung

Die Diagramme auf der Daten-Seite verwenden eine Farbserie, die direkt aus der Markenfarbpalette abgeleitet ist:

1. `#2D6A4F` — Primär (erste Datenserie)
2. `#264653` — Sekundär (zweite Datenserie)
3. `#E9C46A` — Akzent (dritte Datenserie)
4. `#52B788` — Hellgrün (vierte Datenserie)
5. `#A7C957` — Limettengrün (fünfte Datenserie)

Diese Abstufung gewährleistet sowohl visuelle Kohärenz mit der Marke als auch ausreichenden Kontrast für die Lesbarkeit der Diagramme.

## Konsistenz über alle Deliverables

Ein besonderes Augenmerk wurde auf die Konsistenz des Erscheinungsbilds über alle Projektartefakte gelegt. Die PDF-Deliverables (A–D) verwenden das Eisvogel-Template für LaTeX mit denselben Markenfarben:

- Titelseite: Hintergrund in `#2D6A4F`
- Links und URLs: Ebenfalls in `#2D6A4F`
- Header/Footer: Einheitliche Projektbezeichnung

Dadurch entsteht ein durchgängiges visuelles Erlebnis von der Website bis hin zu den gedruckten Dokumenten.

\newpage

# Change Management {#change-management}

Im Verlauf der Umsetzung ergaben sich gegenüber der ursprünglichen Spezifikation (Deliverable B) einige Abweichungen. Diese werden im Folgenden transparent dokumentiert, begründet und hinsichtlich ihrer Auswirkungen bewertet.

## Dokumentierte Änderungen

| Nr. | Änderung | Grund | Auswirkung |
|-----|----------|-------|------------|
| 1 | Foto-Platzhalter statt echter Fotografien | Urheberrechtliche Bedenken im Rahmen eines akademischen Projekts; kein Budget für Stockfotos | Visuelle Darstellung eingeschränkt, Konzept und Layout bleiben vollständig erkennbar |
| 2 | Chart.js statt D3.js für Datenvisualisierungen | Einfachere Integration mit dem Astro-Framework; Chart.js deckt die Anforderungen vollständig ab | Geringere Flexibilität bei hochgradig individualisierten Visualisierungen, deutlich schnellere Entwicklung |
| 3 | CSS-only Lightbox statt JavaScript-Bibliothek | Minimaler JavaScript-Footprint, passend zum Astro-Konzept der „Zero JS by Default"-Architektur | Einfachere Interaktion mit weniger Features, aber bessere Performance |
| 4 | Keine interaktive Karte auf der Kontaktseite | Datenschutzbedenken bezüglich Google Maps (DSGVO); statische Website ohne Backend für Proxy | Standortinformation wird textbasiert dargestellt |
| 5 | Video-Platzhalter statt eingebetteter Videos | Kein eigenes Videomaterial verfügbar; externe Videos würden Datenschutzfragen aufwerfen | Struktur demonstriert das Integrationskonzept, ohne funktionale Videos |

## Lessons Learned

Die Durchführung des Projekts hat zu folgenden Erkenntnissen geführt, die für zukünftige Vorhaben von Bedeutung sind:

1. **Mobile-First-Entwicklung bewährt sich:** Durch den konsequenten Mobile-First-Ansatz traten kaum responsive Darstellungsprobleme auf. Die nachträgliche Anpassung für grössere Bildschirme gestaltete sich unkompliziert.

2. **Astros Zero-JS-Architektur vereinfacht das Deployment:** Da die Website rein statisch generiert wird, reduziert sich die Docker-Konfiguration auf einen einfachen Nginx-Container. Es sind keine Node.js-Prozesse zur Laufzeit erforderlich.

3. **HERMES-Methodik bietet Struktur auch für kleine Projekte:** Die Anwendung der HERMES-Projektmanagement-Methodik erwies sich auch im Rahmen eines Einzelprojekts als nützlich. Insbesondere die Phasengliederung und die definierten Deliverables sorgten für eine klare Strukturierung.

4. **Frühzeitig erstelltes Brand Book verhindert Inkonsistenzen:** Die Definition der Markenrichtlinien vor Beginn der Implementierung stellte sicher, dass Website und Druckdokumente ein einheitliches Erscheinungsbild aufweisen.

5. **Zweisprachiger Content erfordert Disziplin:** Die Pflege der inhaltlichen Parität zwischen deutscher und englischer Version ist eine fortlaufende Aufgabe, die systematisch angegangen werden muss.

\newpage

# HERMES Abschlussdokumentation {#hermes-abschluss}

## Testbericht (HERM-08) {#testbericht}

### Testkategorien

Die automatisierten Tests der Website sind in fünf Kategorien unterteilt:

| Kategorie | Beschreibung | Anzahl Testfälle |
|-----------|-------------|-----------------|
| TEST-01: Seitenladung | Prüfung aller DE- und EN-Seiten auf korrektes Laden | 17 |
| TEST-02: Navigation | Header-Links, Logo-Link, Footer-Links | 3 |
| TEST-03: Responsives Design | Mobile, Tablet, Desktop — Layout und Overflow | 11 |
| TEST-04: Zweisprachigkeit | Spracherkennung, Sprachwechsel, HTML-Attribute | 6 |
| TEST-05: Docker-Integration | Container-Start, Test-Ausführung | 3 |
| **Total** | | **40** |

### Testumgebung

| Komponente        | Details                                        |
|-------------------|------------------------------------------------|
| Runtime           | Docker Compose                                 |
| Test-Framework    | Playwright v1.58.x                             |
| Browser           | Chromium (headless)                            |
| Website           | Astro SSG, ausgeliefert via Nginx (Port 8080)  |
| Test-Image        | mcr.microsoft.com/playwright:v1.52.0-noble     |

### Ergebnis

Die vollständige Auflistung aller 40 Testfälle mit Erwartungen und Ergebnissen befindet sich im separaten Dokument `project-management/testbericht.md`. Die Tests sind so konzipiert, dass sie bei jedem Build-Vorgang automatisiert ausgeführt werden können (`make test` bzw. `docker compose run --rm tests`).

## Betriebshandbuch (HERM-09) {#betriebshandbuch}

### Systemanforderungen

| Anforderung        | Minimum                    |
|--------------------|----------------------------|
| Betriebssystem     | Windows 10+, macOS 12+, Linux (Ubuntu 20.04+) |
| Docker             | Docker Desktop 4.x oder Docker Engine 24+      |
| Docker Compose     | v2.x (in Docker Desktop enthalten)             |
| Arbeitsspeicher    | 2 GB frei                                       |
| Festplatte         | 500 MB frei                                     |
| Netzwerk           | Port 8080 verfügbar                             |

### Installation

```bash
# 1. Repository klonen
git clone https://github.com/ericr-stein/FloProject.git
cd FloProject

# 2. Website starten
docker compose up -d website

# 3. Prüfen, ob der Container läuft
docker compose ps
```

### Start und Stopp

| Aktion              | Befehl                          |
|---------------------|---------------------------------|
| Website starten     | `docker compose up -d website`  |
| Website stoppen     | `docker compose down`           |
| Logs anzeigen       | `docker compose logs website`   |
| Status prüfen       | `docker compose ps`             |
| Tests ausführen     | `docker compose run --rm tests` |

### Fehlerbehebung

| Problem | Lösung |
|---------|--------|
| Port 8080 belegt | Anderen Port verwenden: `docker compose up -d` und in `docker-compose.yml` den Port anpassen (z.B. `8081:80`) |
| Docker nicht gestartet | Docker Desktop starten oder `sudo systemctl start docker` |
| Container startet nicht | `docker compose logs website` prüfen; ggf. `docker compose down` und erneut starten |
| Veraltete Version | `git pull && docker compose build --no-cache website && docker compose up -d website` |

### Update-Prozess

```bash
# 1. Aktuelle Version stoppen
docker compose down

# 2. Neueste Version holen
git pull origin main

# 3. Container neu bauen und starten
docker compose build --no-cache website
docker compose up -d website
```

## Abnahmebericht (HERM-10) {#abnahmebericht}

### Funktionale Anforderungen

| Nr. | Anforderung | Status |
|-----|------------|--------|
| FA-01 | Startseite mit Projektübersicht | Erfüllt |
| FA-02 | Über-uns-Seite mit Projektbeschreibung | Erfüllt |
| FA-03 | News-Seite mit Artikeln | Erfüllt |
| FA-04 | Events-Seite mit Veranstaltungsübersicht | Erfüllt |
| FA-05 | Galerie mit Bilddarstellung | Erfüllt |
| FA-06 | Daten-Seite mit interaktiven Diagrammen | Erfüllt |
| FA-07 | Kontaktseite mit Informationen | Erfüllt |
| FA-08 | Impressum und Datenschutzerklärung | Erfüllt |
| FA-09 | Zweisprachigkeit (DE/EN) | Erfüllt |
| FA-10 | Responsive Design (Mobile/Tablet/Desktop) | Erfüllt |

### Nicht-funktionale Anforderungen

| Nr. | Anforderung | Status |
|-----|------------|--------|
| NFA-01 | Ladezeit unter 3 Sekunden | Erfüllt (statische Seite) |
| NFA-02 | Docker-basiertes Deployment | Erfüllt |
| NFA-03 | Barrierefreie Grundstruktur (semantisches HTML) | Erfüllt |
| NFA-04 | Konsistentes Brand Design | Erfüllt |
| NFA-05 | Automatisierte Tests | Erfüllt (40 Testfälle) |

### Abnahmeempfehlung

Auf Basis der durchgeführten Tests (40 Testfälle in 5 Kategorien), der Überprüfung aller funktionalen und nicht-funktionalen Anforderungen sowie der Begutachtung des Brand Designs wird die **Abnahme der Website empfohlen**. Sämtliche im Deliverable B definierten Kernanforderungen wurden umgesetzt. Die dokumentierten Abweichungen (siehe Kapitel 4) sind nachvollziehbar begründet und beeinträchtigen die Gesamtfunktionalität nicht.

\newpage

# Anhang {#anhang}

## Projektstruktur

```
FloProject/
├── brand/                  # Brand Book und Assets
├── deliverables/           # Deliverables A–D (Markdown-Quellen)
├── docker-compose.yml      # Container-Orchestrierung
├── Makefile                # Build-Automatisierung
├── output/                 # Generierte PDFs
├── project-management/     # HERMES-Dokumente
├── templates/              # Pandoc-Templates und Metadaten
├── tests/                  # Playwright-Testsuites
└── website/                # Astro-Quellcode der Website
```

## Verwendete Technologien

| Technologie | Version | Zweck |
|-------------|---------|-------|
| Astro | 5.x | Static Site Generator |
| Tailwind CSS | 4.x | Utility-First CSS Framework |
| Chart.js | 4.x | Datenvisualisierung |
| Nginx | 1.27-alpine | Webserver (Produktion) |
| Docker Compose | v2 | Container-Orchestrierung |
| Playwright | 1.58.x | End-to-End-Testing |
| Pandoc + Eisvogel | — | PDF-Generierung der Deliverables |

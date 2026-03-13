# Lösungsarchitektur (HERMES HERM-04)

> GreenSport Graubünden — Architekturübersicht

---

## Dokumentreferenz

Die vollständige Lösungsarchitektur ist in **Deliverable B — Spezifikation**, Kapitel «Funktionen und Technik», Abschnitt «Lösungsarchitektur (HERMES HERM-04)» dokumentiert. Das vorliegende Dokument fasst die wesentlichen Architekturentscheide zusammen.

## Architekturansatz

GreenSport Graubünden wird als **statische Website** realisiert. Der Ansatz folgt dem Prinzip der maximalen Einfachheit bei minimaler Angriffsfläche: Sämtliche Inhalte werden zur Build-Zeit in statisches HTML, CSS und JavaScript kompiliert und über einen nginx-Webserver ausgeliefert.

## Architekturübersicht

```
Astro-Quellcode → npm run build → dist/ (statisches HTML/CSS/JS)
    ↓
Docker Multi-Stage Build (node:22-alpine → nginx:alpine)
    ↓
Docker Container (Port 8080) → Browser des Nutzenden
```

## Technologie-Stack

| Technologie | Version | Rolle |
|---|---|---|
| Astro | 5.x | Static Site Generator |
| Tailwind CSS | 4.x | Utility-First CSS Framework |
| Chart.js | 4.x | Datenvisualisierungen (Island Components) |
| TypeScript | 5.x | Typsicherheit |
| Node.js | 22 LTS | Build-Umgebung |
| Docker | 27.x | Containerisierung |
| nginx | 1.27 (alpine) | Webserver |
| Playwright | 1.49 | End-to-End-Tests |

## Komponentenstruktur

Die Astro-Applikation gliedert sich in:

- **Layouts:** BaseLayout (HTML-Grundgerüst), PageLayout (Header/Footer)
- **Komponenten:** Header, Footer, LanguageSwitcher, Chart-Islands, Gallery, UI-Elemente
- **Content Collections:** Blog-Artikel und Events als Markdown mit Frontmatter-Schema
- **i18n:** Sprachspezifische Routen (/de/, /en/) mit JSON-String-Dateien
- **Styles:** Tailwind-Basis mit Brand-CSS-Custom-Properties

## Deployment

- Einzelner Docker-Container via Docker Compose
- Multi-Stage-Build für minimale Image-Grösse (< 50 MB)
- nginx mit Security Headers (CSP, HSTS, X-Frame-Options)
- Health Check alle 30 Sekunden
- Restart-Policy: `unless-stopped`

## Sicherheit

- Kein Backend, keine Datenbank → minimale Angriffsfläche
- HTTPS-Erzwingung
- Keine Speicherung personenbezogener Daten
- Regelmässige Updates des nginx-Basis-Images

---

*Verweis: Deliverable B — Spezifikation, Kapitel «Funktionen und Technik»*

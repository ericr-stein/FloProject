# Testkonzept (HERMES HERM-05)

> GreenSport Graubünden — Teststrategie und Abnahmekriterien

---

## Dokumentreferenz

Das vollständige Testkonzept ist in **Deliverable B — Spezifikation**, Kapitel «Projektsteuerung und Betrieb», Abschnitte «Testkonzept» und «Abnahmekriterien» dokumentiert. Das vorliegende Dokument fasst die Teststrategie zusammen.

## Teststufen

Das Qualitätssicherungskonzept umfasst vier Teststufen:

### 1. Build-Validierung

- **Was:** Astro-Build-Prozess (`npm run build`)
- **Prüft:** Syntaxfehler, fehlende Imports, Frontmatter-Schema-Validierung
- **Wann:** Bei jedem Commit

### 2. Container-Integrationstests

- **Was:** Docker-Container-Funktionalität nach Build
- **Prüft:** HTTP 200 auf Port 8080, Startup-Zeit < 10s, Security Headers
- **Wann:** Nach jedem Docker-Build

### 3. End-to-End-Tests (Playwright)

- **Was:** Automatisierte Browser-Tests
- **Prüft:**
  - Seitenladung aller 9 Seiten (HTTP 200, korrekte Titel)
  - Navigation (6 Hauptlinks)
  - Responsive Layout (Mobile 375px, Tablet 768px, Desktop 1280px)
  - Zweisprachigkeit (DE/EN für alle Seiten, Sprachwechsler)
  - Datenvisualisierungen (Chart-Rendering, Tooltips)
  - Galerie (Lightbox, Tastaturnavigation)
  - Barrierefreiheit (axe-core-Audit)
- **Wann:** Vor jedem Release

### 4. Manuelle Abnahmetests

- **Was:** Visuelle und inhaltliche Prüfung
- **Prüft:** Wireframe-Konformität, Textqualität, Cross-Browser (Chrome, Firefox, Safari), Lighthouse-Audit
- **Wann:** Vor Abnahme

## Abnahmekriterien

### Funktional

| Nr. | Kriterium |
|---|---|
| AK-01 | Alle 9 Seiten in DE und EN aufrufbar |
| AK-02 | Sprachwechsler funktioniert korrekt |
| AK-03 | Navigation auf Mobile, Tablet, Desktop |
| AK-04–05 | CO₂- und Green-Score-Diagramme korrekt |
| AK-06 | Anreise-Rechner liefert plausible Ergebnisse |
| AK-07 | Galerie-Lightbox mit Tastatur und Maus |
| AK-08–09 | Blog chronologisch, Events filterbar |

### Technisch

| Nr. | Kriterium | Zielwert |
|---|---|---|
| AK-10 | Docker-Container startet | healthy |
| AK-11–14 | Lighthouse Scores | ≥ 90 (alle Kategorien) |
| AK-15 | WCAG 2.1 AA | 0 axe-core Violations |
| AK-16 | Playwright-Tests | 100 % Pass-Rate |
| AK-17 | Build fehlerfrei | Exit-Code 0 |

## Test-Umgebung

Alle Tests werden in der Docker-Compose-Umgebung ausgeführt, die der Produktionsumgebung entspricht.

---

*Verweis: Deliverable B — Spezifikation, Kapitel «Projektsteuerung und Betrieb»*

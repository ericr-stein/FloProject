# Abnahmebericht — GreenSport Graubünden Website

| Feld            | Wert                          |
|-----------------|-------------------------------|
| **Projekt**     | GreenSport Graubünden         |
| **Dokument**    | HERM-10 Abnahmebericht        |
| **Datum**       | 2026-03-13                    |
| **Autor**       | Eric Rauchentein              |
| **Version**     | 1.0                           |

---

## 1. Gegenstand der Abnahme

Gegenstand der Abnahme ist die im Rahmen des Moduls WINF1 entwickelte Website **GreenSport Graubünden** — eine zweisprachige Webplattform (DE/EN) zur Förderung der Nachhaltigkeit im alpinen Sportbereich des Kantons Graubünden.

## 2. Abnahmekriterien

Die Abnahmekriterien leiten sich aus der Spezifikation (Deliverable B) sowie dem Testkonzept ab.

## 3. Prüfung der funktionalen Anforderungen

| Nr.   | Anforderung                                | Soll                              | Ist          | Status   |
|-------|--------------------------------------------|-----------------------------------|--------------|----------|
| FA-01 | Startseite mit Projektübersicht            | Hero, Features, CTA               | Umgesetzt    | Erfüllt  |
| FA-02 | Über-uns-Seite                             | Projektbeschreibung, Team          | Umgesetzt    | Erfüllt  |
| FA-03 | News-Seite mit Artikeln                    | Artikelübersicht, Detailseiten     | Umgesetzt    | Erfüllt  |
| FA-04 | Events-Seite                               | Veranstaltungsübersicht            | Umgesetzt    | Erfüllt  |
| FA-05 | Galerie mit Bilddarstellung                | Grid-Layout, Lightbox              | Umgesetzt    | Erfüllt  |
| FA-06 | Daten-Seite mit Diagrammen                 | Interaktive Chart.js-Diagramme     | Umgesetzt    | Erfüllt  |
| FA-07 | Kontaktseite                               | Kontaktinformationen               | Umgesetzt    | Erfüllt  |
| FA-08 | Impressum und Datenschutz                  | Rechtliche Pflichtseiten           | Umgesetzt    | Erfüllt  |
| FA-09 | Zweisprachigkeit (DE/EN)                   | Alle Seiten in beiden Sprachen     | Umgesetzt    | Erfüllt  |
| FA-10 | Responsive Design                          | Mobile, Tablet, Desktop            | Umgesetzt    | Erfüllt  |

## 4. Prüfung der nicht-funktionalen Anforderungen

| Nr.    | Anforderung                          | Soll                          | Ist                                | Status   |
|--------|--------------------------------------|-------------------------------|------------------------------------|----------|
| NFA-01 | Ladezeit < 3 Sekunden               | Schnelle Seitenladung         | Statische Seite, < 1s              | Erfüllt  |
| NFA-02 | Docker-basiertes Deployment          | `docker compose up`           | Funktioniert                       | Erfüllt  |
| NFA-03 | Semantisches HTML                    | Barrierefreie Grundstruktur   | Header, Nav, Main, Footer          | Erfüllt  |
| NFA-04 | Brand Design Konsistenz              | Gemäss Brand Book             | Farben, Typografie, Komponenten    | Erfüllt  |
| NFA-05 | Automatisierte Tests                 | Reproduzierbare Testausführung| 40 Testfälle mit Playwright        | Erfüllt  |

## 5. Testergebnisse

Die Website wurde mit 40 automatisierten Testfällen in folgenden Kategorien geprüft:

| Kategorie              | Testfälle | Beschreibung                               |
|------------------------|-----------|--------------------------------------------|
| Seitenladung           | 17        | Alle DE- und EN-Seiten laden korrekt       |
| Navigation             | 3         | Header, Logo, Footer-Links funktionieren   |
| Responsives Design     | 11        | Mobile, Tablet, Desktop ohne Overflow      |
| Zweisprachigkeit       | 6         | Spracherkennung und Sprachwechsel          |
| Docker-Integration     | 3         | Container-Start und Test-Ausführung        |

Testumgebung: Playwright v1.58.x, Chromium (headless), Docker Compose.

Der vollständige Testbericht liegt unter `project-management/testbericht.md`.

## 6. Abweichungen

Folgende Abweichungen gegenüber der ursprünglichen Spezifikation wurden dokumentiert und im Change Management (Deliverable D, Kapitel 4) begründet:

1. Foto-Platzhalter statt echter Fotografien
2. Chart.js statt D3.js
3. CSS-only Lightbox statt JavaScript-Bibliothek
4. Keine interaktive Karte auf der Kontaktseite
5. Video-Platzhalter statt eingebetteter Videos

Keine dieser Abweichungen beeinträchtigt die Kernfunktionalität der Website.

## 7. Empfehlung

Auf Grundlage der durchgeführten Prüfungen wird festgestellt:

- **Alle funktionalen Anforderungen (FA-01 bis FA-10)** sind erfüllt.
- **Alle nicht-funktionalen Anforderungen (NFA-01 bis NFA-05)** sind erfüllt.
- Die dokumentierten Abweichungen sind nachvollziehbar begründet.
- Das Brand Design wurde konsistent auf Website und Deliverables angewendet.

**Die Abnahme der Website wird hiermit empfohlen.**

---

Ort, Datum: Chur, 13. März 2026

Projektverantwortlicher: Eric Rauchentein

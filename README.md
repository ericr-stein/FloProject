# GreenSport Graubünden

Webapplikation zur Förderung nachhaltiger Sportangebote im Kanton Graubünden.
Dieses Projekt entsteht im Rahmen des Moduls WINF1 an der Fachhochschule Graubünden.

---

## Projektstruktur

| Ordner | Inhalt |
|---|---|
| [`deliverables/A-thema/`](deliverables/A-thema/) | Deliverable A — Thema & Recherche |
| [`deliverables/B-spezifikation/`](deliverables/B-spezifikation/) | Deliverable B — Spezifikation |
| [`deliverables/C-wireframes/`](deliverables/C-wireframes/) | Deliverable C — Wireframes |
| [`deliverables/D-website-docs/`](deliverables/D-website-docs/) | Deliverable D — Website-Dokumentation |
| [`website/`](website/) | Astro-Website (Frontend) |
| [`brand/`](brand/) | Brand Book & visuelle Identität |
| [`project-management/`](project-management/) | HERMES-Artefakte & Projektplanung |
| [`templates/`](templates/) | Pandoc/Eisvogel-Vorlagen für PDF-Erzeugung |
| [`tests/`](tests/) | Playwright-Tests |
| `output/` | Generierte PDFs (nicht im Git) |

## Schnellstart

```bash
# Alle PDFs bauen
make pdfs

# Einzelnes Deliverable bauen
make pdf-a

# Website starten
make website

# Tests ausführen
make test

# Aufräumen
make clean
```

## Technologie-Stack

- **Dokumente:** Pandoc + Eisvogel + XeLaTeX
- **Website:** Astro
- **Tests:** Playwright
- **Projektmethode:** HERMES

## Team

Erstellt von Studierenden der FH Graubünden, Studiengang Wirtschaftsinformatik.

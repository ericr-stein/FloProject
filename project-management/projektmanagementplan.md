# Projektmanagementplan (HERMES HERM-06)

> GreenSport Graubünden — Zeitplan, Meilensteine und Ressourcen

---

## Dokumentreferenz

Der vollständige Projektmanagementplan ist in **Deliverable B — Spezifikation**, Kapitel «Projektsteuerung und Betrieb» dokumentiert. Das vorliegende Dokument fasst Zeitplan, Meilensteine und Verantwortlichkeiten zusammen.

## HERMES-Phasen und Meilensteine

| Phase | Meilenstein | Datum | Deliverable |
|---|---|---|---|
| **Initialisierung** | Projektthema definiert und genehmigt | 16.03.2026 | A — Themadefinition |
| **Konzept** | Spezifikation fertiggestellt | 13.04.2026 | B — Spezifikation |
| **Realisierung** | Wireframes + Website implementiert | 27.04.–18.05.2026 | C — Wireframes, D — Website |
| **Einführung** | Go-Live und Projektabschluss | 18.05.2026 | D — Dokumentation |

## Projektplan (Gantt-Übersicht)

```
Arbeitspaket                  KW12  KW13  KW14  KW15  KW16  KW17  KW18  KW19  KW20  KW21
                              16.03 23.03 30.03 06.04 13.04 20.04 27.04 04.05 11.05 18.05
──────────────────────────── ───── ───── ───── ───── ───── ───── ───── ───── ───── ─────
Initialisierung
  Themadefinition (Del. A)     ████
  Projektinitialisierung       ████

Konzept
  Recherche & Analyse                ████  ████
  Anforderungsspezifikation          ████  ████  ████
  Lösungsarchitektur                       ████  ████
  Brand Book & Design                      ████  ████
  Spezifikation (Del. B)                         ████  ▲M2

Realisierung
  Wireframes (Del. C)                                   ████  ████
  Astro-Setup & Struktur                                      ████
  Content-Integration                                         ████  ████
  Datenvisualisierung                                               ████  ████
  i18n & Übersetzung                                                ████  ████
  Docker & Deployment                                                     ████
  Playwright-Tests                                                        ████

Einführung
  Dokumentation (Del. D)                                                        ████
  Go-Live & Abnahme                                                             ▲M4
```

## Arbeitspakete

| AP-Nr. | Arbeitspaket | Aufwand | Phase |
|---|---|---|---|
| AP-01 | Themadefinition und PIA | 4h | Initialisierung |
| AP-02 | Recherche und Zielgruppenanalyse | 8h | Konzept |
| AP-03 | Anforderungsspezifikation | 12h | Konzept |
| AP-04 | Lösungsarchitektur und Technik | 6h | Konzept |
| AP-05 | Brand Book und Design-Richtlinien | 8h | Konzept |
| AP-06 | Spezifikationsdokument (Del. B) | 10h | Konzept |
| AP-07 | Wireframes (Del. C) | 12h | Realisierung |
| AP-08 | Astro-Projekt-Setup | 6h | Realisierung |
| AP-09 | Seitenimplementierung | 20h | Realisierung |
| AP-10 | Datenvisualisierungen (Chart.js) | 16h | Realisierung |
| AP-11 | i18n und Übersetzungen | 8h | Realisierung |
| AP-12 | Docker-Setup und Deployment | 4h | Realisierung |
| AP-13 | Playwright-Tests | 8h | Realisierung |
| AP-14 | Dokumentation (Del. D) | 6h | Einführung |
| AP-15 | Go-Live und Abnahme | 2h | Einführung |
| | **Total** | **130h** | |

## Projektorganisation

| Rolle | Person | Verantwortung |
|---|---|---|
| Projektleiter | Eric Rauchenstein | Planung, Umsetzung, Dokumentation, QS |
| Dozent / Auftraggeber | Prof. Oliver Engelbrecht | Themenfreigabe, Reviews, Abnahme |

## RACI-Matrix

| Aktivität | E. Rauchenstein | Prof. Engelbrecht |
|---|---|---|
| Themadefinition | R, A | C, I |
| Anforderungserhebung | R, A | C |
| Spezifikation | R, A | I |
| Wireframes | R, A | I |
| Website-Entwicklung | R, A | I |
| Testing | R, A | I |
| Dokumentation | R, A | I |
| Abnahme | I | R, A |

*R = Responsible, A = Accountable, C = Consulted, I = Informed*

---

*Verweis: Deliverable B — Spezifikation, Kapitel «Projektsteuerung und Betrieb»*

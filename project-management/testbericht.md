# Testbericht — GreenSport Graubünden Website

| Feld            | Wert                          |
|-----------------|-------------------------------|
| **Projekt**     | GreenSport Graubünden         |
| **Phase**       | 11 — Testing & Docker         |
| **Datum**       | 2026-03-13                    |
| **Autor**       | Eric Rauchentein              |
| **Version**     | 1.0                           |

---

## 1. Testziel

Sicherstellung, dass die GreenSport-Graubünden-Website in allen Bereichen korrekt funktioniert:

- Alle Seiten (DE und EN) laden fehlerfrei
- Navigation funktioniert über Header, Footer und Logo
- Responsives Design auf Mobile, Tablet und Desktop
- Zweisprachigkeit (DE/EN) inkl. Sprachwechsel

## 2. Testumgebung

| Komponente       | Details                                        |
|------------------|------------------------------------------------|
| **Runtime**      | Docker Compose                                 |
| **Test-Framework** | Playwright v1.58.x                           |
| **Browser**      | Chromium (headless)                            |
| **Website**      | Astro SSG, ausgeliefert via Nginx (Port 8080)  |
| **Test-Image**   | mcr.microsoft.com/playwright:v1.52.0-noble     |

## 3. Testfälle und Ergebnisse

### TEST-01: Seitenladung

| # | Testfall                          | Erwartung                  | Ergebnis |
|---|-----------------------------------|----------------------------|----------|
| 1 | Root `/` lädt                     | Status < 400, Header sichtbar | ⬜       |
| 2 | DE Home `/de/`                    | Status < 400, Header sichtbar | ⬜       |
| 3 | DE Über uns `/de/ueber-uns/`      | Status < 400, Header sichtbar | ⬜       |
| 4 | DE News `/de/news/`               | Status < 400, Header sichtbar | ⬜       |
| 5 | DE Events `/de/events/`           | Status < 400, Header sichtbar | ⬜       |
| 6 | DE Galerie `/de/galerie/`         | Status < 400, Header sichtbar | ⬜       |
| 7 | DE Daten `/de/daten/`             | Status < 400, Header sichtbar | ⬜       |
| 8 | DE Kontakt `/de/kontakt/`         | Status < 400, Header sichtbar | ⬜       |
| 9 | DE Impressum `/de/impressum/`     | Status < 400, Header sichtbar | ⬜       |
|10 | DE Datenschutz `/de/datenschutz/` | Status < 400, Header sichtbar | ⬜       |
|11 | EN Home `/en/`                    | Status < 400, Header sichtbar | ⬜       |
|12 | EN About `/en/about/`             | Status < 400, Header sichtbar | ⬜       |
|13 | EN News `/en/news/`               | Status < 400, Header sichtbar | ⬜       |
|14 | EN Events `/en/events/`           | Status < 400, Header sichtbar | ⬜       |
|15 | EN Gallery `/en/gallery/`         | Status < 400, Header sichtbar | ⬜       |
|16 | EN Data `/en/data/`               | Status < 400, Header sichtbar | ⬜       |
|17 | EN Contact `/en/contact/`         | Status < 400, Header sichtbar | ⬜       |

### TEST-02: Navigation

| # | Testfall                          | Erwartung                      | Ergebnis |
|---|-----------------------------------|--------------------------------|----------|
| 1 | Header-Nav-Links (Desktop)        | Alle Links navigieren korrekt  | ⬜       |
| 2 | Logo verlinkt auf Home            | Klick führt zu `/de/`          | ⬜       |
| 3 | Footer-Links                      | Alle Links navigieren korrekt  | ⬜       |

### TEST-03: Responsives Design

| # | Testfall                          | Erwartung                      | Ergebnis |
|---|-----------------------------------|--------------------------------|----------|
| 1 | Mobile (375x812): Header sichtbar | Header gerendert               | ⬜       |
| 2 | Mobile: Inhalt sichtbar           | Main-Content sichtbar          | ⬜       |
| 3 | Mobile: Kein horizontaler Overflow| scrollWidth <= clientWidth      | ⬜       |
| 4 | Tablet (768x1024): Header sichtbar| Header gerendert               | ⬜       |
| 5 | Tablet: Inhalt sichtbar           | Main-Content sichtbar          | ⬜       |
| 6 | Tablet: Kein horizontaler Overflow| scrollWidth <= clientWidth      | ⬜       |
| 7 | Desktop (1280x800): Header sichtbar| Header gerendert              | ⬜       |
| 8 | Desktop: Inhalt sichtbar          | Main-Content sichtbar          | ⬜       |
| 9 | Desktop: Kein horizontaler Overflow| scrollWidth <= clientWidth     | ⬜       |
|10 | Mobile: Hamburger-Menü vorhanden  | Button sichtbar                | ⬜       |
|11 | Desktop: Horizontale Nav sichtbar | Nav-Element sichtbar           | ⬜       |

### TEST-04: Zweisprachigkeit (DE/EN)

| # | Testfall                          | Erwartung                      | Ergebnis |
|---|-----------------------------------|--------------------------------|----------|
| 1 | DE-Seite enthält deutschen Text   | Deutsche Begriffe vorhanden    | ⬜       |
| 2 | EN-Seite enthält englischen Text  | Englische Begriffe vorhanden   | ⬜       |
| 3 | DE-Seite hat `lang="de"`         | HTML-Attribut korrekt          | ⬜       |
| 4 | EN-Seite hat `lang="en"`         | HTML-Attribut korrekt          | ⬜       |
| 5 | Sprachwechsel DE → EN             | Navigation zu `/en/...`        | ⬜       |
| 6 | Sprachwechsel EN → DE             | Navigation zu `/de/...`        | ⬜       |

### TEST-05: Docker-Integration

| # | Testfall                          | Erwartung                      | Ergebnis |
|---|-----------------------------------|--------------------------------|----------|
| 1 | Website-Container startet         | Healthcheck bestanden          | ⬜       |
| 2 | Test-Container startet            | Playwright läuft               | ⬜       |
| 3 | Tests laufen gegen Website        | Alle Tests bestehen            | ⬜       |

## 4. Zusammenfassung

| Metrik               | Wert     |
|----------------------|----------|
| **Testfälle gesamt** | 40       |
| **Bestanden**        | ⬜ / 40  |
| **Fehlgeschlagen**   | ⬜ / 40  |
| **Testdauer**        | ⬜        |
| **Gesamtergebnis**   | ⬜        |

### Bemerkungen

_Wird nach Testdurchführung ausgefüllt._

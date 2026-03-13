# Requirements: FloProject

**Defined:** 2026-03-13
**Core Value:** Deliver a professional, cohesive set of deliverables demonstrating mastery of the full web project lifecycle with a creative sports topic.

## v1 Requirements

Requirements for project completion. Each maps to roadmap phases.

### Infrastructure

- [x] **INFRA-01**: PDF pipeline (Pandoc + Eisvogel + XeLaTeX) produces German academic documents with correct umlauts, page numbers, ToC, and professional formatting
- [x] **INFRA-02**: Git repository structured with cohesive navigation (README hub, deliverables/, website/, brand/, project-management/ directories)
- [x] **INFRA-03**: Makefile serves as command hub for building PDFs, running website, and executing tests
- [ ] **INFRA-04**: Docker multi-stage build produces a working nginx:alpine container serving the website (~15MB image)
- [ ] **INFRA-05**: Docker Compose setup allows professor to run `docker compose up` and access the site

### Brand Identity

- [ ] **BRAND-01**: Brand book defines color palette, typography, logo, spacing, and component patterns for GreenSport Graubünden
- [ ] **BRAND-02**: Brand book applied consistently across website and all PDF deliverables (Eisvogel template customized)
- [ ] **BRAND-03**: Brand book documented as a standalone reference in the repository

### Deliverable A — Thema/Beschrieb (5%, min. 2 pages, due 16.03.2026)

- [x] **DEL-A1**: Use Case / Page — Define and describe the GreenSport Graubünden use case, including goals and user value
- [x] **DEL-A2**: Rahmenbedingungen — Describe organizational, technical, and regulatory conditions influencing the use case
- [x] **DEL-A3**: Problemstellung & Lösung — Present the central problem and the planned website solution
- [ ] **DEL-A4**: Geplanter Technologie-Einsatz — Describe chosen technology (Astro, Docker, etc.) with justified rationale
- [ ] **DEL-A5**: PDF formatted in German academic tone, min. 2 DIN A4 pages, submitted as PDF

### Deliverable B — Spezifikation (20%, min. 10 pages, due 13.04.2026)

- [ ] **DEL-B1**: Projektübersicht & Ziele — Overview of starting position, goals, project scope, and key definitions
- [ ] **DEL-B2**: Strategie & Zielgruppen — Target audience analysis, positioning, communication goals, and KPIs
- [ ] **DEL-B3**: Content & Seitenstruktur — Sitemap, content plan, tonality, storytelling, multilingual approach (DE/EN)
- [ ] **DEL-B4**: Funktionen & Technik — Core functions, interactions, interfaces, CMS approach, hosting, security, SEO
- [ ] **DEL-B5**: Design & Nutzererfahrung (UX/UI) — Navigation guidelines, responsive design, accessibility, visual design principles
- [ ] **DEL-B6**: Projektsteuerung & Betrieb — HERMES milestones, timeline, responsibilities, acceptance criteria, testing, go-live, maintenance
- [ ] **DEL-B7**: PDF formatted in German academic tone, min. 10 DIN A4 pages, submitted as PDF

### Deliverable C — Wireframes (25%, min. 10 pages, due 27.04.2026)

- [ ] **DEL-C1**: Projektkontext (kurz) — Brief project context, goals, and use case description
- [ ] **DEL-C2**: Wireframes & Layout-Konzept — Wireframes for all pages showing structure, navigation, information hierarchy, and content placement (medium fidelity, annotated)
- [ ] **DEL-C3**: Nutzerführung & Interaktionskonzept — User flow descriptions, interaction design, consistent navigation, intuitive usability for stakeholders and developers
- [ ] **DEL-C4**: Zusammenfassung — Key insights and recommendations for implementation
- [ ] **DEL-C5**: PDF formatted in German academic tone, min. 10 DIN A4 pages, submitted as PDF

### Deliverable D — Website + Documentation (50%, due 18.05.2026)

- [ ] **DEL-D1**: Projektkontext (kurz) — Brief project context, goals, use case description, and target audience benefit
- [ ] **DEL-D2**: Zugang zur Website — Clear instructions for accessing the website (Docker Compose commands, URL, credentials if needed)
- [ ] **DEL-D3**: Brand Design (Brand Book) — Documentation of brand guideline implementation on website: colors, fonts, logos, design elements reflecting corporate identity
- [ ] **DEL-D4**: Change Management Dokumentation — All significant changes vs. original specification, reasons, impacts on structure/layout/functionality, and lessons learned
- [ ] **DEL-D5**: PDF formatted in German academic tone, min. 5 DIN A4 pages, submitted as PDF

### Website

- [ ] **WEB-01**: Home page with hero section, highlights, events teaser, mission statement (DE + EN)
- [ ] **WEB-02**: About page with mission, story, values, organization context (DE + EN)
- [ ] **WEB-03**: News/Blog page with article cards, date-sorted, minimum 5 articles (DE + EN)
- [ ] **WEB-04**: Events page with upcoming and past alpine sports events (DE + EN)
- [ ] **WEB-05**: Gallery/Media page with photo lightbox gallery and embedded videos (DE + EN)
- [ ] **WEB-06**: Data/Stats page with interactive sustainability data visualizations (DE + EN)
- [ ] **WEB-07**: Contact page with contact information, location, social links (DE + EN)
- [ ] **WEB-08**: Impressum and Datenschutz pages (legally required, German)
- [ ] **WEB-09**: Responsive design working on mobile, tablet, and desktop
- [ ] **WEB-10**: Language switcher (DE/EN) with smooth UX and Astro i18n routing
- [ ] **WEB-11**: Sticky navigation header with clean, accessible navigation
- [ ] **WEB-12**: Consistent brand book application across all pages

### Testing

- [ ] **TEST-01**: Playwright E2E tests verify all pages load and render correctly in Docker
- [ ] **TEST-02**: Playwright tests verify navigation works across all pages
- [ ] **TEST-03**: Playwright tests verify responsive design at mobile, tablet, desktop breakpoints
- [ ] **TEST-04**: Playwright tests verify bilingual content (DE/EN) and language switching
- [ ] **TEST-05**: Tests run inside Docker Compose alongside the website container

### HERMES Project Management

- [x] **HERM-01**: Projektinitialisierungsauftrag — Project goals, scope, constraints (embedded in Deliverable A)
- [x] **HERM-02**: Studie — Solution description and technology variant comparison (embedded in Deliverable A)
- [ ] **HERM-03**: Anforderungsspezifikation — Functional and non-functional requirements (core of Deliverable B)
- [ ] **HERM-04**: Lösungsarchitektur — Technology stack, system structure (core of Deliverable B)
- [ ] **HERM-05**: Testkonzept — Testing strategy and acceptance criteria (in Deliverable B)
- [ ] **HERM-06**: Projektmanagementplan — Timeline, milestones, resources (in Deliverable B)
- [ ] **HERM-07**: Detailspezifikation — Wireframes and detailed page specs (Deliverable C)
- [ ] **HERM-08**: Testbericht — Test execution results (in Deliverable D)
- [ ] **HERM-09**: Betriebshandbuch — Docker setup and deployment instructions (in Deliverable D)
- [ ] **HERM-10**: Abnahmebericht — Formal verification that site meets requirements (in Deliverable D)

## v2 Requirements

Deferred to future work. Only if time permits.

### Enhancements

- **ENH-01**: Dark/light theme toggle
- **ENH-02**: CI/CD pipeline via GitHub Actions
- **ENH-03**: Visual regression tests (Playwright screenshot comparison)
- **ENH-04**: Scroll-triggered animations / parallax effects
- **ENH-05**: Client-side search (Pagefind)
- **ENH-06**: Lighthouse 95+ performance score optimization

## Out of Scope

| Feature | Reason |
|---------|--------|
| Backend/database/CMS | Static content site; no dynamic data needed |
| User authentication | No requirement; massive scope creep |
| E-commerce/payments | Not relevant to this use case |
| Contact form with email | Requires backend; use mailto link |
| Real-time chat/forum | Out of scope; link to social profiles |
| WordPress/Wix integration | Explicitly excluded per project constraints |
| Mobile app | Web-only project |
| Social media feed embedding | API limits, GDPR, visual inconsistency |

## Traceability

| Requirement | Phase | Status |
|-------------|-------|--------|
| INFRA-01 | Phase 1 | Complete |
| INFRA-02 | Phase 1 | Complete |
| INFRA-03 | Phase 1 | Complete |
| INFRA-04 | Phase 8 | Pending |
| INFRA-05 | Phase 8 | Pending |
| BRAND-01 | Phase 4 | Pending |
| BRAND-02 | Phase 4 | Pending |
| BRAND-03 | Phase 4 | Pending |
| DEL-A1 | Phase 2 | Complete |
| DEL-A2 | Phase 2 | Complete |
| DEL-A3 | Phase 2 | Complete |
| DEL-A4 | Phase 3 | Pending |
| DEL-A5 | Phase 3 | Pending |
| DEL-B1 | Phase 5 | Pending |
| DEL-B2 | Phase 5 | Pending |
| DEL-B3 | Phase 5 | Pending |
| DEL-B4 | Phase 6 | Pending |
| DEL-B5 | Phase 6 | Pending |
| DEL-B6 | Phase 6 | Pending |
| DEL-B7 | Phase 6 | Pending |
| DEL-C1 | Phase 7 | Pending |
| DEL-C2 | Phase 7 | Pending |
| DEL-C3 | Phase 7 | Pending |
| DEL-C4 | Phase 8 | Pending |
| DEL-C5 | Phase 8 | Pending |
| DEL-D1 | Phase 12 | Pending |
| DEL-D2 | Phase 12 | Pending |
| DEL-D3 | Phase 12 | Pending |
| DEL-D4 | Phase 12 | Pending |
| DEL-D5 | Phase 12 | Pending |
| WEB-01 | Phase 9 | Pending |
| WEB-02 | Phase 9 | Pending |
| WEB-03 | Phase 9 | Pending |
| WEB-04 | Phase 9 | Pending |
| WEB-05 | Phase 10 | Pending |
| WEB-06 | Phase 10 | Pending |
| WEB-07 | Phase 10 | Pending |
| WEB-08 | Phase 10 | Pending |
| WEB-09 | Phase 10 | Pending |
| WEB-10 | Phase 9 | Pending |
| WEB-11 | Phase 9 | Pending |
| WEB-12 | Phase 9 | Pending |
| TEST-01 | Phase 11 | Pending |
| TEST-02 | Phase 11 | Pending |
| TEST-03 | Phase 11 | Pending |
| TEST-04 | Phase 11 | Pending |
| TEST-05 | Phase 11 | Pending |
| HERM-01 | Phase 2 | Complete |
| HERM-02 | Phase 2 | Complete |
| HERM-03 | Phase 5 | Pending |
| HERM-04 | Phase 6 | Pending |
| HERM-05 | Phase 6 | Pending |
| HERM-06 | Phase 6 | Pending |
| HERM-07 | Phase 7 | Pending |
| HERM-08 | Phase 12 | Pending |
| HERM-09 | Phase 12 | Pending |
| HERM-10 | Phase 12 | Pending |

**Coverage:**
- v1 requirements: 57 total
- Mapped to phases: 57
- Unmapped: 0

---
*Requirements defined: 2026-03-13*
*Last updated: 2026-03-13 after roadmap creation*

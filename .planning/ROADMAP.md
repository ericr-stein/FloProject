# Roadmap: FloProject

**Created:** 2026-03-13
**Granularity:** Standard
**Total v1 Requirements:** 57
**Mapped:** 57/57

---

## Phases

- [x] **Phase 1: Infrastructure & PDF Pipeline** - Establish repo structure, Makefile, and Pandoc/Eisvogel/XeLaTeX pipeline
- [ ] **Phase 2: Topic Definition (DEL-A1 to A3)** - Research GreenSport Graubunden use case, Rahmenbedingungen, and Problemstellung
- [x] **Phase 3: Technology & Submission (DEL-A4 to A5)** - Technology rationale, HERMES init artifacts, and Deliverable A PDF submission (completed 2026-03-13)
- [ ] **Phase 4: Brand Identity** - Create complete brand book with colors, typography, logo, and component patterns
- [x] **Phase 5: Specification Core (DEL-B1 to B3)** - Projektuebersicht, Strategie/Zielgruppen, and Content/Seitenstruktur (completed 2026-03-13)
- [ ] **Phase 6: Specification Technical (DEL-B4 to B7)** - Funktionen/Technik, UX/UI design, Projektsteuerung, and Deliverable B PDF submission
- [ ] **Phase 7: Wireframes & Layout (DEL-C1 to C3)** - Project context, wireframes for all pages, and user flow / interaction concept
- [ ] **Phase 8: Wireframes Completion (DEL-C4 to C5)** - Summary/recommendations, Docker skeleton, and Deliverable C PDF submission
- [ ] **Phase 9: Website Core Pages** - Home, About, News/Blog, Events pages in DE+EN with brand styling
- [ ] **Phase 10: Website Extended Pages & Features** - Gallery, Data/Stats, Contact, Impressum, responsive design, language switcher, navigation
- [ ] **Phase 11: Testing & Docker** - Playwright E2E tests, Docker multi-stage build, Docker Compose test environment
- [ ] **Phase 12: Documentation & Submission (DEL-D1 to D5)** - Website documentation PDF, HERMES closure artifacts, fresh-clone validation

---

## Phase Details

### Phase 1: Infrastructure & PDF Pipeline
**Goal**: All tooling works -- PDFs build, repo is structured, Makefile runs commands
**Depends on**: Nothing (first phase)
**Deadline context**: Must complete before Deliverable A (16.03.2026)
**Requirements**: INFRA-01, INFRA-02, INFRA-03
**Success Criteria** (what must be TRUE):
  1. Running `make pdf-a` produces a correctly formatted German PDF with umlauts, page numbers, and ToC
  2. Repository has clear directory structure (deliverables/, website/, brand/, project-management/) with a README hub
  3. Makefile commands exist for PDF building, website running, and test execution (even if website/tests are stubs)
**Plans:** 1 plan
Plans:
- [x] 01-01-PLAN.md — Verify existing infrastructure against INFRA-01/02/03 requirements

### Phase 2: Topic Definition (DEL-A1 to A3)
**Goal**: GreenSport Graubunden use case is fully defined with problem, solution, and context
**Depends on**: Phase 1
**Deadline context**: Part of Deliverable A (16.03.2026)
**Requirements**: DEL-A1, DEL-A2, DEL-A3, HERM-01, HERM-02
**Success Criteria** (what must be TRUE):
  1. Use case description clearly explains what GreenSport Graubunden is, who it serves, and why it matters
  2. Rahmenbedingungen section covers organizational (FHGR), technical (Docker/Astro), and regulatory conditions
  3. Problem statement articulates a gap in sustainable alpine sports information, and the solution addresses it concretely
  4. HERMES Projektinitialisierungsauftrag and Studie content are embedded naturally in the deliverable
**Plans:** 1 plan
Plans:
- [ ] 02-01-PLAN.md — Review existing content and close HERM-01 gaps (Ressourcenbedarf, Termine, Risiken)

### Phase 3: Technology & Submission (DEL-A4 to A5)
**Goal**: Deliverable A is complete, formatted, and submitted as PDF on Moodle
**Depends on**: Phase 2
**Deadline context**: Deliverable A due 16.03.2026 23:59 CET
**Requirements**: DEL-A4, DEL-A5
**Success Criteria** (what must be TRUE):
  1. Technology section justifies Astro, Docker, Tailwind, and Playwright choices with clear rationale
  2. Final PDF is in German academic tone, at least 2 full DIN A4 pages
  3. PDF renders correctly with professional formatting (Eisvogel template, proper headings, no broken characters)
**Plans:** 1/1 plans complete
Plans:
- [x] 03-01-PLAN.md — Review technology section, fix Lighthouse CI mention, rebuild and verify final PDF

### Phase 4: Brand Identity
**Goal**: A complete brand book exists that drives all visual decisions for website and PDFs
**Depends on**: Phase 1
**Deadline context**: Must complete before Deliverable B (13.04.2026)
**Requirements**: BRAND-01, BRAND-02, BRAND-03
**Success Criteria** (what must be TRUE):
  1. Brand book defines color palette (primary, secondary, accent, neutrals), typography (headings, body, mono), and logo variants
  2. Brand book includes spacing scale, component patterns (buttons, cards, navigation), and usage guidelines
  3. Eisvogel PDF template is customized to use brand colors and typography
  4. Brand book is documented as a standalone reference file in brand/ directory
**Plans:** 1 plan
Plans:
- [ ] 04-01-PLAN.md — Audit token sync, add accessibility/image sections, verify PDF rendering

### Phase 5: Specification Core (DEL-B1 to B3)
**Goal**: Project overview, target audience strategy, and content structure are specified in detail
**Depends on**: Phase 3, Phase 4
**Deadline context**: Part of Deliverable B (13.04.2026)
**Requirements**: DEL-B1, DEL-B2, DEL-B3, HERM-03
**Success Criteria** (what must be TRUE):
  1. Projektuebersicht defines starting position, goals, project scope, and key terminology
  2. Target audience analysis identifies primary and secondary users with personas, positioning, and measurable KPIs
  3. Sitemap and content plan cover all pages with tonality guidelines, storytelling approach, and DE/EN multilingual strategy
  4. HERMES Anforderungsspezifikation (functional and non-functional requirements) is embedded in the specification
**Plans:** 1/1 plans complete
Plans:
- [ ] 05-01-PLAN.md — Audit existing content, fix FA-012/Lighthouse inconsistencies, verify PDF build

### Phase 6: Specification Technical (DEL-B4 to B7)
**Goal**: Deliverable B is complete with technical spec, UX guidelines, project plan, and submitted as PDF
**Depends on**: Phase 5
**Deadline context**: Deliverable B due 13.04.2026 23:59 CET
**Requirements**: DEL-B4, DEL-B5, DEL-B6, DEL-B7, HERM-04, HERM-05, HERM-06
**Success Criteria** (what must be TRUE):
  1. Technical section specifies core functions, interfaces, hosting (Docker/nginx), security measures, and SEO approach
  2. UX/UI section defines navigation guidelines, responsive breakpoints, accessibility standards, and visual design principles
  3. Project management section includes HERMES milestones, timeline, responsibilities, acceptance criteria, and testing strategy
  4. Final PDF is in German academic tone, at least 10 full DIN A4 pages, with professional formatting
  5. HERMES Loesungsarchitektur, Testkonzept, and Projektmanagementplan are embedded in the deliverable
**Plans:** [To be planned]

### Phase 7: Wireframes & Layout (DEL-C1 to C3)
**Goal**: All page wireframes and user interaction flows are designed and annotated
**Depends on**: Phase 6
**Deadline context**: Part of Deliverable C (27.04.2026)
**Requirements**: DEL-C1, DEL-C2, DEL-C3, HERM-07
**Success Criteria** (what must be TRUE):
  1. Brief project context section grounds the wireframes in the GreenSport use case and goals
  2. Medium-fidelity wireframes exist for every page (Home, About, News, Events, Gallery, Data, Contact, Impressum) showing structure, navigation, and content placement
  3. Wireframes are annotated with information hierarchy, responsive behavior notes, and component references
  4. User flow descriptions show how visitors navigate between pages, with interaction design patterns documented
  5. HERMES Detailspezifikation content is embedded in the wireframe document
**Plans:** [To be planned]

### Phase 8: Wireframes Completion (DEL-C4 to C5)
**Goal**: Deliverable C is finalized, Docker skeleton works, and PDF is submitted
**Depends on**: Phase 7
**Deadline context**: Deliverable C due 27.04.2026 23:59 CET
**Requirements**: DEL-C4, DEL-C5, INFRA-04, INFRA-05
**Success Criteria** (what must be TRUE):
  1. Summary section captures key wireframe insights and actionable implementation recommendations
  2. Final PDF is in German academic tone, at least 10 full DIN A4 pages, with embedded wireframe images
  3. Docker multi-stage build (Dockerfile + docker-compose.yml) produces a working nginx:alpine container
  4. Running `docker compose up` serves at least a placeholder page accessible in the browser
**Plans:** [To be planned]

### Phase 9: Website Core Pages
**Goal**: The four most content-heavy pages are built, styled, and bilingual
**Depends on**: Phase 8
**Deadline context**: Part of Deliverable D (18.05.2026) -- website development sprint
**Requirements**: WEB-01, WEB-02, WEB-03, WEB-04, WEB-10, WEB-11, WEB-12
**Success Criteria** (what must be TRUE):
  1. Home page displays hero section, event highlights teaser, and mission statement in both DE and EN
  2. About page presents mission, story, values, and organizational context in both DE and EN
  3. News/Blog page shows at least 5 date-sorted article cards with content in both DE and EN
  4. Events page displays upcoming and past alpine sports events in both DE and EN
  5. Language switcher toggles between DE and EN with Astro i18n routing, navigation is sticky and accessible
**Plans:** [To be planned]

### Phase 10: Website Extended Pages & Features
**Goal**: All remaining pages are built, responsive design works across breakpoints, brand is applied everywhere
**Depends on**: Phase 9
**Deadline context**: Part of Deliverable D (18.05.2026) -- website development sprint
**Requirements**: WEB-05, WEB-06, WEB-07, WEB-08, WEB-09
**Success Criteria** (what must be TRUE):
  1. Gallery/Media page displays photo lightbox and embedded videos in both DE and EN
  2. Data/Stats page shows interactive sustainability data visualizations (Chart.js or D3.js) in both DE and EN
  3. Contact page displays contact information, location, and social links in both DE and EN
  4. Impressum and Datenschutz pages contain legally required content in German
  5. All pages render correctly on mobile (375px), tablet (768px), and desktop (1280px+) breakpoints
**Plans:** [To be planned]

### Phase 11: Testing & Docker
**Goal**: Playwright E2E tests verify the website works, Docker Compose runs everything
**Depends on**: Phase 10
**Deadline context**: Part of Deliverable D (18.05.2026) -- must complete before documentation
**Requirements**: TEST-01, TEST-02, TEST-03, TEST-04, TEST-05
**Success Criteria** (what must be TRUE):
  1. Playwright tests verify all pages load and render correctly inside the Docker container
  2. Playwright tests verify navigation works across all pages (click every nav link, verify destination)
  3. Playwright tests verify responsive design at mobile, tablet, and desktop breakpoints
  4. Playwright tests verify bilingual content and language switching (DE content on /de/, EN content on /en/)
  5. All tests run inside Docker Compose alongside the website container via `docker compose run tests`
**Plans:** [To be planned]

### Phase 12: Documentation & Submission (DEL-D1 to D5)
**Goal**: Deliverable D documentation is complete, HERMES closure done, everything submitted
**Depends on**: Phase 11
**Deadline context**: Deliverable D due 18.05.2026 23:59 CET
**Requirements**: DEL-D1, DEL-D2, DEL-D3, DEL-D4, DEL-D5, HERM-08, HERM-09, HERM-10
**Success Criteria** (what must be TRUE):
  1. Project context section describes goals, use case, and target audience benefit
  2. Website access section provides clear Docker Compose instructions that work from a fresh clone
  3. Brand design section documents how brand book was implemented on the website with visual examples
  4. Change management section documents all significant changes vs. original specification with reasons and lessons learned
  5. Final PDF is in German academic tone, at least 5 full DIN A4 pages, and HERMES Testbericht, Betriebshandbuch, and Abnahmebericht are included
**Plans:** [To be planned]

---

## Progress

| Phase | Plans Complete | Status | Completed |
|-------|----------------|--------|-----------|
| 1. Infrastructure & PDF Pipeline | 1/1 | Complete | 2026-03-13 |
| 2. Topic Definition (DEL-A1 to A3) | 0/1 | Planning | - |
| 3. Technology & Submission (DEL-A4 to A5) | 1/1 | Complete   | 2026-03-13 |
| 4. Brand Identity | 0/1 | Planning | - |
| 5. Specification Core (DEL-B1 to B3) | 1/1 | Complete   | 2026-03-13 |
| 6. Specification Technical (DEL-B4 to B7) | 0/? | Not started | - |
| 7. Wireframes & Layout (DEL-C1 to C3) | 0/? | Not started | - |
| 8. Wireframes Completion (DEL-C4 to C5) | 0/? | Not started | - |
| 9. Website Core Pages | 0/? | Not started | - |
| 10. Website Extended Pages & Features | 0/? | Not started | - |
| 11. Testing & Docker | 0/? | Not started | - |
| 12. Documentation & Submission (DEL-D1 to D5) | 0/? | Not started | - |

---

## Deadline Mapping

| Deadline | Date | Phases |
|----------|------|--------|
| Deliverable A (5%) | 16.03.2026 | Phases 1-3 |
| Deliverable B (20%) | 13.04.2026 | Phases 4-6 |
| Deliverable C (25%) | 27.04.2026 | Phases 7-8 |
| Deliverable D (50%) | 18.05.2026 | Phases 9-12 |

---
*Roadmap created: 2026-03-13*
*Last updated: 2026-03-13*

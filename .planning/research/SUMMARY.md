# Research Summary

**Project:** FloProject -- FHGR WINF1 Sports Web Project
**Synthesized:** 2026-03-13
**Research Files:** STACK.md, FEATURES.md, ARCHITECTURE.md, PITFALLS.md

---

## Executive Summary

This is a semester-long university web project for FHGR's Sport Management program (WINF1). It requires four graded deliverables with hard deadlines: a topic description (A, 5%), a specification (B, 20%), wireframes (C, 25%), and the final website with documentation (D, 50%). The website is worth half the grade and comes last in sequence -- the single most important risk factor. The recommended approach is a static content site built with Astro 5.x, Tailwind CSS 4.x, and Docker (nginx:alpine), paired with a unified Pandoc + Eisvogel PDF pipeline for all written deliverables. This stack is deliberately boring and well-documented, which is exactly right for a graded project with a May deadline.

The recommended creative topic is "GreenSport Graubunden" -- a sustainability-focused alpine sports platform. It aligns perfectly with the FHGR location in Graubunden, provides rich data visualization opportunities (the key technical differentiator), and has enough content depth for all deliverables. The project follows HERMES methodology (Swiss federal PM standard) with artifacts mapped to each deliverable phase. The bilingual DE/EN requirement is handled natively by Astro's built-in i18n routing.

The top risks are: (1) spending too much time on early PDF deliverables and rushing the website, (2) Docker/LaTeX environment issues that block builds, and (3) brand inconsistency across deliverables. All three are preventable by establishing the PDF pipeline and brand book early, scaffolding Astro during Phase 2-3, and testing Docker from a fresh clone before submission. The stack choices are all HIGH confidence -- there are no experimental technologies in this plan.

---

## Key Findings

### From STACK.md

| Technology | Purpose | Rationale |
|------------|---------|-----------|
| Astro 5.x | Static site generator | Built-in i18n routing for DE/EN, zero-JS default, file-based routing. Purpose-built for content sites. |
| Tailwind CSS 4.2.x | Styling | Utility-first, fast builds, custom design matching brand book. No generic Bootstrap look. |
| Docker + nginx:alpine | Containerization | Multi-stage build (~15MB image). Assignment requirement. |
| Playwright 1.58.x | E2E testing | Best Docker support, multi-browser, official Docker images. Pin version to match Docker image exactly. |
| Pandoc 3.9 + Eisvogel 3.x | PDF generation | Single pipeline for ALL deliverables. German locale support, professional academic output. |
| Penpot 2.x | Wireframes | Free, open-source, direct PDF export. No Figma file limits. |
| XeLaTeX | PDF engine | Handles UTF-8/umlauts natively. Non-negotiable for German content. |

**Critical version requirement:** Playwright npm package and Docker image versions MUST match exactly (e.g., both 1.58.0).

### From FEATURES.md

**Table stakes (missing = grade deduction):**
- Bilingual DE/EN website with responsive design
- Docker containerization with automated tests
- Professional PDF documents meeting page minimums (A>=2, B>=10, C>=10, D>=5)
- Brand book applied consistently across site and docs
- HERMES project management artifacts
- Hero section, about page, media gallery, contact/social, Impressum

**Differentiators (elevate grade):**
- Interactive data visualizations (Chart.js/D3.js) -- the single highest-impact differentiator
- Polished visual design driven by brand book
- Dark/light theme toggle
- Performance optimization (Lighthouse 95+ -- Astro gets this nearly free)
- CI/CD pipeline (GitHub Actions)
- Visual regression tests in Playwright

**Defer / avoid entirely:**
- Backend/database/CMS, user auth, e-commerce, contact forms with email
- JavaScript-heavy SPA behavior
- Complex Docker setups (Kubernetes, reverse proxies)
- Social media feed embedding, AI chatbot

### From ARCHITECTURE.md

**Major components:**
1. **Astro website** (`website/`) -- static HTML/CSS generation with layout inheritance and i18n
2. **nginx container** -- serves built static files, MPA routing (NOT SPA fallback)
3. **Playwright tests** (`tests/`) -- E2E validation against the nginx container
4. **Pandoc pipeline** (`templates/` + `Makefile`) -- unified PDF generation for all deliverables
5. **Brand system** (`brand/`) -- single source of truth for colors, fonts, logo consumed by both website and PDFs

**Key patterns:**
- Multi-stage Docker build (Node build stage -> nginx serve stage)
- Shared Pandoc defaults with per-deliverable metadata overrides
- Simple TypeScript translation map (no i18n library needed for two languages)
- Makefile as command hub for all operations
- Brand-driven CSS custom properties via Tailwind v4 `@theme` blocks

### From PITFALLS.md

**Top 5 pitfalls with prevention:**

| # | Pitfall | Prevention |
|---|---------|------------|
| 1 | Scope creep -- rushing website (50% of grade) after spending too long on PDFs | Time-box PDFs. Reserve 60% of effort for Deliverable D. Scaffold Astro during Phase 2-3. |
| 2 | German umlauts break PDF title pages | Use XeLaTeX (`--pdf-engine=xelatex`). Test German characters on day one. |
| 3 | Missing LaTeX packages block all PDF generation | Use `pandoc/extra` Docker image or `texlive-full`. Test pipeline before writing content. |
| 4 | Docker works locally, fails on professor's machine | Pin all image versions. Test from fresh clone. Never use `latest` tags. Include healthchecks. |
| 5 | Playwright version mismatch with Docker image | Pin both npm package and Docker image to identical version. |

---

## Implications for Roadmap

### Suggested Phase Structure

Based on the four hard deadlines (Mar 16, Apr 13, Apr 27, May 18) and dependency analysis, the project naturally divides into 5 phases.

#### Phase 1: Foundation + Deliverable A (Target: Mar 16)

**Rationale:** Topic selection and PDF pipeline are prerequisites for everything. Getting these right on day one prevents cascading delays.

**Delivers:**
- Finalized topic (GreenSport Graubunden recommended)
- Working Pandoc + Eisvogel + XeLaTeX PDF pipeline
- Deliverable A: Thema/Beschrieb PDF (2+ pages, German)
- Initial brand direction (colors, fonts, logo concept)
- Git repository structure established

**Features from FEATURES.md:** Topic selection, PDF pipeline, GitHub repo setup

**Pitfalls to avoid:** #2 (umlauts), #3 (LaTeX packages), #16 (overambitious topic)

**HERMES artifacts:** Projektinitialisierungsauftrag, Studie

**Research needed:** NONE -- well-documented patterns, just execute.

---

#### Phase 2: Brand Book + Specification + Deliverable B (Target: Apr 13)

**Rationale:** Brand book must exist before any visual work. Specification forces architectural decisions that inform wireframes and website. Starting Astro scaffold here de-risks Phase 4.

**Delivers:**
- Complete brand book (colors, fonts, logo, spacing, component patterns)
- HERMES artifacts: requirements spec, solution architecture, test concept, PM plan
- Deliverable B: Spezifikation PDF (10+ pages, German)
- Astro project initialized with i18n routing (skeleton only)
- Site map and content model defined

**Features from FEATURES.md:** Brand book, HERMES artifacts, site map definition

**Pitfalls to avoid:** #7 (brand inconsistency), #9 (cosmetic HERMES), #6 (page count)

**HERMES artifacts:** Anforderungsspezifikation, Loesungsarchitektur, Testkonzept, Projektmanagementplan

**Research needed:** MINIMAL -- Eisvogel customization for brand colors may need experimentation.

---

#### Phase 3: Wireframes + Deliverable C (Target: Apr 27)

**Rationale:** Wireframes depend on brand book and site map from Phase 2. This phase also advances the Astro site with layout scaffolding so Phase 4 is not starting from zero.

**Delivers:**
- Wireframes for all pages in Penpot (medium fidelity, annotated)
- Clickable prototype in Penpot
- Deliverable C: Wireframes PDF (10+ pages, German)
- Astro base layout, header, footer, navigation components working
- Docker skeleton (Dockerfile + docker-compose.yml building and serving)

**Features from FEATURES.md:** Navigation structure, responsive layout framework, Docker setup

**Pitfalls to avoid:** #8 (wrong wireframe fidelity), #12 (Penpot export issues), #1 (must advance website work here)

**HERMES artifacts:** Detailspezifikation

**Research needed:** LOW -- Penpot workflow is straightforward. Test PDF export early.

---

#### Phase 4: Website Development (Target: May 11 -- one week before deadline)

**Rationale:** This is where 60% of effort should go. All pages, content, styling, data visualizations, and testing. The one-week buffer before the May 18 deadline is intentional.

**Delivers:**
- All website pages (Home, About, News, Events, Gallery, Data/Stats, Contact) in DE and EN
- Interactive data visualizations (the key differentiator)
- Content populated across all pages
- Tailwind styling per brand book
- Playwright E2E tests passing in Docker
- Docker multi-stage build producing ~15MB image

**Features from FEATURES.md:** Hero section, media gallery, data visualizations, bilingual content, responsive design, language switcher, accessibility basics, Impressum/privacy

**Pitfalls to avoid:** #1 (scope creep), #4 (Docker portability), #5 (Playwright version), #10 (Tailwind v4 gotchas), #11 (i18n duplication), #13 (nginx MPA config), #14 (image optimization)

**Research needed:** YES -- interactive data visualization library choice (Chart.js vs D3.js) and integration with Astro islands architecture needs phase-specific research.

---

#### Phase 5: Polish + Deliverable D + Submission (Target: May 18)

**Rationale:** Buffer phase for documentation, testing, and final polish. No new features -- only refinement.

**Delivers:**
- Deliverable D: Website documentation PDF (5+ pages, German)
- HERMES closure artifacts (Abnahmebericht, Abnahme-Checkliste)
- Fresh-clone Docker test (the definitive "does it work" check)
- README with professor-friendly instructions
- Optional: dark/light toggle, CI/CD, visual regression tests (only if time permits)

**Features from FEATURES.md:** Documentation, acceptance testing, README, optional differentiators

**Pitfalls to avoid:** #4 (fresh-clone test is mandatory), #17 (repo must not be a file dump), #15 (German formatting)

**HERMES artifacts:** Testbericht, Betriebshandbuch, Abnahmebericht

**Research needed:** NONE -- execution only.

---

### Research Flags Summary

| Phase | Needs phase research? | Reason |
|-------|----------------------|--------|
| Phase 1 | NO | PDF pipeline is well-documented. Execute. |
| Phase 2 | NO | Brand book + HERMES are writing tasks, not technical unknowns. |
| Phase 3 | NO | Penpot + Astro scaffolding are standard patterns. |
| Phase 4 | YES | Data visualization integration with Astro islands. Chart.js vs D3.js for the specific topic's data needs. |
| Phase 5 | NO | Documentation and polish. No unknowns. |

---

## Confidence Assessment

| Area | Confidence | Notes |
|------|------------|-------|
| Stack | HIGH | All technologies are mature, well-documented, and version-pinned. No experimental choices. |
| Features | HIGH | Assignment requirements are explicit. Differentiators identified from industry analysis. |
| Architecture | HIGH | Standard static site patterns. Multi-stage Docker, Astro i18n, Pandoc pipeline are battle-tested. |
| Pitfalls | HIGH | Specific and actionable with concrete prevention steps. German-specific issues well-known. |
| HERMES Artifacts | MEDIUM | Mapped from official HERMES IT-Development scenario docs. No course-specific rubric available. |

**Overall confidence: HIGH**

### Gaps to Address

1. **Data visualization library choice:** Chart.js is simpler, D3.js is more flexible. Decision depends on the specific visualizations needed for GreenSport (carbon footprint charts, maps, calculators). Defer to Phase 4 research.
2. **Content sourcing for GreenSport topic:** Sustainability data for Graubunden alpine events needs to be identified. If data is thin, the topic may need to pivot to VerticalPulse (climbing). Validate during Phase 1 content planning.
3. **Penpot PDF export quality:** Reported issues with font shifting in exports. Needs early testing in Phase 3. Fallback: export as PNG and embed in Pandoc PDF.
4. **Eisvogel brand customization depth:** How far can Eisvogel be customized to match the brand book (custom fonts, header images)? Test during Phase 2 brand book creation.
5. **Professor's evaluation approach:** Unknown how Docker will be technically evaluated. Optimize for `docker compose up` simplicity.

---

## Sources

Aggregated from all research files. See individual files for full citations.

### Stack and Architecture
- [Astro Docs](https://docs.astro.build/) -- i18n routing, project structure
- [Tailwind CSS v4](https://tailwindcss.com/) -- theme configuration, upgrade guide
- [Pandoc + Eisvogel](https://github.com/Wandmalfarbe/pandoc-latex-template) -- template variables, releases
- [Playwright Docker](https://playwright.dev/docs/docker) -- version pinning, configuration
- [Docker multi-stage builds](https://docs.docker.com/build/building/multi-stage/)
- [nginx Docker Hub](https://hub.docker.com/_/nginx)

### Features and Domain
- [Deloitte 2026 Sports Industry Outlook](https://www.deloitte.com/us/en/insights/industry/technology/technology-media-telecom-outlooks/sports-industry-outlook.html)
- [PwC Sports Sustainability Playbook](https://www.pwc.com/us/en/industries/tmt/library/sports-sustainability-playbook.html)
- [Green Sports Alliance](https://www.greensportsalliance.org/)
- [MySwitzerland: Sustainable Ski Resorts](https://www.myswitzerland.com/en-us/planning/about-switzerland/sustainability/)

### Methodology
- [HERMES Online](https://www.hermes.admin.ch/) -- phases, IT Development scenario, artifacts
- [Penpot](https://penpot.app/) -- wireframing, PDF export

### Pitfalls
- [Pandoc umlaut issue #7362](https://github.com/jgm/pandoc/issues/7362)
- [Eisvogel Pandoc 3.8+ compatibility](https://github.com/Wandmalfarbe/pandoc-latex-template/releases)
- [Tailwind v4 upgrade guide](https://tailwindcss.com/docs/upgrade-guide)

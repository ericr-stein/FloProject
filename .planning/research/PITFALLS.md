# Domain Pitfalls

**Domain:** University sports website project (FHGR WINF1)
**Researched:** 2026-03-13

## Critical Pitfalls

Mistakes that cause missed deadlines or major grade impact.

### Pitfall 1: Scope Creep on Website (50% of Grade, Last Deadline)
**What goes wrong:** Spending too much time on PDF deliverables A/B/C and rushing the website, or over-engineering the website with features nobody asked for.
**Why it happens:** The website is last in sequence but worth the most. PDF deliverables feel urgent because they come first.
**Consequences:** A mediocre website on the highest-weighted deliverable.
**Prevention:** Time-box PDF deliverables. Get the Pandoc pipeline working once, then documents are just writing. Reserve 60% of total effort for Deliverable D. Start Astro scaffolding during Phase 2/3 to de-risk.
**Detection:** If it is April 27 and the Astro project is not initialized yet, you are behind.

### Pitfall 2: German Umlauts Break PDF Generation
**What goes wrong:** Pandoc with pdflatex silently mangles umlauts (ae, oe, ue, ss) in YAML frontmatter (title, author, subtitle). Body text renders fine, but title page shows garbled characters.
**Why it happens:** YAML metadata is processed before `\usepackage[utf8]{inputenc}` in the LaTeX preamble. The Eisvogel template had this bug (pandoc issue #7362).
**Consequences:** Title page of a graded deliverable shows broken characters.
**Prevention:** Use XeLaTeX as the PDF engine (`--pdf-engine=xelatex`), which handles UTF-8 natively. Test with a document containing all German special characters on day one.
**Detection:** First PDF build with a German title. If umlauts render correctly, you are safe.

### Pitfall 3: Pandoc/LaTeX Environment Missing Packages
**What goes wrong:** Pandoc fails to generate PDF because LaTeX packages are missing. Errors like "File babel-german.sty not found" or font issues.
**Why it happens:** TeX Live minimal installs lack German language support. Eisvogel 3.x had compatibility issues with Pandoc >= 3.8.2.1 (now fixed but version pinning matters).
**Consequences:** Blocked on all deliverables.
**Prevention:** Use `pandoc/extra` Docker image which bundles pandoc + LaTeX + Eisvogel + language support. Or install `texlive-full` locally. Pin versions. Test pipeline FIRST before writing content: `pandoc test.md -o test.pdf --template eisvogel -V lang=de --pdf-engine=xelatex`.
**Detection:** Run the PDF build command on day one.

### Pitfall 4: Docker Container Works Locally, Fails on Professor's Machine
**What goes wrong:** Website runs on dev machine but fails when professor runs `docker compose up`. Port conflicts, missing files, `latest` tag drift, ARM vs x86 mismatch.
**Why it happens:** Docker "works everywhere" breaks when using `latest` tags, local-only files, or cached layers.
**Consequences:** Website (50% of grade) does not run.
**Prevention:** Pin all image versions (`nginx:1.27-alpine`, not `nginx:latest`). Use `.dockerignore`. Include health checks. Test from a fresh clone: `git clone && docker compose up` must work. Never rely on host-mounted volumes for essential content -- COPY into the image.
**Detection:** CI pipeline that does fresh clone + docker compose up + HTTP request.

### Pitfall 5: Playwright Version Mismatch with Docker Image
**What goes wrong:** Playwright in `package.json` does not match the Docker image version. Tests fail with "browser executable not found."
**Why it happens:** Playwright requires exact version match between npm package and Docker image.
**Consequences:** Tests do not run. Hours of debugging.
**Prevention:** Pin both to the same version: `mcr.microsoft.com/playwright:v1.58.0-noble` and `@playwright/test@1.58.0`.
**Detection:** Run tests in Docker early, not just locally.

## Moderate Pitfalls

### Pitfall 6: PDF Page Count Falls Short of Minimums
**What goes wrong:** Generated PDF has fewer pages than required (A>=2, B>=10, C>=10, D>=5). Markdown that looks long compresses in PDF due to large default margins.
**Prevention:** Set explicit margins: `geometry: "margin=2.5cm"` (German academic standard). Include title page and ToC (adds 2-3 pages). Plan content to exceed minimums by 20%. Build PDF early and often. Check with `pdfinfo output.pdf | grep Pages`.

### Pitfall 7: Brand Inconsistency Across Deliverables
**What goes wrong:** Website uses one color scheme, PDFs use another, wireframes use a third.
**Prevention:** Create brand book EARLY (Phase 2). Define hex colors, fonts, spacing. Apply to Eisvogel `titlepage-color`, Tailwind theme config, and Penpot design. Single source of truth.

### Pitfall 8: Wireframes Wrong Fidelity for 25% Deliverable
**What goes wrong:** Wireframes are either too polished (invite design criticism) or too rough (look lazy). Missing annotations that demonstrate design thinking.
**Prevention:** Target medium fidelity: grayscale, clear labels, no brand colors, but realistic content structure. Every wireframe page needs annotations explaining what the user sees and can do. Include user flow diagrams. Show all website pages, not just homepage.

### Pitfall 9: HERMES Artifacts Are Cosmetic
**What goes wrong:** HERMES documents are superficial templates with placeholder text that do not reflect actual project decisions.
**Prevention:** Map each HERMES phase to actual deliverables: Initialisierung=A, Konzept=B, Realisierung=C+D, Einfuehrung=D. Each artifact references specific project decisions. Use official HERMES terminology (Auftraggeber, Projektleiter, Ergebnis, Meilenstein).

### Pitfall 10: Tailwind v4 Breaking Changes from v3 Tutorials
**What goes wrong:** Following Tailwind v3 blog posts/tutorials that do not work in v4.
**Prevention:** Tailwind v4 removed `tailwind.config.js` in favor of CSS-based configuration with `@import "tailwindcss"` and `@theme {}` blocks. Only use official v4 docs. Do not copy v3 configurations.

### Pitfall 11: Astro i18n File Duplication
**What goes wrong:** Creating two completely separate page trees for DE and EN with duplicated layouts and components.
**Prevention:** Use a single layout system. Only `pages/de/` and `pages/en/` directories differ. Shared components receive `lang` as a prop. Translations live in a single `translations.ts` file.

### Pitfall 12: Penpot PDF Export Quality Issues
**What goes wrong:** Penpot PDF export does not perfectly match on-screen design. Fonts shift, alignment differs.
**Prevention:** Test PDF export early. For critical wireframe pages, export as high-res PNG and embed in a Pandoc-generated PDF with cover page and ToC. This gives more control over the final output.

## Minor Pitfalls

### Pitfall 13: nginx SPA Config on MPA Site
**What goes wrong:** Configuring nginx with `try_files $uri /index.html` (SPA pattern) when Astro generates individual HTML files (MPA).
**Prevention:** Astro is MPA by default. nginx serves files directly. Use `try_files $uri $uri/ =404`.

### Pitfall 14: Image Optimization Neglected
**What goes wrong:** Large unoptimized images slow the site and bloat the Docker image.
**Prevention:** Use Astro's built-in `<Image>` component for automatic optimization. Keep source images in `src/assets/`, not `public/`.

### Pitfall 15: Missing German Academic Formatting
**What goes wrong:** No Inhaltsverzeichnis, wrong date format (MM/DD instead of DD.MM.YYYY), English headings in a German document.
**Prevention:** Set `lang: de`, `toc: true`, `toc-own-page: true`. Use DD.MM.YYYY dates. German section headings: "Einleitung", "Zusammenfassung", "Anhang".

### Pitfall 16: Overambitious Sport Topic
**What goes wrong:** Topic is so niche that content, imagery, or data cannot be sourced. Website ends up with placeholder content.
**Prevention:** Before committing: verify enough content for 5+ pages, images can be sourced (CC/self-created), topic is explainable in one sentence. "Novel enough to stand out, simple enough to execute well."

### Pitfall 17: Repository Is a File Dump
**What goes wrong:** No README, unclear structure, PDFs buried in nested folders. Professor opens repo and cannot find anything.
**Prevention:** Clear root README with: project overview, `docker compose up` instructions, links to each deliverable PDF, project structure explanation. Keep repo clean with .gitignore.

## Phase-Specific Warnings

| Phase Topic | Likely Pitfall | Mitigation |
|-------------|---------------|------------|
| Phase 1: Topic/Description | Umlauts break PDF (#2), LaTeX missing (#3), topic too niche (#16) | Test PDF pipeline with German text on day one |
| Phase 2: Specification | HERMES cosmetic (#9), brand afterthought (#7), page count short (#6) | Create brand book, map HERMES to deliverables, build PDF often |
| Phase 3: Wireframes | Wrong fidelity (#8), Penpot export issues (#12), inconsistent branding (#7) | Medium-fidelity + annotations, test export early |
| Phase 4: Website | Docker fails on grader (#4), Playwright mismatch (#5), scope creep (#1), i18n gaps (#11), Tailwind v4 gotchas (#10) | Fresh-clone test, pin versions, start Astro early, use v4 docs only |
| All Phases | Page count short (#6), German formatting (#15), repo messy (#17) | Check page counts, German locale settings, clean README |

## Sources

- [Pandoc umlaut issue #7362](https://github.com/jgm/pandoc/issues/7362)
- [Eisvogel template releases](https://github.com/Wandmalfarbe/pandoc-latex-template/releases)
- [Playwright Docker version pinning](https://playwright.dev/docs/docker)
- [Tailwind v4 upgrade guide](https://tailwindcss.com/docs/upgrade-guide)
- [Astro i18n docs](https://docs.astro.build/en/guides/internationalization/)
- [Penpot PDF export](https://help.penpot.app/user-guide/exporting/)
- [Docker common mistakes](https://www.virtualizationhowto.com/2025/08/10-common-docker-container-mistakes-and-how-to-avoid-them/)
- [HERMES methodology](https://www.hermes.admin.ch/)

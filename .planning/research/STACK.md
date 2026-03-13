# Technology Stack

**Project:** FloProject -- FHGR WINF1 Sports Web Project
**Researched:** 2026-03-13

## Recommended Stack

### Website Framework & Build

| Technology | Version | Purpose | Why | Confidence |
|------------|---------|---------|-----|------------|
| Astro | 5.x (stable LTS) | Static site generator | Built-in i18n routing for DE/EN, zero-JS by default (fast), file-based routing, component islands. Astro 6.0 just released (Mar 2026) but 5.x is battle-tested. Use 5.x for stability in a graded project. | HIGH |
| Tailwind CSS | 4.2.x | Utility-first CSS | 5x faster builds than v3, CSS-native cascade layers. Perfect for rapid prototyping a sports site without writing custom CSS files. v4.2.0 released Feb 2026. | HIGH |
| TypeScript | 5.x | Type safety | Astro has first-class TS support. Catches errors before they reach the browser. | HIGH |

**Why Astro over plain HTML/CSS/JS:** The project requires bilingual DE/EN support, consistent layouts across pages, and a professional look. Astro's built-in i18n routing, layout system, and component reuse save massive time vs manually duplicating HTML files. It outputs pure static HTML -- no runtime JS unless you opt in. It is "real code" while being practical for the scope.

**Why Astro over Next.js/Nuxt/SvelteKit:** Those are application frameworks for dynamic apps. This is a content-driven sports website. Astro is purpose-built for content sites, ships zero JS by default, and has simpler mental model. No React/Vue/Svelte dependency needed.

**Why NOT Astro 6.0:** Just released (Mar 10, 2026). Too new for a graded project with a May deadline. Astro 5.18 is current stable on the 5.x line.

### Serving & Containerization

| Technology | Version | Purpose | Why | Confidence |
|------------|---------|---------|-----|------------|
| Docker | latest | Container runtime | Required by assignment. | HIGH |
| nginx:alpine | 1.27-alpine | Static file server | ~12MB image, production-grade, battle-tested. Alpine variant keeps image tiny. | HIGH |
| Docker Compose | v2 | Multi-service orchestration | Needed to run website + test containers together. Simple `docker compose up` for the professor. | HIGH |

**Dockerfile strategy:** Multi-stage build.
- Stage 1: `node:22-alpine` -- install deps, run `astro build`, output `dist/`
- Stage 2: `nginx:alpine` -- copy `dist/` into nginx web root
- Result: ~15MB final image with zero Node.js runtime

### Testing

| Technology | Version | Purpose | Why | Confidence |
|------------|---------|---------|-----|------------|
| Playwright | 1.58.x | E2E browser testing | Official Docker images, visual testing, multi-browser. Industry standard for web E2E tests. Pin image version to match installed version. | HIGH |
| Vitest | 3.x | Unit tests (if needed) | Fast, Vite-native, works with Astro out of the box. For testing utility functions or i18n logic. | MEDIUM |

**Testing strategy:**
- Playwright runs in its own Docker container via Docker Compose
- Tests hit the nginx container over Docker network
- Tests verify: pages load, navigation works, DE/EN switching, images render, responsive breakpoints
- Visual regression tests optional but impressive for grading

**Why NOT Cypress:** Playwright has better Docker support, faster execution, official Docker images, and multi-browser testing out of the box. Cypress requires more configuration for Docker environments.

**Why NOT Jest:** Vitest is the modern replacement -- faster, ESM-native, same API.

### PDF Document Generation (Deliverables A, B, D docs)

| Technology | Version | Purpose | Why | Confidence |
|------------|---------|---------|-----|------------|
| Pandoc | 3.9 | Markdown to PDF converter | Universal document converter. Assignment explicitly requires Markdown to PDF via Pandoc. Released Feb 2026. | HIGH |
| Eisvogel | 3.x | LaTeX template for Pandoc | Professional academic PDF output with title pages, headers, footers, page numbers, colored headings. Native German language support via `-V lang=de`. Active maintenance (fixed pandoc 3.8+ compat). | HIGH |
| TeX Live | 2024/2025 | LaTeX engine | Required by Pandoc for PDF generation. Use `texlive-full` in Docker or targeted packages. | HIGH |
| Make / Just | latest | Build automation | `make pdfs` to rebuild all documents. Simple, universal. | MEDIUM |

**PDF pipeline:** Write `.md` files with YAML frontmatter -> Pandoc + Eisvogel template -> professional PDF with:
- Title page (custom per deliverable)
- Table of contents
- Numbered sections (`--number-sections`)
- Headers/footers with page numbers
- German typography (`-V lang=de`)
- Proper fonts (Latin Modern or similar)

**Why Eisvogel over custom LaTeX:** Eisvogel is purpose-built for academic documents, handles German locale natively, provides professional output with zero LaTeX knowledge. Customization via YAML frontmatter variables, not raw LaTeX.

**Why NOT WeasyPrint/wkhtmltopdf:** They convert HTML to PDF. The assignment specifies Markdown to PDF via Pandoc. Eisvogel + Pandoc produces better academic typography than any HTML-to-PDF tool.

### Wireframes (Deliverable C)

| Technology | Version | Purpose | Why | Confidence |
|------------|---------|---------|-----|------------|
| Penpot | 2.x (cloud) | Wireframe design tool | Free, open-source, exports directly to PDF. Built-in wireframe component library. No account limits on exports. Can export all artboards of a page to a single PDF. | HIGH |

**Why Penpot over Figma:** Both are excellent. Penpot is 100% free with no file limits (Figma free: 3 files). For a university project, Penpot removes any licensing concerns. Direct PDF export from the app. Open-source aligns with academic values.

**Why NOT Balsamiq/Moqups/draw.io:** Penpot produces higher-fidelity wireframes that look professional in a graded PDF. Draw.io is for diagrams, not wireframes. Balsamiq's sketch style may look too informal for a 25%-weight deliverable.

**Workflow:** Design wireframes in Penpot -> Export artboards as single PDF -> Add cover page/TOC via Pandoc if needed.

### Brand Book & Design System

| Technology | Version | Purpose | Why | Confidence |
|------------|---------|---------|-----|------------|
| Markdown + Pandoc + Eisvogel | (same as above) | Brand book document | Consistent with all other deliverables. Write brand guidelines in Markdown, generate professional PDF. Include color swatches as images, typography samples, logo usage rules. | HIGH |
| Penpot | 2.x | Visual assets for brand book | Create logo, color palette visuals, typography samples as exportable assets. | HIGH |

**Why NOT Canva/Notion/specialized tools:** The brand book is a PDF deliverable -- same pipeline as all other documents. Using Markdown + Eisvogel keeps the toolchain unified. No extra tool to learn. Version-controlled in Git.

**Brand book contents (generated from Markdown):**
- Logo (designed in Penpot, exported as SVG/PNG)
- Color palette (hex codes, usage rules)
- Typography (font choices, heading hierarchy)
- Spacing/layout grid rules
- Component patterns (buttons, cards, navigation)
- Tone of voice guidelines (DE/EN)

### Development Environment

| Technology | Version | Purpose | Why | Confidence |
|------------|---------|---------|-----|------------|
| Node.js | 22 LTS | Runtime for Astro build | LTS = stable. Required for Astro, Tailwind, Playwright. | HIGH |
| pnpm | 9.x | Package manager | Faster, disk-efficient. Astro docs recommend it. | MEDIUM |
| GitHub | -- | Repository & collaboration | Required by assignment ("GitHub repo with cohesive navigation"). | HIGH |
| GitHub Actions | -- | CI/CD | Auto-build PDFs on push, run Playwright tests. Free for public repos. | MEDIUM |

### Internationalization (DE/EN)

| Technology | Version | Purpose | Why | Confidence |
|------------|---------|---------|-----|------------|
| Astro i18n routing | built-in | Bilingual URL routing | Native since Astro 4.0. Configure `locales: ["de", "en"]`, create `/de/` and `/en/` page folders. Helper functions for URL generation. No external dependency. | HIGH |

**Why NOT astro-i18next:** Astro's built-in i18n is sufficient for a two-language site. Adding i18next adds complexity and a dependency for minimal gain. Use a simple `translations.ts` map for UI strings.

## Alternatives Considered

| Category | Recommended | Alternative | Why Not |
|----------|-------------|-------------|---------|
| Site framework | Astro 5.x | Plain HTML/CSS/JS | No templating, no i18n routing, manual duplication of layouts across 10+ pages. Astro compiles to the same output but with 10x less effort. |
| Site framework | Astro 5.x | Hugo | Go-based, fast, but Go templating is arcane. Astro uses familiar HTML/JSX-like syntax. |
| Site framework | Astro 5.x | 11ty (Eleventy) | Good tool, but Astro has better i18n, better docs, larger ecosystem in 2026. |
| CSS | Tailwind 4.x | Bootstrap 5 | Bootstrap looks generic. Tailwind allows custom design matching the brand book. Bootstrap sites all look the same. |
| CSS | Tailwind 4.x | Vanilla CSS | Tailwind's utility classes are faster to write, responsive by default, consistent spacing. |
| Testing | Playwright | Cypress | Worse Docker support, no multi-browser, slower. |
| PDF | Pandoc + Eisvogel | LaTeX directly | Way too complex for the scope. Eisvogel abstracts LaTeX away. |
| PDF | Pandoc + Eisvogel | Typst | Newer, less ecosystem support, not what the assignment specifies. |
| Wireframes | Penpot | Figma | File limits on free tier, not open-source. |
| Server | nginx:alpine | Caddy | Nginx is more widely known, smaller image, simpler config for static files. |

## Docker Compose Architecture

```yaml
# docker-compose.yml (conceptual)
services:
  website:
    build: .
    ports:
      - "8080:80"
    # nginx:alpine serving static Astro build

  tests:
    image: mcr.microsoft.com/playwright:v1.58.0-noble
    depends_on:
      - website
    command: npx playwright test
    # Runs E2E tests against website service
```

## Installation

```bash
# Initialize Astro project
pnpm create astro@latest

# Core dependencies
pnpm add -D tailwindcss@^4.2 @tailwindcss/vite

# Testing
pnpm add -D @playwright/test

# PDF toolchain (install on system / Docker)
# pandoc 3.9, texlive, eisvogel template
```

## Pandoc PDF Command

```bash
pandoc input.md \
  -o output.pdf \
  --template eisvogel \
  --number-sections \
  --toc \
  -V lang=de \
  -V titlepage=true \
  -V toc-own-page=true \
  -V colorlinks=true \
  -V header-left="FHGR WINF1" \
  -V footer-center="\\thepage"
```

## Version Summary

| Tool | Version | Released | Source |
|------|---------|----------|--------|
| Astro | 5.18.x | Mar 2026 | [npm](https://www.npmjs.com/package/astro) |
| Tailwind CSS | 4.2.0 | Feb 2026 | [tailwindcss.com](https://tailwindcss.com/) |
| Playwright | 1.58.x | Feb 2026 | [npm](https://www.npmjs.com/package/playwright) |
| Pandoc | 3.9 | Feb 2026 | [pandoc.org](https://pandoc.org/releases.html) |
| Eisvogel | 3.x | 2025 | [GitHub](https://github.com/Wandmalfarbe/pandoc-latex-template) |
| nginx | 1.27-alpine | 2025 | [Docker Hub](https://hub.docker.com/_/nginx) |
| Node.js | 22 LTS | 2024 | [nodejs.org](https://nodejs.org/) |
| Penpot | 2.x | 2025 | [penpot.app](https://penpot.app/) |

## Sources

- [Astro Docs - i18n Routing](https://docs.astro.build/en/guides/internationalization/)
- [Astro npm releases](https://www.npmjs.com/package/astro)
- [Tailwind CSS v4.0 announcement](https://tailwindcss.com/blog/tailwindcss-v4)
- [Pandoc releases](https://pandoc.org/releases.html)
- [Eisvogel template](https://github.com/Wandmalfarbe/pandoc-latex-template)
- [Playwright Docker docs](https://playwright.dev/docs/docker)
- [Penpot wireframing](https://penpot.app/design/wireframing)
- [nginx Docker Hub](https://hub.docker.com/_/nginx)
- [Smallest Docker image for static sites](https://lipanski.com/posts/smallest-docker-image-static-website)

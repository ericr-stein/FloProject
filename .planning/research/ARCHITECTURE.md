# Architecture Patterns

**Domain:** University sports website project (FHGR WINF1)
**Researched:** 2026-03-13

## Recommended Architecture

### High-Level Structure

```
FloProject/
├── .planning/              # Project management (HERMES, research, roadmap)
├── deliverables/           # All graded artifacts
│   ├── A-thema/
│   │   ├── thema.md            # Source Markdown
│   │   ├── metadata.yaml       # Per-deliverable Eisvogel config
│   │   └── output/
│   │       └── Deliverable-A.pdf
│   ├── B-spezifikation/
│   │   ├── spezifikation.md
│   │   ├── metadata.yaml
│   │   ├── assets/             # Images, diagrams for spec
│   │   └── output/
│   ├── C-wireframes/
│   │   ├── wireframes.md       # Wireframe documentation + annotations
│   │   ├── metadata.yaml
│   │   ├── wireframes/         # Exported PNG/SVG from Penpot
│   │   └── output/
│   └── D-website/
│       ├── dokumentation.md
│       ├── metadata.yaml
│       └── output/
├── website/                # Astro project root
│   ├── src/
│   │   ├── layouts/        # BaseLayout.astro (header, footer, nav)
│   │   ├── components/     # Reusable: Header, Footer, LanguageSwitcher, Card
│   │   ├── pages/
│   │   │   ├── de/         # German pages (default locale)
│   │   │   └── en/         # English pages
│   │   ├── i18n/           # translations.ts (UI strings for DE/EN)
│   │   ├── styles/         # global.css with Tailwind imports
│   │   └── assets/         # Images, fonts, icons
│   ├── public/             # Static assets (favicon, robots.txt)
│   ├── astro.config.mjs    # Astro config with i18n routing
│   ├── package.json
│   └── pnpm-lock.yaml
├── tests/                  # Playwright E2E tests
│   ├── pages.spec.ts       # Page load + navigation tests
│   ├── i18n.spec.ts        # Language switching tests
│   ├── responsive.spec.ts  # Viewport breakpoint tests
│   └── playwright.config.ts
├── brand/                  # Brand Book assets
│   ├── brand-book.md       # Brand guidelines source (Markdown)
│   ├── metadata.yaml       # Eisvogel config for brand book PDF
│   ├── logo/               # Logo SVG/PNG files
│   ├── assets/             # Color swatches, typography samples
│   └── output/
│       └── Brand-Book.pdf
├── project-management/     # HERMES artifacts
│   ├── projektauftrag.md   # Project charter
│   ├── projektplan.md      # Timeline with milestones
│   ├── statusberichte/     # Status reports per phase
│   └── abschlussbericht.md # Closure report
├── templates/              # Shared PDF pipeline config
│   ├── eisvogel.latex      # Vendored Eisvogel template
│   └── defaults.yaml       # Shared pandoc defaults
├── Dockerfile              # Multi-stage: build Astro -> serve nginx
├── docker-compose.yml      # Website + test runner services
├── Makefile                # Build commands: make pdfs, make website, make test
└── README.md               # Professor entry point
```

### Component Boundaries

| Component | Responsibility | Communicates With |
|-----------|---------------|-------------------|
| **Astro website** (`website/`) | Static HTML/CSS generation from components | Consumes brand/ design tokens at build time |
| **nginx container** | Serves built static files on port 80 | Receives HTTP requests from browser/tests |
| **Playwright tests** (`tests/`) | E2E validation of website functionality | Sends HTTP to nginx container |
| **Pandoc pipeline** (`templates/` + `Makefile`) | Generates all PDF deliverables | Reads Markdown from deliverables/ and brand/ |
| **Penpot** (external SaaS) | Wireframe design | Exports PNG/PDF into deliverables/C-wireframes/ |
| **Brand book** (`brand/`) | Design system: colors, fonts, logo, rules | Consumed by website (CSS), PDFs (Eisvogel vars), wireframes |

### Data Flow

```
PDF Pipeline:
  Markdown (deliverables/X/*.md)
    + metadata.yaml (per-deliverable settings)
    + templates/defaults.yaml (shared settings)
    + templates/eisvogel.latex
    --> pandoc --pdf-engine=xelatex
    --> deliverables/X/output/Deliverable-X.pdf

Website Build (Docker multi-stage):
  Stage 1: node:22-alpine
    website/src/ --> astro build --> dist/ (static HTML/CSS/JS)
  Stage 2: nginx:1.27-alpine
    COPY dist/ --> /usr/share/nginx/html/
    --> Serves on port 80

Testing:
  docker compose up --> nginx:8080 (website)
  docker compose run tests --> Playwright hits http://website:80
  --> Test results + reports
```

## Patterns to Follow

### Pattern 1: Astro Layout Inheritance
**What:** Single base layout with header/footer, page layouts extend it.
**When:** Every page on the site.
**Example:**
```astro
---
// src/layouts/BaseLayout.astro
import Header from '../components/Header.astro';
import Footer from '../components/Footer.astro';
const { title, lang = 'de' } = Astro.props;
---
<html lang={lang}>
  <head>
    <meta charset="utf-8" />
    <title>{title}</title>
  </head>
  <body class="min-h-screen flex flex-col">
    <Header lang={lang} />
    <main class="flex-1"><slot /></main>
    <Footer lang={lang} />
  </body>
</html>
```

### Pattern 2: Simple i18n Translation Map
**What:** TypeScript object for UI strings. No heavy i18n library needed for two languages.
**When:** All translatable UI text.
**Example:**
```typescript
// src/i18n/translations.ts
export const ui = {
  de: {
    'nav.home': 'Startseite',
    'nav.about': 'Über uns',
    'nav.contact': 'Kontakt',
    'footer.copyright': '© 2026 Alle Rechte vorbehalten',
  },
  en: {
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'footer.copyright': '© 2026 All rights reserved',
  },
} as const;

export function t(lang: 'de' | 'en', key: keyof typeof ui.de): string {
  return ui[lang][key];
}
```

### Pattern 3: Multi-Stage Docker Build
**What:** Build Astro in Node, serve from nginx. Tiny final image (~15MB).
**When:** The production Dockerfile.
**Example:**
```dockerfile
# Stage 1: Build
FROM node:22-alpine AS build
WORKDIR /app
COPY website/package.json website/pnpm-lock.yaml ./
RUN corepack enable && pnpm install --frozen-lockfile
COPY website/ .
RUN pnpm build

# Stage 2: Serve
FROM nginx:1.27-alpine
COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
HEALTHCHECK --interval=30s --timeout=3s CMD curl -f http://localhost/ || exit 1
```

### Pattern 4: Pandoc Shared Defaults + Per-Deliverable Metadata
**What:** Common settings in `templates/defaults.yaml`, deliverable-specific in `metadata.yaml`.
**When:** Every PDF build.
**Example:**

```yaml
# templates/defaults.yaml (shared across all deliverables)
pdf-engine: xelatex
template: eisvogel
toc: true
toc-depth: 3
number-sections: true
variables:
  lang: de
  titlepage: true
  toc-own-page: true
  colorlinks: true
  header-left: "FHGR WINF1"
  footer-left: "Frühlingssemester 2026"
  listings-no-page-break: true
```

```yaml
# deliverables/A-thema/metadata.yaml (per-deliverable overrides)
title: "Thema und Beschreibung"
subtitle: "WINF1 Webprojekt -- Deliverable A"
author: "[Name]"
date: "16. März 2026"
titlepage-color: "1a365d"
titlepage-text-color: "ffffff"
```

### Pattern 5: Docker Compose for Website + Tests
**What:** Two services: website (nginx) and test runner (Playwright).
**When:** `docker compose up` for professor, `docker compose run tests` for verification.
**Example:**
```yaml
services:
  website:
    build: .
    ports:
      - "8080:80"
    healthcheck:
      test: ["CMD", "curl", "-f", "http://localhost/"]
      interval: 10s
      retries: 3

  tests:
    image: mcr.microsoft.com/playwright:v1.58.0-noble
    depends_on:
      website:
        condition: service_healthy
    volumes:
      - ./tests:/tests
    working_dir: /tests
    command: npx playwright test --reporter=html
    environment:
      - BASE_URL=http://website:80
```

### Pattern 6: Makefile as Command Hub
**What:** Single Makefile at repo root exposes all operations.
**When:** Professor or CI needs to build/test anything.
**Example:**
```makefile
.PHONY: all website pdfs test clean

all: pdfs website test

website:
	docker compose up -d website

pdf-%:
	pandoc deliverables/$*/*.md \
	  --defaults templates/defaults.yaml \
	  --metadata-file deliverables/$*/metadata.yaml \
	  -o deliverables/$*/output/Deliverable-$*.pdf

pdfs: pdf-A-thema pdf-B-spezifikation pdf-C-wireframes pdf-D-website

test:
	docker compose run --rm tests

clean:
	docker compose down
```

### Pattern 7: Brand-Driven Design Tokens
**What:** Brand book defines CSS custom properties; website and wireframes consume them.
**When:** All visual elements.
**Example:**
```css
/* Applied via Tailwind CSS v4 theme in global.css */
@import "tailwindcss";

@theme {
  --color-brand-primary: #1a5f7a;
  --color-brand-secondary: #57c5b6;
  --color-brand-accent: #ffc107;
  --color-brand-dark: #002b36;
  --color-brand-light: #fdf6e3;
  --font-heading: 'Inter', sans-serif;
  --font-body: 'Source Sans Pro', sans-serif;
}
```

## Anti-Patterns to Avoid

### Anti-Pattern 1: JavaScript-Heavy SPA
**What:** Using React/Vue/Svelte components or client-side routing.
**Why bad:** Overkill for a content site. Breaks Astro's zero-JS advantage. Harder to test. Professor expects web fundamentals.
**Instead:** Astro components (server-rendered to static HTML). CSS transitions for polish. Client JS only for interactive data visualizations.

### Anti-Pattern 2: Generated PDFs Not in Git
**What:** Adding `*.pdf` to .gitignore.
**Why bad:** Professor clones repo and cannot see deliverables without running builds.
**Instead:** Commit generated PDFs in `deliverables/*/output/`. For an academic project, convenience wins over git purity.

### Anti-Pattern 3: Separate Toolchains per Deliverable
**What:** LaTeX for one PDF, Word for another, different tools each time.
**Why bad:** Inconsistent styling, multiple tools to maintain, branding drift.
**Instead:** Single Pandoc + Eisvogel pipeline with shared defaults for ALL deliverables.

### Anti-Pattern 4: Tests That Only Check Status Codes
**What:** `expect(response.status).toBe(200)` and nothing else.
**Why bad:** Does not prove functionality. Professor wants meaningful tests.
**Instead:** Test navigation, content presence, language switching, responsive layout, image loading.

### Anti-Pattern 5: nginx SPA Fallback on MPA Site
**What:** Adding `try_files $uri /index.html` when Astro generates individual HTML files per route.
**Why bad:** Masks 404 errors. Returns wrong page for broken links.
**Instead:** Astro generates `/de/index.html`, `/en/about/index.html`, etc. nginx serves directly with `try_files $uri $uri/ =404`.

### Anti-Pattern 6: Overengineered Docker Setup
**What:** Adding Kubernetes, reverse proxies, multiple networks, or unnecessary services.
**Why bad:** Complexity for no benefit. Professor just needs `docker compose up`.
**Instead:** Two services maximum: website + test runner.

## Scalability Considerations

Not applicable. This is a university project optimized for:
- **Developer experience:** Fast builds, hot reload via `astro dev`, simple commands
- **Grading experience:** `docker compose up`, open browser, see site
- **Reproducibility:** Same output on any machine with Docker
- **Cohesion:** Same branding across website and all PDF deliverables

## Sources

- [Astro project structure](https://docs.astro.build/en/basics/project-structure/)
- [Astro i18n routing](https://docs.astro.build/en/guides/internationalization/)
- [Tailwind CSS v4 theme configuration](https://tailwindcss.com/blog/tailwindcss-v4)
- [Docker multi-stage builds](https://docs.docker.com/build/building/multi-stage/)
- [Eisvogel template variables](https://github.com/Wandmalfarbe/pandoc-latex-template)
- [Playwright Docker docs](https://playwright.dev/docs/docker)
- [nginx Docker Hub](https://hub.docker.com/_/nginx)
- [HERMES methodology](https://www.hermes.admin.ch/)

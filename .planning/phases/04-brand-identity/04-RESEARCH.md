# Phase 4: Brand Identity - Research

**Researched:** 2026-03-13
**Domain:** Brand book creation, CSS design tokens, Eisvogel PDF theming, Tailwind CSS 4
**Confidence:** HIGH

## Summary

The brand identity work for GreenSport Graubunden is **substantially complete**. A thorough brand book already exists at `brand/BRAND-BOOK.md` covering color palette (primary, secondary, accent, status, neutrals, chart colors), typography (Inter for headings/body, JetBrains Mono for code), logo concept with placeholder SVG, spacing scale (4px base grid), component patterns (buttons, cards, navigation, hero), tone/voice guidelines, and PDF application notes. CSS custom properties are defined in `brand/variables.css` and already integrated into Tailwind CSS 4 via `website/src/styles/global.css` using the `@theme` directive. The Eisvogel PDF template at `templates/defaults.yaml` already uses brand colors for title page, links, and header/footer.

The remaining work is **gap-filling and polish**, not creation from scratch. Specifically: (1) the brand book needs minor refinements such as accessibility contrast ratios, dark mode tokens, and a Tailwind utility mapping reference; (2) the Eisvogel template customization is already done but could benefit from section-divider color and caption styling; (3) the brand book documentation is standalone but should be verified as complete against BRAND-03.

**Primary recommendation:** Treat this phase as a review-and-complete pass, not a greenfield creation. Audit existing brand assets against BRAND-01/02/03 success criteria, fill gaps, and verify consistency between `brand/BRAND-BOOK.md`, `brand/variables.css`, `website/src/styles/global.css`, and `templates/defaults.yaml`.

<phase_requirements>
## Phase Requirements

| ID | Description | Research Support |
|----|-------------|-----------------|
| BRAND-01 | Brand book defines color palette, typography, logo, spacing, and component patterns | Already 90%+ complete in `brand/BRAND-BOOK.md`. Colors, typography, logo concept, spacing scale, and component patterns all documented. Gaps: accessibility contrast ratios, dark mode considerations |
| BRAND-02 | Brand book applied consistently across website and all PDF deliverables (Eisvogel customized) | Eisvogel template already customized with brand colors in `templates/defaults.yaml`. Tailwind 4 tokens already in `global.css`. Gap: verify synchronization between all three token sources |
| BRAND-03 | Brand book documented as standalone reference in repository | `brand/BRAND-BOOK.md` exists as standalone reference. `brand/variables.css` and `brand/logo-placeholder.svg` also present. Gap: ensure the brand book is self-contained enough for a third party to implement from |
</phase_requirements>

## Existing Asset Inventory

**What already exists (verified by reading files):**

| Asset | Path | Status | Completeness |
|-------|------|--------|--------------|
| Brand Book (Markdown) | `brand/BRAND-BOOK.md` | Exists, 276 lines | ~90% complete |
| CSS Custom Properties | `brand/variables.css` | Exists, 104 lines | Complete |
| Logo Placeholder (SVG) | `brand/logo-placeholder.svg` | Exists, 33 lines | Placeholder only |
| Tailwind 4 Theme Tokens | `website/src/styles/global.css` | Exists, integrated | Complete |
| Eisvogel PDF Defaults | `templates/defaults.yaml` | Exists, brand colors applied | Complete |
| PDF Metadata Templates | `templates/metadata-*.yaml` | Exist for deliverables A-D | Complete |

**What the brand book already covers:**
- Color palette: primary (3 shades), secondary (3 shades), accent (3 shades), status (4 colors), neutrals (9 shades), chart series (5 colors)
- Typography: Inter (headings + body), JetBrains Mono (code), full size scale with weights/line-heights/letter-spacing
- PDF fonts: DejaVu Serif/Sans/Mono at 11pt
- Logo: Concept description, 3 variants (primary/inverted/monochrome), minimum sizes, clear space rules, SVG placeholder
- Spacing: 4px base grid, 9-step scale (4px to 96px)
- Layout: Max-width prose (720px), container (1200px), full (1440px)
- Breakpoints: Mobile 375px, Tablet 768px, Desktop 1280px
- Components: Buttons (3 types with hover states), Cards (event/article/statistics), Navigation (header 72px sticky, footer dark), Hero section with gradient overlay
- Tone & Voice: 4 principles with German/English guidelines and examples
- PDF Application: Eisvogel color mapping table

## Gap Analysis

### Gaps in BRAND-01 (Brand Book Content)

| Gap | Priority | Effort |
|-----|----------|--------|
| WCAG contrast ratio verification for all color pairs | Medium | Small - run contrast checks |
| Dark mode token set (if ENH-01 is pursued) | Low | Defer - ENH-01 is v2 |
| Icon style guidelines (line vs filled, stroke width) | Low | Small addition |
| Image style guidelines (photo treatment, overlays) | Medium | Small addition |
| Link/focus state patterns for accessibility | Medium | Small addition |

### Gaps in BRAND-02 (Application Consistency)

| Gap | Priority | Effort |
|-----|----------|--------|
| Token source synchronization audit | High | Small - diff the 3 files |
| Tailwind utility class reference mapping | Medium | Small - document `bg-primary`, `text-secondary-light`, etc. |
| Verify Eisvogel template renders correctly with brand | High | Small - build a test PDF |

### Gaps in BRAND-03 (Documentation Quality)

| Gap | Priority | Effort |
|-----|----------|--------|
| Add "Quick Start" section for developers | Low | Small |
| Ensure bilingual section headers are complete | Low | Already done |
| Cross-reference with Deliverable D requirement DEL-D3 | Medium | Note for future |

## Standard Stack

### Core (Already in Use)

| Library | Version | Purpose | Why Standard |
|---------|---------|---------|--------------|
| Tailwind CSS | 4.2.x | Utility CSS framework with `@theme` directive | Already integrated, v4 uses CSS-first config |
| Inter | Variable | Heading + body font | Already specified in brand book |
| JetBrains Mono | Variable | Monospace font | Already specified in brand book |
| Eisvogel | Latest | LaTeX template for Pandoc PDFs | Already configured in defaults.yaml |

### Supporting

| Tool | Purpose | When to Use |
|------|---------|-------------|
| WebAIM Contrast Checker | WCAG AA/AAA verification | When auditing color pairs |
| `make pdf-a` (or similar) | Test PDF rendering | When verifying Eisvogel brand application |

## Architecture Patterns

### Existing Token Architecture (Already Implemented)

```
brand/
  BRAND-BOOK.md          # Human-readable reference (source of truth)
  variables.css           # CSS custom properties (machine-readable)
  logo-placeholder.svg    # Logo asset

website/src/styles/
  global.css              # Tailwind 4 @theme tokens (imports brand values)

templates/
  defaults.yaml           # Eisvogel PDF template with brand colors
```

### Token Flow Pattern

**Source of truth:** `brand/BRAND-BOOK.md` defines all values.

**Consumers must stay synchronized:**
1. `brand/variables.css` -- standalone CSS custom properties
2. `website/src/styles/global.css` -- Tailwind 4 `@theme` block
3. `templates/defaults.yaml` -- Eisvogel PDF variables

**Current synchronization status:** All three files use identical hex values. One minor difference: `global.css` has `--color-dark-text: #1A1A2E` which is not in the brand book or variables.css. This should be reconciled.

### Tailwind CSS 4 Theme Integration

Tailwind CSS 4 uses the `@theme` directive in CSS rather than a `tailwind.config.js` file. The brand tokens are already correctly registered:

```css
@import "tailwindcss";

@theme {
  --color-primary: #2D6A4F;
  /* ... all brand tokens ... */
}
```

This means `bg-primary`, `text-primary-light`, `border-accent`, etc. are already available as utility classes. No `tailwind.config.js` is needed -- this is the correct Tailwind v4 approach.

### Anti-Patterns to Avoid

- **Duplicating tokens manually:** Never hardcode hex values in components. Always use Tailwind utilities (`bg-primary`) or CSS variables (`var(--color-primary)`).
- **Creating a tailwind.config.js:** Tailwind 4 uses CSS-first configuration via `@theme`. Do not add a JS config file.
- **Forgetting PDF sync:** When changing any brand color, update all three consumer files.

## Don't Hand-Roll

| Problem | Don't Build | Use Instead | Why |
|---------|-------------|-------------|-----|
| Contrast checking | Manual visual inspection | WebAIM contrast checker algorithm or online tool | WCAG math is specific, easy to get wrong |
| Font loading | Manual `@font-face` declarations | Google Fonts CDN or `@fontsource/inter` | Subset optimization, caching, fallback handling |
| Color shade generation | Manually picking lighter/darker shades | Existing brand book shades (already defined) | Consistency; shades are already harmonized |

## Common Pitfalls

### Pitfall 1: Token Drift Between Files
**What goes wrong:** Brand book says one color, CSS variables say another, Tailwind has a third value.
**Why it happens:** Manual updates to one file without updating the others.
**How to avoid:** Audit all three files during this phase. Consider adding a comment in each file pointing to `BRAND-BOOK.md` as source of truth.
**Warning signs:** Visual inconsistency between PDF and website.

### Pitfall 2: Tailwind 4 Config Confusion
**What goes wrong:** Trying to create a `tailwind.config.js` or `tailwind.config.ts` file.
**Why it happens:** Most Tailwind tutorials online are for v3 which uses JS config.
**How to avoid:** Tailwind 4 uses `@theme` in CSS. The project already has this correctly set up. Do not add a JS config.

### Pitfall 3: Accessibility Color Contrast
**What goes wrong:** Brand looks great but fails WCAG AA for text readability.
**Why it happens:** Aesthetic color choices without checking contrast ratios.
**How to avoid:** Verify key pairs: primary text on white, white text on primary-dark, accent text on white, body text color against backgrounds.
**Warning signs:** Text that looks "light" or hard to read.

### Pitfall 4: Inter Font Not Loading
**What goes wrong:** Website falls back to system fonts, looks different from brand book.
**Why it happens:** Google Fonts CDN link missing, or `@fontsource` not installed.
**How to avoid:** Ensure font loading is handled in website layout. Not strictly part of brand phase but flag for Phase 9.

### Pitfall 5: Eisvogel Color Format
**What goes wrong:** PDF title page shows wrong color or default blue.
**Why it happens:** Eisvogel expects hex values WITHOUT the `#` prefix (e.g., `"2D6A4F"` not `"#2D6A4F"`).
**How to avoid:** Already handled correctly in `templates/defaults.yaml`. Verify by building a test PDF.

## Code Examples

### Tailwind 4 @theme Usage (Already in Place)
```css
/* Source: website/src/styles/global.css (verified) */
@import "tailwindcss";

@theme {
  --color-primary: #2D6A4F;
  --color-primary-light: #52B788;
  --color-primary-dark: #1B4332;
  /* ... */
}
```

### Using Brand Tokens in Astro Components
```html
<!-- Use Tailwind utilities that map to brand tokens -->
<button class="bg-primary text-white hover:bg-primary-dark rounded-lg px-6 py-3 font-semibold transition-all">
  Mehr erfahren
</button>

<div class="bg-neutral-50 border border-neutral-100 rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow">
  <!-- Card content -->
</div>
```

### Eisvogel Brand Application (Already in Place)
```yaml
# Source: templates/defaults.yaml (verified)
variables:
  titlepage-color: "2D6A4F"      # Alpine Green
  titlepage-text-color: "FFFFFF"  # White
  titlepage-rule-color: "FFFFFF"  # White
  linkcolor: "2D6A4F"            # Alpine Green
  urlcolor: "2D6A4F"             # Alpine Green
```

## State of the Art

| Old Approach | Current Approach | When Changed | Impact |
|--------------|------------------|--------------|--------|
| Tailwind v3 JS config | Tailwind v4 CSS `@theme` directive | Tailwind 4.0 (Jan 2025) | No `tailwind.config.js` needed; tokens defined in CSS |
| Separate design token tools | CSS custom properties as tokens | Mature pattern | `variables.css` is the standard approach |
| Eisvogel default colors | Custom brand colors in defaults.yaml | Already done | PDFs match brand identity |

## Validation Architecture

### Test Framework
| Property | Value |
|----------|-------|
| Framework | Manual visual verification + PDF build test |
| Config file | `templates/defaults.yaml` (PDF), `website/src/styles/global.css` (web) |
| Quick run command | `make pdf-a` (verify brand in PDF) |
| Full suite command | Build test PDF + visual review of brand book |

### Phase Requirements to Test Map
| Req ID | Behavior | Test Type | Automated Command | File Exists? |
|--------|----------|-----------|-------------------|-------------|
| BRAND-01 | Brand book has all sections (colors, type, logo, spacing, components) | manual-only | Review `brand/BRAND-BOOK.md` sections | Already exists |
| BRAND-02 | Eisvogel uses brand colors, CSS tokens match brand book | smoke | `cd /home/claude/FloProject && make pdf-a` | Template exists |
| BRAND-02 | Tailwind tokens synchronized with brand book | manual-only | Diff `variables.css` vs `global.css` values | Both exist |
| BRAND-03 | Brand book is standalone in `brand/` directory | manual-only | Verify `brand/BRAND-BOOK.md` is self-contained | Already exists |

### Sampling Rate
- **Per task commit:** Visual diff of changed token files
- **Per wave merge:** Build a test PDF, verify brand colors render
- **Phase gate:** All three token sources synchronized, brand book covers all required sections

### Wave 0 Gaps
None -- existing brand assets cover all phase requirements. No new test infrastructure needed.

## Key Findings for Planner

1. **This phase is ~85-90% complete.** The brand book, CSS variables, Tailwind integration, and Eisvogel template all exist and are functional.

2. **Primary work is audit and polish:**
   - Verify token synchronization across 3 files (fix `--color-dark-text` discrepancy)
   - Add missing minor sections (accessibility contrast notes, image style guidelines)
   - Confirm PDF builds correctly with brand colors

3. **Single-plan phase.** This should be one plan with 3-4 tasks: audit existing assets, fill gaps in brand book, verify PDF rendering, ensure documentation completeness.

4. **No new dependencies needed.** All tools (Tailwind 4, Pandoc, Eisvogel) are already installed and configured.

5. **Downstream impact:** Phase 5/6 (Deliverable B) and Phase 9/10 (website) both consume the brand book. Getting it right here prevents rework later.

## Open Questions

1. **Logo finalization**
   - What we know: SVG placeholder exists with mountain+leaf concept, well-designed
   - What's unclear: Whether the placeholder is sufficient for grading or if a more polished version is needed
   - Recommendation: Keep placeholder; it's professional enough. Note in brand book that production logo would be created by a designer.

2. **Font loading strategy for website**
   - What we know: Brand specifies Inter + JetBrains Mono from Google Fonts
   - What's unclear: Whether fonts will be loaded via CDN or bundled (affects Phase 9)
   - Recommendation: Flag for Phase 9 planning, not this phase. Brand book just specifies the fonts.

## Sources

### Primary (HIGH confidence)
- `brand/BRAND-BOOK.md` -- existing brand book (276 lines, comprehensive)
- `brand/variables.css` -- existing CSS tokens (104 lines, complete)
- `website/src/styles/global.css` -- existing Tailwind 4 integration
- `templates/defaults.yaml` -- existing Eisvogel PDF configuration
- `website/package.json` -- confirms Tailwind 4.2.x, Astro 6.0.x

### Secondary (MEDIUM confidence)
- Tailwind CSS 4 documentation (CSS-first config via `@theme` directive) -- verified via existing working setup in the project

## Metadata

**Confidence breakdown:**
- Standard stack: HIGH -- all tools already installed and configured
- Architecture: HIGH -- token architecture already implemented and working
- Pitfalls: HIGH -- common issues identified from existing code review
- Gap analysis: HIGH -- based on direct file reading and requirement comparison

**Research date:** 2026-03-13
**Valid until:** 2026-04-13 (stable -- brand decisions don't change rapidly)

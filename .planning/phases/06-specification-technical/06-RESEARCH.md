# Phase 6: Specification Technical (DEL-B4 to B7) - Research

**Researched:** 2026-03-13
**Domain:** German academic documentation / HERMES technical specification / PDF generation
**Confidence:** HIGH

## Summary

Phase 6 covers the second half of Deliverable B (Spezifikation): technical functions and architecture (DEL-B4), UX/UI design guidelines (DEL-B5), project management and testing strategy (DEL-B6), and the final PDF submission (DEL-B7). It also embeds three HERMES artifacts: Loesungsarchitektur (HERM-04), Testkonzept (HERM-05), and Projektmanagementplan (HERM-06).

The critical finding -- identical to Phase 5 -- is that **all Phase 6 content already exists** in `deliverables/B-spezifikation/content.md` (lines 863-1585, approximately 4,800 words across 722 lines). The content covers Funktionen und Technik, Loesungsarchitektur, CMS-Ansatz, Hosting/Sicherheit, SEO, Design und Nutzererfahrung (UX/UI), and Projektsteuerung und Betrieb with Gantt chart, RACI matrix, Testkonzept, and Abnahmekriterien. The content is written in German academic tone with extensive tables, ASCII diagrams, and structured headings.

The primary work is **review, refinement, consistency enforcement, and issue remediation** -- not content creation. Two specific issues carry over from Phase 5: (1) Lighthouse scores in the Abnahmekriterien table (AK-11 through AK-14) are still stated as hard acceptance criteria rather than Richtwerte/Orientierungswerte, which contradicts the Phase 3/5 decision to reframe Lighthouse as aspirational; (2) the Zusammenfassung section (lines 1565-1585) references "Lighthouse-Scores von mindestens 90" as a firm target. Additionally, the full document must reach at least 10 DIN A4 pages, and the PDF must build cleanly.

**Primary recommendation:** Audit existing content.md sections (lines 863-1585) against all success criteria, apply the Lighthouse softening fix to Phase 6 sections (AK-11 to AK-14 and Zusammenfassung), verify technical accuracy of architecture claims, ensure HERMES artifact names are correctly labeled, and build + verify the final PDF.

<phase_requirements>
## Phase Requirements

| ID | Description | Research Support |
|----|-------------|-----------------|
| DEL-B4 | Funktionen & Technik -- Core functions, interactions, interfaces, CMS approach, hosting, security, SEO | Content exists (lines 863-1134): Kernfunktionen (5 subsections), Interaktionskonzept (4 subsections), Loesungsarchitektur with architecture diagram and component diagram, tech stack table, deployment YAML, CMS comparison, hosting strategy, security headers table, SEO strategy with 6 technical measures. Needs review for accuracy and consistency. |
| DEL-B5 | Design & Nutzererfahrung (UX/UI) -- Navigation guidelines, responsive design, accessibility, visual design principles | Content exists (lines 1137-1311): Desktop/Tablet/Mobile navigation mockups, breakpoint table, grid system, touch optimization, WCAG 2.1 AA section with contrast ratios, structural accessibility, chart accessibility, visual design with color application rules, typography hierarchy, card layouts, whitespace principles, data visualization guidelines. Comprehensive. |
| DEL-B6 | Projektsteuerung & Betrieb -- HERMES milestones, timeline, responsibilities, acceptance criteria, testing, go-live, maintenance | Content exists (lines 1314-1562): 4 HERMES phases with milestones, Gantt chart (ASCII), 15 work packages with hour estimates (130h total), RACI matrix, 4-level test concept, 17 acceptance criteria, deployment process, monitoring, maintenance schedule. Very thorough. |
| DEL-B7 | PDF formatted in German academic tone, min. 10 DIN A4 pages, submitted as PDF | Build command `make pdf-b` exists. Full document is 1585 lines / ~10,747 words which should well exceed 10 pages. Needs build verification and page count check. |
| HERM-04 | Loesungsarchitektur -- Technology stack, system structure | Explicitly labeled in content.md at line 952: "Loesungsarchitektur (HERMES HERM-04)". Contains architecture overview diagram, component diagram, tech stack table, deployment architecture. Correctly embedded. |
| HERM-05 | Testkonzept -- Testing strategy and acceptance criteria | Explicitly labeled in content.md at line 1428: "Testkonzept (HERMES HERM-05)". Contains 4 test levels (build, container, E2E, manual), test categories table, Docker Compose test config, test environment description. Correctly embedded. |
| HERM-06 | Projektmanagementplan -- Timeline, milestones, resources | Implicitly covered in "Projektsteuerung und Betrieb" section (line 1314+). Contains HERMES phases, milestones, Gantt chart, work packages, RACI matrix. Does NOT have explicit "(HERMES HERM-06)" label in heading -- this should be added for consistency with HERM-04 and HERM-05 labeling. |
</phase_requirements>

## Existing Content Inventory

### What Already Exists (HIGH confidence)

The file `deliverables/B-spezifikation/content.md` contains Phase 6 content:

| Section | Lines | Word Estimate | Coverage |
|---------|-------|---------------|----------|
| Funktionen und Technik (DEL-B4) | 863-1134 | ~3,000 | Kernfunktionen, Interaktionskonzept, Loesungsarchitektur, CMS, Hosting, Sicherheit, SEO |
| Design und Nutzererfahrung (DEL-B5) | 1137-1311 | ~2,000 | Navigation, Responsive, Accessibility, Visuelle Gestaltung |
| Projektsteuerung und Betrieb (DEL-B6) | 1314-1562 | ~2,800 | HERMES-Phasen, Projektplan, Verantwortlichkeiten, Testkonzept, Abnahmekriterien, Go-Live |
| Zusammenfassung (closing) | 1565-1585 | ~300 | Summary and next steps reference |

**Total Phase 6 content: approximately 8,100 words across 722 lines.**

### Content Quality Assessment

| Aspect | Status | Notes |
|--------|--------|-------|
| German academic tone | Good | Formal register, consistent Swiss German spelling |
| Tables and structure | Excellent | Extensive tables, ASCII diagrams, YAML/code blocks |
| HERMES labeling | Partial gap | HERM-04 and HERM-05 explicitly labeled; HERM-06 needs explicit label |
| `\newpage` markers | Present | Between major sections |
| Lighthouse language | **NEEDS FIX** | AK-11 to AK-14 still use hard ">=90" targets; Zusammenfassung says "mindestens 90" |
| Technical accuracy | Needs review | Version numbers, architecture claims should be verified |
| Cross-references | Needs check | References to chapters, personas, brand book |

## Architecture Patterns

### Document Structure Pattern

Identical to Phase 5 -- single content.md file built via Pandoc:

```
deliverables/B-spezifikation/
    content.md          # All content in one Markdown file
                        # Sections separated by \newpage
                        # Built to PDF via Pandoc + Eisvogel + XeLaTeX
```

Phase 6 sections continue the top-level `#` heading pattern:
5. `# Funktionen und Technik` (DEL-B4)
6. `# Design und Nutzererfahrung (UX/UI)` (DEL-B5)
7. `# Projektsteuerung und Betrieb` (DEL-B6)
8. `# Zusammenfassung und naechste Schritte` (closing)

### Review Pattern for Existing Content

Same as Phase 5:
1. **Gap analysis** -- Compare each success criterion against existing content
2. **Consistency check** -- Cross-reference with Phase 5 sections and key decisions
3. **Issue remediation** -- Fix Lighthouse language, add HERM-06 label
4. **PDF build verification** -- Build and check page count, formatting

## Known Issues to Fix

### Issue 1: Lighthouse Acceptance Criteria Still Hardcoded (CRITICAL)

**Location:** Lines 1521-1525 (AK-11 through AK-14)
**Problem:** Lighthouse scores are listed as acceptance criteria with hard ">= 90" targets. Phase 3 decision and Phase 5 fix established that Lighthouse serves as Richtwerte/Orientierungswerte, not Abnahmekriterien.
**Fix:** Either add a footnote clarifying these are Orientierungswerte, or reword the Zielwert column to say "Richtwert: >= 90" or add a note below the table. Phase 5 used "Angestrebter" and "Orientierungswerte" phrasing -- Phase 6 must be consistent.

**Also in Zusammenfassung (line 1581):** "Lighthouse-Scores von mindestens 90 in allen Kategorien sind als Zielwert definiert" -- needs softening to match.

### Issue 2: HERM-06 Label Missing

**Location:** Line 1314, section heading "Projektsteuerung und Betrieb"
**Problem:** HERM-04 is labeled at line 952 as "Loesungsarchitektur (HERMES HERM-04)" and HERM-05 at line 1428 as "Testkonzept (HERMES HERM-05)". But HERM-06 (Projektmanagementplan) has no explicit label.
**Fix:** Either add "(HERMES HERM-06)" to the chapter heading or to a relevant subsection heading (e.g., "Projektplan" or "HERMES-Phasen und Meilensteine").

### Issue 3: Deliverable A Status in Gantt Chart

**Location:** Lines 1322-1327, HERMES phases table
**Problem:** Deliverable A row shows status "Abgeschlossen" which is correct. Need to verify that the timeline references (KW12-KW21) are accurate relative to actual project dates (March 16 - May 18, 2026).
**Review:** KW12 starts 2026-03-16, KW21 includes 2026-05-18. This appears correct.

## Don't Hand-Roll

| Problem | Don't Build | Use Instead | Why |
|---------|-------------|-------------|-----|
| PDF generation | Custom LaTeX | `make pdf-b` (Pandoc + Eisvogel + XeLaTeX) | Pipeline already established and working |
| Page counting | Manual estimation | Build PDF and check page count | Only reliable way to verify 10-page minimum |
| HERMES artifact structure | Custom format | Follow existing HERM-04/HERM-05 labeling pattern | Consistency with what's already in the document |

## Common Pitfalls

### Pitfall 1: Lighthouse Language Inconsistency
**What goes wrong:** Phase 5 fixed Lighthouse language in its sections (OZ-4, OZ-7, NFA-P01), but Phase 6 sections still have hard targets in the Abnahmekriterien table and Zusammenfassung.
**Why it happens:** Phase 5 was told NOT to touch lines 858+ (Phase 6 content).
**How to avoid:** Explicitly fix AK-11 to AK-14 and the Zusammenfassung reference in this phase.
**Warning signs:** Any instance of "Lighthouse" + ">= 90" without "Richtwert" or "Orientierungswert" qualifier.

### Pitfall 2: Missing HERMES Labels
**What goes wrong:** Professor may not recognize HERM-06 coverage if it's not explicitly labeled.
**Why it happens:** The section is clearly a Projektmanagementplan by content, but lacks the "(HERMES HERM-06)" tag.
**How to avoid:** Add explicit label, matching the pattern used for HERM-04 and HERM-05.

### Pitfall 3: Modifying Phase 5 Content Accidentally
**What goes wrong:** When fixing issues in Phase 6 sections, accidentally changing Phase 5 content (lines 1-857).
**Why it happens:** The file is one continuous document.
**How to avoid:** Be explicit about line ranges. Phase 6 content starts at line 863 (`# Funktionen und Technik`).

### Pitfall 4: PDF Page Count Uncertainty
**What goes wrong:** Assuming 10,747 words = 10+ pages. Page count depends on tables, diagrams, whitespace, font size.
**Why it happens:** Word count is not a reliable page count proxy with Eisvogel formatting.
**How to avoid:** Build the PDF and check actual page count. The document likely exceeds 10 pages given its extensive tables and diagrams.

### Pitfall 5: Contact Form Language Drift
**What goes wrong:** Phase 6 sections might reference contact forms or third-party services inconsistently with the Phase 5 fix (mailto-only).
**Why it happens:** Content was written before the mailto-only decision was enforced.
**How to avoid:** Search Phase 6 content for any "Formspree", "Netlify Forms", or "Kontaktformular" references that conflict with mailto-only approach.

## Standard Stack

This phase is documentation-only. The relevant "stack" is:

| Tool | Version | Purpose | Why Standard |
|------|---------|---------|--------------|
| Pandoc | (installed) | Markdown to PDF conversion | Established pipeline from Phase 1 |
| Eisvogel | (installed) | LaTeX template for professional PDFs | Brand-customized template already exists |
| XeLaTeX | (installed) | TeX engine with Unicode support | Required for German umlauts |
| Make | GNU Make | Build automation | `make pdf-b` already configured |

### Build Command
```bash
make pdf-b
```

Produces: `output/deliverable-b.pdf`

## Code Examples

### Lighthouse Softening Pattern (from Phase 5)

Phase 5 established this pattern for Lighthouse language:

**Before (hard target):**
```
| OZ-4 | Responsive Design | Lighthouse Score >= 90 |
```

**After (aspirational):**
```
| OZ-4 | Responsive Design | Angestrebter Lighthouse Score >= 90 |
```

Apply the same pattern to AK-11 through AK-14 in the Abnahmekriterien table:

**Before:**
```
| AK-11 | Lighthouse Performance Score | Chrome DevTools | >= 90 |
```

**After (option A - column annotation):**
```
| AK-11 | Lighthouse Performance Score | Chrome DevTools | Richtwert: >= 90 |
```

**After (option B - footnote below table):**
```
*Die Lighthouse-Scores (AK-11 bis AK-14) dienen als Orientierungswerte und sind keine harten Abnahmekriterien.*
```

### HERMES Label Pattern

Existing pattern in content.md:
```markdown
## Loesungsarchitektur (HERMES HERM-04)
## Testkonzept (HERMES HERM-05)
```

Missing label to add:
```markdown
# Projektsteuerung und Betrieb (HERMES HERM-06)
```

Or at subsection level:
```markdown
## Projektplan (HERMES HERM-06)
```

## Validation Architecture

### Test Framework
| Property | Value |
|----------|-------|
| Framework | Pandoc + XeLaTeX (PDF build) |
| Config file | templates/defaults.yaml, templates/metadata-b.yaml |
| Quick run command | `make pdf-b` |
| Full suite command | `make pdf-b` (same -- single artifact) |

### Phase Requirements to Test Map
| Req ID | Behavior | Test Type | Automated Command | File Exists? |
|--------|----------|-----------|-------------------|-------------|
| DEL-B4 | Technical section covers core functions, interfaces, hosting, security, SEO | manual | Review content.md lines 863-1134 | N/A |
| DEL-B5 | UX/UI section covers navigation, responsive, accessibility, visual design | manual | Review content.md lines 1137-1311 | N/A |
| DEL-B6 | Project mgmt section covers HERMES milestones, timeline, responsibilities, testing | manual | Review content.md lines 1314-1562 | N/A |
| DEL-B7 | PDF in German academic tone, min 10 pages, professional formatting | smoke | `make pdf-b && pdfinfo output/deliverable-b.pdf` | N/A |
| HERM-04 | Loesungsarchitektur explicitly labeled and embedded | manual | `grep "HERM-04" deliverables/B-spezifikation/content.md` | N/A |
| HERM-05 | Testkonzept explicitly labeled and embedded | manual | `grep "HERM-05" deliverables/B-spezifikation/content.md` | N/A |
| HERM-06 | Projektmanagementplan explicitly labeled and embedded | manual | `grep "HERM-06" deliverables/B-spezifikation/content.md` | N/A -- needs fix |

### Sampling Rate
- **Per task commit:** `make pdf-b` (verify PDF builds)
- **Per wave merge:** `make pdf-b` + page count verification
- **Phase gate:** PDF builds, >= 10 pages, all HERMES labels present

### Wave 0 Gaps
None -- existing build infrastructure covers all phase requirements. No new test files needed.

## Open Questions

1. **Exact page count unknown until PDF is built**
   - What we know: 10,747 words with extensive tables and diagrams. Very likely exceeds 10 pages.
   - What's unclear: Exact page count with current Eisvogel formatting.
   - Recommendation: Build early, check page count. If under 10 pages, identify sections to expand.

2. **Contact form references in Phase 6 content**
   - What we know: Phase 5 fixed FA-012 to mailto-only. Phase 6 Interaktionskonzept (line 944-950) already says "Mailto-Links" and "statische Website ohne Backend."
   - What's unclear: Whether any other Phase 6 references conflict.
   - Recommendation: Full-text search for "Formspree", "Netlify", "Kontaktformular" in lines 863+.

## Sources

### Primary (HIGH confidence)
- `deliverables/B-spezifikation/content.md` -- Full content file, 1585 lines, read and analyzed
- `.planning/STATE.md` -- Phase 5 decisions and key context carried forward
- `.planning/REQUIREMENTS.md` -- Requirement definitions for DEL-B4 through B7, HERM-04 through HERM-06
- `.planning/ROADMAP.md` -- Phase 6 success criteria (5 items)
- `.planning/phases/05-specification-core/05-RESEARCH.md` -- Phase 5 research, established review pattern
- `.planning/phases/05-specification-core/05-01-PLAN.md` -- Phase 5 plan, established Lighthouse fix pattern

### Secondary (MEDIUM confidence)
- `Makefile` -- Build commands verified (`make pdf-b`)

## Metadata

**Confidence breakdown:**
- Standard stack: HIGH -- same pipeline as Phase 1/3/5, verified working
- Architecture: HIGH -- content already exists and follows established patterns
- Pitfalls: HIGH -- issues identified from Phase 5 carryover, specific line numbers known
- Content completeness: HIGH -- all sections present, line ranges verified

**Research date:** 2026-03-13
**Valid until:** 2026-04-13 (stable -- documentation phase with established tooling)

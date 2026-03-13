# Phase 5: Specification Core (DEL-B1 to B3) - Research

**Researched:** 2026-03-13
**Domain:** German academic documentation / HERMES specification writing
**Confidence:** HIGH

## Summary

Phase 5 covers the first three sections of Deliverable B (Spezifikation) plus the HERMES Anforderungsspezifikation. The critical finding is that **extensive content already exists** in `deliverables/B-spezifikation/content.md` -- a 10,712-word, 1583-line document that covers not only Phase 5 (B1-B3, HERM-03) but also Phase 6 (B4-B7) content. The document is written in German academic tone with professional tables, structured headings, and detailed specifications.

The primary work for this phase is therefore **review, refinement, and gap analysis** rather than content creation from scratch. Each section needs verification against the success criteria, cross-referencing with Deliverable A content for consistency, and quality assurance for the German academic register.

**Primary recommendation:** Audit existing content.md sections against success criteria, fill any gaps, ensure consistency with Deliverable A and brand book, and validate HERMES compliance.

<phase_requirements>
## Phase Requirements

| ID | Description | Research Support |
|----|-------------|-----------------|
| DEL-B1 | Projektuebersicht & Ziele -- Overview of starting position, goals, project scope, and key definitions | Content exists (lines 1-121): Ausgangslage, Projektziele (strategic + operative), Projektumfang, Begriffsdefinitionen. Needs review for completeness and consistency with DEL-A content. |
| DEL-B2 | Strategie & Zielgruppen -- Target audience analysis, positioning, communication goals, and KPIs | Content exists (lines 124-348): 3 target groups with demographics, 3 detailed personas, positioning with UVP, communication goals, KPIs with measurement methods. Appears thorough. |
| DEL-B3 | Content & Seitenstruktur -- Sitemap, content plan, tonality, storytelling, multilingual approach (DE/EN) | Content exists (lines 350-740): Visual sitemap, URL structure, per-page content plans, tonality profile, storytelling approach, full multilingual technical strategy. Comprehensive. |
| HERM-03 | Anforderungsspezifikation -- Functional and non-functional requirements | Content exists (lines 742-857): 15 functional requirements with MoSCoW, 5 NFA categories (Performance, Accessibility, Security, Compatibility, Maintainability), traceability matrix. Well-structured. |
</phase_requirements>

## Existing Content Inventory

### What Already Exists (HIGH confidence)

The file `deliverables/B-spezifikation/content.md` contains:

| Section | Lines | Word Estimate | Coverage |
|---------|-------|---------------|----------|
| Projektuebersicht und Ziele (DEL-B1) | 1-121 | ~1,800 | Ausgangslage, strategic/operative goals, scope, exclusions, glossary |
| Strategie und Zielgruppen (DEL-B2) | 124-348 | ~3,200 | 3 target groups, 3 personas, UVP, communication goals, KPIs |
| Content und Seitenstruktur (DEL-B3) | 350-740 | ~3,500 | Sitemap, i18n routing, per-page content, tonality, storytelling, multilingual |
| Anforderungsspezifikation (HERM-03) | 742-857 | ~1,200 | FA-001 to FA-015, NFA categories, MoSCoW, traceability matrix |
| Phase 6 content (B4-B7) | 861-1583 | ~4,000+ | Already drafted -- out of scope for this phase |

**Total Phase 5 content: approximately 9,700 words across 857 lines.**

### Content Quality Assessment

| Aspect | Status | Notes |
|--------|--------|-------|
| German academic tone | Good | Formal register, Sie-form, Swiss spelling (ss not ss) |
| Tables and structure | Good | Extensive use of tables, clear heading hierarchy |
| HERMES alignment | Good | Explicit HERMES references, proper artifact naming |
| `\newpage` markers | Present | LaTeX page breaks between major sections |
| Cross-references | Needs check | References to strategic goals (SZ-1 etc.) should be consistent |
| Consistency with DEL-A | Needs check | Projektuebersicht should align with Thema/Beschrieb content |

## Architecture Patterns

### Document Structure Pattern

The Deliverable B content follows a clear pattern that must be maintained:

```
deliverables/B-spezifikation/
    content.md          # All content in one Markdown file
                        # Sections separated by \newpage
                        # Built to PDF via Pandoc + Eisvogel + XeLaTeX
```

Each major section (matching a DEL-B requirement) is a top-level `#` heading:
1. `# Projektuebersicht und Ziele` (DEL-B1)
2. `# Strategie und Zielgruppen` (DEL-B2)
3. `# Content und Seitenstruktur` (DEL-B3)
4. `# Anforderungsspezifikation (HERMES HERM-03)` (HERM-03)
5. `# Funktionen und Technik` (DEL-B4 -- Phase 6)
6. etc.

### Review Pattern for Existing Content

Since content already exists, the work pattern is:

1. **Gap analysis** -- Compare each success criterion against existing content
2. **Consistency check** -- Cross-reference with Deliverable A (content.md in A-thema/)
3. **Quality refinement** -- Tighten language, fix any inconsistencies, improve flow
4. **PDF verification** -- Build PDF and verify formatting, page count contribution

### Anti-Patterns to Avoid
- **Rewriting from scratch:** Content is already well-structured. Refine, do not replace.
- **Ignoring Phase 6 content:** Phase 6 sections also exist in content.md but are out of scope for this phase. Do not modify them.
- **Breaking Pandoc compatibility:** All formatting must work with `make pdf-b` pipeline.

## Don't Hand-Roll

| Problem | Don't Build | Use Instead | Why |
|---------|-------------|-------------|-----|
| PDF generation | Custom PDF tools | `make pdf-b` (Pandoc + Eisvogel + XeLaTeX) | Pipeline already established in Phase 1 |
| Table formatting | HTML tables | Pandoc Markdown pipe tables | Eisvogel handles them correctly |
| Page breaks | Manual spacing | `\newpage` LaTeX command | Pandoc passes through LaTeX commands |
| German typography | Manual character handling | XeLaTeX + proper font config | Already configured for umlauts, quotes |

## Common Pitfalls

### Pitfall 1: Inconsistency Between Deliverable A and B
**What goes wrong:** The Projektuebersicht in Deliverable B contradicts or repeats Deliverable A content in a way that shows no evolution.
**Why it happens:** Both documents discuss the same project from different angles.
**How to avoid:** DEL-B1 should expand on DEL-A, not repeat it. The Ausgangslage in B is more detailed; the goals are more structured (strategic/operative). Cross-check that no facts conflict.
**Warning signs:** Same sentences appearing verbatim; contradictory scope statements.

### Pitfall 2: Personas Without Actionable Insight
**What goes wrong:** Personas read like generic templates rather than driving design decisions.
**Why it happens:** Personas were written without linking them to specific page requirements.
**How to avoid:** Each persona should have a clear "primary journey" through the site. The existing personas include user scenarios -- verify these map to actual pages.
**Warning signs:** Personas mention features not in the sitemap; no connection between persona needs and page content.

### Pitfall 3: KPIs That Cannot Be Measured
**What goes wrong:** KPIs are specified but have no realistic measurement methodology for a student project.
**Why it happens:** Academic tone encourages impressive-sounding metrics.
**How to avoid:** Existing KPIs include "Erhebungsmethodik" section -- verify each KPI has a feasible measurement approach. For a semester project, some metrics (e.g., "500 unique visitors/month") are aspirational, which is fine as long as the document acknowledges this.
**Warning signs:** KPIs reference tools or data sources not available to the project.

### Pitfall 4: Sitemap Mismatch with WEB Requirements
**What goes wrong:** The sitemap in DEL-B3 does not align with WEB-01 through WEB-12 requirements.
**Why it happens:** Requirements and sitemap written at different times.
**How to avoid:** Cross-reference every page in the sitemap against the WEB-xx requirements list. Each WEB requirement should correspond to a page or feature in the sitemap.
**Warning signs:** Pages listed in sitemap but not in requirements, or vice versa.

### Pitfall 5: Multilingual Strategy Too Vague
**What goes wrong:** The DE/EN strategy mentions "all content bilingual" but does not specify translation workflow or content parity rules.
**Why it happens:** Technical details of i18n deferred to implementation.
**How to avoid:** The existing content already includes technical i18n details (Astro config, URL structure, string management). Verify the "Content Parity" section is specific enough to guide implementation.

## Validation Checklist (Success Criteria Mapping)

### SC-1: Projektuebersicht defines starting position, goals, project scope, and key terminology

| Element | Location in content.md | Status |
|---------|----------------------|--------|
| Starting position (Ausgangslage) | Lines 3-26 | Present -- detailed with table of initiatives |
| Goals (Projektziele) | Lines 28-55 | Present -- strategic (SZ-1 to SZ-4) and operative (OZ-1 to OZ-7) |
| Project scope | Lines 57-102 | Present -- inclusions and exclusions |
| Key terminology (Begriffsdefinitionen) | Lines 104-121 | Present -- 10 terms defined |

### SC-2: Target audience analysis with personas, positioning, and KPIs

| Element | Location in content.md | Status |
|---------|----------------------|--------|
| Primary target group | Lines 130-148 | Present -- Event organizers |
| Secondary target group | Lines 150-168 | Present -- Athletes/sports enthusiasts |
| Tertiary target group | Lines 170-188 | Present -- Tourism stakeholders |
| Personas | Lines 192-274 | Present -- 3 detailed personas with scenarios |
| Positioning / UVP | Lines 276-306 | Present -- competitive positioning, brand message |
| KPIs | Lines 327-348 | Present -- with measurement methods |

### SC-3: Sitemap and content plan with tonality, storytelling, and DE/EN strategy

| Element | Location in content.md | Status |
|---------|----------------------|--------|
| Sitemap | Lines 352-396 | Present -- visual tree with URLs |
| URL structure / i18n routing | Lines 398-409 | Present -- Astro config shown |
| Content per page | Lines 412-593 | Present -- all 9 pages detailed |
| Tonality guidelines | Lines 595-632 | Present -- profile table, language-specific rules |
| Storytelling approach | Lines 634-658 | Present -- 4 narrative strategies |
| DE/EN multilingual strategy | Lines 660-740 | Present -- technical implementation, content parity, string management |

### SC-4: HERMES Anforderungsspezifikation (functional and non-functional requirements)

| Element | Location in content.md | Status |
|---------|----------------------|--------|
| Functional requirements | Lines 746-767 | Present -- FA-001 to FA-015 |
| MoSCoW prioritization | Lines 768-775 | Present -- 12 Must, 3 Should |
| Non-functional requirements | Lines 777-835 | Present -- 5 categories (P, A, S, K, W) |
| Traceability matrix | Lines 837-857 | Present -- Goals to requirements mapping |

## Gaps and Refinement Areas

### Identified Gaps (Needs Investigation During Execution)

1. **Kontaktformular inconsistency:** FA-012 specifies a contact form, but REQUIREMENTS.md Out of Scope says "Contact form with email | Requires backend; use mailto link." The content.md mentions "clientseitig" (client-side) validation, which might be inconsistent. Clarify whether this is a client-side-only form (no submission) or a mailto link.

2. **Lighthouse score reference:** OZ-7 mentions "Lighthouse Score >= 90 in allen Kategorien." Phase 3 decision says "Lighthouse CI reframed as supplementary tool, not firm deliverable commitment." Verify the language in content.md does not over-commit.

3. **Green Score methodology:** The Begriffsdefinitionen describe Green Score as a normalized index, but the methodology for calculating it is not detailed in Phase 5 sections. This may be intentional (Phase 6 / implementation detail), but should be noted.

4. **Content per page: minimum article count:** DEL-B3 content plan for News/Blog should mention "minimum 5 articles" to align with WEB-03 requirement.

### Quality Refinements to Consider

1. **Cross-reference check:** Verify Deliverable A's project description aligns with B's Projektuebersicht. No contradictions on scope, goals, or terminology.
2. **Brand consistency:** Verify any color/design references in content.md use the brand book color names (Alpine Green, Mountain Blue, etc.) consistently.
3. **PDF build test:** Run `make pdf-b` to verify the document compiles and check current page count contribution of Phase 5 sections.

## State of the Art

| Concern | Current Approach | Status |
|---------|------------------|--------|
| German academic writing | Formal register, Swiss orthography, Sie-form | Already implemented correctly |
| HERMES methodology | Proper artifact naming, phase references | Embedded naturally in document |
| MoSCoW prioritization | Standard 4-level classification | Applied to functional requirements |
| Traceability matrix | Goals-to-requirements mapping | Present with dot notation |
| Persona methodology | Demographic + behavioral + scenario-based | Three personas with user journeys |

## Validation Architecture

### Test Framework
| Property | Value |
|----------|-------|
| Framework | Pandoc + XeLaTeX PDF build |
| Config file | Makefile (existing `make pdf-b` target) |
| Quick run command | `make pdf-b` |
| Full suite command | `make pdf-b` + manual content review |

### Phase Requirements to Test Map
| Req ID | Behavior | Test Type | Automated Command | File Exists? |
|--------|----------|-----------|-------------------|-------------|
| DEL-B1 | Projektuebersicht section present and complete | manual review | N/A | Content exists |
| DEL-B2 | Strategie/Zielgruppen section with personas and KPIs | manual review | N/A | Content exists |
| DEL-B3 | Sitemap and content plan covering all pages | manual review + cross-ref with WEB-xx | N/A | Content exists |
| HERM-03 | Anforderungsspezifikation with FA/NFA requirements | manual review | N/A | Content exists |
| ALL | PDF compiles without errors | smoke | `make pdf-b` | Makefile exists |

### Sampling Rate
- **Per task commit:** `make pdf-b` to verify no build breakage
- **Per wave merge:** Full content review against success criteria
- **Phase gate:** PDF builds, all 4 success criteria verified

### Wave 0 Gaps
None -- existing content and build infrastructure cover all phase requirements. The Makefile `pdf-b` target should already exist from Phase 1 infrastructure.

## Open Questions

1. **Contact form vs mailto link**
   - What we know: FA-012 says "Kontaktformular mit clientseitiger Validierung"; REQUIREMENTS.md says "Contact form with email | Requires backend; use mailto link"
   - What's unclear: Should the spec describe a decorative form (no actual submission) or just contact info with mailto?
   - Recommendation: Align with REQUIREMENTS.md -- clarify FA-012 as a client-side form that opens mailto on submit (no backend needed)

2. **PDF page count contribution**
   - What we know: Full Deliverable B needs minimum 10 pages; Phase 5 content is ~9,700 words
   - What's unclear: How many PDF pages do Phase 5 sections produce?
   - Recommendation: Build PDF and count. Phase 5 content alone likely produces 8-12 pages, which combined with Phase 6 will easily exceed 10.

## Sources

### Primary (HIGH confidence)
- `deliverables/B-spezifikation/content.md` -- Full content inventory, line-by-line analysis
- `deliverables/A-thema/content.md` -- Cross-reference for consistency
- `.planning/REQUIREMENTS.md` -- Official requirement definitions
- `.planning/ROADMAP.md` -- Phase 5 success criteria and scope

### Secondary (MEDIUM confidence)
- `.planning/STATE.md` -- Current project state, key decisions from earlier phases
- `.planning/PROJECT.md` -- Project constraints and grading context

## Metadata

**Confidence breakdown:**
- Existing content assessment: HIGH -- direct file analysis
- Gap identification: HIGH -- cross-referenced against requirements
- Quality assessment: MEDIUM -- German academic quality requires human judgment
- Pitfall identification: HIGH -- based on document structure analysis

**Research date:** 2026-03-13
**Valid until:** 2026-04-13 (stable -- content-focused phase, no technology changes)

# Phase 3: Technology & Submission - Research

**Researched:** 2026-03-13
**Domain:** Document completion, PDF quality assurance, academic writing
**Confidence:** HIGH

## Summary

Phase 3 covers two requirements: DEL-A4 (technology rationale section) and DEL-A5 (final PDF formatting and submission). The critical finding is that **most of the work is already done**. The existing `deliverables/A-thema/content.md` already contains a comprehensive "Geplanter Technologie-Einsatz" section (lines 95-141) with a HERMES Variantenvergleich table, full technology stack description, and a rationale section. The PDF builds cleanly via `make pdf-a` and produces a 10-page document (title page, ToC, 8 content pages) -- far exceeding the 2-page minimum.

The remaining work is limited to: (1) reviewing the technology section for completeness against the success criteria (Astro, Docker, Tailwind, Playwright must all be explicitly justified), (2) ensuring overall document quality and tone consistency, and (3) verifying the final PDF renders without issues.

**Primary recommendation:** This is a review-and-polish phase, not a writing-from-scratch phase. Focus on gap analysis of existing content, minor refinements, and PDF quality verification.

<phase_requirements>
## Phase Requirements

| ID | Description | Research Support |
|----|-------------|-----------------|
| DEL-A4 | Geplanter Technologie-Einsatz -- Describe chosen technology (Astro, Docker, etc.) with justified rationale | Technology section already exists in content.md (lines 95-141). Includes Variantenvergleich, stack description, and rationale. Needs review for completeness. |
| DEL-A5 | PDF formatted in German academic tone, min. 2 DIN A4 pages, submitted as PDF | PDF builds via `make pdf-a`, produces 10 pages. Pipeline verified working. Needs final quality check. |
</phase_requirements>

## Existing State Analysis

### What Already Exists (verified)

| Artifact | Location | Status | Notes |
|----------|----------|--------|-------|
| Content markdown | `deliverables/A-thema/content.md` | 147 lines, complete | All 5 major sections present |
| PDF metadata | `templates/metadata-a.yaml` | Complete | Title, author, date configured |
| Pandoc defaults | `templates/defaults.yaml` | Complete | Eisvogel, XeLaTeX, German, DejaVu fonts |
| Built PDF | `output/deliverable-a.pdf` | 10 pages, ~90KB | Builds cleanly with no errors |
| Makefile target | `make pdf-a` | Working | Verified: builds without warnings |

### Content Sections in content.md

| Section | Lines | Status | Covers |
|---------|-------|--------|--------|
| Use Case: GreenSport Graubunden | 1-17 | Complete (Phase 2) | DEL-A1 |
| Einbettung in bestehende Initiativen | 9-16 | Complete (Phase 2) | DEL-A1 context |
| Projektinitialisierung (HERMES) | 18-37 | Complete (Phase 2) | HERM-01 |
| Rahmenbedingungen | 39-70 | Complete (Phase 2) | DEL-A2 |
| Problemstellung und Loesung | 72-93 | Complete (Phase 2) | DEL-A3 |
| Geplanter Technologie-Einsatz | 95-141 | **Exists, needs review** | DEL-A4 |
| Fazit und Ausblick | 143-147 | Complete | Closing section |

### Technology Section Gap Analysis

The existing technology section already covers:

| Required Technology | Mentioned? | Justified? | Gap |
|---------------------|-----------|------------|-----|
| Astro 5.x | Yes (lines 119-121) | Yes -- Island Architecture, zero-JS default, short load times | None |
| Docker + nginx:alpine | Yes (lines 133-134) | Yes -- minimal container, < 10MB | None |
| Tailwind CSS 4.x | Yes (lines 122-123) | Yes -- JIT compilation, utility-first | None |
| Playwright | Yes (lines 128-129) | Yes -- E2E testing in real browsers | None |
| Pandoc + Eisvogel | Yes (lines 124-126) | Yes -- version control, reproducible | None |
| Lighthouse CI | Yes (line 130) | Brief mention only | Minor -- could expand or remove since not in core stack |

**Key finding:** All four technologies required by the success criteria (Astro, Docker, Tailwind, Playwright) are present and justified. The Variantenvergleich table (lines 99-111) provides the HERMES Studie comparison.

## Standard Stack

This phase uses only the existing PDF pipeline -- no new libraries or tools needed.

### Core (already in place)
| Tool | Version | Purpose | Status |
|------|---------|---------|--------|
| Pandoc | 3.1.11 | Markdown to PDF conversion | Installed, working |
| XeLaTeX | (system) | PDF engine with Unicode support | Installed, working |
| Eisvogel | (template) | Professional PDF template | Configured in defaults.yaml |
| DejaVu fonts | (system) | Font family with full Unicode/umlaut support | Configured |
| Make | (system) | Build command: `make pdf-a` | Working |

### No Additional Installations Required

This phase requires zero new dependencies. Everything is already in place from Phase 1.

## Architecture Patterns

### Document Structure (existing)
```
deliverables/A-thema/
  content.md          # All content in one file, sections via Markdown headings

templates/
  defaults.yaml       # Shared Pandoc config (Eisvogel, fonts, colors)
  metadata-a.yaml     # Deliverable A metadata (title, author, date)

output/
  deliverable-a.pdf   # Generated artifact (10 pages)
```

### PDF Build Pattern
```bash
# Single command builds the PDF
make pdf-a

# Under the hood:
pandoc --defaults=templates/defaults.yaml \
       --metadata-file=templates/metadata-a.yaml \
       -o output/deliverable-a.pdf \
       deliverables/A-thema/content.md
```

## Don't Hand-Roll

| Problem | Don't Build | Use Instead | Why |
|---------|-------------|-------------|-----|
| PDF formatting | Custom LaTeX | Eisvogel template via Pandoc | Already configured and working |
| Page counting | Manual estimation | Rebuild PDF and check page count | 10 pages currently; well above minimum |
| German typography | Manual encoding fixes | XeLaTeX + DejaVu fonts | Already handles umlauts correctly |

## Common Pitfalls

### Pitfall 1: Over-editing working content
**What goes wrong:** Rewriting sections that already meet requirements, introducing errors or tone inconsistencies.
**Why it happens:** Perfectionism or not checking existing content first.
**How to avoid:** Review existing content against success criteria first. Only make targeted edits where gaps exist.
**Warning signs:** Large diffs, changed sections that were already complete.

### Pitfall 2: Breaking the PDF build
**What goes wrong:** Introducing Markdown syntax that Pandoc/XeLaTeX cannot handle (e.g., certain special characters, malformed tables).
**Why it happens:** Editing content without rebuilding the PDF.
**How to avoid:** Always run `make pdf-a` after any content change and verify it builds without errors.
**Warning signs:** Pandoc warnings, XeLaTeX errors, missing content in output.

### Pitfall 3: Lighthouse CI mention without implementation plan
**What goes wrong:** The technology section mentions Lighthouse CI (line 130), but this is not in the core stack requirements and there is no INFRA or TEST requirement for it.
**Why it happens:** It was included during initial content writing but is not part of the defined requirements.
**How to avoid:** Either remove the Lighthouse CI mention or keep it as a brief "nice-to-have" mention. Do not make it sound like a firm commitment.
**Warning signs:** Professor expecting Lighthouse CI in final deliverable.

### Pitfall 4: Forgetting to rebuild after edits
**What goes wrong:** Submitting a stale PDF that does not reflect the latest content.md changes.
**How to avoid:** Always `rm output/deliverable-a.pdf && make pdf-a` as the final step.

## Code Examples

### Rebuilding the PDF
```bash
# Clean rebuild
rm -f output/deliverable-a.pdf
make pdf-a

# Verify it built
ls -la output/deliverable-a.pdf
```

### Checking page count (Python with pymupdf)
```python
import fitz
doc = fitz.open("output/deliverable-a.pdf")
print("Page count:", doc.page_count)
# Current: 10 pages (title + ToC + 8 content pages)
# Requirement: minimum 2 DIN A4 content pages
```

## State of the Art

No changes needed -- the existing pipeline and content are current.

| Aspect | Current State | Action Needed |
|--------|---------------|---------------|
| Content completeness | All 5 sections written | Review DEL-A4 for minor gaps |
| PDF pipeline | Working, produces 10-page PDF | None |
| German academic tone | Consistent throughout | Verify during review |
| Formatting | Eisvogel template with title page, ToC, headers/footers | None |

## Validation Architecture

### Test Framework
| Property | Value |
|----------|-------|
| Framework | Manual PDF review (no automated test framework for document quality) |
| Config file | N/A |
| Quick run command | `make pdf-a` |
| Full suite command | `rm -f output/deliverable-a.pdf && make pdf-a` |

### Phase Requirements to Test Map
| Req ID | Behavior | Test Type | Automated Command | File Exists? |
|--------|----------|-----------|-------------------|-------------|
| DEL-A4 | Technology section with justified rationale | manual-only | N/A -- requires human review of content | N/A |
| DEL-A5 | PDF min 2 pages, German academic tone, correct formatting | smoke | `make pdf-a && python3 -c "import fitz; d=fitz.open('output/deliverable-a.pdf'); print(d.page_count)"` | N/A |

### Sampling Rate
- **Per task commit:** `make pdf-a` (verify PDF still builds)
- **Per wave merge:** Full rebuild + page count check
- **Phase gate:** PDF builds, page count >= 4 (2 content + title + ToC), visual spot-check

### Wave 0 Gaps
None -- existing infrastructure covers all phase requirements. The `make pdf-a` command and pymupdf page counting are sufficient.

## Open Questions

1. **Lighthouse CI inclusion**
   - What we know: The technology section mentions Lighthouse CI, but it is not in any requirement.
   - What is unclear: Whether the professor expects it since it is mentioned in the document.
   - Recommendation: Keep the mention but ensure it is framed as supplementary, not core. Alternatively remove it to avoid setting expectations.

2. **Exact page count verification**
   - What we know: pymupdf reports 10 pages. Title page and ToC account for 2. Content is 8 pages.
   - What is unclear: Whether "min. 2 DIN A4 pages" means 2 content pages or 2 total pages.
   - Recommendation: With 8 content pages, this is a non-issue regardless of interpretation.

## Sources

### Primary (HIGH confidence)
- Direct file inspection of `deliverables/A-thema/content.md` -- all 147 lines reviewed
- Direct file inspection of `templates/defaults.yaml` and `templates/metadata-a.yaml`
- Verified `make pdf-a` produces a clean 10-page PDF (no errors)
- pymupdf page count: 10 pages confirmed

### Secondary (MEDIUM confidence)
- None needed -- this phase is entirely about existing project artifacts

## Metadata

**Confidence breakdown:**
- Standard stack: HIGH -- verified by running `make pdf-a` and inspecting output
- Architecture: HIGH -- files exist and are verified
- Pitfalls: HIGH -- based on direct analysis of existing content vs requirements

**Research date:** 2026-03-13
**Valid until:** 2026-03-16 (deadline for Deliverable A)

# Phase 2: Topic Definition (DEL-A1 to A3) - Research

**Researched:** 2026-03-13
**Domain:** German academic content writing, HERMES project management artifacts, Deliverable A structure
**Confidence:** HIGH

## Summary

Phase 2 is a **content authoring phase**, not a coding phase. The primary deliverable is the text content for sections A1-A3 of Deliverable A (use case definition, Rahmenbedingungen, Problemstellung & Loesung), with HERMES Projektinitialisierungsauftrag and Studie content embedded naturally.

**Critical finding: The content already exists.** The file `deliverables/A-thema/content.md` contains a comprehensive, well-written German academic document (~3,500 words) that already covers all five requirements (DEL-A1, DEL-A2, DEL-A3, HERM-01, HERM-02). It includes the use case description, Rahmenbedingungen (organizational, technical, regulatory, budgetary), Problemstellung & Loesung, and even the technology comparison (which is Phase 3 scope). HERMES Projektinitialisierungsauftrag content is embedded in the "Projektinitialisierung (HERMES)" subsection, and HERMES Studie content is embedded as the "Variantenvergleich (HERMES Studie)" section.

**Primary recommendation:** Review the existing content against the success criteria, identify any gaps or improvements needed, and make targeted edits rather than rewriting from scratch. The content is already of high quality.

<phase_requirements>
## Phase Requirements

| ID | Description | Research Support |
|----|-------------|-----------------|
| DEL-A1 | Use Case / Page -- Define and describe the GreenSport Graubuenden use case, including goals and user value | Already present in content.md as "Use Case: GreenSport Graubuenden" with Projektuebersicht section |
| DEL-A2 | Rahmenbedingungen -- Describe organizational, technical, and regulatory conditions | Already present with 4 subsections: organizational, technical, regulatory, budgetary |
| DEL-A3 | Problemstellung & Loesung -- Present the central problem and the planned website solution | Already present with detailed problem statement (3 deficits) and solution approach (4 features) |
| HERM-01 | Projektinitialisierungsauftrag -- Project goals, scope, constraints (embedded in Deliverable A) | Partially present as "Projektinitialisierung (HERMES)" subsection -- needs review against official HERMES template |
| HERM-02 | Studie -- Solution description and technology variant comparison (embedded in Deliverable A) | Already present as "Variantenvergleich (HERMES Studie)" with comparison table |
</phase_requirements>

## Existing Content Analysis

### What Already Exists (deliverables/A-thema/content.md)

The file contains 5 major sections plus a conclusion:

| Section | Maps to Requirement | Quality Assessment |
|---------|--------------------|--------------------|
| "Use Case: GreenSport Graubuenden" + Projektuebersicht | DEL-A1 | HIGH -- comprehensive, well-structured |
| "Einbettung in bestehende Initiativen" | DEL-A1 (supporting) | HIGH -- adds credibility with real references |
| "Projektinitialisierung (HERMES)" | HERM-01 | MEDIUM -- covers goals and scope but missing some official HERMES sections (Ressourcenbedarf, Termine, Risiken) |
| "Rahmenbedingungen" (4 subsections) | DEL-A2 | HIGH -- thorough coverage of org, tech, regulatory, budget |
| "Problemstellung und Loesung" | DEL-A3 | HIGH -- clear 3-point problem, concrete 4-feature solution |
| "Geplanter Technologie-Einsatz" + Variantenvergleich | DEL-A4 + HERM-02 | HIGH -- but this is Phase 3 scope, not Phase 2 |
| "Fazit und Ausblick" | General | GOOD -- ties together |

### Gap Analysis

1. **HERM-01 (Projektinitialisierungsauftrag) gaps:** The official HERMES template requires sections for Ausgangslage, Ziele, Ressourcenbedarf, Termine, Ressourcen, Kommunikation, and Risiken. The current content covers Ausgangslage (implicitly in Projektuebersicht), Ziele (Projektziele), and Projektumfang, but does not explicitly address Ressourcenbedarf, Termine, or Risiken. However, since this is embedded in an academic deliverable (not a standalone HERMES document), the current approach of naturally weaving the key elements into the text is acceptable. The planner should decide whether to add brief mentions of timeline and constraints.

2. **No structural gaps for DEL-A1, DEL-A2, DEL-A3:** All three are comprehensively covered.

3. **Content scope overlap:** The file currently includes DEL-A4 (technology) and HERM-02 (Studie/variant comparison) content, which belong to Phase 3. This is fine -- the content.md serves the entire Deliverable A. Phase 2's job is to ensure sections A1-A3 and HERM-01/02 are solid.

## Architecture Patterns

### Document Structure (Existing)

The content follows a logical academic German structure:

```
deliverables/A-thema/content.md
  # Use Case: GreenSport Graubuenden
    ## Projektuebersicht                    (DEL-A1)
    ## Einbettung in bestehende Initiativen (DEL-A1 supporting)
    ## Projektinitialisierung (HERMES)      (HERM-01)
  # Rahmenbedingungen                       (DEL-A2)
    ## Organisatorische Rahmenbedingungen
    ## Technische Rahmenbedingungen
    ## Regulatorische Rahmenbedingungen
    ## Budgetaere Rahmenbedingungen
  # Problemstellung und Loesung             (DEL-A3)
    ## Problemstellung
    ## Loesungsansatz
  # Geplanter Technologie-Einsatz           (DEL-A4 -- Phase 3)
    ## Variantenvergleich (HERMES Studie)   (HERM-02 -- Phase 3)
    ## Gewaehlter Technologie-Stack
    ## Begruendung der Technologiewahl
  # Fazit und Ausblick
```

### PDF Pipeline (Verified Working)

| Component | Value |
|-----------|-------|
| Source | `deliverables/A-thema/content.md` |
| Metadata | `templates/metadata-a.yaml` |
| Defaults | `templates/defaults.yaml` |
| Build command | `make pdf-a` |
| Output | `output/deliverable-a.pdf` |
| Engine | XeLaTeX via Pandoc with Eisvogel template |
| Language | German (`lang: de`) |
| Formatting | Title page (green #2D6A4F), ToC on own page, numbered sections, 11pt DejaVu fonts |

### HERMES Artifacts: What They Are

**Projektinitialisierungsauftrag (HERM-01):**
- Purpose: Binding basis for release of the Initialization phase
- Official sections: Ausgangslage, Ziele, Ressourcenbedarf, Termine, Ressourcen, Kommunikation, Risiken
- In this project: Embedded naturally in the Use Case section, not a standalone document
- Source: [HERMES Official - Projektinitialisierungsauftrag](https://www.hermes.admin.ch/hermes5/de/projektmanagement/verstehen/ergebnisse/projektinitialisierungsauftrag.html)

**Studie (HERM-02):**
- Purpose: Describes intended solution by defining objectives, listing solution variants, evaluating them
- Official sections: Ausgangslage, Situationsanalyse, Ziele, Rahmenbedingungen, Grobanforderungen, Loesungsvarianten, Analyse und Bewertung, Variantenentscheid
- In this project: Embedded as technology variant comparison table (WordPress vs Wix vs Astro)
- Source: [HERMES Official - Studie](https://www.hermes.admin.ch/hermes5/de/projektmanagement/verstehen/ergebnisse/studie.html)

## Don't Hand-Roll

| Problem | Don't Build | Use Instead | Why |
|---------|-------------|-------------|-----|
| PDF generation | Manual LaTeX | `make pdf-a` (Pandoc + Eisvogel) | Pipeline already verified in Phase 1 |
| German academic tone | Writing from scratch | Edit existing content.md | Content already written in proper register |
| HERMES artifacts | Standalone HERMES documents | Embed HERMES content in deliverable sections | Assignment expects integrated deliverables, not separate HERMES forms |

## Common Pitfalls

### Pitfall 1: Rewriting Existing Content
**What goes wrong:** Treating this as a greenfield content phase and rewriting what already exists.
**Why it happens:** Not checking `deliverables/A-thema/content.md` before planning.
**How to avoid:** Review existing content first, then do targeted gap-fill edits only.
**Warning signs:** Plan tasks that say "Write the use case description" instead of "Review and refine the use case description."

### Pitfall 2: Over-Formalizing HERMES
**What goes wrong:** Creating standalone HERMES template documents instead of embedding content naturally.
**Why it happens:** Treating HERMES artifacts as separate deliverables rather than content woven into the academic text.
**How to avoid:** The assignment says "embedded in Deliverable A" -- keep HERMES content as natural sections within the narrative.
**Warning signs:** Creating separate files like `hermes-projektinitialisierungsauftrag.md`.

### Pitfall 3: Scope Creep into Phase 3
**What goes wrong:** Editing technology sections (DEL-A4) or worrying about PDF formatting (DEL-A5) during Phase 2.
**Why it happens:** The content.md file contains all sections for the entire Deliverable A.
**How to avoid:** Phase 2 scope is strictly DEL-A1, DEL-A2, DEL-A3, HERM-01, HERM-02. Technology and PDF submission are Phase 3.

### Pitfall 4: Breaking Pandoc Markdown Syntax
**What goes wrong:** Introducing Markdown that doesn't render correctly through Pandoc + XeLaTeX.
**Why it happens:** Using GitHub-flavored Markdown features not supported by Pandoc's LaTeX output.
**How to avoid:** Stick to standard Pandoc markdown. Test with `make pdf-a` after edits. Avoid HTML tags, complex nested lists, or emoji in the content.
**Warning signs:** PDF build errors or garbled output after content edits.

## Code Examples

### Building the PDF (verification command)
```bash
# Build Deliverable A PDF
make pdf-a

# Output lands at output/deliverable-a.pdf
```

### Content.md Structure (Pandoc Markdown)
```markdown
# Section Title

## Subsection

Body text in German academic register. Use **bold** sparingly.

| Column A | Column B |
|----------|----------|
| Data     | Data     |

- Bullet point one
- Bullet point two
```

## State of the Art

| Aspect | Current State | Impact on Phase 2 |
|--------|--------------|-------------------|
| Content completeness | ~90% complete for Phase 2 scope | Minimal new writing needed |
| HERMES integration | Naturally embedded, slightly simplified | Acceptable for academic context |
| German academic tone | Consistently applied throughout | No tone corrections needed |
| PDF pipeline | Verified working in Phase 1 | Ready to test after any edits |

## Validation Architecture

### Test Framework
| Property | Value |
|----------|-------|
| Framework | Pandoc + XeLaTeX (PDF build verification) |
| Config file | `templates/defaults.yaml` + `templates/metadata-a.yaml` |
| Quick run command | `make pdf-a` |
| Full suite command | `make pdf-a` (same -- single artifact) |

### Phase Requirements to Test Map
| Req ID | Behavior | Test Type | Automated Command | File Exists? |
|--------|----------|-----------|-------------------|-------------|
| DEL-A1 | Use case clearly explains what, who, why | manual-only | Review content.md sections | N/A -- content review |
| DEL-A2 | Rahmenbedingungen covers org, tech, regulatory | manual-only | Review content.md sections | N/A -- content review |
| DEL-A3 | Problem statement + solution are concrete | manual-only | Review content.md sections | N/A -- content review |
| HERM-01 | Projektinitialisierungsauftrag embedded | manual-only | Review HERMES subsection | N/A -- content review |
| HERM-02 | Studie/variant comparison embedded | manual-only | Review variant table | N/A -- content review |

**Note:** All Phase 2 requirements are content-quality requirements, not functional requirements. They cannot be automated -- verification is through human review of the written text. The only automated check is that `make pdf-a` succeeds (PDF builds without errors).

### Sampling Rate
- **Per task commit:** `make pdf-a` (verify PDF still builds)
- **Per wave merge:** `make pdf-a` + visual PDF inspection
- **Phase gate:** PDF builds cleanly, content reviewed against success criteria

### Wave 0 Gaps
None -- existing PDF infrastructure covers all phase requirements. No test files needed for content review.

## Open Questions

1. **HERM-01 Completeness**
   - What we know: Current content covers goals, scope, and project context
   - What's unclear: Whether the professor expects explicit mention of Ressourcenbedarf/Termine/Risiken in HERMES style
   - Recommendation: Add a brief paragraph mentioning timeline constraints and resource setup (single developer, 2-month window) -- low effort, high safety margin

2. **Content Length**
   - What we know: The full content.md (including Phase 3 sections) is well over 2 pages
   - What's unclear: Whether Phase 2 sections alone meet the 2-page minimum
   - Recommendation: Verify page count with `make pdf-a` after any edits. The 2-page minimum applies to the full Deliverable A (all sections combined), not Phase 2 alone.

## Sources

### Primary (HIGH confidence)
- Existing `deliverables/A-thema/content.md` -- direct inspection of current content
- `templates/defaults.yaml` and `templates/metadata-a.yaml` -- PDF pipeline configuration
- `Makefile` -- build commands verified
- [HERMES Official - Projektinitialisierungsauftrag](https://www.hermes.admin.ch/hermes5/de/projektmanagement/verstehen/ergebnisse/projektinitialisierungsauftrag.html) -- official template sections
- [HERMES Official - Studie](https://www.hermes.admin.ch/hermes5/de/projektmanagement/verstehen/ergebnisse/studie.html) -- official template sections

### Secondary (MEDIUM confidence)
- [HERMES Online - Project Management](https://www.hermes.admin.ch/en/project-management/outcomes.html) -- English overview of HERMES artifacts

## Metadata

**Confidence breakdown:**
- Standard stack: HIGH - PDF pipeline verified in Phase 1, content exists and is inspectable
- Architecture: HIGH - Document structure is established, Pandoc markdown patterns are known
- Pitfalls: HIGH - Based on direct analysis of existing content and project structure
- HERMES requirements: MEDIUM - Official templates consulted, but academic adaptation is judgment-based

**Research date:** 2026-03-13
**Valid until:** 2026-03-16 (Deliverable A deadline -- research expires with submission)

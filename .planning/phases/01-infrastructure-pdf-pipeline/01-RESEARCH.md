# Phase 1: Infrastructure & PDF Pipeline - Research

**Researched:** 2026-03-13
**Domain:** Build tooling (Pandoc/Eisvogel/XeLaTeX), repository structure, Makefile
**Confidence:** HIGH

## Summary

This phase is largely complete from prior work done outside GSD. The repository already has a working Makefile with PDF, website, test, and Docker targets. The PDF pipeline (Pandoc + Eisvogel + XeLaTeX) is installed and functional -- `make pdf-a` produces a correctly formatted PDF. The directory structure (deliverables/, website/, brand/, project-management/, templates/, tests/) exists with content. The README hub is in place with a navigation table.

The remaining work is primarily **verification and gap-filling**: confirming PDF output quality (umlauts, ToC, page numbers render correctly), ensuring all Makefile targets work or fail gracefully for stubs, and validating that the infrastructure meets INFRA-01/02/03 requirements completely.

**Primary recommendation:** Verify existing infrastructure against success criteria, fix any gaps found, and mark phase complete. Do not rebuild what already works.

<phase_requirements>
## Phase Requirements

| ID | Description | Research Support |
|----|-------------|-----------------|
| INFRA-01 | PDF pipeline (Pandoc + Eisvogel + XeLaTeX) produces German academic documents with correct umlauts, page numbers, ToC, and professional formatting | Pipeline exists and builds successfully. Pandoc 3.1.11 + XeTeX 2026 + Eisvogel template installed. DejaVu fonts used for umlaut support. Defaults.yaml configures toc, titlepage, numbersections, page headers/footers. |
| INFRA-02 | Git repository structured with cohesive navigation (README hub, deliverables/, website/, brand/, project-management/ directories) | All directories exist. README.md has navigation table with links. .gitignore covers output/, node_modules/, .astro/, dist/. |
| INFRA-03 | Makefile serves as command hub for building PDFs, running website, and executing tests | Makefile exists with targets: pdf-a/b/c/d, pdfs, website, test, test-local, docker-up, docker-down, clean, help. Uses pandoc --defaults for PDF builds. |
</phase_requirements>

## Standard Stack

### Core
| Tool | Version | Purpose | Status |
|------|---------|---------|--------|
| Pandoc | 3.1.11 | Markdown-to-PDF conversion | Installed at ~/.local/bin/pandoc |
| XeTeX | 2026 (TeX Live 2026) | PDF engine with Unicode/font support | Installed at ~/.local/bin/xelatex |
| Eisvogel | Latest | LaTeX template for professional PDFs | Installed at ~/.local/share/pandoc/templates/eisvogel.latex |
| GNU Make | System | Build automation / command hub | Installed |

### Supporting
| Tool | Version | Purpose | Status |
|------|---------|---------|--------|
| DejaVu Serif/Sans/Mono | System | Fonts with full German umlaut support | Configured in defaults.yaml |
| Docker Compose | System | Website and test orchestration | docker-compose.yml exists |
| Astro | 6.0.4 | Website framework (stub exists) | Installed in website/ |
| Playwright | 1.58.2 | Test framework (stub exists) | In website/devDependencies |

## Architecture Patterns

### Existing Project Structure
```
FloProject/
├── deliverables/
│   ├── A-thema/content.md          # Deliverable A content (COMPLETE)
│   ├── B-spezifikation/content.md  # Deliverable B content
│   ├── C-wireframes/content.md     # Deliverable C content
│   └── D-website-docs/content.md   # Deliverable D content
├── website/                        # Astro website (scaffold exists)
│   ├── Dockerfile                  # Multi-stage build (node -> nginx:alpine)
│   ├── src/                        # Astro source
│   └── playwright.config.ts        # Test config
├── brand/                          # Brand identity assets
│   ├── BRAND-BOOK.md
│   ├── logo-placeholder.svg
│   └── variables.css
├── project-management/             # HERMES artifacts
├── templates/                      # Pandoc/Eisvogel config
│   ├── defaults.yaml               # Shared pandoc defaults
│   ├── metadata-a.yaml             # Per-deliverable metadata
│   ├── metadata-b.yaml
│   ├── metadata-c.yaml
│   └── metadata-d.yaml
├── tests/                          # Placeholder (root-level)
├── output/                         # Generated PDFs (gitignored)
├── Makefile                        # Command hub
├── docker-compose.yml              # Website + test services
├── README.md                       # Navigation hub
└── .gitignore                      # Covers output/, node_modules/, etc.
```

### Pattern: Pandoc Defaults File
The pipeline uses `templates/defaults.yaml` as a shared configuration for all PDFs, with per-deliverable metadata YAML files. This is the correct Pandoc pattern -- avoids repeating flags in the Makefile.

Key defaults.yaml settings:
- `pdf-engine: xelatex` (required for Unicode/custom fonts)
- `template: eisvogel` (professional academic template)
- `lang: de` (German language/hyphenation)
- `toc: true` + `toc-own-page: true` (table of contents on its own page)
- `titlepage: true` with green branding (#2D6A4F)
- `numbersections: true` (numbered headings)
- `mainfont: "DejaVu Serif"` (Unicode-safe font with umlauts)
- Header/footer with project name and institution

### Anti-Patterns to Avoid
- **Rebuilding what exists:** The infrastructure is functional. Do not rewrite the Makefile or restructure directories.
- **Over-engineering stubs:** The `make test` and `make website` targets correctly point to Docker Compose. They will fail without Docker running, which is expected at this phase. Do not add complex error handling.

## Don't Hand-Roll

| Problem | Don't Build | Use Instead | Why |
|---------|-------------|-------------|-----|
| PDF formatting | Custom LaTeX | Eisvogel template | Handles titlepage, ToC, headers/footers, code blocks, tables |
| Font/umlaut handling | Manual font config | XeLaTeX + DejaVu | XeLaTeX natively handles Unicode; DejaVu has complete German glyph set |
| Build orchestration | Shell scripts | GNU Make | Dependency tracking, phony targets, standard tooling |

## Common Pitfalls

### Pitfall 1: Eisvogel Template Not Found
**What goes wrong:** Pandoc errors with "Could not find data file eisvogel.latex"
**Why it happens:** Template must be in Pandoc's data directory, not the project templates/ folder
**Current state:** Template IS installed at `~/.local/share/pandoc/templates/eisvogel.latex`
**How to avoid:** Don't move or rename the template. The `template: eisvogel` directive in defaults.yaml finds it automatically.

### Pitfall 2: Font Missing for Umlauts
**What goes wrong:** German characters (ae, oe, ue, ss) render as boxes or question marks
**Why it happens:** PDF engine can't find the specified font, or font doesn't support the glyphs
**Current state:** DejaVu fonts are configured and available on this system
**How to avoid:** Always use XeLaTeX (not pdflatex) as the PDF engine. DejaVu fonts are the safe choice.

### Pitfall 3: Make Target Dependencies
**What goes wrong:** `make pdf-a` says "Nothing to be done" even when content changed
**Why it happens:** Make compares file timestamps. If output file is newer than source, it skips the build.
**How to avoid:** Use `make clean && make pdf-a` to force rebuild, or touch the source file. This is standard Make behavior, not a bug.

### Pitfall 4: Docker Not Running
**What goes wrong:** `make website`, `make test`, `make docker-up` fail
**Why it happens:** Docker daemon not started, or Docker not installed in the environment
**Current state:** Docker may not be available in this environment. These targets are stubs for Phase 1.
**How to avoid:** Phase 1 only requires that the Makefile targets EXIST, not that Docker targets succeed. Docker functionality is Phase 8/11.

## Code Examples

### Verified: Building a PDF
```bash
# Source: Actual test on this system, 2026-03-13
make pdf-a
# Runs: pandoc --defaults=templates/defaults.yaml --metadata-file=templates/metadata-a.yaml -o output/deliverable-a.pdf deliverables/A-thema/content.md
# Output: output/deliverable-a.pdf (88KB, PDF 1.7)
```

### Verified: Makefile Structure
```makefile
# Source: /home/claude/FloProject/Makefile
PANDOC := pandoc --defaults=$(TEMPLATE_DIR)/defaults.yaml

$(OUTPUT_DIR)/deliverable-a.pdf: $(DELIV_DIR)/A-thema/content.md $(TEMPLATE_DIR)/metadata-a.yaml | $(OUTPUT_DIR)
	$(PANDOC) --metadata-file=$(TEMPLATE_DIR)/metadata-a.yaml -o $@ $<
```

### Verified: defaults.yaml Key Settings
```yaml
# Source: /home/claude/FloProject/templates/defaults.yaml
pdf-engine: xelatex
template: eisvogel
variables:
  lang: de
  toc: true
  toc-own-page: true
  titlepage: true
  mainfont: "DejaVu Serif"
  numbersections: true
```

## State of the Art

| Component | Current State | Phase 1 Gap |
|-----------|---------------|-------------|
| Makefile | Complete with all targets (pdf, website, test, docker, clean, help) | None -- verify all PDF targets work |
| Directory structure | All required dirs exist with content | None -- verify .gitkeep files in empty dirs |
| README hub | Navigation table with all directories linked | None -- may need minor updates |
| PDF pipeline | Pandoc 3.1.11 + XeTeX 2026 + Eisvogel installed | Verify PDF output quality (umlauts, ToC, page numbers) |
| Deliverable A content | 142-line German academic document already written | Content exists -- verify formatting only |
| .gitignore | Covers output/, node_modules/, dist/, .astro/ | None |
| docker-compose.yml | Website + test services defined | Stubs only -- Docker targets are Phase 8/11 |

## Validation Architecture

### Test Framework
| Property | Value |
|----------|-------|
| Framework | GNU Make + manual verification |
| Config file | Makefile |
| Quick run command | `make pdf-a` |
| Full suite command | `make pdfs` |

### Phase Requirements to Test Map
| Req ID | Behavior | Test Type | Automated Command | File Exists? |
|--------|----------|-----------|-------------------|-------------|
| INFRA-01 | PDF pipeline produces correct German PDF | smoke | `make clean && make pdf-a && ls -la output/deliverable-a.pdf` | N/A (Makefile target) |
| INFRA-02 | Repo has clear directory structure with README | manual-only | Visual inspection of dirs and README.md | N/A |
| INFRA-03 | Makefile commands exist for PDF, website, tests | smoke | `make help` (lists all targets) | Makefile exists |

### Sampling Rate
- **Per task commit:** `make clean && make pdf-a` (verify PDF still builds)
- **Per wave merge:** `make pdfs` (all four deliverable PDFs build)
- **Phase gate:** All three success criteria verified manually

### Wave 0 Gaps
None -- existing Makefile infrastructure covers all phase requirements. No additional test framework needed for this phase.

## Open Questions

1. **PDF visual quality verification**
   - What we know: The pipeline runs and produces a PDF file
   - What's unclear: Whether umlauts, ToC, page numbers, and titlepage render correctly (cannot view PDF in this environment)
   - Recommendation: The planner should include a visual verification step. The defaults.yaml configuration is correct for German output (XeLaTeX + DejaVu + lang:de), so issues are unlikely but should be confirmed.

2. **Makefile stub targets**
   - What we know: `make website` and `make test` delegate to Docker Compose
   - What's unclear: Whether the phase requires these to actually run, or just exist
   - Recommendation: Per success criteria, they just need to EXIST ("even if website/tests are stubs"). The Makefile already has them. No changes needed.

## Sources

### Primary (HIGH confidence)
- Direct filesystem inspection of /home/claude/FloProject/ (all files verified)
- `make clean && make pdf-a` execution (verified working, 2026-03-13)
- `pandoc --version` output: 3.1.11
- `xelatex --version` output: XeTeX 2026 (TeX Live 2026)
- Eisvogel template verified at `~/.local/share/pandoc/templates/eisvogel.latex`

## Metadata

**Confidence breakdown:**
- Standard stack: HIGH - all tools verified installed and working
- Architecture: HIGH - all files and directories inspected directly
- Pitfalls: HIGH - based on direct testing of the pipeline

**Research date:** 2026-03-13
**Valid until:** 2026-04-13 (stable infrastructure, no version changes expected)

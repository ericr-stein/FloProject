---
phase: 4
slug: brand-identity
status: draft
nyquist_compliant: false
wave_0_complete: false
created: 2026-03-13
---

# Phase 4 — Validation Strategy

> Per-phase validation contract for feedback sampling during execution.

---

## Test Infrastructure

| Property | Value |
|----------|-------|
| **Framework** | make + file checks (brand is documentation, not code) |
| **Config file** | Makefile |
| **Quick run command** | `test -f brand/BRAND-BOOK.md && make pdf-a` |
| **Full suite command** | `test -f brand/BRAND-BOOK.md && test -f brand/variables.css && test -f website/src/styles/global.css && make pdf-a && test -f output/deliverable-a.pdf` |
| **Estimated runtime** | ~5 seconds |

---

## Sampling Rate

- **After every task commit:** Run quick command
- **After every plan wave:** Run full suite command
- **Max feedback latency:** 5 seconds

---

## Per-Task Verification Map

| Task ID | Plan | Wave | Requirement | Test Type | Automated Command | File Exists | Status |
|---------|------|------|-------------|-----------|-------------------|-------------|--------|
| 4-01-01 | 01 | 1 | BRAND-01, BRAND-02, BRAND-03 | structural | `test -f brand/BRAND-BOOK.md && grep -q "color-primary" brand/variables.css && make pdf-a` | ✅ | ⬜ pending |

---

## Wave 0 Requirements

*Existing infrastructure covers all phase requirements.*

---

## Manual-Only Verifications

| Behavior | Requirement | Why Manual | Test Instructions |
|----------|-------------|------------|-------------------|
| Color palette visually coherent | BRAND-01 | Design judgment | Review color swatches in brand book |
| Typography hierarchy readable | BRAND-01 | Design judgment | Check heading/body/mono font choices |
| Component patterns usable | BRAND-01 | Design judgment | Review button/card/nav patterns |
| PDF uses brand colors | BRAND-02 | Visual inspection | Open PDF, check title page and accent colors |
| Token sync across 3 files | BRAND-02 | Cross-reference check | Compare BRAND-BOOK.md, variables.css, global.css |

---

## Validation Sign-Off

- [ ] All tasks have `<automated>` verify or Wave 0 dependencies
- [ ] Sampling continuity
- [ ] Wave 0 covers all MISSING references
- [ ] No watch-mode flags
- [ ] Feedback latency < 5s
- [ ] `nyquist_compliant: true` set in frontmatter

**Approval:** pending

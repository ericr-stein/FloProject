---
phase: 1
slug: infrastructure-pdf-pipeline
status: draft
nyquist_compliant: false
wave_0_complete: false
created: 2026-03-13
---

# Phase 1 — Validation Strategy

> Per-phase validation contract for feedback sampling during execution.

---

## Test Infrastructure

| Property | Value |
|----------|-------|
| **Framework** | make + shell commands (no test framework needed — infrastructure verification) |
| **Config file** | Makefile |
| **Quick run command** | `make pdf-a` |
| **Full suite command** | `make pdf-a && ls -la deliverables/ website/ brand/ project-management/` |
| **Estimated runtime** | ~10 seconds |

---

## Sampling Rate

- **After every task commit:** Run `make pdf-a`
- **After every plan wave:** Run full suite command
- **Before `/gsd:verify-work`:** Full suite must be green
- **Max feedback latency:** 10 seconds

---

## Per-Task Verification Map

| Task ID | Plan | Wave | Requirement | Test Type | Automated Command | File Exists | Status |
|---------|------|------|-------------|-----------|-------------------|-------------|--------|
| 1-01-01 | 01 | 1 | INFRA-01 | integration | `make pdf-a && test -f deliverables/A-thema/output.pdf` | ✅ | ⬜ pending |
| 1-01-02 | 01 | 1 | INFRA-02 | structural | `ls deliverables/ website/ brand/ project-management/ && test -f README.md` | ✅ | ⬜ pending |
| 1-01-03 | 01 | 1 | INFRA-03 | structural | `make -n pdf-a && make -n website && make -n test` | ✅ | ⬜ pending |

*Status: ⬜ pending · ✅ green · ❌ red · ⚠️ flaky*

---

## Wave 0 Requirements

*Existing infrastructure covers all phase requirements.*

---

## Manual-Only Verifications

| Behavior | Requirement | Why Manual | Test Instructions |
|----------|-------------|------------|-------------------|
| PDF has correct umlauts, page numbers, ToC | INFRA-01 | Visual PDF inspection | Open output PDF, check German characters render, ToC exists, pages numbered |

---

## Validation Sign-Off

- [ ] All tasks have `<automated>` verify or Wave 0 dependencies
- [ ] Sampling continuity: no 3 consecutive tasks without automated verify
- [ ] Wave 0 covers all MISSING references
- [ ] No watch-mode flags
- [ ] Feedback latency < 10s
- [ ] `nyquist_compliant: true` set in frontmatter

**Approval:** pending

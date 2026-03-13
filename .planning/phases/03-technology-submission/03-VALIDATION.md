---
phase: 3
slug: technology-submission
status: draft
nyquist_compliant: false
wave_0_complete: false
created: 2026-03-13
---

# Phase 3 — Validation Strategy

> Per-phase validation contract for feedback sampling during execution.

---

## Test Infrastructure

| Property | Value |
|----------|-------|
| **Framework** | make + pandoc (content quality is human-reviewed) |
| **Config file** | Makefile, templates/metadata-a.yaml |
| **Quick run command** | `make pdf-a` |
| **Full suite command** | `make pdf-a && test -f output/deliverable-a.pdf && test $(stat -c%s output/deliverable-a.pdf) -gt 10000` |
| **Estimated runtime** | ~5 seconds |

---

## Sampling Rate

- **After every task commit:** Run `make pdf-a`
- **After every plan wave:** Run full suite command
- **Max feedback latency:** 5 seconds

---

## Per-Task Verification Map

| Task ID | Plan | Wave | Requirement | Test Type | Automated Command | File Exists | Status |
|---------|------|------|-------------|-----------|-------------------|-------------|--------|
| 3-01-01 | 01 | 1 | DEL-A4, DEL-A5 | integration | `make pdf-a && test -f output/deliverable-a.pdf && test $(stat -c%s output/deliverable-a.pdf) -gt 10000` | ✅ | ⬜ pending |

---

## Wave 0 Requirements

*Existing infrastructure covers all phase requirements.*

---

## Manual-Only Verifications

| Behavior | Requirement | Why Manual | Test Instructions |
|----------|-------------|------------|-------------------|
| Technology rationale is persuasive | DEL-A4 | Content quality judgment | Read Geplanter Technologie-Einsatz section, verify Astro/Docker/Tailwind/Playwright justified |
| German academic tone throughout | DEL-A5 | Language quality | Read full document, check tone consistency |
| PDF formatting professional | DEL-A5 | Visual inspection | Open PDF, check headings, spacing, umlauts |

---

## Validation Sign-Off

- [ ] All tasks have `<automated>` verify or Wave 0 dependencies
- [ ] Sampling continuity: no 3 consecutive tasks without automated verify
- [ ] Wave 0 covers all MISSING references
- [ ] No watch-mode flags
- [ ] Feedback latency < 5s
- [ ] `nyquist_compliant: true` set in frontmatter

**Approval:** pending

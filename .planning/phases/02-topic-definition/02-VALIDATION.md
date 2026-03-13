---
phase: 2
slug: topic-definition
status: draft
nyquist_compliant: false
wave_0_complete: false
created: 2026-03-13
---

# Phase 2 — Validation Strategy

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
- **Before `/gsd:verify-work`:** Full suite must be green
- **Max feedback latency:** 5 seconds

---

## Per-Task Verification Map

| Task ID | Plan | Wave | Requirement | Test Type | Automated Command | File Exists | Status |
|---------|------|------|-------------|-----------|-------------------|-------------|--------|
| 2-01-01 | 01 | 1 | DEL-A1, DEL-A2, DEL-A3 | integration | `make pdf-a && test -f output/deliverable-a.pdf` | ✅ | ⬜ pending |
| 2-01-02 | 01 | 1 | HERM-01, HERM-02 | integration | `make pdf-a && test -f output/deliverable-a.pdf` | ✅ | ⬜ pending |

*Status: ⬜ pending · ✅ green · ❌ red · ⚠️ flaky*

---

## Wave 0 Requirements

*Existing infrastructure covers all phase requirements.*

---

## Manual-Only Verifications

| Behavior | Requirement | Why Manual | Test Instructions |
|----------|-------------|------------|-------------------|
| Use case clearly explains GreenSport | DEL-A1 | Content quality judgment | Read content.md sections 1-3, verify clarity and completeness |
| Rahmenbedingungen covers org/tech/regulatory | DEL-A2 | Content quality judgment | Verify FHGR, Docker/Astro, and regulatory conditions mentioned |
| Problem/solution is concrete | DEL-A3 | Content quality judgment | Verify gap articulation and solution specificity |
| HERMES artifacts embedded naturally | HERM-01, HERM-02 | Content integration quality | Verify Projektinitialisierungsauftrag and Studie subsections |

---

## Validation Sign-Off

- [ ] All tasks have `<automated>` verify or Wave 0 dependencies
- [ ] Sampling continuity: no 3 consecutive tasks without automated verify
- [ ] Wave 0 covers all MISSING references
- [ ] No watch-mode flags
- [ ] Feedback latency < 5s
- [ ] `nyquist_compliant: true` set in frontmatter

**Approval:** pending

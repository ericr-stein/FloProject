---
phase: 5
slug: specification-core
status: draft
nyquist_compliant: false
wave_0_complete: false
created: 2026-03-13
---

# Phase 5 — Validation Strategy

## Test Infrastructure

| Property | Value |
|----------|-------|
| **Framework** | make + pandoc |
| **Quick run command** | `make pdf-b` |
| **Full suite command** | `make pdf-b && test -f output/deliverable-b.pdf && test $(stat -c%s output/deliverable-b.pdf) -gt 20000` |
| **Estimated runtime** | ~5 seconds |

## Sampling Rate

- **After every task commit:** Run `make pdf-b`
- **After every plan wave:** Run full suite command
- **Max feedback latency:** 5 seconds

## Per-Task Verification Map

| Task ID | Plan | Wave | Requirement | Test Type | Automated Command | Status |
|---------|------|------|-------------|-----------|-------------------|--------|
| 5-01-01 | 01 | 1 | DEL-B1, DEL-B2, DEL-B3, HERM-03 | integration | `make pdf-b && test -f output/deliverable-b.pdf` | ⬜ pending |

## Wave 0 Requirements

*Existing infrastructure covers all phase requirements.*

## Manual-Only Verifications

| Behavior | Requirement | Why Manual | Test Instructions |
|----------|-------------|------------|-------------------|
| Projektuebersicht completeness | DEL-B1 | Content quality | Review goals, scope, terminology sections |
| Persona quality and KPIs | DEL-B2 | Content quality | Check primary/secondary personas, measurable KPIs |
| Sitemap and multilingual strategy | DEL-B3 | Content quality | Verify all pages listed, DE/EN approach documented |
| HERMES Anforderungsspezifikation | HERM-03 | Integration quality | Check functional/non-functional reqs embedded naturally |

## Validation Sign-Off

- [ ] `nyquist_compliant: true` set in frontmatter

**Approval:** pending

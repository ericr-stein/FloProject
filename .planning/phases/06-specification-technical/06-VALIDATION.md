---
phase: 6
slug: specification-technical
status: draft
nyquist_compliant: false
wave_0_complete: false
created: 2026-03-13
---

# Phase 6 — Validation Strategy

## Test Infrastructure

| Property | Value |
|----------|-------|
| **Framework** | make + pandoc |
| **Quick run command** | `make pdf-b` |
| **Full suite command** | `make pdf-b && test -f output/deliverable-b.pdf && test $(stat -c%s output/deliverable-b.pdf) -gt 50000` |
| **Estimated runtime** | ~5 seconds |

## Per-Task Verification Map

| Task ID | Plan | Wave | Requirement | Test Type | Automated Command | Status |
|---------|------|------|-------------|-----------|-------------------|--------|
| 6-01-01 | 01 | 1 | DEL-B4, DEL-B5, DEL-B6, DEL-B7, HERM-04, HERM-05, HERM-06 | integration | `make pdf-b && test -f output/deliverable-b.pdf` | ⬜ pending |

## Manual-Only Verifications

| Behavior | Requirement | Why Manual | Test Instructions |
|----------|-------------|------------|-------------------|
| Technical spec depth | DEL-B4 | Content quality | Review functions, hosting, security, SEO sections |
| UX/UI guidelines quality | DEL-B5 | Design judgment | Check breakpoints, accessibility, design principles |
| Project plan completeness | DEL-B6 | Content quality | Verify HERMES milestones, timeline, responsibilities |
| PDF >=10 pages, academic tone | DEL-B7 | Visual + language | Open PDF, count pages, check tone |
| HERMES artifacts embedded | HERM-04/05/06 | Integration quality | Verify natural embedding in deliverable |

**Approval:** pending

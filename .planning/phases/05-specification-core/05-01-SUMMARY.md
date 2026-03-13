---
phase: 05-specification-core
plan: 01
subsystem: docs
tags: [pandoc, german-academic, hermes, specification, lighthouse, mailto]

# Dependency graph
requires:
  - phase: 04-brand-identity
    provides: Brand tokens and color scheme referenced in specification
  - phase: 03-deliverable-a
    provides: Deliverable A content for cross-reference consistency
provides:
  - Reviewed and corrected Deliverable B specification (DEL-B1 through B3, HERM-03)
  - Consistent contact form approach (mailto, no backend)
  - Aspirational Lighthouse language throughout
  - News/Blog minimum 5 articles requirement documented
affects: [06-specification-tech, 09-implementation]

# Tech tracking
tech-stack:
  added: []
  patterns: [aspirational-metrics-language, mailto-contact-pattern]

key-files:
  created: []
  modified:
    - deliverables/B-spezifikation/content.md

key-decisions:
  - "Lighthouse scores reframed as Richtwerte/Orientierungswerte, not acceptance criteria"
  - "Contact form uses mailto link exclusively -- no Formspree or third-party services"
  - "News/Blog section requires minimum 5 articles at launch (WEB-03)"

patterns-established:
  - "Aspirational metrics: use 'Angestrebt' or 'Richtwert' for quality targets that depend on external tools"
  - "Scope alignment: functional requirements must match REQUIREMENTS.md out-of-scope decisions"

requirements-completed: [DEL-B1, DEL-B2, DEL-B3, HERM-03]

# Metrics
duration: 2min
completed: 2026-03-13
---

# Phase 5 Plan 1: Specification Core Review Summary

**Audited and corrected Deliverable B specification: aligned FA-012 with mailto-only contact, softened Lighthouse targets to aspirational language, added WEB-03 article minimum, verified PDF build**

## Performance

- **Duration:** 2 min
- **Started:** 2026-03-13T21:03:04Z
- **Completed:** 2026-03-13T21:05:22Z
- **Tasks:** 2
- **Files modified:** 1

## Accomplishments
- Fixed FA-012 contact form description to specify mailto-only approach, removed Formspree/Netlify Forms references
- Softened Lighthouse score targets (OZ-4, OZ-7, NFA-P01, KPI table) to aspirational Richtwerte
- Added minimum 5 articles requirement to News/Blog section for WEB-03 alignment
- Verified no contradictions between Deliverable A and B content
- PDF builds successfully via make pdf-b (243KB output)

## Task Commits

Each task was committed atomically:

1. **Task 1: Audit and fix content.md Phase 5 sections** - `21f1f6e` (fix)
2. **Task 2: Build PDF and verify** - no commit (build verification only, output gitignored)

## Files Created/Modified
- `deliverables/B-spezifikation/content.md` - Fixed FA-012 mailto, Lighthouse language, News minimum, Formspree removal

## Decisions Made
- Lighthouse scores throughout the specification use "Angestrebt" (aspirational) or "Richtwert" (guiding value) to align with Phase 3 decision that Lighthouse CI is supplementary, not a firm deliverable commitment
- Contact form exclusively uses mailto link -- consistent with REQUIREMENTS.md out-of-scope decision on backend form processing
- Formspree reference also removed from Datenschutz (privacy policy) third-party services list for consistency

## Deviations from Plan

### Auto-fixed Issues

**1. [Rule 2 - Missing Critical] Removed Formspree from Datenschutz section**
- **Found during:** Task 1 (Contact form fix)
- **Issue:** Line 591 still listed "Formspree" as a potential third-party service in the privacy policy section, contradicting the mailto-only decision
- **Fix:** Removed "Formspree" from the Drittanbieter-Dienste list
- **Files modified:** deliverables/B-spezifikation/content.md
- **Verification:** grep confirms no Formspree/Netlify references remain
- **Committed in:** 21f1f6e (Task 1 commit)

**2. [Rule 2 - Missing Critical] Softened KPI table Lighthouse entries**
- **Found during:** Task 1 (Lighthouse language review)
- **Issue:** KPI table (lines 338-339) had Lighthouse Performance and Accessibility scores as firm targets without Richtwert qualifier
- **Fix:** Added "(Richtwert)" to both KPI Lighthouse entries
- **Files modified:** deliverables/B-spezifikation/content.md
- **Verification:** grep confirms aspirational language present
- **Committed in:** 21f1f6e (Task 1 commit)

---

**Total deviations:** 2 auto-fixed (2 missing critical consistency)
**Impact on plan:** Both auto-fixes ensure consistency with the core Lighthouse and contact form decisions. No scope creep.

## Issues Encountered
None

## User Setup Required
None - no external service configuration required.

## Next Phase Readiness
- All Phase 5 specification sections (DEL-B1 through B3, HERM-03) are reviewed and consistent
- PDF pipeline verified working
- Ready for Phase 6 (specification-tech) to review B4-B7 content in lines 858+
- Phase 6 content already exists in content.md and will follow the same review pattern

---
*Phase: 05-specification-core*
*Completed: 2026-03-13*

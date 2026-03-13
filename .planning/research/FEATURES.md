# Feature Landscape

**Domain:** Sports website for FHGR WINF1 (Bachelor Sport Management)
**Researched:** 2026-03-13
**Confidence:** HIGH (assignment requirements verified), MEDIUM (sports industry trends from multiple sources)

## Table Stakes

Features the professor expects. Missing = grade deduction.

| Feature | Why Expected | Complexity | Notes |
|---------|--------------|------------|-------|
| Bilingual DE/EN website | Assignment requirement | Medium | Astro i18n routing handles URL structure |
| Responsive design (mobile + desktop) | Modern web standard; 65% of sports fans on mobile | Low | Tailwind responsive utilities |
| Docker containerization | Assignment requirement | Low | Multi-stage Dockerfile, nginx:alpine |
| Automated tests proving functionality | Assignment requirement | Medium | Playwright E2E tests |
| Clean navigation with sticky header | Basic UX; users expect persistent access to key sections | Low | Header nav, footer, breadcrumbs |
| Professional PDF documents (A, B, C, D) | Assignment deliverables | Medium | Pandoc + Eisvogel pipeline |
| Page count minimums met | Grading criteria: A>=2, B>=10, C>=10, D>=5 | Low | Structure to fill naturally |
| German academic tone in PDFs | Assignment language requirement | Low | Writing style discipline |
| Brand book applied consistently | Assignment requirement; brand identity throughout site + docs | Medium | Colors, fonts, spacing, logo usage |
| GitHub repository with cohesive presentation | Assignment requirement | Low | Clean README, organized structure |
| HERMES project management artifacts | Assignment methodology requirement | Medium | Phase gates, key documents |
| Hero section with dynamic content | Every professional sports site leads with high-impact visuals | Low | Full-width image/video with overlay text |
| About/mission page | Establishes credibility and context for the project | Low | Brand story, purpose, team info |
| Media gallery (photos/video) | Visual storytelling is central to sports sites | Medium | Lightbox gallery, embedded video |
| Contact + social links | Basic expectation for any organization site | Low | Contact info + social icons |
| Cookie/privacy notice + Impressum | Swiss/EU legal requirement | Low | Simple banner; Impressum page |
| Accessibility basics (WCAG 2.1 AA) | Legal/ethical standard, shows awareness | Medium | Alt text, contrast, keyboard nav, semantic HTML |

## Differentiators

Features that elevate the grade from "meets requirements" to "genuinely impressive."

| Feature | Value Proposition | Complexity | Notes |
|---------|-------------------|------------|-------|
| Creative/novel sports topic | Stands out among generic club sites; shows research depth | Low | See topic recommendations below |
| Interactive data visualizations | Shows technical depth; professors notice this immediately | High | Chart.js or D3.js -- topic-specific data |
| Polished visual design (brand book quality) | Shows design thinking beyond templates | Medium | Custom design system via Tailwind |
| Dark/light theme toggle | Modern UX touch, demonstrates CSS mastery | Medium | CSS custom properties + JS toggle |
| Animated page transitions / micro-interactions | Professional feel, smooth UX | Low | CSS transitions, Intersection Observer |
| Performance optimization (Lighthouse 95+) | Demonstrates technical competence | Low | Astro ships zero JS by default |
| Language switcher with smooth UX | Shows internationalization skill | Low | Astro i18n + locale toggle component |
| Visual regression tests | Goes beyond basic E2E testing | Medium | Playwright screenshot comparison |
| CI/CD pipeline (GitHub Actions) | Professional development workflow | Medium | Auto-build, auto-test on push |
| Docker Compose one-command setup | Easy for professor to evaluate | Low | `docker compose up` and done |
| PDF documents with consistent branding | Cohesive deliverable set -- site and docs feel unified | Medium | Eisvogel customization matching brand book |
| Interactive wireframes (clickable prototype) | Shows UX thinking in Deliverable C | Medium | Penpot prototyping + static PDF export |
| Scroll-triggered animations / parallax | Visual wow factor on key pages | Medium | Intersection Observer API |
| Search functionality | Useful for content-heavy sites | Medium | Client-side search (Pagefind or similar) |

## Anti-Features

Features to deliberately NOT build. These are scope traps for a semester project.

| Anti-Feature | Why Avoid | What to Do Instead |
|--------------|-----------|-------------------|
| Backend/database/CMS | Out of scope; assignment is a web project not web app | Static site with structured content files |
| User authentication/login | No requirement; massive scope creep (auth, sessions, security) | None needed |
| E-commerce/shop | Payment integration is a project in itself | Link to external shop if relevant |
| Contact form with email sending | Requires backend, unreliable in Docker | Static contact info or mailto link |
| Real-time chat/forum | Requires WebSocket, moderation, database | Link to Discord/social community |
| JavaScript-heavy SPA behavior | Slower, harder to test, overkill for content site | Astro MPA with zero JS default |
| WordPress/CMS integration | Explicitly out of scope per project constraints | Astro static site |
| Complex build tooling (Webpack, etc.) | Astro/Vite handles everything | Use Astro's built-in build |
| Over-engineering Docker (Kubernetes, reverse proxies) | Unnecessary for single-site deployment | Simple Docker Compose with 2 services max |
| Multiple PDF tools | Consistency matters more than features | Pandoc + Eisvogel for everything |
| Social media feed embedding | API rate limits, visual inconsistency, GDPR issues | Static content + links to social profiles |
| AI chatbot | Gimmicky; adds complexity without grading value | Good content and navigation instead |

## Content Sections (Site Map)

Based on analysis of professional sports websites, a well-structured sports site needs:

### Primary Navigation (6-7 pages)
1. **Home** -- Hero image/video, latest highlights, upcoming events teaser, mission statement
2. **About** -- Mission, story, history, team/organization, values
3. **News/Blog** -- Articles, updates, event recaps (card grid layout, date-sorted)
4. **Events/Schedule** -- Calendar or list of upcoming events, past event archive
5. **Gallery/Media** -- Photo galleries with lightbox, embedded videos, highlights
6. **Data/Stats** -- Interactive visualizations (the differentiator page, topic-specific)
7. **Contact** -- Contact information, location/map, social links

### Secondary/Footer Navigation
- Impressum (legally required in Switzerland)
- Datenschutz / Privacy Policy
- Language switcher (DE/EN)
- Social media links (icons)

### Optional (Topic-Dependent)
- **Athletes/Profiles** -- Cards with photos, stats, bios
- **Partners/Sponsors** -- Logo grid with links
- **Community** -- How to get involved, resources
- **FAQ** -- Common questions

### Content per Page (Minimum for Quality)
- Home: 3-5 content blocks (hero, intro, highlights, events teaser, CTA)
- About: 500+ words, team section, timeline or history
- News: 5-8 articles minimum (mix of lengths)
- Events: 4-6 events (past and upcoming)
- Gallery: 15-20 images minimum, 2-3 videos
- Data: 3-5 interactive visualizations
- Contact: Map/location, 3+ contact methods, social links

---

## Creative Topic Recommendations

Ranked by novelty, feasibility, and "wow factor" for a Sport Management professor at FHGR in Graubunden.

### Rank 1: GreenSport Graubunden -- Carbon Footprint Tracker for Alpine Sports Events

**Novelty:** HIGH | **Feasibility:** HIGH | **Graubunden Relevance:** PERFECT | **Confidence:** MEDIUM

A platform tracking and visualizing the environmental impact of alpine sports events in Graubunden. Intersection of sport + sustainability + data visualization. Features carbon calculators, event sustainability ratings, and venue comparisons.

**Why this wins:**
- Sustainability is THE dominant trend in sports 2026 (UN Sports for Climate Action Framework; signatories pledged 50% emission reduction by 2030)
- Directly relevant to Graubunden: Flims Laax Falera launched "Greenstyle" to become world's first self-sustaining alpine destination
- Swiss ski resorts actively fighting climate change -- Lenzerheide, Arosa, Davos all pursuing sustainability programs
- Data visualization differentiator: interactive charts comparing CO2 per event, travel impact calculators, green venue scores
- Sport Management students SHOULD understand sustainability -- this shows domain maturity
- Not a generic club site -- it is a tool/platform concept that demonstrates innovation
- Bilingual DE/EN fits naturally (Swiss domestic + international events)
- Rich content potential: event profiles, venue comparisons, best practices, news articles

**Data visualization ideas:**
- Carbon footprint comparison chart (different alpine sports events)
- Interactive travel impact calculator (origin city -> event venue)
- "Green Score" rating system for venues (energy, waste, transport, water)
- Timeline of sustainability milestones in Swiss alpine sports
- Map of sustainable venues in Graubunden with filtering

**Risk:** Could feel preachy if not balanced with celebration of sport itself. Frame as "empowering better choices" not "shaming."

---

### Rank 2: VerticalPulse -- Digital Hub for Indoor Climbing & Bouldering Culture

**Novelty:** HIGH | **Feasibility:** HIGH | **Swiss Relevance:** HIGH | **Confidence:** MEDIUM

A lifestyle/culture platform for the booming indoor climbing and bouldering community. Features gym profiles, route difficulty data, technique resources, community events, and technology showcases.

**Why this is strong:**
- Sport climbing became Olympic in Tokyo 2020; massive growth trajectory in Switzerland
- Tech-forward sport with real digital products: Moonboard LED training walls, Lizcore NFC tracking bracelets, Redpoint tracking app
- Appeals to young demographic (18-35) -- relevant for Sport Management market analysis
- Rich visual content potential: dramatic climbing photography, technique videos
- Data angle: route difficulty distributions, gym comparisons, grade progression tracking
- Community angle: local events, competitions, meetups

**Data visualization ideas:**
- Grade distribution across Swiss climbing gyms
- Route difficulty progression tracker
- Gym comparison dashboard (facilities, grades, pricing)
- Climbing popularity growth over time (Olympic effect)

**Risk:** Many climbing apps already exist; the site needs to focus on culture/community rather than trying to be another tracking tool.

---

### Rank 3: SportainmentLab -- Platform for Creator-Led Digital Sports Leagues

**Novelty:** HIGH | **Feasibility:** HIGH | **Swiss Relevance:** MEDIUM-HIGH | **Confidence:** MEDIUM

A platform analyzing and showcasing the revolution of creator-led sports leagues -- Kings League (Pique, $63M raised), Baller League (Hummels/Podolski, $25M), and emerging formats designed for digital consumption.

**Why this works:**
- This is a REAL disruption: Kings League raised $63M, Baller League raised $25M in 2024
- Baller League started in Germany (cultural proximity to Swiss-German context)
- Perfect Sport Management topic: how digital media disrupts traditional sports business models
- Unlike traditional sports sites, these leagues monetize through creator fanbases, streaming, and viral content -- not tickets
- Shows awareness of Gen Z sports consumption patterns
- Content-rich: league explainers, creator profiles, rule comparisons, format analysis, business model breakdowns

**Data visualization ideas:**
- Revenue model comparison: traditional league vs. sportainment league
- Viewership growth charts (YouTube/Twitch vs. broadcast TV)
- Format comparison matrix (rules, duration, team size, distribution)
- Investment timeline in creator sports

**Risk:** Could feel more like a media analysis site than a sports site. Need sports content (match recaps, athlete profiles) alongside the analytical angle.

---

### Rank 4: DroneArena -- Autonomous Drone Racing Hub

**Novelty:** VERY HIGH | **Feasibility:** MEDIUM | **Swiss Relevance:** MEDIUM | **Confidence:** LOW

A platform for the emerging sport of FPV and autonomous drone racing. Features race results, pilot/AI profiles, technology explainers, course designs, and the AI-vs-human narrative.

**Why this is bold:**
- A2RL 2026 Championship made global headlines: AI drone beat human world champion 5-4 in Abu Dhabi
- AI Grand Prix launching qualification phase April 2026 with Python-based AI algorithms
- MultiGP is in its 12th season as world's largest drone racing league
- Intersection of sport + AI + technology is genuinely novel
- Visually spectacular content (FPV footage, course designs)
- Philosophical angle: what happens when AI surpasses humans in sport?

**Risk:** May feel too "tech" and insufficiently "sport management" for the program context. Content sourcing could be difficult without direct connections to the community.

---

### Rank 5: ExerZone -- Where Gaming Meets Physical Fitness

**Novelty:** MEDIUM-HIGH | **Feasibility:** HIGH | **Swiss Relevance:** MEDIUM-HIGH | **Confidence:** MEDIUM

A platform showcasing the exergaming movement where physical fitness meets gaming technology. Features facility profiles, workout/game reviews, technology showcases, and the future of fitness.

**Why this is viable:**
- The ExerCube is a SWISS product (3D cube with projectors, motion tracking, heart rate sensing)
- ICAROS (flight simulator controlled by core muscles), LYMB.iO (wall projections with sensors) are real products
- FIBO 2026 has dedicated "Gaming & Activity Area" for esports + exergaming
- Interesting Sport Management angle: how traditional gyms compete with gamified fitness
- Growing market projected to rival traditional gym memberships by 2026

**Risk:** Could feel like a product review site rather than a sports community site. Need to frame around the movement/culture, not just gadgets.

---

### Rank 6: AdaptiveSport.ch -- Inclusive Sports Technology Platform

**Novelty:** HIGH | **Feasibility:** MEDIUM | **Swiss Relevance:** HIGH | **Confidence:** MEDIUM

A platform highlighting adaptive sports technology -- prosthetics, sports wheelchairs, AI coaching tools, and AR rehabilitation enabling athletes with disabilities.

**Why this matters:**
- Strong Swiss values of inclusion; post-Paralympics momentum continues
- Real technology: carbon-fiber running blades, AR (HoloLens 2) rehabilitation, AI-powered training
- Meaningful topic showing social awareness and maturity
- "Adaptive Synergy" framework integrates biomechanics, sport psychology, neuroscience

**Risk:** Sensitive topic requiring careful, respectful treatment. Content sourcing requires access to adaptive sports community. Could feel patronizing if not done with genuine involvement.

---

### Topic Recommendation

**Go with Rank 1: GreenSport Graubunden** because:
1. Perfect alignment with FHGR location (Graubunden alpine context)
2. Sustainability is the strongest trend in sports 2026 -- shows market awareness
3. Natural data visualization opportunities (the key technical differentiator)
4. Rich content for 6+ website pages without stretching
5. Academic depth for 10+ page specification and wireframe documents
6. Not a generic club/event site -- it is a concept platform
7. Bilingual DE/EN makes natural sense (Swiss + international events)

**Fallback: Rank 2 (VerticalPulse)** if sustainability feels too "serious" and a more energetic/youth-culture topic is preferred.

---

## Feature Dependencies

```
Brand Book / Design System
  --> All visual components (hero, gallery, nav, cards)
  --> PDF document styling (Eisvogel config)
  --> Must be created FIRST

Topic Selection
  --> All content creation
  --> All deliverable documents
  --> Drives everything; decide in Phase 1

Astro i18n Setup
  --> All website pages (URL routing per language)
  --> Must be architectural decision early

Responsive Layout Framework
  --> Every page and component
  --> Established with first page template

Navigation Structure (Site Map)
  --> All pages
  --> Informs content creation and wireframes

Content / Data Model
  --> News articles, events, gallery items, data points
  --> Informs page templates and components

Media Assets (photos, video, icons)
  --> Hero section, gallery, article images, data visualizations
  --> Can be sourced/created in parallel with development

Interactive Visualizations
  --> Requires data model defined first
  --> Requires responsive framework working
  --> Topic-specific (sustainability data, climbing stats, etc.)

Docker Setup
  --> Can scaffold early (skeleton Dockerfile)
  --> Full setup requires working site

Test Suite
  --> Requires deployed/running site
  --> Write tests alongside feature development

Deliverable A (Thema) --> Deliverable B (Spezifikation) --> Deliverable C (Wireframes) --> Deliverable D (Website + Docs)
```

## MVP Recommendation

**Phase 1 priorities (before Mar 16 deadline -- Deliverable A):**
1. Topic selection finalized (GreenSport Graubunden recommended)
2. Pandoc + Eisvogel PDF pipeline working
3. Deliverable A: Thema/Beschrieb PDF (2+ pages, German)
4. Brand Book initial draft (colors, fonts, logo concept)

**Phase 2 priorities (before Apr 13 deadline -- Deliverable B):**
1. Brand Book completed
2. HERMES artifacts: Requirements spec, solution architecture, test concept
3. Deliverable B: Spezifikation PDF (10+ pages, German)
4. Site map and content model defined

**Phase 3 priorities (before Apr 27 deadline -- Deliverable C):**
1. Wireframes for all pages in Penpot
2. Interactive prototype (clickable)
3. Deliverable C: Wireframes PDF (10+ pages, German)
4. Astro project scaffold with i18n

**Phase 4 priorities (before May 18 deadline -- Deliverable D):**
1. Full Astro site: all pages, content, styling per brand book
2. Interactive data visualizations (key differentiator)
3. Docker + nginx deployment
4. Playwright E2E tests
5. Deliverable D: Website documentation PDF (5+ pages, German)
6. HERMES closure artifacts

**Defer (only if time permits):**
- Dark/light theme toggle
- CI/CD pipeline (GitHub Actions)
- Visual regression tests
- Scroll animations / parallax
- Search functionality
- PWA features

---

## HERMES Artifacts for This Web Project

HERMES (Hermes 2022, Swiss federal PM methodology) defines specific artifacts per phase. Using the **IT Development scenario** (IT-Individualanwendung), adapted for an academic web project.

### Phase 1: Initialisierung (Initiation) -- Maps to Deliverable A

| Artifact (DE) | Artifact (EN) | Description | Priority |
|---|---|---|---|
| Projektinitialisierungsauftrag | Project Initiation Order | Project goals, scope, constraints, authorization to proceed | MUST |
| Studie | Study | Desired solution description, variant comparison, recommendation | MUST |
| Rechtsgrundlagenanalyse | Legal Basis Analysis | Legal/regulatory requirements (GDPR, Swiss law) | NICE |
| Schutzbedarfsanalyse | Protection Needs Analysis | Data protection and security assessment | NICE |
| Beschaffungsanalyse | Procurement Analysis | Build vs. buy analysis for tools/services | NICE |
| Prototyp-Dokumentation | Prototype Documentation | Early proof-of-concept documentation | NICE |

**Quality Gate:** Projektinitialisierungsfreigabe (Project Initiation Release)

### Phase 2: Konzept (Concept) -- Maps to Deliverable B

| Artifact (DE) | Artifact (EN) | Description | Priority |
|---|---|---|---|
| Anforderungsspezifikation | Solution Requirements | Functional and non-functional requirements | MUST |
| Lösungsarchitektur | Solution Architecture | Technology stack, system structure, interfaces | MUST |
| Systemkonzept | System Concept | Technical architecture and component design | MUST |
| Testkonzept | Test Concept | Testing strategy, test cases, acceptance criteria | MUST |
| Projektmanagementplan | Project Management Plan | Timeline, milestones, resources, risk management | MUST |
| Organisationskonzept | Organization Concept | Roles, processes, responsibilities | SHOULD |
| Einführungskonzept | Deployment Concept | Rollout plan, Docker deployment strategy | SHOULD |
| Betriebskonzept | Operating Concept | How the site will be operated/maintained | SHOULD |
| ISDS-Konzept | ISDP Concept | Information security and data protection concept | NICE |
| Integrationskonzept | Integration Concept | How components connect | NICE |
| Migrationskonzept | Migration Concept | N/A for greenfield project | SKIP |
| Phasenbericht | Phase Report | Summary of concept phase outcomes | SHOULD |
| Projektstatus | Project Status Report | Current status, risks, issues | SHOULD |

**Quality Gate:** Konzeptfreigabe (Concept Release)

### Phase 3: Realisierung (Implementation) -- Maps to Deliverables C + D

| Artifact (DE) | Artifact (EN) | Description | Priority |
|---|---|---|---|
| Detailspezifikation | Detailed Specification | Wireframes, detailed page specs, component specs | MUST |
| System entwickelt | System Developed | The actual working website | MUST |
| Benutzerhandbuch | User Manual | How to navigate/use the site | SHOULD |
| Testbericht | Test Report | Test execution results, pass/fail summary | MUST |
| Betriebshandbuch | Operating Manual | Docker setup, deployment instructions, maintenance | MUST |
| Integrationsanleitung | Integration/Installation Instructions | How to build and run the Docker container | SHOULD |
| Arbeitsauftrag | Work Order | Task assignments and tracking | NICE |
| Änderungsstatusblatt | Change Status List | Tracking changes/decisions during implementation | NICE |

**Quality Gate:** Realisierungsfreigabe (Implementation Release)

### Phase 4: Einführung (Deployment) -- Maps to Deliverable D final

| Artifact (DE) | Artifact (EN) | Description | Priority |
|---|---|---|---|
| Abnahmebericht | Acceptance Report | Formal verification that site meets all requirements | MUST |
| Abnahme-Checkliste | Acceptance Checklist | Checklist of all requirements verified | SHOULD |
| System integriert | System Integrated | Deployed, operational Docker container | MUST |
| Einführungsmassnahmen durchgeführt | Deployment Measures Executed | Go-live checklist completed | SHOULD |

**Quality Gate:** Projektabschluss (Project Closure)

### Simplified HERMES for Academic Context

Not all artifacts need full enterprise depth. For this semester project, produce:

**Must produce (grading impact):**
1. Projektinitialisierungsauftrag (embed in Deliverable A)
2. Studie with variant comparison (embed in Deliverable A)
3. Anforderungsspezifikation (core of Deliverable B)
4. Lösungsarchitektur (core of Deliverable B)
5. Testkonzept (in Deliverable B) + Testbericht (in Deliverable D)
6. Projektmanagementplan with timeline (in Deliverable B)
7. Detailspezifikation / Wireframes (Deliverable C)
8. Betriebshandbuch with Docker instructions (in Deliverable D)
9. Abnahmebericht showing requirements met (in Deliverable D)

**Nice to have (shows thoroughness):**
- Schutzbedarfsanalyse (data protection awareness)
- Organisationskonzept (PM knowledge)
- ISDS-Konzept (security awareness)
- Phasenbericht at each quality gate

---

## Sources

### Sports Website Features and Design
- [DesignRush: Best Sports Website Designs 2026](https://www.designrush.com/best-designs/websites/trends/best-sports-websites)
- [Seahawk Media: Sports Website Design Best Practices](https://seahawkmedia.com/design/sports-website-design/)
- [ThemeBoy: Understanding UX for Sports Team Websites](https://www.themeboy.com/blog/understanding-ux-sports-team-websites/)
- [Elementor: How to Create a Sports Team Website 2026](https://elementor.com/blog/how-to-create-a-sports-team-website/)
- [Awwwards: Best Sports Websites](https://www.awwwards.com/websites/sports/)

### Sports Industry Trends 2026
- [Deloitte: 2026 Sports Industry Outlook](https://www.deloitte.com/us/en/insights/industry/technology/technology-media-telecom-outlooks/sports-industry-outlook.html)
- [PwC: Sports Industry Outlook 2026](https://www.pwc.com/us/en/industries/tmt/library/sports-outlook-north-america.html)
- [MobiDev: Sports Technology Trends 2026](https://mobidev.biz/blog/sports-technology-trends-innovations-to-adopt-in-sports-apps)
- [Elixirr: Sports Trends for 2026](https://www.elixirr.com/en-gb/sports-trends-for-2026/)
- [Nielsen: Media Trends Shaping Sports Marketing 2026](https://www.nielsen.com/insights/2025/tops-of-sports-2026/)

### Creative Topic Research
- [SauEnergy: Sports and Sustainability Inseparable 2026](https://www.saurenergy.com/solar-energy-blog/why-sports-and-sustainability-are-inseparable-in-2026-11032538)
- [PwC: Sports Sustainability Playbook](https://www.pwc.com/us/en/industries/tmt/library/sports-sustainability-playbook.html)
- [Green Sports Alliance](https://www.greensportsalliance.org/)
- [Shikenso: Creators x Football Sportainment Leagues](https://shikenso.com/blog/creators-football-europes-new-sportainment-leagues)
- [YPulse: Digital-First Sports Leagues](https://www.ypulse.com/newsfeed/2026/02/25/investors-are-betting-on-digital-first-sports-leagues-to-capture-young-fans-attention/)
- [A2RL: Autonomous Drone Racing Championship](https://a2rl.io/autonomous-drone-race)
- [ISPO: Digital Tools for Climbers](https://ispo.com/en/trends/climbing-training-best-digital-tools-climbers-and-boulderers)
- [TechCrunch: Lizcore Climbing Tracker](https://techcrunch.com/2024/02/27/lizcore/)
- [PitchBook: PE Targets Niche Sports](https://pitchbook.com/news/articles/from-padel-to-volleyball-pe-targets-increasingly-niche-sports)

### Graubunden / Swiss Context
- [MySwitzerland: Sustainable Ski Resorts](https://www.myswitzerland.com/en-us/planning/about-switzerland/sustainability/sustainable-activities/sustainable-winter-activities/11-swiss-ski-resorts-with-a-focus-on-sustainability/)
- [Naturmetropole: Technology in Grisons](https://naturmetropole.ch/en/invest/technology)
- [SWI: Climate Change Swiss Ski Resorts](https://www.swissinfo.ch/eng/tourism-trends/climate-change-in-the-alps-five-ways-swiss-ski-resorts-are-fighting-for-survival/90938802)

### HERMES Methodology
- [HERMES Online: Method Overview](https://www.hermes.admin.ch/en/project-management/method-overview.html)
- [HERMES Online: IT Development Scenario](https://www.hermes.admin.ch/en/project-management/scenarios/it-development.html)
- [HERMES Online: IT Development Scenario Overview (artifacts)](https://www.hermes.admin.ch/en/project-management/scenarios/it-development/scenario-overview.html)
- [HERMES Online: Phases](https://www.hermes.admin.ch/en/project-management/phases.html)
- [HERMES Reference Handbook PDF](https://www.hermes.admin.ch/_Resources/Persistent/e/8/5/9/e8596469c2f16dc3e0e5c43c85e6f7743f22435a/HERMES_PjM2022_DE.pdf)
- [Kanton Zurich HERMES Overview](https://hermes.zh.ch/de/pjm-2022/verstehen/methodenueberblick.html)
- [Projektron: HERMES Project Management](https://www.projektron.de/en/blog/details/hermes-project-management-3876/)

# Oxylabs customer story

- Reference URL: https://nexos.ai/customer-stories/oxylabs/
- Local URL: http://localhost:3000/customer-stories/oxylabs
- Listing: `/customer-stories` (locked, unchanged)
- Payhawk / Nord Security 46% / CyberCare / Pigu.lt: locked, unchanged

This page is **not** a Pigu.lt, Payhawk, Nord, or CyberCare reskin. It is a light 8-column editorial story with numbered challenge cards, a compact mid CTA, three how-steps with Oxylabs-story product rasters, and no related-stories rail.

## Screenshot Map

| Screenshot | Section |
| --- | --- |
| 01 | Hero: H1, one intro paragraph, Mia Lysikova byline, divider, 80% / 3x / 20% metrics, oxylabs-hero visual |
| 02 | Table of Contents |
| 03 | The Challenge: Implement a centralized AI platform + Juras Juršėnas quote (COO @Oxylabs) |
| 04 | Oxylabs faced these challenges: duplicate H2+body + three numbered cards |
| 05 | Compact mid CTA: Replace scattered AI tools and subscriptions / Buy now |
| 06 | The Solution + Oxylabs x nexos.ai success in numbers (80% / 3x Active user adoption / 20%) |
| 07 | Here’s how nexos.ai solved each challenge — 1. Model-agnostic approach + Compare Models visual |
| 08 | 2. Observability + team cost-control visual |
| 09 | 3. AI Gateway + workspace metrics/logs visual |
| 10 | The Result + Juras Juršėnas quote (COO of Oxylabs) |
| 11 | Final CTA: Discover AI platform for your business / Get nexos.ai |

Live has **no** Explore more / related-stories section. Header megamenu Payhawk teaser is shared chrome, not this page.

## Exact section inventory

HEADER (shared light chrome)
↓
HERO (`#hero`) — muted background, H1, one intro paragraph, Mia byline, divider, 3 metrics, square hero visual
↓
TABLE OF CONTENTS (`#tableofcontents`)
↓
THE CHALLENGE (`#the-challenge`) — heading, two paragraphs, quote
↓
OXYLABS CHALLENGES (`#oxylabs-challenges`) — duplicate heading+intro, 3 numbered cards, compact mid CTA
↓
THE SOLUTION (`#the-solution`) — copy + 3 KPI cards (3x label differs from hero)
↓
1. MODEL-AGNOSTIC (`#model-agnostic-approach`) — how H2 + step copy + compare-models raster
↓
2. OBSERVABILITY (`#observability`) — step copy + team-cost-control raster
↓
3. AI GATEWAY (`#ai-gateway`) — step copy + metrics/logs raster (xs on &lt;md)
↓
THE RESULT (`#the-result`) — two paragraphs + quote
↓
FINAL CTA (`#discover-banner`) — Discover AI platform / Get nexos.ai
↓
FOOTER (shared)

No video. No related-story cards.

## Hero

- Background: `bg-muted`
- H1 `heading-xl` 40/48 desktop, 32/40 mobile; two-line wrap on wide desktop
- Single intro paragraph (not Payhawk’s two)
- Author then divider then metrics (Payhawk-like; not Nord’s metrics-then-author)
- Metrics: **80%** Onboarding rate reached in 30 days; **3x** Boost in AI project development; **20%** Drop in operational costs
- Author: By Mia Lysikova, 40px circle (Payhawk `mia-lysikova.webp` reused)
- Visual: `oxylabs-hero` 736×736 `rounded-md`; `md:w-[280px] lg:w-[325px]`; shown on mobile under copy

## Customer / company identity

- Company: Oxylabs — online proxy and web scraping service; proxies and public data extraction for e-commerce, brand protection, cybersecurity
- Spokesperson: Juras Juršėnas
- Challenge attribution: COO @Oxylabs
- Result attribution: COO of Oxylabs
- Portrait: live asset `Justas` (1110×1110), 54px circle in quotes
- Hero branding: Oxylabs wordmark lives inside the hero raster (purple grid + product UI). Listing logo SVG is not used on this detail page.

## Story / article structure

8-col editorial (`lg:col-span-8 lg:col-start-3`). `py-16` sections. H2 32/40, H3/step 22/28.6, body 16/24. Quotes 20/30 on muted `p-8` cards.

Authorized duplicate: H2 and following paragraph are both “Oxylabs faced these challenges:”.

## Exact authorized copy

All live paragraphs, TOC labels, quotes, metric labels, and CTA labels are in `src/data/customer-stories/oxylabs.ts`. No Payhawk / Nord / CyberCare / Pigu.lt copy.

Inline links:

- Solution: `nexos.ai` → `/`
- Step 1: `all leading LLMs under one roof` → `/ai-workspace-for-multiple-llms`
- Step 2: `observability` → `/features/llm-observability`
- Step 3: `AI Gateway` → `/ai-gateway`
- Buy now / Get nexos.ai → `/pricing` (live Buy now opens a modal; project exclusion)

## Quotes

1. “We needed an AI platform that evolved rapidly to keep up with new, constantly emerging LLM models.” — Juras Juršėnas, COO @Oxylabs
2. “nexos.ai has significantly accelerated our AI transformation journey. With seamless access to the latest models and transparent cost management, we’ve gained both agility and clarity.” — Juras Juršėnas, COO of Oxylabs

## Statistics / metrics / results

Hero: 80% / 3x (Boost in AI project development) / 20%

Solution cards: 80% / 3x (**Active user adoption rate**) / 20%

Narrative: 80% in 30 days; development increased three times; doubled AI-driven feature output; 20% operational-cost drop; 200 AI models.

## Product screenshots / images / SVGs

| Role | Asset | Notes |
| --- | --- | --- |
| Hero | `oxylabs-customer-story-hero.webp` | `oxylabs-hero` |
| Quote portrait | `oxylabs-customer-portrait.webp` | live alt Justas |
| Compare Models | `oxylabs-compare-models.webp` | max-width 568 |
| Observability | `oxylabs-team-cost-control.webp` | max-width 555 |
| Gateway desktop | `oxylabs-workspace-metrics.webp` | full 8-col |
| Gateway mobile | `oxylabs-workspace-metrics-xs.webp` | &lt;md |
| Mid CTA glow | `oxylabs-mid-cta-gradient.svg` | SMIL-animated blob |
| Final CTA | Payhawk banner blob + purple mask | identical live files |

Numbered card icons are inline SVGs (circle-1/2/3), accent color. No videos.

## Related stories

Not present on the live Oxylabs detail page.

## CTA sections

- Mid: compact 8-col dark bar, heading left / Buy now right from `md`; stacked centered on mobile. Animated gradient SVG. No Payhawk kicker line.
- Final: full-container dark banner, heading + Get nexos.ai. Same blob/mask as Payhawk/listing, Oxylabs-local component.

## Animations / interactions

- Mid-CTA SVG ellipse pulses (SMIL)
- TOC / inline link hover color
- Buy now / Get nexos.ai button hover
- No GSAP, no scroll-pinned product sequences, no generic fade-up on every paragraph

## Desktop / tablet / mobile

- 1440 / 1280: 8-col article, hero row, 3 KPI cards
- 1024: still 8-col at `lg`; hero image 325 then 280 at `md`
- 768: single column, KPI cards still 3-col from `md`, mid CTA horizontal
- 390: stacked hero, 1-col metrics and KPIs, mid CTA stacked, gateway xs raster

## Original vs local differences

- Live Buy now opens a pricing modal; local goes to `/pricing`
- Project exclusions: no Sign in, social, tel
- Title template is `%s · Brand` rather than live `| nexos.ai`
- How-step titles are `h3` for accessibility; live uses `span.heading-sm`

## Screenshot-by-screenshot QA

| Screenshot | Result | Notes |
| --- | --- | --- |
| 01 Hero | PASS | H1, intro, Mia, metrics, oxylabs-hero |
| 02 TOC | PASS | Groups and children match live |
| 03 Challenge + quote | PASS | Juras / COO @Oxylabs |
| 04 Numbered challenges | PASS | Duplicate heading kept; circle 1–3 |
| 05 Mid CTA | PASS | Compact bar, not Payhawk tall banner |
| 06 Solution + KPIs | PASS | 3x label = Active user adoption rate |
| 07 Compare Models | PASS | Oxylabs raster, not Payhawk still |
| 08 Observability | PASS | Team budget + person raster |
| 09 AI Gateway | PASS | Metrics/logs raster |
| 10 Result + quote | PASS | COO of Oxylabs |
| 11 Final CTA | PASS | Discover / Get nexos.ai |

## Content-by-content QA

- [x] customer-story H1 exact
- [x] intro exact
- [x] Oxylabs company information exact
- [x] spokesperson / titles exact (two COO variants)
- [x] every H2 exact
- [x] every step heading exact
- [x] every paragraph present
- [x] duplicate challenges heading present
- [x] every quote exact
- [x] every statistic / metric exact
- [x] CTA labels exact
- [x] NO Payhawk / Nord / CyberCare / Pigu.lt content mixed in

## Asset-by-asset QA

Hero, Juras/Justas portrait, three product rasters + xs, mid-CTA SVG downloaded. Mia byline and final-CTA blobs reused from existing identical files. Listing Oxylabs logo SVG not used on this page (not shown in article chrome).

## Customer-story crosscheck

Oxylabs-specific files under `src/components/customer-stories/oxylabs/`, `src/data/customer-stories/oxylabs.ts`, `src/assets/customer-stories/oxylabs.ts`. Payhawk/Nord/CyberCare/Pigu components were not edited. Shared primitives: Header, Footer, Container, Button, 8-col StoryColumn pattern copied into an Oxylabs file.

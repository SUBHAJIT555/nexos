# Hostinger customer story

- Reference URL: https://nexos.ai/customer-stories/hostinger/
- Local URL: http://localhost:3000/customer-stories/hostinger
- Listing: `/customer-stories` (locked, unchanged)
- Payhawk / Nord 46% / CyberCare / Pigu.lt / Oxylabs: locked, unchanged

This page is **not** an Oxylabs reskin. Differences: two hero paragraphs, **two** hero metrics, four numbered challenge cards inside `#the-challenge`, disc bullets, Dainius Kavoliūnas quotes, mid CTA **Get nexos.ai**, three how-steps (gateway / log-spans / fallback), no related-stories rail.

## Screenshot Map

| Screenshot | Section |
| --- | --- |
| 01 | Hero: H1, two intros, Mia byline, divider, 30% / 3M+, hostinger-hero visual |
| 02 | Table of Contents |
| 03 | The Challenge + disc list + Dainius quote |
| 04 | Four numbered cards + compact mid CTA (Get nexos.ai) |
| 05 | The Solution + success-in-numbers (30% / 3M+ / 6+) |
| 06 | Here’s how — 1. AI gateway + workspace metrics visual |
| 07 | 2. Enterprise-grade scaling + log-spans visual |
| 08 | 3. Built-in fallback logic + fallback-model visual |
| 09 | The Result + Dainius closing quote |
| 10 | Final CTA: Discover AI platform / Get nexos.ai |

Live has **no** related-stories section.

## Exact section inventory

HEADER (shared light chrome)
↓
HERO (`#hero`) — muted, H1, two paragraphs, Mia, divider, 2 metrics, Hostinger hero raster
↓
TABLE OF CONTENTS (`#tableofcontents`)
↓
THE CHALLENGE (`#the-challenge`) — heading, two paras, 3 disc bullets, quote, cards intro, 4 numbered cards, compact mid CTA
↓
THE SOLUTION (`#the-solution`) — copy + 3 KPI cards
↓
1. AI GATEWAY (`#ai-gateway`) — how H2 + step + metrics/logs raster
↓
2. ENTERPRISE SCALING (`#enterprise-grade-scaling`) — copy + centered log-spans raster
↓
3. FALLBACK (`#built-in-fallback-logic`) — copy + centered fallback-model raster
↓
THE RESULT (`#the-result`) — two paragraphs + quote
↓
FINAL CTA (`#discover-banner`)
↓
FOOTER (shared)

No video. No Hostinger Horizons product UI beyond naming in copy. Hero branding is the Hostinger wordmark inside `hostinger-hero`.

## Hero

- Two intro paragraphs (Oxylabs had one)
- Metrics: **30%** Saved in developer hiring costs; **3M+** Client websites on Hostinger — 2-col from `sm`
- Author: By Mia Lysikova (Payhawk still reused)
- Visual: `hostinger-hero` 736×736, Hostinger logo on purple grid + product UI

## Customer identity

- Spokesperson: Dainius Kavoliūnas, Head of Product @Hostinger Horizons (same on both quotes)
- Portrait: live `Dainius-Kavoliu-nas` 80×80 source, displayed 54px
- Company: Hostinger / Hostinger Horizons no-code web app builder

## Copy completeness

All live paragraphs, bullets, quotes, and KPI labels are in `src/data/customer-stories/hostinger.ts`. Authorized grammar on cards intro: “in-house **mean** a range of challenges”. Listing headline uses “scales”; H1 uses “scaled”.

Links: `all the top models` → `/ai-workspace-for-multiple-llms`; `nexos.ai Gateway` → `/ai-gateway`. Mid + final CTAs → `/pricing`.

## Quotes

1. “If we tried building an AI gateway ourselves, it would have taken **months and a huge dev budget.**”
2. “Integrating nexos.ai was seamless. It saved us the **equivalent of two yearly salaries** in development cost.”

## Metrics

Hero: 30% / 3M+. Solution cards add **6+** Months of development saved.

## Assets

| Role | Asset |
| --- | --- |
| Hero | `hostinger-customer-story-hero.webp` |
| Quote portrait | `hostinger-customer-portrait.webp` |
| Log spans | `hostinger-log-spans.webp` |
| Fallback model | `hostinger-fallback-model.webp` |
| Gateway metrics | reused Oxylabs `oxylabs-workspace-metrics.webp` + xs (identical CDN transform) |
| Mid CTA | reused Oxylabs `oxylabs-mid-cta-gradient.svg` |
| Mia / final CTA blobs | reused Payhawk files |

Circle-1…4 inline SVGs. No videos.

## Animations

Mid-CTA SVG SMIL pulse only. No GSAP. No fade-up on editorial copy.

## Screenshot-by-screenshot QA

| Screenshot | Result |
| --- | --- |
| 01 Hero | PASS |
| 02 TOC | PASS |
| 03 Challenge + quote | PASS |
| 04 Cards + mid CTA | PASS (Get nexos.ai, not Buy now) |
| 05 Solution KPIs | PASS |
| 06 AI gateway visual | PASS |
| 07 Log spans | PASS |
| 08 Fallback model | PASS |
| 09 Result quote | PASS |
| 10 Final CTA | PASS |

## Content / asset / crosscheck

- No Payhawk / Nord / CyberCare / Pigu / Oxylabs copy mixed in
- Hostinger-only components under `src/components/customer-stories/hostinger/`
- Shared files imported only where CDN assets are identical

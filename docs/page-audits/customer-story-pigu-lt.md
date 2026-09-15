# Pigu.lt customer story

- Reference URL: https://nexos.ai/customer-stories/pigu-lt/
- Local URL: http://localhost:3000/customer-stories/pigu-lt
- Listing: `/customer-stories` (locked)
- Payhawk: `/customer-stories/payhawk` (locked)
- Nord Security 46%: `/customer-stories/nord-security` (locked)
- CyberCare / Nord Security: `/customer-stories/cybercare-nordsecurity` (locked)

This is a **light marketing** customer story with Pigu.lt-specific hero, Meet, Before/With comparison cards, product rasters, MP4 testimonial, and a dark future/CTA close. It is not a Payhawk 8-col editorial clone and not a CyberCare dark story.

## Screenshot Map

| Screenshot | Section |
| --- | --- |
| 01 | Hero: H1, intro, Buy now, 99.8% / 4.5M, By Mia Lysikova, pigult-hero visual |
| 02 | Meet Pigu.lt — Client at a glance + pigu-about composite |
| 03 | Before nexos.ai — Scaling leading online retailer + two issue cards + people-working photo |
| 04 | Quote — Vytautas Romeika, pigu.lt wordmark, portrait |
| 05 | With nexos.ai — Integrating AI + Massive cost reduction comparison + 99.8% savings bar |
| 06 | Product visual — description-enhance raster |
| 07 | Fast AI processing — 3 years → 1.5 months |
| 08 | Automatic image filtering + image-filtering raster |
| 09 | Product translation at scale — $350K → $30K, Savings 90% + translation raster |
| 10 | Automated intelligence for sensitive categories + Instant market pricing |
| 11 | Video testimonial (nexos.ai × pigu.lt) |
| 12 | Future / What’s next + Scale your operations with AI CTA |

Live also includes **Explore more customer stories** (Payhawk, Oxylabs, Hostinger **scaled**) after the CTA. Not in the attached screenshots; included for content completeness.

Hidden live nodes omitted: 0-size Romas Strabeika quote/portrait; duplicate “Cost for AI to automatically refine one product description” metric.

## Exact section inventory

HEADER (shared light chrome)
↓
HERO (`#hero`) — muted `#eff4f8`, H1, intro, Buy now, divider, 2 metrics, Mia byline, 427px hero visual
↓
MEET (`#meet-pigult`) — Client at a glance, 2 paragraphs, about raster
↓
BEFORE (`#manually-enriching`) — two bordered cards + people-working photo
↓
QUOTE (`#quality-issues`) — white card, pigu wordmark, Vytautas portrait
↓
WITH INTRO + COST (`#massive-cost-reduction`) — light gradient, comparison cards, 99.8% bar, description-enhance visual
↓
FAST AI (`#fast-ai-processing`)
↓
IMAGE FILTERING (`#automatic-image-filtering`) + raster
↓
TRANSLATION (`#product-translation`) + raster
↓
SENSITIVE CATEGORIES (`#automated-intelligence`)
↓
INSTANT PRICING (`#instant-market-pricing`)
↓
VIDEO (`#video`) — autoplay muted loop MP4
↓
FUTURE (`#whats-next`) — dark gradient
↓
CTA (`#scale-with-ai`) — sphere banner, Buy now accent
↓
RELATED (`#explore-more`) — 3 cards
↓
FOOTER (shared)

## Hero

- Background: `bg-muted` `#eff4f8`
- H1 Space Grotesk 40/48 desktop, 32/40 mobile, max ~709px, two-line wrap
- Intro 16/24 `text-neutral-700`
- Buy now: dark `#071013` pill, 48px, `/pricing`
- Divider then **two** metrics (not Payhawk’s three): **99.8%**, **4.5M**
- Author after metrics: By Mia Lysikova, 40px circle (Payhawk Mia still reused)
- Visual: `pigult-hero` 736×736 displayed ~427, `rounded-md`; mobile duplicate below

## Pigu.lt branding

- Hero logo is **inside** the hero raster (white cart + pigu.lt on purple grid) — not a separate overlay
- Quote uses dedicated wordmark SVG `pigu-lt-quote-logo.svg` (81×24, displayed 115×34, `#0A7BFF`) — not the listing 93×60 card logo
- Listing `pigu-lt.svg` is **not** used on this detail page

## Customer identity / portraits

- Author byline: Mia Lysikova (story author, not a Pigu spokesperson)
- Quote: **Vytautas Romeika**, CMO @ Pigu.lt, portrait `vytautas-romeika.webp` ~331×218, name overlaid on the photo
- Hidden live Romas Strabeika node omitted

## Exact authorized copy

All live paragraphs, comparison Without/With text, quotes, metrics, and related titles live in `src/data/customer-stories/pigu-lt.ts`.

Instant market pricing **Without** copy is a live duplicate of the ingredient-list bottleneck paragraph. Kept as authorized; not rewritten.

## Quotes

One visible quote (screenshot 04). Full authorized string including 99.8% cheaper than doing it manually. Typography 20/30.

## Metrics / results

| Value | Context |
| --- | --- |
| 99.8% | Hero + cost-reduction savings + quote |
| 4.5M | Hero descriptions refined in 1.5 months |
| 6.5M | Catalog size (Meet + intro) |
| 6 weeks | Hero “how we did it” |
| $350K | Translations (Before + translation From) |
| $30K | AI translations To |
| 90% | Translation savings bar |
| 3 years | Fast AI From |
| 1.5 months | Fast AI To |
| 8 million requests | Future |

No Payhawk 80%/98%, no Nord 46%/77%, no CyberCare 75%/86%/10s.

## Product visuals

Rasters (not rebuilt HTML dashboards):

- `pigu-lt-description-enhance.webp`
- `pigu-lt-image-filtering.webp`
- `pigu-lt-product-translation.webp`

## Video

`NEXOS_Pigu_Long_subs_1920x1080.mp4` — autoplay, muted, loop, playsInline. Poster JPG stored locally. Served from `/videos/customer-stories/pigu-lt/pigu-lt-testimonial.mp4`.

## Related stories

Heading “Explore more customer stories”. Three cards: Payhawk (existing route), Oxylabs (future slug), Hostinger **scaled** (future slug). Thumbs reuse Nord-detail related heroes. Landscape `h-24 object-top` crop matching live 368×96.

## Animations / interactions

No GSAP, no counters, no pin/parallax. Video autoplay. Related/button hover from shared primitives. CTA Buy now uses existing `hero` (accent gradient) button.

## Desktop / tablet / mobile

- 1440: 1168 container; hero 709+427; Meet 568+568; Before 768+368; outcomes max 768
- 1024/768: stacks; hero visual shrinks then moves below
- 390: single column, H1 32/40, quote attribution under text (portrait hidden), video full width

## Original vs local

| Item | Notes |
| --- | --- |
| Buy now | Live `/pricing/` → local `/pricing` |
| Sign in | Excluded |
| Social footer | Excluded |
| Duplicate live ids (`quality-issues`, `fast-ai-processing`) | Local unique ids for later outcomes |
| Hidden Romas quote | Omitted |

## Screenshot-by-screenshot QA

Filled after local browser pass.

| Screenshot | Result |
| --- | --- |
| 01 Hero | Pending |
| 02 Meet | Pending |
| 03 Before | Pending |
| 04 Quote | Pending |
| 05 Cost reduction | Pending |
| 06 Description visual | Pending |
| 07 Fast AI | Pending |
| 08 Image filtering | Pending |
| 09 Translation | Pending |
| 10 Intelligence + pricing | Pending |
| 11 Video | Pending |
| 12 Future + CTA | Pending |

## Content-by-content QA

Pending local pass. Checklist in implementation report.

## Asset-by-asset QA

See `docs/assets.md` Pigu.lt table.

## Customer-story crosscheck

Pigu.lt does not inherit Payhawk TOC/challenge, Nord 46% metrics, or CyberCare dark CSAT quotes. Shared primitives: Header/Footer, Container, Button, Mia portrait file, related thumbs.

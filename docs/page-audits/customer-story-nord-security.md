# Nord Security customer story

- Reference URL: https://nexos.ai/customer-stories/nord-security/
- Local URL: http://localhost:3000/customer-stories/nord-security
- Listing: `/customer-stories` (locked, unchanged)
- Payhawk: `/customer-stories/payhawk` (locked, unchanged)

This page is **not** a Payhawk reskin. Hero order, challenge grid, numbered process cards, dual CTAs, related-story rail, and copy are Nord-specific.

## Screenshot Map

| Screenshot | Section |
| --- | --- |
| 01 | Hero: H1, intro, divider, 46% / 77% / 0 metrics, Vytautas byline, nexos × Nord hero graphic |
| 02 | TABLE OF CONTENTS |
| 03 | The challenge + 2×2 issue cards |
| 04 | Marijus Briedis pull quote (challenge) |
| 05 | Mid CTA: Gateway kicker, dual buttons |
| 06 | The Solution + success-in-numbers KPI cards |
| 07 | How nexos.ai stepped in — step 1 (real-traffic audit) |
| 08 | Steps 2–3 (Gateway caching, Zero disruption) |
| 09 | Step 4 (Better visibility and control) |
| 10 | The Result + closing quote |
| 11 | Closing quote (repeat) + final CTA “Bring your AI spend under control” |

Live also includes **Explore more customer stories** (Payhawk, Hostinger, Pigu.lt, Oxylabs) after the final CTA. Not in the attached screenshots; included for content completeness.

## Exact section inventory

HEADER (shared light chrome)
↓
HERO (`#hero`) — muted background, H1, one intro paragraph, metrics, author, square hero visual
↓
TABLE OF CONTENTS (`#tableofcontents`)
↓
THE CHALLENGE (`#the-challenge`) — heading, intro, 2×2 cards, quote
↓
MID CTA (`#banner`) — 8-col dark banner, two buttons
↓
THE SOLUTION (`#the-solution`) — copy + 3 KPI cards
↓
HOW NEXOS STEPPED IN (`#ourprocess`) — kicker, accent H2, four numbered cards
↓
THE RESULT (`#the-result`) — copy + quote
↓
FINAL CTA (`#bannerbottom`) — 8-col, two buttons
↓
RELATED STORIES (`#exploremorecustomerstories`) — 4-col thumbs
↓
FOOTER (shared)

No product-UI screenshots, no video, no related-story logos-as-cards (thumbs are story heroes). Not mixed with the CyberCare / CSAT Nord story.

## Hero

- Background: `bg-muted` `#eff4f8`
- H1 `heading-xl` 40/48 desktop, 32/40 mobile
- Single intro paragraph (not Payhawk’s two)
- Divider then metrics **then** author (Payhawk is author then divider then metrics)
- Metrics: **46%**, **77%**, **0** — labels exact, including comma vs later parenthetical variant
- Author: By Vytautas Vaitkevicius, 40px circle (blog author still reused)
- Visual: `hero-nordsecurity-nexos-ai-cost` ~329×329 `rounded-md`; hidden on desktop duplicate, shown `<md`

## Branding / portrait

- Nord wordmark appears inside the hero graphic (not a separate logo lockup)
- Quotes: Marijus Briedis, CTO @NordVPN, 48px circle avatar
- No extra NordVPN logo in the article chrome

## Copy completeness

All live paragraphs, bullets, quotes, and metric labels are in `src/data/customer-stories/nord-security.ts`. Quotes are the two authorized Marijus lines only (challenge + result). No CSAT / support-automation numbers from the other Nord listing card.

## Challenge cards

2×2, `p-6`, `gap-10` between icon-row and body. Icons `text-neutral-900` (not accent): trend, rotate, wallet, search-chart. Order matches live DOM / screenshot 03: Growing spend, Redundant processing, Limited cost controls, Limited observability.

## Process cards

Stacked `p-10` bordered tiles. Accent circle-1…4 icons + `heading-sm` titles. Check bullets: first card regular weight; “Same models / agents / workflow” semibold.

## CTAs (not Payhawk’s)

- Mid: kicker “Bring every AI request through one secure AI Gateway” / heading “Gain visibility, optimize costs, and keep developers moving” / Talk to Solutions Engineer (`/contact-sales`) + Get API Key (`/pricing`)
- Final: “Bring your AI spend under control” / same two buttons
- Both use existing banner blob/mask assets via Nord-only components

## Related stories

Heading 40px. Grid `lg:grid-cols-4 md:grid-cols-2`. Payhawk links to the completed Payhawk route. Hostinger / Pigu / Oxylabs link to future slugs (no placeholder pages).

## Animations

No GSAP, no counters, no pin. Hover: TOC/related title color, button hover from shared Button. SVG circle numbers are static.

## Original vs local

| Item | Notes |
| --- | --- |
| Get API Key live hash | Live `/pricing/?product=ai-gateway#ai-gateway` → local `/pricing` (project convention) |
| Sign in | Excluded |
| Social footer | Excluded |
| Related thumbs | Local copies of live `*-hero` transforms |

## Screenshot-by-screenshot QA

Filled after local browser pass.

| Screenshot | Result |
| --- | --- |
| 01 Hero | Pending |
| 02 TOC | Pending |
| 03 Challenge cards | Pending |
| 04 Challenge quote | Pending |
| 05 Mid CTA | Pending |
| 06 Solution numbers | Pending |
| 07 Step 1 | Pending |
| 08 Steps 2–3 | Pending |
| 09 Step 4 | Pending |
| 10 Result | Pending |
| 11 Final CTA | Pending |

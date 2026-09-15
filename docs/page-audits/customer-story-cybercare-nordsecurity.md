# CyberCare / Nord Security customer story

- Reference URL: https://nexos.ai/customer-stories/cybercare-nordsecurity/
- Local URL: http://localhost:3000/customer-stories/cybercare-nordsecurity
- Listing: `/customer-stories` (locked)
- Payhawk: `/customer-stories/payhawk` (locked)
- Nord Security 46% story: `/customer-stories/nord-security` (locked — **different route, not mixed**)

This is a **dark, full-bleed** customer story. It is not a reskin of Payhawk or of `/customer-stories/nord-security/`.

## Screenshot Map

| Screenshot | Section |
| --- | --- |
| 01 | Hero: NORD × cybercare × nexos.ai logos, H1 (3 lines), intro, chart visual, 75% / 86% / 10s metrics |
| 02 | The companies behind the story (3 dark cards) |
| 03 | At a glance (6 dotted KPI cards) + Where nexos.ai comes in (pills) |
| 04 | The Challenge: Reliable AI support + non-negotiables panel |
| 05 | Quote — Karolis Valaika |
| 06 | The Solution: Agentic AI support (3 cards) |
| 07 | Where CyberCare relies on nexos.ai + team photo |
| 08 | Capabilities 2×3 check grid |
| 09 | Quote — Justas Morkūnas |
| 10 | The Result: Faster support (6 cards) |
| 11 | Quote — Karina Dirvonskienė |
| 12 | A real partnership (2 cards) + quote Tomas Vilčinskas |
| 13 | Looking ahead |
| 14 | Explore more customer stories (Payhawk, Oxylabs, Hostinger, Nord 46%) |

## Exact section inventory

HEADER (dark chrome on this route only)
↓
HERO (`#hero`) — dark-to-purple gradient, logos strip, H1, intro, chart image, metric bar
↓
COMPANIES (`#companies-behind-the-story`) — purple gradient, 3 cards
↓
AT A GLANCE (`#at-a-glance`) — 6 dotted cards + capability pills
↓
THE CHALLENGE (`#the-challenge`) — dark, 2-col + sidebar
↓
QUOTE KAROLIS (`#quote-karolis-valaika-cybercare`)
↓
THE SOLUTION (`#the-solution`)
↓
RELIES (`#where-cybercare-relies-on-nexosai`) — copy + team photo
↓
CAPABILITIES (`#story-checklist-what-made-nexosai-work-2x3-check-grid`)
↓
QUOTE JUSTAS (`#quote-justas-morkunas-nexosai`)
↓
THE RESULT (`#the-result`)
↓
QUOTE KARINA (`#quote-karina-dirvonskiene-nord-security`)
↓
PARTNERSHIP (`#real-partnership`)
↓
QUOTE TOMAS (`#quote-tomas-vilcinskas-cybercare`)
↓
LOOKING AHEAD (`#looking-ahead`) — gradient into white
↓
RELATED (`#explore-more`) — white
↓
FOOTER (shared light)

No videos. No product-UI dashboard screenshots (hero chart and team photo are raster images). No “Talk to Solutions Engineer / Get API Key” banners (those belong to the other Nord story).

## Crosscheck vs `/customer-stories/nord-security/`

| Item | CyberCare (this page) | Nord 46% (locked) |
| --- | --- | --- |
| H1 | automated 75% of customer support with 86% CSAT | cuts coding-agent LLM costs by 46% |
| Metrics | 75% / 86% / 10s | 46% / 77% / 0 |
| Quotes | Karolis, Justas, Karina, Tomas | Marijus Briedis only |
| Theme | Dark gradients | Light editorial |
| Related Hostinger title | **scaled** | **scales** (listing / 46% page) |

## Hero

- Gradient `#071013` → `#331378`
- Logos strip 256×25 (`nord-cybercare-nexos-logos`)
- H1 `heading-xl` 40/48, 3-line wrap, ~682px
- Intro `body-md` `#eff4f8`
- Chart image ~454×454 `rounded-lg`
- Metrics 40px `#7c70fa` in a rounded dark bar

## Branding

- Combined logos strip in hero
- White Nord Security / CyberCare / nexos.ai logos on company cards
- NordVPN named in company copy only (no extra NordVPN lockup)

## Quotes / portraits

- Karolis Valaika — Head of AI Labs, CyberCare
- Justas Morkūnas — COO at nexos.ai
- Karina Dirvonskienė — COO at Nord Security
- Tomas Vilčinskas — Engineering manager, CyberCare
- Pull quotes: 28/36.4 semibold, radial purple glow, 48px circular portraits

## Related stories

Payhawk (completed), Oxylabs (future), Hostinger (future, title **scaled**), Nord Security 46% (completed). Thumbs reused from Nord 46% related assets + Nord hero graphic.

## Animations

No GSAP, no counters, no pin. Hover: related titles / header. Header is dark until ~8400px scroll, then light over the white related block.

## Original vs local

| Item | Notes |
| --- | --- |
| Sign in | Excluded |
| Social footer | Excluded |
| Container | Shared max-width 73rem; this route uses `px-4 md:px-0` so desktop H1 is 682px (live match). Other routes unchanged. |
| Get nexos.ai in live header | Local uses approved Header CTAs |
| Hero 2-col | `lg:flex-row` so 768 stacks (avoids crushed H1). Live uses `md:grid-cols-2`. |
| Header chrome | Dark until related (`scrollY > 8670`). Isolated pathname in `getHeaderTone` / `Header`. |

## Screenshot-by-screenshot QA

1440 local vs attached screenshots. Browser panel crops the right edge; CDP measured full 1440 layout.

| Screenshot | Result |
| --- | --- |
| 01 Hero | PASS — logos 256×25, H1 40/48 3 lines at 682px, intro `#eff4f8`, chart 454, metrics 75%/86%/10s `#7c70fa` |
| 02 Companies | PASS after logo size fix (83×23 / 59×32 / 95×17). Purple gradient, 3 `#131921` cards |
| 03 Glance + pills | PASS — dotted 6px grid, before→after bars, 5 pills |
| 04 Challenge | PASS — kicker, 2-line H2, 3 paragraphs, check panel |
| 05 Karolis quote | PASS — radial glow, curly quotes, 48px portrait, Head of AI Labs, CyberCare |
| 06 Solution | PASS — 3 cards, blue check tiles, copy match |
| 07 Relies + photo | PASS — purple `#311469`, callout, team photo (nexos × cybercare in asset) |
| 08 Capabilities | PASS — 2×3 checks; 99.99% SLA; “Observability and cost control built in.” |
| 09 Justas quote | PASS — COO at nexos.ai |
| 10 Result | PASS — 6 bordered cards, authorized metrics only |
| 11 Karina quote | PASS — COO at Nord Security |
| 12 Partnership + Tomas | PASS — 2 icon cards; Tomas Vilčinskas Engineering manager, CyberCare |
| 13 Looking ahead | PASS — 48px centered, gradient into white |
| 14 Related | PASS — Payhawk / Oxylabs / Hostinger **scaled** / Nord 46%; square thumbs; light header |

## Content-by-content QA

- [x] H1 exact (75% / 86% CSAT — not 46%)
- [x] Intro, companies, glance, challenge, solution, relies, result, partnership, looking ahead exact
- [x] Quotes: Karolis, Justas, Karina, Tomas (not Marijus)
- [x] Metrics 75% / 86% / 10s (not 46% / 77% / 0)
- [x] Related Hostinger title **scaled**
- [x] No DualCtas / Get API Key (those are Nord-46% only)

## Asset-by-asset QA

All CyberCare assets local under `src/assets/images/customer-stories/cybercare-nordsecurity/` plus reused Nord related thumbs. No production hotlinking.

## Viewport QA

| Width | Result |
| --- | --- |
| 1440 | PASS — H1 682px 3 lines; chart 454; dark header |
| 1024 | PASS — 2-col hero; H1 wraps extra line vs 1440 (narrower column) |
| 768 | PASS after stacking hero (`lg:flex-row`); metrics 3-col still |
| 390 | PASS — stacked hero, dark header + hamburger, chart below intro |

## Crosscheck vs `/customer-stories/nord-security/`

No 46% / 77% / 0 / Marijus Briedis / DualCtas copied. Git diff on Nord-46%, Payhawk, listing, Blog: empty.

## Remaining visible differences

- Shared Header CTAs (“Talk to sales” / “Get started”) vs live “Get nexos.ai”; Sign in excluded
- Browser screenshot panel crops ~200px on the right; full layout is 1440
- 1024 H1 wraps 4 lines vs 3 at 1440
- Related hover is opacity, not a custom underline
- Footer social / tel excluded by project rules

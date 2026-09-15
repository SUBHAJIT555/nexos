# Models page audit

Reference: https://nexos.ai/models/  
Local: `/models/`  
Audited: 2026-09-16 against the live public page + 3 supplied section screenshots.

This is the AI **model catalogue / database**, not Compare Models (`/features/compare-ai-models/`). Isolate in `src/components/models/*` and `src/data/models.ts`. Dark chrome is path-gated (`getHeaderTone("/models") === "dark"`, light switch after ~12100px). Do not change ProductCta, CompareHero, or homepage. Get API key → `/pricing`. Talk to Solutions Engineer → `/contact-sales`.

No provider logos on the live table (text only). No capability icons (CSS chips). No videos. No model detail routes.

---

## Screenshot Map

| Attachment | Section | Notes |
| --- | --- | --- |
| 01 | Header + hero + search | Dark header. Purple fade `#6d28bc` → `#071013`. H1 48px wraps “Comprehensive AI / models database”. Body 16px `#EFF4F8`. Accent Get API key + outline Talk to Solutions Engineer (arrow). Pill search “Search models...” ~723×58. |
| 02 | Model database rows | Dark table `#0e141c`, header `#121B24`. Columns Model / Provider / Capabilities / Context / Input / 1M / Output / 1M / Cache read / 1M / Region. First visible rows Qwen 3 32b → Claude Fable 5. Capability chips; EU/US/Other region badges. Provider is text, no logos. |
| 03 | Bottom Gateway CTA + footer | Gradient `#071013` → `#331378` → `#5315C0` → `#7D4DD6` → white. H2 “Reduce your AI spend with nexos.ai Gateway”. Accent Get API key + black Talk to Solutions Engineer (no arrow). Light footer below. |

---

## Exact section sequence

1. Header (shared, dark chrome)
2. Hero — Comprehensive AI models database + two CTAs
3. Search + complete model table (189 rows)
4. Reduce your AI spend with nexos.ai Gateway
5. Footer (shared, light)

---

## Hero

- Background: `linear-gradient(180deg, #6d28bc 0%, #511a9c 12%, #350b7c 24%, #1e0e48 36%, #120f2d 46%, #071013 60%)`
- Section height ~435px at 1440 (live overlay header)
- Inner `max-w-[680px]`, `gap-y-5`, centered
- H1 `heading-2xl`: 48/57.6 tracking −0.496 desktop; 30/37.5 mobile. `<br class="hidden lg:block">` after “Comprehensive AI”
- Body 16/24 `#EFF4F8`
- CTAs `gap-3`, row from `md`: accent fill Get API key → `/pricing`; outline `#A3B4C2` Talk to Solutions Engineer + FA arrow → `/contact-sales`
- Buttons 48px, pill, pad 11×28

## Search

- Lives in `#models-explorer` (`pt-8 pb-16`), visually under hero CTAs
- `max-w-[723px]`, height 58, pill, `bg-neutral-950` `#121B24`, border `#363D44`, FA search icon left-4
- Placeholder “Search models...”
- Filters **model name** and **provider** (case-insensitive). No query params. No clear control. No extra filter dropdowns.
- No-results: keep table chrome, single “No models found.” row (no illustration)

## Table

- Wrap 1168px, radius 16px, border `#262B30`, `overflow-x-auto` below xl; clip at xl
- `table-fixed min-w-[1000px]`
- Columns: Model 180 left; Provider 220 center; Capabilities 320 center; Context / Input / Output / Cache ~85 center; Region 105
- Header sticky `top: header-height`, bg `#121B24`, 14px medium `#EFF4F8`, ~96px tall because “Cache read / 1M” wraps
- Rows `border-t border-neutral-900`, tbody `#0e141c`, pad 16px, ~59.5px
- Model 14px `#EFF4F8`; provider / numbers 14px `#8193A2` tabular-nums
- Missing cache/prices use en-dash “–”
- First column sticky left below xl
- **No sort. No pagination. All 189 rows.** No row click. No row hover paint (live CSS has none)
- Duplicate names kept (same model × provider × region × price)

## Capabilities

Text chips only: Vision, Tools, Cache, Think, Web, JSON.  
`h-[19px] rounded-[2px] px-1.5 text-[10px] font-medium`

| Label | Background | Text |
| --- | --- | --- |
| Tools | `bg-blue-900` | `text-blue-400` |
| Cache | `#0a2832` | `#17b0cf` |
| JSON / Vision | `#0e2d37` | `#3ca8a6` |
| Think | `#042744` | `#328ad1` |
| Web | `#1d2240` | `#7286fb` |

## Regions

`h-6 min-w-6 rounded-[2px] border p-1 text-[10px] font-semibold`  
EU blue-500; US `#3ca8a6`; Other neutral-400.

## Providers (12)

Alibaba Cloud, Anthropic, Azure, Bedrock, DeepInfra, Fireworks AI, Google Agent Platform, Groq, Lyceum, Mistral AI, OpenAI, SpaceXAI — **text only**.

## Bottom CTA

- Height ~403px desktop / ~447px at 390
- H2 48 desktop / 30 mobile, white
- Body 16 `#BFCBD4`
- Accent Get API key + primary (black `#071013`) Talk to Solutions Engineer
- Gradient ends white into the light footer

## Responsive

| Viewport | Behavior |
| --- | --- |
| 1440 | Full table, no horizontal scroll, search 723 |
| 1024 | Horizontal table scroll; Model column sticky |
| 768 | Hero CTAs may wrap; table still table + overflow-x |
| 430 / 390 / 375 | H1 30px; search full container width; table min 1000px + overflow-x; sticky Model; CTA H2 30px; buttons stack, shrink-to-content |

Not converted to cards.

## Animations / interactions

None beyond button hover/focus and native input caret. Do not fade-up rows.

## Assets

No `<img>` in hero/table/CTA. Search + Talk arrow are inline FA paths. See `docs/assets.md`.

## Original vs local

| Item | Live | Local |
| --- | --- | --- |
| Catalogue | 189 rows from current DOM | 189 typed rows in `src/data/models.ts` |
| Search | Solid `ModelExplorer` island | Client `useMemo` name+provider |
| Provider logos | None | None |
| Filters / sort / pagination | None | None |
| Get API key | `/pricing/#ai-gateway` | `/pricing` (project convention) |
| Talk to Solutions Engineer | `/contact-sales/` | `/contact-sales` |
| Sign in | Present | Excluded (project-wide) |
| Header | Overlay on hero | Sticky header (shared layout) — extra top space vs overlay |
| Nexos wordmark | Live logo | Brand mark (identity exclusion) |

---

## Screenshot-by-screenshot QA

| Shot | Result | Notes |
| --- | --- | --- |
| 01 Hero | PASS | Copy, wrap, CTAs, search pill match. Header uses Brand mark. |
| 02 Table | PASS | Same first rows, chips, prices, regions, density. Provider text not logos. |
| 03 CTA | PASS | Copy, two CTAs, purple→white fade. Footer shared light. |

## Data-by-data QA

- [x] 189 live rows, no invented models
- [x] Duplicate names preserved
- [x] Capabilities / context / input / output / cache / region from live DOM
- [x] En-dash for missing prices
- [x] Live order preserved

## Interaction QA

- [x] Search name + provider
- [x] Empty query shows all 189
- [x] No-results row
- [x] No invented filters/sort/pagination
- [x] Horizontal scroll + sticky Model below xl
- [x] Rows not linked

## Asset-by-asset QA

- [x] No provider logos (none on live)
- [x] Capability/region CSS-only
- [x] Search + arrow inline SVG (FA paths from live)
- [x] No production hotlinking

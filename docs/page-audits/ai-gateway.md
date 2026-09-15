# AI Gateway page audit

Reference: https://nexos.ai/ai-gateway/  
Local: `/ai-gateway`  
Audited: 2026-09-15 against the live public page + 11 supplied section screenshots.

Locked pages: `/`, `/ai-workspace-for-multiple-llms`, `/features/ai-agents`, `/ai-agent-builder`, `/features/ai-chat`, `/features/compare-ai-models`, `/features/ai-integrations`, `/features/messaging-apps`, `/features/browser-extension`, `/features/deep-research`.

Isolate in `src/components/gateway/*`. Dark chrome is path-gated (`getHeaderTone("/ai-gateway") === "dark"`, light switch after ~2100px). Do not change ProductHero / ProductCta / QuoteCarousel / homepage Testimonials. Get API Key → `/pricing`. Talk to Solutions Engineer → `/contact-sales`.

No `<video>` on the live page. Hero and architecture are animated SVGs.

---

## Screenshot Map

| Attachment | Section | Notes |
| --- | --- | --- |
| 01 | Hero | Dark gradient `#071013` → `#28125f`. H1 48px / 723. `hidden lg:block` br after “access,”. Body 16px `#EFF4F8`. Purple Talk + white Get API Key + CirclePlus. Animated SVG tree 1168×360. |
| 02 | Logo strip | Purple `#28125f` → `#36137e`. Caption “Chosen by leading engineering teams”. White trusted-by SVG. |
| 03 | Unified architecture | Same purple band. Centered H2 + intro. Animated `gateway-schema-dark-animated-xl` 1168×546 displayed. |
| 04 | One API / Optimize + pills | Continues unified gradient into white. Two columns, purple icon tiles. Pill marquee on dotted field. |
| 05 | Data carousel | White. H2 48px centered. Two 568×646 slides visible (6 total). Slide 2 of 6 in the screenshot. |
| 06 | Pain + models UI | Dark copy + 3 icon columns, then flower `gradient-1-xl` + `models-editing-ui-xl`. |
| 07 | Why carousel | Light `#EFF4F8` → white. 3 of 8 feature slides. Black Talk + outline Get API Key. |
| 08 | Quotes | White. 3 mint-badge cards (Technology / Product / Marketing). 5 slides total. |
| 09 | Security | Workspace 4-col. Gateway SSO copy. Certified card links “nexos.ai trust center”. |
| 10 | Final CTA | Dark grid-glow. Purple Talk + white Get API Key. |
| 11 | FAQ | Tabs About AI Gateway / nexos.ai Gateway. 6 + 4 card accordions. |

---

## Exact section sequence

1. Hero — AI Gateway: unified LLM access, full AI spend control
2. Chosen by leading engineering teams (logo strip; sr-only “How does the nexos.ai Gateway work”)
3. One unified Gateway for every AI application (schema + One API / Optimize + pills)
4. See what your data is really telling you (6-slide carousel)
5. One AI Gateway solution for your LLM integration pain points
6. Models editing UI visual (gradient flower + dashboard still)
7. Why your business needs an AI Gateway (8-slide carousel + CTAs)
8. What leading teams say about nexos.ai
9. With nexos.ai your data is always secure
10. All your AI. One secure Gateway.
11. FAQ

---

## Section backgrounds / dimensions (1440 live)

| Section | Background | ~Height |
| --- | --- | --- |
| Hero | `linear-gradient(#071013 0%, #071013 50%, #151135 74%, #28125f 100%)` | 983px |
| Logos | `linear-gradient(#28125f, #36137e)` | 88px |
| Unified | purple→lavender→white (81.2% white) | 1244px |
| Data | White | 899px |
| Pain copy | `#071013` | 419px |
| Pain visual | `#071013` + gradient still | 787px |
| Why | `#EFF4F8` → white | 867px |
| Quotes | White | 676px |
| Security | White | 631px |
| CTA | Dark + `grid-glow-bottom-dark.svg` | 418px |
| FAQ | White | 918px |

Page scroll height ~8843px. Container ~1168px. Header overlay dark until ~2100px (end of unified).

---

## Assets

See `docs/assets.md` AI Gateway table. Mechanism:

| Visual | Mechanism |
| --- | --- |
| Hero tree | Animated SVG (`<img>`, not HTML dashboard) |
| Architecture | Animated SVG |
| Data slides | WebP stills in HTML cards |
| Pain dashboard | WebP still over WebP glow |
| Why / pain icons | Inline FA paths |
| Quotes | Homepage portraits |
| CTA | Existing dark grid SVG |
| Videos | None |

---

## Animations / interactions

| Area | Behavior |
| --- | --- |
| Hero SVG | SMIL/CSS inside the SVG file |
| Schema SVG | SMIL/CSS inside the SVG file |
| Logo strip | Static combined SVG (not a moving marquee of separate logos) |
| Pills | CSS `home-marquee` loop |
| Data / Why / Quotes | Drag + arrow + progress rail (Motion not needed; pointer slider) |
| FAQ | Motion height accordion + tab switch |
| InfoDialog | CirclePlus opens “What is an AI Gateway?” |
| Hover | FAQ cards shadow; slider arrows accent |

No GSAP pin. Do not attach fadeUp to every section.

---

## Desktop / tablet / mobile

| Width | Notes |
| --- | --- |
| 1440 | Primary QA. Two data cards, three why/quote cards. |
| 1024 | Same carousels, fewer visible cards. |
| 768 | Schema/hero swap to xs SVG. H1 single line wrap without forced br. |
| 390 | Stacked CTAs, one carousel card, xs hero/schema/models UI. |

---

## Screenshot-by-screenshot QA

| Shot | Status | Notes |
| --- | --- | --- |
| 01 Hero | PASS pending visual | Animated SVG used; H1 wrap + chrome isolated |
| 02 Logos | PASS pending visual | Reused trusted-white SVG |
| 03 Schema | PASS pending visual | Downloaded animated SVG |
| 04 API + pills | PASS pending visual | Isolated two-col + marquee |
| 05 Data | PASS pending visual | 6 stills, slide 1–2 default |
| 06 Pain | PASS pending visual | Dark + flower + models UI |
| 07 Why | PASS pending visual | 8 slides, CTAs below |
| 08 Quotes | NEEDS FIX | Mint badges use one database glyph for all categories; live uses distinct FA icons per badge |
| 09 Security | PASS pending visual | Isolated workspace 4-col + trust link |
| 10 CTA | PASS pending visual | Reused dark grid |
| 11 FAQ | PASS pending visual | Lists restored; CSS leak stripped |

---

## Original vs local differences

- Brand wordmark stays ours, not Nexos.
- Get API Key maps to `/pricing`, not auth.
- Quote category icons are not fully distinct (Technology glyph reused).
- Header light-switch threshold is an approximation (~2100px) of the live overlay behavior.
- Pill dotted field is CSS, not an exported bitmap.

Regression: Header `getHeaderTone` / `pastHero` is pathname-gated. Locked pages should remain light chrome except `/`.

# Deep Research page audit

Reference: https://nexos.ai/features/deep-research/  
Local: `/features/deep-research`  
Audited: 2026-09-15 against the live public page + 7 supplied section screenshots.

Locked pages: `/`, `/ai-workspace-for-multiple-llms`, `/features/ai-agents`, `/ai-agent-builder`, `/features/ai-chat`, `/features/compare-ai-models`, `/features/ai-integrations`, `/features/messaging-apps`, `/features/browser-extension`.

No security band. No videos. No GSAP pin. Get nexos.ai → `/pricing`. Isolate in `src/components/deep-research/*`. Do not change shared ProductHero / ProductCta / FeatureAccordion.

---

## Screenshot Map

| Attachment | Section | Notes |
| --- | --- | --- |
| 01 | Hero | H1 48px / 568. Line 1 black “Deep Research:”. Accent lines “Hours of work,” / “done in minutes”. CirclePlus + “What is Deep Research?”. Purple Get nexos.ai + “No credit card required.” Still `deep-research-hero` 555 (1110 source) with prompt overlay baked in. Grid `grid-centered-secondary`. |
| 02 | Depth of a human analyst | Centered H2 40px + intro. Three 379×462 rounded-md tiles: lavender gradient Save time; dark purple Choose an AI model (white type, accent link “Access all LLMs in one place”); light Get deeper insights. Product UI is stills, not HTML chrome. |
| 03 | How does Deep Research work | Light band. Left 468: H2 40px + 16px intro. Right 668: five accent FA icons (Ask / Plan / Search / Analyze & synthesize / Report) with 28px titles, dividers, follow-up note under Report. |
| 04 | How teams use Deep Research | Centered H2 48px + intro. Photo left 464 rounded-md. Accordion right with 2px accent rail (active) / tertiary rail (idle). Marketing expanded by default. Image swaps with item. |
| 05 | CTA | Light `banner-light-glow` rounded-md. Eyebrow “Deep Research”. H2 40px “Cut hours…”. Body 20px. Purple Get nexos.ai. CTA **before** compare. |
| 06 | Deep Research vs. other providers | Full-bleed `#262B30`. Purple `nexos.ai` + white H2. Provider cluster SVG top-right. Two 20px columns. Table in `#363D44` rounded-md: nexos.ai / ChatGPT & Gemini / Perplexity. |
| 07 | FAQ | Two-col: FAQ 40px left, six rounded bordered cards + chevrons right. |

---

## Exact section sequence

1. Hero — Deep Research: Hours of work, done in minutes
2. The depth of a human analyst. The speed of AI.
3. How does Deep Research work
4. How teams use Deep Research
5. Cut hours of manual research from your workflows (CTA)
6. Deep Research vs. other providers (dark)
7. FAQ

No “What is Deep Research?” full section — that copy lives in the hero InfoDialog.

---

## Section backgrounds / dimensions (1440 live)

| Section | Background | ~Height |
| --- | --- | --- |
| Hero | White + centered grid SVG | 747px |
| Depth | White | 774px |
| How | Light / `#EFF4F8` visual band | 915px |
| Teams | White | 762px |
| CTA | White, inner light glow | 670px |
| Compare | `#262B30` full bleed | 1041px |
| FAQ | White | 688px |

Page scroll height ~6510px. Container content ~1168px. No `<video>`.

---

## Assets

| Role | Source | Local |
| --- | --- | --- |
| Hero still | `deep-research-hero` 1110×1110 | Reused `src/assets/images/deep-research/deep-research-hero.webp` |
| Hero grid | `grid-centered-secondary.svg` | Reused Agents `grid-centered-secondary-center.svg` |
| Save time | `deep-research-save-time` 702×496 | Reused `save-time.webp` |
| Choose model | `deep-research-choose-AI-model` 662×496 | Reused `choose-model.webp` |
| Deeper insights | `deep-research-get-deeper-insights` 662×496 | Reused `deeper-insights.webp` |
| Teams marketing / sales / product / HR | four stills 464 displayed | Reused `marketing.webp` `sales.webp` `product.webp` `hr.webp` |
| CTA glow | `banner-light-glow` | Reused Integrations |
| Provider cluster | `deep-research-providers.svg` 187×80 | Downloaded `src/assets/images/deep-research/deep-research-providers.svg` |
| How icons | Inline FA paths (comment-question, clipboard-list, magnifying-glass, arrows-rotate, file-pen) | `DeepResearchIcons.tsx` |
| CirclePlus | Existing `CirclePlusIcon` | Reused |

Videos: none on the live page.

---

## Animations / interactions

| Area | Behavior |
| --- | --- |
| Hero | Static still. InfoDialog opens from CirclePlus control. |
| Depth | Static. Workspace text link on Choose an AI model. |
| How | Static. |
| Teams | Accordion: one item expanded; 2px rail; image crossfades (Motion). |
| CTA | Static. |
| Compare | Static table. |
| FAQ | Card accordion (Motion height). |

No pinned/scrubbed GSAP sequence.

---

## Original vs previous local

Previous local used ProductHero (no purple H1 wrap, no CirclePlus), white bordered depth cards, numbered how-it-works cards, pill tabs for teams, light compare **before** CTA, dark ProductCta.

---

## Screenshot-by-screenshot QA

Original Deep Research attachments from the PAGE 09 request (7 stills). The 11 later attachments in this thread are **AI Gateway** screenshots and were not applied to this page.

| Attachment | Result | Notes |
| --- | --- | --- |
| 01 Hero | PASS | H1 wrap, purple second block, CirclePlus, purple Get nexos.ai, 555 still, grid. Local hero height 747 matches live. |
| 02 Depth | PASS | Centered 40px H2 + intro. Three themed tiles (lavender / dark / light). Product stills + Workspace accent link. |
| 03 How | PASS | `#EFF4F8` band. Left heading+intro, right icon steps with dividers and Report note. |
| 04 Teams | PASS | After rail fix: 464 still, purple active rail, gray idle rails, dark titles, image swap. |
| 05 CTA | PASS | Light glow, eyebrow, 40px H2, purple Get nexos.ai. Before compare. |
| 06 Compare | PASS | Dark `#262B30`, purple nexos.ai, provider SVG 157×67, two columns, `#363D44` table. |
| 07 FAQ | PASS | Cards variant, 40px heading, six questions. |

---

## Responsive

| Viewport | Result |
| --- | --- |
| 1440 | Hero 747 / still 555. Section order matches live. |
| 1024 | Hero stays 2-col (555 still). Depth 3-col. How 6/6. Teams 2-col. No overflow. |
| 768 | Hero/depth/teams stack. Image scales. No overflow. |
| 390 | H1 36px with same br wrap. Cards stack. How steps stack under heading. No overflow. |

---

## Remaining visible differences

- Compare table header uses the shared `BrandMark` next to “nexos.ai” rather than the exact circular glyph from the providers SVG.
- FAQ uses the shared `ProductFaq` cards variant; row padding may differ a few pixels from live.
- CTA inner vertical padding is close to live 670px but not guaranteed identical at every breakpoint.
- Product UI in hero/depth/teams is the permitted stills (overlays baked in), matching live — not reconstructed HTML chrome.

No production Nexos CDN hotlinking. No videos on this page (live has none). Locked pages were not modified.

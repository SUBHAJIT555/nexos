# AI Chat page audit

Reference: https://nexos.ai/features/ai-chat/  
Local: `/features/ai-chat`  
Audited: 2026-09-15 against the live public page + 10 supplied section screenshots.

Homepage `/`, AI Workspace `/ai-workspace-for-multiple-llms`, AI Agents `/features/ai-agents`, and AI Agent Builder `/ai-agent-builder` stay locked. This page is not a restyle of those layouts.

---

## Route map

| | URL |
| --- | --- |
| Original | https://nexos.ai/features/ai-chat/ |
| Local | `/features/ai-chat` |

---

## Screenshot → section map

| Attachment | Section | Notes |
| --- | --- | --- |
| 01 | Hero + trusted-by | H1 “AI chat built for / real work”. Get nexos.ai. 568×568 `hero-chat-prompts` still (prompt overlay + Slack/Drive/Calendar/Gmail chips baked in). Grid `grid-centered-secondary-center`. Caption “Trusted by leading teams:” + `logo-carousel-customer-stories-v2.svg`. |
| 02 | World’s top AI models | Still LEFT (`world-top-ai-models`, 568) / copy RIGHT. H2 40px/48. Gemini, Grok, Claude, GPT, Llama, Gemma are in the still, not HTML. |
| 03 | What’s inside Chat | Centered H2 48px. Rail: still LEFT / accordion RIGHT. First item expanded (“Automatically choose the right model”). Six click-swapped stills. Not a 6-card grid. Not GSAP-pinned. |
| 04 | Integrations | Centered “Integrations” eyebrow + “Bring your knowledge with you”. Combined SVG `integrations-logos.svg` (chips are artwork). Light `grid-glow-bottom-light.svg`. Ghost “Explore Integrations →”. |
| 05 | Start with a prompt | Centered H2 40px. Prompt composer on `prompt-grid-bg.svg`. Placeholder “What would you like to automate?”. AI Tools + submit. Marketing UI only (submit → `/pricing`). |
| 06 | How teams use nexos.ai | Static 3-column cards (not tabs/carousel): Marketing, Sales, Talent Acquisition. Stills: `marketing-linkedin-post`, `sales-chat-file`, `chat-prompt`. |
| 07 | Compare Models | Copy LEFT / still RIGHT. `compare-models-chat` inside a rounded purple panel. Ghost “See compare models →” → `/features/compare-ai-models`. |
| 08 | Security | Agents-style 5-card grid. Certified body: “SOC 2 Type 2 and ISO 27001-certified…” (no ISO 42001). Three cert SVGs. Trust Center link. |
| 09 | CTA | Dark grid-glow. “One AI Chat you’ll ever need for work”. Purple “Get nexos.ai”. |
| 10 | FAQ | Two-column, 3 card accordions. |

---

## Exact section sequence (after Header, before Footer)

1. **Hero** — AI chat built for real work
2. **Trusted by leading teams** (logo strip)
3. **The world’s top AI models, one powerful Chat**
4. **What’s inside Chat** (6-item rail accordion)
5. **Integrations** — Bring your knowledge with you
6. **Start with a prompt. Leave with the result.**
7. **How teams use nexos.ai** — Marketing / Sales / Talent Acquisition
8. **Compare Models: Find the best AI for the task**
9. **Protecting your data / Your data is always secure**
10. **One AI Chat you’ll ever need for work** CTA
11. **FAQ**

---

## Section backgrounds / dimensions (1440 live)

| Section | Background | ~Height | Notes |
| --- | --- | --- | --- |
| Hero | White + centered grid SVG | 760px | Copy max 568. Still 568×568, rounded 24px in screenshots |
| Trusted-by | White | 152px | Caption 16px `#65717B`. Strip 1168×64 |
| Models | White | 696px | 2-col, H2 40px/48, still 568 |
| What’s inside | White | 762px | H2 48px/57.6 width 768. Accordion still 464×464 |
| Integrations | White + light grid glow | 729px | Logo strip 1168×127 |
| Prompt | White + prompt grid | 668px | Composer max ~784 |
| Teams | White | 793px | 3 cards, `rounded-lg`, `p-6`, `gap-y-4` |
| Compare | White | 696px | Copy 568. H2 40px/48 |
| Security | White | 915px | Agents 5-card layout |
| CTA | `#071013` + dark grid glow | 690px | |
| FAQ | White | 496px closed | 3 cards |

Videos: **none**. All product visuals are still images.

---

## Assets per section

| Section | Type | Source name | Local plan |
| --- | --- | --- | --- |
| Hero still | WebP 1110×1110 | `hero-chat-prompts` | Download `ai-chat/hero.webp` |
| Hero grid | SVG 1400×1200 | `grid-centered-secondary-center.svg` | Reuse Agents |
| Trusted-by | SVG 1168×64 + mobile | `logo-carousel-customer-stories-v2.svg` | Download Chat-only v2 |
| Models | WebP | `world-top-ai-models` | Download |
| Auto select | WebP | `auto-model-select` | Download; reuse workspace if identical |
| Web search | WebP | `web-search-chat-ai` | Download; reuse workspace if identical |
| Deep Research | WebP | `run-deep-reserach-chat` | Download (Chat-only; Workspace has no 6th still) |
| Interactive | WebP | `interactive-chat-collaboration` | Download; reuse workspace `asks` if identical |
| Files | WebP | `create-ready-to-use-files` | Download; reuse workspace `files` if identical |
| Memory | WebP | `enable-memory-personalization` | Download; reuse workspace `memory` if identical |
| Integrations glow | SVG | `grid-glow-bottom-light.svg` | Download |
| Integration logos | SVG | `integrations-logos.svg` | Reuse Agents |
| Prompt grid | SVG | `prompt-grid-bg.svg` (+ xs) | Reuse Builder |
| Marketing card | WebP | `marketing-linkedin-post` | Download |
| Sales card | WebP | `sales-chat-file` | Download |
| Talent card | WebP | `chat-prompt` | Download |
| Compare | WebP | `compare-models-chat` | Download |
| Certs | SVG | GDPR / AICPA / ISO 27001 | Reuse product badges |
| CTA glow | SVG | `grid-glow-bottom-dark.svg` | Reuse |

---

## Animations / interactions (live)

| Area | Behavior |
| --- | --- |
| Hero | Static still. No video. |
| Trusted-by | Static combined SVG (not a CSS marquee). |
| What’s inside | Click accordion; first item open. Active item left border `#6B3EFF`; inactive `#a3b4c2`. Still crossfades. Not scroll-pinned. |
| Integrations | Static SVG strip. |
| Prompt | AI Tools panel toggle. Submit enabled when text present → `/pricing`. Not a dashboard. |
| Teams | Static 3-up. No tabs/carousel. |
| Compare | Static still. |
| Security | Static cards. |
| FAQ | Card accordion, chevron rotate. |
| Hover | FAQ cards `hover:shadow-sm`. Ghost CTAs opacity. |

No GSAP pin on this page.

---

## Desktop / tablet / mobile

| Width | Behavior |
| --- | --- |
| 1440 | Two-column hero, models, inside rail, compare. Teams 3-up. |
| 1024 | Same 2-col grid as live `md`. |
| 768 | Feature rows stack. Teams stack. Inside visual then accordion if visual is first in DOM. |
| 390 | Hero stacks copy → CTA → still. Trust uses mobile logo strip. Prompt uses `prompt-grid-bg-xs`. |

---

## Current local differences (before PAGE 04)

| Area | Before |
| --- | --- |
| Hero visual | Fake `ChatHeroVisual` using homepage Workspace still |
| Models | Same fake visual |
| What’s inside | Default FeatureAccordion (visual RIGHT, chevrons, one reused still) |
| Integrations | Split `IntegrationsBand` carousel SVG, not centered chips |
| Prompt | `AgentGallery` of Agent templates (wrong page) |
| Teams | Text-only 3 cards, no product stills |
| Compare | Fake `CompareHeroVisual` CSS mock |
| Security | Default 4-col ProductSecurity, not Agents 5-card |
| Assets | No Chat-specific stills |

---

## Screenshot QA checklist

| Screenshot | Status after PAGE 04 |
| --- | --- |
| 01 Hero | TBD |
| 02 Models | TBD |
| 03 What’s inside | TBD |
| 04 Integrations | TBD |
| 05 Prompt | TBD |
| 06 Teams | TBD |
| 07 Compare | TBD |
| 08 Security | TBD |
| 09 CTA | TBD |
| 10 FAQ | TBD |

# Messaging Apps page audit

Reference: https://nexos.ai/features/messaging-apps/  
Local: `/features/messaging-apps`  
Audited: 2026-09-15 against the live public page + 8 supplied section screenshots.

Locked pages: `/`, `/ai-workspace-for-multiple-llms`, `/features/ai-agents`, `/ai-agent-builder`, `/features/ai-chat`, `/features/compare-ai-models`, `/features/ai-integrations`.

WhatsApp and Telegram appear as **product channels** in the authorized marketing copy and screenshots. They are rendered as marketing UI only (logos, cards, copy). No WhatsApp click-to-chat, phone number, or social footer links.

---

## SCREENSHOT MAP

| Attachment | Section | Notes |
| --- | --- | --- |
| 01 | Hero + press strip | Badge SVG “Built for”, H1 48px / 568, purple Get started now, shield guarantee, still `nexosai-assistant-2`. Press carousel SVG under hero. |
| 02 | More than a chat bot | Centered H2 with `<br>`. 2×2 cards, mixed visual order, distinct gradients. |
| 03 | Built for every team | Centered H2. Left accordion (no chevrons, accent rail). Right Slack still in rounded frame. |
| 04 | Comparison | 3-col grid, purple middle column, white Get nexos.ai in column 2. |
| 05 | Channels | 4 tiles (Slack, Telegram, WhatsApp, Teams) + black Put nexos.ai to work. |
| 06 | Security | Eyebrow + H2. 3 cards + full-width certified (GDPR / SOC 2 / ISO). No Trust Center extra card. |
| 07 | Setup | Light `#F8FAFC`. 3 stepper cards with connectors. Black Setup CTA. |
| 08 | Final CTA | Dark animated grid glow. Purple Get started now + guarantee. |

---

## Exact section sequence

1. Hero — Bring nexos.ai to your messaging apps
2. Featured-in press strip
3. More than a chat bot
4. Built for every team, every role
5. Tired of AI that only talks? This one acts
6. One nexos.ai. One context across messaging apps
7. Protecting your data / Your data is always secure
8. Get it up and running in under a minute
9. Bring nexos.ai into every conversation

No FAQ. No videos.

---

## Section backgrounds / dimensions (1440 live)

| Section | Background | ~Height |
| --- | --- | --- |
| Hero | White | 671px |
| Press | White | strip ~64px |
| More than a chat bot | White | 1468px |
| Roles | White | 690px |
| Comparison | White | 843px |
| Channels | White | 744px |
| Security | White → `#F8FAFC` | 705px |
| Setup | `#F8FAFC` (`bg-subtle`) | 725px |
| CTA | Dark + `Grid-glow-dark-animated.svg` | 557px |

Page scroll height ~7380px.

---

## Assets

| Role | Source | Local |
| --- | --- | --- |
| Built-for badge | `badge-apps-upon-request.svg` | Downloaded |
| Hero still | `nexosai-assistant-2` | Reused `src/assets/images/messaging/nexosai-assistant-2.webp` |
| Press strip | `logo-carousel-press-featured.svg` | Downloaded |
| Acts visual | `connected-to-data-4-3` | Downloaded |
| Brain visual | `pick-the-right-brain-automatically` | Downloaded |
| Memory visual | `conversation-memory` | Reused |
| Formats visual | `different-formats` | Reused |
| Role stills | `*-team-slack` / `your-role-slack` | Reused |
| Channel tiles | `app-*-tile.svg` | Downloaded |
| CTA glow | `Grid-glow-dark-animated.svg` | Downloaded |
| Cert badges | GDPR / AICPA / ISO 27001 | Reused Product badges |

---

## Animations / interactions

| Area | Behavior |
| --- | --- |
| Hero | Static still |
| Press | Static SVG strip |
| More cards | Static |
| Roles | Accordion: click role, fade image 300ms |
| Comparison | Static |
| Channels | Static |
| Setup | Static |
| CTA | Animated SVG grid (asset itself) |
| Guarantee | Static shield + copy |

No GSAP pin. No videos.

---

## Current local differences (before PAGE 07)

- Generic ProductHero with extra “no-code Agents” button (live is an in-card link)
- Missing Built-for badge
- Missing press strip
- More cards as white bordered image-top cards on gray
- Roles as pill tabs, not accordion
- Comparison as a plain table
- 3 channel cards, missing WhatsApp
- ProductSecurity 4-col default, ISO 42001 copy
- Setup as generic 3 cards without connectors
- Dark ProductCta with non-animated grid

---

## Screenshot QA checklist

| Screenshot | Status |
| --- | --- |
| 01 Hero | TBD |
| 02 More | TBD |
| 03 Roles | TBD |
| 04 Compare | TBD |
| 05 Channels | TBD |
| 06 Security | TBD |
| 07 Setup | TBD |
| 08 CTA | TBD |

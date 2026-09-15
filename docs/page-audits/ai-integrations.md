# AI Integrations page audit

Reference: https://nexos.ai/features/ai-integrations/  
Local: `/features/ai-integrations`  
Audited: 2026-09-15 against the live public page + 8 supplied section screenshots.

Locked pages: `/`, `/ai-workspace-for-multiple-llms`, `/features/ai-agents`, `/ai-agent-builder`, `/features/ai-chat`, `/features/compare-ai-models`.

---

## SCREENSHOT MAP

| Attachment | Section | Notes |
| --- | --- | --- |
| 01 | Hero | H1 64px / 568. Black “Get nexos.ai”. Still `integrations-hero` 568. Grid `grid-centered-secondary-center`. No secondary CTA. |
| 02 | Most-used apps | Centered gray `heading-md` + dark `heading-xl`. Full-width `nexos-integration-apps` strip (HiBob, SharePoint, Slack, nexos, Jira, Confluence, Compass). |
| 03 | Why integrate | Lead line under H2. Two equal cards (visual on top) + full-width secure row (copy left / portrait right). Cards `rounded-lg bg-primary`. |
| 04 | How it works | 3 rows. Left 64px disabled numbers 01–03. Right accent FA icons (gear / laptop / books) + title + body. Not 4 generic cards. |
| 05 | Let AI analyze | Still left (`integrations-files`) / copy right. Gradient `#FFFFFF` → `#F8FAFC`. |
| 06 | All integrations | H2 + intro left, rounded-full search right (`md:min-w-[400px]`). 4×3 cards (page size **12**). Pagination 1 / 2, accent current pill. |
| 07 | Security | Eyebrow “Protecting your data”. Agents/workspace split: 3 cards + trust + certified (GDPR / SOC 2 / ISO). |
| 08 | CTA | Light `banner-light-glow`, `rounded-md`, eyebrow “Unified AI integrations”, white “Buy nexos.ai”. Not dark ProductCta. |

---

## Exact section sequence

1. Hero — Unlock AI integrations for your favorite work tools
2. Your most-used apps / already in AI Workspace
3. Why integrate your work tools with AI? (3 benefits)
4. How do AI Integrations work? (01–03)
5. Let AI analyze your docs and other input types
6. All integrations (search + paginated directory)
7. Protecting your data / Your data is always secure
8. Bring your tools directly into AI Workspace

No FAQ. No videos. Product UI is still images.

---

## Section backgrounds / dimensions (1440 live)

| Section | Background | ~Height |
| --- | --- | --- |
| Hero | White + centered grid | 760px |
| Most-used apps | White | 580px |
| Why integrate | White | 1582px |
| How it works | White | 584px |
| Analyze docs | White → `#F8FAFC` | 696px |
| All integrations | White | 1140px |
| Security | White | 915px |
| CTA | White around light glow card | 506px |

Page scroll height ~7676px.

---

## Assets

| Role | Source | Local |
| --- | --- | --- |
| Hero still | `integrations-hero` | Reused `src/assets/images/integrations/integrations-hero.webp` |
| Hero grid | `grid-centered-secondary-center.svg` | Reused from Agents |
| Apps strip | `nexos-integration-apps` | Reused |
| Faster visual | `integrations-select` | Reused |
| Knowledge visual | `chat-integration` | Reused |
| Secure visual | `secure-files` | Reused |
| Analyze visual | `integrations-files` | Reused |
| CTA glow | `banner-light-glow` | Downloaded `src/assets/images/ai-integrations/banner-light-glow.webp` |
| Catalog logos | Live 48×48 SVG marks | Reused `IntegrationIcon` + `extraWorkAppIcons` |
| Cert badges | GDPR / AICPA / ISO 27001 | Reused ProductSecurity `layout="agents"` |
| How icons | FA gear / laptop / books | Inline paths from live |

Social marks (LinkedIn, YouTube, Telegram) exist in the chip set but are **not** in the live catalog; they stay omitted.

---

## Animations / interactions

| Area | Behavior |
| --- | --- |
| Hero | Static still |
| Apps strip | Static image |
| Why / How / Analyze | Static |
| Catalog | Client search (name + description) + 12-per-page pagination |
| Cards | Hover shadow / border |
| Coming soon | Pill on Big Query + Salesforce |
| Security | Static |
| CTA | Static glow artwork |
| Empty search | “No results found matching your search” |

No GSAP pin. No videos.

---

## Current local differences (before PAGE 06)

- ProductHero with purple CTA + extra “AI Workspace” secondary
- Apps heading left-aligned, not two centered lines
- Why as three equal text cards
- How as 4 Lucide cards; analyze mixed in
- Catalog page size 20; search under heading, not a 400px pill on the right
- Dark full-bleed ProductCta instead of light glow card

---

## Screenshot QA checklist

| Screenshot | Status |
| --- | --- |
| 01 Hero | TBD |
| 02 Apps | TBD |
| 03 Why | TBD |
| 04 How | TBD |
| 05 Analyze | TBD |
| 06 Directory | TBD |
| 07 Security | TBD |
| 08 CTA | TBD |

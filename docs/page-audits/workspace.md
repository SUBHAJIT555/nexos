# Workspace page audit

Reference: https://nexos.ai/ai-workspace-for-multiple-llms/  
Local: http://localhost:3000/ai-workspace-for-multiple-llms  
Audited: 2026-09-15 against the live public page.

Homepage `/` is locked and was not used as the design source.

## Route map

| | URL |
| --- | --- |
| Original | https://nexos.ai/ai-workspace-for-multiple-llms/ |
| Local | `/ai-workspace-for-multiple-llms` |

No videos on the live Workspace page (`<video>` count = 0).

---

## Section order (after Header, before Footer)

1. Hero — H1, body, three bullets, Get nexos.ai, product screenshot, Trusted by logo strip
2. Keep your team’s AI work in one place — copy left, screenshot right
3. One Chat for every task — accordion (5 items) + swapping product still
4. Make AI Agents work your way — two cards with product screenshots
5. AI agents for any task you can describe — search, category tabs, template cards, Find-the-perfect CTA
6. How the nexos.ai Workspace works for your team — 8-card carousel
7. Protecting your data / Your data is always secure — four cards + hanging cert badges
8. Integrations / Bring your knowledge with you — copy + logo strip
9. Ready to replace scattered AI tools with one workspace? — dark CTA
10. FAQs

Excluded from recreation (project rules): Sign in, social icons/links, phone/WhatsApp, Payhawk mega tile, Nexos wordmark.

---

## Section map

### 1. Hero

| | Live |
| --- | --- |
| Purpose | Introduce Workspace |
| Background | White + light purple radial at top-right |
| Layout | Two columns, copy left, 1110×1110 screenshot right |
| H1 | AI Workspace: / smarter AI adoption across multiple LLMs |
| Body | Replace scattered AI tools… |
| Bullets | One chat for 200+ AI models; Compare model outputs side by side; Automate work with no-code AI Agents |
| Bullet icon | `check-icon-round.svg` 16×16 (gradient disc + purple check) |
| CTA | Get nexos.ai → `/pricing` locally |
| Visual | `hero-ai-workspace-access-multiple-llms` (not the homepage workspace tab still) |
| Logos | `logo-carousel-customer-stories-v2.svg` (+ xs). Light-background strip, not homepage `trusted-white` |
| Animation | Accordion/hero have no pin/scrub. Image is static. |
| Interaction | None beyond CTA |
| Responsive | Stacks; xs customer-stories strip |

### 2. Shared work

| | Live |
| --- | --- |
| Background | Light gray |
| Layout | Two columns |
| Heading | Keep your team’s AI work in one place |
| Visual | `teams-ai-work-in-one-place` 976×732 |

### 3. One Chat accordion

| | Live |
| --- | --- |
| Background | White |
| Layout | Copy + accordion left, sticky still right |
| Items | Auto model / web search / asks before assuming / files / memory |
| Visuals | Five distinct stills that swap with the open item |
| CTA | Explore Chat |
| Interaction | Accordion; one panel expanded |
| Animation | Height/opacity panel; image crossfade |

### 4. Agents pair

| | Live |
| --- | --- |
| Background | Light gray |
| Layout | Two white cards |
| Visuals | `nexos-homepage-create-agent`, `nexos-homepage-agent-templates` (same files live uses on this page) |
| CTA | Explore no-code Agents on the first card only |

### 5. Agent gallery

| | Live |
| --- | --- |
| Background | White + decorative `grid-homepage-xl-v2` / xs |
| Search | “What would you like to automate?” |
| Tabs | Sales, Marketing, Recruitment / HR, Productivity, Customer Support, Legal, Finance |
| Card icons | Overlapping 72×72 tool PNGs (Teams, Confluence, Outlook, Jira, Slack, Gmail, OneDrive, SharePoint, Calendar, Docs, Salesforce) |
| CTA band | Find the perfect Agent template for you / Get nexos.ai |

### 6. How it works

| | Live |
| --- | --- |
| Heading | How the nexos.ai Workspace / works for your team |
| Body | The benefits of an AI workspace… |
| Cards | 8 feature cards in a prev/next carousel |
| Interaction | Previous/Next slide |

### 7. Security

| | Live |
| --- | --- |
| Eyebrow | Protecting your data |
| Heading | Your data is always secure |
| Badges | GDPR / AICPA Type2 / ISO 27001 / ISO 42001 hanging SVGs (not homepage round WebP) |
| Cards | No training; SSO; Hosted in Europe; Fully certified… “SOC 2 Type 2, ISO 42001 & 27001-certified. Fully compliant with the GDPR.” |
| Icons | 32px FA-style SVGs (shield, servers, cloud-check, key) — matched with existing `UiIcons` |

### 8. Integrations

| | Live |
| --- | --- |
| Eyebrow | Integrations |
| Heading | Bring your knowledge with you |
| Visual | `logo-carousel-integrations.svg` (+ sm) — combined strip, not letter marks |
| CTA | Explore integrations |

### 9. Final CTA

| | Live |
| --- | --- |
| Background | Dark + `grid-glow-bottom-dark.svg` / xs |
| Padding | pt/pb 7rem mobile, 14rem desktop |
| Heading | Ready to replace scattered AI tools with one workspace? |
| CTA | Get nexos.ai |

### 10. FAQs

Six questions, authorized copy, docs link in the first answer.

---

## Original vs created (after correction)

| Section | Status |
| --- | --- |
| Hero screenshot | Corrected — was homepage workspace still / CSS frame |
| Trusted-by strip | Corrected — inner-page customer-stories SVG |
| Bullet checks | Corrected — round gradient SVG |
| Shared-work visual | Corrected — live screenshot |
| Accordion stills | Corrected — five page-specific stills, swap on open |
| Agent cards | Corrected — live create-agent + templates stills |
| Gallery tools | Corrected for Sales templates; other categories still fall back to letter marks until live tool stacks are captured |
| Gallery grid | Corrected — homepage grid SVG used by this live section |
| How-it-works | Corrected — was a testimonial carousel; now 8 feature cards |
| Cert badges | Corrected — hanging SVGs |
| Certified copy | Corrected — includes ISO 42001 |
| Integrations strip | Corrected — combined SVG |
| CTA glow | Corrected — live grid-glow SVG |
| Videos | None on reference |
| Sign in / social | Intentionally omitted |

---

## Asset inventory

| Section | Purpose | Type | Format | Dimensions | Local path | Correct | Replacement | Permission |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Hero | Product UI | Image | WebP | 1110×1110 | `src/assets/images/workspace/hero.webp` | Yes | No | Public CDN, stored locally |
| Hero | Bullet check | SVG | SVG | 16×16 | `src/assets/icons/ui/check-icon-round.svg` | Yes | No | Public |
| Hero | Customer logos | SVG | SVG | 1168×64 | `src/assets/logos/customer-stories.svg` | Yes | No | Public |
| Hero | Customer logos xs | SVG | SVG | — | `src/assets/logos/customer-stories-xs.svg` | Yes | No | Public |
| Share | Product UI | Image | WebP | 976×732 | `src/assets/images/workspace/shared-work.webp` | Yes | No | Public |
| Chat | Auto model | Image | WebP | 1110×1110 | `src/assets/images/workspace/auto-model-select.webp` | Yes | No | Public |
| Chat | Web search | Image | WebP | 1110×1110 | `src/assets/images/workspace/web-search.webp` | Yes | No | Public |
| Chat | Asks | Image | WebP | 1110×1110 | `src/assets/images/workspace/asks.webp` | Yes | No | Public |
| Chat | Files | Image | WebP | 1110×1110 | `src/assets/images/workspace/files.webp` | Yes | No | Public |
| Chat | Memory | Image | WebP | 1110×1110 | `src/assets/images/workspace/memory.webp` | Yes | No | Public |
| Agents | Create agent | Image | WebP | 1110×1110 | `src/assets/images/workspace/create-agent.webp` | Yes | No | Public |
| Agents | Templates library | Image | WebP | 1110×1110 | `src/assets/images/workspace/agent-templates.webp` | Yes | No | Public |
| Gallery | Tool marks | PNG | PNG | 72×72 | `src/assets/icons/tools/*.png` (11) | Yes | No | Public |
| Gallery | Background grid | SVG | SVG | 1400 wide | `src/assets/illustrations/grid-homepage-xl.svg` | Yes | No | Public |
| Gallery | Background grid xs | SVG | SVG | — | `src/assets/illustrations/grid-homepage-xs.svg` | Yes | No | Public |
| Security | Cert badges | SVG | SVG | 92×132 | `src/assets/images/product/badge-*.svg` | Yes | No | Public |
| Integrations | Logo strip | SVG | SVG | — | `src/assets/logos/integrations-carousel.svg` | Yes | No | Public |
| Integrations | Logo strip sm | SVG | SVG | — | `src/assets/logos/integrations-carousel-sm.svg` | Yes | No | Public |
| CTA | Glow grid | SVG | SVG | — | `src/assets/illustrations/grid-glow-bottom-dark.svg` | Yes | No | Public |
| CTA | Glow grid xs | SVG | SVG | — | `src/assets/illustrations/grid-glow-bottom-dark-xs.svg` | Yes | No | Public |
| Header | Nexos wordmark | Image | — | — | Not stored | — | Yes | Identity exclusion |
| Header | Payhawk tile | Image | — | — | Not stored | — | Yes | Mega/footer exclusion |
| — | Any video | — | — | — | None | N/A | N/A | Live page has empty/no videos |

---

## Animation audit

| Section | Trigger | Behavior | Method |
| --- | --- | --- | --- |
| Chat accordion | Click | Panel height + opacity; sticky still crossfade | Motion |
| How-it-works | Click prev/next | Horizontal scroll by card | CSS scroll-behavior |
| FAQ | Click | Panel height + opacity | Motion |
| Gallery tabs | Click | Filter cards | React state |
| Gallery cards | Hover | Border/shadow | CSS |
| Hero / share / security | Scroll | No pin, scrub, or distinctive fade-up on live | None added |
| CTA | None | Static glow SVG | Asset |

Live Workspace does not use a homepage-style pinned product stack.

---

## Remaining differences

- Non-Sales gallery cards still use a letter fallback when live 72×72 stacks were not captured for that category (Sales stacks match).
- Live category tabs did not swap visible cards under synthetic click during audit; local tabs filter by category.
- Pixel-level type scale, container gutters, and 8–20px spacing may still differ from live CSS tokens.
- Header/footer remain our chrome (Brand mark, no Sign in, no social, no Payhawk tile).
- Get nexos.ai goes to `/pricing`; Talk to sales is not on this page hero.
- Shared `ProductCta`, `ProductSecurity`, `TrustMarquee`, `IntegrationsBand`, `AgentGallery`, and `CheckList` now use inner-page assets. Homepage does not import these components.

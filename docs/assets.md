# Asset manifest

Updated 2026-09-15 after Phase 5. Public marketing visuals from the live homepage and feature routes were stored locally. Production components must not hotlink `nexos.ai`, `sb.nordcdn.com`, or `a-us.storyblok.com`.

**Brand identity stays ours.** The Nexos wordmark, favicon, and hashed font files are not used as our chrome. Header/footer still use `src/assets/logos/brand-mark.svg`.

Homepage `<video>` elements still have **empty sources** on the live site (0 playable files). No videos stored.

## Local originals (our identity)

| Local asset | Type | Used in | Status | Notes |
| --- | --- | --- | --- | --- |
| `src/assets/logos/brand-mark.svg` | SVG | Header, footer | Local | Replaceable `currentColor` mark |
| `src/app/icon.svg` | SVG | Favicon | Local | Not the Nexos favicon |
| `src/assets/icons/arrow-right.svg` | SVG | Mega featured titles | Local | Original 16px arrow |

## Local — permitted homepage visuals (downloaded)

### Logos

| Local asset | Type | Used in | Status | Notes |
| --- | --- | --- | --- | --- |
| `src/assets/logos/trusted-white.svg` | SVG 1168×64 | Homepage trusted-by (md+) | Local | Combined customer strip |
| `src/assets/logos/trusted-white-mobile.svg` | SVG | Homepage trusted-by (<md) | Local | Mobile strip |

### Product screenshots

| Local asset | Type | Size | Used in | Status |
| --- | --- | --- | --- | --- |
| `src/assets/images/home/ai-gateway-hero-tabs.webp` | WebP | 1264×1080 | Product tabs, Gateway hero | Local |
| `src/assets/images/home/observability-hero-tabs.webp` | WebP | 1264×1080 | Product tabs, Gateway observability | Local |
| `src/assets/images/home/governance-hero-tabs.webp` | WebP | 1264×1080 | Product tabs | Local |
| `src/assets/images/home/ai-workspace-hero-tabs.webp` | WebP | 1264×1080 | Product tabs, Chat hero (Workspace uses its own still) | Local |

### Cost-stack diagrams

| Local asset | Type | Size | Used in | Status |
| --- | --- | --- | --- | --- |
| `src/assets/images/home/smart-routing-card.webp` | WebP | 1108×682 | Cost card 01 | Local |
| `src/assets/images/home/llm-caching-card.webp` | WebP | 1108×711 | Cost card 02 | Local |
| `src/assets/images/home/context-compression-card.webp` | WebP | 966×654 | Cost card 03 | Local |
| `src/assets/images/home/fallbacks-card.webp` | WebP | 993×701 | Cost card 04 | Local |

### Certification badges

| Local asset | Type | Size | Used in | Status |
| --- | --- | --- | --- | --- |
| `src/assets/images/home/badge-gdpr.webp` | WebP | 152×152 | Security row | Local |
| `src/assets/images/home/badge-aicpa.webp` | WebP | 152×150 | Security row | Local |
| `src/assets/images/home/badge-iso-27001.webp` | WebP | 152×152 | Security row | Local |
| `src/assets/images/home/badge-iso-42001.webp` | WebP | 152×152 | Security row | Local |

### Portraits

| Local asset | Type | Size | Used in | Status |
| --- | --- | --- | --- | --- |
| `src/assets/images/home/marijus-briedis.webp` | WebP | 544×680 | Featured testimonial | Local |
| `src/assets/images/home/testimonial-*.webp` (9) | WebP | 96×96 | Testimonial cards | Local |

### Icons / glyphs

| Local asset | Type | Used in | Status | Notes |
| --- | --- | --- | --- | --- |
| `src/assets/icons/badges/*.svg` | SVG | Hero shifting badge | Local | ISO / SOC2 16px glyphs |
| `src/assets/icons/integrations/*.svg` (34) | SVG | Integration chips | Local | Live chip artwork |
| `src/components/icons/UiIcons.tsx` | SVG paths | Hero, security cards | Local | Cloud-check, key, plus, file-shield, servers |

Index: `src/assets/home.ts`.

## Still replacement / permission required

| Reference | Type | Status | Notes |
| --- | --- | --- | --- |
| `nexos-ai-logo-white.svg` | SVG | Replace | Nexos identity — we keep Brand |
| `nexos-ai-logo-main-black-horizontal-175x31` | Image | Replace | Nexos identity |
| Favicon set | Icon | Replace | Ours, not Nexos |
| `_astro/fonts/*.woff2` | Font | Replace | Google-hosted Inter + Space Grotesk |
| `case-study-payhawk` | AVIF | Not stored | Mega/footer story tile |
| Product-page unique stills (compare dashboard, paid-banner-bg) | Image | Replacement required | Workspace, Agents, and Builder stills stored. Compare still outstanding |
| Zapier chip SVG | SVG | Partial | Live extract was a 16×6 orange bar only |
| Quote carousel faces on product pages | Photo | Replacement required | `PersonStandIn` until page-specific portraits exist. Workspace no longer uses this carousel |
| Observability desktop hero | Image | Partial | Stored live mobile crop only |
| Microsoft Calendar catalog mark | SVG | Partial | Missing embedded bitmap replaced with gradient + “26” |
| Salesforce catalog mark | SVG | Partial | Cloud mark only (full wordmark path too large) |

## Local — Phase 5 feature visuals

Index: `src/assets/features.ts`.

### Integrations

| Local asset | Type | Route | Section | Reuse |
| --- | --- | --- | --- | --- |
| `src/assets/images/integrations/integrations-hero.webp` | WebP | `/features/ai-integrations` | Hero | New |
| `src/assets/images/integrations/nexos-integration-apps.webp` | WebP | `/features/ai-integrations` | App strip | New |
| `src/assets/images/integrations/integrations-select.webp` | WebP | `/features/ai-integrations` | How it works | New |
| `src/assets/images/integrations/chat-integration.webp` | WebP | `/features/ai-integrations` | How it works | New |
| `src/assets/images/integrations/secure-files.webp` | WebP | `/features/ai-integrations` | Why / secure | New |
| `src/assets/images/integrations/integrations-files.webp` | WebP | `/features/ai-integrations` | How it works | New |
| `src/components/icons/work-app-extras.ts` | Inline SVG | Catalog | Logos | New, shared with IntegrationIcon |

### Messaging Apps

| Local asset | Type | Route | Section | Reuse |
| --- | --- | --- | --- | --- |
| `src/assets/images/messaging/*.webp` (10) | WebP | `/features/messaging-apps` | Hero, cards, roles | New |

### Browser Extension

| Local asset | Type | Route | Section | Reuse |
| --- | --- | --- | --- | --- |
| `src/assets/images/extension/browser-extension-2.webp` | WebP 1110×1110 | `/features/browser-extension` | Hero still (browser + panel) | Reused |
| `src/assets/images/extension/extension-models.webp` | WebP 1100×825 | `/features/browser-extension` | Benefits models card | Reused |
| `src/assets/images/extension/extension-assistant.webp` | WebP 1100×825 | `/features/browser-extension` | Benefits assistants card | Reused |
| `src/assets/images/extension/videobanner-mikas-xl.webp` | WebP 1600×449 | `/features/browser-extension` | Walkthrough poster | Reused; cropped to 296px |
| `src/assets/illustrations/grid-centered-secondary-center.svg` | SVG | `/features/browser-extension` | Hero grid | Reused from Agents |
| `src/assets/images/ai-integrations/banner-light-glow.webp` | WebP | `/features/browser-extension` | CTA glow | Reused from Integrations |
| `src/components/extension/ExtensionIcons.tsx` | Inline SVG | `/features/browser-extension` | Chrome, FA icons | New; Chrome from live CTA |
| YouTube `3D1rcPluLBY` | Embed | `/features/browser-extension` | Walkthrough modal | Live has no self-hosted video |

### Deep Research

Index: `src/assets/deep-research.ts`. Route: `/features/deep-research`. Permission: public marketing assets. No production hotlinking.

| filename | route | section | type | format | dimensions | reused/downloaded | permission | replacement required |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `src/assets/images/deep-research/deep-research-hero.webp` | `/features/deep-research` | Hero | Product screenshot | WebP | 1110×1110 | Reused (`deep-research-hero`) | Public | No |
| `src/assets/illustrations/grid-centered-secondary-center.svg` | `/features/deep-research` | Hero grid | SVG | SVG | 1400×1200 | Reused from Agents | Public | No |
| `src/assets/images/deep-research/save-time.webp` | `/features/deep-research` | Depth / Save time | Product screenshot | WebP | 702×496 | Reused (`deep-research-save-time`) | Public | No |
| `src/assets/images/deep-research/choose-model.webp` | `/features/deep-research` | Depth / Choose model | Product screenshot | WebP | 662×496 | Reused (`deep-research-choose-AI-model`) | Public | No |
| `src/assets/images/deep-research/deeper-insights.webp` | `/features/deep-research` | Depth / Insights | Product screenshot | WebP | 662×496 | Reused (`deep-research-get-deeper-insights`) | Public | No |
| `src/assets/images/deep-research/marketing.webp` | `/features/deep-research` | Teams / Marketing | Product screenshot | WebP | — | Reused (`deep-research-marketing`) | Public | No |
| `src/assets/images/deep-research/sales.webp` | `/features/deep-research` | Teams / Sales | Product screenshot | WebP | — | Reused (`deep-research-sales`) | Public | No |
| `src/assets/images/deep-research/product.webp` | `/features/deep-research` | Teams / Product | Product screenshot | WebP | — | Reused (`deep-research-product`) | Public | No |
| `src/assets/images/deep-research/hr.webp` | `/features/deep-research` | Teams / HR | Product screenshot | WebP | — | Reused (`deep-research-HR`) | Public | No |
| `src/assets/images/ai-integrations/banner-light-glow.webp` | `/features/deep-research` | CTA glow | Image | WebP | 2336×992 | Reused from Integrations | Public | No |
| `src/assets/images/deep-research/deep-research-providers.svg` | `/features/deep-research` | Compare logos | SVG | SVG | 187×80 | Downloaded (`deep-research-providers`) | Public | No |
| `src/components/deep-research/DeepResearchIcons.tsx` | `/features/deep-research` | How-it-works icons | Inline SVG | SVG paths | 2rem | Live path data | Public | No |

Videos: none on this page.

### AI Gateway

Index: `src/assets/gateway.ts`. Route: `/ai-gateway`. Permission: public marketing assets. No production hotlinking.

| filename | route | section | type | format | dimensions | reused/downloaded | permission | replacement required |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `src/assets/images/ai-gateway/llm-gateway-hero-animated-xl.svg` | `/ai-gateway` | Hero | Animated SVG | SVG | 1168×360 | Downloaded (`llm-gateway-hero-animated-xl-2`) | Public | No |
| `src/assets/images/ai-gateway/llm-gateway-hero-animated-xs.svg` | `/ai-gateway` | Hero mobile | Animated SVG | SVG | 555×555 | Downloaded | Public | No |
| `src/assets/logos/trusted-white.svg` | `/ai-gateway` | Logo strip | SVG | SVG | 1168×64 | Reused homepage | Public | No |
| `src/assets/logos/trusted-white-mobile.svg` | `/ai-gateway` | Logo strip mobile | SVG | SVG | — | Reused homepage | Public | No |
| `src/assets/images/ai-gateway/gateway-schema-dark-animated-xl.svg` | `/ai-gateway` | Unified architecture | Animated SVG | SVG | 1400×654 | Downloaded | Public | No |
| `src/assets/images/ai-gateway/gateway-schema-dark-animated-xs.svg` | `/ai-gateway` | Unified architecture mobile | Animated SVG | SVG | — | Downloaded | Public | No |
| `src/assets/images/ai-gateway/connect-to-every-model.webp` | `/ai-gateway` | Data slide 1 | Product screenshot | WebP | 1048×839 | Downloaded | Public | No |
| `src/assets/images/ai-gateway/optimize-costs-smart-routing.webp` | `/ai-gateway` | Data slide 2 | Product screenshot | WebP | 1048×839 | Downloaded | Public | No |
| `src/assets/images/ai-gateway/see-ai-costs-real-time.webp` | `/ai-gateway` | Data slide 3 | Product screenshot | WebP | 1048×839 | Downloaded | Public | No |
| `src/assets/images/ai-gateway/one-gateway-every-team.webp` | `/ai-gateway` | Data slide 4 | Product screenshot | WebP | 1048×839 | Downloaded | Public | No |
| `src/assets/images/ai-gateway/move-fast-without-scary-invoice.webp` | `/ai-gateway` | Data slide 5 | Product screenshot | WebP | 1048×839 | Downloaded | Public | No |
| `src/assets/images/ai-gateway/secure-by-default.webp` | `/ai-gateway` | Data slide 6 | Product screenshot | WebP | 1048×839 | Downloaded | Public | No |
| `src/assets/images/ai-gateway/gradient-1-xl.webp` | `/ai-gateway` | Pain visual glow | Decorative | WebP | 5760×1740 | Downloaded | Public | No |
| `src/assets/images/ai-gateway/models-editing-ui-xl.webp` | `/ai-gateway` | Pain dashboard | Product screenshot | WebP | 2144×760 | Downloaded | Public | No |
| `src/assets/images/ai-gateway/models-editing-ui-xs.webp` | `/ai-gateway` | Pain dashboard mobile | Product screenshot | WebP | — | Downloaded | Public | No |
| `src/assets/illustrations/grid-glow-bottom-dark.svg` | `/ai-gateway` | Final CTA | Decorative SVG | SVG | 1400×709 | Reused ProductCta | Public | No |
| `src/assets/images/home/marijus-briedis.webp` + testimonial portraits | `/ai-gateway` | Quotes | Portraits | WebP | 48 displayed | Reused homepage | Public | No |
| `src/assets/images/product/badge-*.svg` | `/ai-gateway` | Security | Certification | SVG | 42×61 | Reused | Public | No |
| `src/components/gateway/GatewayIcons.tsx` | `/ai-gateway` | Why / pain / pills / API | Inline SVG | SVG paths | 16–32px | Live path data | Public | No |

Videos: none on the live AI Gateway page.

### LLM Caching

| Local asset | Type | Route | Section | Reuse |
| --- | --- | --- | --- | --- |
| `src/assets/images/caching/llm-caching-hero.svg` | SVG | `/features/llm-caching` | Hero diagram | New; CSS keyframes inside file |
| `src/assets/images/caching/*.webp` (4) | WebP | `/features/llm-caching` | Benefits | New |

### Smart LLM Routing

Index: `src/assets/routing.ts`. Route: `/features/smart-llm-routing`. Permission: public marketing assets downloaded from the live page. No production hotlinking.

| filename | route | section | type | format | dimensions | reused/downloaded | permission | replacement required |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `src/assets/images/smart-llm-routing/smart-llm-routing-hero.svg` | `/features/smart-llm-routing` | Hero | Animated SVG | SVG | 555×555 | Downloaded (`Smart-LLM-routing-animated-hero.svg`) | Public | No |
| `src/assets/images/smart-llm-routing/cut-costs-not-quality.webp` | `/features/smart-llm-routing` | Benefits | Product still | WebP | 662×530 | Downloaded (`Cut-costs-not-quality`) | Public | No |
| `src/assets/images/smart-llm-routing/improve-reliability.webp` | `/features/smart-llm-routing` | Benefits | Product still | WebP | 662×530 | Downloaded (`Improve-reliability-and-performance`) | Public | No |
| `src/assets/images/smart-llm-routing/no-routing-logic.webp` | `/features/smart-llm-routing` | Benefits | Product still | WebP | 662×530 | Downloaded (`Cut-costs-not-quality-1`) | Public | No |
| `src/assets/images/smart-llm-routing/continuous-learning.webp` | `/features/smart-llm-routing` | Benefits | Product still | WebP | 662×530 | Downloaded (`Continuous-learning`) | Public | No |
| `src/assets/images/smart-llm-routing/how-routing-works.webp` | `/features/smart-llm-routing` | How it works | Code screenshot | WebP | — | Downloaded (`Smart-LLM-routing`) | Public | No |
| `src/assets/logos/trusted-white.svg` | `/features/smart-llm-routing` | Trusted-by desktop | Logo strip | SVG | 1168×64 | Reused | Public | No |
| `src/assets/logos/trusted-white-mobile.svg` | `/features/smart-llm-routing` | Trusted-by mobile | Logo strip | SVG | — | Reused | Public | No |
| `src/components/routing/RoutingIcons.tsx` | `/features/smart-llm-routing` | More / use cases / security / pills | Inline SVG | SVG paths | FA live | Live path data | Public | No |

Videos: none on this page.

### LLM Observability

| Local path | Route | Section | Asset type | Format | Dimensions | Original role | Downloaded/reused | Permission | Replacement required |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `src/assets/images/observability/hero.webp` | `/features/llm-observability` | Hero | Product still | WebP | — | Observability-hero-mobile | Reused | Public | No |
| `src/assets/images/observability/ai-tool-in-use.webp` | `/features/llm-observability` | Control | Product UI | WebP | 555² | AI-tool-in-use | Reused | Public | No |
| `src/assets/images/observability/uncover-shadow-ai.webp` | `/features/llm-observability` | Control | Product UI | WebP | 555² | Uncover-shadow-AI | Reused | Public | No |
| `src/assets/images/observability/attribute-usage.webp` | `/features/llm-observability` | Control | Product UI | WebP | 555² | Attribute-AI-usage-and-cost | Reused | Public | No |
| `src/assets/images/observability/prevent-data-leaks.webp` | `/features/llm-observability` | Control | Product UI | WebP | 555² | Prevent-data-leaks | Reused | Public | No |
| `src/assets/images/observability/get-insights.webp` | `/features/llm-observability` | Control | Product UI | WebP | 555² | Get-insights | Reused | Public | No |
| `src/assets/images/observability/usage.webp` | `/features/llm-observability` | Observe | Chart still | WebP | — | Observability-Usage | Reused | Public | No |
| `src/assets/images/observability/performance.webp` | `/features/llm-observability` | Observe | Chart still | WebP | — | Observability-Performance | Reused | Public | No |
| `src/assets/images/observability/costs.webp` | `/features/llm-observability` | Observe | Chart still | WebP | — | Observability-Costs | Reused | Public | No |
| `src/assets/images/observability/logs.webp` | `/features/llm-observability` | Observe | Logs still | WebP | — | Observability-Logs | Reused | Public | No |
| `src/assets/images/llm-observability/observer-organisation-profile.webp` | `/features/llm-observability` | Explore Profile | Console still | WebP | — | observer-organisation-profile | Downloaded | Public | No |
| `src/assets/images/llm-observability/observer-organisation-usage.webp` | `/features/llm-observability` | Explore Usage | Console still | WebP | — | observer-organisation-usage | Downloaded | Public | No |
| `src/assets/images/llm-observability/observer-organisation-audit-log.webp` | `/features/llm-observability` | Explore Audit | Console still | WebP | — | observer-organisation-audit-log | Downloaded | Public | No |
| `src/assets/images/observability/explore-security.webp` | `/features/llm-observability` | Explore Security | Console still | WebP | — | observer-security | Reused | Public | No |
| `src/assets/images/observability/explore-adoption.webp` | `/features/llm-observability` | Explore Adoption | Console still | WebP | — | observer-adoption-overview | Reused | Public | No |
| `src/assets/images/llm-observability/observer-adoption-detail.webp` | `/features/llm-observability` | Explore extra | Console still | WebP | — | observer-adoption-detail | Downloaded; not a dedicated tab | Public | No |
| `src/assets/images/observability/explore-knowledge.webp` | `/features/llm-observability` | Explore Knowledge | Console still | WebP | — | observer-knowledge | Reused | Public | No |
| `src/assets/logos/trusted-white.svg` | `/features/llm-observability` | Trusted-by | Logo strip | SVG | 1168×64 | Same as home/routing | Reused | Public | No |
| `src/components/observability/ObservabilityIcons.tsx` | `/features/llm-observability` | Benefits / blind / explorer | Inline SVG | SVG paths | FA / custom 32 | Live path data | Live path data | Public | No |

Videos: none on this page.

### EU Gateway (`/eu-gateway`)

Index: `src/assets/eu-gateway.ts`. Older `src/assets/images/eu/*` files are unused leftovers from the generic draft.

| Local asset | Route | Section | Asset type | Format | Dimensions | Original role | Downloaded/reused | Permission | Replacement required |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `src/assets/images/eu-gateway/badge-data-residency-dark.svg` | `/eu-gateway` | Hero | Badge | SVG | 176×33 | badge-data-residency-dark | Downloaded | Public Storyblok | No |
| `src/assets/images/eu-gateway/eu-data-residency-hero-xl.svg` | `/eu-gateway` | Hero | Animated diagram | SVG | 1168×360 | eu-data-residency-hero-xl-5-1 | Downloaded | Public Storyblok | No |
| `src/assets/images/eu-gateway/eu-data-residency-hero-xs.svg` | `/eu-gateway` | Hero mobile | Animated diagram | SVG | — | eu-data-residency-hero-dark-xs | Downloaded | Public Storyblok | No |
| `src/assets/images/eu-gateway/eu-data-api-url.svg` | `/eu-gateway` | Migrate | Code window | SVG | 572×433 | eu-data-api-url-2 | Downloaded | Public Storyblok | No |
| `src/assets/images/eu-gateway/eu-secure-ai-governance.webp` | `/eu-gateway` | Why mosaic | Product visual | WebP | 1152×696 | eu-secure-ai-governance-v2 | Downloaded | Public Storyblok | No |
| `src/assets/images/nav/case-study-payhawk.webp` | `/eu-gateway` | Header Resources | Product still | WebP | 220×165 | case-study-payhawk | Downloaded | Public Storyblok | No |
| `src/assets/illustrations/grid-glow-bottom-dark.svg` | `/eu-gateway` | CTA | Background | SVG | — | grid-glow-bottom-dark-2 | Reused | Public | No |
| `src/assets/illustrations/grid-glow-bottom-dark-xs.svg` | `/eu-gateway` | CTA mobile | Background | SVG | — | grid-glow-bottom-dark xs | Reused | Public | No |
| `src/assets/icons/integrations/gemini.svg` | `/eu-gateway` | Models | Logo | SVG | 48 | Gemini mark | Reused | Public | No |
| `src/assets/icons/integrations/mistral.svg` | `/eu-gateway` | Models | Logo | SVG | 48 | Mistral tiles | Reused | Public | No |
| `src/components/eu-gateway/EuIcons.tsx` | `/eu-gateway` | Needs / why / compare | Inline SVG | SVG paths | FA / custom | Live path data | Live path data | Public | No |

Videos: none on this page. No Europe map asset.

## Local — Workspace (inner page)

Index: `src/assets/products.ts`. Route: `/ai-workspace-for-multiple-llms`.

| Local asset | Type | Section | Reuse |
| --- | --- | --- | --- |
| `src/assets/images/workspace/hero.webp` | WebP 1110×1110 | Hero product UI | New |
| `src/assets/images/workspace/shared-work.webp` | WebP 976×732 | Shared work | New |
| `src/assets/images/workspace/auto-model-select.webp` | WebP | Chat accordion | New |
| `src/assets/images/workspace/web-search.webp` | WebP | Chat accordion | New |
| `src/assets/images/workspace/asks.webp` | WebP | Chat accordion | New |
| `src/assets/images/workspace/files.webp` | WebP | Chat accordion | New |
| `src/assets/images/workspace/memory.webp` | WebP | Chat accordion | New |
| `src/assets/images/workspace/create-agent.webp` | WebP | Agents card | New |
| `src/assets/images/workspace/agent-templates.webp` | WebP | Agents card | New |
| `src/assets/icons/ui/check-icon-round.svg` | SVG 16×16 | Hero bullets | New, shared inner |
| `src/assets/logos/customer-stories.svg` | SVG | Inner trusted-by | New, not homepage strip |
| `src/assets/logos/customer-stories-xs.svg` | SVG | Inner trusted-by mobile | New |
| `src/assets/logos/integrations-carousel.svg` | SVG | Integrations band | New |
| `src/assets/logos/integrations-carousel-sm.svg` | SVG | Integrations band mobile | New |
| `src/assets/images/product/badge-*.svg` (4) | SVG 92×132 | Inner cert row | New, not homepage WebP rounds |
| `src/assets/icons/tools/*.png` (11) | PNG 72×72 | Agent template stacks | New |
| `src/assets/illustrations/grid-homepage-xl.svg` | SVG | Gallery background | New |
| `src/assets/illustrations/grid-homepage-xs.svg` | SVG | Gallery background mobile | New |
| `src/assets/illustrations/grid-glow-bottom-dark.svg` | SVG | Inner CTA | New |
| `src/assets/illustrations/grid-glow-bottom-dark-xs.svg` | SVG | Inner CTA mobile | New |

## Local — AI Agents (inner page)

Index: `src/assets/agents.ts`. Route: `/features/ai-agents`. Permission: public marketing assets downloaded from the live page. No production hotlinking.

| filename | route | section | type | format | dimensions | reused/downloaded | permission | replacement required |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `src/assets/images/ai-agents/hero.webp` | `/features/ai-agents` | Hero | Product screenshot | WebP | 1110×1110 | Downloaded (`agents-hero-2`) | Public | No |
| `src/assets/images/ai-agents/create-agent.webp` | `/features/ai-agents` | Create custom | Product screenshot | WebP | 1110×1110 | Downloaded (`Agents-create-agent`) | Public | No |
| `src/assets/images/ai-agents/templates.webp` | `/features/ai-agents` | Pre-built templates | Product screenshot | WebP | 1110×1110 | Downloaded (`nexos-homepage-agent-templates`) | Public | No |
| `src/assets/images/ai-agents/integrations.webp` | `/features/ai-agents` | Connect work tools | Product screenshot | WebP | — | Downloaded (`agents-integrations-2`) | Public | No |
| `src/assets/images/ai-agents/human-in-the-loop.webp` | `/features/ai-agents` | Stay in control | Product screenshot | WebP | — | Downloaded (`human-in-the-loop`) | Public | No |
| `src/assets/images/ai-agents/share.webp` | `/features/ai-agents` | Team sharing | Product screenshot | WebP | — | Downloaded (`Agents-share-with-your-team`) | Public | No |
| `src/assets/illustrations/grid-centered-secondary-center.svg` | `/features/ai-agents` | Hero background | SVG | SVG | 1400×1200 | Downloaded | Public | No |
| `src/assets/illustrations/grid-homepage-xl-v2.svg` | `/features/ai-agents` | Gallery background | SVG | SVG | 1400×1286 | Downloaded | Public | No |
| `src/assets/illustrations/grid-homepage-xs-v2.svg` | `/features/ai-agents` | Gallery background mobile | SVG | SVG | — | Downloaded | Public | No |
| `src/assets/logos/integrations-logos.svg` | `/features/ai-agents` | Work knowledge | SVG strip | SVG | — | Downloaded | Public | No |
| `src/assets/icons/apps/slack.svg` | `/features/ai-agents` | Connect tools pill | Icon | SVG | 48×49 | Downloaded | Public | No |
| `src/assets/icons/apps/google-workspace.svg` | `/features/ai-agents` | Connect tools pill | Icon | SVG | 20×20 | Downloaded (embedded raster, ~1.2MB; live original) | Public | No |
| `src/assets/icons/apps/microsoft-office.svg` | `/features/ai-agents` | Connect tools pill | Icon | SVG | — | Downloaded | Public | No |
| `src/assets/logos/press/bloomberg.svg` | `/features/ai-agents` | Featured in | Logo | SVG | — | Downloaded | Public | No |
| `src/assets/logos/press/techcrunch.svg` | `/features/ai-agents` | Featured in | Logo | SVG | — | Downloaded | Public | No |
| `src/assets/logos/press/forbes.svg` | `/features/ai-agents` | Featured in | Logo | SVG | — | Downloaded | Public | No |
| `src/assets/logos/press/techradar.svg` | `/features/ai-agents` | Featured in | Logo | SVG | — | Downloaded | Public | No |
| `src/assets/logos/press/cybernews.svg` | `/features/ai-agents` | Featured in | Logo | SVG | — | Downloaded from live `TechCrunch.svg` URL; artwork is cybernews | Public | No |
| `src/assets/icons/tools/*.png` | `/features/ai-agents` | Agent cards | Icon | PNG | 72×72 | Reused | Public | No |
| `src/assets/images/product/badge-{gdpr,aicpa,iso-27001}.svg` | `/features/ai-agents` | Security certified | Certification | SVG | 92×132 | Reused (ISO 42001 omitted on this page) | Public | No |
| `src/assets/logos/customer-stories.svg` | `/features/ai-agents` | Testimonials logo strip | SVG | SVG | 1168×64 | Reused | Public | No |
| `src/assets/images/home/testimonial-*.webp` | `/features/ai-agents` | Testimonials portraits | Image | WebP | 96×96 | Reused | Public | No |
| `src/assets/illustrations/grid-glow-bottom-dark.svg` | `/features/ai-agents` | Final CTA | SVG | SVG | — | Reused | Public | No |

Videos: none on this page.

## Local — AI Agent Builder (inner page)

Index: `src/assets/builder.ts`. Route: `/ai-agent-builder`. Permission: public marketing assets downloaded from the live page. No production hotlinking.

| filename | route | section | type | format | dimensions | reused/downloaded | permission | replacement required |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `src/assets/images/ai-agent-builder/hero.webp` | `/ai-agent-builder` | Hero | Product screenshot | WebP | 1110×1110 | Downloaded (`agent-builder-hero`) | Public | No |
| `src/assets/images/ai-agent-builder/create-agent.webp` | `/ai-agent-builder` | No-code Builder | Product screenshot | WebP | 1110×1110 | Downloaded (`create-agent-from-scratch-or-use-template`) | Public | No |
| `src/assets/images/ai-agent-builder/integrations.webp` | `/ai-agent-builder` | Integrations | Product screenshot | WebP | 1110×1110 | Downloaded (`founder-integrations-apps`) | Public | No |
| `src/assets/images/ai-agents/templates.webp` | `/ai-agent-builder` | Agent templates | Product screenshot | WebP | 1110×1110 | Reused (`nexos-homepage-agent-templates`) | Public | No |
| `src/assets/images/ai-agent-builder/models.webp` | `/ai-agent-builder` | Model-agnostic | Product screenshot | WebP | 1110×1110 | Downloaded (`model-selection-sales`) | Public | No |
| `src/assets/images/ai-agent-builder/schedule.webp` | `/ai-agent-builder` | Scheduling | Product screenshot | WebP | 1110×1110 | Downloaded (`agents-schedule`) | Public | No |
| `src/assets/images/ai-agents/human-in-the-loop.webp` | `/ai-agent-builder` | Human in the loop | Product screenshot | WebP | 1110×1110 | Reused | Public | No |
| `src/assets/videos/ai-agent-builder/agent-builder.mp4` | `/ai-agent-builder` | Intro | Video | MP4 | 1280×720 / 3.5MB | Downloaded (`Agent-builder_44s_1920x1080.mp4`); served from `public/videos/ai-agent-builder/` | Public | No |
| `src/assets/images/ai-agent-builder/video-poster.jpg` | `/ai-agent-builder` | Intro poster | Image | JPEG | 800×450 | Downloaded | Public | No |
| `src/assets/images/ai-agent-builder/prompt-grid-bg.svg` | `/ai-agent-builder` | To-do composer | SVG | SVG | 1168×356 | Downloaded | Public | No |
| `src/assets/images/ai-agent-builder/prompt-grid-bg-xs.svg` | `/ai-agent-builder` | To-do composer mobile | SVG | SVG | — | Downloaded | Public | No |
| `src/assets/images/product/badge-{gdpr,aicpa,iso-27001}.svg` | `/ai-agent-builder` | Security bar | Certification | SVG | 92×132 | Reused (ISO 42001 omitted) | Public | No |
| `src/assets/images/home/testimonial-{vismantas,ilma,lauryna,giedre}.webp` | `/ai-agent-builder` | Use-case portraits | Image | WebP | 96×96 | Reused | Public | No |
| `src/assets/logos/nord-security.svg` | `/ai-agent-builder` | Use-case company logo | Logo | SVG | 142×64 | Downloaded (`NordSecurity.svg`); used on all 4 slides | Public | No |
| `src/assets/icons/tools/*.png` | `/ai-agent-builder` | Composer AI Tools | Icon | PNG | 72×72 | Reused | Public | No |
| `src/components/builder/BuilderIcons.tsx` | `/ai-agent-builder` | How-to + departments | Inline SVG | SVG paths | 2rem | Live path data | Public | No |
| `src/assets/illustrations/grid-glow-bottom-dark.svg` | `/ai-agent-builder` | Final CTA | SVG | SVG | — | Reused | Public | No |

## Local — AI Chat (inner page)

Index: `src/assets/chat.ts`. Route: `/features/ai-chat`. Permission: public marketing assets downloaded from the live page. No production hotlinking.

| filename | route | section | type | format | dimensions | reused/downloaded | permission | replacement required |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `src/assets/images/ai-chat/hero.webp` | `/features/ai-chat` | Hero | Product screenshot | WebP | 1110×1110 | Downloaded (`hero-chat-prompts`) | Public | No |
| `src/assets/images/ai-chat/models.webp` | `/features/ai-chat` | Top models | Product screenshot | WebP | 1110×1110 | Downloaded (`world-top-ai-models`) | Public | No |
| `src/assets/images/workspace/auto-model-select.webp` | `/features/ai-chat` | Auto Select | Product screenshot | WebP | 1110×1110 | Reused (identical to `auto-model-select`) | Public | No |
| `src/assets/images/workspace/web-search.webp` | `/features/ai-chat` | Web Search | Product screenshot | WebP | 1110×1110 | Reused (identical to `web-search-chat-ai`) | Public | No |
| `src/assets/images/ai-chat/deep-research.webp` | `/features/ai-chat` | Deep Research | Product screenshot | WebP | 1110×1110 | Downloaded (`run-deep-reserach-chat`) | Public | No |
| `src/assets/images/workspace/asks.webp` | `/features/ai-chat` | Interactive Chat | Product screenshot | WebP | 1110×1110 | Reused (identical to `interactive-chat-collaboration`) | Public | No |
| `src/assets/images/workspace/files.webp` | `/features/ai-chat` | File generation | Product screenshot | WebP | 1110×1110 | Reused (identical to `create-ready-to-use-files`) | Public | No |
| `src/assets/images/workspace/memory.webp` | `/features/ai-chat` | Memory | Product screenshot | WebP | 1110×1110 | Reused (identical to `enable-memory-personalization`) | Public | No |
| `src/assets/images/ai-chat/marketing.webp` | `/features/ai-chat` | Teams / Marketing | Product screenshot | WebP | — | Downloaded (`marketing-linkedin-post`) | Public | No |
| `src/assets/images/ai-chat/sales.webp` | `/features/ai-chat` | Teams / Sales | Product screenshot | WebP | — | Downloaded (`sales-chat-file`) | Public | No |
| `src/assets/images/ai-chat/talent.webp` | `/features/ai-chat` | Teams / Talent | Product screenshot | WebP | — | Downloaded (`chat-prompt`) | Public | No |
| `src/assets/images/ai-chat/compare.webp` | `/features/ai-chat` | Compare Models | Product screenshot | WebP | 1110×1110 | Downloaded (`compare-models-chat`) | Public | No |
| `src/assets/logos/customer-stories.svg` | `/features/ai-chat` | Trusted-by desktop | SVG strip | SVG | 1168×64 | Reused (identical to `logo-carousel-customer-stories-v2`) | Public | No |
| `src/assets/logos/customer-stories-v2-xs.svg` | `/features/ai-chat` | Trusted-by mobile | SVG strip | SVG | — | Downloaded (`mobile-logo-carousel-customer-stories-v2`) | Public | No |
| `src/assets/illustrations/grid-centered-secondary-center.svg` | `/features/ai-chat` | Hero background | SVG | SVG | 1400×1200 | Reused from Agents | Public | No |
| `src/assets/logos/integrations-logos.svg` | `/features/ai-chat` | Integrations strip | SVG | SVG | 1168×127 | Reused from Agents | Public | No |
| `src/assets/illustrations/grid-glow-bottom-light.svg` | `/features/ai-chat` | Integrations glow | SVG | SVG | 1400×709 | Downloaded | Public | No |
| `src/assets/images/ai-agent-builder/prompt-grid-bg.svg` | `/features/ai-chat` | Prompt composer | SVG | SVG | 1168×356 | Reused from Builder | Public | No |
| `src/assets/images/product/badge-{gdpr,aicpa,iso-27001}.svg` | `/features/ai-chat` | Security certified | Certification | SVG | 92×132 | Reused (ISO 42001 omitted) | Public | No |
| `src/assets/illustrations/grid-glow-bottom-dark.svg` | `/features/ai-chat` | Final CTA | SVG | SVG | — | Reused | Public | No |

Videos: none on this page.

## Local — Compare AI Models (inner page)

Index: `src/assets/compare.ts`. Route: `/features/compare-ai-models`. Permission: public marketing assets downloaded from the live page. No production hotlinking.

| filename | route | section | type | format | dimensions | reused/downloaded | permission | replacement required |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `src/assets/images/compare-ai-models/hero.webp` | `/features/compare-ai-models` | Hero | Product screenshot | WebP | 1136 | Downloaded (`ai-compare-models`) | Public | No |
| `src/assets/images/compare-ai-models/marketing.webp` | `/features/compare-ai-models` | Marketing | Product screenshot | WebP | 1136 | Downloaded (`data-analytics-no-bg-xl-xs`) | Public | No |
| `src/assets/images/compare-ai-models/developers.webp` | `/features/compare-ai-models` | Developers | Product screenshot | WebP | 1136 | Downloaded (`engineering-no-bg-xl-xs`) | Public | No |
| `src/assets/images/compare-ai-models/legal.webp` | `/features/compare-ai-models` | Legal | Product screenshot | WebP | 1136 | Downloaded (`legal-no-bg-xl-xs`) | Public | No |
| `src/assets/images/compare-ai-models/tour-banner.webp` | `/features/compare-ai-models` | Tour banner | Image | WebP | — | Downloaded (`paid-banner-bg-xl`) | Public | No |
| `src/assets/images/compare-ai-models/tour-banner-xs.webp` | `/features/compare-ai-models` | Tour banner mobile | Image | WebP | — | Downloaded (`paid-banner-bg-xs`) | Public | No |
| `src/assets/illustrations/animated-gradient-single.svg` | `/features/compare-ai-models` | CTA | Animated SVG | SVG | 1440×400 | Downloaded | Public | No |
| `src/assets/icons/ui/play-filled.svg` | `/features/compare-ai-models` | Tour play | Icon | SVG | 24×24 | Downloaded | Public | No |
| `src/assets/logos/compare/oxylabs.svg` | `/features/compare-ai-models` | Trusted-by | Logo | SVG | 142×64 | Downloaded | Public | No |
| `src/assets/logos/compare/payhawk.svg` | `/features/compare-ai-models` | Trusted-by | Logo | SVG | 142×64 | Downloaded | Public | No |
| `src/assets/logos/compare/hostinger.svg` | `/features/compare-ai-models` | Trusted-by | Logo | SVG | 142×64 | Downloaded | Public | No |
| `src/assets/logos/nord-security.svg` | `/features/compare-ai-models` | Trusted-by | Logo | SVG | 142×64 | Reused from Builder | Public | No |
| `src/assets/illustrations/grid-centered-secondary-center.svg` | `/features/compare-ai-models` | Hero grid | SVG | SVG | 1400×1200 | Reused from Agents | Public | No |

Videos: none on this page.

## Local — AI Integrations (inner page)

Index: `src/assets/integrations.ts`. Route: `/features/ai-integrations`. Permission: public marketing assets. No production hotlinking.

| filename | route | section | type | format | dimensions | reused/downloaded | permission | replacement required |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `src/assets/images/integrations/integrations-hero.webp` | `/features/ai-integrations` | Hero | Product screenshot | WebP | 1110×1110 | Reused | Public | No |
| `src/assets/images/integrations/nexos-integration-apps.webp` | `/features/ai-integrations` | Most-used apps | Image | WebP | 2336×640 | Reused | Public | No |
| `src/assets/images/integrations/integrations-select.webp` | `/features/ai-integrations` | Why / faster | Product screenshot | WebP | 1136×852 | Reused | Public | No |
| `src/assets/images/integrations/chat-integration.webp` | `/features/ai-integrations` | Why / knowledge | Product screenshot | WebP | 1136×852 | Reused | Public | No |
| `src/assets/images/integrations/secure-files.webp` | `/features/ai-integrations` | Why / secure | Product screenshot | WebP | 1110×1110 | Reused | Public | No |
| `src/assets/images/integrations/integrations-files.webp` | `/features/ai-integrations` | Analyze docs | Product screenshot | WebP | 1110 | Reused | Public | No |
| `src/assets/images/ai-integrations/banner-light-glow.webp` | `/features/ai-integrations` | CTA | Image | WebP | 2336×992 | Downloaded (`banner-light-glow`) | Public | No |
| `src/assets/illustrations/grid-centered-secondary-center.svg` | `/features/ai-integrations` | Hero grid | SVG | SVG | 1400×1200 | Reused from Agents | Public | No |
| `src/components/icons/IntegrationIcon.tsx` + `work-app-extras.ts` | `/features/ai-integrations` | Directory logos | SVG | SVG | 48×48 | Reused | Public | No |
| `src/assets/images/product/badge-{gdpr,aicpa,iso-27001}.svg` | `/features/ai-integrations` | Security | Certification | SVG | 92×132 | Reused via ProductSecurity agents | Public | No |

Videos: none on this page.

## Local — Messaging Apps (inner page)

Index: `src/assets/messaging.ts`. Route: `/features/messaging-apps`. Permission: public marketing assets. No production hotlinking.

| filename | route | section | type | format | dimensions | reused/downloaded | permission | replacement required |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `src/assets/images/messaging-apps/badge-apps-upon-request.svg` | `/features/messaging-apps` | Hero badge | SVG | SVG | 247×36 | Downloaded | Public | No |
| `src/assets/images/messaging/nexosai-assistant-2.webp` | `/features/messaging-apps` | Hero | Product screenshot | WebP | 1110×936 | Reused | Public | No |
| `src/assets/logos/messaging/logo-carousel-press-featured.svg` | `/features/messaging-apps` | Press | SVG | SVG | 1440×64 | Downloaded | Public | No |
| `src/assets/logos/messaging/logo-carousel-press-sm.svg` | `/features/messaging-apps` | Press tablet | SVG | SVG | — | Downloaded | Public | No |
| `src/assets/logos/messaging/logo-carousel-press-xs.svg` | `/features/messaging-apps` | Press mobile | SVG | SVG | — | Downloaded | Public | No |
| `src/assets/images/messaging-apps/connected-to-data-4-3.webp` | `/features/messaging-apps` | More / acts | Product screenshot | WebP | — | Downloaded (`connected-to-data-4-3`) | Public | No |
| `src/assets/images/messaging-apps/pick-the-right-brain-automatically.webp` | `/features/messaging-apps` | More / brain | Product screenshot | WebP | — | Downloaded | Public | No |
| `src/assets/images/messaging/conversation-memory.webp` | `/features/messaging-apps` | More / memory | Product screenshot | WebP | — | Reused | Public | No |
| `src/assets/images/messaging/different-formats.webp` | `/features/messaging-apps` | More / formats | Product screenshot | WebP | — | Reused | Public | No |
| `src/assets/images/messaging/*-team-slack.webp` | `/features/messaging-apps` | Roles | Product screenshot | WebP | 1110 | Reused | Public | No |
| `src/assets/images/messaging-apps/app-slack-tile.svg` | `/features/messaging-apps` | Channels | Logo tile | SVG | SVG | Downloaded | Public | No |
| `src/assets/images/messaging-apps/app-telegram-tile.svg` | `/features/messaging-apps` | Channels | Logo tile | SVG | SVG | Downloaded | Public | No |
| `src/assets/images/messaging-apps/app-whatsapp-tile.svg` | `/features/messaging-apps` | Channels | Logo tile | SVG | SVG | Downloaded | Public | No |
| `src/assets/images/messaging-apps/app-teams-tile.svg` | `/features/messaging-apps` | Channels | Logo tile | SVG | SVG | Downloaded | Public | No |
| `src/assets/illustrations/grid-glow-dark-animated.svg` | `/features/messaging-apps` | CTA | Animated SVG | SVG | — | Downloaded | Public | No |
| `src/assets/images/product/badge-{gdpr,aicpa,iso-27001}.svg` | `/features/messaging-apps` | Security | Certification | SVG | 92×132 | Reused | Public | No |

Videos: none on this page.

## Videos

| Reference | Type | Status | Notes |
| --- | --- | --- | --- |
| Homepage `<video>/<source>` | — | None | Empty sources on the live page |
| Agent Builder intro | MP4 | Stored | `Agent-builder_44s_1920x1080.mp4` autoplay/muted/loop |
| Other product/feature pages | — | None | Empty sources or poster-only |

## Not in scope

- Tracking pixels, analytics, ads
- Sign-in / workspace chrome
- Social icons and URLs
- Cookie-banner artwork
- Phone / WhatsApp

## Blog (`/blog`, `/blog/[slug]`)

| Local asset | Article / section | Type | Format | Source role | Downloaded/reused | Permission | Replacement required |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `src/assets/images/blog/featured/best-ai-gateway-featured.webp` | `/blog/best-ai-gateway` listing+detail | Featured | WebP | nordcdn transform `a520d395…/nexos-blog-cover-featured-image-8-968x507` | Downloaded | Public marketing | No |
| `src/assets/images/blog/featured/portkey-alternatives-featured.webp` | `/blog/portkey-alternatives` | Featured | WebP | `5fa5993c…/nexos-blog-featured-image-4-968x507` | Downloaded | Public | No |
| `src/assets/images/blog/featured/claude-alternatives-featured.webp` | Claude + AI governance | Featured | WebP | `591cb23b…/nexos-blog-featured-image-3-968x507` | Downloaded / reused | Public | No |
| `src/assets/images/blog/featured/ai-usage-tracking-featured.webp` | Usage tracking, LinkedIn outreach, credits | Featured | WebP | `6a903a6d…/nexos-blog-cover-featured-image-9-968x507` | Downloaded / reused | Public | No |
| `src/assets/images/blog/featured/litellm-alternatives-featured.webp` | `/blog/litellm-alternatives` | Featured | WebP | `5f5dffd9…/nexos-blog-featured-image-5-968x507` | Downloaded | Public | No |
| `src/assets/images/blog/featured/is-openrouter-safe-featured.webp` | `/blog/is-openrouter-safe` | Featured | WebP | `6196cc6e…/nexos-blog-featured-image-6-968x507` | Downloaded | Public | No |
| `src/assets/images/blog/featured/llm-observability-tools-featured.webp` | Observability, Langdock, Requesty | Featured | WebP | `e9fb232c…/nexos-blog-featured-image-2-968x507` | Downloaded / reused | Public | No |
| `src/assets/images/blog/featured/openclaw-alternatives-featured.webp` | OpenClaw + EU AI Act | Featured | WebP | `4620732f…/nexos-blog-featured-image-7-968x507` | Downloaded / reused | Public | No |
| `src/assets/images/blog/featured/grok-4-benchmarks-featured.webp` | `/blog/grok-4-benchmarks` | Featured | WebP | `9a041351…/nexos-blog-featured-image-1-968x507` | Downloaded | Public | No |
| `src/assets/images/blog/authors/mindaugas-jancis.webp` | Mindaugas Jančis | Author | WebP | transform `63cccc1a…/Mindaugas-Jancis` | Downloaded | Public | No |
| `src/assets/images/blog/authors/eanna-motherway.webp` | Éanna Motherway | Author | WebP | `webimage-Eanna` thumbnail | Downloaded | Public | No |
| `src/assets/images/blog/authors/vytautas-vaitkevicius.webp` | Vytautas Vaitkevičius | Author | WebP | `webimage-Vytautas` thumbnail | Downloaded | Public | No |
| `src/assets/images/blog/authors/nexosai-experts.webp` | nexos.ai experts | Author | WebP | `webimage-nexos-experts.png` | Downloaded | Public | No |
| `src/assets/images/blog/shared/abstract-grid-bg-xl.webp` | Article CTA desktop | Background | WebP | `98249b9b…/abstract-grid-bg-xl` | Downloaded | Public | No |
| `src/assets/images/blog/shared/abstract-grid-bg-xs.webp` | Article CTA mobile | Background | WebP | `5b39906a…/abstract-grid-bg-xs` | Downloaded | Public | No |

Index: `src/assets/blog.ts`. No remote Nexos/nordcdn URLs in production components.

## Customer Stories listing (`/customer-stories`)

Listing-only assets. Payhawk **detail** assets stay in `src/assets/images/customer-stories/payhawk/` and were not modified.

| Local asset | Route | Section | Customer | Type | Format | Dimensions | Original role | Downloaded/reused | Permission | Replacement required |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `src/assets/images/customer-stories/listing/logo-carousel-customer-stories-v3.svg` | `/customer-stories` | Hero logo strip md+ | pigu.lt, NordVPN, payabl., Surfshark, Hostinger | SVG strip | SVG | 1168×64 | `logo-carousel-customer-stories-v3.svg` | Reused (already on disk) | Public marketing | No |
| `src/assets/images/customer-stories/listing/mobile-logo-carousel-customer-stories-v3.svg` | `/customer-stories` | Hero logo strip &lt;md | same | SVG strip | SVG | 640×96 | `mobile-logo-carousel-customer-stories-v3.svg` | Reused | Public | No |
| `src/assets/images/customer-stories/portraits/marijus-briedis-customer-story.webp` | `/customer-stories` | Featured portrait | Marijus Briedis / NordVPN | Portrait | WebP | ~600×750 displayed 256×298 | `marijus-briedis-customer-story` | Reused | Public | No |
| `src/assets/images/customer-stories/logos/nord-security.svg` | `/customer-stories` | Featured + 2 cards | Nord Security | Logo | SVG | 142×64 (featured ~164×74) | `NordSecurity.svg` | Reused | Public | No |
| `src/assets/images/customer-stories/logos/pigu-lt.svg` | `/customer-stories` | Pigu card | Pigu.lt | Logo | SVG | 93×60 | `Pigu-lt.svg` | Reused | Public | No |
| `src/assets/images/customer-stories/logos/payhawk.svg` | `/customer-stories` | Payhawk card | Payhawk | Logo | SVG | 107×58 | `Payhawk.svg` | Reused | Public | No |
| `src/assets/images/customer-stories/logos/oxylabs.svg` | `/customer-stories` | Oxylabs card | Oxylabs | Logo | SVG | 142×64 | `Oxylabs.svg` | Reused | Public | No |
| `src/assets/images/customer-stories/logos/hostinger.svg` | `/customer-stories` | Hostinger card | Hostinger | Logo | SVG | 142×64 | `Hostinger.svg` | Reused | Public | No |
| `src/assets/images/customer-stories/payhawk/banner-gradient-single-blob.svg` | `/customer-stories` | Final CTA desktop | — | Banner | SVG | full tile | `banner-gradient-single-blob.svg` | Reused (Payhawk CTA asset, listing component only) | Public | No |
| `src/assets/images/customer-stories/payhawk/banner-gradient-mask-purple.svg` | `/customer-stories` | Final CTA &lt;sm | — | Banner | SVG | full tile | `banner-gradient-mask-purple.svg` | Reused | Public | No |

Index: `src/assets/customer-stories/listing.ts`. No remote Nexos/nordcdn URLs in production listing components.

## Nord Security customer story (`/customer-stories/nord-security`)

Nord-specific detail assets. Payhawk and listing components were not modified. Banner blobs are reused from the existing Payhawk CTA files.

| Local asset | Route | Section | Type | Format | Dimensions | Original role | Downloaded/reused | Permission | Replacement required |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `src/assets/images/customer-stories/nord-security/nord-security-hero.webp` | `/customer-stories/nord-security` | Hero visual | Product graphic | WebP | ~1110 displayed 329×329 | `hero-nordsecurity-nexos-ai-cost` | Downloaded | Public marketing | No |
| `src/assets/images/blog/authors/vytautas-vaitkevicius.webp` | `/customer-stories/nord-security` | Hero byline | Author | WebP | 40×40 displayed | `Vytautas` | Reused from Blog | Public | No |
| `src/assets/images/customer-stories/nord-security/marijus-briedis-avatar.webp` | `/customer-stories/nord-security` | Quotes | Portrait | WebP | 96 displayed 48×48 | `marijus-breidis-avatar-h48` | Downloaded | Public | No |
| `src/assets/images/customer-stories/nord-security/related-payhawk-hero.webp` | `/customer-stories/nord-security` | Related stories | Thumb | WebP | ~268 | `payhawk-hero` | Downloaded | Public | No |
| `src/assets/images/customer-stories/nord-security/related-hostinger-hero.webp` | `/customer-stories/nord-security` | Related stories | Thumb | WebP | ~268 | `hostinger-hero` | Downloaded | Public | No |
| `src/assets/images/customer-stories/nord-security/related-pigu-hero.webp` | `/customer-stories/nord-security` | Related stories | Thumb | WebP | ~268 | `pigult-hero` | Downloaded | Public | No |
| `src/assets/images/customer-stories/nord-security/related-oxylabs-hero.webp` | `/customer-stories/nord-security` | Related stories | Thumb | WebP | ~268 | `oxylabs-hero` | Downloaded | Public | No |
| `src/assets/images/customer-stories/payhawk/banner-gradient-single-blob.svg` | `/customer-stories/nord-security` | Mid + final CTA | Banner | SVG | — | `banner-gradient-single-blob.svg` | Reused (not Payhawk components) | Public | No |
| `src/assets/images/customer-stories/payhawk/banner-gradient-mask-purple.svg` | `/customer-stories/nord-security` | Final CTA mobile | Banner | SVG | — | `banner-gradient-mask-purple.svg` | Reused | Public | No |

Challenge/process icons are inline SVGs copied from the live story (trend, rotate, wallet, search-chart, circle-1–4, check). No videos on this page.

Index: `src/assets/customer-stories/nord-security.ts`. No remote Nexos/nordcdn URLs in production Nord components.

## CyberCare / Nord Security customer story (`/customer-stories/cybercare-nordsecurity`)

Dark CSAT/support story. Not mixed with `/customer-stories/nord-security/`. Related thumbs reuse existing Nord-detail files.

| Local asset | Route | Section | Company | Type | Format | Dimensions | Original role | Downloaded/reused | Permission | Replacement required |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `src/assets/images/customer-stories/cybercare-nordsecurity/nord-cybercare-nexos-logos.webp` | `/customer-stories/cybercare-nordsecurity` | Hero | Nord / CyberCare / nexos | Logo strip | WebP | 256×25 | `nord-cybercare-nexos-logos` | Downloaded | Public marketing | No |
| `src/assets/images/customer-stories/cybercare-nordsecurity/cybercare-hero-chart.webp` | `/customer-stories/cybercare-nordsecurity` | Hero | CyberCare | Story visual | WebP | ~454 | `CyberCare_nexos-ai_automated_support-2` | Downloaded | Public marketing | No |
| `src/assets/images/customer-stories/cybercare-nordsecurity/nordsec-horizontal-white.webp` | `/customer-stories/cybercare-nordsecurity` | Companies | Nord Security | Logo | WebP | 83×23 | `nordsec-horizontal-white` | Downloaded | Public marketing | No |
| `src/assets/images/customer-stories/cybercare-nordsecurity/cybercare-white.webp` | `/customer-stories/cybercare-nordsecurity` | Companies | CyberCare | Logo | WebP | 59×32 | `cybercare-white` | Downloaded | Public marketing | No |
| `src/assets/images/customer-stories/cybercare-nordsecurity/nexos-ai-logo-white.svg` | `/customer-stories/cybercare-nordsecurity` | Companies | nexos.ai | Logo | SVG | 95×17 | `nexos-ai-logo-white.svg` | Downloaded | Public | No |
| `src/assets/images/customer-stories/cybercare-nordsecurity/karolis-valaika.webp` | `/customer-stories/cybercare-nordsecurity` | Quote | CyberCare | Portrait | WebP | 48 | `Karolis-Valaika` | Downloaded | Public marketing | No |
| `src/assets/images/customer-stories/cybercare-nordsecurity/justas-morkunas.webp` | `/customer-stories/cybercare-nordsecurity` | Quote | nexos.ai | Portrait | WebP | 48 | `Justas-Morkunas-color` | Downloaded | Public marketing | No |
| `src/assets/images/customer-stories/cybercare-nordsecurity/karina-dirvonskiene.webp` | `/customer-stories/cybercare-nordsecurity` | Quote | Nord Security | Portrait | WebP | 48 | `Karina-Dirvonskiene` | Downloaded | Public marketing | No |
| `src/assets/images/customer-stories/cybercare-nordsecurity/tomas-vilcinskas.webp` | `/customer-stories/cybercare-nordsecurity` | Quote | CyberCare | Portrait | WebP | 48 | `Tomas-Vilcinskas` | Downloaded | Public marketing | No |
| `src/assets/images/customer-stories/cybercare-nordsecurity/cybercare-team.webp` | `/customer-stories/cybercare-nordsecurity` | Relies | CyberCare | Photo | WebP | ~568 | `CyberCare_nexosai` | Downloaded | Public marketing | No |
| `src/assets/images/customer-stories/nord-security/related-payhawk-hero.webp` | `/customer-stories/cybercare-nordsecurity` | Related | Payhawk | Thumb | WebP | ~268 | `payhawk-hero` | Reused | Public | No |
| `src/assets/images/customer-stories/nord-security/related-oxylabs-hero.webp` | `/customer-stories/cybercare-nordsecurity` | Related | Oxylabs | Thumb | WebP | ~268 | `oxylabs-hero` | Reused | Public | No |
| `src/assets/images/customer-stories/nord-security/related-hostinger-hero.webp` | `/customer-stories/cybercare-nordsecurity` | Related | Hostinger | Thumb | WebP | ~268 | `hostinger-hero` | Reused | Public | No |
| `src/assets/images/customer-stories/nord-security/nord-security-hero.webp` | `/customer-stories/cybercare-nordsecurity` | Related | Nord Security | Thumb | WebP | ~268 | `hero-nordsecurity-nexos-ai-cost` | Reused | Public | No |

Icons are inline SVGs from the live story (clock, comment, gear, trend, globe, cart, check-circle, arrow, users, trophy, comments, wallet). No videos.

Index: `src/assets/customer-stories/cybercare-nordsecurity.ts`. No remote Nexos/nordcdn URLs in production CyberCare components.

## Pigu.lt customer story (`/customer-stories/pigu-lt`)

Light e-commerce story. Payhawk / Nord 46% / CyberCare components were not modified. Mia byline portrait and related thumbs are reused files.

| Local asset | Route | Section | Company/customer | Type | Format | Dimensions | Original role | Downloaded/reused | Permission | Replacement required |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `src/assets/images/customer-stories/pigu-lt/pigu-lt-hero.webp` | `/customer-stories/pigu-lt` | Hero | Pigu.lt | Story visual | WebP | 736×736 displayed ~427 | `pigult-hero` | Downloaded | Public marketing | No |
| `src/assets/images/customer-stories/payhawk/mia-lysikova.webp` | `/customer-stories/pigu-lt` | Hero byline | Mia Lysikova | Portrait | WebP | 40×40 displayed | `Mia-Lysikova` | Reused (Payhawk file, Pigu component) | Public | No |
| `src/assets/images/customer-stories/pigu-lt/pigu-lt-about.webp` | `/customer-stories/pigu-lt` | Meet | Pigu.lt | Story image | WebP | 1110×832 displayed ~568×426 | `pigu-about` | Downloaded | Public marketing | No |
| `src/assets/images/customer-stories/pigu-lt/pigu-lt-people-working.webp` | `/customer-stories/pigu-lt` | Before | Pigu.lt | Photo | WebP | 736×864 displayed ~368×432 | `people-working` | Downloaded | Public marketing | No |
| `src/assets/images/customer-stories/pigu-lt/pigu-lt-quote-logo.svg` | `/customer-stories/pigu-lt` | Quote | Pigu.lt | Logo | SVG | 81×24 displayed 115×34 | live quote wordmark | Extracted | Public | No |
| `src/assets/images/customer-stories/pigu-lt/vytautas-romeika.webp` | `/customer-stories/pigu-lt` | Quote | Vytautas Romeika | Portrait | WebP | 660×680 displayed 331×218 | `vytautas-romeika` | Downloaded | Public marketing | No |
| `src/assets/images/customer-stories/pigu-lt/pigu-lt-description-enhance.webp` | `/customer-stories/pigu-lt` | Cost reduction | nexos product visual | Product screenshot | WebP | 1010×564 | `description-enhance` | Downloaded | Public marketing | No |
| `src/assets/images/customer-stories/pigu-lt/pigu-lt-image-filtering.webp` | `/customer-stories/pigu-lt` | Image filtering | nexos product visual | Product screenshot | WebP | 1010×548 | `image-filtering` | Downloaded | Public marketing | No |
| `src/assets/images/customer-stories/pigu-lt/pigu-lt-product-translation.webp` | `/customer-stories/pigu-lt` | Translation | nexos product visual | Product screenshot | WebP | 880×548 | `product-translation` | Downloaded | Public marketing | No |
| `src/assets/images/customer-stories/pigu-lt/pigu-lt-gradient-light.webp` | `/customer-stories/pigu-lt` | With nexos.ai | — | Background | WebP | 2800×992 | `top-gradient-light-bg-xl` | Downloaded | Public | No |
| `src/assets/images/customer-stories/pigu-lt/pigu-lt-gradient-dark.webp` | `/customer-stories/pigu-lt` | Future | — | Background | WebP | 2768×1114 | `top-gradient-dark-bg-xl` | Downloaded | Public | No |
| `src/assets/images/customer-stories/pigu-lt/pigu-lt-cta-banner.webp` | `/customer-stories/pigu-lt` | Final CTA | — | Banner | WebP | 2336×640 | `banner-dark-bg-sphere-gradient` | Downloaded | Public | No |
| `src/assets/images/customer-stories/pigu-lt/pigu-lt-cta-banner-xs.webp` | `/customer-stories/pigu-lt` | Final CTA &lt;sm | — | Banner | WebP | 576×639 | `banner-dark-bg-sphere-gradient-xs` | Downloaded | Public | No |
| `src/assets/images/customer-stories/pigu-lt/pigu-lt-video-poster.jpg` | `/customer-stories/pigu-lt` | Video | Pigu.lt | Poster | JPG | 800×450 | `NEXOS_Pigu_Long_subs_1920x1080.jpg` | Downloaded | Public | No |
| `public/videos/customer-stories/pigu-lt/pigu-lt-testimonial.mp4` | `/customer-stories/pigu-lt` | Video | Pigu.lt | Video | MP4 | 1920×1080 | `NEXOS_Pigu_Long_subs_1920x1080.mp4` | Downloaded | Public marketing | No |
| `src/assets/videos/customer-stories/pigu-lt/pigu-lt-testimonial.mp4` | `/customer-stories/pigu-lt` | Video archive | Pigu.lt | Video | MP4 | 1920×1080 | same | Duplicate of public file | Public | No |
| `src/assets/images/customer-stories/nord-security/related-payhawk-hero.webp` | `/customer-stories/pigu-lt` | Related | Payhawk | Thumb | WebP | ~368×96 crop | `payhawk-hero` | Reused | Public | No |
| `src/assets/images/customer-stories/nord-security/related-oxylabs-hero.webp` | `/customer-stories/pigu-lt` | Related | Oxylabs | Thumb | WebP | ~368×96 crop | `oxylabs-hero` | Reused | Public | No |
| `src/assets/images/customer-stories/nord-security/related-hostinger-hero.webp` | `/customer-stories/pigu-lt` | Related | Hostinger | Thumb | WebP | ~368×96 crop | `hostinger-hero` | Reused | Public | No |

Icons are inline SVGs from the live story (cart, gear, trend-down, sparkles, image, language, barcode-scan, search-dollar). Quote wordmark is SVG. No production nordcdn hotlinking.

Index: `src/assets/customer-stories/pigu-lt.ts`.

## Oxylabs customer story (`/customer-stories/oxylabs`)

Light editorial story. Payhawk / Nord 46% / CyberCare / Pigu.lt components were not modified. Mia byline portrait and final-CTA banner SVGs are reused files.

| Local asset | Route | Section | Company/customer | Type | Format | Dimensions | Original role | Downloaded/reused | Permission | Replacement required |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `src/assets/images/customer-stories/oxylabs/oxylabs-customer-story-hero.webp` | `/customer-stories/oxylabs` | Hero | Oxylabs | Story visual | WebP | 736×736 displayed ~325 | `oxylabs-hero` | Downloaded | Public marketing | No |
| `src/assets/images/customer-stories/payhawk/mia-lysikova.webp` | `/customer-stories/oxylabs` | Hero byline | Mia Lysikova | Portrait | WebP | 40×40 displayed | `Mia-Lysikova` | Reused (Payhawk file, Oxylabs component) | Public | No |
| `src/assets/images/customer-stories/oxylabs/oxylabs-customer-portrait.webp` | `/customer-stories/oxylabs` | Quotes | Juras Juršėnas | Portrait | WebP | 1110×1110 displayed 54×54 | `Justas` | Downloaded | Public marketing | No |
| `src/assets/images/customer-stories/oxylabs/oxylabs-compare-models.webp` | `/customer-stories/oxylabs` | Model-agnostic | nexos product visual | Product screenshot | WebP | 1136×796 displayed max 568 | `ai-workspace-compare-models-4x3` | Downloaded | Public marketing | No |
| `src/assets/images/customer-stories/oxylabs/oxylabs-team-cost-control.webp` | `/customer-stories/oxylabs` | Observability | nexos product visual | Product screenshot | WebP | 1110×832 displayed max 555 | `team-cost-control-4x3` | Downloaded | Public marketing | No |
| `src/assets/images/customer-stories/oxylabs/oxylabs-workspace-metrics.webp` | `/customer-stories/oxylabs` | AI Gateway md+ | nexos product visual | Product screenshot | WebP | 2336×760 | `workspace-metrics-observability` | Downloaded | Public marketing | No |
| `src/assets/images/customer-stories/oxylabs/oxylabs-workspace-metrics-xs.webp` | `/customer-stories/oxylabs` | AI Gateway &lt;md | nexos product visual | Product screenshot | WebP | 576×488 | `workspace-metrics-observability-xs` | Downloaded | Public marketing | No |
| `src/assets/images/customer-stories/oxylabs/oxylabs-mid-cta-gradient.svg` | `/customer-stories/oxylabs` | Mid CTA | — | Banner | SVG | 1440×400 | `animated-gradient-single.svg` | Downloaded | Public | No |
| `src/assets/images/customer-stories/payhawk/banner-gradient-single-blob.svg` | `/customer-stories/oxylabs` | Final CTA desktop | — | Banner | SVG | — | `banner-gradient-single-blob.svg` | Reused | Public | No |
| `src/assets/images/customer-stories/payhawk/banner-gradient-mask-purple.svg` | `/customer-stories/oxylabs` | Final CTA &lt;sm | — | Banner | SVG | — | `banner-gradient-mask-purple.svg` | Reused | Public | No |

Numbered challenge icons are inline SVGs (circle-1/2/3). No videos. No production nordcdn hotlinking.

Index: `src/assets/customer-stories/oxylabs.ts`.

## Hostinger customer story (`/customer-stories/hostinger`)

Light editorial story. Oxylabs / Payhawk / Nord / CyberCare / Pigu components were not modified. Identical CDN rasters/SVGs are reused by file path.

| Local asset | Route | Section | Company/customer | Type | Format | Dimensions | Original role | Downloaded/reused | Permission | Replacement required |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `src/assets/images/customer-stories/hostinger/hostinger-customer-story-hero.webp` | `/customer-stories/hostinger` | Hero | Hostinger | Story visual | WebP | 736×736 displayed ~325 | `hostinger-hero` | Downloaded | Public marketing | No |
| `src/assets/images/customer-stories/payhawk/mia-lysikova.webp` | `/customer-stories/hostinger` | Hero byline | Mia Lysikova | Portrait | WebP | 40×40 displayed | `Mia-Lysikova` | Reused | Public | No |
| `src/assets/images/customer-stories/hostinger/hostinger-customer-portrait.webp` | `/customer-stories/hostinger` | Quotes | Dainius Kavoliūnas | Portrait | WebP | 80×80 displayed 54×54 | `Dainius-Kavoliu-nas` | Downloaded | Public marketing | No |
| `src/assets/images/customer-stories/oxylabs/oxylabs-workspace-metrics.webp` | `/customer-stories/hostinger` | AI gateway md+ | nexos product visual | Product screenshot | WebP | 2336×760 | `workspace-metrics-observability` | Reused (identical Oxylabs file) | Public | No |
| `src/assets/images/customer-stories/oxylabs/oxylabs-workspace-metrics-xs.webp` | `/customer-stories/hostinger` | AI gateway &lt;md | nexos product visual | Product screenshot | WebP | 576×488 | `workspace-metrics-observability-xs` | Reused | Public | No |
| `src/assets/images/customer-stories/hostinger/hostinger-log-spans.webp` | `/customer-stories/hostinger` | Enterprise scaling | nexos product visual | Product screenshot | WebP | 1110×1110 displayed max 555 | `metric-and-log-spans-details` | Downloaded | Public marketing | No |
| `src/assets/images/customer-stories/hostinger/hostinger-fallback-model.webp` | `/customer-stories/hostinger` | Fallback | nexos product visual | Product screenshot | WebP | 1110×1110 displayed max 555 | `fallback-model` | Downloaded | Public marketing | No |
| `src/assets/images/customer-stories/oxylabs/oxylabs-mid-cta-gradient.svg` | `/customer-stories/hostinger` | Mid CTA | — | Banner | SVG | 1440×400 | `animated-gradient-single.svg` | Reused | Public | No |
| `src/assets/images/customer-stories/payhawk/banner-gradient-single-blob.svg` | `/customer-stories/hostinger` | Final CTA desktop | — | Banner | SVG | — | `banner-gradient-single-blob.svg` | Reused | Public | No |
| `src/assets/images/customer-stories/payhawk/banner-gradient-mask-purple.svg` | `/customer-stories/hostinger` | Final CTA &lt;sm | — | Banner | SVG | — | `banner-gradient-mask-purple.svg` | Reused | Public | No |

Numbered challenge icons are inline SVGs (circle-1–4). Disc bullets are CSS. No videos. No production nordcdn hotlinking.

Index: `src/assets/customer-stories/hostinger.ts`.

## Partnerships (`/partnerships`)

Marketing landing page. Customer-story and homepage components were not modified. Grid illustration is reused; banner glows are Partnerships-specific (different dimensions from Integrations `banner-light-glow.webp`).

| Local asset | Route | Section | Type | Format | Dimensions | Original role | Downloaded/reused | Permission | Replacement required |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `src/assets/images/partnerships/partnerships-hero.webp` | `/partnerships` | Hero | Story visual | WebP | 1110×1110 displayed max 555 | `partners_program_hero` | Downloaded | Public marketing | No |
| `src/assets/illustrations/grid-centered-secondary-center.svg` | `/partnerships` | Hero grid md+ | Illustration | SVG | 1400×1200 | `grid-centered-secondary-center` | Reused | Public | No |
| `src/assets/images/partnerships/integrate-with-nexos.webp` | `/partnerships` | How we work | Product visual | WebP | 1110×1110 | `integrate-with-nexos` | Downloaded | Public marketing | No |
| `src/assets/images/partnerships/expand-your-product-capabilities.webp` | `/partnerships` | How we work | Product visual | WebP | 1110×1110 | `expand-your-product-capabilities` | Downloaded | Public marketing | No |
| `src/assets/images/partnerships/co-create-custom-ai-solutions.webp` | `/partnerships` | How we work | Product visual | WebP | 1110×1110 | `co-create-custom-AI-solutions` | Downloaded | Public marketing | No |
| `src/assets/images/partnerships/banner-light-glow-lg.webp` | `/partnerships` | Form ≥992 | Banner | WebP | 1920×992 | `banner-light-glow-lg` | Downloaded | Public marketing | No |
| `src/assets/images/partnerships/banner-light-glow-md.webp` | `/partnerships` | Form 768–991 | Banner | WebP | 1472×992 | `banner-light-glow-md` | Downloaded | Public marketing | No |
| `src/assets/images/partnerships/banner-light-glow-xs.webp` | `/partnerships` | Form &lt;768 | Banner | WebP | 576×992 | `banner-light-glow-xs` | Downloaded | Public marketing | No |

Program and benefit icons are inline SVGs from the live page (screens, messages, handshake, sparkles, trophy, users, megaphone). No videos. No production nordcdn hotlinking.

Index: `src/assets/partnerships.ts`.

## Models (`/models/`)

Public catalogue page. **No raster/SVG provider logos** on the live table (provider is text). Capability and region treatment is CSS chips. No videos. No production nexos.ai hotlinking.

| Local asset | Route | Role | Provider | Type | Format | Dimensions | Source | Permission | Replacement required |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `src/components/models/ModelsIcons.tsx` (`ModelsSearchIcon`) | `/models/` | Search field glyph | — | Icon | Inline SVG | 16×16 | Live FA magnifying-glass path | Public marketing | No |
| `src/components/models/ModelsIcons.tsx` (`ModelsArrowIcon`) | `/models/` | Hero Talk to Solutions Engineer trailing arrow | — | Icon | Inline SVG | 24×24 | Live FA arrow path | Public marketing | No |
| Header `src/assets/logos/brand-mark.svg` | `/models/` | Chrome wordmark | Brand | Logo | SVG | existing | Reused | Local identity | No (Nexos wordmark excluded) |

Capability chips (Vision, Tools, Cache, Think, Web, JSON) and region badges (EU / US / Other) are CSS-only — no icon files.

Index: `src/data/models.ts`.

## Pricing (`/pricing/`)

Public dual-product pricing page (Gateway + Workspace). No Stripe assets. No checkout redesign. No production nordcdn hotlinking.

| Local asset | Route | Section | Type | Format | Dimensions | Original role | Downloaded/reused | Permission | Replacement required |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `src/assets/images/pricing/pricing-model-icons-2.webp` | `/pricing/` | Workspace hero | Image | WebP | 896×224 | Model logo strip md+ | Downloaded | Public marketing | No |
| `src/assets/images/pricing/pricing-model-icons.webp` | `/pricing/` | Workspace hero | Image | WebP | 896×224 | Model logo strip mobile | Downloaded | Public marketing | No |
| `src/assets/images/pricing/table-model-icons-2.webp` | `/pricing/` | Tool compare | Image | WebP | sprite | Row “top AI models” glyphs | Downloaded | Public marketing | No |
| `src/assets/images/pricing/pricing-table-tools-icons.webp` | `/pricing/` | Tool compare | Image | WebP | sprite | Row “work tools” glyphs | Downloaded | Public marketing | No |
| `src/assets/images/ai-integrations/banner-light-glow.webp` | `/pricing/` | Credits banner | Image | WebP | existing | Banner glow | Reused | Public marketing | No |
| `src/assets/logos/integrations-carousel.svg` | `/pricing/` | Integrations | SVG | SVG | existing | Integration chips | Reused | Public marketing | No |
| `src/assets/logos/customer-stories.svg` | `/pricing/` | Testimonials | SVG | SVG | existing | Customer logo strip | Reused | Public marketing | No |
| `src/assets/images/product/badge-*.svg` (GDPR, AICPA, ISO 27001) | `/pricing/` | Security | SVG | SVG | 92×132 | Compliance badges | Reused | Public marketing | No |
| `src/assets/images/home/testimonial-*.webp` | `/pricing/` | Testimonials | Image | WebP | 96×96 | Portraits | Reused | Public marketing | No |
| `src/assets/illustrations/grid-glow-bottom-dark.svg` | `/pricing/` | Workspace CTA | Illustration | SVG | existing | Dark CTA grid | Reused | Public marketing | No |
| `src/components/pricing/PricingIcons.tsx` | `/pricing/` | Cards / tables | Icon | Inline SVG | FA paths | Feature, check, X, payments | Live paths | Public marketing | No |

Index: `src/assets/pricing.ts`.

## Counts

| | Discovered | Stored locally |
| --- | --- | --- |
| Homepage product / cost / badge / portrait stills | ~28 distinct | 21 WebP |
| Trusted-by logo strips | 2 | 2 SVG |
| Integration chip SVGs | 34 | 34 SVG |
| Hero badge glyphs | 4 | 3 SVG + 1 path icon |
| Playable videos | 0 | 0 |
| Phase 5 stills / diagrams | ~50 | Stored locally (see Phase 5 tables) |
| Nexos identity | 3+ | 0 (intentionally omitted) |

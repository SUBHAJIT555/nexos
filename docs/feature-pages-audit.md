# Feature pages audit (Phase 5)

Audited 2026-09-15 from the live public site. Inner pages use light chrome (white header). Auth, social, and phone content are excluded. Auth CTAs map to `/pricing` or `/contact-sales`.

## Shared

- Header/footer from Phase 1–2. Products mega-menu slugs match live:
  - `/features/ai-integrations`
  - `/features/messaging-apps`
  - `/features/browser-extension`
  - `/features/deep-research`
  - `/features/llm-caching`
  - `/features/smart-llm-routing`
  - `/features/llm-observability`
  - `/eu-gateway`
- Reused: `ProductHero`, `ProductFaq`, `ProductCta`, `ProductSecurity`, `InfoDialog`, `IntegrationIcon`, `TrustMarquee`.
- Live `<video>` sources on these routes were empty (posters only). No playable files stored.
- No production `nexos.ai` / `nordcdn.com` / Storyblok hotlinking in `src/`.
- AI Governance (`/features/ai-governance`) appears in the footer Company list only. Not a Phase 5 feature/infrastructure page. Left unimplemented.

---

## Route: Integrations

Reference URL: https://nexos.ai/features/ai-integrations/  
Local URL: `/features/ai-integrations`

### Section order

1. Hero (H1, body, Get nexos.ai, AI Workspace, product visual)
2. Your most-used apps already in AI Workspace (logo strip)
3. Why integrate your work tools with AI? (3 cards)
4. How do AI Integrations work? (4 steps + screenshots)
5. All integrations (search + 4-col grid + pagination)
6. Your data is always secure (trust extra card)
7. Bring your tools directly into AI Workspace

### Content structure

Verbatim live copy. Catalog: 23 apps. Google Big Query and Salesforce marked Coming soon. Search filters by name/description. Page size 20.

### Assets

`src/assets/images/integrations/*` (6 WebP). Catalog logos from `IntegrationIcon` + `work-app-extras.ts`. How-it-works step icons: Lucide (generic UI).

### Interactive elements

Search input (resets page). Pagination previous/next + page numbers. Card hover border/shadow.

### Animation

CSS hover. No pin/scrub.

### Desktop / tablet / mobile

1440: 4-col catalog. 1024: 2-col. 768: 2-col why cards. 390: stacked cards, search full width.

---

## Route: Messaging Apps

Reference URL: https://nexos.ai/features/messaging-apps/  
Local URL: `/features/messaging-apps`

### Section order

1. Hero + Slack/mobile visual
2. More than a chat bot (4 cards)
3. Built for every team, every role (tabs)
4. Tired of AI that only talks? (compare table)
5. One nexos.ai. One context across messaging apps. (Slack, Telegram, Microsoft Teams)
6. Get it up and running in under a minute
7. Your data is always secure
8. Bring nexos.ai into every conversation

### Content structure

WhatsApp card, WhatsApp mentions, and WhatsApp as a supported app are **excluded**. Remaining copy uses Slack, Telegram, and Microsoft Teams. Hero: “Slack, Telegram or Microsoft Teams”.

### Assets

`src/assets/images/messaging/*` (10 WebP). Channel logos via `IntegrationIcon`.

### Interactive elements

Role tabs (Sales, Marketing, HR, Operations, Your role) with Motion crossfade. Reduced motion: no y-shift.

### Animation

Motion tab panel fade. No GSAP pin.

### Responsive

Desktop two-col role panel. Tablet/mobile: tabs wrap; table scrolls horizontally.

---

## Route: Browser Extension

Reference URL: https://nexos.ai/features/browser-extension/  
Local URL: `/features/browser-extension`

### Section order

1. Hero + extension popup screenshot
2. What is the nexos.ai browser extension?
3. Key benefits (models + assistants screenshots)
4. How does nexos.ai browser extension work (walkthrough poster + 3 steps)
5. How teams use nexos.ai browser extension (carousel)
6. Make AI work where you work
7. FAQ

### Content structure

Install CTA is Chrome Web Store (allowed). Step 02 rebalanced from sign-in copy to “Pin the extension for easy access.” FAQ CSS leak `.strip-child-styles` stripped. Live video source empty — poster only.

### Assets

`src/assets/images/extension/*` (4 WebP). Browser chrome is a screenshot, not HTML.

### Interactive elements

Carousel prev/next. Chrome Web Store links open externally.

### Animation

Motion slide on carousel. Reduced motion: fade only.

### Responsive

Benefits 2-col from 768. Steps 3-col from 768. 390 stacked.

---

## Route: Deep Research

Reference URL: https://nexos.ai/features/deep-research/  
Local URL: `/features/deep-research`

### Section order

1. Hero + “What is Deep Research?” dialog
2. The depth of a human analyst (3 cards)
3. How does Deep Research work (5 steps)
4. How teams use Deep Research (tabs)
5. Deep Research vs. other providers (table)
6. Cut hours of manual research…
7. FAQ

### Assets

`src/assets/images/deep-research/*` (8 WebP). Workflow is cards + copy, not a sequential GSAP timeline (live uses static cards, not a pinned scrub).

### Interactive elements

InfoDialog. Team tabs with Motion.

### Animation

Tab crossfade. No pin.

### Responsive

5-step row from xl; 2-col from sm; stacked on 390. Compare table min-width 720, horizontal scroll.

---

## Route: LLM Caching

Reference URL: https://nexos.ai/features/llm-caching/  
Local URL: `/features/llm-caching`

### Section order

1. Hero + animated cache diagram SVG + trust marquee
2. What is LLM caching? + contexts
3. Benefits of LLM caching (4 cards)
4. How nexos.ai improves LLM caching
5. Two ways nexos.ai makes caching work
6. The complexity of LLM caching
7. How nexos.ai tackles these challenges
8. Real-world results (case study CTA → `/customer-stories`)
9. Stop paying twice for the same context
10. FAQ

### Assets

`src/assets/images/caching/llm-caching-hero.svg` (CSS keyframes inside SVG) + 4 WebP benefit stills.

### Animation

Hero SVG self-animates (request → cache → response). Reduced-motion: page CSS shortens animations; SVG-as-`<img>` keyframes may still run inside the file.

### Responsive

Benefit grid 2×2 from sm. Complexity 4-col from lg.

---

## Route: Smart LLM Routing

Reference URL: https://nexos.ai/features/smart-llm-routing/  
Local URL: `/features/smart-llm-routing`

### Section order

1. Hero + animated routing SVG + “What is LLM routing?” + trust marquee
2. Benefits (4 cards with routing stills)
3. Smart routing is more than choosing the cheapest model (84% stat)
4. How does nexos.ai Smart LLM routing work (code/setup still)
5. Use cases (4 cards)
6. Security and compliance, built in
7. Smart LLM routing vs one default model
8. Cut your AI costs with Smart LLM routing
9. FAQ

### Assets

`src/assets/images/routing/smart-llm-routing-hero.svg` + 5 WebP stills. Trusted-by reuses homepage strips.

### Animation

Hero SVG path-trim loop. InfoDialog. No ScrollTrigger pin on this route (live does not pin the diagram).

### Responsive

Benefit 2-col from sm. Compare table horizontal scroll under 640.

---

## Route: Observability

Reference URL: https://nexos.ai/features/llm-observability/  
Local URL: `/features/llm-observability`

### Section order

1. Hero + “What is LLM observability?”
2. One place to see and control AI usage (accordion tabs + chart stills)
3. Explore the platform (marketing screenshots; not a functional dashboard)
4. Observe and manage LLM requests (Usage / Performance / Costs / Logs stills)
5. Business benefits of AI observability
6. What happens without full AI observability
7. From “we use AI” to “we know exactly how”
8. FAQ

### Assets

`src/assets/images/observability/*` (14 WebP). Hero stored from the live mobile crop (`Observability-hero-mobile`); desktop live crop was not present in the inspected viewport.

Explore screenshots are marketing stills. Nested Profile / Usage / Audit log / Devices chrome is **not** implemented as an app.

### Interactive elements

Control accordion tabs swap chart stills. Explore tabs swap screenshots. Policy / Reports BETA / Model spend Coming soon are disabled labels.

### Animation

Tab state swap. Reduced motion: instant.

### Responsive

Control layout 2-col from lg. Charts 2-col from md. Explore tabs wrap.

---

## Route: EU Data Residency

Reference URL: https://nexos.ai/eu-gateway/  
Local URL: `/eu-gateway`

### Section order

1. Hero (badge, H1, body, Talk to Solutions Engineer / Get API Key, full-width routing SVG)
2. Everything compliance needs, everything developers want
3. Migrate to EU infrastructure with one line of code (code SVG)
4. Why organizations are choosing EU-hosted AI infrastructure
5. Every frontier model, fully EU-resident (model strip still)
6. nexos.ai vs going direct (checkmarks where live uses SVG ticks)
7. Compliance-ready, without compromise
8. FAQ

### Assets

`src/assets/images/eu/*` (4 SVG + 1 WebP). Nexos wordmark not stored.

### Animation

Hero SVG path animation (same img caveat as caching/routing). No pin.

### Responsive

Needs 4-col from lg, 2-col from sm. Why cards 2-col from md. Hero uses `xs` SVG below 768, `xl` from md.

---

## Remaining visual differences

- Live hero SVG animations inside `<img>` files may ignore `prefers-reduced-motion`.
- Observability desktop hero crop was not captured separately from the mobile asset.
- Explore-the-platform nested console chrome (Profile / Usage / Audit log) is screenshot-only.
- Messaging WhatsApp column omitted by requirement.
- Extension walkthrough is a still (live `<video>` had no source).
- Compare tables use HTML tables; live may use CSS grids with slightly different cell padding.
- EU “OpenAI compatible” direct-provider cell had no live text; shown as an em dash.

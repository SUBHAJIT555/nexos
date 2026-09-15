# Product pages audit (Phase 4)

Audited 2026-09-15 from the live public site. Inner pages use light chrome (white header). Auth, social, and phone content are excluded.

## Shared

- Header/footer from Phase 1–2. Product CTAs that originally go to auth use `/pricing` or `/contact-sales`.
- Product UI is original CSS/SVG stand-ins, not Nord CDN screenshots.
- Live `<video>` sources on these routes were empty; no playable files stored.
- No production `nexos.ai` / `nordcdn.com` hotlinking.

---

## Route: AI Workspace

Reference URL: https://nexos.ai/ai-workspace-for-multiple-llms/  
Local URL: `/ai-workspace-for-multiple-llms`

### Section order

1. Hero (H1, body, 3 checks, Get nexos.ai, product visual, Trusted by)
2. Keep your team’s AI work in one place
3. One Chat for every task (accordion, first open, Explore Chat)
4. Make AI Agents work your way (2 cards)
5. AI agents for any task you can describe (search + 7 category tabs + cards + CTA)
6. How the nexos.ai Workspace works for your team (carousel)
7. Your data is always secure
8. Bring your knowledge with you
9. Ready to replace scattered AI tools with one workspace?
10. FAQs

### Content

Verbatim live copy. Hero break after “AI Workspace:”. FAQ heading is **FAQs**.

### Assets

Workspace hero screenshot replaced with `ChatHeroVisual`. Customer logos replaced with geometric marquee. Integration brand PNGs replaced with letter marks.

### Layout

Desktop two-column hero (copy left, visual right). Gallery 1 / 2 / 3 columns.

### Animation

Accordion (Motion). Gallery tab filter. Quote carousel prev/next. Marquee CSS.

### Responsive

Gallery tabs horizontal scroll. Cards stack at 375–430. Two columns from 768.

---

## Route: AI Gateway

Reference URL: https://nexos.ai/ai-gateway/  
Local URL: `/ai-gateway`

### Section order

1. Hero + What is an AI Gateway? dialog + Talk to Solutions Engineer / Get API Key
2. How does the nexos.ai Gateway work + stats marquee
3. One unified Gateway for every AI application
4. See what your data is really telling you
5. LLM integration pain points
6. Why your business needs an AI Gateway
7. What leading teams say about nexos.ai
8. With nexos.ai your data is always secure
9. All your AI. One secure Gateway.
10. FAQ (About AI Gateway / nexos.ai Gateway tabs)

### Assets

Gateway model table visual (`GatewayHeroVisual`). Observability mock reused from homepage stand-in.

### Animation

Stats marquee CSS. FAQ tabs. Info dialog.

---

## Route: AI Agents

Reference URL: https://nexos.ai/features/ai-agents/  
Local URL: `/features/ai-agents`

### Section order

1. Hero (bullets, guarantee, What are AI Agents?)
2. Built for productivity, scaled for teams
3. Bring your work knowledge with you
4. No-code Agent for every task (4 categories)
5. Your data is always secure (+ Trust Center card)
6. See what teams achieve with nexos.ai
7. Let the boring work run itself
8. FAQ

### Interactive

Category tabs, search filter, info dialog.

---

## Route: Agent Builder

Reference URL: https://nexos.ai/ai-agent-builder/  
Local URL: `/ai-agent-builder`

### Section order

1. Hero
2. Feature cards (no-code, integrations, templates, models, scheduling, HITL, security)
3. Your to-do list just got a new hire + template gallery
4. How to build AI Agents with nexos.ai? (6 steps)
5. Try Agent Builder (Buy nexos.ai → `/pricing`)
6. FAQ

Marketing builder visual only. No production builder platform.

---

## Route: Chat

Reference URL: https://nexos.ai/features/ai-chat/  
Local URL: `/features/ai-chat`

### Section order

1. Hero
2. The world’s top AI models, one powerful Chat
3. What’s inside Chat (accordion, first open)
4. Bring your knowledge with you
5. Start with a prompt. Leave with the result. (template gallery)
6. How teams use nexos.ai
7. Compare Models teaser
8. Your data is always secure
9. One AI Chat you’ll ever need for work
10. FAQ

Marketing chat visual. No authenticated chat, history, or inference.

---

## Route: Compare Models

Reference URL: https://nexos.ai/features/compare-ai-models/  
Local URL: `/features/compare-ai-models`

### Section order

1. Hero + 3 bullets + Get nexos.ai
2. How enterprise teams use Compare Models + Watch platform tour dialog
3. How to use Compare Models (3 steps + frontend model/prompt preview)
4. Experiment with AI for any team and department
5. Experiment with AI models securely / Buy nexos.ai
6. FAQ

Live public page uses a static compare screenshot, not a live API. Local preview lets users pick canned models/outputs only.

### Interactive

Model chips (minimum two selected), prompt textarea, side-by-side canned columns, tour dialog.

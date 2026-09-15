# Blog listing + 15 static articles

- Reference URL: https://nexos.ai/blog/
- Local URL: http://localhost:3000/blog
- Detail pattern: http://localhost:3000/blog/[slug]
- Screenshots: none were attached. Visual source is the live listing (desktop + mobile) and live article pages for the 15 selected posts.

## Screenshot map

No user screenshots were supplied. Live listing sections used instead:

| Live section | Local |
| --- | --- |
| Header (light chrome) | Shared Header — unchanged |
| Featured / hero article (`#hero-article`) | `FeaturedArticle` |
| Recent articles (`#recent-articles`) 3-col cards | `BlogGrid` / `BlogCard` |
| Pagination (`#pagination`) | `BlogPagination` (2 pages for 15 posts) |
| Footer | Shared Footer — unchanged |
| No listing search, filters, or final CTA | Omitted (not on live listing) |

Detail pages map: breadcrumb → H1 → intro → featured image → author/date/read → TOC → body → FAQ → author bio → Trending Articles → CTA.

## Listing inventory

- No standalone “Blog” H1. The featured article title is the page H1 (`heading-xl`).
- Featured: 12-col grid, copy `lg:col-span-4`, image `lg:col-span-8`, image `rounded-lg` object-cover.
- Recent articles: `lg:grid-cols-3 md:grid-cols-2`, image `rounded-lg md:aspect-[23/12] md:object-cover`, date `body-xs` + book icon + read time, title `heading-sm`.
- No category chips, search, or filters.
- Pagination: 32px pills, current `bg-accent`, others `bg-secondary`. Live has 14 pages; local shows 2 pages for the 15-post dataset (no empty pages 3–14).
- Hover: title `hover:text-neutral-800`; featured link stretches with `after:inset-0`. No image zoom.
- Listing has no product CTA before footer.

## Selected 15 articles

| # | Title | Slug | Author | Listing date | Listing read | Featured image | Source |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | Best AI Gateway in 2026: Top 6 platforms compared | `best-ai-gateway` | Mindaugas Jančis | 7/9/2026 | 17 min read | `best-ai-gateway-featured.webp` | https://nexos.ai/blog/best-ai-gateway/ |
| 2 | Best Portkey alternatives for AI teams in 2026 | `portkey-alternatives` | Éanna Motherway | 9/14/2026 | 16 min read | `portkey-alternatives-featured.webp` | https://nexos.ai/blog/portkey-alternatives/ |
| 3 | Best Claude alternatives in 2026: Chat, code, and agent tools | `claude-alternatives` | nexos.ai experts | 9/10/2026 | 29 min read | `claude-alternatives-featured.webp` | https://nexos.ai/blog/claude-alternatives/ |
| 4 | AI usage tracking: How to monitor tokens, costs, and governance | `ai-usage-tracking` | nexos.ai experts | 9/8/2026 | 13 min read | `ai-usage-tracking-featured.webp` | https://nexos.ai/blog/ai-usage-tracking/ |
| 5 | Best LiteLLM alternatives in 2026 | `litellm-alternatives` | Éanna Motherway | 9/3/2026 | 19 min read | `litellm-alternatives-featured.webp` | https://nexos.ai/blog/litellm-alternatives/ |
| 6 | Is OpenRouter safe? What you need to know before using it in 2026 | `is-openrouter-safe` | nexos.ai experts | 9/2/2026 | 11 min read | `is-openrouter-safe-featured.webp` | https://nexos.ai/blog/is-openrouter-safe/ |
| 7 | 10 best LLM observability tools to monitor and evaluate (2026) | `llm-observability-tools` | nexos.ai experts | 8/31/2026 | 24 min read | `llm-observability-tools-featured.webp` | https://nexos.ai/blog/llm-observability-tools/ |
| 8 | Best OpenClaw alternatives for small businesses and teams | `openclaw-alternatives` | Mindaugas Jančis | 8/27/2026 | 17 min read | `openclaw-alternatives-featured.webp` | https://nexos.ai/blog/openclaw-alternatives/ |
| 9 | Grok 4 benchmarks: performance analysis & comparison | `grok-4-benchmarks` | Éanna Motherway | 8/18/2026 | 21 min read | `grok-4-benchmarks-featured.webp` | https://nexos.ai/blog/grok-4-benchmarks/ |
| 10 | How to automate LinkedIn outreach with AI agents in 2026 | `how-to-automate-linkedin-outreach` | Éanna Motherway | 8/24/2026 | 6 min read | reused usage-tracking still | https://nexos.ai/blog/how-to-automate-linkedin-outreach/ |
| 11 | Best Langdock alternatives for enterprise AI in 2026 | `langdock-alternatives` | Vytautas Vaitkevičius | 8/17/2026 | 13 min read | reused observability still | https://nexos.ai/blog/langdock-alternatives/ |
| 12 | EU AI Act explained: risk tiers, deadlines, and what it means for your business | `eu-ai-act` | Éanna Motherway | 8/14/2026 | 15 min read | reused OpenClaw still | https://nexos.ai/blog/eu-ai-act/ |
| 13 | nexos.ai credits: How they work and how to use them | `nexos-ai-credits` | Éanna Motherway | 8/12/2026 | 11 min read | reused usage-tracking still | https://nexos.ai/blog/nexos-ai-credits/ |
| 14 | AI governance: frameworks, tools, and best practices | `ai-governance` | Éanna Motherway | 8/11/2026 | 18 min read | reused Claude still | https://nexos.ai/blog/ai-governance/ |
| 15 | Best 7 Requesty alternatives in 2026 | `requesty-alternatives` | Éanna Motherway | 8/10/2026 | 15 min read | reused observability still | https://nexos.ai/blog/requesty-alternatives/ |

Local routes: `/blog/{slug}` for each slug above.

Listing cards use listing date/read time. Detail pages use the article-page date/read time (live listing and article bars sometimes differ).

## Pagination

- Page 1: featured post + 9 recent cards.
- Page 2: 5 remaining cards, no featured (matches live page 2).
- Query: `/blog?page=2`.

## Detail system

- Static JSON in `src/data/blog/content/posts.json`.
- `generateStaticParams()` for all 15 slugs; `dynamicParams = false`; unknown slugs `notFound()`.
- TOC: inline card, first 3 items, “Show all”.
- Key takeaways: rendered as the article’s own leading bold heading + list (not a fabricated box).
- Tables: preserved in sanitized HTML; horizontal scroll on small screens.
- Related: “Trending Articles” uses 3 posts from the local 15 (no dead live trending slugs).
- CTA: “Make AI work your way.” / “Test AI Agents and no-code automation.” / Get nexos.ai → `/pricing`.
- Author index `/blog/author/*` is not created.

## Asset inventory

See `docs/assets.md` Blog section. Featured, author, and CTA backgrounds stored locally. Shared stills reused across posts that share the same live transform. No production hotlinking.

## 1440 listing QA

| Check | Result |
| --- | --- |
| Light header | PASS |
| Featured title as H1 | PASS |
| Featured image right / larger column | PASS |
| Recent 3-col | PASS |
| Dates / read times | PASS |
| Pagination 2 pages only | PASS |
| No listing search/filters | PASS |
| No listing CTA | PASS |

## 390 listing QA

| Check | Result |
| --- | --- |
| Single-column featured then cards | PASS |
| Image full width, rounded | PASS |
| Pagination wraps | PASS |

## Remaining differences

- Live listing paginates ~14 pages of 100+ posts; local has 2 pages of 15.
- Some live posts share identical cover art; local reuses those files instead of duplicating.
- Article bodies are sanitized public HTML (classes/Astro islands stripped). Nested live link chrome and medium-zoom are not cloned.
- Live article read times sometimes differ from listing; both values are preserved (cards vs detail).
- LinkedIn outreach body was rebuilt from the captured public article (same headings/lists/paragraphs) after a bulk HTML dump was blocked.
- No user screenshot attachments to pixel-compare; live site was the visual source.
- Locked pages were not redesigned. Blog uses isolated components under `src/components/blog/`.

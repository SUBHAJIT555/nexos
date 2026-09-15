import Link from "next/link";
import { Container } from "@/components/layout/Container";
import {
  RoutingCodeIcon,
  RoutingHeadsetIcon,
  RoutingIconTile,
  RoutingLandmarkIcon,
  RoutingShareIcon,
} from "@/components/routing/RoutingIcons";
import { routingUse } from "@/data/features/routing";

const icons = {
  coding: RoutingCodeIcon,
  support: RoutingHeadsetIcon,
  agentic: RoutingShareIcon,
  compliance: RoutingLandmarkIcon,
} as const;

export function RoutingUseCases() {
  return (
    <section id="smart-llm-routing-use-cases" className="relative">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(#22165d_0%,#071013_100%)]"
      />
      <Container className="relative py-16 md:py-24">
        <h2 className="mx-auto max-w-[740px] text-center font-heading text-[36px] leading-[1.2] font-semibold tracking-[-0.015em] text-white md:text-[48px] md:leading-[57.6px]">
          Smart LLM routing
          <br className="hidden md:block" /> use cases
        </h2>
        <p className="mx-auto mt-5 max-w-[720px] text-center text-base leading-6 text-[#EFF4F8] md:text-[18px] md:leading-[28px]">
          {routingUse.intro}
        </p>
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {routingUse.cards.map((card) => {
            const Icon = icons[card.id as keyof typeof icons];
            return (
              <article
                key={card.id}
                className="rounded-2xl border border-[#401D91] bg-transparent p-8"
              >
                <RoutingIconTile size="sm">
                  <Icon className="size-4" />
                </RoutingIconTile>
                <h3 className="mt-6 font-heading text-[22px] leading-[28.6px] font-semibold text-white">
                  {card.title}
                </h3>
                <p className="mt-3 text-base leading-6 text-[#A3B4C2]">
                  {"before" in card ? (
                    <>
                      {card.before}
                      <Link href="/features/llm-caching" className="text-accent hover:text-[var(--accent-hover)]">
                        {card.link}
                      </Link>
                      {card.after}
                    </>
                  ) : (
                    card.body
                  )}
                </p>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

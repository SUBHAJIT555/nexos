"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { homepageCost } from "@/data/homepage";
import { homeCostShots } from "@/assets/home";
import { Container } from "@/components/layout/Container";
import { useStackableCards } from "@/hooks/useStackableCards";

function CostCardCopy({
  card,
}: {
  card: (typeof homepageCost.cards)[number];
}) {
  if ("link" in card && card.link) {
    return [
      card.beforeLink,
      <Link
        key={card.link.href}
        href={card.link.href}
        className="text-accent hover:text-[var(--accent-hover)]"
      >
        {card.link.label}
      </Link>,
      card.afterLink,
    ];
  }

  return card.beforeLink;
}

export function CostSavings() {
  const rootRef = useRef<HTMLElement | null>(null);
  useStackableCards(rootRef);

  return (
    <section id="reduce-ai-costs" ref={rootRef} className="bg-page-dark py-16 md:py-24">
      <Container>
        <div className="grid items-start gap-10 lg:grid-cols-[500px_minmax(0,628px)] lg:justify-between lg:gap-16">
          <div className="flex flex-col gap-10 lg:sticky lg:top-[120px] lg:min-h-[559px] lg:justify-center">
            <h2 className="max-w-[500px] font-heading text-[36px] leading-[1.2] font-semibold tracking-[-0.015em] text-white md:text-[48px] md:leading-[57.6px]">
              {homepageCost.heading}
            </h2>
            <p className="max-w-[500px] text-base leading-6 text-on-dark-muted">
              {homepageCost.body}
            </p>
          </div>

          <div className="flex flex-col">
            {homepageCost.cards.map((card) => (
              <article
                key={card.id}
                data-stackable-card=""
                className="home-stack-card group relative overflow-clip rounded-md border border-[#1C232E] bg-dark-surface shadow-[0_0_20px_1px_rgba(13,17,20,0.8)]"
              >
                <div className="flex flex-col gap-4 px-6 pt-4 pb-6">
                  <div className="home-stack-card-heading flex items-start justify-between gap-4">
                    <h3 className="font-heading text-[20px] leading-[26px] font-semibold text-white md:text-[22px] md:leading-7">
                      {card.title}
                    </h3>
                    <span className="shrink-0 text-right text-[12px] leading-[21px] tracking-[1px] text-neutral-600 uppercase">
                      {card.index}
                    </span>
                  </div>
                  <p className="max-w-[467px] text-base leading-6 text-on-dark-muted">
                    <CostCardCopy card={card} />
                  </p>
                  <div className="relative overflow-hidden rounded-md">
                    <Image
                      src={homeCostShots[card.id]}
                      alt={card.visual}
                      sizes="(min-width: 1024px) 554px, 100vw"
                      className="h-auto w-full"
                    />
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-0 bg-[repeating-linear-gradient(to_right,rgba(107,22,255,0.10)_0px,rgba(107,22,255,0.10)_1px,transparent_1px,transparent_96px),repeating-linear-gradient(to_bottom,rgba(107,22,255,0.10)_0px,rgba(107,22,255,0.10)_1px,transparent_1px,transparent_96px)]"
                    />
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_top,rgba(107,22,255,0.72)_0%,rgba(107,22,255,0.61)_5%,rgba(107,22,255,0.40)_15%,rgba(107,22,255,0.12)_45%,transparent_55%)]"
                    />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

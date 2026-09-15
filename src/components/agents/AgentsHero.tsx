"use client";

import { useState } from "react";
import Image from "next/image";
import { agentsIllustrations, agentsShots } from "@/assets/agents";
import { assetSrc } from "@/assets/home";
import { Container } from "@/components/layout/Container";
import { InfoDialog } from "@/components/product/InfoDialog";
import { CirclePlusIcon } from "@/components/icons/UiIcons";
import { Button } from "@/components/ui/Button";
import { agentsHero } from "@/data/products/agents";

export function AgentsHero() {
  const [infoOpen, setInfoOpen] = useState(false);

  return (
    <>
      <section className="relative overflow-hidden bg-white pt-10 pb-8 md:pt-16 md:pb-12">
        <picture className="pointer-events-none absolute inset-x-0 top-0 hidden md:block">
          {/* Decorative grid; next/image does not add value for this SVG. */}
          <img
            src={assetSrc(agentsIllustrations.gridCentered)}
            alt=""
            width={1400}
            height={1200}
            className="mx-auto h-auto w-[1400px] max-w-none"
          />
        </picture>
        <Container className="relative">
          <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
            <div>
              <h1 className="max-w-[568px] font-heading text-[36px] leading-[1.15] font-semibold tracking-[-0.02em] text-neutral-900 md:text-[48px] md:leading-[57.6px]">
                <span className="block">{agentsHero.headingBefore}</span>
                <span className="text-accent">{agentsHero.headingAfter}</span>
              </h1>
              <ul className="mt-6 space-y-3">
                {agentsHero.bullets.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-base text-neutral-800">
                    <CheckIcon />
                    {item}
                  </li>
                ))}
              </ul>
              <button
                type="button"
                className="mt-6 inline-flex items-center gap-2 self-start text-base font-medium text-neutral-900 hover:text-neutral-800"
                onClick={() => setInfoOpen(true)}
              >
                <CirclePlusIcon className="size-6 text-neutral-500" />
                {agentsHero.info.label}
              </button>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
                <Button href={agentsHero.cta.href} variant="hero" className="w-full sm:w-fit">
                  {agentsHero.cta.label}
                </Button>
                <p className="text-sm text-neutral-600">{agentsHero.guarantee}</p>
              </div>
            </div>
            <div>
              <Image
                src={agentsShots.hero}
                alt="AI Agents creation screen."
                sizes="(min-width: 1024px) 560px, 100vw"
                priority
                className="h-auto w-full rounded-[24px]"
              />
            </div>
          </div>
        </Container>
      </section>
      <InfoDialog
        open={infoOpen}
        onClose={() => setInfoOpen(false)}
        heading={agentsHero.info.heading}
        paragraphs={[...agentsHero.info.paragraphs]}
      />
    </>
  );
}

function CheckIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 448 512"
      fill="currentColor"
      className="mt-0.5 size-4 shrink-0 text-neutral-500"
      aria-hidden="true"
    >
      <path d="M441 103c9.4 9.4 9.4 24.6 0 33.9L177 401c-9.4 9.4-24.6 9.4-33.9 0L7 265c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l119 119L407 103c9.4-9.4 24.6-9.4 33.9 0z" />
    </svg>
  );
}

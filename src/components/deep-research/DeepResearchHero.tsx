"use client";

import { useState } from "react";
import Image from "next/image";
import { assetSrc } from "@/assets/home";
import { deepResearchPageGraphics, deepResearchPageShots } from "@/assets/deep-research";
import { Container } from "@/components/layout/Container";
import { InfoDialog } from "@/components/product/InfoDialog";
import { CirclePlusIcon } from "@/components/icons/UiIcons";
import { Button } from "@/components/ui/Button";
import { deepHero } from "@/data/features/deep-research";

export function DeepResearchHero() {
  const [infoOpen, setInfoOpen] = useState(false);

  return (
    <>
      <section className="relative overflow-hidden bg-white pt-10 pb-16 md:pt-16 md:pb-32">
        <picture className="pointer-events-none absolute inset-x-0 top-0 hidden md:block">
          {/* Decorative grid; next/image does not add value for this SVG. */}
          <img
            src={assetSrc(deepResearchPageGraphics.gridCentered)}
            alt=""
            width={1400}
            height={1200}
            className="mx-auto h-auto w-[1400px] max-w-none"
          />
        </picture>
        <Container className="relative">
          <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,1fr)_555px]">
            <div>
              <h1 className="max-w-[568px] font-heading text-[36px] leading-[1.15] font-semibold tracking-[-0.02em] text-neutral-900 md:text-[48px] md:leading-[57.6px]">
                <span className="block">{deepHero.headingBefore}</span>
                <span className="text-accent">
                  Hours of work,
                  <br />
                  done in minutes
                </span>
              </h1>
              <p className="mt-6 max-w-[568px] text-base leading-6 text-neutral-700">{deepHero.body}</p>
              <button
                type="button"
                className="mt-6 inline-flex items-center gap-2 self-start text-base font-medium text-neutral-900 hover:text-neutral-800"
                onClick={() => setInfoOpen(true)}
              >
                <CirclePlusIcon className="size-6 text-neutral-500" />
                {deepHero.info.label}
              </button>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
                <Button href={deepHero.primary.href} variant="hero" className="w-full sm:w-fit">
                  {deepHero.primary.label}
                </Button>
                <p className="text-sm text-neutral-600">{deepHero.guarantee}</p>
              </div>
            </div>
            <div className="w-full lg:w-[555px] lg:justify-self-end">
              <Image
                src={deepResearchPageShots.hero}
                alt="Person using NexEco AI Deep Research on a laptop"
                sizes="(min-width: 1024px) 555px, 100vw"
                priority
                className="h-auto w-full"
              />
            </div>
          </div>
        </Container>
      </section>
      <InfoDialog
        open={infoOpen}
        onClose={() => setInfoOpen(false)}
        heading={deepHero.info.heading}
        paragraphs={[...deepHero.info.paragraphs]}
      />
    </>
  );
}

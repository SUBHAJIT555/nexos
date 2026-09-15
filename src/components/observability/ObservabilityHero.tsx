"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/layout/Container";
import { InfoDialog } from "@/components/product/InfoDialog";
import { CirclePlusIcon } from "@/components/icons/UiIcons";
import { assetSrc } from "@/assets/home";
import { observabilityGraphics } from "@/assets/observability";
import { observabilityHero } from "@/data/features/observability";

export function ObservabilityHero() {
  const [infoOpen, setInfoOpen] = useState(false);

  return (
    <section id="hero" className="relative">
      <div className="relative pt-16 pb-10 md:pt-24 md:pb-12">
        <Container className="grid items-center gap-10 lg:grid-cols-[minmax(0,568px)_minmax(0,555px)] lg:justify-between">
          <div>
            <h1 className="max-w-[500px] font-heading text-[36px] leading-[1.2] font-semibold tracking-[-0.015em] text-white md:text-[48px] md:leading-[57.6px]">
              {observabilityHero.heading}
            </h1>
            <p className="mt-5 max-w-[520px] text-base leading-6 text-[#EFF4F8]">{observabilityHero.body}</p>
            <button
              type="button"
              className="mt-6 inline-flex items-center gap-2 text-base text-[#A3B4C2] hover:text-white"
              onClick={() => setInfoOpen(true)}
            >
              <CirclePlusIcon className="size-4 text-white" />
              {observabilityHero.info.label}
            </button>
            <div className="mt-8 flex w-full flex-col items-stretch gap-4 sm:flex-row sm:items-center">
              <Button href={observabilityHero.primary.href} variant="hero" className="w-full sm:w-fit">
                {observabilityHero.primary.label}
              </Button>
              <Button href={observabilityHero.secondary.href} variant="primary" className="w-full sm:w-fit">
                {observabilityHero.secondary.label}
              </Button>
            </div>
          </div>
          <img
            src={assetSrc(observabilityGraphics.hero)}
            alt={observabilityHero.visualAlt}
            width={640}
            height={640}
            className="mx-auto h-auto w-full max-w-[555px] lg:mx-0 lg:justify-self-end"
          />
        </Container>
      </div>
      <InfoDialog
        open={infoOpen}
        onClose={() => setInfoOpen(false)}
        heading={observabilityHero.info.heading}
        paragraphs={[...observabilityHero.info.paragraphs]}
      />
    </section>
  );
}

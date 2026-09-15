"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/layout/Container";
import { InfoDialog } from "@/components/product/InfoDialog";
import { CirclePlusIcon, KeyIcon } from "@/components/icons/UiIcons";
import { assetSrc } from "@/assets/home";
import { gatewayGraphics } from "@/assets/gateway";
import { gatewayHero } from "@/data/products/gateway";

export function GatewayHero() {
  const [infoOpen, setInfoOpen] = useState(false);

  return (
    <section id="ai-gateway-hero" className="relative">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(#071013_0%,#071013_50%,#151135_74%,#28125f_100%)]"
      />
      <div className="relative pt-16 pb-16 text-center md:pt-28 md:pb-28">
        <Container className="flex flex-col items-center">
          <h1 className="max-w-[723px] font-heading text-[36px] leading-[1.2] font-semibold tracking-[-0.015em] text-white md:text-[48px] md:leading-[57.6px]">
            AI Gateway: unified LLM access,
            <br className="hidden lg:block" /> full AI spend control
          </h1>
          <p className="mt-5 max-w-[761px] text-base leading-6 text-[#EFF4F8]">
            {gatewayHero.body}
          </p>
          <div className="mt-8 flex w-full flex-col items-center gap-4 md:flex-row md:justify-center">
            <Button href={gatewayHero.primary.href} variant="hero" className="w-full md:w-fit">
              {gatewayHero.primary.label}
            </Button>
            <Button
              href={gatewayHero.secondary.href}
              variant="primary"
              icon={<KeyIcon className="size-6" />}
              className="w-full md:w-fit"
            >
              {gatewayHero.secondary.label}
            </Button>
          </div>
          <button
            type="button"
            className="mt-6 inline-flex items-center gap-2 text-base text-[#A3B4C2] hover:text-white"
            onClick={() => setInfoOpen(true)}
          >
            <CirclePlusIcon className="size-4 text-white" />
            {gatewayHero.info.label}
          </button>
          <div className="mt-16 w-full max-w-[1168px]">
            <picture>
              <source media="(max-width: 767px)" srcSet={assetSrc(gatewayGraphics.heroXs)} />
              <img
                src={assetSrc(gatewayGraphics.heroXl)}
                alt="nexos.ai AI Gateway routing diagram connecting one endpoint to live cards for total AI spend, tokens routed, model usage, and team budgets."
                width={1168}
                height={360}
                className="h-auto w-full"
              />
            </picture>
          </div>
        </Container>
      </div>
      <InfoDialog
        open={infoOpen}
        onClose={() => setInfoOpen(false)}
        heading={gatewayHero.info.heading}
        paragraphs={[...gatewayHero.info.paragraphs]}
      />
    </section>
  );
}

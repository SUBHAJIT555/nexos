"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/layout/Container";
import { InfoDialog } from "@/components/product/InfoDialog";
import { CirclePlusIcon, KeyIcon } from "@/components/icons/UiIcons";
import { RoutingCheckIcon } from "@/components/routing/RoutingIcons";
import { assetSrc } from "@/assets/home";
import { routingGraphics } from "@/assets/routing";
import { routingHero } from "@/data/features/routing";

export function RoutingHero() {
  const [infoOpen, setInfoOpen] = useState(false);

  return (
    <section id="hero" className="relative">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(#071013_0%,#071013_47.33%,#12112c_59.92%,#1d1246_72.5%,#331378_97.81%,#35137c_100%)]"
      />
      <div className="relative pt-16 pb-10 md:pt-24 md:pb-12">
        <Container className="grid items-center gap-10 lg:grid-cols-[minmax(0,568px)_minmax(0,555px)] lg:justify-between">
          <div>
            <h1 className="max-w-[500px] font-heading text-[36px] leading-[1.2] font-semibold tracking-[-0.015em] text-white md:text-[48px] md:leading-[57.6px]">
              {routingHero.heading}
            </h1>
            <p className="mt-5 max-w-[520px] text-base leading-6 text-[#EFF4F8]">{routingHero.body}</p>
            <ul className="mt-6 space-y-3">
              {routingHero.bullets.map((bullet) => (
                <li key={bullet} className="flex items-start gap-3 text-base leading-6 text-[#EFF4F8]">
                  <RoutingCheckIcon className="mt-0.5 size-5 shrink-0 text-accent" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
            <button
              type="button"
              className="mt-6 inline-flex items-center gap-2 text-base text-[#A3B4C2] hover:text-white"
              onClick={() => setInfoOpen(true)}
            >
              <CirclePlusIcon className="size-4 text-white" />
              {routingHero.info.label}
            </button>
            <div className="mt-8 flex w-full flex-col items-stretch gap-4 sm:flex-row sm:items-center">
              <Button href={routingHero.primary.href} variant="hero" className="w-full sm:w-fit">
                {routingHero.primary.label}
              </Button>
              <Button
                href={routingHero.secondary.href}
                variant="primary"
                icon={<KeyIcon className="size-6" />}
                className="w-full sm:w-fit"
              >
                {routingHero.secondary.label}
              </Button>
            </div>
          </div>
          <img
            src={assetSrc(routingGraphics.hero)}
            alt={routingHero.visualAlt}
            width={555}
            height={555}
            className="mx-auto h-auto w-full max-w-[555px] lg:mx-0 lg:justify-self-end"
          />
        </Container>
      </div>
      <InfoDialog
        open={infoOpen}
        onClose={() => setInfoOpen(false)}
        heading={routingHero.info.heading}
        paragraphs={[...routingHero.info.paragraphs]}
      />
    </section>
  );
}

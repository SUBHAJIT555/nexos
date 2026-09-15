"use client";

import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { GatewaySlider } from "@/components/gateway/GatewaySlider";
import {
  GatewayWhyCacheIcon,
  GatewayWhyChartIcon,
  GatewayWhyCostIcon,
  GatewayWhyFallbackIcon,
  GatewayWhyGlobeIcon,
  GatewayWhyKeyIcon,
  GatewayWhyLogsIcon,
  GatewayWhyRoutingIcon,
} from "@/components/gateway/GatewayIcons";
import { KeyIcon } from "@/components/icons/UiIcons";
import { gatewayHero, gatewayWhy } from "@/data/products/gateway";

const whyIcons = {
  routing: GatewayWhyRoutingIcon,
  cost: GatewayWhyCostIcon,
  observability: GatewayWhyChartIcon,
  logs: GatewayWhyLogsIcon,
  fallbacks: GatewayWhyFallbackIcon,
  caching: GatewayWhyCacheIcon,
  keys: GatewayWhyKeyIcon,
  search: GatewayWhyGlobeIcon,
};

export function GatewayWhy() {
  return (
    <section
      id="slider-why-business"
      className="relative py-16 md:py-24"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(#EFF4F8_0%,#ffffff_100%)]"
      />
      <Container className="relative">
        <h2 className="mx-auto max-w-[768px] text-center font-heading text-[36px] leading-[1.2] font-semibold tracking-[-0.015em] text-neutral-900 md:text-[48px] md:leading-[57.6px]">
          {gatewayWhy.heading}
        </h2>
        <p className="mx-auto mt-5 max-w-[768px] text-center text-base leading-6 text-neutral-700 md:text-[18px] md:leading-[28px]">
          {gatewayWhy.body}
        </p>
        <GatewaySlider className="mt-10" ariaLabel="Gateway feature slides">
          <div data-slide-track className="flex w-max gap-6">
            {gatewayWhy.slides.map((slide) => {
              const Icon = whyIcons[slide.id as keyof typeof whyIcons];
              return (
                <article
                  key={slide.id}
                  data-slide
                  className="w-[min(368px,calc(100vw-2rem))] shrink-0 snap-start p-6"
                >
                  <span className="inline-flex text-accent">
                    <Icon className="size-8" />
                  </span>
                  <h3 className="mt-6 font-heading text-[22px] leading-[28.6px] font-semibold text-neutral-900">
                    {slide.title}
                  </h3>
                  <p className="mt-3 text-base leading-6 text-neutral-700">{slide.body}</p>
                </article>
              );
            })}
          </div>
        </GatewaySlider>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 md:flex-row">
          <Button href={gatewayHero.primary.href} variant="primary" className="w-full md:w-fit">
            {gatewayHero.primary.label}
          </Button>
          <Button
            href={gatewayHero.secondary.href}
            variant="outline"
            icon={<KeyIcon className="size-6" />}
            className="w-full md:w-fit"
          >
            {gatewayHero.secondary.label}
          </Button>
        </div>
      </Container>
    </section>
  );
}

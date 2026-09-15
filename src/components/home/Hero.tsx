"use client";

import { useState } from "react";
import { homepageHero } from "@/data/homepage";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/layout/Container";
import { PlatformDialog } from "@/components/home/PlatformDialog";
import { ShiftingBadge } from "@/components/home/ShiftingBadge";
import { CirclePlusIcon, KeyIcon } from "@/components/icons/UiIcons";

export function Hero() {
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <section id="hero-home" className="pt-12 pb-14 text-center">
      <Container className="flex flex-col items-center gap-6">
        <ShiftingBadge />

        <h1 className="max-w-[741px] font-heading text-[36px] leading-[1.15] font-semibold tracking-[-0.752px] text-white md:text-[64px] md:leading-[76.8px]">
          <span className="block">{homepageHero.headingLine1}</span>
          <span>
            {homepageHero.headingBeforeAccent}
            <span className="text-gradient-highlight">{homepageHero.headingAccent}</span>
          </span>
        </h1>

        <p className="max-w-[741px] text-[18px] leading-[28px] text-on-dark md:text-[20px] md:leading-[30px]">
          {homepageHero.subhead}
        </p>

        <div className="flex w-full max-w-[741px] flex-col items-center gap-4 md:flex-row md:justify-center">
          <Button
            href={homepageHero.primaryCta.href}
            variant="hero"
            icon={<KeyIcon className="size-6" />}
            className="w-full md:w-fit"
          >
            {homepageHero.primaryCta.label}
          </Button>
          <Button
            href={homepageHero.secondaryCta.href}
            variant="primary"
            className="w-full md:w-fit"
          >
            {homepageHero.secondaryCta.label}
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex items-center gap-2 text-base text-accent hover:text-[var(--accent-hover)]"
          onClick={() => setDialogOpen(true)}
        >
          <CirclePlusIcon className="size-4 text-white" />
          {homepageHero.platformLink.label}
        </button>
      </Container>
      <PlatformDialog open={dialogOpen} onClose={() => setDialogOpen(false)} />
    </section>
  );
}

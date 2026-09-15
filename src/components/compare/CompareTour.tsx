"use client";

import { useState } from "react";
import { compareIllustrations, compareShots } from "@/assets/compare";
import { assetSrc } from "@/assets/home";
import { Container } from "@/components/layout/Container";
import { InfoDialog } from "@/components/product/InfoDialog";
import { compareTour } from "@/data/products/compare";

export function CompareTour() {
  const [open, setOpen] = useState(false);

  return (
    <section className="bg-white py-16">
      <Container>
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="relative flex min-h-[112px] w-full items-center justify-between gap-6 overflow-hidden rounded-md px-6 py-8 text-left md:min-h-[112px] md:px-10"
        >
          <picture className="pointer-events-none absolute inset-0">
            <source media="(max-width: 767px)" srcSet={assetSrc(compareShots.tourBannerXs)} />
            <img
              src={assetSrc(compareShots.tourBanner)}
              alt=""
              className="h-full w-full object-cover object-right"
            />
          </picture>
          <span className="relative font-heading text-[22px] leading-[28.6px] font-semibold text-neutral-900 md:text-[24px]">
            {compareTour.heading}
          </span>
          <span className="relative inline-flex shrink-0 items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-neutral-900 shadow-sm">
            {compareTour.ctaLabel}
            <img src={assetSrc(compareIllustrations.playFilled)} alt="" width={16} height={16} className="size-4 invert" />
          </span>
        </button>
      </Container>
      <InfoDialog
        open={open}
        onClose={() => setOpen(false)}
        heading={compareTour.dialogHeading}
        paragraphs={[...compareTour.paragraphs]}
      />
    </section>
  );
}

"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { PersonStandIn } from "@/components/home/visuals/StandIns";
import { cn } from "@/lib/utils";

export type QuoteSlide = {
  id: string;
  quote: string;
  name: string;
  role: string;
  product?: string;
};

type QuoteCarouselProps = {
  heading: string;
  body?: string;
  slides: QuoteSlide[];
};

export function QuoteCarousel({ heading, body, slides }: QuoteCarouselProps) {
  const [index, setIndex] = useState(0);
  const slide = slides[index];

  if (!slide) {
    return null;
  }

  return (
    <section className="bg-neutral-100 py-16 md:py-24">
      <Container>
        <h2 className="max-w-[768px] font-heading text-[36px] leading-[1.2] font-semibold tracking-[-0.015em] text-neutral-900 md:text-[48px] md:leading-[57.6px]">
          {heading}
        </h2>
        {body ? (
          <p className="mt-5 max-w-[768px] text-base leading-6 text-neutral-700 md:text-[18px] md:leading-[28px]">
            {body}
          </p>
        ) : null}

        <article className="mt-10 rounded-md bg-white p-6 md:p-8">
          {slide.product ? (
            <span className="inline-flex rounded-pill bg-neutral-1000 px-3 py-1 text-xs font-medium text-white">
              {slide.product}
            </span>
          ) : null}
          <p className="mt-5 text-[18px] leading-[28px] text-neutral-900 md:text-[20px] md:leading-[30px]">
            {slide.quote}
          </p>
          <div className="mt-6 flex items-center gap-3">
            <PersonStandIn name={slide.name} className="size-12 rounded-full" />
            <div>
              <div className="text-sm font-semibold text-neutral-900">{slide.name}</div>
              <div className="text-sm text-neutral-600">{slide.role}</div>
            </div>
          </div>
        </article>

        <div className="mt-6 flex items-center gap-3">
          <button
            type="button"
            aria-label="Previous slide"
            disabled={index === 0}
            onClick={() => setIndex((value) => Math.max(0, value - 1))}
            className={cn(
              "flex size-10 items-center justify-center rounded-full border border-neutral-200 bg-white",
              index === 0 && "opacity-40",
            )}
          >
            <ChevronLeft className="size-5" />
          </button>
          <button
            type="button"
            aria-label="Next slide"
            disabled={index === slides.length - 1}
            onClick={() => setIndex((value) => Math.min(slides.length - 1, value + 1))}
            className={cn(
              "flex size-10 items-center justify-center rounded-full border border-neutral-200 bg-white",
              index === slides.length - 1 && "opacity-40",
            )}
          >
            <ChevronRight className="size-5" />
          </button>
        </div>
      </Container>
    </section>
  );
}

"use client";

import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { GatewaySlider } from "@/components/gateway/GatewaySlider";
import { gatewayDataSlides, gatewayObservability } from "@/data/products/gateway";

export function GatewayData() {
  return (
    <section id="slider-see-what-your-data-is-really-telling-you" className="bg-white py-16 md:py-24">
      <Container>
        <h2 className="text-center font-heading text-[36px] leading-[1.2] font-semibold tracking-[-0.015em] text-neutral-900 md:text-[48px] md:leading-[57.6px]">
          {gatewayObservability.heading}
        </h2>
        <GatewaySlider className="mt-10" ariaLabel="Data slides">
          <div data-slide-track className="flex w-max gap-8">
            {gatewayDataSlides.map((slide) => (
              <article
                key={slide.id}
                data-slide
                className="flex h-[646px] w-[min(568px,calc(100vw-2rem))] shrink-0 snap-start flex-col justify-start gap-y-4 overflow-hidden rounded-md p-6"
                style={{ backgroundImage: slide.gradient }}
              >
                <Image
                  src={slide.image}
                  alt={slide.alt}
                  width={520}
                  height={416}
                  className="h-[416px] w-full rounded-md object-cover object-top"
                />
                <h3 className="text-[20px] leading-[30px] font-semibold text-neutral-900">
                  {slide.title}
                </h3>
                <p className="text-base leading-6 text-neutral-700">{slide.body}</p>
              </article>
            ))}
          </div>
        </GatewaySlider>
      </Container>
    </section>
  );
}

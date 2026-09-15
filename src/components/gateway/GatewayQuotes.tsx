"use client";

import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { homePortraits } from "@/assets/home";
import { GatewaySlider } from "@/components/gateway/GatewaySlider";
import { GatewayTechBadgeIcon } from "@/components/gateway/GatewayIcons";
import { gatewayQuotes } from "@/data/products/gateway";

const badgeStyle: Record<string, { bg: string; icon: string }> = {
  Technology: { bg: "#BBEADF", icon: "#538378" },
  Product: { bg: "#C6F3EE", icon: "#0A8550" },
  Marketing: { bg: "#E3FCEC", icon: "#0C7E67" },
  Operations: { bg: "#F5F3FC", icon: "#6B3EFF" },
};

export function GatewayQuotes() {
  return (
    <section id="testimonials" className="bg-white py-16 md:py-24">
      <Container>
        <h2 className="max-w-[768px] font-heading text-[36px] leading-[1.2] font-semibold tracking-[-0.015em] text-neutral-900 md:text-[48px] md:leading-[57.6px]">
          {gatewayQuotes.heading}
        </h2>
        <GatewaySlider className="mt-10" ariaLabel="Customer quotes">
          <ul data-slide-track className="flex w-max gap-6">
            {gatewayQuotes.slides.map((item) => {
              const chip = badgeStyle[item.badge] ?? badgeStyle.Operations;
              const portrait = homePortraits[item.portrait];
              return (
                <li
                  key={item.id}
                  data-slide
                  className="flex h-[471px] w-[min(368px,calc(100vw-2rem))] shrink-0 snap-start overflow-hidden rounded-2xl border border-[#dbe4eb] bg-white p-4"
                >
                  <div className="flex h-full w-full flex-col gap-6">
                    <span
                      className="inline-flex w-fit items-center gap-2 rounded-full px-4 py-2 text-base font-medium text-neutral-900"
                      style={{ backgroundColor: chip.bg, color: chip.icon }}
                    >
                      <GatewayTechBadgeIcon className="size-4" />
                      <span className="text-neutral-900">{item.badge}</span>
                    </span>
                    <div className="flex items-center gap-2">
                      {portrait ? (
                        <Image
                          src={portrait}
                          alt=""
                          width={48}
                          height={48}
                          draggable={false}
                          className="size-12 rounded-full object-cover"
                        />
                      ) : null}
                      <div>
                        <div className="text-base leading-6 font-semibold text-neutral-900">
                          {item.name}
                        </div>
                        <p className="text-sm leading-[21px] text-neutral-600">{item.role}</p>
                        <p className="text-sm leading-[21px] text-neutral-600">{item.company}</p>
                      </div>
                    </div>
                    <p className="text-base leading-6 text-neutral-700">{item.quote}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </GatewaySlider>
      </Container>
    </section>
  );
}

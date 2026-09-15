import type { ComponentType } from "react";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import {
  ObservabilityBlocklistsIcon,
  ObservabilityCameraArrowsIcon,
  ObservabilityDataScannerIcon,
  ObservabilityShareSplitIcon,
} from "@/components/observability/ObservabilityIcons";
import { observabilityBlind } from "@/data/features/observability";

const ICONS: Record<string, ComponentType<{ className?: string }>> = {
  leaks: ObservabilityDataScannerIcon,
  spend: ObservabilityCameraArrowsIcon,
  behavior: ObservabilityShareSplitIcon,
  compliance: ObservabilityBlocklistsIcon,
};

export function ObservabilityBlind() {
  return (
    <section id="without-observability" className="relative bg-[#071013] py-16 md:py-24">
      <Container>
        <div className="mx-auto max-w-[800px] text-center">
          <h2 className="font-heading text-[36px] leading-[1.2] font-semibold tracking-[-0.015em] text-white md:text-[48px] md:leading-[57.6px]">
            {observabilityBlind.heading}
          </h2>
          <p className="mt-5 text-base leading-6 text-[#EFF4F8] md:text-[18px] md:leading-[28px]">
            {observabilityBlind.introBefore}
            <Link href={observabilityBlind.introLink.href} className="text-accent hover:text-[var(--accent-hover)]">
              {observabilityBlind.introLink.label}
            </Link>
            {observabilityBlind.introAfter}
          </p>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {observabilityBlind.cards.map((card) => {
            const Icon = ICONS[card.id];
            return (
              <article key={card.id} className="rounded-2xl bg-[#1a2026] p-6">
                <span className="text-[#9690F8]">{Icon ? <Icon /> : null}</span>
                <h3 className="mt-6 font-heading text-[22px] leading-[28.6px] font-semibold text-white">{card.title}</h3>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

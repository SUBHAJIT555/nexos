import type { ComponentType } from "react";
import { Container } from "@/components/layout/Container";
import {
  ObservabilityChartIcon,
  ObservabilityGridPlusIcon,
  ObservabilityIconTile,
  ObservabilitySearchIcon,
  ObservabilityTrendIcon,
} from "@/components/observability/ObservabilityIcons";
import { observabilityBenefits } from "@/data/features/observability";

const ICONS: Record<string, ComponentType<{ className?: string }>> = {
  risk: ObservabilitySearchIcon,
  cost: ObservabilityChartIcon,
  compliance: ObservabilityGridPlusIcon,
  roi: ObservabilityTrendIcon,
};

export function ObservabilityBenefits() {
  return (
    <section id="business-benefits" className="relative bg-[#071013] py-16 md:py-24">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,468px)_minmax(0,700px)] lg:justify-between">
          <div>
            <h2 className="font-heading text-[36px] leading-[1.2] font-semibold tracking-[-0.015em] text-white md:text-[48px] md:leading-[57.6px]">
              {observabilityBenefits.headingBefore}
              <br />
              <span className="text-accent">{observabilityBenefits.headingAccent}</span>
            </h2>
            <p className="mt-5 text-base leading-6 text-[#EFF4F8] md:text-[18px] md:leading-[28px]">
              {observabilityBenefits.intro}
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-[#131921] p-6 md:p-8">
            <ul className="space-y-8">
              {observabilityBenefits.cards.map((card) => {
                const Icon = ICONS[card.id];
                return (
                  <li key={card.id} className="flex gap-4">
                    <ObservabilityIconTile>{Icon ? <Icon /> : null}</ObservabilityIconTile>
                    <div>
                      <h3 className="text-base font-semibold text-white">{card.title}</h3>
                      <p className="mt-1 text-sm leading-[21px] text-[#A3B4C2]">{card.body}</p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}

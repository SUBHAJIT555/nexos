import { Container } from "@/components/layout/Container";
import {
  CachingChartIcon,
  CachingGearIcon,
  CachingIconTile,
  CachingSearchIcon,
  CachingTrendIcon,
  CachingWindowsIcon,
} from "@/components/caching/CachingIcons";
import { cachingTackle } from "@/data/features/caching";

const icons = {
  gear: CachingGearIcon,
  chart: CachingChartIcon,
  search: CachingSearchIcon,
  windows: CachingWindowsIcon,
  trend: CachingTrendIcon,
};

export function CachingTackle() {
  return (
    <section id="dark-section-how-nexeco-ai-tackles-these-challenges" className="relative bg-[#071013] py-16 md:py-24">
      <Container>
        <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,468px)_minmax(0,640px)] lg:justify-between">
          <div>
            <h2 className="max-w-[468px] font-heading text-[36px] leading-[1.2] font-semibold tracking-[-0.015em] text-white md:text-[40px] md:leading-[48px]">
              {cachingTackle.headingBefore}
              <span className="text-[#9690F8]">{cachingTackle.headingAccent}</span>
              {" tackles"}
              <br />
              these challenges
            </h2>
            <p className="mt-5 text-base leading-6 text-[#A3B4C2] md:text-[18px] md:leading-[28px]">
              {cachingTackle.intro}
            </p>
          </div>
          <div className="rounded-2xl border border-[#262b30] p-6 md:p-8">
            <ul className="space-y-6">
              {cachingTackle.cards.map((card) => {
                const Icon = icons[card.icon];
                return (
                  <li key={card.id} className="flex items-start gap-4">
                    <CachingIconTile variant="square">
                      <Icon className="size-6" />
                    </CachingIconTile>
                    <div className="min-w-0">
                      <h3 className="font-heading text-[18px] leading-[24px] font-semibold text-white">{card.title}</h3>
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

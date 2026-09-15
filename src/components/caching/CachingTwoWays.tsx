import { Container } from "@/components/layout/Container";
import { CachingCommentsIcon, CachingIconTile, CachingWindowIcon } from "@/components/caching/CachingIcons";
import { cachingTwoWays } from "@/data/features/caching";

const icons = {
  comments: CachingCommentsIcon,
  window: CachingWindowIcon,
};

export function CachingTwoWays() {
  return (
    <section id="two-ways-nexosai-makes-caching-work" className="relative bg-[#071013] py-16 md:py-24">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[minmax(0,568px)_minmax(0,568px)] lg:items-start lg:justify-between">
          <h2 className="max-w-[568px] font-heading text-[36px] leading-[1.2] font-semibold tracking-[-0.015em] text-white md:text-[48px] md:leading-[57.6px]">
            {cachingTwoWays.headingBefore}
            <span className="text-[#9690F8]">{cachingTwoWays.headingAccent}</span>
            {cachingTwoWays.headingAfter}
          </h2>
          <p className="max-w-[568px] text-base leading-6 text-[#A3B4C2] md:text-[18px] md:leading-[28px]">
            {cachingTwoWays.intro}
          </p>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {cachingTwoWays.cards.map((card) => {
            const Icon = icons[card.icon];
            return (
              <article key={card.id} className="flex h-full flex-col rounded-2xl border border-[#2a2b32] p-6 md:p-8">
                <div className="flex items-center gap-4">
                  <CachingIconTile>
                    <Icon className="size-4" />
                  </CachingIconTile>
                  <h3 className="font-heading text-[22px] leading-[28.6px] font-semibold text-white">{card.title}</h3>
                </div>
                <p className="mt-4 text-sm leading-[21px] text-[#A3B4C2] md:text-base md:leading-6">{card.body}</p>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

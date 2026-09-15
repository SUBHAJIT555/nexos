import { Container } from "@/components/layout/Container";
import {
  RoutingCircleCheckIcon,
  RoutingSplitIcon,
  RoutingTrendIcon,
} from "@/components/routing/RoutingIcons";
import { routingMore } from "@/data/features/routing";

export function RoutingMore() {
  return (
    <section id="dark-section-smart-routing-is-more-than-choosing-the-cheapest-model" className="relative bg-[#071013] py-16 md:py-24">
      <Container>
        <h2 className="mx-auto max-w-[740px] text-center font-heading text-[36px] leading-[1.2] font-semibold tracking-[-0.015em] text-white md:text-[48px] md:leading-[57.6px]">
          {routingMore.heading}
        </h2>
        <div className="mt-10 grid items-stretch gap-4 lg:grid-cols-[minmax(0,468px)_minmax(0,1fr)]">
          <article className="flex flex-col justify-center gap-4 rounded-3xl bg-[#22165d] px-10 py-8">
            <RoutingSplitIcon className="size-6 text-[#9690F8]" />
            <p className="font-heading text-[64px] leading-none font-semibold text-[#9690F8]">{routingMore.stat}</p>
            <p className="text-base leading-6 text-[#EFF4F8]">{routingMore.statBody}</p>
          </article>
          <div className="flex flex-col gap-4">
            <article className="flex h-full flex-col justify-start gap-4 rounded-3xl border border-[#262B30] bg-[#131921] p-10">
              <RoutingTrendIcon className="size-4 text-[#A3B4C2]" />
              <p className="text-base leading-6 text-[#EFF4F8]">{routingMore.p1}</p>
            </article>
            <article className="flex h-full flex-col justify-start gap-4 rounded-3xl border border-[#262B30] bg-[#131921] p-10">
              <RoutingCircleCheckIcon className="size-4 text-[#A3B4C2]" />
              <p className="text-base leading-6 text-[#EFF4F8]">{routingMore.p2}</p>
            </article>
          </div>
        </div>
      </Container>
    </section>
  );
}

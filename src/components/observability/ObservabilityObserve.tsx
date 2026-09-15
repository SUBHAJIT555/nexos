import { Container } from "@/components/layout/Container";
import { ObservabilitySlider } from "@/components/observability/ObservabilitySlider";
import { assetSrc } from "@/assets/home";
import { observabilityObserve } from "@/data/features/observability";

export function ObservabilityObserve() {
  return (
    <section id="ai-gateway" className="relative bg-[#071013] py-16 md:py-24">
      <Container>
        <div className="mx-auto max-w-[740px] text-center">
          <div className="mb-6 flex justify-center">
            <div
              className="inline-block w-fit rounded-full border border-white/15 px-3 py-1 md:px-4 md:py-[6px]"
              style={{ backgroundColor: "rgba(255, 255, 255, 0.1)" }}
            >
              <span className="text-sm font-medium tracking-[0.04em] text-white uppercase">
                {observabilityObserve.pill}
              </span>
            </div>
          </div>
          <h2 className="font-heading text-[36px] leading-[1.2] font-semibold tracking-[-0.015em] text-white md:text-[48px] md:leading-[57.6px]">
            {observabilityObserve.heading}
          </h2>
          <p className="mx-auto mt-5 max-w-[720px] text-base leading-6 text-[#EFF4F8] md:text-[18px] md:leading-[28px]">
            {observabilityObserve.intro}
          </p>
        </div>
        <ObservabilitySlider className="mt-10" ariaLabel="LLM request observability charts">
          <div data-slide-track className="flex w-max gap-4">
            {observabilityObserve.cards.map((card) => (
              <article
                key={card.id}
                data-slide
                className="flex w-[min(379px,calc(100vw-2rem))] shrink-0 snap-start flex-col overflow-hidden rounded-2xl bg-[#131921]"
              >
                <img
                  src={assetSrc(card.image)}
                  alt={card.alt}
                  width={662}
                  height={530}
                  className="h-[265px] w-full object-cover object-top"
                />
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-heading text-[22px] leading-[28.6px] font-semibold text-white">{card.title}</h3>
                  <p className="mt-3 text-sm leading-[21px] text-[#A3B4C2]">{card.body}</p>
                </div>
              </article>
            ))}
          </div>
        </ObservabilitySlider>
      </Container>
    </section>
  );
}

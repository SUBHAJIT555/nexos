import { Container } from "@/components/layout/Container";
import { RoutingSlider } from "@/components/routing/RoutingSlider";
import { assetSrc } from "@/assets/home";
import { routingBenefits } from "@/data/features/routing";

export function RoutingBenefits() {
  return (
    <section id="benefits-of-smart-llm-routing" className="relative">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(#4915ab_0%,#5f16dd_19.52%,#6d28bc_40.1%,#59239d_46.54%,#441d7e_52.77%,#30185f_59.1%,#1b1240_65.43%,#11112a_72.4%,#071013_100%)]"
      />
      <Container className="relative py-16 md:py-24">
        <h2 className="mx-auto max-w-[740px] text-center font-heading text-[36px] leading-[1.2] font-semibold tracking-[-0.015em] text-white md:text-[48px] md:leading-[57.6px]">
          Benefits of Smart LLM routing
          <br className="hidden md:block" /> for your business
        </h2>
        <p className="mx-auto mt-5 max-w-[720px] text-center text-base leading-6 text-[#EFF4F8] md:text-[18px] md:leading-[28px]">
          {routingBenefits.intro}
        </p>
        <RoutingSlider className="mt-10" ariaLabel="Smart LLM routing benefits">
          <div data-slide-track className="flex w-max gap-4">
            {routingBenefits.cards.map((card) => (
              <article
                key={card.id}
                data-slide
                className="flex w-[min(379px,calc(100vw-2rem))] shrink-0 snap-start flex-col overflow-hidden rounded-2xl bg-[#131921]"
              >
                <img
                  src={assetSrc(card.image)}
                  alt={card.imageAlt}
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
        </RoutingSlider>
      </Container>
    </section>
  );
}

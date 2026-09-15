import { reviewsCommunity } from "@/data/reviews";
import { productIllustrations } from "@/assets/products";
import { assetSrc } from "@/assets/home";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { ServersIcon } from "@/components/icons/UiIcons";
import {
  ReviewsGlobeIcon,
  ReviewsInboxIcon,
  ReviewsSparklesIcon,
} from "@/components/reviews/ReviewsIcons";

const icons = {
  globe: ReviewsGlobeIcon,
  servers: ServersIcon,
  inbox: ReviewsInboxIcon,
  sparkles: ReviewsSparklesIcon,
};

export function ReviewsCommunity() {
  return (
    <section id="community" className="relative overflow-hidden bg-page-dark py-16">
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0">
        <img
          src={assetSrc(productIllustrations.gridGlowBottomDark)}
          alt=""
          className="h-auto w-full object-cover object-bottom"
        />
      </div>
      <Container className="relative">
        <h2 className="text-center font-heading text-[36px] leading-[1.2] font-semibold tracking-[-0.015em] text-white md:text-[40px] md:leading-[48px] lg:text-[48px] lg:leading-[57.6px]">
          {reviewsCommunity.heading}
        </h2>
        <div className="mt-10 grid grid-cols-1 gap-y-8 sm:gap-x-4 md:grid-cols-2 lg:grid-cols-4">
          {reviewsCommunity.cards.map((card) => {
            const Icon = icons[card.icon];
            return (
              <article
                key={card.id}
                className="flex h-full flex-col gap-6 rounded-md border border-neutral-900 bg-[#131921] p-6"
              >
                <span className="flex h-fit w-fit rounded-sm bg-page-dark p-2 shadow-md">
                  <Icon className="size-6 text-accent" />
                </span>
                <div>
                  <h3 className="text-base font-semibold text-white">{card.title}</h3>
                  <p className="mt-2 text-sm leading-[21px] text-[#bfcbd4]">{card.body}</p>
                </div>
              </article>
            );
          })}
        </div>
        <div className="relative mt-10 flex justify-center">
          <Button
            type="button"
            variant="outline"
            className="border-neutral-200 bg-white text-neutral-900 hover:bg-white/90"
          >
            {reviewsCommunity.ctaLabel}
          </Button>
        </div>
      </Container>
    </section>
  );
}

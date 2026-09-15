import { assetSrc } from "@/assets/home";
import { listingGraphics } from "@/assets/customer-stories/listing";
import { customerStoriesHero } from "@/data/customer-stories/listing";
import { Container } from "@/components/layout/Container";

export function CustomerStoriesHero() {
  return (
    <section id="hero" className="bg-white pt-16 pb-16">
      <Container>
        <div className="flex flex-col gap-y-10">
          <div className="grid grid-cols-12 gap-y-8 sm:gap-x-8">
            <div className="col-span-12 lg:col-span-8 lg:col-start-3">
              <div className="flex flex-col gap-y-6">
                <p className="text-center text-base leading-6 font-medium text-accent">
                  {customerStoriesHero.eyebrow}
                </p>
                <h1 className="text-center font-heading text-[32px] leading-10 font-semibold tracking-[-0.256px] text-neutral-900 md:text-[48px] md:leading-[57.6px] md:tracking-[-0.015em]">
                  {customerStoriesHero.heading}
                </h1>
              </div>
            </div>
          </div>
          <picture>
            <source
              media="(max-width: 767px)"
              srcSet={assetSrc(listingGraphics.logoCarouselMobile)}
            />
            <img
              src={assetSrc(listingGraphics.logoCarouselDesktop)}
              alt={customerStoriesHero.logoAlt}
              width={1168}
              height={64}
              className="h-16 w-full object-contain"
            />
          </picture>
        </div>
      </Container>
    </section>
  );
}

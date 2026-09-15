import { assetSrc } from "@/assets/home";
import { listingGraphics } from "@/assets/customer-stories/listing";
import { customerStoriesCta } from "@/data/customer-stories/listing";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";

export function CustomerStoriesCta() {
  return (
    <section id="discover-banner" className="bg-white py-16">
      <Container>
        <div className="relative overflow-hidden rounded-md bg-page-dark">
          <picture className="pointer-events-none absolute inset-0">
            <source
              media="(max-width: 639px)"
              srcSet={assetSrc(listingGraphics.bannerMaskPurple)}
            />
            <img
              src={assetSrc(listingGraphics.bannerBlob)}
              alt=""
              className="h-full w-full object-cover object-center"
            />
          </picture>
          <div className="relative flex min-h-[280px] flex-col items-center justify-center gap-10 px-6 py-16 text-center sm:min-h-[392px] sm:p-16">
            <h2 className="max-w-[720px] font-heading text-[32px] leading-10 font-semibold tracking-[-0.256px] text-white md:text-[40px] md:leading-[48px]">
              {customerStoriesCta.heading}
            </h2>
            <Button
              href={customerStoriesCta.ctaHref}
              variant="primary"
              className="border-white bg-white text-neutral-900 hover:bg-neutral-100 hover:opacity-100"
            >
              {customerStoriesCta.ctaLabel}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}

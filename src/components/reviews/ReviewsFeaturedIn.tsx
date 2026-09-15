import { reviewsPressLogos, reviewsPressMobile } from "@/assets/reviews";
import { assetSrc } from "@/assets/home";
import { Container } from "@/components/layout/Container";

export function ReviewsFeaturedIn() {
  return (
    <section id="featured-in" className="bg-white py-16">
      <Container>
        <div className="flex flex-col items-center gap-4 text-center">
          <p className="text-base text-neutral-900">Featured in</p>
          <div className="hidden w-full flex-row items-center justify-between gap-x-4 md:flex">
            {reviewsPressLogos.map((logo) => (
              <span key={logo.id} className="flex flex-1 items-center justify-center">
                <img
                  src={assetSrc(logo.src)}
                  alt={logo.alt}
                  width={132}
                  height={60}
                  className="h-[60px] w-auto max-w-[132px] object-contain"
                />
              </span>
            ))}
          </div>
          <div className="w-full md:hidden">
            <img
              src={assetSrc(reviewsPressMobile)}
              alt="logo carousel press"
              className="mx-auto h-auto w-full max-w-[352px] object-contain"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}

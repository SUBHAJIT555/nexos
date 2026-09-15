import { homepageTrustedBy } from "@/data/homepage";
import { Container } from "@/components/layout/Container";
import { assetSrc, homeLogos } from "@/assets/home";

export function TrustedBy() {
  return (
    <section id="trusted-by-logo-strip" className="pt-0 pb-14">
      <Container>
        <div className="flex flex-col gap-y-4">
          <p className="text-center text-base font-medium leading-6 text-on-dark-muted">
            {homepageTrustedBy.caption}
          </p>
          <picture>
            <source media="(min-width: 768px)" srcSet={assetSrc(homeLogos.trustedWhite)} />
            {/* Combined SVG strip; next/image is not used for this vector. */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={assetSrc(homeLogos.trustedWhiteMobile)}
              alt=""
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

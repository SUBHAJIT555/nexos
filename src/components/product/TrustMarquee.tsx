import { Container } from "@/components/layout/Container";
import { assetSrc } from "@/assets/home";
import { productLogos } from "@/assets/products";
import { cn } from "@/lib/utils";

type TrustMarqueeProps = {
  caption: string;
  className?: string;
  desktopSrc?: string | { src: string };
  mobileSrc?: string | { src: string };
  alt?: string;
};

export function TrustMarquee({
  caption,
  className,
  desktopSrc = productLogos.customerStories,
  mobileSrc = productLogos.customerStoriesXs,
  alt = "Logos of companies that trust nexos.ai: Surfshark, NordVPN, payabl., Nord Security, Hostinger, Oxylabs, Payhawk",
}: TrustMarqueeProps) {
  return (
    <div className={cn("pt-8", className)}>
      <Container>
        <p className="text-center text-sm font-medium text-neutral-600 md:text-base">{caption}</p>
        <div className="mt-5 overflow-hidden">
          <picture>
            <source
              media="(max-width: 767px)"
              srcSet={assetSrc(mobileSrc)}
            />
            {/* Combined SVG strip; next/image does not add value for this asset. */}
            <img
              src={assetSrc(desktopSrc)}
              alt={alt}
              width={1168}
              height={64}
              className="h-12 w-full object-contain"
            />
          </picture>
        </div>
      </Container>
    </div>
  );
}

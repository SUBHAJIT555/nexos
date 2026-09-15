import { assetSrc, blogCtaGraphics } from "@/assets/blog";
import { Button } from "@/components/ui/Button";

export function BlogCTA({
  heading,
  body,
  ctaLabel,
  ctaHref,
}: {
  heading: string;
  body: string;
  ctaLabel: string;
  ctaHref: string;
}) {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="relative overflow-hidden">
        <picture className="pointer-events-none absolute inset-0">
          <source media="(max-width: 767px)" srcSet={assetSrc(blogCtaGraphics.gridXs)} />
          {/* Background art matches the live article CTA picture/source pair. */}
          <img
            src={assetSrc(blogCtaGraphics.gridXl)}
            alt=""
            className="h-full w-full object-cover object-center"
          />
        </picture>
        <div className="relative flex min-h-[280px] flex-col items-center justify-center gap-6 px-6 py-16 text-center md:min-h-[360px] md:px-16">
          <h2 className="max-w-[720px] font-heading text-[32px] leading-10 font-semibold tracking-[-0.256px] text-neutral-900 md:text-[40px] md:leading-[48px]">
            {heading}
          </h2>
          <p className="max-w-[560px] text-base leading-6 text-neutral-700 md:text-[20px] md:leading-[30px]">
            {body}
          </p>
          <Button href={ctaHref} variant="primary">
            {ctaLabel}
          </Button>
        </div>
      </div>
    </section>
  );
}

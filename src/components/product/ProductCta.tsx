import type { ReactNode } from "react";
import { Container } from "@/components/layout/Container";
import { Button, type ButtonVariant } from "@/components/ui/Button";
import { assetSrc } from "@/assets/home";
import { productIllustrations } from "@/assets/products";
import type { ProductLink } from "@/data/products/types";
import { cn } from "@/lib/utils";

type ProductCtaProps = {
  heading: string;
  body?: string;
  primary: ProductLink;
  secondary?: ProductLink;
  className?: string;
  children?: ReactNode;
  primaryVariant?: ButtonVariant;
  primaryClassName?: string;
};

export function ProductCta({
  heading,
  body,
  primary,
  secondary,
  className,
  children,
  primaryVariant = "hero",
  primaryClassName,
}: ProductCtaProps) {
  return (
    <section className={cn("relative py-28 text-center md:py-56", className)}>
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-page-dark" />
      <picture className="pointer-events-none absolute inset-0">
        <source
          media="(max-width: 767px)"
          srcSet={assetSrc(productIllustrations.gridGlowBottomDarkXs)}
        />
        {/* Decorative CTA grid; next/image does not add value for this asset. */}
        <img
          src={assetSrc(productIllustrations.gridGlowBottomDark)}
          alt=""
          className="h-full w-full object-cover object-bottom"
        />
      </picture>
      <Container className="relative">
        <h2 className="mx-auto max-w-[768px] font-heading text-[36px] leading-[1.2] font-semibold tracking-[-0.015em] text-white md:text-[48px] md:leading-[57.6px]">
          {heading}
        </h2>
        {body ? (
          <p className="mx-auto mt-5 max-w-[768px] text-[18px] leading-[28px] text-on-dark md:text-[20px] md:leading-[30px]">
            {body}
          </p>
        ) : null}
        <div className="mt-8 flex flex-col items-center justify-center gap-4 md:flex-row">
          <Button href={primary.href} variant={primaryVariant} className={cn("w-full md:w-fit", primaryClassName)}>
            {primary.label}
          </Button>
          {secondary ? (
            <Button href={secondary.href} variant="primary" className="w-full md:w-fit">
              {secondary.label}
            </Button>
          ) : null}
        </div>
        {children}
      </Container>
    </section>
  );
}

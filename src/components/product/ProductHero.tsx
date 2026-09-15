import type { ReactNode } from "react";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { CheckList } from "@/components/product/IntegrationsBand";
import { TrustMarquee } from "@/components/product/TrustMarquee";
import type { ProductLink } from "@/data/products/types";
import { cn } from "@/lib/utils";

type ProductHeroProps = {
  heading: ReactNode;
  body?: string;
  bullets?: string[];
  primary: ProductLink;
  secondary?: ProductLink;
  guarantee?: string;
  visual: ReactNode;
  trustCaption?: string;
  infoControl?: ReactNode;
  align?: "left" | "center";
  className?: string;
};

export function ProductHero({
  heading,
  body,
  bullets,
  primary,
  secondary,
  guarantee,
  visual,
  trustCaption,
  infoControl,
  align = "left",
  className,
}: ProductHeroProps) {
  return (
    <section className={cn("relative overflow-hidden bg-white pt-10 pb-8 md:pt-16 md:pb-12", className)}>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-64 bg-[radial-gradient(ellipse_70%_80%_at_80%_0%,rgb(107_62_255_/_0.12),transparent_60%)]"
      />
      <Container className="relative">
        <div
          className={cn(
            "grid items-center gap-10",
            align === "left" ? "lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]" : "",
          )}
        >
          <div className={cn(align === "center" && "mx-auto max-w-[741px] text-center")}>
            <h1 className="font-heading text-[36px] leading-[1.15] font-semibold tracking-[-0.02em] text-neutral-900 md:text-[48px] md:leading-[57.6px]">
              {heading}
            </h1>
            {body ? (
            <p
              className={cn(
                "mt-5 text-[18px] leading-[28px] text-neutral-700 md:text-[20px] md:leading-[30px]",
                align === "center" && "mx-auto max-w-[640px]",
              )}
            >
              {body}
            </p>
            ) : null}
            {bullets ? <CheckList items={bullets} /> : null}
            <div
              className={cn(
                "mt-8 flex flex-col gap-3 sm:flex-row sm:items-center",
                align === "center" && "justify-center",
              )}
            >
              <Button href={primary.href} variant="hero" className="w-full sm:w-fit">
                {primary.label}
              </Button>
              {secondary ? (
                <Button href={secondary.href} variant="outline" className="w-full sm:w-fit">
                  {secondary.label}
                </Button>
              ) : null}
            </div>
            {guarantee ? (
              <p className="mt-3 text-sm text-neutral-600">{guarantee}</p>
            ) : null}
            {infoControl ? <div className="mt-5">{infoControl}</div> : null}
          </div>
          <div className={cn(align === "center" && "mx-auto mt-8 w-full max-w-[720px]")}>{visual}</div>
        </div>
      </Container>
      {trustCaption ? <TrustMarquee caption={trustCaption} /> : null}
    </section>
  );
}

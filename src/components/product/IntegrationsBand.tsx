import { ArrowRight } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { assetSrc } from "@/assets/home";
import { productIcons, productLogos } from "@/assets/products";
import { integrationsCopy } from "@/data/products/shared";
import type { ProductLink } from "@/data/products/types";

type IntegrationsBandProps = {
  heading?: string;
  body?: string;
  eyebrow?: string;
  cta?: ProductLink;
  align?: "split" | "center";
};

export function IntegrationsBand({
  heading = integrationsCopy.heading,
  body = integrationsCopy.body,
  eyebrow = integrationsCopy.eyebrow,
  cta = integrationsCopy.cta,
  align = "split",
}: IntegrationsBandProps) {
  return (
    <section className="bg-white py-16 md:py-24">
      <Container>
        {align === "center" ? (
          <div className="flex flex-col items-center gap-10 text-center">
            <h2 className="font-heading text-[36px] leading-[1.2] font-semibold tracking-[-0.015em] text-neutral-900 md:text-[48px] md:leading-[57.6px]">
              {heading}
            </h2>
            <p className="max-w-[768px] text-base leading-6 text-neutral-700">{body}</p>
            <div aria-hidden="true" className="w-full">
              <picture>
                <source
                  media="(max-width: 767px)"
                  srcSet={assetSrc(productLogos.integrationsCarouselSm)}
                />
                <img
                  src={assetSrc(productLogos.integrationsCarousel)}
                  alt=""
                  width={800}
                  height={400}
                  className="h-auto w-full"
                />
              </picture>
            </div>
            <Button href={cta.href} variant="primary">
              {cta.label}
            </Button>
          </div>
        ) : (
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,520px)]">
          <div>
            <p className="text-sm font-medium tracking-[0.04em] text-neutral-600 uppercase">
              {eyebrow}
            </p>
            <h2 className="mt-3 font-heading text-[36px] leading-[1.2] font-semibold tracking-[-0.015em] text-neutral-900 md:text-[48px] md:leading-[57.6px]">
              {heading}
            </h2>
            <p className="mt-5 max-w-[560px] text-base leading-6 text-neutral-700">
              {body}
            </p>
            <Button
              href={cta.href}
              variant="outline"
              iconPosition="end"
              icon={<ArrowRight className="size-4" />}
              className="mt-8"
            >
              {cta.label}
            </Button>
          </div>
          <div aria-hidden="true">
            <picture>
              <source
                media="(max-width: 767px)"
                srcSet={assetSrc(productLogos.integrationsCarouselSm)}
              />
              {/* Combined SVG strip; next/image does not add value for this asset. */}
              <img
                src={assetSrc(productLogos.integrationsCarousel)}
                alt=""
                width={800}
                height={400}
                className="h-auto w-full"
              />
            </picture>
          </div>
        </div>
        )}
      </Container>
    </section>
  );
}

export function CheckList({ items }: { items: string[] }) {
  return (
    <ul className="mt-6 space-y-3">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3 text-base text-neutral-800">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={assetSrc(productIcons.checkRound)}
            alt=""
            width={16}
            height={16}
            className="mt-0.5 size-4 shrink-0"
          />
          {item}
        </li>
      ))}
    </ul>
  );
}

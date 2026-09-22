import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { reviewsWhy, type ReviewRichSegment } from "@/data/reviews";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { cn, isExternalHref } from "@/lib/utils";

export function ReviewsRichText({ segments }: { segments: readonly ReviewRichSegment[] }) {
  return (
    <>
      {segments.map((segment, index) => {
        if (typeof segment === "string") {
          return <span key={index}>{segment}</span>;
        }

        if (isExternalHref(segment.href)) {
          return (
            <a
              key={`${segment.href}-${index}`}
              href={segment.href}
              className="text-accent hover:text-[var(--accent-hover)]"
              target="_blank"
              rel="noopener noreferrer"
            >
              {segment.label}
            </a>
          );
        }

        return (
          <Link
            key={`${segment.href}-${index}`}
            href={segment.href}
            className="text-accent hover:text-[var(--accent-hover)]"
          >
            {segment.label}
          </Link>
        );
      })}
    </>
  );
}

export function ReviewsWhy() {
  return (
    <section id="why-nexeco-ai" className="bg-white py-16">
      <Container>
        <div className="mx-auto max-w-[768px] text-center">
          <h2 className="font-heading text-[36px] leading-[1.2] font-semibold tracking-[-0.015em] text-neutral-900 md:text-[40px] md:leading-[48px]">
            {reviewsWhy.heading}
          </h2>
          <p className="mt-5 text-base leading-6 text-neutral-700 md:text-[18px] md:leading-[28px]">
            {reviewsWhy.body}
          </p>
        </div>

        <div className="mt-16 flex flex-col gap-16 md:mt-24 md:gap-24">
          {reviewsWhy.blocks.map((row) => (
            <article
              key={row.id}
              className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16"
            >
              <div className={cn(row.visual === "right" && "lg:order-2")}>
                <Image
                  src={row.image}
                  alt={row.imageAlt}
                  sizes="(min-width: 1024px) 568px, 100vw"
                  className="h-auto w-full"
                />
              </div>
              <div className={cn(row.visual === "right" && "lg:order-1")}>
                <h3 className="max-w-[568px] font-heading text-[32px] leading-[1.2] font-semibold tracking-[-0.015em] text-neutral-900 md:text-[40px] md:leading-[48px]">
                  {row.title}
                </h3>
                <p className="mt-5 max-w-[568px] text-base leading-6 text-neutral-700 md:text-[18px] md:leading-[28px]">
                  <ReviewsRichText segments={row.body} />
                </p>
                {"cta" in row && row.cta ? (
                  <Button
                    href={row.cta.href}
                    variant="ghost"
                    iconPosition="end"
                    icon={<ArrowRight className="size-4" />}
                    className="mt-8 px-0 text-accent hover:opacity-80"
                  >
                    {row.cta.label}
                  </Button>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

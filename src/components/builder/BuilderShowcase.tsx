import Image from "next/image";
import Link from "next/link";
import { assetSrc } from "@/assets/home";
import { productCertBadges } from "@/assets/products";
import { Container } from "@/components/layout/Container";
import { BuilderIntroVideo } from "@/components/builder/BuilderIntroVideo";
import { builderFeatures, builderIntro, builderSecurity } from "@/data/products/builder";
import type { RichSegment } from "@/data/products/types";
import { cn, isExternalHref } from "@/lib/utils";

function RichBody({ segments }: { segments: RichSegment[] }) {
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
          <Link key={`${segment.href}-${index}`} href={segment.href} className="text-accent hover:text-[var(--accent-hover)]">{segment.label}</Link>
        );
      })}
    </>
  );
}

export function BuilderShowcase() {
  const certs = productCertBadges.slice(0, 3);

  return (
    <section className="bg-white py-16">
      <Container>
        <div className="mx-auto mb-6 max-w-[768px] text-center">
          <h2 className="font-heading text-[36px] leading-[1.2] font-semibold tracking-[-0.015em] text-neutral-900 md:text-[40px] md:leading-[48px]">
            {builderIntro.heading}
          </h2>
        </div>
        <p className="mx-auto max-w-[768px] text-center text-base leading-6 text-neutral-700">
          {builderIntro.body}
        </p>

        <div className="mt-10 min-w-0">
          <BuilderIntroVideo />
        </div>

        <div className="mt-10 flex flex-col gap-10">
          {builderFeatures.map((row) => (
            <article key={row.id} className="grid items-center gap-8 md:grid-cols-2">
              <div className={cn("flex min-w-0 items-center justify-center", row.visual === "right" && "md:order-2")}>
                <Image
                  src={row.image}
                  alt={row.alt}
                  sizes="(min-width: 768px) 568px, 100vw"
                  className="h-auto w-full max-w-[568px] overflow-hidden rounded-[24px]"
                />
              </div>
              <div className={cn("flex h-full min-w-0 flex-col justify-center gap-4", row.visual === "right" && "md:order-1")}>
                <div className="inline-flex w-fit rounded-full bg-[#F5F3FC] px-3 py-1 text-xs font-medium leading-[18px] text-accent">
                  {row.eyebrow}
                </div>
                <h3 className="font-heading text-[32px] leading-[1.2] font-semibold tracking-[-0.015em] text-neutral-900 md:text-[40px] md:leading-[48px]">
                  {row.title}
                </h3>
                <p className="text-base leading-6 text-neutral-700">
                  <RichBody segments={row.body} />
                </p>
              </div>
            </article>
          ))}

          <div
            className="grid items-center gap-8 overflow-hidden rounded-[16px] p-4 md:grid-cols-2 md:px-8"
            style={{
              backgroundImage:
                "radial-gradient(101.76% 707.44% at 100% 50%, rgb(194, 172, 251) 0%, rgb(248, 250, 252) 56.73%)",
            }}
          >
            <div className="flex flex-col justify-center gap-4 p-4">
              <h3 className="font-heading text-[24px] leading-[29px] font-semibold text-neutral-900">
                {builderSecurity.title}
              </h3>
              <p className="text-base leading-6 text-neutral-700">{builderSecurity.body}</p>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-6 py-2 md:justify-end">
              {certs.map((badge) => (
                <img
                  key={badge.id}
                  src={assetSrc(badge.src)}
                  alt={badge.alt}
                  width={92}
                  height={132}
                  className="h-[110px] w-auto"
                />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

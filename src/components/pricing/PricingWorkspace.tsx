"use client";

import { Fragment, useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { CloudCheckIcon, FileShieldIcon, KeyIcon } from "@/components/icons/UiIcons";
import { assetSrc } from "@/assets/home";
import { homePortraits } from "@/assets/home";
import { pricingImages } from "@/assets/pricing";
import { productCertBadges, productLogos } from "@/assets/products";
import { cn } from "@/lib/utils";
import {
  workspaceCredits,
  workspaceIntegrations,
  workspaceSecurity,
  workspaceTestimonials,
  workspaceToolCompare,
  workspaceWork,
} from "@/data/pricing";
import {
  PricingFeatureIcon,
  PricingOutlineCheck,
  PricingToolCompareHeaderIcon,
  PricingToolX,
} from "@/components/pricing/PricingIcons";

const CARD_GAP_PX = 24;

const securityIcons = {
  "file-shield": FileShieldIcon,
  key: KeyIcon,
  cloud: CloudCheckIcon,
} as const;

export function PricingIntegrations() {
  return (
    <section id="integrations" className="bg-white py-16 md:py-24">
      <Container>
        <h2 className="text-center font-heading text-[36px] leading-[1.2] font-semibold tracking-[-0.015em] text-neutral-900 md:text-[48px] md:leading-[57.6px]">
          {workspaceIntegrations.heading}
        </h2>
        <div className="mt-10">
          <picture>
            <source media="(max-width: 767px)" srcSet={assetSrc(productLogos.integrationsCarouselSm)} />
            <img
              src={assetSrc(productLogos.integrationsCarousel)}
              alt="Integration logos"
              width={1440}
              height={140}
              className="h-auto w-full"
            />
          </picture>
        </div>
      </Container>
    </section>
  );
}

export function PricingCredits() {
  return (
    <section id="credits-banner" className="bg-white pb-8 md:pb-12">
      <Container>
        <div className="relative overflow-hidden rounded-[28px] border border-[#dbe4eb] bg-[linear-gradient(180deg,#ffffff_40%,#f3eeff_100%)] px-8 py-10 md:px-12 md:py-12">
          <img
            src={assetSrc(pricingImages.bannerLightGlow)}
            alt=""
            className="pointer-events-none absolute inset-0 h-full w-full object-cover object-right"
          />
          <div className="relative grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)]">
            <div>
              <h2 className="max-w-[420px] font-heading text-[32px] leading-[1.2] font-semibold tracking-[-0.02em] text-neutral-900 md:text-[40px]">
                {workspaceCredits.heading}
              </h2>
              <p className="mt-4 max-w-[420px] text-base leading-6 text-[#65717B]">
                {workspaceCredits.body}
              </p>
              <Button href={workspaceCredits.cta.href} variant="primary" className="mt-8">
                {workspaceCredits.cta.label}
              </Button>
            </div>
            <ul className="flex flex-col gap-5">
              {workspaceCredits.bullets.map((bullet) => (
                <li key={bullet.label} className="flex items-start gap-3 text-base leading-6 text-neutral-900">
                  <PricingFeatureIcon name={bullet.icon} className="mt-0.5 size-4 text-accent" />
                  <span>{bullet.label}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}

export function PricingWork() {
  return (
    <section id="turn-repetitive-work-into-ai-work" className="bg-white py-16 md:py-24">
      <Container>
        <h2 className="text-center font-heading text-[36px] leading-[1.2] font-semibold tracking-[-0.015em] text-neutral-900 md:text-[48px] md:leading-[57.6px]">
          {workspaceWork.heading}
        </h2>
        <p className="mx-auto mt-4 max-w-[640px] text-center text-base leading-6 text-[#65717B]">
          {workspaceWork.body}
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {workspaceWork.items.map((item) => (
            <article
              key={item.id}
              className="rounded-3xl border border-[#dbe4eb] bg-[#F8FAFC] p-8"
            >
              <span
                className="flex size-11 items-center justify-center rounded-xl"
                style={{ backgroundColor: item.iconBg, color: item.iconColor }}
              >
                <PricingFeatureIcon name={item.icon} className="size-5" />
              </span>
              <h3 className="mt-6 font-heading text-[22px] leading-[28.6px] font-semibold text-neutral-900">
                {item.title}
              </h3>
              <p className="mt-2 text-base leading-6 text-[#65717B]">{item.body}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

function ToolCell({
  cell,
}: {
  cell: (typeof workspaceToolCompare.rows)[number]["cells"][number];
}) {
  if (cell.kind === "check-accent") {
    return <PricingOutlineCheck className="text-accent" />;
  }
  if (cell.kind === "check-muted") {
    return <PricingOutlineCheck className="text-[#8193A2]" />;
  }
  if (cell.kind === "x") {
    return <PricingToolX />;
  }
  return <span className="text-sm text-[#65717B]">{cell.value}</span>;
}

export function PricingToolCompare() {
  const totalRows = workspaceToolCompare.rows.length + 1;

  return (
    <section id="compare-with-other-ai-tools" className="bg-white py-16 md:py-24">
      <Container>
        <h2 className="mx-auto max-w-[720px] text-center font-heading text-[36px] leading-[1.2] font-semibold tracking-[-0.015em] text-neutral-900 md:text-[48px] md:leading-[57.6px]">
          {workspaceToolCompare.headingBefore}
          <span className="text-accent">{workspaceToolCompare.headingAccent}</span>
          {workspaceToolCompare.headingAfter}
        </h2>
        <p className="mx-auto mt-5 max-w-[720px] text-center text-base leading-6 text-[#65717B]">
          {workspaceToolCompare.body}
        </p>

        <div className="mx-auto mt-10 max-w-[1200px]">
          <div className="overflow-x-auto md:overflow-x-visible">
            <div
              className="relative grid w-full min-w-[860px]"
              style={{
                gridTemplateColumns: "minmax(0, 1.8fr) repeat(4, minmax(0, 1fr))",
                gridTemplateRows: `repeat(${totalRows}, auto)`,
              }}
            >
              <div
                aria-hidden="true"
                className="relative z-[1] rounded-md border border-accent bg-[#F5F3FC]"
                style={{ gridColumn: "2 / 3", gridRow: `1 / ${totalRows + 1}` }}
              />

              {workspaceToolCompare.rows.map((_, index) => (
                <div
                  key={`row-bg-${index}`}
                  aria-hidden="true"
                  className={cn("rounded-md", index % 2 === 0 ? "bg-[#F8FAFC]" : "bg-white")}
                  style={{ gridColumn: "1 / -1", gridRow: index + 2, zIndex: 0 }}
                />
              ))}

              <div className="relative z-[3] px-6 py-5" style={{ gridColumn: 1, gridRow: 1 }} />
              {workspaceToolCompare.columns.map((column, columnIndex) => (
                <div
                  key={column.id}
                  className={cn(
                    "relative z-10 flex items-center justify-center gap-2 px-6 py-5 text-sm font-semibold",
                    columnIndex === 0 ? "text-neutral-900" : "text-[#65717B]",
                  )}
                  style={{ gridColumn: columnIndex + 2, gridRow: 1 }}
                >
                  <PricingToolCompareHeaderIcon
                    id={column.id as "nexos" | "chatgpt" | "perplexity" | "lindy"}
                  />
                  <span>{column.label}</span>
                </div>
              ))}

              {workspaceToolCompare.rows.map((row, index) => {
                const gridRow = index + 2;
                return (
                  <Fragment key={row.label}>
                    <div
                      className="relative z-[2] flex flex-col justify-center gap-2 py-4 pl-6 pr-4"
                      style={{ gridColumn: 1, gridRow }}
                    >
                      <span className="inline-flex flex-wrap items-center gap-2 text-sm text-neutral-900">
                        <span>{row.label}</span>
                      </span>
                      {row.icons === "models" ? (
                        <span className="inline-flex flex-wrap items-center gap-1">
                          <img
                            src={assetSrc(pricingImages.tableModelIcons)}
                            alt="AI model logos"
                            width={216}
                            height={48}
                            className="block h-5 w-auto"
                          />
                        </span>
                      ) : null}
                      {row.icons === "tools" ? (
                        <span className="inline-flex flex-wrap items-center gap-1">
                          <img
                            src={assetSrc(pricingImages.tableToolIcons)}
                            alt="Work tool integration logos"
                            width={258}
                            height={48}
                            className="block h-5 w-auto"
                          />
                        </span>
                      ) : null}
                    </div>
                    {row.cells.map((cell, cellIndex) => (
                      <div
                        key={`${row.label}-${cellIndex}`}
                        className={cn(
                          "relative flex items-center justify-center px-6 py-4 text-center text-sm",
                          cellIndex === 0 ? "z-10" : "z-[2]",
                        )}
                        style={{ gridColumn: cellIndex + 2, gridRow }}
                      >
                        <ToolCell cell={cell} />
                      </div>
                    ))}
                  </Fragment>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export function PricingSecurity() {
  return (
    <section id="your-data-is-always-secure" className="bg-white py-16 md:py-24">
      <Container>
        <p className="mb-6 text-base font-semibold leading-6 text-[#8193A2]">
          {workspaceSecurity.eyebrow}
        </p>
        <h2 className="max-w-[1168px] font-heading text-[36px] leading-[1.2] font-semibold tracking-[-0.015em] text-neutral-900 md:text-[48px] md:leading-[57.6px]">
          {workspaceSecurity.heading}
        </h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {workspaceSecurity.cards.map((card) => {
            const Icon = securityIcons[card.icon];
            return (
              <article
                key={card.id}
                className="flex h-full flex-col gap-6 rounded-3xl border border-[#dbe4eb] bg-[linear-gradient(to_top,#ffffff,#f8fafc)] p-8"
              >
                <span className="flex h-fit w-fit items-center justify-center rounded-lg border border-[#dbe4eb] bg-white p-3 text-accent shadow-[0_0_0_1px_rgba(56,60,67,0.05),0_1px_3px_rgba(56,60,67,0.15)]">
                  <Icon className="size-8" />
                </span>
                <h3 className="font-heading text-[22px] leading-[28.6px] font-semibold text-neutral-900">
                  {card.title}
                </h3>
                <p className="text-base leading-6 text-[#65717B]">{card.body}</p>
              </article>
            );
          })}
        </div>
        <article className="mt-6 flex flex-col gap-6 rounded-3xl border border-[#dbe4eb] bg-[linear-gradient(180deg,#F8FAFC_28.37%,#D0C5FD_100%)] p-8 md:flex-row md:items-center md:justify-between">
          <div>
            <h3 className="font-heading text-[22px] leading-[28.6px] font-semibold text-neutral-900">
              {workspaceSecurity.compliance.title}
            </h3>
            <p className="mt-2 text-base leading-6 text-[#65717B]">
              {workspaceSecurity.compliance.body}
            </p>
          </div>
          <div className="flex shrink-0 items-end gap-4">
            {productCertBadges.slice(0, 3).map((badge) => (
              <img
                key={badge.id}
                src={assetSrc(badge.src)}
                alt={badge.alt}
                width={42}
                height={61}
                className="h-[61px] w-[42px] object-contain"
              />
            ))}
          </div>
        </article>
      </Container>
    </section>
  );
}

export function PricingTestimonials() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState({
    left: 0,
    width: 33.3333,
    atStart: true,
    atEnd: false,
  });

  const syncProgress = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    const max = Math.max(0, el.scrollWidth - el.clientWidth);
    const width = el.scrollWidth > 0 ? (el.clientWidth / el.scrollWidth) * 100 : 33.3333;
    const left = el.scrollWidth > 0 ? (el.scrollLeft / el.scrollWidth) * 100 : 0;
    setProgress({
      left,
      width,
      atStart: el.scrollLeft <= 1,
      atEnd: max <= 1 || el.scrollLeft >= max - 1,
    });
  }, []);

  useEffect(() => {
    syncProgress();
    const el = trackRef.current;
    if (!el) return;
    const observer = new ResizeObserver(syncProgress);
    observer.observe(el);
    window.addEventListener("resize", syncProgress);
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", syncProgress);
    };
  }, [syncProgress]);

  function step(direction: -1 | 1) {
    const el = trackRef.current;
    if (!el) return;
    const firstCard = el.querySelector("li");
    const cardWidth = firstCard instanceof HTMLElement ? firstCard.offsetWidth : 360;
    el.scrollTo({
      left: el.scrollLeft + direction * (cardWidth + CARD_GAP_PX),
      behavior: "smooth",
    });
  }

  return (
    <section id="testimonials" className="bg-white py-16 md:py-24">
      <Container>
        <p className="mb-6 text-base font-semibold leading-6 text-[#8193A2]">
          {workspaceTestimonials.eyebrow}
        </p>
        <h2 className="font-heading text-[36px] leading-[1.2] font-semibold tracking-[-0.015em] text-neutral-900 md:text-[48px] md:leading-[57.6px]">
          {workspaceTestimonials.heading}
        </h2>
        <div className="mt-8">
          <picture>
            <source media="(max-width: 767px)" srcSet={assetSrc(productLogos.customerStoriesXs)} />
            <img
              src={assetSrc(productLogos.customerStories)}
              alt=""
              className="h-auto w-full"
            />
          </picture>
        </div>

        <div
          ref={trackRef}
          onScroll={syncProgress}
          className="mt-8 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {workspaceTestimonials.slides.map((slide) => (
            <article
              key={slide.id}
              className="flex w-[min(100%,373px)] shrink-0 snap-start flex-col rounded-3xl border border-[#dbe4eb] bg-white p-6 md:min-h-[406px] md:p-8"
            >
              <span
                className={cn(
                  "inline-flex w-fit rounded-full px-3 py-1 text-xs font-medium",
                  slide.badgeTone === "mint"
                    ? "bg-[#E3FCEC] text-[#0C7E67]"
                    : "bg-[#EEE9FF] text-[#6B3EFF]",
                )}
              >
                {slide.badge}
              </span>
              <p className="mt-6 flex-1 text-base leading-6 text-neutral-900">{slide.quote}</p>
              <div className="mt-6 flex items-center gap-3">
                <Image
                  src={homePortraits[slide.portrait]}
                  alt={slide.name}
                  width={48}
                  height={48}
                  className="size-12 rounded-full object-cover"
                />
                <div>
                  <div className="text-sm font-semibold text-neutral-900">{slide.name}</div>
                  <div className="text-sm text-[#65717B]">{slide.role}</div>
                  <div className="text-sm text-[#65717B]">{slide.company}</div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-6 flex items-center gap-3">
          <button
            type="button"
            aria-label="Previous slide"
            disabled={progress.atStart}
            onClick={() => step(-1)}
            className={cn(
              "flex size-10 items-center justify-center rounded-full border border-[#dbe4eb] bg-[#F1F4F7] text-neutral-900",
              progress.atStart && "opacity-40",
            )}
          >
            <span aria-hidden="true">←</span>
          </button>
          <button
            type="button"
            aria-label="Next slide"
            disabled={progress.atEnd}
            onClick={() => step(1)}
            className={cn(
              "flex size-10 items-center justify-center rounded-full bg-accent text-white",
              progress.atEnd && "opacity-40",
            )}
          >
            <span aria-hidden="true">→</span>
          </button>
          <div className="relative ml-2 h-[3px] flex-1 overflow-hidden rounded-full bg-[#E6ECF1]">
            <span
              className="absolute top-0 h-full rounded-full bg-accent"
              style={{ left: `${progress.left}%`, width: `${progress.width}%` }}
            />
          </div>
        </div>
      </Container>
    </section>
  );
}

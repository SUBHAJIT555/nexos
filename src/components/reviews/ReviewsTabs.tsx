"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState, type PointerEvent, type ReactNode } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { assetSrc } from "@/assets/home";
import { reviewsPortraits } from "@/assets/reviews";
import {
  reviewsAwards,
  reviewsEvents,
  reviewsFeaturedColumns,
  reviewsIntro,
  reviewsPodcastColumns,
  reviewsTabs,
  reviewsUserBadgeStyle,
  reviewsUsers,
  type ReviewQuoteCard,
  type ReviewsTabId,
  type ReviewUserBadge,
} from "@/data/reviews";
import { Container } from "@/components/layout/Container";
import {
  ReviewsCalendarIcon,
  ReviewsCubeIcon,
  ReviewsMegaphoneIcon,
  ReviewsQaIcon,
  ReviewsTrendIcon,
  ReviewsUsersIcon,
} from "@/components/reviews/ReviewsIcons";
import { cn } from "@/lib/utils";

const CARD_GAP_PX = 32;

const quoteCardClass =
  "flex w-full flex-col gap-4 rounded-2xl border border-neutral-300 bg-white p-6 shadow-[0_0_0_1px_rgba(56,60,67,0.05),0_1px_3px_rgba(56,60,67,0.15)]";

function isSvgAsset(src: ReviewQuoteCard["logo"]) {
  return typeof src === "string" || src.src.endsWith(".svg");
}

function QuoteCard({ card }: { card: ReviewQuoteCard }) {
  const isSvg = isSvgAsset(card.logo);

  return (
    <article className={quoteCardClass}>
      {isSvg ? (
        <img
          src={assetSrc(card.logo)}
          alt={card.logoAlt}
          className={cn("object-contain object-left", card.logoHeightClass)}
        />
      ) : (
        <Image
          src={card.logo}
          alt={card.logoAlt}
          className={cn("object-contain object-left", card.logoHeightClass)}
        />
      )}
      {card.title ? (
        <h3 className="font-heading text-[24px] leading-[1.2] font-semibold tracking-[-0.015em] text-neutral-900">
          {card.title}
        </h3>
      ) : null}
      <p className="text-base leading-6 text-neutral-700">{card.quote}</p>
    </article>
  );
}

function QuoteColumns({ columns }: { columns: ReviewQuoteCard[][] }) {
  return (
    <div className="grid grid-cols-1 gap-y-8 sm:gap-x-8 md:grid-cols-2 lg:grid-cols-3">
      {columns.map((column, index) => (
        <div key={index} className="flex h-full flex-col gap-y-6">
          {column.map((card) => (
            <QuoteCard key={card.id} card={card} />
          ))}
        </div>
      ))}
    </div>
  );
}

function BadgeIcon({ name }: { name: ReviewUserBadge }) {
  const className = "size-4 shrink-0";
  if (name === "marketing") return <ReviewsMegaphoneIcon className={className} />;
  if (name === "hr") return <ReviewsUsersIcon className={className} />;
  if (name === "operations") return <ReviewsTrendIcon className={className} />;
  if (name === "product") return <ReviewsCubeIcon className={className} />;
  return <ReviewsQaIcon className={className} />;
}

function UsersCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const dragRef = useRef({
    active: false,
    startX: 0,
    startScroll: 0,
    moved: false,
  });
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
    const cardWidth = firstCard instanceof HTMLElement ? firstCard.offsetWidth : 368;
    el.scrollTo({
      left: el.scrollLeft + direction * (cardWidth + CARD_GAP_PX),
      behavior: "smooth",
    });
  }

  function onPointerDown(event: PointerEvent<HTMLDivElement>) {
    const el = trackRef.current;
    if (!el) return;
    dragRef.current = {
      active: true,
      startX: event.clientX,
      startScroll: el.scrollLeft,
      moved: false,
    };
    el.setPointerCapture(event.pointerId);
  }

  function onPointerMove(event: PointerEvent<HTMLDivElement>) {
    const el = trackRef.current;
    if (!el || !dragRef.current.active) return;
    const delta = event.clientX - dragRef.current.startX;
    if (Math.abs(delta) > 4) dragRef.current.moved = true;
    el.scrollLeft = dragRef.current.startScroll - delta;
  }

  function onPointerUp(event: PointerEvent<HTMLDivElement>) {
    const el = trackRef.current;
    dragRef.current.active = false;
    if (!el) return;
    if (el.hasPointerCapture(event.pointerId)) {
      el.releasePointerCapture(event.pointerId);
    }
    const firstCard = el.querySelector("li");
    const cardWidth = firstCard instanceof HTMLElement ? firstCard.offsetWidth : 368;
    const next = Math.round(el.scrollLeft / (cardWidth + CARD_GAP_PX)) * (cardWidth + CARD_GAP_PX);
    el.scrollTo({ left: next, behavior: "smooth" });
  }

  return (
    <div>
      <div
        ref={trackRef}
        className="no-scrollbar cursor-grab overflow-x-auto overscroll-x-contain snap-x snap-mandatory select-none active:cursor-grabbing"
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
        onScroll={syncProgress}
      >
        <ul className="flex w-max items-stretch gap-8">
          {reviewsUsers.map((item) => {
            const style = reviewsUserBadgeStyle[item.badge];
            return (
              <li
                key={item.id}
                className="w-[min(368px,calc(100vw-2rem))] shrink-0 snap-start overflow-hidden rounded-2xl border border-neutral-200 bg-white"
              >
                <div className="flex h-full flex-col gap-6 p-6">
                  <span
                    className="inline-flex w-fit items-center gap-4 rounded-3xl px-4 py-2 text-sm font-medium"
                    style={{ backgroundColor: style.bg, color: style.color }}
                  >
                    <BadgeIcon name={item.badge} />
                    {item.badgeLabel}
                  </span>
                  <div className="flex flex-row items-center gap-2">
                    <Image
                      src={reviewsPortraits[item.id]}
                      alt={item.name}
                      width={48}
                      height={48}
                      draggable={false}
                      className="size-12 rounded-full object-cover"
                    />
                    <div className="flex flex-col">
                      <div className="text-base leading-6 font-semibold text-neutral-900">
                        {item.name}
                      </div>
                      <p className="text-sm leading-[21px] text-neutral-600">{item.role}</p>
                      <p className="text-sm leading-[21px] text-neutral-600">{item.company}</p>
                    </div>
                  </div>
                  <p className="text-base leading-6 text-neutral-700">{item.quote}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="mt-10" role="group" aria-label="Slider controls">
        <div className="relative h-[3px] w-full rounded-full bg-neutral-200">
          <span
            aria-hidden="true"
            className="absolute h-[3px] rounded-full bg-accent transition-all ease-out"
            style={{ left: `${progress.left}%`, width: `${progress.width}%` }}
          />
        </div>
        <div className="mt-6 flex gap-4">
          <button
            type="button"
            aria-label="Previous slide"
            disabled={progress.atStart}
            onClick={() => step(-1)}
            className={cn(
              "flex size-10 items-center justify-center rounded-full p-3 motion-safe:transition-colors motion-safe:duration-150",
              progress.atStart
                ? "pointer-events-none bg-neutral-200 text-neutral-600"
                : "bg-accent text-white hover:bg-[var(--accent-hover)]",
            )}
          >
            <ArrowLeft className="size-4" />
          </button>
          <button
            type="button"
            aria-label="Next slide"
            disabled={progress.atEnd}
            onClick={() => step(1)}
            className={cn(
              "flex size-10 items-center justify-center rounded-full p-3 motion-safe:transition-colors motion-safe:duration-150",
              progress.atEnd
                ? "pointer-events-none bg-neutral-200 text-neutral-600"
                : "bg-accent text-white hover:bg-[var(--accent-hover)]",
            )}
          >
            <ArrowRight className="size-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

function AwardsGrid() {
  return (
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5">
      {reviewsAwards.map((award) => (
        <article
          key={award.id}
          className="flex min-h-[389px] flex-col justify-between rounded-2xl border border-neutral-200 bg-white p-6"
        >
          <div className="flex flex-1 flex-col items-center justify-center gap-4">
            {award.logos.map((logo) =>
              typeof logo.src === "object" && logo.src.src.endsWith(".svg") ? (
                <img
                  key={logo.alt}
                  src={assetSrc(logo.src)}
                  alt={logo.alt}
                  className={cn("object-contain", logo.className)}
                />
              ) : (
                <Image
                  key={logo.alt}
                  src={logo.src}
                  alt={logo.alt}
                  className={cn("object-contain", logo.className)}
                />
              ),
            )}
          </div>
          <p className="mt-6 text-center text-base leading-6 text-neutral-900 whitespace-pre-line">
            {award.caption}
          </p>
        </article>
      ))}
    </div>
  );
}

function EventsGrid() {
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
      {reviewsEvents.map((event) => (
        <article
          key={event.id}
          className="flex flex-col overflow-hidden rounded-2xl border border-neutral-200 bg-white p-6"
        >
          <div className="overflow-hidden rounded-xl">
            <Image
              src={event.image}
              alt={event.imageAlt}
              sizes="(min-width: 768px) 379px, 100vw"
              className="h-auto w-full object-cover"
            />
          </div>
          <p className="mt-6 text-center text-base leading-6 text-neutral-900">{event.title}</p>
        </article>
      ))}
      <article className="flex min-h-[336px] flex-col items-center justify-center rounded-2xl border border-neutral-200 bg-white p-6">
        <ReviewsCalendarIcon className="size-8 text-neutral-600" />
        <p className="mt-6 text-center text-base leading-6 text-neutral-900">More coming...</p>
      </article>
    </div>
  );
}

export function ReviewsTabs() {
  const [tab, setTab] = useState<ReviewsTabId>("podcasts");

  let panel: ReactNode = null;
  if (tab === "podcasts") panel = <QuoteColumns columns={reviewsPodcastColumns} />;
  else if (tab === "featured") panel = <QuoteColumns columns={reviewsFeaturedColumns} />;
  else if (tab === "users") panel = <UsersCarousel />;
  else if (tab === "awards") panel = <AwardsGrid />;
  else panel = <EventsGrid />;

  return (
    <section id="nexos-reviews" className="bg-white py-16">
      <Container>
        <div className="mx-auto max-w-[768px] text-center">
          <h2 className="font-heading text-[36px] leading-[1.2] font-semibold tracking-[-0.015em] text-neutral-900 md:text-[40px] md:leading-[48px]">
            {reviewsIntro.headingLine1}
            <br />
            {reviewsIntro.headingLine2}
          </h2>
          <p className="mt-5 text-base leading-6 text-neutral-700">
            {reviewsIntro.beforeBrand}
            <span className="text-accent">{reviewsIntro.brand}</span>
            {reviewsIntro.afterBrand}
          </p>
        </div>

        <div
          role="tablist"
          aria-label="Review sources"
          className="mx-auto mt-10 flex w-fit max-w-full items-center justify-center gap-8 overflow-x-auto"
        >
          {reviewsTabs.map((item) => {
            const selected = item.id === tab;
            return (
              <button
                key={item.id}
                type="button"
                role="tab"
                aria-selected={selected}
                className={cn(
                  "shrink-0 border-b-2 pb-2 text-base font-medium whitespace-nowrap transition-colors duration-150",
                  selected
                    ? "border-accent text-accent"
                    : "border-transparent text-neutral-600 hover:text-neutral-900",
                )}
                onClick={() => setTab(item.id)}
              >
                {item.label}
              </button>
            );
          })}
        </div>

        <div className="mt-10">{panel}</div>
      </Container>
    </section>
  );
}

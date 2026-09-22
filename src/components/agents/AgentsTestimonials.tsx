"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState, type PointerEvent } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { homePortraits } from "@/assets/home";
import { assetSrc } from "@/assets/home";
import { productLogos } from "@/assets/products";
import { Container } from "@/components/layout/Container";
import { agentsQuotes } from "@/data/products/agents";
import { cn } from "@/lib/utils";

const CARD_GAP_PX = 24;

const departmentStyle: Record<string, { bg: string; color: string }> = {
  Marketing: { bg: "#E3FCEC", color: "#0C7E67" },
  "HR / People": { bg: "#D4F0FF", color: "#196087" },
  Sales: { bg: "#F5F3FC", color: "#6B3EFF" },
  Legal: { bg: "#FBF6EE", color: "#D2A06B" },
  Operations: { bg: "#F5F3FC", color: "#6B3EFF" },
  Product: { bg: "#E3FCEC", color: "#0A8550" },
  QA: { bg: "#EEF1FF", color: "#385AFF" },
};

export function AgentsTestimonials() {
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
    const cardWidth = firstCard instanceof HTMLElement ? firstCard.offsetWidth : 373;
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
    const cardWidth = firstCard instanceof HTMLElement ? firstCard.offsetWidth : 373;
    const next = Math.round(el.scrollLeft / (cardWidth + CARD_GAP_PX)) * (cardWidth + CARD_GAP_PX);
    el.scrollTo({ left: next, behavior: "smooth" });
  }

  return (
    <section className="bg-white py-16 md:py-24">
      <Container>
        <h2 className="max-w-[768px] font-heading text-[36px] leading-[1.2] font-semibold tracking-[-0.015em] text-neutral-900 md:text-[48px] md:leading-[57.6px]">
          {agentsQuotes.heading}
        </h2>

        <div className="mt-10 overflow-hidden">
          <picture>
            <source
              media="(max-width: 767px)"
              srcSet={assetSrc(productLogos.customerStoriesXs)}
            />
            <img
              src={assetSrc(productLogos.customerStories)}
              alt="Logos of companies that trust NexEco AI: Surfshark, NordVPN, payabl., Nord Security, Hostinger, Oxylabs, Payhawk"
              width={1168}
              height={64}
              className="h-16 w-full object-contain md:h-20"
            />
          </picture>
        </div>

        <div
          ref={trackRef}
          className="no-scrollbar mt-10 cursor-grab overflow-x-auto overscroll-x-contain snap-x snap-mandatory select-none active:cursor-grabbing"
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerCancel={onPointerUp}
          onScroll={syncProgress}
        >
          <ul className="flex w-max gap-6">
            {agentsQuotes.slides.map((item) => {
              const chip = departmentStyle[item.department] ?? departmentStyle.Sales;
              const portrait = homePortraits[item.id as keyof typeof homePortraits];
              return (
                <li
                  key={item.id}
                  className="flex min-h-[406px] w-[min(373px,calc(100vw-2rem))] shrink-0 snap-start overflow-hidden rounded-2xl border border-[#dbe4eb] bg-white lg:h-[406px]"
                >
                  <div className="flex h-full w-full flex-col p-6">
                    <div className="flex h-full flex-col gap-y-6">
                      <div className="flex flex-col gap-y-6">
                        <span
                          className="inline-flex w-fit items-center rounded-full px-4 py-[6px] text-sm font-medium"
                          style={{ backgroundColor: chip.bg, color: chip.color }}
                        >
                          {item.department}
                        </span>
                        <div className="flex flex-row items-center gap-x-2">
                          {portrait ? (
                            <Image
                              src={portrait}
                              alt=""
                              width={48}
                              height={48}
                              draggable={false}
                              className="size-12 rounded-full object-cover"
                            />
                          ) : null}
                          <div className="flex flex-col">
                            <div className="text-base leading-6 font-semibold text-neutral-900">
                              {item.name}
                            </div>
                            <p className="text-sm leading-[21px] text-neutral-600">{item.role}</p>
                            <p className="text-sm leading-[21px] text-neutral-600">{item.company}</p>
                          </div>
                        </div>
                      </div>
                      <p className="text-base leading-6 text-neutral-700">{item.quote}</p>
                    </div>
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
                "flex size-10 items-center justify-center rounded-full p-3 motion-safe:transition-colors motion-safe:duration-150 motion-safe:ease-in-out",
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
                "flex size-10 items-center justify-center rounded-full p-3 motion-safe:transition-colors motion-safe:duration-150 motion-safe:ease-in-out",
                progress.atEnd
                  ? "pointer-events-none bg-neutral-200 text-neutral-600"
                  : "bg-accent text-white hover:bg-[var(--accent-hover)]",
              )}
            >
              <ArrowRight className="size-4" />
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}

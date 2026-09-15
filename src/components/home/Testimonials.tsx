"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState, type PointerEvent } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { homepageTestimonials } from "@/data/homepage";
import { homePortraits } from "@/assets/home";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const CARD_GAP_PX = 24;
const badgeClass =
  "inline-block w-fit rounded-full bg-[#22165d] px-3 py-1 text-xs leading-[18px] font-medium text-white";

export function Testimonials() {
  const featured = homepageTestimonials.featured;
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
    <section id="testimonials" className="bg-neutral-100 py-16">
      <Container>
        <h2 className="max-w-[768px] font-heading text-[36px] leading-[1.2] font-semibold tracking-[-0.015em] text-neutral-900 md:text-[48px] md:leading-[57.6px]">
          {homepageTestimonials.heading}
        </h2>

        <article className="mt-10 flex flex-col gap-4 overflow-hidden rounded-md border border-neutral-200 bg-white p-6 lg:flex-row lg:items-stretch">
          <div className="relative w-full max-w-[272px] shrink-0 overflow-hidden rounded-md shadow-lg">
            <Image
              src={homePortraits.featured}
              alt=""
              width={272}
              height={343}
              className="h-[343px] w-full object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4 text-white">
              <div className="font-semibold">{featured.name}</div>
              <div className="text-sm text-white/80">{featured.role}</div>
            </div>
          </div>
          <div className="flex min-w-0 flex-1 flex-col">
            <span className={badgeClass}>{featured.product}</span>
            <p className="mt-4 font-heading text-[64px] leading-none font-semibold text-accent md:text-[80px]">
              {featured.stat}
            </p>
            <p className="mt-2 text-[20px] leading-[30px] text-accent">{featured.statLabel}</p>
            <p className="mt-5 max-w-[815px] text-[18px] leading-[28px] text-neutral-900 md:text-[20px] md:leading-[30px]">
              {featured.quote}
            </p>
            <Button
              href={featured.cta.href}
              variant="accent"
              iconPosition="end"
              icon={<ArrowRight className="size-5" />}
              className="mt-8 w-fit"
            >
              {featured.cta.label}
            </Button>
          </div>
        </article>

        <div
          ref={trackRef}
          className="no-scrollbar mt-8 cursor-grab overflow-x-auto overscroll-x-contain snap-x snap-mandatory select-none active:cursor-grabbing"
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerCancel={onPointerUp}
          onScroll={syncProgress}
        >
          <ul className="flex w-max gap-6">
            {homepageTestimonials.items.map((item) => (
              <li
                key={item.id}
                className="flex min-h-[406px] w-[min(373px,calc(100vw-2rem))] shrink-0 snap-start overflow-hidden rounded-md border border-neutral-200 bg-white lg:h-[406px]"
              >
                <div className="flex h-full w-full flex-col p-6">
                  <div className="flex h-full flex-col gap-y-6">
                    <div className="flex flex-col gap-y-6">
                      <span className={badgeClass}>{item.product}</span>
                      <div className="flex flex-row items-center gap-x-2">
                        <Image
                          src={homePortraits[item.id]}
                          alt=""
                          width={48}
                          height={48}
                          draggable={false}
                          className="size-12 rounded-none object-cover"
                        />
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
            ))}
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

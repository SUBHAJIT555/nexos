"use client";

import { useCallback, useEffect, useRef, useState, type PointerEvent, type ReactNode } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type ObservabilitySliderProps = {
  children: ReactNode;
  ariaLabel?: string;
  className?: string;
};

export function ObservabilitySlider({
  children,
  ariaLabel = "Slider controls",
  className,
}: ObservabilitySliderProps) {
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
    const firstCard = el.querySelector("[data-slide]");
    const cardWidth = firstCard instanceof HTMLElement ? firstCard.offsetWidth : 379;
    const styles = getComputedStyle(el.querySelector("[data-slide-track]") ?? el);
    const gap = Number.parseFloat(styles.columnGap || styles.gap || "16") || 16;
    el.scrollTo({
      left: el.scrollLeft + direction * (cardWidth + gap),
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
    const firstCard = el.querySelector("[data-slide]");
    const cardWidth = firstCard instanceof HTMLElement ? firstCard.offsetWidth : 379;
    const track = el.querySelector("[data-slide-track]");
    const styles = getComputedStyle(track ?? el);
    const gap = Number.parseFloat(styles.columnGap || styles.gap || "16") || 16;
    const next = Math.round(el.scrollLeft / (cardWidth + gap)) * (cardWidth + gap);
    el.scrollTo({ left: next, behavior: "smooth" });
  }

  return (
    <div className={className}>
      <div
        ref={trackRef}
        className="no-scrollbar cursor-grab overflow-x-auto overscroll-x-contain snap-x snap-mandatory select-none active:cursor-grabbing"
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
        onScroll={syncProgress}
      >
        {children}
      </div>
      <div className="mt-10" role="group" aria-label={ariaLabel}>
        <div className="relative h-[3px] w-full rounded-full bg-white/15">
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
                ? "pointer-events-none bg-[#262b30] text-[#A3B4C2]"
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
                ? "pointer-events-none bg-[#262b30] text-[#A3B4C2]"
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

"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "motion/react";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  CommentsIcon,
  FileMagnifyingIcon,
  HeadsetIcon,
  ListCheckIcon,
  PenIcon,
} from "@/components/extension/ExtensionIcons";
import { Container } from "@/components/layout/Container";
import { extensionUse } from "@/data/features/extension";
import { cn } from "@/lib/utils";

const iconMap = {
  fileMagnifying: FileMagnifyingIcon,
  pen: PenIcon,
  headset: HeadsetIcon,
  listCheck: ListCheckIcon,
  comments: CommentsIcon,
} as const;

const GAP = 32;

function visibleCount(width: number) {
  if (width >= 1024) {
    return 3;
  }
  if (width >= 768) {
    return 2;
  }
  return 1;
}

export function ExtensionUse() {
  const viewportRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);
  const [index, setIndex] = useState(0);
  const reduce = useReducedMotion();
  const visible = visibleCount(width);
  const last = Math.max(0, extensionUse.items.length - visible);
  const slide = Math.min(index, last);
  const cardWidth = width > 0 ? (width - GAP * (visible - 1)) / visible : 0;
  const fill = ((slide + visible) / extensionUse.items.length) * 100;

  useEffect(() => {
    const node = viewportRef.current;
    if (!node) {
      return;
    }

    const observer = new ResizeObserver(() => {
      setWidth(node.clientWidth);
    });
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-[#F8FAFC] py-16">
      <Container>
        <div className="mx-auto mb-10 max-w-[820px] text-center">
          <h2 className="font-heading text-[36px] leading-[1.2] font-semibold tracking-[-0.015em] text-neutral-900 md:text-[40px] md:leading-[48px]">
            {extensionUse.headingBefore}
            <span className="block">{extensionUse.headingAfter}</span>
          </h2>
          <p className="mt-6 text-base leading-6 text-neutral-700">
            {extensionUse.introBefore}
            <br />
            {extensionUse.introAfter}
          </p>
        </div>
        <div ref={viewportRef} className="overflow-hidden">
          <div
            className="flex"
            style={{
              gap: GAP,
              transform: cardWidth ? `translateX(${-slide * (cardWidth + GAP)}px)` : undefined,
              transition: reduce ? undefined : "transform 220ms cubic-bezier(0, 0, 0.2, 1)",
            }}
          >
            {extensionUse.items.map((item) => {
              const Icon = iconMap[item.icon];
              return (
                <article
                  key={item.id}
                  className="flex shrink-0 flex-col overflow-hidden rounded-md border border-[#bfcbd4] bg-white p-8"
                  style={{ width: cardWidth || undefined }}
                >
                  <div className="mb-6 flex size-16 items-center justify-center rounded-md bg-[#EFF4F8]">
                    <Icon className="text-accent" />
                  </div>
                  <h3 className="font-heading text-[28px] leading-[36.4px] font-semibold text-neutral-900">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-base leading-6 text-neutral-600">{item.body}</p>
                </article>
              );
            })}
          </div>
        </div>
        <div className="mt-10">
          <div className="relative h-[3px] w-full rounded-full bg-[#dbe4eb]">
            <div
              className="absolute top-0 left-0 h-[3px] rounded-full bg-accent transition-all ease-out"
              style={{ width: `${fill}%` }}
            />
          </div>
          <div className="mt-6 flex items-center gap-3">
            <button
              type="button"
              aria-label="Previous slide"
              disabled={slide === 0}
              onClick={() => setIndex((value) => Math.max(0, Math.min(value, last) - 1))}
              className={cn(
                "flex size-10 items-center justify-center rounded-full transition-colors",
                slide === 0
                  ? "pointer-events-none bg-[#dbe4eb] text-[#9aa7b2]"
                  : "bg-accent text-white hover:bg-[var(--accent-hover)]",
              )}
            >
              <ChevronLeftIcon />
            </button>
            <button
              type="button"
              aria-label="Next slide"
              disabled={slide >= last}
              onClick={() => setIndex((value) => Math.min(last, Math.min(value, last) + 1))}
              className={cn(
                "flex size-10 items-center justify-center rounded-full transition-colors",
                slide >= last
                  ? "pointer-events-none bg-[#dbe4eb] text-[#9aa7b2]"
                  : "bg-accent text-white hover:bg-[var(--accent-hover)]",
              )}
            >
              <ChevronRightIcon />
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}

"use client";

import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";
import { Container } from "@/components/layout/Container";
import { cn } from "@/lib/utils";

export type HowItWorksItem = {
  id: string;
  title: string;
  body: string;
};

type HowItWorksProps = {
  heading: ReactNode;
  body?: string;
  items: HowItWorksItem[];
};

const ARROW_LEFT =
  "M7.4 273.4C2.7 268.8 0 262.6 0 256s2.7-12.8 7.4-17.4l176-168c9.6-9.2 24.8-8.8 33.9 .8s8.8 24.8-.8 33.9L83.9 232 424 232c13.3 0 24 10.7 24 24s-10.7 24-24 24L83.9 280 216.6 406.6c9.6 9.2 9.9 24.3 .8 33.9s-24.3 9.9-33.9 .8l-176-168z";
const ARROW_RIGHT =
  "M440.6 273.4c4.7-4.5 7.4-10.8 7.4-17.4s-2.7-12.8-7.4-17.4l-176-168c-9.6-9.2-24.8-8.8-33.9 .8s-8.8 24.8 .8 33.9L364.1 232 24 232c-13.3 0-24 10.7-24 24s10.7 24 24 24l340.1 0L231.4 406.6c-9.6 9.2-9.9 24.3-.8 33.9s24.3 9.9 33.9 .8l176-168z";

const howIcons: Record<string, { viewBox: string; path: string }> = {
  interface: {
    viewBox: "0 0 32 32",
    path: "M8 6.4c0-1.768 1.435-3.2 3.2-3.2a3.201 3.201 0 0 1 2.09 5.625l1.925 4.2A5.7 5.7 0 0 1 16.8 12.8c1.585 0 3.01.655 4.03 1.71l5.04-3.625A3.201 3.201 0 0 1 28.8 6.4c1.765 0 3.2 1.432 3.2 3.2a3.203 3.203 0 0 1-5.14 2.545l-5.095 3.665c.405.775.635 1.655.635 2.59 0 .77-.155 1.5-.435 2.165l4.59 2.755a3.18 3.18 0 0 1 2.245-.92c1.765 0 3.2 1.435 3.2 3.2s-1.435 3.2-3.2 3.2a3.203 3.203 0 0 1-3.07-4.11l-4.59-2.75a5.604 5.604 0 0 1-9.885-2.74h-5c-.31 1.38-1.564 2.4-3.055 2.4A3.2 3.2 0 0 1 0 18.4c0-1.765 1.433-3.2 3.2-3.2 1.491 0 2.745 1.02 3.055 2.4h5a5.6 5.6 0 0 1 2.51-3.905l-1.91-4.16A3.201 3.201 0 0 1 8 6.4M11.2 8a1.6 1.6 0 1 0 .002-3.199A1.6 1.6 0 0 0 11.2 8m17.6 3.2c.885 0 1.6-.715 1.6-1.6S29.685 8 28.8 8s-1.6.715-1.6 1.6.715 1.6 1.6 1.6m0 12.8c-.885 0-1.6.715-1.6 1.6s.715 1.6 1.6 1.6 1.6-.715 1.6-1.6-.715-1.6-1.6-1.6M3.2 20a1.6 1.6 0 1 0 .002-3.198A1.6 1.6 0 0 0 3.2 20m13.6 2.4c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4",
  },
  multimodal: {
    viewBox: "-32 -64 640 640",
    path: "M272 64c8.8 0 16 7.2 16 16l0 128c0 8.8-7.2 16-16 16L48 224c-8.8 0-16-7.2-16-16L32 80c0-8.8 7.2-16 16-16l224 0zM48 32C21.5 32 0 53.5 0 80L0 208c0 26.5 21.5 48 48 48l224 0c26.5 0 48-21.5 48-48l0-128c0-26.5-21.5-48-48-48L48 32zM528 64c8.8 0 16 7.2 16 16l0 256c0 8.8-7.2 16-16 16l-96 0c-8.8 0-16-7.2-16-16l0-256c0-8.8 7.2-16 16-16l96 0zM432 32c-26.5 0-48 21.5-48 48l0 256c0 26.5 21.5 48 48 48l96 0c26.5 0 48-21.5 48-48l0-256c0-26.5-21.5-48-48-48l-96 0zM112 336l176 0c8.8 0 16 7.2 16 16l0 80c0 8.8-7.2 16-16 16l-176 0c-8.8 0-16-7.2-16-16l0-80c0-8.8 7.2-16 16-16zM64 352l0 80c0 26.5 21.5 48 48 48l176 0c26.5 0 48-21.5 48-48l0-80c0-26.5-21.5-48-48-48l-176 0c-26.5 0-48 21.5-48 48z",
  },
  "web-search": {
    viewBox: "0 0 32 32",
    path: "M28.565 27.435 21.49 20.36c1.56-1.82 2.465-4.175 2.465-6.76 0-5.745-4.656-10.4-10.4-10.4S3.2 7.856 3.2 13.6C3.2 19.343 7.856 24 13.555 24c2.584 0 4.942-.948 6.76-2.508l7.075 7.075q.301.231.61.233c.205 0 .41-.078.566-.234a.795.795 0 0 0-.001-1.131M13.6 22.4c-4.895 0-8.8-3.95-8.8-8.8s3.905-8.8 8.8-8.8 8.8 3.905 8.8 8.8-3.95 8.8-8.8 8.8",
  },
  agents: {
    viewBox: "-64 -64 640 640",
    path: "M432 32c8.8 0 16 7.2 16 16l0 48 48 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-48 0 0 48c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-48-48 0c-8.8 0-16-7.2-16-16s7.2-16 16-16l48 0 0-48c0-8.8 7.2-16 16-16zm0 288c8.8 0 16 7.2 16 16l0 48 48 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-48 0 0 48c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-48-48 0c-8.8 0-16-7.2-16-16s7.2-16 16-16l48 0 0-48c0-8.8 7.2-16 16-16zM136.8 216.4L54.2 254.6l82.6 38.1c6.9 3.2 12.4 8.7 15.6 15.6l38.1 82.6 38.1-82.6c3.2-6.9 8.7-12.4 15.6-15.6l82.6-38.1-82.6-38.1c-6.9-3.2-12.4-8.7-15.6-15.6l-38.1-82.6-38.1 82.6c-3.2 6.9-8.7 12.4-15.6 15.6zM123.4 321.8L9.3 269.1C3.6 266.5 0 260.8 0 254.6s3.6-11.9 9.3-14.5l114.1-52.7L176 73.3c2.6-5.7 8.3-9.3 14.5-9.3s11.9 3.6 14.5 9.3l52.7 114.1L371.8 240c5.7 2.6 9.3 8.3 9.3 14.5s-3.6 11.9-9.3 14.5L257.8 321.8 205.1 435.8c-2.6 5.7-8.3 9.3-14.5 9.3s-11.9-3.6-14.5-9.3L123.4 321.8z",
  },
  projects: {
    viewBox: "0 0 32 32",
    path: "M24.665 9.465 19.34 4.14a3.2 3.2 0 0 0-2.265-.94H9.6a3.2 3.2 0 0 0-3.2 3.2v19.2a3.2 3.2 0 0 0 3.2 3.2h12.8a3.2 3.2 0 0 0 3.2-3.2V11.725c0-.85-.335-1.66-.935-2.26M17.6 4.904c.224.078.433.192.606.365l5.325 5.325c.174.171.289.381.364.606H18.4c-.44 0-.8-.36-.8-.8zM24 25.6c0 .882-.718 1.6-1.6 1.6H9.6c-.882 0-1.6-.718-1.6-1.6V6.4c0-.882.718-1.6 1.6-1.6H16v5.6a2.4 2.4 0 0 0 2.4 2.4H24zm-13.6-7.2c0 2.647 2.153 4.8 4.8 4.8a4.76 4.76 0 0 0 2.773-.896l3.061 3.062a.803.803 0 0 0 1.131 0 .8.8 0 0 0 0-1.131l-3.061-3.062A4.75 4.75 0 0 0 20 18.4c0-2.647-2.153-4.8-4.8-4.8a4.806 4.806 0 0 0-4.8 4.8m8 0c0 1.764-1.436 3.2-3.2 3.2a3.204 3.204 0 0 1-3.2-3.2c0-1.764 1.436-3.2 3.2-3.2s3.2 1.435 3.2 3.2",
  },
  storage: {
    viewBox: "0 0 32 32",
    path: "m26.525 7.386-9.6-4a2.4 2.4 0 0 0-.922-.186c-.314 0-.628.06-.923.185l-9.6 4C4.587 7.756 4 8.63 4 9.556 4 22.47 13.47 28.8 15.995 28.8 18.46 28.8 28 22.565 28 9.555c0-.925-.585-1.8-1.475-2.17m-.13 2.23c0 11.264-8.31 17.584-10.39 17.584C13.865 27.155 5.6 20.81 5.6 9.6a.8.8 0 0 1 .488-.737l9.6-4A.8.8 0 0 1 16 4.799q.157-.001.306.064l9.6 4c.459.192.489.627.489.752M20 12.265a.8.8 0 0 0-.566.233l-4.769 4.771-2.1-2.1a.8.8 0 0 0-1.13 1.13l2.666 2.667a.82.82 0 0 0 .564.233c.2 0 .41-.078.566-.234l5.335-5.335A.802.802 0 0 0 20 12.265",
  },
  integrations: {
    viewBox: "0 0 32 32",
    path: "M12 4.8a2.4 2.4 0 0 1 2.4 2.4V12a2.4 2.4 0 0 1-2.4 2.4H7.2A2.4 2.4 0 0 1 4.8 12V7.2a2.4 2.4 0 0 1 2.4-2.4zm0 1.6H7.2a.8.8 0 0 0-.8.8V12c0 .44.358.8.8.8H12c.44 0 .8-.36.8-.8V7.2c0-.442-.36-.8-.8-.8m0 11.2a2.4 2.4 0 0 1 2.4 2.4v4.8a2.4 2.4 0 0 1-2.4 2.4H7.2a2.4 2.4 0 0 1-2.4-2.4V20a2.4 2.4 0 0 1 2.4-2.4zm0 1.6H7.2c-.442 0-.8.36-.8.8v4.8c0 .44.358.8.8.8H12c.44 0 .8-.36.8-.8V20c0-.44-.36-.8-.8-.8m5.6-12A2.4 2.4 0 0 1 20 4.8h4.8a2.4 2.4 0 0 1 2.4 2.4V12a2.4 2.4 0 0 1-2.4 2.4H20a2.4 2.4 0 0 1-2.4-2.4zm1.6 0V12c0 .44.36.8.8.8h4.8c.44 0 .8-.36.8-.8V7.2c0-.442-.36-.8-.8-.8H20c-.44 0-.8.358-.8.8m3.2 9.6c.44 0 .8.36.8.8v4h4c.44 0 .8.36.8.8s-.36.8-.8.8h-4v4c0 .44-.36.8-.8.8s-.8-.36-.8-.8v-4h-4c-.44 0-.8-.36-.8-.8s.36-.8.8-.8h4v-4c0-.44.36-.8.8-.8",
  },
  monitoring: {
    viewBox: "-64 -64 640 640",
    path: "M32 48c0-8.8-7.2-16-16-16S0 39.2 0 48L0 400c0 44.2 35.8 80 80 80l416 0c8.8 0 16-7.2 16-16s-7.2-16-16-16L80 448c-26.5 0-48-21.5-48-48L32 48zM270.6 89.5c-2.7-6-8.8-9.8-15.4-9.5s-12.3 4.7-14.4 10.9L164.5 320 112 320c-8.8 0-16 7.2-16 16s7.2 16 16 16l64 0c6.9 0 13-4.4 15.2-10.9l67-200.9 47.2 106.3c2.6 5.8 8.3 9.5 14.6 9.5l71.4 0 59.3 88.9c4.9 7.4 14.8 9.3 22.2 4.4s9.3-14.8 4.4-22.2l-64-96c-3-4.5-8-7.1-13.3-7.1l-69.6 0L270.6 89.5z",
  },
};

export function HowItWorks({ heading, body, items }: HowItWorksProps) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);
  const [progress, setProgress] = useState(50);

  const updateEdges = useCallback(() => {
    const node = scrollerRef.current;
    if (!node) {
      return;
    }
    setAtStart(node.scrollLeft <= 8);
    setAtEnd(node.scrollLeft + node.clientWidth >= node.scrollWidth - 8);
    setProgress(
      Math.min(100, Math.max(8, ((node.scrollLeft + node.clientWidth) / Math.max(1, node.scrollWidth)) * 100)),
    );
  }, []);

  useEffect(() => {
    updateEdges();
  }, [updateEdges, items.length]);

  const scrollByCard = (direction: -1 | 1) => {
    const node = scrollerRef.current;
    if (!node) {
      return;
    }
    const card = node.querySelector("article");
    const delta = (card instanceof HTMLElement ? card.offsetWidth : 280) + 16;
    node.scrollBy({ left: direction * delta, behavior: "smooth" });
  };

  return (
    <section className="bg-neutral-100 pt-16 pb-16 md:pt-28 md:pb-28">
      <Container className="lg:px-0">
        <h2 className="max-w-[545px] font-heading text-[32px] leading-10 font-semibold tracking-[-0.015em] text-neutral-900 md:text-[40px] md:leading-[48px]">
          {heading}
        </h2>
        {body ? (
          <p className="mt-5 max-w-[1168px] text-base leading-6 text-[#65717B]">
            {body}
          </p>
        ) : null}

        <div
          ref={scrollerRef}
          onScroll={updateEdges}
          className="mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {items.map((item) => {
            const icon = howIcons[item.id];
            return (
              <article
                key={item.id}
                className="flex h-[306px] w-[min(280px,80vw)] shrink-0 snap-start flex-col rounded-2xl bg-white p-6"
              >
                {icon ? (
                  <span className="mb-10 flex h-fit w-fit rounded-lg bg-[#F5F3FC] p-2 text-accent">
                    <svg
                      viewBox={icon.viewBox}
                      width="24"
                      height="24"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d={icon.path} />
                    </svg>
                  </span>
                ) : null}
                <h3 className="font-heading text-[22px] leading-[28.6px] font-semibold text-neutral-900">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm leading-[21px] text-[#65717B]">{item.body}</p>
              </article>
            );
          })}
        </div>

        <div className="mt-10">
          <div className="relative h-[3px] w-full rounded-full bg-[#dbe4eb]">
            <span
              className="absolute h-[3px] rounded-full bg-accent transition-all ease-out"
              style={{ left: 0, width: `${progress}%` }}
            />
          </div>
          <div className="mt-6 flex gap-4">
            <button
              type="button"
              aria-label="Previous slide"
              disabled={atStart}
              onClick={() => scrollByCard(-1)}
              className={cn(
                "flex size-10 items-center justify-center rounded-full",
                atStart ? "bg-[#dbe4eb] text-[#65717B]" : "bg-accent text-white",
              )}
            >
              <svg viewBox="-96 -64 640 640" className="size-4" fill="currentColor" aria-hidden="true">
                <path d={ARROW_LEFT} />
              </svg>
            </button>
            <button
              type="button"
              aria-label="Next slide"
              disabled={atEnd}
              onClick={() => scrollByCard(1)}
              className={cn(
                "flex size-10 items-center justify-center rounded-full",
                atEnd ? "bg-[#dbe4eb] text-[#65717B]" : "bg-accent text-white",
              )}
            >
              <svg viewBox="-96 -64 640 640" className="size-4" fill="currentColor" aria-hidden="true">
                <path d={ARROW_RIGHT} />
              </svg>
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}

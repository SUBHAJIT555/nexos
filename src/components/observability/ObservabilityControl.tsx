"use client";

import { useEffect, useState } from "react";
import { Container } from "@/components/layout/Container";
import { ObservabilityObserverPill } from "@/components/observability/ObservabilityObserverPill";
import { assetSrc } from "@/assets/home";
import { observabilityControl } from "@/data/features/observability";
import { cn } from "@/lib/utils";

const INTERVAL_MS = 5000;

export function ObservabilityControl() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const timer = window.setInterval(() => {
      setActive((index) => (index + 1) % observabilityControl.items.length);
    }, INTERVAL_MS);
    return () => window.clearInterval(timer);
  }, [paused]);

  return (
    <section id="ai-usage-tracker" className="relative">
      <div className="px-4 pt-16 pb-8 md:px-10 md:pt-28 md:pb-10">
        <Container className="px-0">
          <div className="mx-auto max-w-[740px] text-center">
            <ObservabilityObserverPill />
            <h2 className="font-heading text-[36px] leading-[1.2] font-semibold tracking-[-0.015em] text-white md:text-[48px] md:leading-[57.6px]">
              {observabilityControl.heading}
            </h2>
          </div>
          <div className="mt-10 grid items-center gap-8 lg:grid-cols-[minmax(0,1fr)_555px]">
            <div className="relative mx-auto aspect-square w-full max-w-[555px] lg:order-2">
              {observabilityControl.items.map((item, index) => (
                <div
                  key={item.id}
                  className={cn(
                    "absolute inset-0 overflow-hidden rounded-md transition-opacity duration-300 ease-in-out",
                    index === active ? "opacity-100" : "pointer-events-none opacity-0",
                  )}
                >
                  <img
                    src={assetSrc(item.image)}
                    alt={item.alt}
                    width={555}
                    height={555}
                    className="h-full w-full rounded-md object-contain"
                  />
                </div>
              ))}
            </div>
            <div className="flex flex-col items-start justify-center gap-4 lg:order-1">
              {observabilityControl.items.map((item, index) => {
                const isActive = index === active;
                return (
                  <div
                    key={item.id}
                    className={cn(
                      "w-full cursor-pointer border-l-2 pl-6 transition-colors duration-200",
                      isActive ? "border-accent" : "border-[#3d4a55]",
                    )}
                    onClick={() => {
                      setActive(index);
                      setPaused(true);
                    }}
                    onMouseEnter={() => setPaused(true)}
                    onMouseLeave={() => setPaused(false)}
                  >
                    <button
                      type="button"
                      aria-expanded={isActive}
                      className="flex w-full justify-between text-left font-medium outline-none"
                    >
                      <span
                        className={cn(
                          "text-lg leading-7 font-semibold transition-colors duration-200",
                          isActive ? "text-white" : "text-[#A3B4C2]",
                        )}
                      >
                        {item.label}
                      </span>
                    </button>
                    <div
                      className={cn(
                        "grid transition-[grid-template-rows] duration-300 ease-out",
                        isActive ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
                      )}
                    >
                      <div className="min-h-0 overflow-hidden">
                        <p className="pt-3 text-base leading-6 text-[#A3B4C2]">{item.body}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}

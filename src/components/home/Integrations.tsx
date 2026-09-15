"use client";

import { useEffect, useRef, useState } from "react";
import {
  homepageIntegrations,
  type IntegrationChip,
} from "@/data/homepage";
import { Container } from "@/components/layout/Container";
import { IntegrationIcon } from "@/components/icons/IntegrationIcon";
import { cn } from "@/lib/utils";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const SLOT_INTERVAL_MS = 2400;
const SLOT_STAGGER_MS = 350;
const SLOT_COUNT = 3;

function chunkIntoSlots<T>(items: readonly T[], slotCount = SLOT_COUNT): T[][] {
  const base = Math.floor(items.length / slotCount);
  const extra = items.length % slotCount;
  const slots: T[][] = [];
  let index = 0;
  for (let slot = 0; slot < slotCount; slot += 1) {
    const size = base + (slot < extra ? 1 : 0);
    if (size > 0) slots.push(items.slice(index, index + size) as T[]);
    index += size;
  }
  return slots;
}

function IntegrationPill({ item }: { item: IntegrationChip }) {
  return (
    <span className="flex w-full min-w-0 items-center gap-2 rounded-[4px] border border-[#363d44] bg-[#1e232e] p-3">
      <IntegrationIcon name={item.name} />
      <span className="truncate text-sm font-medium text-white">{item.name}</span>
    </span>
  );
}

function IntegrationSlot({
  items,
  delay,
  reduceMotion,
}: {
  items: IntegrationChip[];
  delay: number;
  reduceMotion: boolean;
}) {
  const [active, setActive] = useState(0);
  const [leaving, setLeaving] = useState<number | null>(null);
  const activeRef = useRef(0);

  useEffect(() => {
    activeRef.current = active;
  }, [active]);

  useEffect(() => {
    if (reduceMotion || items.length < 2) return;
    let intervalId: number | undefined;
    const timeoutId = window.setTimeout(() => {
      intervalId = window.setInterval(() => {
        const current = activeRef.current;
        const next = (current + 1) % items.length;
        setLeaving(current);
        activeRef.current = next;
        setActive(next);
      }, SLOT_INTERVAL_MS);
    }, delay);
    return () => {
      window.clearTimeout(timeoutId);
      if (intervalId) window.clearInterval(intervalId);
    };
  }, [delay, items.length, reduceMotion]);

  useEffect(() => {
    if (leaving === null) return;
    const id = window.setTimeout(() => setLeaving(null), 460);
    return () => window.clearTimeout(id);
  }, [leaving]);

  return (
    <div className="grid grid-cols-1 overflow-hidden xl:min-w-0 xl:flex-1">
      {items.map((item, index) => {
        const state =
          index === active ? "active" : index === leaving ? "leaving" : "idle";
        return (
          <div
            key={item.name}
            data-state={state}
            aria-hidden={state !== "active"}
            className={cn(
              "col-start-1 row-start-1",
              "motion-safe:transition-[opacity,translate] motion-safe:duration-[460ms] motion-safe:ease-[cubic-bezier(0.33,1,0.68,1)]",
              state === "idle" && "translate-y-9 opacity-0 motion-safe:transition-none",
              state === "leaving" && "-translate-y-9 opacity-0",
              state === "active" && "translate-y-0 opacity-100",
            )}
          >
            <IntegrationPill item={item} />
          </div>
        );
      })}
    </div>
  );
}

export function Integrations() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="works-with-the-ai-stack-you-already-use"
      className="relative overflow-hidden bg-page-dark py-16"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-2/3 bg-[radial-gradient(ellipse_80%_60%_at_50%_100%,rgb(107_62_255_/_0.28),transparent_70%)]"
      />
      <Container className="relative">
        <div className="mx-auto max-w-[768px] text-center">
          <h2 className="font-heading text-[36px] leading-[1.2] font-semibold tracking-[-0.015em] text-white md:text-[48px] md:leading-[57.6px]">
            {homepageIntegrations.heading}
          </h2>
          <p className="mt-5 text-base font-medium leading-6 text-on-dark-muted">
            {homepageIntegrations.body}
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {homepageIntegrations.groups.map((group) => {
            const slots = chunkIntoSlots(group.items);
            return (
              <article
                key={group.id}
                className="overflow-hidden rounded-md border border-neutral-900 bg-dark-surface xl:h-[150px]"
              >
                <div className="flex h-full flex-col gap-y-6 p-6">
                  <h3 className="flex flex-row items-center gap-x-2 font-heading text-[22px] leading-[28.6px] font-semibold text-white">
                    <span
                      className="size-2 shrink-0 rounded-full"
                      style={{ backgroundColor: group.accent }}
                      aria-hidden="true"
                    />
                    {group.title}
                  </h3>
                  <div className="flex w-full flex-col gap-2 overflow-hidden xl:flex-row">
                    {slots.map((slotItems, slotIndex) => (
                      <IntegrationSlot
                        key={`${group.id}-${slotIndex}`}
                        items={slotItems}
                        delay={slotIndex * SLOT_STAGGER_MS}
                        reduceMotion={reduceMotion}
                      />
                    ))}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

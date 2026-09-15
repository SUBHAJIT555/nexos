"use client";

import { useEffect, useState, type ReactNode } from "react";
import { homepageHero } from "@/data/homepage";
import {
  CloudCheckIcon,
  IsoSealIcon,
  Soc2Icon,
} from "@/components/icons/UiIcons";
import { cn } from "@/lib/utils";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const badgeIcons: Record<(typeof homepageHero.badges)[number]["id"], ReactNode> = {
  "eu-hosted": <CloudCheckIcon className="size-4 text-[#9690F8]" />,
  "iso-27001": <IsoSealIcon className="size-4 text-[#9690F8]" />,
  "iso-42001": <IsoSealIcon className="size-4 text-[#9690F8]" />,
  soc2: <Soc2Icon className="size-4 text-[#9690F8]" />,
};

const SHIFT_PX = [0, 49.33, 85.94, 113.68];
const DIM = [1, 0.798, 0.686, 0.625];
const CYCLE_MS = 2000;

export function ShiftingBadge() {
  const [badgeIndex, setBadgeIndex] = useState(0);
  const [returning, setReturning] = useState(false);
  const reduceMotion = useReducedMotion();
  const badges = homepageHero.badges;
  const count = badges.length;

  useEffect(() => {
    if (reduceMotion) return;
    const id = window.setInterval(() => {
      setBadgeIndex((value) => {
        const next = (value + 1) % count;
        if (next === 0) {
          setReturning(true);
          window.setTimeout(() => setReturning(false), 350);
        }
        return next;
      });
    }, CYCLE_MS);
    return () => window.clearInterval(id);
  }, [count, reduceMotion]);

  return (
    <div
      className="shifting-badge isolate inline-grid"
      data-ready="true"
      data-returning={returning ? "true" : undefined}
      style={{ ["--comet-duration" as string]: "2s" }}
      aria-live="polite"
    >
      {badges.map((badge, index) => {
        const isActive = index === badgeIndex;
        const isLead = index < badgeIndex;
        const distance = isActive ? 0 : Math.abs(index - badgeIndex);
        const scale = isActive ? 1 : Math.pow(0.9, distance);
        const shift = isActive
          ? 0
          : (isLead ? -1 : 1) * (SHIFT_PX[distance] ?? SHIFT_PX[SHIFT_PX.length - 1]);
        const dim = DIM[Math.min(distance, DIM.length - 1)] ?? 1;

        return (
          <span
            key={badge.id}
            className={cn(
              "shifting-badge__card group relative col-start-1 row-start-1 w-max justify-self-center",
              isActive && "z-10",
            )}
            data-side={isActive ? "lead" : isLead ? "lead" : "trail"}
            data-state={isActive ? "active" : undefined}
            style={{
              ["--sb-shift" as string]: `${shift}px`,
              ["--sb-scale" as string]: scale.toFixed(4),
              ["--sb-dim" as string]: dim.toFixed(3),
              zIndex: isActive ? count : count - distance,
            }}
            aria-hidden={!isActive}
          >
            <span className="shifting-badge__ring rounded-full" />
            <div
              className="inline-block w-fit rounded-full border border-[#211e2b] py-[6px] px-4 text-sm font-medium text-white"
              style={{ backgroundColor: "rgba(29, 26, 34, 0.5)" }}
            >
              <span className="relative flex items-center justify-center gap-2 whitespace-nowrap">
                <span className="flex shrink-0 items-center">{badgeIcons[badge.id]}</span>
                <span className="flex items-center">{badge.label}</span>
              </span>
            </div>
          </span>
        );
      })}
    </div>
  );
}

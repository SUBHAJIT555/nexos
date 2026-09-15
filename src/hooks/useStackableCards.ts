"use client";

import { useLayoutEffect, type RefObject } from "react";

const DESKTOP = [
  { top: 120, peek: 46.52 },
  { top: 158, peek: 47.07 },
  { top: 199, peek: 50.66 },
  { top: 247, peek: 0 },
] as const;

const MOBILE = [
  { top: 120, peek: 44.21 },
  { top: 157, peek: 44.07 },
  { top: 196, peek: 47.11 },
  { top: 240, peek: 0 },
] as const;

/**
 * Live cost cards use CSS `position: sticky` plus a scroll-driven
 * `sc-behind` class that clips each covered card to a title peek.
 * Values are the audited 1440 / 390 measurements.
 */
export function useStackableCards(root: RefObject<HTMLElement | null>) {
  useLayoutEffect(() => {
    const scope = root.current;
    if (!scope) {
      return;
    }

    const cards = [...scope.querySelectorAll<HTMLElement>("[data-stackable-card]")];
    const mq = window.matchMedia("(max-width: 767px)");

    const applyVars = () => {
      const table = mq.matches ? MOBILE : DESKTOP;
      cards.forEach((card, index) => {
        const row = table[index] ?? table[table.length - 1];
        card.style.setProperty("--sc-top", `${row.top}px`);
        card.style.setProperty("--sc-peek", `${row.peek}px`);
        card.style.setProperty("--sc-top-mobile", `${MOBILE[index]?.top ?? 120}px`);
        card.style.setProperty("--sc-peek-mobile", `${MOBILE[index]?.peek ?? 0}px`);
      });
    };

    const syncBehind = () => {
      cards.forEach((card, index) => {
        const next = cards[index + 1];
        if (!next) {
          card.classList.remove("sc-behind");
          return;
        }
        const cardTop = card.getBoundingClientRect().top;
        const nextTop = next.getBoundingClientRect().top;
        const peek = Number.parseFloat(getComputedStyle(card).getPropertyValue("--sc-peek")) || 0;
        card.classList.toggle("sc-behind", nextTop <= cardTop + peek + 4);
      });
    };

    applyVars();
    syncBehind();
    window.addEventListener("scroll", syncBehind, { passive: true });
    window.addEventListener("resize", applyVars);
    mq.addEventListener("change", applyVars);

    return () => {
      window.removeEventListener("scroll", syncBehind);
      window.removeEventListener("resize", applyVars);
      mq.removeEventListener("change", applyVars);
    };
  }, [root]);
}

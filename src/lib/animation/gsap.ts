"use client";

import {
  useLayoutEffect,
  type DependencyList,
  type RefObject,
} from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { prefersReducedMotion } from "@/lib/animation/reduced-motion";

let pluginsRegistered = false;

export function registerGsapPlugins() {
  if (pluginsRegistered || typeof window === "undefined") {
    return;
  }

  gsap.registerPlugin(ScrollTrigger);
  pluginsRegistered = true;
}

export const gsapDefaults = {
  duration: 0.8,
  ease: "power3.out",
} as const;

type GsapContextCallback = (api: {
  gsap: typeof gsap;
  ScrollTrigger: typeof ScrollTrigger;
  reducedMotion: boolean;
}) => void;

/**
 * React-safe GSAP setup. Uses `gsap.context()` so tweens and ScrollTriggers
 * are reverted on unmount. Import this module only from client components
 * that actually animate with GSAP.
 */
export function useGsapContext(
  callback: GsapContextCallback,
  deps: DependencyList = [],
  scope?: RefObject<Element | null>,
) {
  useLayoutEffect(() => {
    registerGsapPlugins();

    const ctx = gsap.context(() => {
      callback({
        gsap,
        ScrollTrigger,
        reducedMotion: prefersReducedMotion(),
      });
    }, scope?.current ?? undefined);

    return () => {
      ctx.revert();
    };
    // Callback identity is owned by the caller via `deps`.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}

export { gsap, ScrollTrigger };

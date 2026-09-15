import type { Transition, Variants } from "motion/react";

/**
 * Motion is for hover, tap, dropdowns, accordion, mobile nav,
 * and lightweight enter/exit. Do not use it for pinned scroll timelines.
 */
export const motionDuration = {
  fast: 0.15,
  md: 0.22,
  slow: 0.4,
} as const;

export const motionEase = {
  out: [0, 0, 0.2, 1] as const,
  inOut: [0.4, 0, 0.2, 1] as const,
};

export const defaultTransition: Transition = {
  duration: motionDuration.md,
  ease: motionEase.out,
};

export const dropdownTransition: Transition = {
  duration: motionDuration.fast,
  ease: motionEase.out,
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: defaultTransition,
  },
  exit: {
    opacity: 0,
    transition: { duration: motionDuration.fast, ease: motionEase.out },
  },
};

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: defaultTransition,
  },
};

export const slideInFromRight: Variants = {
  hidden: { opacity: 0, x: 24 },
  visible: {
    opacity: 1,
    x: 0,
    transition: defaultTransition,
  },
  exit: {
    opacity: 0,
    x: 24,
    transition: { duration: motionDuration.fast, ease: motionEase.out },
  },
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

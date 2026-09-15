"use client";

import { useSyncExternalStore } from "react";

function subscribeToQuery(query: string, onStoreChange: () => void) {
  const mediaQuery = window.matchMedia(query);
  mediaQuery.addEventListener("change", onStoreChange);

  return () => {
    mediaQuery.removeEventListener("change", onStoreChange);
  };
}

/**
 * JS media queries only. Prefer Tailwind breakpoints for layout.
 * Use this when behavior (not appearance) must change in JavaScript.
 */
export function useMediaQuery(query: string) {
  return useSyncExternalStore(
    (onStoreChange) => subscribeToQuery(query, onStoreChange),
    () => window.matchMedia(query).matches,
    () => false,
  );
}

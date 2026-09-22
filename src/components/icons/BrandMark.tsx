"use client";

import { useId } from "react";
import { cn } from "@/lib/utils";

type BrandMarkProps = {
  className?: string;
  /** Monochrome variant for single-color contexts. */
  variant?: "default" | "mono";
};

/** Primary brand symbol — stylized N monogram for NexEco AI. */
export function BrandMark({ className, variant = "default" }: BrandMarkProps) {
  const uid = useId().replace(/:/g, "");
  const gradId = `nexeco-mark-${uid}`;

  const chipFill = variant === "mono" ? "currentColor" : `url(#${gradId})`;
  const stemStroke = variant === "mono" ? "var(--background, #fff)" : "#ffffff";
  const bridgeStroke = variant === "mono" ? "var(--background, #fff)" : "var(--eco-muted)";
  const hubFill = variant === "mono" ? "var(--background, #fff)" : "#ffffff";

  return (
    <svg
      viewBox="0 0 32 32"
      className={cn("h-7 w-7 shrink-0", className)}
      fill="none"
      aria-hidden="true"
    >
      {variant === "default" ? (
        <defs>
          <linearGradient id={gradId} x1="6" y1="2" x2="26" y2="30" gradientUnits="userSpaceOnUse">
            <stop stopColor="var(--gradient-start, #693bff)" />
            <stop offset="1" stopColor="var(--gradient-end, #5632cc)" />
          </linearGradient>
        </defs>
      ) : null}
      <rect x="2" y="2" width="28" height="28" rx="8" fill={chipFill} />
      <path d="M10 23V9" stroke={stemStroke} strokeWidth="2.75" strokeLinecap="round" />
      <path d="M10 9 22 23" stroke={bridgeStroke} strokeWidth="2.75" strokeLinecap="round" />
      <path d="M22 23V9" stroke={stemStroke} strokeWidth="2.75" strokeLinecap="round" />
      <circle cx="16" cy="16" r="2" fill={hubFill} />
    </svg>
  );
}

/** Mark tuned for dark backgrounds — same full-color chip for contrast. */
export function BrandMarkLight({ className }: { className?: string }) {
  return <BrandMark className={className} />;
}

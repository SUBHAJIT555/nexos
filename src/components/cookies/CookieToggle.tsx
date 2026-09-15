"use client";

import { cn } from "@/lib/utils";

type CookieToggleProps = {
  checked: boolean;
  onChange: (checked: boolean) => void;
  ariaLabel: string;
  disabled?: boolean;
};

export function CookieToggle({
  checked,
  onChange,
  ariaLabel,
  disabled = false,
}: CookieToggleProps) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      aria-label={ariaLabel}
      disabled={disabled}
      onClick={() => onChange(!checked)}
      className={cn(
        "relative inline-flex h-6 w-11 shrink-0 items-center rounded-full border transition-colors duration-200",
        "focus-visible:outline-none focus-visible:shadow-[0_0_0_3px_rgb(107_62_255_/_0.25)]",
        checked
          ? "border-[var(--mint)] bg-[var(--mint)]"
          : "border-neutral-300 bg-neutral-200",
        disabled && "cursor-not-allowed opacity-60",
      )}
    >
      <span
        aria-hidden="true"
        className={cn(
          "inline-block size-5 rounded-full bg-white shadow-sm transition-transform duration-200",
          checked ? "translate-x-[22px]" : "translate-x-0.5",
        )}
      />
    </button>
  );
}

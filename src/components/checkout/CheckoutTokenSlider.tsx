"use client";

import type { CheckoutCatalogItem } from "@/data/checkout";

type CheckoutTokenSliderProps = {
  item: CheckoutCatalogItem;
  tokens: number;
  disabled?: boolean;
  onChange: (tokens: number) => void;
};

export function CheckoutTokenSlider({
  item,
  tokens,
  disabled = false,
  onChange,
}: CheckoutTokenSliderProps) {
  const rate = item.pricePerThousandTokensPaise / 100;

  function clamp(value: number) {
    return Math.min(item.maxTokens, Math.max(item.minTokens, value));
  }

  return (
    <div>
      <label htmlFor={`tokens-${item.id}`} className="text-xs font-medium text-neutral-900">
        Estimated token usage
      </label>
      <div className="mt-2 flex flex-col gap-3 sm:flex-row sm:items-center">
        <input
          id={`tokens-${item.id}`}
          type="range"
          min={item.minTokens}
          max={item.maxTokens}
          step={item.tokenStep}
          disabled={disabled}
          value={tokens}
          onChange={(event) => onChange(clamp(Number(event.target.value)))}
          className="h-2 w-full cursor-pointer appearance-none rounded-full bg-neutral-200 accent-[var(--accent)] disabled:cursor-not-allowed [&::-moz-range-thumb]:size-4 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:border-0 [&::-moz-range-thumb]:bg-[var(--accent)] [&::-webkit-slider-thumb]:size-4 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-[var(--accent)]"
        />
        <input
          type="number"
          min={item.minTokens}
          max={item.maxTokens}
          step={item.tokenStep}
          disabled={disabled}
          value={tokens}
          onChange={(event) => onChange(clamp(Number(event.target.value) || item.minTokens))}
          className="h-10 w-full rounded-sm border border-neutral-300 bg-white px-3 text-sm text-neutral-900 outline-none focus-visible:border-accent disabled:cursor-not-allowed sm:w-36"
        />
      </div>
      {item.appliesPlatformFee ? (
        <p className="mt-2 text-xs text-neutral-600">
          ₹{rate} per 1,000 tokens + 5% platform fee on gateway usage.
        </p>
      ) : (
        <p className="mt-2 text-xs text-neutral-600">₹{rate} per 1,000 tokens.</p>
      )}
    </div>
  );
}

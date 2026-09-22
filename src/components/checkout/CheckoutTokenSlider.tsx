"use client";

import { useEffect, useState } from "react";
import type { CheckoutCatalogItem } from "@/data/checkout";
import { formatTokenCount, normalizeTokenAmount } from "@/lib/checkout/pricing";

type CheckoutTokenSliderProps = {
  item: CheckoutCatalogItem;
  tokens: number;
  disabled?: boolean;
  onChange: (tokens: number) => void;
};

function parseTokenInput(raw: string): number | null {
  const normalized = raw.replace(/,/g, "").trim();
  if (!normalized) {
    return null;
  }
  const value = Number(normalized);
  if (!Number.isFinite(value)) {
    return null;
  }
  return value;
}

export function CheckoutTokenSlider({
  item,
  tokens,
  disabled = false,
  onChange,
}: CheckoutTokenSliderProps) {
  const rate = item.pricePerThousandTokensPaise / 100;
  const [draft, setDraft] = useState(String(tokens));
  const [isEditing, setIsEditing] = useState(false);
  const sliderValue = Math.min(tokens, item.maxTokens);

  useEffect(() => {
    if (!isEditing) {
      setDraft(String(tokens));
    }
  }, [tokens, isEditing]);

  function commitDraft(raw: string) {
    const parsed = parseTokenInput(raw);
    if (parsed == null || parsed < item.minTokens) {
      setDraft(String(tokens));
      return;
    }
    const normalized = normalizeTokenAmount(item, parsed);
    setDraft(String(normalized));
    onChange(normalized);
  }

  function handleDraftChange(raw: string) {
    if (raw !== "" && !/^[\d,]*$/.test(raw)) {
      return;
    }
    setDraft(raw);
    const parsed = parseTokenInput(raw);
    if (parsed != null && parsed >= item.minTokens) {
      onChange(normalizeTokenAmount(item, parsed));
    }
  }

  function handleDraftBlur() {
    setIsEditing(false);
    commitDraft(draft);
  }

  function handleSliderChange(value: number) {
    const clamped = Math.min(item.maxTokens, Math.max(item.minTokens, value));
    setIsEditing(false);
    setDraft(String(clamped));
    onChange(clamped);
  }

  return (
    <div className="space-y-4">
      <div>
        <label htmlFor={`tokens-${item.id}`} className="text-xs font-medium text-neutral-900">
          Token amount
        </label>
        <input
          id={`tokens-${item.id}`}
          type="text"
          inputMode="numeric"
          disabled={disabled}
          value={draft}
          placeholder={String(item.defaultTokens)}
          onFocus={() => setIsEditing(true)}
          onChange={(event) => handleDraftChange(event.target.value)}
          onBlur={handleDraftBlur}
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              event.currentTarget.blur();
            }
          }}
          className="mt-2 h-11 w-full rounded-md border border-neutral-300 bg-white px-3 text-sm tabular-nums text-neutral-900 outline-none transition-colors placeholder:text-neutral-400 focus-visible:border-accent disabled:cursor-not-allowed disabled:bg-neutral-50"
        />
        <p className="mt-1.5 text-xs leading-5 text-neutral-500">
          Enter any amount — no upper limit. Minimum {formatTokenCount(item.minTokens)} tokens.
        </p>
      </div>

      <div className="rounded-md border border-neutral-200 bg-[#f8fafc] px-4 py-3">
        <div className="flex items-center justify-between gap-3">
          <span className="text-xs font-medium text-neutral-700">Quick select</span>
          <span className="text-xs tabular-nums text-neutral-500">
            Slider up to {formatTokenCount(item.maxTokens)}
          </span>
        </div>
        <input
          type="range"
          min={item.minTokens}
          max={item.maxTokens}
          step={item.tokenStep}
          disabled={disabled}
          value={sliderValue}
          onChange={(event) => handleSliderChange(Number(event.target.value))}
          aria-label={`Quick select up to ${formatTokenCount(item.maxTokens)} tokens`}
          className="mt-3 h-2 w-full cursor-pointer appearance-none rounded-full bg-neutral-200 accent-[var(--accent)] disabled:cursor-not-allowed [&::-moz-range-thumb]:size-4 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:border-0 [&::-moz-range-thumb]:bg-[var(--accent)] [&::-webkit-slider-thumb]:size-4 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-[var(--accent)]"
        />
      </div>

      {item.appliesPlatformFee ? (
        <p className="text-xs leading-5 text-neutral-600">
          ₹{rate} per 1,000 tokens + 5% platform fee on gateway usage.
        </p>
      ) : (
        <p className="text-xs leading-5 text-neutral-600">₹{rate} per 1,000 tokens.</p>
      )}
    </div>
  );
}

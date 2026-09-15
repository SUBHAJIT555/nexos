"use client";

import Link from "next/link";
import { useEffect, useId } from "react";
import { createPortal } from "react-dom";
import { CookieToggle } from "@/components/cookies/CookieToggle";
import type { CookiePreferences } from "@/lib/cookies/consent";

type CookiePreferencesModalProps = {
  open: boolean;
  preferences: CookiePreferences;
  onClose: () => void;
  onChange: (preferences: CookiePreferences) => void;
  onAcceptAll: () => void;
  onRejectAll: () => void;
  onConfirmSelection: () => void;
};

type ToggleCategory = {
  id: "functionality" | "analytics" | "advertising";
  name: string;
  description: string;
  ariaLabel: string;
};

const essentialCategory = {
  id: "essential" as const,
  name: "Essential",
  description:
    "These cookies ensure the functionality of the website and enhance its security.",
};

const toggleCategories: ToggleCategory[] = [
  {
    id: "functionality",
    name: "Functionality",
    description:
      "These cookies let us remember your key preferences, like language settings.",
    ariaLabel: "Allow functionality cookies",
  },
  {
    id: "analytics",
    name: "Analytics",
    description:
      "These cookies help us understand our visitors and improve our performance. We may use the services of third-party providers to generate insights.",
    ariaLabel: "Allow analytics cookies",
  },
  {
    id: "advertising",
    name: "Advertising",
    description:
      "These cookies allow us to display personalized ads. We may use the services of third-party partners to provide relevant advertising experiences.",
    ariaLabel: "Allow advertising cookies",
  },
];

export function CookiePreferencesModal({
  open,
  preferences,
  onClose,
  onChange,
  onAcceptAll,
  onRejectAll,
  onConfirmSelection,
}: CookiePreferencesModalProps) {
  const titleId = useId();

  useEffect(() => {
    if (!open) {
      return;
    }

    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onClose();
      }
    }

    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  if (!open) {
    return null;
  }

  return createPortal(
    <div
      className="fixed inset-0 z-[90] flex items-end justify-center bg-neutral-1000/50 p-0 sm:items-center sm:p-4"
      onClick={onClose}
      role="presentation"
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="flex max-h-[min(92vh,760px)] w-full max-w-[720px] flex-col overflow-hidden rounded-t-2xl bg-white text-neutral-900 shadow-[0_24px_80px_rgb(0_0_0_/_0.28)] sm:rounded-2xl"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex-1 overflow-y-auto px-6 pt-6 pb-2 sm:px-8 sm:pt-8">
          <div className="flex items-start justify-between gap-4">
            <h2
              id={titleId}
              className="font-heading text-[28px] leading-[36px] font-semibold text-neutral-900"
            >
              Cookie preferences
            </h2>
            <button
              type="button"
              onClick={onClose}
              className="inline-flex size-9 shrink-0 items-center justify-center rounded-full text-2xl leading-none text-neutral-600 transition-colors hover:bg-neutral-100"
              aria-label="Close"
            >
              ×
            </button>
          </div>

          <div className="mt-5 space-y-4 text-base leading-6 text-neutral-700">
            <p>
              We use cookies to ensure security and core website functionality and to improve our
              services and user experience. We also work with third-party partners, like Google, to
              deliver personalized ads and analyze data. For more information on how Google processes
              data, please visit{" "}
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-2 text-neutral-900 hover:text-neutral-700"
              >
                Google&apos;s Privacy &amp; Terms
              </a>
              .
            </p>
            <p>
              By clicking &quot;Accept all&quot;, you consent to the use of these cookies and data
              sharing as outlined in our{" "}
              <Link
                href="/legal/cookie-policy"
                className="underline underline-offset-2 text-neutral-900 hover:text-neutral-700"
              >
                Cookie Policy
              </Link>
              . You can change your preferences at any time.
            </p>
          </div>

          <div className="mt-2">
            <div className="flex items-start justify-between gap-4 border-t border-neutral-200 py-4">
              <div className="min-w-0 flex-1">
                <p className="text-base font-semibold text-neutral-900">{essentialCategory.name}</p>
                <p className="mt-1 text-sm leading-5 text-neutral-600">
                  {essentialCategory.description}
                </p>
              </div>
              <div className="flex shrink-0 items-center pt-0.5">
                <span className="text-sm font-medium text-neutral-500">Always on</span>
              </div>
            </div>
            {toggleCategories.map((category) => (
              <div
                key={category.id}
                className="flex items-start justify-between gap-4 border-t border-neutral-200 py-4"
              >
                <div className="min-w-0 flex-1">
                  <p className="text-base font-semibold text-neutral-900">{category.name}</p>
                  <p className="mt-1 text-sm leading-5 text-neutral-600">{category.description}</p>
                </div>
                <div className="flex shrink-0 items-center pt-0.5">
                  <CookieToggle
                    checked={preferences[category.id]}
                    ariaLabel={category.ariaLabel}
                    onChange={(checked) =>
                      onChange({
                        ...preferences,
                        [category.id]: checked,
                      })
                    }
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="sticky bottom-0 flex flex-col gap-3 border-t border-neutral-200 bg-neutral-100 px-6 pt-6 pb-6 sm:flex-row sm:justify-end sm:px-8">
          <button
            type="button"
            onClick={onAcceptAll}
            className="inline-flex h-12 items-center justify-center rounded-full border border-neutral-200 bg-white px-7 text-base font-semibold text-neutral-900 transition-colors hover:bg-neutral-50"
          >
            Accept all
          </button>
          <button
            type="button"
            onClick={onRejectAll}
            className="inline-flex h-12 items-center justify-center rounded-full border border-neutral-200 bg-white px-7 text-base font-semibold text-neutral-900 transition-colors hover:bg-neutral-50"
          >
            Reject all
          </button>
          <button
            type="button"
            onClick={onConfirmSelection}
            className="inline-flex h-12 items-center justify-center rounded-full border border-neutral-1000 bg-neutral-1000 px-7 text-base font-semibold text-white transition-opacity hover:opacity-90"
          >
            Confirm selection
          </button>
        </div>
      </div>
    </div>,
    document.body,
  );
}

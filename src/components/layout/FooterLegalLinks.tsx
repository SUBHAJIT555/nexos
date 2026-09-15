"use client";

import Link from "next/link";
import { footerLegal } from "@/config/navigation";
import { useCookieConsent } from "@/components/cookies/CookieConsentProvider";

export function FooterLegalLinks() {
  const { openPreferences } = useCookieConsent();

  return (
    <ul className="flex flex-wrap gap-x-4 gap-y-2">
      {footerLegal.map((item) => (
        <li key={item.id}>
          <Link
            href={item.href ?? "#"}
            className="text-xs text-neutral-600 transition-colors duration-[150ms] hover:text-neutral-900"
          >
            {item.label}
          </Link>
        </li>
      ))}
      <li>
        <button
          type="button"
          onClick={openPreferences}
          className="text-xs text-neutral-600 transition-colors duration-[150ms] hover:text-neutral-900"
        >
          Cookie preferences
        </button>
      </li>
    </ul>
  );
}

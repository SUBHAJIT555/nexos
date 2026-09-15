import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function isExternalHref(href: string, external?: boolean) {
  if (external) {
    return true;
  }

  return /^(https?:|mailto:|tel:)/.test(href);
}

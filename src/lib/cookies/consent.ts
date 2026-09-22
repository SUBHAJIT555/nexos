export type CookieCategory = "functionality" | "analytics" | "advertising";

export type CookiePreferences = {
  essential: true;
  functionality: boolean;
  analytics: boolean;
  advertising: boolean;
};

export const COOKIE_CONSENT_STORAGE_KEY = "z-cookies-consent-nexeco-ai.com";

export const defaultCookiePreferences: CookiePreferences = {
  essential: true,
  functionality: false,
  analytics: false,
  advertising: false,
};

export const acceptAllCookiePreferences: CookiePreferences = {
  essential: true,
  functionality: true,
  analytics: true,
  advertising: true,
};

export function parseCookiePreferences(value: string | null): CookiePreferences | null {
  if (!value) {
    return null;
  }

  try {
    const parsed = JSON.parse(value) as Partial<CookiePreferences>;
    return {
      essential: true,
      functionality: Boolean(parsed.functionality),
      analytics: Boolean(parsed.analytics),
      advertising: Boolean(parsed.advertising),
    };
  } catch {
    return null;
  }
}

export function serializeCookiePreferences(preferences: CookiePreferences): string {
  return JSON.stringify({
    essential: true,
    functionality: preferences.functionality,
    analytics: preferences.analytics,
    advertising: preferences.advertising,
  });
}

export function readStoredCookiePreferences(): CookiePreferences | null {
  if (typeof window === "undefined") {
    return null;
  }

  return parseCookiePreferences(window.localStorage.getItem(COOKIE_CONSENT_STORAGE_KEY));
}

export function writeStoredCookiePreferences(preferences: CookiePreferences): void {
  window.localStorage.setItem(
    COOKIE_CONSENT_STORAGE_KEY,
    serializeCookiePreferences(preferences),
  );
}

export function hasStoredCookieConsent(): boolean {
  return readStoredCookiePreferences() !== null;
}

"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { CookiePreferencesModal } from "@/components/cookies/CookiePreferencesModal";
import {
  acceptAllCookiePreferences,
  defaultCookiePreferences,
  readStoredCookiePreferences,
  writeStoredCookiePreferences,
  type CookiePreferences,
} from "@/lib/cookies/consent";

type CookieConsentContextValue = {
  openPreferences: () => void;
  preferences: CookiePreferences;
  hasConsent: boolean;
};

const CookieConsentContext = createContext<CookieConsentContextValue | null>(null);

export function useCookieConsent() {
  const context = useContext(CookieConsentContext);
  if (!context) {
    throw new Error("useCookieConsent must be used within CookieConsentProvider");
  }
  return context;
}

export function CookieConsentProvider({ children }: { children: ReactNode }) {
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>(defaultCookiePreferences);
  const [hasConsent, setHasConsent] = useState(false);

  useEffect(() => {
    setMounted(true);
    const stored = readStoredCookiePreferences();
    if (stored) {
      setPreferences(stored);
      setHasConsent(true);
      return;
    }

    setOpen(true);
  }, []);

  const persistAndClose = useCallback((next: CookiePreferences) => {
    writeStoredCookiePreferences(next);
    setPreferences(next);
    setHasConsent(true);
    setOpen(false);
  }, []);

  const openPreferences = useCallback(() => {
    const stored = readStoredCookiePreferences();
    if (stored) {
      setPreferences(stored);
    }
    setOpen(true);
  }, []);

  const value = useMemo(
    () => ({
      openPreferences,
      preferences,
      hasConsent,
    }),
    [openPreferences, preferences, hasConsent],
  );

  return (
    <CookieConsentContext.Provider value={value}>
      {children}
      {mounted ? (
        <CookiePreferencesModal
          open={open}
          preferences={preferences}
          onClose={() => setOpen(false)}
          onChange={setPreferences}
          onAcceptAll={() => persistAndClose(acceptAllCookiePreferences)}
          onRejectAll={() => persistAndClose(defaultCookiePreferences)}
          onConfirmSelection={() => persistAndClose(preferences)}
        />
      ) : null}
    </CookieConsentContext.Provider>
  );
}

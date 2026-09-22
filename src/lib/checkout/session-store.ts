import type { CheckoutSession } from "@/types/checkout";

const sessions = new Map<string, CheckoutSession>();

export function saveCheckoutSession(session: CheckoutSession): void {
  sessions.set(session.id, session);
}

export function getCheckoutSession(sessionId: string): CheckoutSession | null {
  return sessions.get(sessionId) ?? null;
}

export function updateCheckoutSession(
  sessionId: string,
  patch: Partial<Pick<CheckoutSession, "status">>,
): CheckoutSession | null {
  const current = sessions.get(sessionId);
  if (!current) {
    return null;
  }

  const next = { ...current, ...patch };
  sessions.set(sessionId, next);
  return next;
}

import { randomUUID } from "node:crypto";
import { NextResponse } from "next/server";
import { saveCheckoutSession } from "@/lib/checkout/session-store";
import { validateCheckoutSessionPayload } from "@/lib/checkout/validate";
import type { CheckoutSession, CheckoutSessionResponse } from "@/types/checkout";

export async function POST(request: Request) {
  let payload: unknown;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  const validation = validateCheckoutSessionPayload(payload);
  if (!validation.ok) {
    return NextResponse.json({ error: validation.error }, { status: 400 });
  }

  const session: CheckoutSession = {
    ...validation.input,
    id: randomUUID(),
    status: "awaiting_payment",
    createdAt: new Date().toISOString(),
  };

  saveCheckoutSession(session);

  const response: CheckoutSessionResponse = {
    sessionId: session.id,
    status: session.status,
    // Payment provider integration point:
    // paymentUrl: await paymentAdapter.createCheckoutSession(session),
    // clientSecret: await paymentAdapter.createPaymentIntent(session),
  };

  return NextResponse.json(response);
}

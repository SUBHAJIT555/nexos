import { NextResponse } from "next/server";
import { getCheckoutSession, updateCheckoutSession } from "@/lib/checkout/session-store";

type RouteContext = {
  params: Promise<{ sessionId: string }>;
};

/**
 * Temporary completion endpoint until a payment provider is connected.
 * Replace this with a provider webhook once payments are integrated.
 */
export async function POST(_request: Request, context: RouteContext) {
  const { sessionId } = await context.params;
  const session = getCheckoutSession(sessionId);

  if (!session) {
    return NextResponse.json({ error: "Checkout session not found." }, { status: 404 });
  }

  if (session.status === "completed") {
    return NextResponse.json({ sessionId, status: session.status });
  }

  const updated = updateCheckoutSession(sessionId, { status: "completed" });
  if (!updated) {
    return NextResponse.json({ error: "Unable to complete checkout session." }, { status: 500 });
  }

  return NextResponse.json({ sessionId: updated.id, status: updated.status });
}

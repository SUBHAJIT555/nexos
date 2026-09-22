import { NextResponse } from "next/server";
import { getCheckoutSession, updateCheckoutSession } from "@/lib/checkout/session-store";

type RouteContext = {
  params: Promise<{ sessionId: string }>;
};

export async function POST(request: Request, context: RouteContext) {
  const { sessionId } = await context.params;
  const session = getCheckoutSession(sessionId);

  if (!session) {
    return NextResponse.json({ error: "Checkout session not found." }, { status: 404 });
  }

  let body: Record<string, unknown> = {};
  try {
    body = (await request.json()) as Record<string, unknown>;
  } catch {
    return NextResponse.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  const paymentMethod = body.paymentMethod;
  const upiId = typeof body.upiId === "string" ? body.upiId.trim() : "";

  if (paymentMethod !== "upi") {
    return NextResponse.json(
      { error: "Only UPI payments are available right now." },
      { status: 400 },
    );
  }

  if (upiId.length < 3) {
    return NextResponse.json({ error: "Enter a valid UPI ID." }, { status: 400 });
  }

  if (session.status === "completed") {
    return NextResponse.json({
      sessionId,
      status: session.status,
      totalAmount: session.totalAmount,
    });
  }

  const updated = updateCheckoutSession(sessionId, { status: "completed" });
  if (!updated) {
    return NextResponse.json({ error: "Unable to complete checkout session." }, { status: 500 });
  }

  return NextResponse.json({
    sessionId: updated.id,
    status: updated.status,
    totalAmount: updated.totalAmount,
    paymentMethod: "upi",
  });
}

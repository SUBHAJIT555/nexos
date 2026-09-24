"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Card } from "@/components/ui/Card";
import { PENDING_ORDER_KEY } from "@/lib/checkout/mpurse";
import { formatCurrency } from "@/lib/checkout/format";

const cartDraftKey = "checkout-cart-draft";
const customerDraftKey = "checkout-customer-draft";

type PayView = "loading" | "pay" | "success" | "failed" | "missing";

type StatusPayload = {
  status?: string;
  order_id?: string;
  amount?: string | number;
  txn_id?: string;
  error?: string;
  message?: string;
  qr_data?: string;
  intent_url?: string;
  payment_mode?: string;
  receipt_sent?: boolean;
  mail_error?: string;
};

function resolvePayStatus(result: StatusPayload) {
  const status = (result.status || "pending").toLowerCase();
  const msg = `${result.message || ""} ${result.error || ""}`.toLowerCase();
  if (
    status === "failed" &&
    /not found|database error|no record|does not exist/.test(msg)
  ) {
    return "pending";
  }
  return status;
}

function isPhoneBrowser() {
  if (typeof navigator === "undefined") {
    return false;
  }
  return /Android|iPhone|iPad|iPod|webOS|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent,
  );
}

function qrImageSrc(qrData?: string, intentUrl?: string) {
  if (qrData) {
    return qrData.startsWith("data:") ? qrData : `data:image/png;base64,${qrData}`;
  }
  if (intentUrl) {
    return `https://api.qrserver.com/v1/create-qr-code/?size=240x240&ecc=M&data=${encodeURIComponent(intentUrl)}`;
  }
  return "";
}

export function CheckoutPayPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [view, setView] = useState<PayView>("loading");
  const [details, setDetails] = useState<StatusPayload>({});
  const [isPhone, setIsPhone] = useState(false);

  useEffect(() => {
    setIsPhone(isPhoneBrowser());
  }, []);

  useEffect(() => {
    const orderId =
      searchParams.get("order_id") || sessionStorage.getItem(PENDING_ORDER_KEY) || "";

    if (!orderId) {
      setView("missing");
      return;
    }

    const poll = { cancelled: false, timer: 0 };

    const check = async () => {
      const res = await fetch("/api/mpurse.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "status", order_id: orderId }),
      });
      const raw = await res.text();
      let result: StatusPayload = {};
      try {
        result = raw ? (JSON.parse(raw) as StatusPayload) : {};
      } catch {
        throw new Error("Payment PHP is not running.");
      }
      if (poll.cancelled) {
        return null;
      }
      setDetails(result);
      return resolvePayStatus(result);
    };

    const finish = (next: PayView) => {
      if (poll.timer) {
        window.clearInterval(poll.timer);
        poll.timer = 0;
      }
      if (next === "success") {
        sessionStorage.removeItem(PENDING_ORDER_KEY);
        try {
          window.localStorage.removeItem(cartDraftKey);
          window.localStorage.removeItem(customerDraftKey);
        } catch {
          /* ignore */
        }
      }
      setView(next);
    };

    const run = async () => {
      try {
        const status = await check();
        if (poll.cancelled || !status) {
          return;
        }
        if (status === "success" || status === "failed") {
          finish(status);
          return;
        }
        setView("pay");
      } catch {
        if (!poll.cancelled) {
          setDetails({ error: "Unable to load payment." });
          setView("pay");
        }
        return;
      }

      poll.timer = window.setInterval(() => {
        void (async () => {
          try {
            const next = await check();
            if (poll.cancelled || !next) {
              return;
            }
            if (next === "success" || next === "failed") {
              finish(next);
            }
          } catch {
            /* keep waiting */
          }
        })();
      }, 3000);
    };

    void run();

    return () => {
      poll.cancelled = true;
      if (poll.timer) {
        window.clearInterval(poll.timer);
      }
    };
  }, [searchParams]);

  const amountPaise =
    details.amount !== undefined && details.amount !== null && details.amount !== ""
      ? Math.round(Number(details.amount) * 100)
      : null;
  const qrSrc = qrImageSrc(details.qr_data, details.intent_url);

  return (
    <Card className="mx-auto max-w-lg p-6 md:p-8">
      {view === "loading" && (
        <>
          <h1 className="font-heading text-2xl font-semibold text-neutral-900">Preparing payment…</h1>
          <p className="mt-2 text-sm text-neutral-600">Please wait.</p>
        </>
      )}

      {view === "pay" && (
        <>
          <h1 className="font-heading text-2xl font-semibold text-neutral-900">Complete UPI payment</h1>
          <p className="mt-2 text-sm text-neutral-600">
            {amountPaise !== null ? `Amount: ${formatCurrency(amountPaise)}. ` : ""}
            {details.order_id ? `Order ${details.order_id}.` : ""}
          </p>

          {isPhone && details.intent_url ? (
            <a
              href={details.intent_url}
              className="mt-6 inline-flex h-12 w-full items-center justify-center rounded-full bg-neutral-1000 text-base font-semibold text-white"
            >
              Open UPI app
            </a>
          ) : null}

          {qrSrc ? (
            <div className="mt-6 flex flex-col items-center gap-3">
              <p className="text-center text-sm text-neutral-600">
                {isPhone
                  ? "Or scan this QR from another device"
                  : "Scan with GPay, PhonePe, Paytm, or any UPI app on your phone."}
              </p>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={qrSrc} alt="UPI QR code" className="size-60 rounded-lg border border-neutral-200" />
            </div>
          ) : null}

          {!qrSrc && !details.intent_url ? (
            <p className="mt-4 text-sm text-red-600" role="alert">
              {details.error || details.message || "Payment details are not available."}
            </p>
          ) : null}

          <p className="mt-6 text-xs text-neutral-500">
            Keep this page open until payment is confirmed automatically.
          </p>
        </>
      )}

      {view === "success" && (
        <>
          <h1 className="font-heading text-2xl font-semibold text-neutral-900">Payment successful</h1>
          <p className="mt-2 text-sm text-neutral-600">
            {details.order_id ? `Order ID: ${details.order_id}. ` : ""}
            {amountPaise !== null ? `Amount paid: ${formatCurrency(amountPaise)}.` : ""}
          </p>
          {details.receipt_sent ? (
            <p className="mt-3 text-sm text-neutral-700">
              A payment receipt was sent to your email. Check your inbox and spam folder.
            </p>
          ) : details.mail_error ? (
            <p className="mt-3 text-sm text-amber-800" role="status">
              Payment recorded, but we could not email your receipt yet ({details.mail_error}). Save your order ID
              and contact {`info@nexeco-ai.com`} if needed.
            </p>
          ) : (
            <p className="mt-3 text-sm text-neutral-600">
              Your receipt will be emailed once sending is configured on the server.
            </p>
          )}
          <button
            type="button"
            onClick={() => router.push("/")}
            className="mt-6 inline-flex h-12 items-center justify-center rounded-full bg-neutral-1000 px-7 text-base font-semibold text-white"
          >
            Back to home
          </button>
        </>
      )}

      {view === "failed" && (
        <>
          <h1 className="font-heading text-2xl font-semibold text-neutral-900">Payment not completed</h1>
          <p className="mt-2 text-sm text-neutral-600">
            {details.message || details.error || "The UPI payment was not completed. Your plan selections are still saved."}
          </p>
          <Link
            href="/checkout"
            className="mt-6 inline-flex h-12 items-center justify-center rounded-full border border-neutral-200 px-7 text-base font-semibold text-neutral-900"
          >
            Try checkout again
          </Link>
        </>
      )}

      {view === "missing" && (
        <>
          <h1 className="font-heading text-2xl font-semibold text-neutral-900">No order found</h1>
          <p className="mt-2 text-sm text-neutral-600">Start checkout again to generate a new UPI payment.</p>
          <Link
            href="/checkout"
            className="mt-6 inline-flex h-12 items-center justify-center rounded-full bg-neutral-1000 px-7 text-base font-semibold text-white"
          >
            Go to checkout
          </Link>
        </>
      )}
    </Card>
  );
}

"use client";

import { useEffect, useId } from "react";
import { createPortal } from "react-dom";
import { homepagePlatformDialog } from "@/data/homepage";

type PlatformDialogProps = {
  open: boolean;
  onClose: () => void;
};

export function PlatformDialog({ open, onClose }: PlatformDialogProps) {
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
      className="fixed inset-0 z-[80] flex items-center justify-center bg-neutral-1000/50 p-4"
      onClick={onClose}
      role="presentation"
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="w-[min(720px,calc(100vw-2rem))] rounded-md bg-white p-8 text-neutral-900 shadow-[0_24px_80px_rgb(0_0_0_/_0.28)]"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-6">
          <h2 id={titleId} className="font-heading text-[28px] leading-[36.4px] font-semibold">
            {homepagePlatformDialog.heading}
          </h2>
          <button
            type="button"
            onClick={onClose}
            className="size-9 shrink-0 rounded-full text-xl leading-none text-neutral-600 hover:bg-neutral-100"
            aria-label="Close"
          >
            ×
          </button>
        </div>
        <div className="mt-5 space-y-4 text-base leading-6 text-neutral-700">
          {homepagePlatformDialog.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 24)}>{paragraph}</p>
          ))}
        </div>
      </div>
    </div>,
    document.body,
  );
}

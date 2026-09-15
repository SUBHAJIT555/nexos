"use client";

import { useEffect, useId } from "react";
import { createPortal } from "react-dom";
import { extensionYoutube } from "@/assets/extension";
import { CloseIcon } from "@/components/extension/ExtensionIcons";

type ExtensionVideoModalProps = {
  open: boolean;
  onClose: () => void;
};

export function ExtensionVideoModal({ open, onClose }: ExtensionVideoModalProps) {
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
      className="fixed inset-0 z-[80] flex items-center justify-center bg-neutral-1000/50 p-6"
      onClick={onClose}
      role="presentation"
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="relative w-10/12 max-w-[1200px]"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute -top-5 -right-5 z-20 flex size-12 items-center justify-center rounded-full bg-accent text-white hover:bg-[var(--accent-hover)]"
          aria-label="Close"
        >
          <CloseIcon className="fill-white text-white" />
        </button>
        <h2 id={titleId} className="sr-only">
          {extensionYoutube.title}
        </h2>
        <div className="relative h-0 overflow-hidden rounded-md pb-[56.25%]">
          <iframe
            title={extensionYoutube.title}
            src={extensionYoutube.embed}
            className="absolute inset-0 h-full w-full bg-neutral-900"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </div>,
    document.body,
  );
}

"use client";

import { useId, useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import type { ProductFaqItem, RichSegment } from "@/data/products/types";
import { Container } from "@/components/layout/Container";
import { cn, isExternalHref } from "@/lib/utils";
import { motionDuration, motionEase } from "@/lib/animation/motion";

function RichAnswer({ segments }: { segments: RichSegment[] }) {
  return (
    <>
      {segments.map((segment, index) => {
        if (typeof segment === "string") {
          return <span key={index}>{segment}</span>;
        }

        if (isExternalHref(segment.href)) {
          return (
            <a
              key={`${segment.href}-${index}`}
              href={segment.href}
              className="text-accent hover:text-[var(--accent-hover)]"
              target="_blank"
              rel="noopener noreferrer"
            >
              {segment.label}
            </a>
          );
        }

        return (
          <Link
            key={`${segment.href}-${index}`}
            href={segment.href}
            className="text-accent hover:text-[var(--accent-hover)]"
          >
            {segment.label}
          </Link>
        );
      })}
    </>
  );
}

type ProductFaqProps = {
  heading: string;
  items: ProductFaqItem[];
  tabs?: { id: string; label: string; items: ProductFaqItem[] }[];
  variant?: "dividers" | "cards";
  className?: string;
  headingClassName?: string;
  gridClassName?: string;
};

export function ProductFaq({
  heading,
  items,
  tabs,
  variant = "dividers",
  className,
  headingClassName,
  gridClassName,
}: ProductFaqProps) {
  const [tabId, setTabId] = useState(tabs?.[0]?.id ?? "");
  const [openId, setOpenId] = useState<string | null>(null);
  const baseId = useId();
  const list = tabs ? (tabs.find((tab) => tab.id === tabId)?.items ?? items) : items;

  return (
    <section className={cn("bg-white py-16 md:py-24", className)}>
      <Container>
        <div
          className={cn(
            "grid gap-10 lg:grid-cols-[minmax(0,468px)_minmax(0,602px)] lg:justify-between",
            gridClassName,
          )}
        >
          <h2
            className={cn(
              "font-heading text-[36px] leading-[1.2] font-semibold tracking-[-0.015em] text-neutral-900 md:text-[48px] md:leading-[57.6px]",
              headingClassName,
            )}
          >
            {heading}
          </h2>
          <div>
            {tabs ? (
              <div
                role="tablist"
                aria-label="FAQ topics"
                className="mb-2 flex gap-0 overflow-x-auto border-b border-neutral-200"
              >
                {tabs.map((tab) => {
                  const selected = tab.id === tabId;
                  return (
                    <button
                      key={tab.id}
                      type="button"
                      role="tab"
                      aria-selected={selected}
                      className={cn(
                        "min-w-[120px] flex-1 border-b-2 pb-2 text-base font-medium whitespace-nowrap transition-colors duration-[150ms]",
                        selected
                          ? "border-accent text-accent"
                          : "border-transparent text-neutral-600 hover:text-neutral-900",
                      )}
                      onClick={() => {
                        setTabId(tab.id);
                        setOpenId(null);
                      }}
                    >
                      {tab.label}
                    </button>
                  );
                })}
              </div>
            ) : null}

            <div className={variant === "cards" ? "" : "divide-y divide-neutral-200"}>
              {list.map((item) => {
                const isOpen = openId === item.id;
                const panelId = `${baseId}-${item.id}-panel`;
                const buttonId = `${baseId}-${item.id}-button`;

                return (
                  <div
                    key={item.id}
                    className={
                      variant === "cards"
                        ? "mb-4 rounded-2xl border border-[#dbe4eb] bg-white px-8 py-6 last:mb-0 hover:shadow-sm"
                        : undefined
                    }
                  >
                    <h3>
                      <button
                        id={buttonId}
                        type="button"
                        aria-expanded={isOpen}
                        aria-controls={panelId}
                        className={cn(
                          "flex w-full items-start justify-between gap-4 text-left text-base font-medium text-neutral-900",
                          variant === "cards" ? "py-0" : "py-[15px]",
                        )}
                        onClick={() => setOpenId(isOpen ? null : item.id)}
                      >
                        <span className="min-w-0 flex-1">{item.question}</span>
                        <ChevronDown
                          aria-hidden="true"
                          className={cn(
                            "mt-1 size-4 shrink-0 text-neutral-600 transition-transform duration-200",
                            isOpen && "rotate-180",
                          )}
                        />
                      </button>
                    </h3>
                    <AnimatePresence initial={false}>
                      {isOpen ? (
                        <motion.div
                          id={panelId}
                          role="region"
                          aria-labelledby={buttonId}
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: motionDuration.md, ease: motionEase.out }}
                          className="overflow-hidden"
                        >
                          <div className="space-y-3 pb-4 text-base leading-6 text-neutral-700">
                            {item.answer.map((paragraph, index) => (
                              <p key={index}>
                                <RichAnswer segments={[...paragraph]} />
                              </p>
                            ))}
                          </div>
                        </motion.div>
                      ) : null}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

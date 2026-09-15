"use client";

import { useId, useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { homepageFaq, type RichSegment } from "@/data/homepage";
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
              key={segment.href}
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
            key={segment.href}
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

export function Faq() {
  const [tabId, setTabId] = useState<(typeof homepageFaq.tabs)[number]["id"]>("ai-platform");
  const [openId, setOpenId] = useState<string | null>(null);
  const baseId = useId();
  const items = homepageFaq.items[tabId];

  return (
    <section className="bg-white py-16 md:py-24">
      <Container>
        <div className="grid grid-cols-12 gap-y-8 sm:gap-x-8">
          <div className="col-span-12 md:col-span-5">
            <h2 className="font-heading text-[36px] leading-[1.2] font-semibold tracking-[-0.015em] text-neutral-900 md:text-[40px] md:leading-[48px]">
              {homepageFaq.heading}
            </h2>
          </div>
          <div className="col-span-12 md:col-span-7">
            <div
              role="tablist"
              aria-label="FAQ topics"
              className="flex w-full gap-2 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            >
              {homepageFaq.tabs.map((tab) => {
                const selected = tab.id === tabId;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    role="tab"
                    aria-selected={selected}
                    className={cn(
                      "group flex min-w-[120px] shrink-0 grow flex-col items-center gap-2 border-b-2 pb-2 text-base font-medium whitespace-nowrap transition-all outline-none max-md:w-fit",
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

            <div className="mt-2">
              {items.map((item) => {
                const isOpen = openId === item.id;
                const panelId = `${baseId}-${item.id}-panel`;
                const buttonId = `${baseId}-${item.id}-button`;

                return (
                  <div
                    key={item.id}
                    className="mb-4 cursor-pointer rounded-2xl border border-[#dbe4eb] bg-white px-8 py-6 last:mb-0 hover:shadow-sm"
                  >
                    <h3>
                      <button
                        id={buttonId}
                        type="button"
                        aria-expanded={isOpen}
                        aria-controls={panelId}
                        className="group flex w-full items-start justify-between gap-4 text-left text-base font-medium text-neutral-900 outline-none transition-all focus-visible:shadow-[0_0_0_2px_rgba(107,62,255,0.35)]"
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
                          <div className="space-y-3 pt-4 text-base leading-6 text-neutral-700">
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

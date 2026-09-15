"use client";

import { useId, useState } from "react";
import { ChevronDown } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { Container } from "@/components/layout/Container";
import { gatewayFaqAbout, gatewayFaqProduct } from "@/data/products/gateway-faq";
import { cn } from "@/lib/utils";
import { motionDuration, motionEase } from "@/lib/animation/motion";

const tabs = [
  { id: "about", label: "About AI Gateway", items: gatewayFaqAbout },
  { id: "product", label: "nexos.ai Gateway", items: gatewayFaqProduct },
];

export function GatewayFaq() {
  const [tabId, setTabId] = useState("about");
  const [openId, setOpenId] = useState<string | null>(null);
  const baseId = useId();
  const list = tabs.find((tab) => tab.id === tabId)?.items ?? gatewayFaqAbout;

  return (
    <section id="faq" className="bg-white py-16 md:py-24">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[minmax(0,468px)_minmax(0,723px)] lg:justify-between">
          <h2 className="font-heading text-[36px] leading-[1.2] font-semibold tracking-[-0.015em] text-neutral-900 md:text-[48px] md:leading-[57.6px]">
            FAQ
          </h2>
          <div>
            <div role="tablist" aria-label="FAQ topics" className="mb-2 flex gap-0 overflow-x-auto border-b border-neutral-200">
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
            <div>
              {list.map((item) => {
                const isOpen = openId === item.id;
                const panelId = `${baseId}-${item.id}-panel`;
                const buttonId = `${baseId}-${item.id}-button`;
                return (
                  <div
                    key={item.id}
                    className="mb-4 rounded-2xl border border-[#dbe4eb] bg-white px-8 py-6 last:mb-0 hover:shadow-sm"
                  >
                    <h3>
                      <button
                        id={buttonId}
                        type="button"
                        aria-expanded={isOpen}
                        aria-controls={panelId}
                        className="flex w-full items-start justify-between gap-4 py-0 text-left text-base font-medium text-neutral-900"
                        onClick={() => setOpenId(isOpen ? null : item.id)}
                      >
                        {item.question}
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
                            {item.blocks.map((block, index) =>
                              block.type === "ul" ? (
                                <ul key={index} className="list-disc space-y-1 pl-5">
                                  {block.items.map((entry) => (
                                    <li key={entry}>{entry}</li>
                                  ))}
                                </ul>
                              ) : (
                                <p key={index}>{block.text}</p>
                              ),
                            )}
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

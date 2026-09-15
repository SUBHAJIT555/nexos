"use client";

import { useId, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { Container } from "@/components/layout/Container";
import { deepTeams } from "@/data/features/deep-research";
import { cn } from "@/lib/utils";
import { motionDuration, motionEase } from "@/lib/animation/motion";

export function DeepResearchTeams() {
  const [openId, setOpenId] = useState(deepTeams.items[0].id);
  const baseId = useId();
  const openItem = deepTeams.items.find((item) => item.id === openId) ?? deepTeams.items[0];

  return (
    <section className="bg-white py-16">
      <Container>
        <h2 className="mx-auto max-w-[768px] text-center font-heading text-[36px] leading-[1.2] font-semibold tracking-[-0.015em] text-neutral-900 md:text-[48px] md:leading-[57.6px]">
          {deepTeams.heading}
        </h2>
        <p className="mx-auto mt-5 max-w-[768px] text-center text-base leading-6 text-neutral-700">
          {deepTeams.intro}
        </p>
        <div className="mt-10 grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="overflow-hidden rounded-md">
            <AnimatePresence mode="wait">
              <motion.div
                key={openItem.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: motionDuration.md, ease: motionEase.out }}
              >
                <Image
                  src={openItem.image}
                  alt={openItem.alt}
                  sizes="(min-width: 1024px) 464px, 100vw"
                  className="h-auto w-full max-w-[464px] rounded-md"
                />
              </motion.div>
            </AnimatePresence>
          </div>
          <div className="space-y-4">
            {deepTeams.items.map((item) => {
              const isOpen = openId === item.id;
              const panelId = `${baseId}-${item.id}-panel`;
              const buttonId = `${baseId}-${item.id}-button`;
              return (
                <div
                  key={item.id}
                  className={cn(
                    "cursor-pointer border-l-2 py-1 pl-6 transition-colors duration-200",
                    isOpen ? "border-accent" : "border-[#a3b4c2]",
                  )}
                >
                  <h3>
                    <button
                      id={buttonId}
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      className="flex w-full items-start justify-between gap-4 py-1 text-left text-base font-medium text-neutral-900 outline-none"
                      onClick={() => setOpenId(item.id)}
                    >
                      {item.label}
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
                        <p className="pb-2 text-base leading-6 text-neutral-700">{item.body}</p>
                      </motion.div>
                    ) : null}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}

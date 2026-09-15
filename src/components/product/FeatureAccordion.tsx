"use client";

import { useId, useState, type ReactNode } from "react";
import Image from "next/image";
import type { StaticImageData } from "next/image";
import { ChevronDown } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { motionDuration, motionEase } from "@/lib/animation/motion";
import type { ProductLink } from "@/data/products/types";

export type FeatureAccordionItem = {
  id: string;
  title: string;
  lead?: string;
  body: string;
  image?: StaticImageData;
  imageAlt?: string;
};

type FeatureAccordionProps = {
  heading: string;
  body?: string;
  items: FeatureAccordionItem[];
  cta?: ProductLink;
  visual?: ReactNode;
  layout?: "default" | "rail";
  visualSide?: "left" | "right";
};

export function FeatureAccordion({
  heading,
  body,
  items,
  cta,
  visual,
  layout = "default",
  visualSide = "right",
}: FeatureAccordionProps) {
  const [openId, setOpenId] = useState<string | null>(items[0]?.id ?? null);
  const baseId = useId();
  const openItem = items.find((item) => item.id === openId) ?? items[0];
  const activeImage = openItem?.image;
  const hasItemImages = items.some((item) => item.image);

  const headingBlock = (
    <>
      <h2
        className={cn(
          "font-heading text-[36px] leading-[1.2] font-semibold tracking-[-0.015em] text-neutral-900 md:text-[48px] md:leading-[57.6px]",
          layout === "rail" && "mx-auto max-w-[768px] text-center",
        )}
      >
        {heading}
      </h2>
      {body ? (
        <p
          className={cn(
            "mt-5 text-base leading-6 text-neutral-700 md:text-[18px] md:leading-[28px]",
            layout === "rail" && "mx-auto max-w-[768px] text-center",
          )}
        >
          {body}
        </p>
      ) : null}
    </>
  );

  const accordion = (
    <div
      className={cn(
        layout === "rail" ? "space-y-2" : "mt-8 divide-y divide-neutral-200 border-y border-neutral-200",
      )}
    >
      {items.map((item) => {
        const isOpen = openId === item.id;
        const panelId = `${baseId}-${item.id}-panel`;
        const buttonId = `${baseId}-${item.id}-button`;
        return (
          <div
            key={item.id}
            className={cn(
              layout === "rail" &&
                "cursor-pointer border-l-2 pl-6 transition-colors duration-200",
              layout === "rail" && (isOpen ? "border-accent" : "border-[#a3b4c2]"),
            )}
          >
            <h3>
              <button
                id={buttonId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                className={cn(
                  "flex w-full items-start justify-between gap-4 text-left text-base font-medium text-neutral-900",
                  layout === "rail" ? "py-1" : "py-4 font-semibold",
                )}
                onClick={() => setOpenId(isOpen ? null : item.id)}
              >
                <span className={cn(layout === "rail" && !isOpen && "text-[#a3b4c2]")}>
                  {item.title}
                </span>
                {layout === "default" ? (
                  <ChevronDown
                    aria-hidden="true"
                    className={cn(
                      "mt-1 size-4 shrink-0 text-neutral-600 transition-transform",
                      isOpen && "rotate-180",
                    )}
                  />
                ) : null}
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
                  <div className="space-y-2 pb-5 text-base leading-6 text-neutral-600">
                    {item.lead ? <p>{item.lead}</p> : null}
                    <p>{item.body}</p>
                  </div>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );

  const still = hasItemImages && activeImage ? (
    <div className={cn(layout === "rail" ? "lg:sticky lg:top-24" : "lg:sticky lg:top-24")}>
      <AnimatePresence mode="wait">
        <motion.div
          key={openItem?.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: motionDuration.md, ease: motionEase.out }}
          className={
            layout === "rail"
              ? "flex max-h-[288px] w-full items-center justify-center overflow-hidden rounded-2xl lg:max-h-[464px]"
              : undefined
          }
        >
          <Image
            src={activeImage}
            alt={openItem?.imageAlt ?? ""}
            sizes="(min-width: 1024px) 560px, 100vw"
            className="h-auto w-full rounded-2xl"
          />
        </motion.div>
      </AnimatePresence>
    </div>
  ) : visual ? (
    <div className="lg:sticky lg:top-24">{visual}</div>
  ) : null;

  return (
    <section className="bg-white py-16 md:py-24">
      <Container>
        {layout === "rail" ? (
          <>
            {headingBlock}
            <div className="mt-10 grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
              {visualSide === "left" ? still : accordion}
              {visualSide === "left" ? accordion : still}
            </div>
            {cta ? (
              <div className="mt-10 flex justify-center">
                <Button href={cta.href} variant="primary">
                  {cta.label}
                </Button>
              </div>
            ) : null}
          </>
        ) : (
          <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              {headingBlock}
              {accordion}
              {cta ? (
                <Button href={cta.href} variant="outline" className="mt-8">
                  {cta.label}
                </Button>
              ) : null}
            </div>
            {still}
          </div>
        )}
      </Container>
    </section>
  );
}

"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { homePortraits } from "@/assets/home";
import { assetSrc } from "@/assets/home";
import { builderLogos } from "@/assets/builder";
import { Container } from "@/components/layout/Container";
import { BuilderDepartmentIcon } from "@/components/builder/BuilderIcons";
import { builderUseCases } from "@/data/products/builder";
import { cn } from "@/lib/utils";
import { motionDuration, motionEase } from "@/lib/animation/motion";

const portraits = {
  vismantas: homePortraits.vismantas,
  ilma: homePortraits.ilma,
  lauryna: homePortraits.lauryna,
  giedre: homePortraits.giedre,
} as const;

export function BuilderUseCases() {
  const [index, setIndex] = useState(0);
  const item = builderUseCases[index];
  const atStart = index === 0;
  const atEnd = index === builderUseCases.length - 1;

  return (
    <section className="bg-white py-16">
      <Container>
        <AnimatePresence mode="wait">
          <motion.div
            key={item.id}
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -24 }}
            transition={{ duration: motionDuration.md, ease: motionEase.out }}
            className="grid min-w-0 items-stretch gap-8 md:grid-cols-2"
          >
            <div className="flex flex-col gap-4">
              <div className="flex w-fit overflow-hidden rounded-[16px] bg-[#F5F3FC] p-3">
                <BuilderDepartmentIcon id={item.icon} />
              </div>
              <h3 className="font-heading text-[36px] leading-[1.2] font-semibold tracking-[-0.015em] text-neutral-900 md:text-[48px] md:leading-[57.6px]">
                {item.department}
              </h3>
              <p className="text-[18px] leading-[28px] text-neutral-800">{item.body}</p>
            </div>
            <div className="flex h-full flex-col justify-end">
              <article className="flex h-full flex-col justify-between gap-4 rounded-[16px] bg-neutral-100 p-8">
                <p className="font-heading text-[22px] leading-[1.3] font-semibold text-neutral-900 md:text-[24px] md:leading-8">
                  {item.quote}
                </p>
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <Image
                      src={portraits[item.portrait]}
                      alt={item.name}
                      width={48}
                      height={48}
                      className="size-12 rounded-full object-cover"
                    />
                    <div>
                      <p className="text-base font-semibold text-neutral-900">{item.name}</p>
                      <p className="text-sm text-neutral-500">{item.role}</p>
                      <p className="text-sm text-neutral-500">{item.company}</p>
                    </div>
                  </div>
                  <img
                    src={assetSrc(builderLogos.nordSecurity)}
                    alt="NordSecurity"
                    className="h-8 w-auto max-w-[142px] object-contain"
                  />
                </div>
              </article>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="mt-10">
          <div className="h-px w-full bg-neutral-200">
            <div
              className="h-px bg-accent transition-[width] duration-300"
              style={{ width: `${((index + 1) / builderUseCases.length) * 100}%` }}
            />
          </div>
          <div className="mt-6 flex gap-3">
            <button
              type="button"
              aria-label="Previous slide"
              disabled={atStart}
              onClick={() => setIndex((current) => Math.max(0, current - 1))}
              className={cn(
                "flex size-12 items-center justify-center rounded-full transition-colors",
                atStart ? "bg-neutral-100 text-neutral-400" : "bg-accent text-white hover:bg-[var(--accent-hover)]",
              )}
            >
              <ArrowLeft className="size-5" />
            </button>
            <button
              type="button"
              aria-label="Next slide"
              disabled={atEnd}
              onClick={() => setIndex((current) => Math.min(builderUseCases.length - 1, current + 1))}
              className={cn(
                "flex size-12 items-center justify-center rounded-full transition-colors",
                atEnd ? "bg-neutral-100 text-neutral-400" : "bg-accent text-white hover:bg-[var(--accent-hover)]",
              )}
            >
              <ArrowRight className="size-5" />
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}

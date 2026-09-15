"use client";

import { useState } from "react";
import Image from "next/image";
import { extensionPageShots } from "@/assets/extension";
import {
  ClockIcon,
  DownloadIcon,
  PlayIcon,
} from "@/components/extension/ExtensionIcons";
import { ExtensionVideoModal } from "@/components/extension/ExtensionVideoModal";
import { Container } from "@/components/layout/Container";
import { extensionHow } from "@/data/features/extension";

export function ExtensionHow() {
  const [open, setOpen] = useState(false);

  return (
    <section className="bg-white py-16">
      <Container>
        <h2 className="mx-auto mb-10 max-w-[768px] text-center font-heading text-[36px] leading-[1.2] font-semibold tracking-[-0.015em] text-neutral-900 md:text-[40px] md:leading-[48px]">
          {extensionHow.headingBefore}
          <span className="block">{extensionHow.headingAfter}</span>
        </h2>
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="relative block w-full overflow-hidden rounded-md text-left"
        >
          <Image
            src={extensionPageShots.walkthrough}
            alt=""
            sizes="1168px"
            className="h-[220px] w-full object-cover object-center md:h-[296px]"
          />
          <div className="absolute inset-0 flex flex-col justify-center gap-8 p-6 md:p-16">
            <div className="flex flex-col gap-4">
              <p className="text-base font-semibold text-white">{extensionHow.caption}</p>
              <p className="font-heading text-[28px] leading-[36.4px] font-semibold text-white md:text-[40px] md:leading-[48px]">
                {extensionHow.walkthrough}
              </p>
            </div>
            <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-6">
              <span className="inline-flex h-12 items-center gap-2 rounded-full border border-[#dbe4eb] bg-white px-7 text-base font-semibold text-neutral-900">
                <PlayIcon className="size-6 text-neutral-900" />
                {extensionHow.playLabel}
              </span>
              <span className="inline-flex items-center gap-2 text-base font-semibold text-white">
                <ClockIcon className="size-6 text-white" />
                {extensionHow.duration}
              </span>
            </div>
          </div>
        </button>
        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-3">
          {extensionHow.steps.map((step) => (
            <article
              key={step.id}
              className="flex h-full flex-col overflow-hidden rounded-md border border-[#dbe4eb] bg-white p-8"
            >
              <div className="flex flex-col gap-4">
                <div className="flex w-fit flex-col gap-1">
                  <span className="text-lg font-bold text-accent">{step.n}</span>
                  <hr className="my-0 w-[26px] border-accent" />
                </div>
                <h3 className="font-heading text-[22px] leading-[28.6px] font-semibold text-neutral-900">
                  {step.title}
                </h3>
                <p className="text-base leading-6 text-neutral-600">{step.body}</p>
                {"link" in step && step.link ? (
                  <div className="mt-auto flex items-center gap-2">
                    <a
                      href={step.link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-base text-accent hover:text-[var(--accent-hover)]"
                    >
                      {step.link.label}
                    </a>
                    <DownloadIcon className="text-accent" />
                  </div>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </Container>
      <ExtensionVideoModal open={open} onClose={() => setOpen(false)} />
    </section>
  );
}

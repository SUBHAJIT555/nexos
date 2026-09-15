"use client";

import { useState } from "react";
import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { messagingRoles } from "@/data/features/messaging";
import { cn } from "@/lib/utils";

export function MessagingRoles() {
  const [active, setActive] = useState(messagingRoles.items[0].id);
  const current = messagingRoles.items.find((item) => item.id === active) ?? messagingRoles.items[0];

  return (
    <section className="bg-white py-16">
      <Container>
        <h2 className="mx-auto max-w-[768px] text-center font-heading text-[36px] leading-[1.2] font-semibold tracking-[-0.015em] text-neutral-900 md:text-[48px] md:leading-[57.6px]">
          {messagingRoles.heading}
        </h2>
        <div className="mt-10 grid items-start gap-8 lg:grid-cols-2 lg:gap-12">
          <div className="flex flex-col">
            {messagingRoles.items.map((item) => {
              const selected = item.id === active;
              return (
                <div key={item.id} className="py-3">
                  <button
                    type="button"
                    aria-expanded={selected}
                    onClick={() => setActive(item.id)}
                    className={cn(
                      "w-full border-l-[3px] py-1 pl-5 text-left text-[22px] leading-[28.6px] font-semibold transition-colors",
                      selected
                        ? "border-accent text-neutral-900"
                        : "border-neutral-200 text-neutral-600 hover:text-neutral-900",
                    )}
                  >
                    {item.label}
                  </button>
                  {selected ? (
                    <p className="mt-3 border-l-[3px] border-transparent pl-5 text-base leading-6 text-neutral-700">
                      {item.body}
                    </p>
                  ) : null}
                </div>
              );
            })}
          </div>
          <div className="relative min-h-[288px] overflow-hidden rounded-md bg-[#F3F0FA] lg:min-h-[464px]">
            <div className="flex h-full max-h-[288px] w-full items-center justify-center overflow-hidden lg:max-h-[464px]">
              <Image
                src={current.image}
                alt={current.alt}
                sizes="(min-width: 1024px) 560px, 100vw"
                className="h-auto w-full rounded-md object-contain"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

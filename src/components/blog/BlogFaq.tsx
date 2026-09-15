"use client";

import { useId, useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import type { BlogFaqItem } from "@/types/blog";

export function BlogFaq({ items }: { items: BlogFaqItem[] }) {
  const baseId = useId();
  const [openId, setOpenId] = useState<string | null>(null);
  if (!items.length) return null;

  return (
    <section id="faq" className="pt-16 pb-16">
      <div className="grid grid-cols-1 gap-y-8 sm:grid-cols-12 sm:gap-x-8">
        <div className="lg:col-span-8 lg:col-start-3">
          <h2 className="font-heading text-[32px] leading-10 font-semibold tracking-[-0.256px] text-neutral-900 md:text-[40px] md:leading-[48px]">
            FAQ
          </h2>
        </div>
        <div className="lg:col-span-8 lg:col-start-3">
          <div>
            {items.map((item, index) => {
              const id = `${baseId}-${index}`;
              const isOpen = openId === id;
              return (
                <div
                  key={item.question}
                  className="mb-4 last:mb-0 rounded-md border border-neutral-200 bg-muted px-8 py-6"
                >
                  <h3>
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={`${id}-panel`}
                      className="flex w-full items-start justify-between gap-4 text-left text-base font-medium text-neutral-900 md:text-[20px] md:leading-[30px]"
                      onClick={() => setOpenId(isOpen ? null : id)}
                    >
                      {item.question}
                      <ChevronDown
                        aria-hidden="true"
                        className={cn(
                          "mt-1 size-4 shrink-0 transition-transform duration-200",
                          isOpen && "rotate-180",
                        )}
                      />
                    </button>
                  </h3>
                  {isOpen ? (
                    <div
                      id={`${id}-panel`}
                      className="blog-prose mt-4 text-neutral-600"
                      dangerouslySetInnerHTML={{ __html: item.answerHtml }}
                    />
                  ) : null}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

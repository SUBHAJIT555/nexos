"use client";

import { useRef } from "react";
import { Container } from "@/components/layout/Container";
import { useGsapContext } from "@/lib/animation/gsap";
import { euQuoteWords } from "@/data/features/eu";

export function EuQuote() {
  const scope = useRef<HTMLDivElement>(null);

  useGsapContext(
    ({ ScrollTrigger, reducedMotion }) => {
      const root = scope.current;
      if (!root) {
        return;
      }

      const words = root.querySelectorAll<HTMLElement>("[data-reveal-word]");

      if (reducedMotion) {
        words.forEach((word) => {
          word.dataset.active = "";
        });
        return;
      }

      ScrollTrigger.create({
        trigger: root,
        start: "top 75%",
        end: "center 40%",
        onUpdate: (self) => {
          const count = Math.min(words.length, Math.floor(self.progress * words.length + 0.001));
          words.forEach((word, index) => {
            if (index < count) {
              word.dataset.active = "";
            } else {
              delete word.dataset.active;
            }
          });
        },
      });
    },
    [],
    scope,
  );

  return (
    <div ref={scope} className="relative py-16 md:py-24">
      <Container>
        <p className="mx-auto max-w-[900px] text-center font-heading text-[20px] leading-[1.3] font-semibold tracking-[-0.015em] text-white md:text-[40px] md:leading-[1.2]">
          {euQuoteWords.map((word, index) => (
            <span key={`${word}-${index}`}>
              <span
                data-reveal-word=""
                suppressHydrationWarning
                className="opacity-10 transition-opacity duration-500 ease-in data-[active]:opacity-100 motion-reduce:opacity-100 motion-reduce:transition-none"
              >
                {word}
              </span>
              {index < euQuoteWords.length - 1 ? " " : ""}
            </span>
          ))}
        </p>
      </Container>
    </div>
  );
}

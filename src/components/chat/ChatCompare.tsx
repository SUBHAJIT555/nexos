import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { chatShots } from "@/assets/chat";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { chatCompare } from "@/data/products/chat";

export function ChatCompare() {
  return (
    <section className="bg-white py-16 md:py-24">
      <Container>
        <div className="grid items-center gap-8 md:grid-cols-2">
          <div className="min-w-0 max-w-[568px]">
            <h2 className="font-heading text-[36px] leading-[1.2] font-semibold tracking-[-0.015em] text-neutral-900 md:text-[40px] md:leading-[48px]">
              {chatCompare.heading}
            </h2>
            <p className="mt-5 text-base leading-6 text-neutral-700 md:text-[18px] md:leading-[28px]">
              {chatCompare.body}
            </p>
            <Button
              href={chatCompare.cta.href}
              variant="ghost"
              iconPosition="end"
              icon={<ArrowRight className="size-4" />}
              className="mt-8 px-0 text-accent hover:opacity-80"
            >
              {chatCompare.cta.label}
            </Button>
          </div>
          <div className="flex min-w-0 items-center justify-center">
            <Image
              src={chatShots.compare}
              alt="compare models chat"
              sizes="(min-width: 768px) 568px, 100vw"
              className="h-auto w-full max-w-[568px] overflow-hidden rounded-[24px]"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}

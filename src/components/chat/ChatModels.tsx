import Image from "next/image";
import { chatShots } from "@/assets/chat";
import { Container } from "@/components/layout/Container";
import { chatModels } from "@/data/products/chat";

export function ChatModels() {
  return (
    <section className="bg-white py-16 md:py-24">
      <Container>
        <div className="grid items-center gap-8 md:grid-cols-2">
          <div className="flex min-w-0 items-center justify-center">
            <Image
              src={chatShots.models}
              alt="world top ai models"
              sizes="(min-width: 768px) 568px, 100vw"
              className="h-auto w-full max-w-[568px] overflow-hidden rounded-[24px]"
            />
          </div>
          <div className="flex min-w-0 flex-col justify-center">
            <h2 className="max-w-[568px] font-heading text-[36px] leading-[1.2] font-semibold tracking-[-0.015em] text-neutral-900 md:text-[40px] md:leading-[48px]">
              {chatModels.heading}
            </h2>
            <p className="mt-5 max-w-[568px] text-base leading-6 text-neutral-700 md:text-[18px] md:leading-[28px]">
              {chatModels.body}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}

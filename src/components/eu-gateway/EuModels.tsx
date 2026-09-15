import { Container } from "@/components/layout/Container";
import { assetSrc } from "@/assets/home";
import { euGatewayGraphics } from "@/assets/eu-gateway";
import { euModels } from "@/data/features/eu";
import {
  EuAnthropicIcon,
  EuGeminiIcon,
  EuMistralIcon,
  EuOpenAiIcon,
} from "@/components/eu-gateway/EuIcons";

const icons = {
  anthropic: EuAnthropicIcon,
  openai: EuOpenAiIcon,
  gemini: EuGeminiIcon,
  mistral: EuMistralIcon,
};

export function EuModels() {
  return (
    <section id="every-frontier-model" className="bg-white py-16 md:py-24">
      <Container>
        <h2 className="text-center font-heading text-[36px] leading-[1.2] font-semibold tracking-[-0.015em] hyphens-none text-neutral-900 md:text-[48px] md:leading-[57.6px]">
          Every frontier model, fully{" "}
          <span className="whitespace-nowrap">EU-resident</span>
        </h2>
        <div className="relative mt-10 overflow-hidden rounded-2xl">
          <img
            src={assetSrc(euGatewayGraphics.dottedBg)}
            alt=""
            width={1165}
            height={486}
            className="pointer-events-none absolute inset-0 h-full w-full object-cover object-center"
          />
          <div className="relative grid grid-cols-1 gap-y-4 p-2 sm:gap-x-4 md:grid-cols-2 md:p-16">
            {euModels.cards.map((card) => {
              const Icon = icons[card.id as keyof typeof icons];
              return (
                <article
                  key={card.id}
                  className="flex h-full flex-col gap-4 rounded-2xl border border-[#dbe4eb] bg-white p-6 shadow-sm"
                >
                  <div className="flex items-center gap-4">
                    <span className="flex h-fit w-fit rounded-md border border-[#dbe4eb] p-2">
                      <Icon className="text-[#464e56]" />
                    </span>
                    <h3 className="text-base font-semibold text-neutral-900">{card.name}</h3>
                  </div>
                  <div className="flex flex-col gap-1">
                    <p className="text-base leading-6 font-medium text-neutral-900">{card.models}</p>
                    <p className="text-base leading-6 text-neutral-600">{card.description}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}

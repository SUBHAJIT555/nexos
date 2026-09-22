import { Container } from "@/components/layout/Container";
import { assetSrc } from "@/assets/home";
import { gatewayShots } from "@/assets/gateway";
import {
  GatewayPainCameraIcon,
  GatewayPainEyeOffIcon,
  GatewayWhyCostIcon,
} from "@/components/gateway/GatewayIcons";
import { gatewayPain } from "@/data/products/gateway";

const painIcons = {
  "dev-cost": GatewayPainCameraIcon,
  ops: GatewayWhyCostIcon,
  obs: GatewayPainEyeOffIcon,
};

export function GatewayPain() {
  return (
    <>
      <section
        id="dark-section-one-ai-gateway-solution-for-your-llm-integration-pain-points"
        className="relative bg-[#071013] py-16 md:pt-16 md:pb-6"
      >
        <Container>
          <h2 className="mx-auto max-w-[800px] text-center font-heading text-[36px] leading-[1.2] font-semibold tracking-[-0.015em] text-white md:text-[40px] md:leading-[48px]">
            {gatewayPain.heading}
          </h2>
          <p className="mx-auto mt-5 max-w-[800px] text-center text-base leading-6 text-[#A3B4C2] md:text-[18px] md:leading-[28px]">
            {gatewayPain.body}
          </p>
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {gatewayPain.cards.map((card) => {
              const Icon = painIcons[card.id as keyof typeof painIcons];
              return (
                <article key={card.id} className="text-center md:text-left">
                  <span className="inline-flex text-accent">
                    <Icon className="size-8" />
                  </span>
                  <h3 className="mt-4 font-heading text-[22px] leading-[28.6px] font-semibold text-white">
                    {card.title}
                  </h3>
                  <p className="mt-3 text-sm leading-[21px] text-[#A3B4C2]">{card.body}</p>
                </article>
              );
            })}
          </div>
          <p className="mx-auto mt-10 max-w-[800px] text-center text-base leading-6 text-white md:text-[18px] md:leading-[28px]">
            {gatewayPain.close}
          </p>
        </Container>
      </section>
      <section id="gateway-models-visual" className="relative overflow-hidden bg-[#071013]">
        <picture className="pointer-events-none absolute inset-0">
          <img
            src={assetSrc(gatewayShots.gradientXl)}
            alt=""
            className="h-full w-full object-cover object-center"
          />
        </picture>
        <Container className="relative py-16 md:py-28">
          <picture>
            <source media="(max-width: 767px)" srcSet={assetSrc(gatewayShots.modelsUiXs)} />
            <img
              src={assetSrc(gatewayShots.modelsUi)}
              alt="NexEco AI gateway model management dashboard showing a fine-tuned GPT-4o model with Claude and Gemini fallback models for reliability."
              width={2144}
              height={760}
              className="mx-auto h-auto w-full max-w-[1168px]"
            />
          </picture>
        </Container>
      </section>
    </>
  );
}

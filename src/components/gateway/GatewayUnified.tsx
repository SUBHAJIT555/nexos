import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { assetSrc } from "@/assets/home";
import { gatewayGraphics } from "@/assets/gateway";
import { CloudCheckIcon } from "@/components/icons/UiIcons";
import {
  GatewayApiCodeIcon,
  GatewayApiCostIcon,
  GatewayPillEndpointIcon,
  GatewayPillModelsIcon,
  GatewayPillShieldIcon,
  GatewayPillUptimeIcon,
} from "@/components/gateway/GatewayIcons";
import { gatewayApi, gatewayUnified, productDocs } from "@/data/products/gateway";
import { isExternalHref } from "@/lib/utils";

const pillMeta = [
  { label: "One API endpoint", Icon: GatewayPillEndpointIcon },
  { label: "Europe-hosted", Icon: CloudCheckIcon },
  { label: "Zero Data Retention", Icon: GatewayPillShieldIcon },
  { label: "99.99% uptime", Icon: GatewayPillUptimeIcon },
  { label: "200+ AI models", Icon: GatewayPillModelsIcon },
] as const;

export function GatewayUnified() {
  const oneApi = gatewayApi.cards[0]!;
  const costs = gatewayApi.cards[1]!;
  const endpointHref = "href" in oneApi && oneApi.href ? oneApi.href : productDocs.gateway;
  const linkLabel = "linkLabel" in oneApi && oneApi.linkLabel ? oneApi.linkLabel : "single API endpoint";
  const bodyBefore = "bodyBefore" in oneApi && oneApi.bodyBefore ? oneApi.bodyBefore : "";
  const bodyAfter = "bodyAfter" in oneApi && oneApi.bodyAfter ? oneApi.bodyAfter : "";

  return (
    <section id="one-unified-gateway" className="relative">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(#361380_0%,#5815cc_28.5%,#621cdc_36%,#8761d2_51.1%,#d1c0f6_66.1%,#f4efff_73.6%,#ffffff_81.2%,#ffffff_100%)]"
      />
      <div className="relative pt-6 pb-6">
        <Container>
          <h2 className="mx-auto max-w-[768px] text-center font-heading text-[36px] leading-[1.2] font-semibold tracking-[-0.015em] text-white md:text-[40px] md:leading-[48px]">
            {gatewayUnified.heading}
          </h2>
          <p className="mx-auto mt-5 max-w-[768px] text-center text-base leading-6 text-white/90 md:text-[18px] md:leading-[28px]">
            {gatewayUnified.body}
          </p>
        </Container>
        <Container className="mt-10">
          <picture>
            <source media="(max-width: 767px)" srcSet={assetSrc(gatewayGraphics.schemaXs)} />
            <img
              src={assetSrc(gatewayGraphics.schemaXl)}
              alt="Diagram showing how the NexEco AI gateway routes AI applications like chatbots and agents through one lightweight unified LLM access layer to models such as Claude, ChatGPT, and Mistral, and integrations like Slack, Teams, and Gmail"
              width={1400}
              height={654}
              className="mx-auto h-auto w-full max-w-[1168px]"
            />
          </picture>
        </Container>
        <Container className="mt-16">
          <div className="grid gap-10 md:grid-cols-2 md:gap-16">
            <article>
              <span className="mb-6 flex size-12 items-center justify-center rounded-xl bg-[#6B3EFF] text-white">
                <GatewayApiCodeIcon className="size-6" />
              </span>
              <h3 className="font-heading text-[22px] leading-[28.6px] font-semibold text-neutral-900">
                {oneApi.title}
              </h3>
              <p className="mt-3 text-base leading-6 text-neutral-700">
                {bodyBefore}
                {isExternalHref(endpointHref) ? (
                  <a
                    href={endpointHref}
                    className="font-medium text-accent hover:text-[var(--accent-hover)]"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {linkLabel}
                  </a>
                ) : (
                  <Link href={endpointHref} className="font-medium text-accent hover:text-[var(--accent-hover)]">
                    {linkLabel}
                  </Link>
                )}
                {bodyAfter}
              </p>
            </article>
            <article>
              <span className="mb-6 flex size-12 items-center justify-center rounded-xl bg-[#6B3EFF] text-white">
                <GatewayApiCostIcon className="size-6" />
              </span>
              <h3 className="font-heading text-[22px] leading-[28.6px] font-semibold text-neutral-900">
                {costs.title}
              </h3>
              <p className="mt-3 text-base leading-6 text-neutral-700">
                {"body" in costs ? costs.body : ""}
              </p>
            </article>
          </div>
        </Container>
        <Container className="mt-12">
          <div className="overflow-hidden rounded-md py-10 [background-image:radial-gradient(circle,#ebe7fb_1px,transparent_1px)] [background-size:6px_6px]">
            <div className="flex w-max motion-reduce:animate-none [animation:home-marquee_40s_linear_infinite]">
              {[0, 1].map((copy) => (
                <div key={copy} className="flex items-center gap-10 pe-10">
                  {pillMeta.map((pill) => (
                    <span
                      key={`${pill.label}-${copy}`}
                      className="inline-flex w-fit shrink-0 items-center gap-2 rounded-full border border-[#dbe4eb] bg-white px-4 py-[6px] text-sm font-medium text-[#262B30]"
                    >
                      <pill.Icon className="size-4 text-accent" />
                      {pill.label}
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}

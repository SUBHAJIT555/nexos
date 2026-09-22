import { Container } from "@/components/layout/Container";
import { assetSrc } from "@/assets/home";
import { euGatewayGraphics } from "@/assets/eu-gateway";
import { euWhy } from "@/data/features/eu";
import { EuDataScannerIcon, EuGlobeShieldIcon, EuLockIcon } from "@/components/eu-gateway/EuIcons";

export function EuWhy() {
  return (
    <section id="why-organizations" className="bg-white py-16 md:py-24">
      <Container>
        <h2 className="mx-auto max-w-[760px] text-center font-heading text-[36px] leading-[1.2] font-semibold tracking-[-0.015em] text-neutral-900 md:text-[48px] md:leading-[57.6px]">
          {euWhy.heading}
        </h2>
        <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2">
          <article className="flex flex-col justify-end overflow-hidden rounded-xl bg-[#eff4f8]">
            <img
              src={assetSrc(euGatewayGraphics.governance)}
              alt="Multiple AI models including Gemini, ChatGPT, Claude, and Mistral accessible through NexEco AI"
              width={1152}
              height={696}
              className="h-auto w-full"
            />
            <div className="px-8 py-6">
              <h3 className="text-lg font-semibold text-neutral-900">{euWhy.lockIn.title}</h3>
              <p className="mt-2 text-sm leading-[21px] text-neutral-600">{euWhy.lockIn.body}</p>
            </div>
          </article>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <article className="rounded-xl border border-[#dbe4eb] bg-[#f7f9fb] p-6 sm:col-span-2">
              <span className="flex h-fit w-fit rounded-md bg-[#d9e0ff] p-3">
                <EuLockIcon className="text-accent" />
              </span>
              <h3 className="mt-4 text-lg font-semibold text-neutral-900">{euWhy.governance.title}</h3>
              <p className="mt-2 text-sm leading-[21px] text-neutral-600">{euWhy.governance.body}</p>
            </article>
            <article className="rounded-xl border border-[#dbe4eb] bg-[#f7f9fb] p-6">
              <span className="flex h-fit w-fit rounded-md bg-[#c0d8fa] p-3">
                <EuGlobeShieldIcon className="text-white" />
              </span>
              <h3 className="mt-4 text-lg font-semibold text-neutral-900">{euWhy.europe.title}</h3>
              <p className="mt-2 text-sm leading-[21px] text-neutral-600">{euWhy.europe.body}</p>
            </article>
            <article className="rounded-xl border border-[#dbe4eb] bg-[#f7f9fb] p-6">
              <span className="flex h-fit w-fit rounded-md bg-[#bbeadf] p-3">
                <EuDataScannerIcon className="text-[#0f766e]" />
              </span>
              <h3 className="mt-4 text-lg font-semibold text-neutral-900">{euWhy.control.title}</h3>
              <p className="mt-2 text-sm leading-[21px] text-neutral-600">{euWhy.control.body}</p>
            </article>
          </div>
        </div>
      </Container>
    </section>
  );
}

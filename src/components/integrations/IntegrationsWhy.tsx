import Image from "next/image";
import Link from "next/link";
import { integrationsShots } from "@/assets/integrations";
import { Container } from "@/components/layout/Container";
import { integrationsWhy } from "@/data/features/integrations";

export function IntegrationsWhy() {
  const [faster, knowledge, secure] = integrationsWhy.cards;

  return (
    <section className="bg-white py-16 md:py-24">
      <Container>
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-4 md:gap-6">
            <h2 className="font-heading text-[36px] leading-[1.2] font-semibold tracking-[-0.015em] text-neutral-900 md:text-[40px] md:leading-[48px]">
              {integrationsWhy.heading}
            </h2>
            <p className="text-base leading-6 text-neutral-700">{integrationsWhy.lead}</p>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-8">
            <article className="flex h-full flex-col-reverse overflow-hidden rounded-lg bg-[#F8FAFC]">
              <div className="flex flex-col gap-4 p-6">
                <h3 className="font-heading text-[22px] leading-[28.6px] font-semibold text-neutral-900 md:text-[32px] md:leading-[38.4px]">
                  {faster.title}
                </h3>
                <p className="text-base leading-6 text-neutral-700">{faster.body}</p>
              </div>
              <div className="grid flex-1 p-6">
                <Image
                  src={integrationsShots.select}
                  alt="Available AI Integrations inside your AI Workspace"
                  sizes="(min-width: 768px) 520px, 100vw"
                  className="h-auto w-full self-center"
                />
              </div>
            </article>

            <article className="flex h-full flex-col-reverse overflow-hidden rounded-lg bg-[#F8FAFC]">
              <div className="flex flex-col gap-4 p-6">
                <h3 className="font-heading text-[22px] leading-[28.6px] font-semibold text-neutral-900 md:text-[32px] md:leading-[38.4px]">
                  {knowledge.title}
                </h3>
                <p className="text-base leading-6 text-neutral-700">{knowledge.body}</p>
              </div>
              <div className="grid flex-1 p-6">
                <Image
                  src={integrationsShots.chat}
                  alt="Citation from SharePoint AI integration"
                  sizes="(min-width: 768px) 520px, 100vw"
                  className="h-auto w-full self-center"
                />
              </div>
            </article>
          </div>

          <article className="overflow-hidden rounded-lg bg-[#F8FAFC]">
            <div className="grid items-center gap-6 p-6 md:grid-cols-2 md:gap-8 md:p-8">
              <div className="min-w-0">
                <h3 className="font-heading text-[22px] leading-[28.6px] font-semibold text-neutral-900 md:text-[32px] md:leading-[38.4px]">
                  {secure.title}
                </h3>
                <p className="mt-4 text-base leading-6 text-neutral-700">
                  {secure.bodyBefore}
                  <Link href={secure.href ?? "/ai-workspace-for-multiple-llms"} className="text-accent hover:text-[var(--accent-hover)]">
                    {secure.linkLabel}
                  </Link>
                  {secure.bodyAfter}
                </p>
              </div>
              <Image
                src={integrationsShots.secure}
                alt="AI Integrations with our AI security, guardrails, and custom permissions"
                sizes="(min-width: 768px) 560px, 100vw"
                className="h-auto w-full"
              />
            </div>
          </article>
        </div>
      </Container>
    </section>
  );
}

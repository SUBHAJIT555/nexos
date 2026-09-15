import { assetSrc } from "@/assets/home";
import { integrationsShots } from "@/assets/integrations";
import { Container } from "@/components/layout/Container";
import { integrationsApps } from "@/data/features/integrations";

export function IntegrationsApps() {
  return (
    <section className="bg-white pb-16 md:pb-24">
      <Container>
        <div className="flex flex-col gap-6">
          <h2 className="text-center text-[22px] leading-[28.6px] font-semibold text-[#8193A2]">
            {integrationsApps.headingBefore}
          </h2>
          <h2 className="text-center font-heading text-[36px] leading-[1.2] font-semibold tracking-[-0.015em] text-neutral-900 md:text-[40px] md:leading-[48px]">
            {integrationsApps.headingAfter}
          </h2>
          <img
            src={assetSrc(integrationsShots.apps)}
            alt="nexos integration apps"
            width={1168}
            height={320}
            className="h-auto w-full"
          />
        </div>
      </Container>
    </section>
  );
}

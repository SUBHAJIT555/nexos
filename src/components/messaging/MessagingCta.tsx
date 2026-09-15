import { assetSrc } from "@/assets/home";
import { messagingPageGraphics } from "@/assets/messaging";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { ShieldCheckIcon } from "@/components/icons/UiIcons";
import { messagingCta } from "@/data/features/messaging";

export function MessagingCta() {
  return (
    <section className="relative overflow-hidden py-28 md:pt-40 md:pb-40">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-page-dark" />
      {/* Decorative animated grid; next/image does not add value for this asset. */}
      <img
        src={assetSrc(messagingPageGraphics.gridGlowDarkAnimated)}
        alt=""
        className="pointer-events-none absolute inset-0 h-full w-full object-cover object-center"
      />
      <Container className="relative text-center">
        <h2 className="mx-auto max-w-[768px] font-heading text-[36px] leading-[1.2] font-semibold tracking-[-0.015em] text-white md:text-[48px] md:leading-[57.6px]">
          {messagingCta.heading}
        </h2>
        <div className="mt-10 flex flex-col items-center gap-4">
          <Button href={messagingCta.primary.href} variant="hero" className="w-fit self-center">
            {messagingCta.primary.label}
          </Button>
          <div className="flex items-center gap-2">
            <ShieldCheckIcon className="size-4 text-on-dark" />
            <span className="text-xs font-medium text-on-dark">{messagingCta.guarantee}</span>
          </div>
        </div>
      </Container>
    </section>
  );
}

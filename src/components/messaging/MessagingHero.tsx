import Image from "next/image";
import { assetSrc } from "@/assets/home";
import { messagingPageGraphics, messagingPageShots } from "@/assets/messaging";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { ShieldCheckIcon } from "@/components/icons/UiIcons";
import { messagingHero } from "@/data/features/messaging";

export function MessagingHero() {
  return (
    <section className="relative overflow-hidden bg-white">
      <Container>
        <div className="grid grid-cols-1 items-center gap-y-8 py-16 md:grid-cols-2 md:gap-x-8">
          <div className="flex min-w-0 max-w-[568px] flex-col justify-center gap-6">
            <div className="flex flex-col gap-4">
              {/* Decorative brand badge; next/image does not add value here. */}
              <img
                src={assetSrc(messagingPageGraphics.builtForBadge)}
                alt="Built for Slack, Telegram and WhatsApp. Microsoft Teams upon request."
                width={327}
                height={48}
                className="h-12 w-[327px] max-w-full"
              />
              <h1 className="font-heading text-[36px] leading-[1.15] font-semibold tracking-[-0.02em] text-neutral-900 md:text-[48px] md:leading-[57.6px]">
                {messagingHero.heading}
              </h1>
            </div>
            <p className="text-base leading-6 text-neutral-700">{messagingHero.body}</p>
            <div className="flex flex-col flex-wrap items-center gap-3 md:flex-row">
              <Button href={messagingHero.primary.href} variant="hero" className="w-full sm:w-fit">
                {messagingHero.primary.label}
              </Button>
              <div className="flex items-center gap-2">
                <ShieldCheckIcon className="size-4 text-neutral-600" />
                <span className="text-xs font-medium text-neutral-600">{messagingHero.guarantee}</span>
              </div>
            </div>
          </div>
          <div className="flex min-w-0 items-center justify-center">
            <Image
              src={messagingPageShots.hero}
              alt="nexos.ai in Slack and on mobile"
              width={568}
              height={479}
              sizes="(min-width: 1024px) 568px, 100vw"
              priority
              className="h-auto w-full max-w-[568px]"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}

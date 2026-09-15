import { assetSrc } from "@/assets/home";
import { messagingPageGraphics } from "@/assets/messaging";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { messagingChannels } from "@/data/features/messaging";

const tiles = {
  slackTile: messagingPageGraphics.slackTile,
  telegramTile: messagingPageGraphics.telegramTile,
  whatsappTile: messagingPageGraphics.whatsappTile,
  teamsTile: messagingPageGraphics.teamsTile,
} as const;

export function MessagingChannels() {
  return (
    <section className="bg-white py-16">
      <Container>
        <div className="mx-auto mb-10 max-w-[900px] text-center">
          <h2 className="font-heading text-[36px] leading-[1.2] font-semibold tracking-[-0.015em] text-neutral-900 md:text-[48px] md:leading-[57.6px]">
            {messagingChannels.heading}
          </h2>
          <p className="mt-6 text-base leading-6 text-neutral-700">
            {messagingChannels.intro}
            <br />
            {messagingChannels.body}
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 lg:gap-x-8">
          {messagingChannels.items.map((item) => (
            <article
              key={item.id}
              className="flex h-full flex-col gap-6 overflow-hidden rounded-md border border-[#dbe4eb] p-6"
              style={{ background: item.background }}
            >
              {/* Brand tile artwork; next/image does not add value here. */}
              <img
                src={assetSrc(tiles[item.tile as keyof typeof tiles])}
                alt={`${item.name} integration tile`}
                width={325}
                height={176}
                className="-mx-6 h-auto w-[calc(100%+3rem)] max-w-none"
              />
              <div className="flex flex-col gap-2">
                <h3 className="font-heading text-[22px] leading-[28.6px] font-semibold text-neutral-900">
                  {item.name}
                </h3>
                {item.id === "teams" ? (
                  <p className="text-base leading-6 text-neutral-600">
                    {item.eyebrow} {item.body}
                  </p>
                ) : (
                  <>
                    <p className="text-base font-medium leading-6 text-neutral-900">{item.eyebrow}</p>
                    <p className="text-base leading-6 text-neutral-600">{item.body}</p>
                  </>
                )}
              </div>
            </article>
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <Button href={messagingChannels.cta.href} variant="primary">
            {messagingChannels.cta.label}
          </Button>
        </div>
      </Container>
    </section>
  );
}

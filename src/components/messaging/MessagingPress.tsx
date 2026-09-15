import { assetSrc } from "@/assets/home";
import { messagingPageGraphics } from "@/assets/messaging";
import { Container } from "@/components/layout/Container";

export function MessagingPress() {
  return (
    <section className="bg-white pb-8">
      <Container>
        <picture>
          <source media="(max-width: 639px)" srcSet={assetSrc(messagingPageGraphics.pressXs)} />
          <source media="(max-width: 1023px)" srcSet={assetSrc(messagingPageGraphics.pressSm)} />
          {/* Combined press strip; next/image does not add value for this asset. */}
          <img
            src={assetSrc(messagingPageGraphics.pressFeatured)}
            alt="logo carousel press featured"
            width={1440}
            height={64}
            className="h-auto w-full"
          />
        </picture>
      </Container>
    </section>
  );
}

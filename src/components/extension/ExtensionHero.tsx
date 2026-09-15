import Image from "next/image";
import { assetSrc } from "@/assets/home";
import { extensionPageGraphics, extensionPageShots } from "@/assets/extension";
import { ChromeIcon } from "@/components/extension/ExtensionIcons";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { extensionHero } from "@/data/features/extension";

function DiscList({ items }: { items: string[] }) {
  return (
    <ul className="flex list-inside flex-col gap-2">
      {items.map((item) => (
        <li key={item} className="flex text-neutral-900">
          <span className="mt-1 mr-2 whitespace-nowrap">
            <span className="block h-4 w-4 rounded-full border-[5px] border-solid border-transparent bg-current bg-clip-content" />
          </span>
          <span className="text-base leading-6">{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function ExtensionHero() {
  return (
    <section className="relative overflow-hidden bg-white">
      <picture className="pointer-events-none absolute top-0 left-1/2 hidden -translate-x-1/2 md:block">
        {/* Decorative grid; next/image does not add value for this SVG. */}
        <img
          src={assetSrc(extensionPageGraphics.gridCentered)}
          alt=""
          width={1400}
          height={1200}
          className="h-auto w-[1400px] max-w-none"
        />
      </picture>
      <Container className="relative">
        <div className="grid grid-cols-1 items-center gap-y-8 py-16 md:grid-cols-2 md:gap-x-8">
          <div className="flex min-w-0 max-w-[568px] flex-col justify-center gap-6">
            <h1 className="font-heading text-[36px] leading-[1.15] font-semibold tracking-[-0.02em] text-neutral-900 md:text-[48px] md:leading-[57.6px]">
              {extensionHero.heading}
            </h1>
            <DiscList items={[...extensionHero.bullets]} />
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
              <Button href={extensionHero.primary.href} variant="primary" className="w-full sm:w-fit">
                {extensionHero.primary.label}
              </Button>
              <Button
                href={extensionHero.secondary.href}
                variant="outline"
                className="w-full sm:w-fit"
              >
                <ChromeIcon className="size-6" />
                {extensionHero.secondary.label}
              </Button>
            </div>
          </div>
          <div className="flex min-w-0 items-center justify-center">
            <Image
              src={extensionPageShots.hero}
              alt="nexos.ai browser extension interface"
              width={555}
              height={555}
              sizes="(min-width: 1024px) 555px, 100vw"
              priority
              className="h-auto w-full max-w-[555px]"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}

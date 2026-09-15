import Image from "next/image";
import { extensionPageShots } from "@/assets/extension";
import { ArchiveIcon, FileLinesIcon, ShieldIcon } from "@/components/extension/ExtensionIcons";
import { Container } from "@/components/layout/Container";
import { extensionBenefits } from "@/data/features/extension";

const iconMap = {
  shield: ShieldIcon,
  archive: ArchiveIcon,
  fileLines: FileLinesIcon,
} as const;

export function ExtensionBenefits() {
  return (
    <section className="bg-[#F8FAFC] py-16">
      <Container>
        <h2 className="max-w-[1016px] font-heading text-[36px] leading-[1.2] font-semibold tracking-[-0.015em] text-neutral-900 md:text-[40px] md:leading-[48px]">
          {extensionBenefits.heading}
        </h2>
        <p className="mt-4 max-w-[520px] text-base leading-6 text-neutral-700">
          {extensionBenefits.intro}
        </p>
        <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2">
          {extensionBenefits.featured.map((card) => (
            <article
              key={card.id}
              className="flex h-full flex-col-reverse overflow-hidden rounded-lg bg-[#EFF4F8]"
            >
              <div className="flex flex-1 flex-col gap-6 p-6">
                <div className="flex flex-col gap-4">
                  <h3 className="font-heading text-[28px] leading-[36.4px] font-semibold text-neutral-900 md:text-[32px] md:leading-[40px]">
                    {card.title}
                  </h3>
                  <p className="text-base leading-6 text-neutral-600">{card.body}</p>
                </div>
              </div>
              <Image
                src={extensionPageShots[card.shot]}
                alt={card.alt}
                sizes="(min-width: 768px) 568px, 100vw"
                className="h-auto w-full"
              />
            </article>
          ))}
        </div>
        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-3">
          {extensionBenefits.icons.map((card) => {
            const Icon = iconMap[card.icon];
            return (
              <article
                key={card.id}
                className="flex h-full flex-col overflow-hidden rounded-lg bg-[#EFF4F8]"
              >
                <div className="flex flex-col gap-6 p-6">
                  <div className="flex size-16 items-center justify-center rounded-md bg-white">
                    <Icon className="size-8 text-accent" />
                  </div>
                  <h3 className="font-heading text-[28px] leading-[36.4px] font-semibold text-neutral-900">
                    {card.title}
                  </h3>
                  <p className="text-base leading-6 text-neutral-600">{card.body}</p>
                </div>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

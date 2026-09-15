import Image from "next/image";
import Link from "next/link";
import { nordSecurityGraphics } from "@/assets/customer-stories/nord-security";
import { nordSecurityRelated } from "@/data/customer-stories/nord-security";
import { Container } from "@/components/layout/Container";

const relatedImages = {
  relatedPayhawk: nordSecurityGraphics.relatedPayhawk,
  relatedHostinger: nordSecurityGraphics.relatedHostinger,
  relatedPigu: nordSecurityGraphics.relatedPigu,
  relatedOxylabs: nordSecurityGraphics.relatedOxylabs,
} as const;

export function NordSecurityRelated() {
  return (
    <section
      id="exploremorecustomerstories"
      className="scroll-mt-[var(--header-height)] bg-white py-16"
    >
      <Container>
        <h2 className="mb-8 font-heading text-[32px] leading-10 font-semibold tracking-[-0.256px] text-neutral-900 md:text-[40px] md:leading-[48px]">
          {nordSecurityRelated.heading}
        </h2>
        <ul className="grid grid-cols-1 gap-y-8 sm:gap-x-8 md:grid-cols-2 lg:grid-cols-4">
          {nordSecurityRelated.stories.map((story) => (
            <li key={story.slug}>
              <Link
                href={`/customer-stories/${story.slug}`}
                className="flex h-full flex-col gap-y-4"
              >
                <Image
                  src={relatedImages[story.image]}
                  alt={story.alt}
                  sizes="(min-width: 1024px) 268px, (min-width: 768px) 50vw, 100vw"
                  className="h-auto w-full rounded-md object-cover"
                />
                <p className="font-heading text-[20px] leading-[26px] font-semibold tracking-[-0.2px] text-neutral-900">
                  {story.title}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

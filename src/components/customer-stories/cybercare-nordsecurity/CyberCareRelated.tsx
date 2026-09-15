import Image from "next/image";
import Link from "next/link";
import { cybercareGraphics } from "@/assets/customer-stories/cybercare-nordsecurity";
import { cybercareRelated } from "@/data/customer-stories/cybercare-nordsecurity";
import { Container } from "@/components/layout/Container";

const relatedImages = {
  relatedPayhawk: cybercareGraphics.relatedPayhawk,
  relatedOxylabs: cybercareGraphics.relatedOxylabs,
  relatedHostinger: cybercareGraphics.relatedHostinger,
  relatedNord: cybercareGraphics.relatedNord,
} as const;

export function CyberCareRelated() {
  return (
    <section id="explore-more" className="bg-white py-16">
      <Container className="px-4 md:px-0">
        <h2 className="mb-8 font-heading text-[32px] leading-10 font-semibold tracking-[-0.256px] text-neutral-900 md:text-[40px] md:leading-[48px]">
          {cybercareRelated.heading}
        </h2>
        <ul className="grid grid-cols-1 gap-y-8 sm:gap-x-8 md:grid-cols-2 lg:grid-cols-4">
          {cybercareRelated.stories.map((story) => (
            <li key={story.slug}>
              <Link href={`/customer-stories/${story.slug}`} className="flex h-full flex-col gap-y-4 transition-opacity hover:opacity-80">
                <div className="overflow-hidden rounded-md">
                  <Image
                    src={relatedImages[story.image]}
                    alt={story.alt}
                    sizes="(min-width: 1024px) 268px, (min-width: 768px) 50vw, 100vw"
                    className="aspect-square h-auto w-full object-cover"
                  />
                </div>
                <p className="text-[20px] leading-[30px] font-semibold text-neutral-900">
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

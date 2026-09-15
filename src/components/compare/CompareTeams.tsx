import Image from "next/image";
import Link from "next/link";
import type { StaticImageData } from "next/image";
import { compareShots } from "@/assets/compare";
import { Container } from "@/components/layout/Container";
import { compareTeams } from "@/data/products/compare";
import { cn } from "@/lib/utils";

const SparkleIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="-64 -64 640 640"
    fill="currentColor"
    className="mt-1 size-4 shrink-0 text-accent"
    aria-hidden="true"
  >
    <path d="M432 32c8.8 0 16 7.2 16 16l0 48 48 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-48 0 0 48c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-48-48 0c-8.8 0-16-7.2-16-16s7.2-16 16-16l48 0 0-48c0-8.8 7.2-16 16-16zm0 288c8.8 0 16 7.2 16 16l0 48 48 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-48 0 0 48c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-48-48 0c-8.8 0-16-7.2-16-16s7.2-16 16-16l48 0 0-48c0-8.8 7.2-16 16-16zM136.8 216.4L54.2 254.6l82.6 38.1c6.9 3.2 12.4 8.7 15.6 15.6l38.1 82.6 38.1-82.6c3.2-6.9 8.7-12.4 15.6-15.6l82.6-38.1-82.6-38.1c-6.9-3.2-12.4-8.7-15.6-15.6l-38.1-82.6-38.1 82.6c-3.2 6.9-8.7 12.4-15.6 15.6zM123.4 321.8L9.3 269.1C3.6 266.5 0 260.8 0 254.6s3.6-11.9 9.3-14.5l114.1-52.7L176 73.3c2.6-5.7 8.3-9.3 14.5-9.3s11.9 3.6 14.5 9.3l52.7 114.1L371.8 240c5.7 2.6 9.3 8.3 9.3 14.5s-3.6 11.9-9.3 14.5L257.8 321.8 205.1 435.8c-2.6 5.7-8.3 9.3-14.5 9.3s-11.9-3.6-14.5-9.3L123.4 321.8z" />
  </svg>
);

const shots: Record<string, { src: StaticImageData; alt: string }> = {
  marketing: { src: compareShots.marketing, alt: "Compare AI models for marketing" },
  developers: { src: compareShots.developers, alt: "Compare AI models for developers" },
  legal: { src: compareShots.legal, alt: "Compare AI models for legal" },
};

function TeamRow({
  card,
  imageFirst,
}: {
  card: (typeof compareTeams.cards)[number];
  imageFirst: boolean;
}) {
  const shot = shots[card.id];
  return (
    <div className="grid items-center gap-8 md:grid-cols-2 md:gap-12">
      <div className={cn("min-w-0", imageFirst ? "md:order-1" : "md:order-2")}>
        {shot ? (
          <Image
            src={shot.src}
            alt={shot.alt}
            sizes="(min-width: 768px) 568px, 100vw"
            className="h-auto w-full max-w-[568px]"
          />
        ) : null}
      </div>
      <div className={cn("min-w-0", imageFirst ? "md:order-2" : "md:order-1")}>
        <p className="inline-flex rounded-full bg-neutral-900 px-3 py-1 text-xs font-semibold tracking-[0.02em] text-white">
          {card.eyebrow}
        </p>
        <h3 className="mt-4 font-heading text-[32px] leading-[1.2] font-semibold tracking-[-0.015em] text-neutral-900 md:text-[40px] md:leading-[48px]">
          {card.title}
        </h3>
        <p className="mt-5 text-base leading-6 text-neutral-700">
          {card.bodyBefore}
          <Link href={card.href} className="text-accent hover:text-[var(--accent-hover)]">
            {card.linkLabel}
          </Link>
          {card.bodyAfter}
        </p>
        <ul className="mt-6 space-y-3">
          {card.items.map((item) => (
            <li key={item} className="flex items-start gap-3 text-base leading-6 text-neutral-700">
              <SparkleIcon />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export function CompareTeams() {
  const [marketing, developers, legal] = compareTeams.cards;

  return (
    <>
      <section className="bg-white py-16 md:py-24">
        <Container>
          <div className="mx-auto max-w-[768px] text-center">
            <h2 className="font-heading text-[36px] leading-[1.2] font-semibold tracking-[-0.015em] text-neutral-900 md:text-[48px] md:leading-[57.6px]">
              {compareTeams.heading}
            </h2>
            <p className="mt-5 text-base leading-6 text-neutral-700 md:text-[18px] md:leading-[28px]">
              {compareTeams.bodyBefore}
              <Link
                href={compareTeams.bodyLink.href}
                className="text-accent hover:text-[var(--accent-hover)]"
              >
                {compareTeams.bodyLink.label}
              </Link>
              {compareTeams.bodyAfter}
            </p>
          </div>
          <div className="mt-16">
            <TeamRow card={marketing} imageFirst={false} />
          </div>
        </Container>
      </section>
      <section className="bg-[#F8FAFC] py-16 md:py-24">
        <Container>
          <TeamRow card={developers} imageFirst />
        </Container>
      </section>
      <section className="bg-[#F8FAFC] pb-16 md:pb-24">
        <Container>
          <TeamRow card={legal} imageFirst={false} />
        </Container>
      </section>
    </>
  );
}

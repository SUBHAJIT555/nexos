import Image from "next/image";
import type { StaticImageData } from "next/image";

export function CyberCareQuote({
  id,
  quote,
  name,
  title,
  portrait,
  alt,
}: {
  id: string;
  quote: string;
  name: string;
  title: string;
  portrait: StaticImageData;
  alt: string;
}) {
  return (
    <section
      id={id}
      className="relative px-4 py-16 text-center text-white"
      style={{
        backgroundImage:
          "radial-gradient(ellipse 50% 46% at 50% 50%, #5A2FB3 0%, #3D237A 50%, #14152D 75%, #071013 90%)",
      }}
    >
      <figure className="mx-auto flex max-w-[768px] flex-col items-center gap-6">
        <blockquote className="font-heading text-[24px] leading-[31.2px] font-semibold text-white md:text-[28px] md:leading-[36.4px]">
          {quote}
        </blockquote>
        <figcaption className="flex flex-col items-center gap-3">
          <Image
            src={portrait}
            alt={alt}
            width={48}
            height={48}
            className="size-12 rounded-full object-cover"
          />
          <div>
            <p className="text-sm leading-[21px] font-semibold text-white">{name}</p>
            <p className="text-sm leading-[21px] text-neutral-300">{title}</p>
          </div>
        </figcaption>
      </figure>
    </section>
  );
}

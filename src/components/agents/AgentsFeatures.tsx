import Image from "next/image";
import { assetSrc } from "@/assets/home";
import { Container } from "@/components/layout/Container";
import { agentsBuilt, agentsFeatures } from "@/data/products/agents";
import { cn } from "@/lib/utils";

export function AgentsFeatures() {
  return (
    <section className="bg-white py-16 md:py-24">
      <Container>
        <div className="mx-auto max-w-[768px] text-center">
          <h2 className="font-heading text-[36px] leading-[1.2] font-semibold tracking-[-0.015em] text-neutral-900 md:text-[40px] md:leading-[48px]">
            {agentsBuilt.heading}
          </h2>
          <p className="mt-5 text-base leading-6 text-neutral-700 md:text-[18px] md:leading-[28px]">
            {agentsBuilt.body}
          </p>
        </div>

        <div className="mt-16 flex flex-col gap-16 md:mt-24 md:gap-24">
          {agentsFeatures.map((row) => (
            <article
              key={row.id}
              className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16"
            >
              <div className={cn(row.visual === "right" && "lg:order-2")}>
                <Image
                  src={row.image}
                  alt={row.alt}
                  sizes="(min-width: 1024px) 560px, 100vw"
                  className="h-auto w-full"
                />
              </div>
              <div className={cn(row.visual === "right" && "lg:order-1")}>
                <h3 className="max-w-[520px] font-heading text-[32px] leading-[1.2] font-semibold tracking-[-0.015em] text-neutral-900 md:text-[40px] md:leading-[48px]">
                  {row.title}
                </h3>
                <p className="mt-5 max-w-[520px] text-base leading-6 text-neutral-700 md:text-[18px] md:leading-[28px]">
                  {row.body}
                </p>
                {row.chips ? (
                  <div className="mt-6 flex flex-wrap gap-3">
                    {row.chips.map((chip) => (
                      <span
                        key={chip.label}
                        className="inline-flex items-center gap-2 rounded-full px-4 py-[6px] text-sm font-medium"
                        style={{ backgroundColor: chip.bg, color: chip.color }}
                      >
                        <ChipIcon name={chip.icon} color={chip.color} />
                        {chip.label}
                      </span>
                    ))}
                  </div>
                ) : null}
                {row.tools ? (
                  <div className="mt-6 flex flex-wrap gap-3">
                    {row.tools.map((tool) => (
                      <span
                        key={tool.label}
                        className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-4 py-2 text-sm font-medium text-neutral-900"
                      >
                        {/* App glyphs are tiny SVGs; next/image does not add value here. */}
                        <img
                          src={assetSrc(tool.icon)}
                          alt=""
                          width={20}
                          height={20}
                          className="size-5 object-contain"
                        />
                        {tool.label}
                      </span>
                    ))}
                  </div>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

function ChipIcon({ name, color }: { name: "megaphone" | "trend" | "users"; color: string }) {
  const path =
    name === "megaphone"
      ? "M560 32c-8.8 0-16 7.2-16 16l0 11.5L32 187.5 32 176c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 19.5L0 208l0 96 0 12.5L0 336c0 8.8 7.2 16 16 16s16-7.2 16-16l0-11.5 131.7 32.9c-2.4 8.4-3.7 17.4-3.7 26.6c0 53 43 96 96 96c46.2 0 84.7-32.6 93.9-76L544 452.5l0 11.5c0 8.8 7.2 16 16 16s16-7.2 16-16l0-24 0-368 0-24c0-8.8-7.2-16-16-16zM544 419.5L32 291.5l0-71 512-128 0 327zM192 384c0-6.5 1-12.9 2.8-18.8l124 31C313.1 425.7 287.2 448 256 448c-35.3 0-64-28.7-64-64z"
      : name === "trend"
        ? "M368 112c0-8.8 7.2-16 16-16l176 0c8.8 0 16 7.2 16 16l0 176c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-137.4L331.3 363.3c-6.2 6.2-16.4 6.2-22.6 0L192 246.6 27.3 411.3c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l176-176c6.2-6.2 16.4-6.2 22.6 0L320 329.4 521.4 128 384 128c-8.8 0-16-7.2-16-16z"
        : "M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z";

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={name === "megaphone" ? "0 0 576 512" : name === "trend" ? "0 0 576 512" : "0 0 448 512"}
      fill="currentColor"
      width="1rem"
      height="1rem"
      className="size-4 shrink-0"
      style={{ color }}
      aria-hidden="true"
    >
      <path d={path} />
    </svg>
  );
}

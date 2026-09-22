"use client";

import type { StaticImageData } from "next/image";
import { useMemo, useState } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { productIllustrations, productToolIcons } from "@/assets/products";
import { assetSrc } from "@/assets/home";
import { agentTemplateTools } from "@/data/products/agent-templates";
import { agentTitleIcons } from "@/data/products/agent-title-icons";
import type { AgentCategory, AgentTemplate } from "@/data/products/types";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

type AgentGalleryProps = {
  heading: string;
  body?: string;
  categories: AgentCategory[];
  templates: AgentTemplate[];
  searchPlaceholder?: string;
  ctaHeading?: string;
  ctaLabel?: string;
  ctaHref?: string;
  ctaVariant?: "box" | "pill";
  categoryHeadings?: Record<string, string>;
  gridXl?: string | StaticImageData;
  gridXs?: string | StaticImageData;
};

export function AgentGallery({
  heading,
  body,
  categories,
  templates,
  searchPlaceholder = "What would you like to automate?",
  ctaHeading = "Find the perfect Agent template for you",
  ctaLabel = "Get NexEco AI",
  ctaHref = "/pricing",
  ctaVariant = "box",
  categoryHeadings,
  gridXl = productIllustrations.gridHomepageXl,
  gridXs = productIllustrations.gridHomepageXs,
}: AgentGalleryProps) {
  const [category, setCategory] = useState(categories[0]?.label ?? "Sales");
  const [query, setQuery] = useState("");

  const visible = useMemo(() => {
    const inCategory = templates.filter((item) => item.category === category);
    const haystack = query.trim().toLowerCase();
    if (!haystack) {
      return inCategory;
    }
    return inCategory.filter(
      (item) =>
        item.title.toLowerCase().includes(haystack) ||
        item.description.toLowerCase().includes(haystack),
    );
  }, [category, query, templates]);

  return (
    <section className="relative overflow-hidden bg-white py-16 md:py-24">
      <picture className="pointer-events-none absolute inset-0">
        <source
          media="(max-width: 767px)"
          srcSet={assetSrc(gridXs)}
        />
        <img
          src={assetSrc(gridXl)}
          alt=""
          className="h-full w-full object-cover object-top"
        />
      </picture>
      <Container className="relative">
        <div className="mx-auto max-w-[768px] text-center">
          <h2 className="whitespace-pre-line font-heading text-[36px] leading-[1.2] font-semibold tracking-[-0.015em] text-neutral-900 md:text-[48px] md:leading-[57.6px]">
            {heading}
          </h2>
          {body ? (
            <p className="mt-5 text-base leading-6 text-neutral-700 md:text-[18px] md:leading-[28px]">
              {body}
            </p>
          ) : null}
        </div>

        <form
          className="mx-auto mt-10 flex w-full max-w-[784px] flex-col gap-6 rounded-[24px] border-2 border-[#c4b5fd] bg-white px-5 py-5"
          onSubmit={(event) => event.preventDefault()}
        >
          <label className="sr-only" htmlFor="agent-search">
            {searchPlaceholder}
          </label>
          <textarea
            id="agent-search"
            rows={1}
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder={searchPlaceholder}
            className="w-full resize-none bg-transparent text-base text-neutral-900 outline-none placeholder:text-neutral-500"
          />
          <div className="flex items-center justify-between">
            <span className="inline-flex items-center gap-2 rounded-full px-3 py-2 text-xs font-semibold text-neutral-900">
              <ToolsGridIcon />
              AI Tools
            </span>
            <span
              aria-hidden="true"
              className={cn(
                "flex size-8 items-center justify-center rounded-full text-white",
                query.trim() ? "bg-accent" : "bg-[#a3b4c2]",
              )}
            >
              <ArrowRight className="size-4" />
            </span>
          </div>
        </form>

        <div
          role="tablist"
          aria-label="Agent categories"
          className="-mx-[var(--gutter-x)] mt-8 flex gap-2 overflow-x-auto px-[var(--gutter-x)] pb-2"
        >
          {categories.map((item) => {
            const selected = item.label === category;
            return (
              <button
                key={item.id}
                type="button"
                role="tab"
                aria-selected={selected}
                className={cn(
                  "min-w-[100px] rounded-full px-3 py-3 text-base font-medium whitespace-nowrap transition-colors",
                  selected
                    ? "bg-[#d6d4f7] text-accent"
                    : "border border-[#dbe4eb] bg-white text-neutral-700 hover:border-neutral-400",
                )}
                onClick={() => setCategory(item.label)}
              >
                {item.label}
              </button>
            );
          })}
        </div>

        {categoryHeadings?.[category] ? (
          <h3 className="mt-10 font-heading text-[28px] leading-[1.2] font-semibold tracking-[-0.015em] text-neutral-900 md:text-[32px] md:leading-[38.4px]">
            {categoryHeadings[category]}
          </h3>
        ) : null}

        <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((item) => (
            <li key={item.id}>
              <article className="flex h-full cursor-pointer flex-col rounded-2xl border border-[#dbe4eb] bg-white p-6 text-left shadow-md transition-all duration-300 ease-in-out hover:border-accent hover:shadow-lg">
                <div className="flex h-full flex-col justify-between gap-2">
                  <div className="flex flex-col gap-2">
                    <div className="flex flex-row items-center gap-4">
                      <TitleIcon title={item.title} />
                      <h3 className="text-base font-semibold text-neutral-900">{item.title}</h3>
                    </div>
                    <p className="text-sm leading-[21px] text-neutral-600">{item.description}</p>
                  </div>
                  <ToolRow title={item.title} tools={item.tools} />
                </div>
              </article>
            </li>
          ))}
        </ul>

        {ctaHeading && ctaVariant === "pill" ? (
          <>
            <div
              className="mt-16 hidden h-16 items-center justify-between gap-4 rounded-full py-2 pr-3 pl-6 md:flex"
              style={{
                background:
                  "radial-gradient(225.29% 141.42% at 0% 1.04%, #8556FF 0%, #5F35FF 59.62%)",
              }}
            >
              <h2 className="font-heading text-[22px] leading-[28.6px] font-semibold text-white">
                {ctaHeading}
              </h2>
              <Button
                href={ctaHref}
                className="border-white bg-white text-neutral-900 hover:bg-white/90"
              >
                {ctaLabel}
              </Button>
            </div>
            <div
              className="mt-12 flex flex-col items-center gap-4 rounded-[20px] px-6 py-6 text-center md:hidden"
              style={{
                background:
                  "radial-gradient(225.29% 141.42% at 0% 1.04%, #8556FF 0%, #5F35FF 59.62%)",
              }}
            >
              <h2 className="font-heading text-[22px] leading-[28.6px] font-semibold text-white">
                {ctaHeading}
              </h2>
              <Button
                href={ctaHref}
                className="border-white bg-white text-neutral-900 hover:bg-white/90"
              >
                {ctaLabel}
              </Button>
            </div>
          </>
        ) : ctaHeading ? (
          <div className="mt-16 rounded-md bg-neutral-100 px-6 py-12 text-center md:px-10">
            <h2 className="font-heading text-[32px] leading-[1.2] font-semibold text-neutral-900 md:text-[40px]">
              {ctaHeading}
            </h2>
            <Button href={ctaHref} variant="hero" className="mt-8">
              {ctaLabel}
            </Button>
          </div>
        ) : null}
      </Container>
    </section>
  );
}

function TitleIcon({ title }: { title: string }) {
  const icon = agentTitleIcons[title];

  return (
    <div className="flex size-[42px] shrink-0 items-center justify-center rounded-sm border border-[#dbe4eb] bg-[#f7f8fa]">
      {icon ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox={icon.viewBox}
          fill="currentColor"
          width="1.5rem"
          height="1.5rem"
          className="text-accent"
          aria-hidden="true"
        >
          <path d={icon.path} />
        </svg>
      ) : (
        <span className="font-heading text-sm font-semibold text-accent">{title.charAt(0)}</span>
      )}
    </div>
  );
}

function ToolRow({ title, tools }: { title: string; tools?: string[] }) {
  const ids = tools ?? agentTemplateTools[title] ?? [];

  if (ids.length === 0) {
    return null;
  }

  return (
    <div className="flex flex-row gap-2" aria-hidden="true">
      {ids.map((id) => {
        const src = productToolIcons[id as keyof typeof productToolIcons];
        if (!src) {
          return null;
        }
        return (
          <div
            key={`${title}-${id}`}
            className="flex size-10 shrink-0 items-center justify-center rounded-sm bg-white p-2"
          >
            <Image src={src} alt="" width={24} height={24} className="size-6 object-contain" />
          </div>
        );
      })}
    </div>
  );
}

function ToolsGridIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="-64 -64 640 640"
      fill="currentColor"
      width="1.5rem"
      height="1.5rem"
      aria-hidden="true"
    >
      <path d="M176 64L80 64c-8.8 0-16 7.2-16 16l0 96c0 8.8 7.2 16 16 16l96 0c8.8 0 16-7.2 16-16l0-96c0-8.8-7.2-16-16-16zM80 32l96 0c26.5 0 48 21.5 48 48l0 96c0 26.5-21.5 48-48 48l-96 0c-26.5 0-48-21.5-48-48l0-96c0-26.5 21.5-48 48-48zm96 288l-96 0c-8.8 0-16 7.2-16 16l0 96c0 8.8 7.2 16 16 16l96 0c8.8 0 16-7.2 16-16l0-96c0-8.8-7.2-16-16-16zM80 288l96 0c26.5 0 48 21.5 48 48l0 96c0 26.5-21.5 48-48 48l-96 0c-26.5 0-48-21.5-48-48l0-96c0-26.5 21.5-48 48-48zM336 64c-8.8 0-16 7.2-16 16l0 96c0 8.8 7.2 16 16 16l96 0c8.8 0 16-7.2 16-16l0-96c0-8.8-7.2-16-16-16l-96 0zM288 80c0-26.5 21.5-48 48-48l96 0c26.5 0 48 21.5 48 48l0 96c0 26.5-21.5 48-48 48l-96 0c-26.5 0-48-21.5-48-48l0-96zm96 192c8.8 0 16 7.2 16 16l0 80 80 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-80 0 0 80c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-80-80 0c-8.8 0-16-7.2-16-16s7.2-16 16-16l80 0 0-80c0-8.8 7.2-16 16-16z" />
    </svg>
  );
}

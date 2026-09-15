"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { homepageProductTabs } from "@/data/homepage";
import { homeProductShots } from "@/assets/home";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { useEffect, useState, type CSSProperties } from "react";

const TAB_DURATION_MS = 10000;
const tabs = homepageProductTabs.tabs;

const tabColors: Record<
  (typeof homepageProductTabs.tabs)[number]["id"],
  { desktop: string; mobile: string }
> = {
  "ai-gateway": { desktop: "#1e1747", mobile: "#1e1747" },
  observability: { desktop: "#261e53", mobile: "#231a54" },
  governance: { desktop: "#442697", mobile: "#341d74" },
  workspace: { desktop: "#4c26b5", mobile: "#412296" },
};

const productPanelClassName =
  "group/panel relative w-full overflow-clip rounded-b-md bg-dark-surface [background:rgb(19,25,33)_radial-gradient(78%_70%_at_76%_104%,rgb(77,22,168)_0%,rgb(60,26,132)_32%,rgb(36,31,65)_62%,rgb(19,25,33)_88%)] max-lg:grid max-lg:grid-rows-[0fr] max-lg:opacity-0 max-lg:data-[active=true]:grid-rows-[1fr] max-lg:data-[active=true]:opacity-100 max-lg:motion-safe:transition-[grid-template-rows,opacity] max-lg:motion-safe:duration-500 max-lg:motion-safe:ease-in-out lg:order-1 lg:rounded-b-lg lg:p-12 lg:data-[active=false]:hidden";

export function ProductTabs() {
  const reduceMotion = useReducedMotion();
  const [activeId, setActiveId] =
    useState<(typeof homepageProductTabs.tabs)[number]["id"]>("ai-gateway");
  const activeIndex = Math.max(
    0,
    tabs.findIndex((tab) => tab.id === activeId),
  );

  useEffect(() => {
    if (reduceMotion) return;
    const id = window.setTimeout(() => {
      setActiveId((current) => {
        const index = tabs.findIndex((tab) => tab.id === current);
        const next = (index + 1) % tabs.length;
        return tabs[next].id;
      });
    }, TAB_DURATION_MS);
    return () => window.clearTimeout(id);
  }, [activeId, reduceMotion]);

  return (
    <section id="product-showcase-tabs" className="pb-8 md:pb-12">
      <Container>
        <div className="mb-3 hidden h-[30px] lg:flex">
          <div
            className="flex min-w-0 shrink-0 items-center gap-2.5 px-6 text-[12px] leading-[18px] font-medium whitespace-nowrap text-[#5ff3e4]"
            style={{ width: "75%" }}
          >
            <span>{homepageProductTabs.groups[0].label}</span>
            <span className="h-px min-w-0 flex-1 bg-linear-to-r from-[#5ee7e4] to-transparent" />
          </div>
          <div
            className="flex min-w-0 shrink-0 items-center gap-2.5 px-6 text-[12px] leading-[18px] font-medium whitespace-nowrap text-[#5ff3e4]"
            style={{ width: "25%" }}
          >
            <span>{homepageProductTabs.groups[1].label}</span>
            <span className="h-px min-w-0 flex-1 bg-linear-to-r from-[#5ee7e4] to-transparent" />
          </div>
        </div>

        <div
          role="tablist"
          className="flex flex-col lg:flex-row lg:flex-wrap lg:items-end"
        >
          {tabs.map((tab, index) => {
            const selected = tab.id === activeId;
            const colors = tabColors[tab.id];
            const panelId = `product-tab-panel-${tab.id}`;
            const tabId = `product-tab-${tab.id}`;

            return (
              <div key={tab.id} className="contents">
                <button
                  type="button"
                  role="tab"
                  id={tabId}
                  aria-selected={selected}
                  aria-controls={panelId}
                  data-active={selected}
                  onClick={() => setActiveId(tab.id)}
                  style={
                    {
                      ["--tab-bg" as string]: colors.desktop,
                      ["--tab-bg-mobile" as string]: colors.mobile,
                    } as CSSProperties
                  }
                  className={cn(
                    "group relative shrink-0 cursor-pointer rounded-md max-lg:mt-1 max-lg:flex max-lg:h-[100px] max-lg:overflow-clip lg:flex-1 lg:rounded-b-none lg:px-2 lg:py-6",
                    "bg-(--tab-bg-mobile) text-[#a3b4c2] lg:bg-(--tab-bg)",
                    "motion-safe:transition-colors max-lg:motion-safe:transition-[height,background-color] max-lg:motion-safe:duration-500 max-lg:motion-safe:ease-in-out",
                    "data-[active=true]:z-10 data-[active=true]:cursor-default data-[active=true]:rounded-b-none data-[active=true]:bg-dark-surface data-[active=true]:pt-4 data-[active=true]:pb-0.5 data-[active=true]:text-[#9690f8] lg:data-[active=true]:bg-dark-surface lg:data-[active=true]:pt-[34px] lg:data-[active=true]:pb-6",
                    selected && "max-lg:h-[18px] lg:h-[88px]",
                    index === 0 && "max-lg:mt-0",
                  )}
                >
                  <span className="block text-center text-base font-medium whitespace-nowrap max-lg:flex max-lg:flex-1 max-lg:items-center max-lg:px-3 max-lg:py-6 max-lg:text-left lg:text-[20px] lg:leading-[30px] max-lg:group-data-[active=true]:opacity-0">
                    {tab.title}
                  </span>
                  <span
                    aria-hidden="true"
                    className="pointer-events-none relative h-[100px] w-[148px] shrink-0 overflow-hidden lg:hidden max-lg:group-data-[active=true]:opacity-0"
                  >
                    <Image
                      src={homeProductShots[tab.id]}
                      alt=""
                      className="absolute top-4 left-4 h-auto w-[202px] max-w-none"
                    />
                  </span>
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-x-4 bottom-0 hidden h-0.5 overflow-hidden rounded-full bg-[#282d38] group-data-[active=true]:block"
                  >
                    {selected ? (
                      <motion.span
                        key={`${tab.id}-${activeIndex}`}
                        data-tab-progress=""
                        className="block h-full w-full origin-left rounded-full bg-linear-to-r from-[#683afe] to-[#5ee7e4]"
                        initial={{ scaleX: reduceMotion ? 1 : 0 }}
                        animate={{ scaleX: 1 }}
                        transition={
                          reduceMotion
                            ? { duration: 0 }
                            : { duration: TAB_DURATION_MS / 1000, ease: "linear" }
                        }
                      />
                    ) : null}
                  </span>
                  {index > 0 ? (
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute bottom-0 right-full hidden size-4 lg:group-data-[active=true]:block [background:radial-gradient(circle_16px_at_0_0,transparent_15px,var(--color-dark-surface)_16px)]"
                    />
                  ) : null}
                  {index < tabs.length - 1 ? (
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute bottom-0 left-full hidden size-4 lg:group-data-[active=true]:block [background:radial-gradient(circle_16px_at_100%_0,transparent_15px,var(--color-dark-surface)_16px)]"
                    />
                  ) : null}
                </button>

                <div
                  role="tabpanel"
                  id={panelId}
                  aria-labelledby={tabId}
                  aria-hidden={!selected}
                  data-active={selected}
                  className={productPanelClassName}
                >
                  <div className="max-lg:min-h-0 max-lg:overflow-clip lg:motion-safe:animate-[fadeIn_0.4s_ease-out]">
                    <div className="grid gap-8 max-md:gap-0.5 max-md:pt-3 md:max-lg:pt-6 lg:grid-cols-[minmax(0,376fr)_minmax(0,632fr)] lg:items-center lg:gap-16">
                      <div className="flex flex-col items-center px-4 text-center md:items-start md:text-left lg:px-0">
                        <h2 className="font-heading text-[18px] leading-6 font-semibold text-white md:text-[40px] md:leading-[48px]">
                          {tab.title}
                        </h2>
                        <p className="mt-3 max-w-[376px] text-sm leading-[21px] text-[#a3b4c2] max-md:mt-2 md:mt-4 md:text-[20px] md:leading-[30px]">
                          {tab.description}
                        </p>
                        <Button
                          href={tab.cta.href}
                          variant="outline"
                          iconPosition="end"
                          icon={<ArrowRight className="size-5" />}
                          className="mt-8 hidden h-[62px] border-[#667482] bg-transparent px-8 text-[20px] font-semibold text-white hover:border-white/50 hover:bg-white/5 md:inline-flex lg:mt-16"
                        >
                          {tab.cta.label}
                        </Button>
                      </div>
                      <div className="relative aspect-[288/220] w-full overflow-clip rounded-none md:aspect-[632/540] lg:rounded-md max-lg:origin-bottom-right max-lg:scale-[0.46] max-lg:group-data-[active=true]/panel:scale-100 max-lg:motion-safe:transition-transform max-lg:motion-safe:duration-500 max-lg:motion-safe:ease-in-out [&_img]:absolute max-md:[&_img]:top-2 max-md:[&_img]:left-4 max-md:[&_img]:w-[152%] max-md:[&_img]:max-w-none md:[&_img]:inset-0 md:[&_img]:size-full md:[&_img]:object-cover md:[&_img]:object-left-top">
                        <Image
                          src={homeProductShots[tab.id]}
                          alt={tab.visual}
                          fill
                          sizes="(min-width: 1024px) 632px, 100vw"
                          className="object-cover object-left-top"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

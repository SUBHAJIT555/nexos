"use client";

import { useEffect, useState } from "react";
import { Container } from "@/components/layout/Container";
import { ProductFaq } from "@/components/product/ProductFaq";
import { ProductCta } from "@/components/product/ProductCta";
import { assetSrc } from "@/assets/home";
import { pricingImages } from "@/assets/pricing";
import { cn } from "@/lib/utils";
import {
  gatewayFaq,
  gatewayPlans,
  pricingHero,
  pricingTabs,
  workspaceBottomCta,
  workspaceFaq,
  workspacePlans,
  type PricingTabId,
} from "@/data/pricing";
import { PricingPlans } from "@/components/pricing/PricingPlans";
import { PricingGatewayCompare } from "@/components/pricing/PricingGatewayCompare";
import {
  PricingCredits,
  PricingIntegrations,
  PricingSecurity,
  PricingTestimonials,
  PricingToolCompare,
  PricingWork,
} from "@/components/pricing/PricingWorkspace";
import { PricingFeatureIcon } from "@/components/pricing/PricingIcons";

function tabFromHash(): PricingTabId {
  if (typeof window === "undefined") {
    return "gateway";
  }
  return window.location.hash === "#ai-workspace" ? "workspace" : "gateway";
}

export function PricingPage() {
  const [tab, setTab] = useState<PricingTabId>("gateway");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    function apply() {
      setTab(tabFromHash());
    }
    apply();
    setMounted(true);
    window.addEventListener("hashchange", apply);
    return () => window.removeEventListener("hashchange", apply);
  }, []);

  function selectTab(next: PricingTabId) {
    setTab(next);
    const url = next === "workspace" ? "#ai-workspace" : "/pricing";
    window.history.replaceState(null, "", url);
  }

  const showGateway = !mounted || tab === "gateway";
  const showWorkspace = mounted && tab === "workspace";
  const isGateway = showGateway;

  return (
    <>
      <section id="hero" className="bg-white pt-10 pb-6 md:pt-16 md:pb-8">
        <Container>
          <div
            className="relative mx-auto grid max-w-[920px] place-items-center text-center"
            suppressHydrationWarning
          >
            <h2
              className={cn(
                "col-start-1 row-start-1 font-heading text-[40px] leading-[1.15] font-semibold tracking-[-0.03em] text-neutral-900 transition-opacity duration-300 md:text-[64px] md:leading-[1.1]",
                isGateway ? "opacity-100" : "pointer-events-none opacity-0",
              )}
            >
              {pricingHero.gateway.headingLines[0]}
              <br className="hidden lg:block" /> {pricingHero.gateway.headingLines[1]}
            </h2>
            <h1
              className={cn(
                "col-start-1 row-start-1 font-heading text-[40px] leading-[1.15] font-semibold tracking-[-0.03em] text-neutral-900 transition-opacity duration-300 md:text-[64px] md:leading-[1.1]",
                isGateway ? "pointer-events-none opacity-0" : "opacity-100",
              )}
            >
              {pricingHero.workspace.headingLines[0]}
              <br className="hidden lg:block" /> {pricingHero.workspace.headingLines[1]}
            </h1>
          </div>

          <div
            className={cn(
              "mt-6 flex justify-center transition-opacity duration-300",
              isGateway ? "pointer-events-none h-0 overflow-hidden opacity-0" : "opacity-100",
            )}
          >
            <picture>
              <source media="(max-width: 767px)" srcSet={assetSrc(pricingImages.modelIconsMobile)} />
              <img
                src={assetSrc(pricingImages.modelIconsDesktop)}
                alt={pricingHero.workspace.modelAlt}
                width={176}
                height={44}
                className="h-11 w-auto"
              />
            </picture>
          </div>

          <div
            role="tablist"
            aria-label="Pricing products"
            className="mx-auto mt-8 flex max-w-[608px] rounded-full bg-[#F1F4F7] p-1"
          >
            {pricingTabs.map((item) => {
              const selected = tab === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  role="tab"
                  aria-selected={selected}
                  className={cn(
                    "h-12 min-w-0 flex-1 rounded-full px-4 text-sm font-medium transition-colors duration-200",
                    selected
                      ? "bg-white text-accent shadow-[0_1px_1px_rgba(0,0,0,0.1)]"
                      : "text-[#65717B] hover:text-neutral-900",
                  )}
                  onClick={() => selectTab(item.id)}
                >
                  {item.label}
                </button>
              );
            })}
          </div>
        </Container>
      </section>

      <section
        id="pricing"
        className="bg-[linear-gradient(180deg,#ffffff_0%,#EFF4F8_100%)] pb-16 md:pb-24"
      >
        <Container>
          <PricingPlans plans={isGateway ? gatewayPlans : workspacePlans} />
        </Container>
      </section>

      {showGateway ? (
        <>
          <PricingGatewayCompare />
          <ProductFaq
            key="gateway-faq"
            heading={gatewayFaq.heading}
            items={gatewayFaq.tabs[0].items}
            tabs={gatewayFaq.tabs}
            variant="cards"
          />
        </>
      ) : null}
      {showWorkspace ? (
        <>
          <PricingIntegrations />
          <PricingCredits />
          <PricingWork />
          <PricingToolCompare />
          <PricingSecurity />
          <PricingTestimonials />
          <ProductFaq
            key="workspace-faq"
            heading={workspaceFaq.heading}
            items={workspaceFaq.tabs[0].items}
            tabs={workspaceFaq.tabs}
            variant="cards"
          />
          <ProductCta
            heading={workspaceBottomCta.heading}
            body={workspaceBottomCta.body}
            primary={workspaceBottomCta.primary}
          >
            <p className="mt-5 flex items-center justify-center gap-2 text-sm text-white/80">
              <PricingFeatureIcon name="shield" className="size-3.5" />
              {workspaceBottomCta.guarantee}
            </p>
          </ProductCta>
        </>
      ) : null}
    </>
  );
}

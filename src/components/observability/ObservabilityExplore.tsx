"use client";

import type { ComponentType } from "react";
import { useState } from "react";
import { Container } from "@/components/layout/Container";
import { ObservabilityObserverPill } from "@/components/observability/ObservabilityObserverPill";
import {
  ObservabilityAdoptionIcon,
  ObservabilityKnowledgeIcon,
  ObservabilityOrgIcon,
  ObservabilityPolicyIcon,
  ObservabilityReportsIcon,
  ObservabilitySecurityNavIcon,
  ObservabilityShieldIcon,
  ObservabilitySpendIcon,
} from "@/components/observability/ObservabilityIcons";
import { assetSrc } from "@/assets/home";
import { observabilityExplore } from "@/data/features/observability";
import { cn } from "@/lib/utils";

const NAV_ICONS: Record<string, ComponentType<{ className?: string }>> = {
  organisation: ObservabilityOrgIcon,
  security: ObservabilitySecurityNavIcon,
  adoption: ObservabilityAdoptionIcon,
  knowledge: ObservabilityKnowledgeIcon,
  policy: ObservabilityPolicyIcon,
  reports: ObservabilityReportsIcon,
  spend: ObservabilitySpendIcon,
};

type NavId = (typeof observabilityExplore.nav)[number]["id"];

export function ObservabilityExplore() {
  const [navId, setNavId] = useState<NavId>("organisation");
  const [orgTab, setOrgTab] = useState("profile");
  const orgShot =
    observabilityExplore.orgTabs.find((tab) => tab.id === orgTab && tab.image) ??
    observabilityExplore.orgTabs[0];
  const viewShot =
    navId === "security"
      ? observabilityExplore.views.security
      : navId === "adoption"
        ? observabilityExplore.views.adoption
        : navId === "knowledge"
          ? observabilityExplore.views.knowledge
          : null;

  const navItems = observabilityExplore.nav.map((item, index) => ({
    ...item,
    showGroup: index === 0 || item.group !== observabilityExplore.nav[index - 1]?.group,
  }));

  return (
    <section id="explore-platform" className="relative">
      <div className="px-4 pt-8 pb-16 md:px-10 md:pt-10 md:pb-28">
        <Container className="px-0">
          <div className="mx-auto mb-10 max-w-[740px] text-center">
            <ObservabilityObserverPill />
            <h2 className="font-heading text-[36px] leading-[1.2] font-semibold tracking-[-0.015em] text-white md:text-[48px] md:leading-[57.6px]">
              {observabilityExplore.heading}
            </h2>
          </div>
          <div
            data-platform-explorer
            className="group/frame relative w-full overflow-hidden rounded-md border border-neutral-200 bg-white shadow-[0_24px_60px_rgba(7,16,19,0.10)] md:grid md:h-[clamp(520px,80vh,820px)] md:grid-cols-[clamp(220px,21%,258px)_1fr]"
          >
            <div
              role="tablist"
              aria-orientation="vertical"
              aria-label="Observer"
              className="flex gap-0.5 border-neutral-200 max-md:flex-row max-md:items-center max-md:overflow-x-auto max-md:border-b max-md:px-3 max-md:py-2 md:flex-col md:border-r md:px-3 md:py-4 lg:px-4 lg:py-5"
            >
              <div className="flex items-center gap-2.5 px-2 pt-1.5 pb-4.5 text-[15px] leading-[1.2] font-bold text-neutral-900 max-md:hidden">
                <span className="grid size-7.5 shrink-0 place-items-center rounded-[9px] bg-accent text-white">
                  <ObservabilityShieldIcon />
                </span>
                Observer
              </div>
              {navItems.map((item) => {
                const Icon = NAV_ICONS[item.id];
                const isActive = navId === item.id;
                return (
                  <div key={item.id} className="contents">
                    {item.showGroup ? (
                      <div
                        role="presentation"
                        className="px-2.5 pt-3.5 pb-1.5 text-[11px] font-medium tracking-[0.04em] text-neutral-400 uppercase max-md:hidden"
                      >
                        {item.group}
                      </div>
                    ) : null}
                    <button
                      type="button"
                      role="tab"
                      aria-selected={isActive}
                      disabled={item.disabled}
                      onClick={() => {
                        if (!item.disabled) setNavId(item.id);
                      }}
                      className={cn(
                        "group flex w-full shrink-0 items-center gap-3 rounded-[9px] border-0 bg-transparent px-2.5 py-2.5 text-left text-sm text-neutral-900 transition-colors max-md:w-auto max-md:whitespace-nowrap",
                        item.disabled
                          ? "cursor-default text-neutral-400"
                          : isActive
                            ? "bg-accent font-semibold text-white"
                            : "hover:bg-blue-100",
                      )}
                    >
                      <span
                        aria-hidden="true"
                        className={cn(
                          "w-[18px] shrink-0 text-center",
                          item.disabled ? "text-neutral-300" : isActive ? "text-white" : "text-neutral-500",
                        )}
                      >
                        {Icon ? <Icon /> : null}
                      </span>
                      <span className="whitespace-nowrap">{item.label}</span>
                      {item.badge ? (
                        <span
                          className={cn(
                            "rounded-full px-1.5 py-0.5 text-[10px] font-semibold tracking-[0.02em] uppercase",
                            isActive ? "bg-white/20 text-white" : "bg-neutral-100 text-neutral-500",
                          )}
                        >
                          {item.badge}
                        </span>
                      ) : null}
                    </button>
                  </div>
                );
              })}
            </div>
            <div className="relative overflow-hidden bg-[#f7f8fb] max-md:h-auto md:h-full">
              {navId === "organisation" ? (
                <div className="flex h-full flex-col">
                  <div className="border-b border-neutral-200 bg-white px-3 pt-5 pb-2 md:px-7">
                    <h2 className="font-heading text-[22px] leading-[1.2] font-semibold text-neutral-900">
                      {observabilityExplore.organisation.heading}
                    </h2>
                    <p className="mt-1 text-sm leading-5 text-neutral-500">
                      {observabilityExplore.organisation.body}
                    </p>
                  </div>
                  <div
                    role="tablist"
                    aria-label="Organisation"
                    className="flex flex-nowrap items-center gap-1.5 overflow-x-auto bg-white px-3 py-3.5 md:px-7"
                  >
                    {observabilityExplore.orgTabs.map((tab) => {
                      const isActive = orgTab === tab.id;
                      return (
                        <button
                          key={tab.id}
                          type="button"
                          role="tab"
                          aria-selected={isActive}
                          disabled={tab.disabled}
                          onClick={() => {
                            if (!tab.disabled) setOrgTab(tab.id);
                          }}
                          className={cn(
                            "flex shrink-0 items-center gap-2 rounded-full border border-solid px-3.5 py-[7px] text-[13px] whitespace-nowrap transition-colors",
                            tab.disabled
                              ? "cursor-default border-neutral-200 bg-white text-neutral-400"
                              : isActive
                                ? "border-accent bg-accent font-semibold text-white"
                                : "border-neutral-200 bg-white text-neutral-600 hover:border-accent hover:text-accent",
                          )}
                        >
                          {tab.label}
                          {"count" in tab && tab.count ? (
                            <span className="text-[11px] text-neutral-400">{tab.count}</span>
                          ) : null}
                        </button>
                      );
                    })}
                  </div>
                  <div className="min-h-0 flex-1 overflow-auto">
                    {orgShot.image ? (
                      <img
                        src={assetSrc(orgShot.image)}
                        alt={orgShot.alt ?? ""}
                        className="h-auto w-full"
                      />
                    ) : null}
                  </div>
                </div>
              ) : viewShot ? (
                <img src={assetSrc(viewShot.image)} alt={viewShot.alt} className="h-full w-full object-cover object-top md:absolute md:inset-0" />
              ) : null}
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";
import { Container } from "@/components/layout/Container";
import { euCompare, type EuCompareCell } from "@/data/features/eu";
import {
  EuCheckIcon,
  EuDashIcon,
  EuInfoIcon,
  EuNexosMark,
  EuXIcon,
} from "@/components/eu-gateway/EuIcons";
import { cn } from "@/lib/utils";

function CompareValue({ cell, align = "center" }: { cell: EuCompareCell; align?: "center" | "start" }) {
  return (
    <span
      className={cn(
        "flex flex-col gap-1 text-sm text-neutral-700",
        align === "center" ? "items-center text-center" : "items-start text-left",
      )}
    >
      {cell.icon === "check" ? <EuCheckIcon /> : null}
      {cell.icon === "dash" ? <EuDashIcon className="text-[#D98C39]" /> : null}
      {cell.icon === "x" ? <EuXIcon className="text-[#E02F1F]" /> : null}
      {cell.text ? <span>{cell.text}</span> : null}
    </span>
  );
}

export function EuCompare() {
  const [tab, setTab] = useState<"nexeco" | "direct">("nexeco");
  const rowCount = euCompare.rows.length;

  return (
    <section id="nexeco-ai-vs-going-direct" className="bg-white py-16 md:py-24">
      <Container>
        <h2 className="text-center font-heading text-[36px] leading-[1.2] font-semibold tracking-[-0.015em] text-neutral-900 md:text-[48px] md:leading-[57.6px]">
          <span className="text-accent">{euCompare.headingBefore}</span>
          {euCompare.headingAfter}
        </h2>

        <div className="mt-10 hidden md:block">
          <div
            className="relative grid w-full min-w-[720px]"
            style={{
              gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
              gridTemplateRows: `repeat(${rowCount + 1}, auto)`,
            }}
          >
            {euCompare.rows.map((_, index) => (
              <div
                key={`rule-${index}`}
                aria-hidden="true"
                className="border-b border-[#dbe4eb]"
                style={{ gridColumn: "1 / -1", gridRow: index + 2 }}
              />
            ))}
            <div
              aria-hidden="true"
              className="pointer-events-none relative z-[1] rounded-md border border-[#dbe4eb]"
              style={{ gridColumn: "1 / -1", gridRow: "2 / -1" }}
            />
            <div
              aria-hidden="true"
              className="pointer-events-none relative z-[2] rounded-t-md rounded-b-xl border-2 border-accent bg-[#eff4f8]"
              style={{ gridColumn: "2 / 3", gridRow: `1 / ${rowCount + 2}` }}
            />

            <div className="relative z-[3] px-6 py-5" style={{ gridColumn: 1, gridRow: 1 }} />
            <div
              className="relative z-[3] flex items-center justify-center gap-2 p-6 text-center text-base font-semibold text-neutral-900"
              style={{ gridColumn: 2, gridRow: 1 }}
            >
              <EuNexosMark />
              {euCompare.left}
            </div>
            <div
              className="relative z-[3] flex items-center justify-center p-6 text-center text-base font-semibold text-neutral-900"
              style={{ gridColumn: 3, gridRow: 1 }}
            >
              {euCompare.right}
            </div>

            {euCompare.rows.map((row, index) => {
              const gridRow = index + 2;
              return (
                <div key={row.label} className="contents">
                  <div
                    className="relative z-[3] flex items-center px-6 py-5 text-left text-base font-medium text-neutral-700"
                    style={{ gridColumn: 1, gridRow }}
                  >
                    {row.label}
                  </div>
                  <div
                    className="relative z-[3] flex items-center justify-center px-6 py-5"
                    style={{ gridColumn: 2, gridRow }}
                  >
                    <CompareValue cell={row.nexeco} />
                  </div>
                  <div
                    className="relative z-[3] flex items-center justify-center px-6 py-5"
                    style={{ gridColumn: 3, gridRow }}
                  >
                    <CompareValue cell={row.direct} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-10 md:hidden">
          <div className="flex rounded-full bg-[#eff4f8] p-1">
            {(
              [
                ["nexeco", euCompare.left],
                ["direct", euCompare.right],
              ] as const
            ).map(([id, label]) => (
              <button
                key={id}
                type="button"
                className={cn(
                  "flex-1 rounded-full px-4 py-2 text-sm font-semibold",
                  tab === id ? "bg-white text-neutral-900 shadow-sm" : "text-neutral-600",
                )}
                onClick={() => setTab(id)}
              >
                {label}
              </button>
            ))}
          </div>
          <div className="mt-4 overflow-hidden rounded-xl border border-[#dbe4eb]">
            {euCompare.rows.map((row) => (
              <div
                key={row.label}
                className="flex items-center justify-between gap-4 border-b border-[#dbe4eb] px-4 py-4 last:border-b-0"
              >
                <span className="text-sm font-medium text-neutral-700">{row.label}</span>
                <CompareValue cell={tab === "nexeco" ? row.nexeco : row.direct} align="start" />
              </div>
            ))}
          </div>
        </div>

        <p className="mt-6 flex items-start justify-center gap-2 text-center text-xs leading-5 text-neutral-500">
          <EuInfoIcon className="mt-0.5 shrink-0" />
          {euCompare.footnote}
        </p>
      </Container>
    </section>
  );
}

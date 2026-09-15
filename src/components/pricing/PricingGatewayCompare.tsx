"use client";

import { Fragment, useState } from "react";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { gatewayCompare, pricingCtas } from "@/data/pricing";
import type { GatewayCompareCell } from "@/data/pricing";
import { PaymentMarks, PricingGreenCheck, PricingGatewayX } from "@/components/pricing/PricingIcons";

function Cell({ cell }: { cell: GatewayCompareCell }) {
  if (cell.kind === "check") {
    return <PricingGreenCheck />;
  }
  if (cell.kind === "x") {
    return <PricingGatewayX />;
  }
  if (cell.kind === "payments") {
    return <PaymentMarks />;
  }
  if (cell.kind === "link" && cell.value && cell.href) {
    return (
      <a href={cell.href} className="text-sm font-medium text-accent hover:text-[var(--accent-hover)]">
        {cell.value}
      </a>
    );
  }
  return <span className="text-sm text-neutral-900">{cell.value}</span>;
}

const DATA_ROW_COUNT = gatewayCompare.rows.length;
const TOTAL_ROWS = DATA_ROW_COUNT + 2;

export function PricingGatewayCompare() {
  const [mobilePlan, setMobilePlan] = useState<0 | 1>(0);

  return (
    <section id="compare-plans" className="bg-white py-16 md:py-24">
      <Container>
        <div className="mx-auto mb-10 max-w-[768px] text-center">
          <h2 className="font-heading text-[36px] leading-[1.2] font-semibold tracking-[-0.015em] text-neutral-900 md:text-[48px] md:leading-[57.6px]">
            {gatewayCompare.heading}
          </h2>
        </div>

        <div className="mx-auto hidden max-w-[1200px] md:block">
          <div className="overflow-x-auto md:overflow-x-visible">
            <div
              className="relative grid w-full min-w-[720px]"
              style={{
                gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
                gridTemplateRows: `repeat(${TOTAL_ROWS}, auto)`,
              }}
            >
              {gatewayCompare.rows.map((_, index) => (
                <div
                  key={`row-divider-${index}`}
                  aria-hidden="true"
                  className="border-b border-[#dbe4eb]"
                  style={{ gridColumn: "1 / -1", gridRow: index + 2, zIndex: 0 }}
                />
              ))}

              <div
                aria-hidden="true"
                className="pointer-events-none relative z-[1] rounded-md border border-[#dbe4eb]"
                style={{ gridColumn: "1 / -1", gridRow: `2 / ${TOTAL_ROWS}` }}
              />
              <div
                aria-hidden="true"
                className="pointer-events-none relative z-[2] rounded-t-md rounded-b-lg border-2 border-[#dbe4eb]"
                style={{ gridColumn: "2 / 3", gridRow: `1 / ${TOTAL_ROWS + 1}` }}
              />

              <div className="relative z-[3] px-6 py-5" style={{ gridColumn: 1, gridRow: 1 }} />
              {gatewayCompare.columns.map((column, columnIndex) => (
                <div
                  key={column.id}
                  className="relative z-[3] flex flex-col items-center justify-center gap-2 p-6 text-center"
                  style={{ gridColumn: columnIndex + 2, gridRow: 1 }}
                >
                  <p className="text-lg font-semibold text-neutral-900">{column.name}</p>
                  <p className="text-sm text-[#65717B]">{column.description}</p>
                </div>
              ))}

              {gatewayCompare.rows.map((row, index) => {
                const gridRow = index + 2;
                return (
                  <Fragment key={row.label}>
                    <div
                      className="relative z-[3] flex flex-col justify-center gap-2 py-4 pl-6 pr-4"
                      style={{ gridColumn: 1, gridRow }}
                    >
                      <span className="inline-flex flex-wrap items-center gap-2 text-sm text-neutral-900">
                        <span>{row.label}</span>
                        {row.badge ? (
                          <span className="rounded-full bg-[#F1ECFF] px-2 py-0.5 text-[10px] font-medium text-accent">
                            {row.badge}
                          </span>
                        ) : null}
                      </span>
                    </div>
                    <div
                      className="relative z-[3] flex flex-col items-center justify-center gap-1 px-6 py-4 text-center"
                      style={{ gridColumn: 2, gridRow }}
                    >
                      <Cell cell={row.payg} />
                    </div>
                    <div
                      className="relative z-[3] flex items-center justify-center px-6 py-4 text-center"
                      style={{ gridColumn: 3, gridRow }}
                    >
                      <Cell cell={row.enterprise} />
                    </div>
                  </Fragment>
                );
              })}

              <div className="relative z-[3] px-6 py-4" style={{ gridColumn: 1, gridRow: TOTAL_ROWS }} />
              <div
                className="relative z-[3] flex items-center justify-center px-6 py-4"
                style={{ gridColumn: 2, gridRow: TOTAL_ROWS }}
              >
                <Button href={pricingCtas.getStarted.href} variant="primary" className="w-full max-w-[280px]">
                  {pricingCtas.getStarted.label}
                </Button>
              </div>
              <div
                className="relative z-[3] flex items-center justify-center px-6 py-4"
                style={{ gridColumn: 3, gridRow: TOTAL_ROWS }}
              >
                <Button href={pricingCtas.talkEngineer.href} variant="primary" className="w-full max-w-[280px]">
                  {pricingCtas.talkEngineer.label}
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 md:hidden">
          <div role="tablist" className="flex w-full overflow-x-auto rounded-full bg-[#F1F4F7] p-1">
            {gatewayCompare.columns.map((column, index) => {
              const selected = mobilePlan === index;
              return (
                <button
                  key={column.id}
                  type="button"
                  role="tab"
                  aria-selected={selected}
                  className={cn(
                    "flex min-w-0 flex-1 items-center justify-center rounded-full px-4 py-2 text-xs font-medium",
                    selected ? "bg-white text-accent shadow-[0_1px_1px_rgba(0,0,0,0.1)]" : "text-[#65717B]",
                  )}
                  onClick={() => setMobilePlan(index as 0 | 1)}
                >
                  {column.name}
                </button>
              );
            })}
          </div>
          <div className="mt-6 overflow-hidden rounded-2xl border border-[#dbe4eb]">
            <div className="border-b border-[#dbe4eb] px-5 py-5 text-center">
              <p className="text-lg font-semibold text-neutral-900">
                {gatewayCompare.columns[mobilePlan].name}
              </p>
              <p className="mt-1 text-sm text-[#65717B]">
                {gatewayCompare.columns[mobilePlan].description}
              </p>
            </div>
            {gatewayCompare.rows.map((row, index) => (
              <div
                key={row.label}
                className="flex items-center justify-between gap-4 border-b border-[#dbe4eb] px-5 py-4"
              >
                <span className="text-sm text-neutral-900">
                  {row.label}
                  {row.badge ? (
                    <span className="ml-2 rounded-full bg-[#F1ECFF] px-2 py-0.5 text-[10px] font-medium text-accent">
                      {row.badge}
                    </span>
                  ) : null}
                </span>
                <span className="shrink-0">
                  <Cell cell={mobilePlan === 0 ? row.payg : row.enterprise} />
                </span>
              </div>
            ))}
            <div className="p-5">
              <Button
                href={mobilePlan === 0 ? pricingCtas.getStarted.href : pricingCtas.talkEngineer.href}
                variant="primary"
                className="w-full"
              >
                {mobilePlan === 0 ? pricingCtas.getStarted.label : pricingCtas.talkEngineer.label}
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

"use client";

import { useMemo, useState } from "react";
import { Container } from "@/components/layout/Container";
import { ModelsSearchIcon } from "@/components/models/ModelsIcons";
import {
  modelsCatalogue,
  type ModelCapability,
  type ModelRegion,
  type ModelRow,
} from "@/data/models";

const capabilityClass: Record<ModelCapability, string> = {
  Tools: "bg-blue-900 text-blue-400",
  Cache: "bg-[#0a2832] text-[#17b0cf]",
  JSON: "bg-[#0e2d37] text-[#3ca8a6]",
  Think: "bg-[#042744] text-[#328ad1]",
  Vision: "bg-[#0e2d37] text-[#3ca8a6]",
  Web: "bg-[#1d2240] text-[#7286fb]",
};

const regionClass: Record<ModelRegion, string> = {
  EU: "border-blue-500 text-blue-500",
  US: "border-[#3ca8a6] text-[#3ca8a6]",
  Other: "border-neutral-400 text-neutral-400",
};

const numericCellClass =
  "p-4 text-center align-middle text-sm whitespace-nowrap tabular-nums text-[#8193A2]";

const headerCellClass =
  "sticky top-[var(--header-height)] z-10 bg-[#121B24] p-4 text-center text-sm font-medium text-[#EFF4F8]";

function rowKey(row: ModelRow, index: number) {
  return `${row.name}|${row.provider}|${row.region}|${row.context}|${row.input}|${row.output}|${row.cache}|${index}`;
}

function matchesQuery(row: ModelRow, query: string) {
  if (!query) return true;
  return (
    row.name.toLowerCase().includes(query) || row.provider.toLowerCase().includes(query)
  );
}

export function ModelsDatabase() {
  const [query, setQuery] = useState("");
  const normalized = query.trim().toLowerCase();

  const filtered = useMemo(
    () => modelsCatalogue.filter((row) => matchesQuery(row, normalized)),
    [normalized],
  );

  return (
    <section id="models-explorer" className="relative bg-[#071013] pt-8 pb-16">
      <Container className="px-4 xl:px-0">
        <div className="flex flex-col items-center gap-6">
          <div className="relative w-full max-w-[723px]">
            <ModelsSearchIcon className="pointer-events-none absolute top-1/2 left-4 -translate-y-1/2 text-[#8193A2]" />
            <input
              type="text"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search models..."
              aria-label="Search models"
              autoComplete="off"
              className="w-full rounded-full border border-[#363D44] bg-[#121B24] p-4 pr-12 pl-11 text-base leading-6 text-[#EFF4F8] shadow-[0px_0px_4px_0px_rgba(0,0,0,0.25)] placeholder:text-[#65717b] focus-visible:ring-2 focus-visible:outline-none"
            />
          </div>

          <div className="w-full overflow-x-auto rounded-[16px] border border-[#262B30] xl:overflow-x-clip xl:overflow-y-clip">
            <table className="w-full min-w-[1000px] table-fixed border-collapse">
              <thead>
                <tr>
                  <th
                    scope="col"
                    className={`${headerCellClass} w-[180px] text-left max-xl:left-0 max-xl:z-20`}
                  >
                    Model
                  </th>
                  <th scope="col" className={`${headerCellClass} w-[220px]`}>
                    Provider
                  </th>
                  <th scope="col" className={`${headerCellClass} w-[320px]`}>
                    Capabilities
                  </th>
                  <th scope="col" className={headerCellClass}>
                    Context
                  </th>
                  <th scope="col" className={headerCellClass}>
                    Input / 1M
                  </th>
                  <th scope="col" className={headerCellClass}>
                    Output / 1M
                  </th>
                  <th scope="col" className={headerCellClass}>
                    Cache read / 1M
                  </th>
                  <th scope="col" className={`${headerCellClass} w-[105px]`}>
                    Region
                  </th>
                </tr>
              </thead>
              <tbody className="bg-[#0e141c]">
                {filtered.length === 0 ? (
                  <tr className="border-t border-[#262B30]">
                    <td
                      colSpan={8}
                      className="p-8 text-center text-sm text-[#8193A2]"
                    >
                      No models found.
                    </td>
                  </tr>
                ) : (
                  filtered.map((row, index) => (
                    <tr key={rowKey(row, index)} className="border-t border-[#262B30]">
                      <td className="max-xl:z-[1] sticky bg-[#0e141c] p-4 align-middle text-sm text-[#EFF4F8] max-xl:left-0">
                        {row.name}
                      </td>
                      <td className="p-4 text-center align-middle text-sm break-words whitespace-normal tabular-nums text-[#8193A2]">
                        {row.provider}
                      </td>
                      <td className="p-4 align-middle">
                        {row.capabilities.length > 0 ? (
                          <div className="flex flex-wrap justify-center gap-1">
                            {row.capabilities.map((capability) => (
                              <span
                                key={capability}
                                className={`inline-flex h-[19px] items-center rounded-[2px] px-1.5 text-[10px] font-medium ${capabilityClass[capability]}`}
                              >
                                {capability}
                              </span>
                            ))}
                          </div>
                        ) : null}
                      </td>
                      <td className={numericCellClass}>{row.context}</td>
                      <td className={numericCellClass}>{row.input}</td>
                      <td className={numericCellClass}>{row.output}</td>
                      <td className={numericCellClass}>{row.cache}</td>
                      <td className="p-4 text-center align-middle">
                        <span
                          className={`inline-flex h-6 min-w-6 items-center justify-center rounded-[2px] border p-1 text-[10px] font-semibold ${regionClass[row.region]}`}
                        >
                          {row.region}
                        </span>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </Container>
    </section>
  );
}

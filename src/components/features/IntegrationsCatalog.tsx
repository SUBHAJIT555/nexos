"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { IntegrationIcon } from "@/components/icons/IntegrationIcon";
import { Container } from "@/components/layout/Container";
import { integrationsCatalog } from "@/data/features/integrations";
import { cn } from "@/lib/utils";

export function IntegrationsCatalog() {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const { items, pageSize, heading, intro, searchPlaceholder, empty } = integrationsCatalog;

  const filtered = useMemo(() => {
    const needle = query.trim().toLowerCase();
    if (!needle) return items;
    return items.filter(
      (item) =>
        item.name.toLowerCase().includes(needle) ||
        item.body.toLowerCase().includes(needle),
    );
  }, [items, query]);

  const pageCount = Math.max(1, Math.ceil(filtered.length / pageSize));
  const currentPage = Math.min(page, pageCount);
  const visible = filtered.slice((currentPage - 1) * pageSize, currentPage * pageSize);

  return (
    <section className="bg-white py-16 md:py-24">
      <Container>
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row md:items-center">
          <div className="flex w-full flex-col gap-4 md:max-w-[640px]">
            <h2 className="font-heading text-[36px] leading-[1.2] font-semibold tracking-[-0.015em] text-neutral-900 md:text-[40px] md:leading-[48px]">
              {heading}
            </h2>
            <p className="text-base leading-6 text-neutral-700">{intro}</p>
          </div>
          <label className="relative w-full sm:max-w-md md:min-w-[400px]">
            <span className="sr-only">{searchPlaceholder}</span>
            <Search
              aria-hidden="true"
              className="pointer-events-none absolute top-3 left-3 size-6 p-1 text-neutral-600"
            />
            <input
              type="search"
              value={query}
              onChange={(event) => {
                setQuery(event.target.value);
                setPage(1);
              }}
              placeholder={searchPlaceholder}
              className="h-12 w-full rounded-full border border-neutral-300 bg-[#F8FAFC] py-2 pr-12 pl-10 text-base text-neutral-900 outline-none placeholder:text-neutral-600 focus-visible:border-accent focus-visible:ring-1 focus-visible:ring-accent"
            />
          </label>
        </div>

        {visible.length === 0 ? (
          <p className="mt-10 text-base text-neutral-600">{empty}</p>
        ) : (
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {visible.map((item) => (
              <li key={item.id}>
                <article className="flex h-full flex-col gap-4 overflow-hidden rounded-md border border-[#dbe4eb] bg-white p-6 transition-[border-color,box-shadow] duration-150 hover:shadow-sm">
                  {item.comingSoon ? (
                    <div className="flex items-center justify-between gap-4">
                      <IntegrationIcon name={item.name} className="size-12" />
                      <span className="inline-block w-fit rounded-full bg-[#F8FAFC] px-3 py-1 text-xs font-medium text-neutral-900">
                        Coming soon
                      </span>
                    </div>
                  ) : (
                    <IntegrationIcon name={item.name} className="size-12" />
                  )}
                  <h3 className="text-base font-semibold leading-6 text-neutral-900">{item.name}</h3>
                  <p className="text-base leading-6 text-neutral-700">{item.body}</p>
                </article>
              </li>
            ))}
          </ul>
        )}

        {filtered.length > pageSize ? (
          <nav className="mt-8 flex flex-wrap items-center justify-center gap-2" aria-label="Pagination">
            <PageButton
              label="Previous page"
              disabled={currentPage === 1}
              onClick={() => setPage((value) => Math.max(1, value - 1))}
            >
              ‹
            </PageButton>
            {Array.from({ length: pageCount }, (_, index) => index + 1).map((number) => (
              <PageButton
                key={number}
                label={`Page ${number}`}
                current={number === currentPage}
                onClick={() => setPage(number)}
              >
                {number}
              </PageButton>
            ))}
            <PageButton
              label="Next page"
              disabled={currentPage === pageCount}
              onClick={() => setPage((value) => Math.min(pageCount, value + 1))}
            >
              ›
            </PageButton>
          </nav>
        ) : null}
      </Container>
    </section>
  );
}

function PageButton({
  children,
  label,
  current,
  disabled,
  onClick,
}: {
  children: string | number;
  label: string;
  current?: boolean;
  disabled?: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      aria-label={label}
      aria-current={current ? "page" : undefined}
      disabled={disabled}
      onClick={onClick}
      className={cn(
        "flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-medium",
        current
          ? "bg-accent text-white"
          : "bg-[#F8FAFC] text-neutral-800 hover:bg-accent hover:text-white",
        "disabled:cursor-default disabled:opacity-30 disabled:hover:bg-[#F8FAFC] disabled:hover:text-neutral-800",
      )}
    >
      {children}
    </button>
  );
}

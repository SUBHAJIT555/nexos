"use client";

import { useMemo, useState } from "react";
import { ChevronDown, Search } from "lucide-react";
import {
  customerStories,
  customerStoriesDirectory,
  customerStoryDepartments,
  filterCustomerStories,
} from "@/data/customer-stories/listing";
import type { CustomerStoryDepartment } from "@/types/customer-stories";
import { Container } from "@/components/layout/Container";
import { CustomerStoryCard } from "@/components/customer-stories/CustomerStoryCard";

type DepartmentFilter = "All Departments" | CustomerStoryDepartment;

export function CustomerStoriesDirectory() {
  const [query, setQuery] = useState("");
  const [department, setDepartment] = useState<DepartmentFilter>("All Departments");

  const visible = useMemo(
    () => filterCustomerStories(customerStories, query, department),
    [query, department],
  );

  return (
    <section id="stories" className="bg-white pt-16 pb-16">
      <Container>
        <div className="mb-10 grid grid-cols-12 text-center sm:gap-x-8">
          <div className="col-span-12 md:col-span-10 md:col-start-2 lg:col-span-8 lg:col-start-3">
            <h2 className="font-heading text-[32px] leading-10 font-semibold tracking-[-0.256px] text-neutral-900 md:text-[48px] md:leading-[57.6px] md:tracking-[-0.015em]">
              {customerStoriesDirectory.heading}
            </h2>
          </div>
        </div>

        <div className="flex flex-col gap-6 md:items-center md:justify-between">
          <label className="relative w-full max-w-[736px]">
            <span className="sr-only">{customerStoriesDirectory.searchPlaceholder}</span>
            <Search
              aria-hidden="true"
              className="pointer-events-none absolute top-3 left-3 size-6 p-1 text-neutral-600"
            />
            <input
              id="search-input"
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder={customerStoriesDirectory.searchPlaceholder}
              className="h-12 w-full rounded-full border border-neutral-600 bg-white py-2 pr-12 pl-10 text-base text-neutral-900 outline-none placeholder:text-neutral-600 focus-visible:ring-2 focus-visible:ring-accent"
            />
          </label>

          <div className="flex items-center gap-3">
            <p className="text-base leading-6 text-neutral-900">
              {customerStoriesDirectory.filterLabel}
            </p>
            <div className="relative min-w-[180px]">
              <select
                value={department}
                onChange={(event) =>
                  setDepartment(event.target.value as DepartmentFilter)
                }
                aria-label={customerStoriesDirectory.filterLabel}
                className="h-12 w-full appearance-none rounded-full border border-neutral-600 bg-white py-2 pr-10 pl-4 text-left text-base text-neutral-900 outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                {customerStoryDepartments.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              <ChevronDown
                aria-hidden="true"
                className="pointer-events-none absolute top-1/2 right-3 size-4 -translate-y-1/2 text-neutral-900"
              />
            </div>
          </div>
        </div>

        {visible.length === 0 ? (
          <p className="mt-8 text-base text-neutral-600">{customerStoriesDirectory.empty}</p>
        ) : (
          <ul className="mt-8 grid grid-cols-1 gap-y-8 sm:gap-x-8 md:grid-cols-3">
            {visible.map((story) => (
              <li key={story.slug}>
                <CustomerStoryCard story={story} />
              </li>
            ))}
          </ul>
        )}
      </Container>
    </section>
  );
}

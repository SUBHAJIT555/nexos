"use client";

import { useState } from "react";
import type { BlogTocItem } from "@/types/blog";

const MAX_VISIBLE = 3;

export function BlogTableOfContents({ items }: { items: BlogTocItem[] }) {
  const [expanded, setExpanded] = useState(false);
  if (!items.length) return null;

  const visible = expanded ? items : items.slice(0, MAX_VISIBLE);
  const canToggle = items.length > MAX_VISIBLE;

  return (
    <nav aria-label="Table of contents" className="rounded-lg bg-muted p-6">
      <p className="mb-4 text-base font-semibold text-neutral-900">Table of contents</p>
      <ol className="flex flex-col gap-3">
        {visible.map((item) => (
          <li key={item.id} className={item.level > 2 ? "pl-4" : undefined}>
            <a
              href={`#${item.id}`}
              className="text-sm leading-5 text-neutral-700 hover:text-accent"
            >
              {item.text}
            </a>
          </li>
        ))}
      </ol>
      {canToggle ? (
        <button
          type="button"
          className="mt-4 text-sm font-semibold text-accent hover:text-[var(--accent-hover)]"
          onClick={() => setExpanded((value) => !value)}
        >
          {expanded ? "Show less" : "Show all"}
        </button>
      ) : null}
    </nav>
  );
}

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { assetSrc } from "@/assets/home";
import { listingLogos } from "@/assets/customer-stories/listing";
import type { CustomerStorySummary } from "@/types/customer-stories";

export function CustomerStoryCard({ story }: { story: CustomerStorySummary }) {
  const href = `/customer-stories/${story.slug}`;

  return (
    <article className="h-full overflow-hidden rounded-md border border-neutral-200">
      <Link
        href={href}
        className="flex h-full flex-col items-start justify-between gap-y-6 p-6 text-start"
      >
        <div className="flex h-full flex-col items-start gap-y-6 text-start">
          <img
            src={assetSrc(listingLogos[story.logo])}
            alt={story.logoAlt}
            width={142}
            height={64}
            className="h-16 w-auto max-w-full object-contain object-left"
          />
          <p className="text-[20px] leading-[30px] font-medium text-neutral-900">
            {story.title}
          </p>
        </div>
        <span className="inline-flex h-12 items-center gap-2 text-base font-semibold text-accent hover:text-[var(--accent-hover)]">
          Read the story
          <ArrowRight aria-hidden="true" className="size-5" />
        </span>
      </Link>
    </article>
  );
}

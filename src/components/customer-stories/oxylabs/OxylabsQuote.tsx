import type { ReactNode } from "react";
import Image from "next/image";
import { oxylabsGraphics } from "@/assets/customer-stories/oxylabs";
import { oxylabsQuote } from "@/data/customer-stories/oxylabs";
import { cn } from "@/lib/utils";

type OxylabsQuoteProps = {
  children: ReactNode;
  title?: string;
  className?: string;
};

export function OxylabsQuote({
  children,
  title = oxylabsQuote.challengeTitle,
  className,
}: OxylabsQuoteProps) {
  return (
    <figure className={cn("flex flex-col gap-4 rounded-md bg-muted p-8", className)}>
      <blockquote className="text-[20px] leading-[30px] text-neutral-900">{children}</blockquote>
      <figcaption className="flex items-center gap-3">
        <Image
          src={oxylabsGraphics.portrait}
          alt={oxylabsQuote.alt}
          width={54}
          height={54}
          className="size-[54px] rounded-full object-cover"
        />
        <div>
          <p className="text-sm leading-[21px] font-semibold text-neutral-900">{oxylabsQuote.name}</p>
          <p className="text-sm leading-[21px] text-neutral-700">{title}</p>
        </div>
      </figcaption>
    </figure>
  );
}

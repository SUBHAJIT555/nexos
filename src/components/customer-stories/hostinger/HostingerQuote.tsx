import type { ReactNode } from "react";
import Image from "next/image";
import { hostingerGraphics } from "@/assets/customer-stories/hostinger";
import { hostingerQuote } from "@/data/customer-stories/hostinger";
import { cn } from "@/lib/utils";

type HostingerQuoteProps = {
  children: ReactNode;
  className?: string;
};

export function HostingerQuote({ children, className }: HostingerQuoteProps) {
  return (
    <figure className={cn("flex flex-col gap-6 rounded-md bg-muted p-8", className)}>
      <blockquote className="text-[20px] leading-[30px] text-neutral-900">{children}</blockquote>
      <figcaption className="flex items-center gap-3">
        <Image
          src={hostingerGraphics.portrait}
          alt={hostingerQuote.alt}
          width={54}
          height={54}
          className="size-[54px] rounded-full object-cover"
        />
        <div>
          <p className="text-sm leading-[21px] font-semibold text-neutral-900">{hostingerQuote.name}</p>
          <p className="text-sm leading-[21px] text-neutral-700">{hostingerQuote.title}</p>
        </div>
      </figcaption>
    </figure>
  );
}

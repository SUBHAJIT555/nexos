import type { ReactNode } from "react";
import Image from "next/image";
import { payhawkGraphics } from "@/assets/customer-stories/payhawk";
import { payhawkQuote } from "@/data/customer-stories/payhawk";
import { cn } from "@/lib/utils";

type PayhawkQuoteProps = {
  children: ReactNode;
  className?: string;
  attributionClassName?: string;
};

export function PayhawkQuote({
  children,
  className,
  attributionClassName,
}: PayhawkQuoteProps) {
  return (
    <figure className={cn("flex flex-col gap-6 rounded-md bg-muted", className)}>
      <blockquote className="text-[20px] leading-[30px] text-neutral-900">
        {children}
      </blockquote>
      <figcaption className={cn("flex items-center gap-3", attributionClassName)}>
        <Image
          src={payhawkGraphics.boykoKaradzhov}
          alt={payhawkQuote.alt}
          width={54}
          height={54}
          className="size-[54px] rounded-full object-cover"
        />
        <div>
          <p className="text-sm leading-[21px] font-semibold text-neutral-900">
            {payhawkQuote.name}
          </p>
          <p className="text-sm leading-[21px] text-neutral-700">{payhawkQuote.title}</p>
        </div>
      </figcaption>
    </figure>
  );
}

import Image from "next/image";
import { nordSecurityGraphics } from "@/assets/customer-stories/nord-security";
import { nordSecurityQuote } from "@/data/customer-stories/nord-security";
import { cn } from "@/lib/utils";

export function NordSecurityQuote({
  children,
  className,
}: {
  children: string;
  className?: string;
}) {
  return (
    <figure className={cn("flex flex-col gap-6 rounded-md bg-muted p-10", className)}>
      <blockquote className="text-[20px] leading-[30px] text-neutral-900">{children}</blockquote>
      <figcaption className="flex items-center gap-3">
        <Image
          src={nordSecurityGraphics.marijusAvatar}
          alt={nordSecurityQuote.alt}
          width={48}
          height={48}
          className="size-12 rounded-full object-cover"
        />
        <div>
          <p className="text-sm leading-[21px] font-semibold text-neutral-900">
            {nordSecurityQuote.name}
          </p>
          <p className="text-sm leading-[21px] text-neutral-700">{nordSecurityQuote.title}</p>
        </div>
      </figcaption>
    </figure>
  );
}

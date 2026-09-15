import Image from "next/image";
import type { StaticImageData } from "next/image";
import { cn } from "@/lib/utils";

type ProductShotProps = {
  src: StaticImageData;
  alt: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
};

export function ProductShot({
  src,
  alt,
  className,
  sizes = "(min-width: 1024px) 560px, 100vw",
  priority = false,
}: ProductShotProps) {
  return (
    <Image
      src={src}
      alt={alt}
      sizes={sizes}
      priority={priority}
      className={cn("h-auto w-full", className)}
    />
  );
}

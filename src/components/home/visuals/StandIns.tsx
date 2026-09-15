import Image from "next/image";
import { homeCertBadges } from "@/assets/home";
import { cn } from "@/lib/utils";

export function PersonStandIn({
  name,
  className,
  showInitials = true,
}: {
  name: string;
  className?: string;
  showInitials?: boolean;
}) {
  const initials = name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("");

  return (
    <div
      className={cn(
        "flex items-end justify-start bg-[linear-gradient(160deg,#4b2ad6_0%,#1b1540_55%,#0d1218_100%)]",
        className,
      )}
      aria-hidden="true"
    >
      {showInitials ? (
        <div className="flex size-full items-center justify-center font-heading text-lg font-semibold text-white/85">
          {initials}
        </div>
      ) : null}
    </div>
  );
}

export function ComplianceBadges({ className }: { className?: string }) {
  return (
    <div className={cn("flex flex-wrap items-center gap-3", className)}>
      {homeCertBadges.map((badge) => (
        <Image
          key={badge.id}
          src={badge.src}
          alt={badge.alt}
          width={108}
          height={108}
          className="size-[108px]"
        />
      ))}
    </div>
  );
}

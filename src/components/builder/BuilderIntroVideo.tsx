"use client";

import { assetSrc } from "@/assets/home";
import { builderShots, builderVideoSrc } from "@/assets/builder";

export function BuilderIntroVideo() {
  return (
    <video
      className="h-auto w-full overflow-hidden rounded-[16px]"
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      poster={assetSrc(builderShots.videoPoster)}
      suppressHydrationWarning
    >
      <source src={builderVideoSrc} type="video/mp4" />
    </video>
  );
}

import Image from "next/image";
import type { StaticImageData } from "next/image";
import { homeProductShots } from "@/assets/home";
import { cn } from "@/lib/utils";

function ProductStill({
  src,
  label,
  className,
}: {
  src: StaticImageData;
  label: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative aspect-[632/540] w-full overflow-hidden rounded-[20px] border border-neutral-200 shadow-[0_24px_80px_rgb(0_0_0_/_0.12)]",
        className,
      )}
    >
      <Image
        src={src}
        alt={label}
        fill
        sizes="(min-width: 1024px) 560px, 100vw"
        className="object-cover object-left-top"
      />
    </div>
  );
}

export function WorkspaceHeroVisual() {
  return (
    <ProductStill
      src={homeProductShots.workspace}
      label="The workspace, with a new chat open and the model picker listing Claude, GPT and Gemini"
    />
  );
}

export function GatewayHeroVisual() {
  return (
    <ProductStill
      src={homeProductShots["ai-gateway"]}
      label="The model catalogue, listing available models with their provider, region and per-token price"
    />
  );
}

export function ObservabilityVisual() {
  return (
    <ProductStill
      src={homeProductShots.observability}
      label="The usage dashboard, charting total completions, token usage and error rates over time"
    />
  );
}

export function CompareHeroVisual() {
  return (
    <div className="overflow-hidden rounded-[20px] border border-neutral-200 bg-[#0c1218] shadow-[0_24px_80px_rgb(0_0_0_/_0.18)]">
      <div className="grid min-h-[340px] gap-px bg-white/8 md:grid-cols-3">
        {["Claude", "GPT", "Gemini"].map((model) => (
          <div key={model} className="bg-[#0c1218] p-4">
            <div className="text-xs font-medium text-white/50">{model}</div>
            <div className="mt-4 space-y-2">
              <div className="h-2 rounded-full bg-white/10" />
              <div className="h-2 w-5/6 rounded-full bg-white/10" />
              <div className="h-2 w-2/3 rounded-full bg-white/10" />
            </div>
          </div>
        ))}
      </div>
      <span className="sr-only">Compare AI models dashboard</span>
    </div>
  );
}

import { BrandMark } from "@/components/icons/Logo";
import { cn } from "@/lib/utils";

function WindowChrome({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center gap-2 px-4 py-3", className)}>
      <span className="size-2 rounded-full bg-[#5ff3e4]/80" />
      <span className="size-2 rounded-full bg-[#7c70fa]/80" />
      <span className="size-2 rounded-full bg-white/25" />
    </div>
  );
}

function Sidebar({ active }: { active: string }) {
  const items = ["grid", "search", "ai", "image", "list", "stack", "share"];
  return (
    <aside className="flex w-12 shrink-0 flex-col items-center gap-3 border-r border-white/8 py-4">
      <BrandMark className="h-5 w-5 text-white" />
      {items.map((item) => (
        <span
          key={item}
          className={cn(
            "size-7 rounded-md",
            item === active ? "bg-white/12" : "bg-white/4",
          )}
        />
      ))}
    </aside>
  );
}

export function GatewayMockup({ className }: { className?: string }) {
  const rows = [
    ["Claude", "EU", "$3.00"],
    ["GPT", "US", "$2.00"],
    ["Gemini", "EU", "$1.25"],
    ["DeepSeek", "EU", "$0.27"],
    ["Mistral", "EU", "$2.00"],
    ["Grok", "US", "$3.00"],
  ];

  return (
    <div
      className={cn(
        "overflow-hidden rounded-[20px] border border-white/10 bg-[#0c1218] shadow-[0_24px_80px_rgb(0_0_0_/_0.45)]",
        className,
      )}
    >
      <div className="flex min-h-[540px]">
        <Sidebar active="ai" />
        <div className="flex-1 p-5">
          <WindowChrome className="px-0 pt-0" />
          <h3 className="font-heading text-[22px] font-semibold text-white">Models</h3>
          <p className="mt-1 text-xs text-white/50">
            Browse available models and pick the right one
          </p>
          <div className="mt-4 flex gap-2">
            <div className="h-9 flex-1 rounded-full border border-white/10 bg-white/4" />
            <div className="h-9 w-24 rounded-full border border-white/10 bg-white/4" />
          </div>
          <div className="mt-4 overflow-hidden rounded-xl border border-white/8">
            <div className="grid grid-cols-3 bg-white/4 px-3 py-2 text-[11px] text-white/40">
              <span>Model</span>
              <span>Region</span>
              <span>Price</span>
            </div>
            {rows.map((row) => (
              <div
                key={row[0]}
                className="grid grid-cols-3 border-t border-white/6 px-3 py-2.5 text-[12px] text-white/80"
              >
                {row.map((cell) => (
                  <span key={cell}>{cell}</span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function ObservabilityMockup({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-[20px] border border-white/10 bg-[#0c1218] shadow-[0_24px_80px_rgb(0_0_0_/_0.45)]",
        className,
      )}
    >
      <div className="flex min-h-[540px]">
        <Sidebar active="list" />
        <div className="flex-1 p-5">
          <h3 className="font-heading text-[22px] font-semibold text-white">Usage</h3>
          <div className="mt-4 grid grid-cols-3 gap-3">
            {[
              ["12.4k", "Completions"],
              ["86.1M", "Tokens"],
              ["0.12%", "Errors"],
            ].map(([value, label]) => (
              <div key={label} className="rounded-xl border border-white/8 bg-white/4 p-3">
                <div className="font-heading text-xl font-semibold text-white">{value}</div>
                <div className="text-[11px] text-white/45">{label}</div>
              </div>
            ))}
          </div>
          <div className="mt-5 h-48 rounded-xl border border-white/8 bg-[linear-gradient(180deg,rgb(107_62_255_/_0.18),transparent)] p-4">
            <svg viewBox="0 0 320 120" className="h-full w-full" aria-hidden="true">
              <path
                d="M0 90 C40 88, 60 40, 100 48 S160 20, 200 28 S280 70, 320 36"
                fill="none"
                stroke="#7c70fa"
                strokeWidth="3"
              />
              <path
                d="M0 100 C50 96, 80 70, 120 74 S190 50, 240 58 S300 80, 320 64"
                fill="none"
                stroke="#5ff3e4"
                strokeWidth="2"
                opacity="0.8"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export function GovernanceMockup({ className }: { className?: string }) {
  const keys = [
    ["platform-prod", "Unlimited", "Active"],
    ["research-eu", "2M tokens", "Active"],
    ["design-sandbox", "250k tokens", "Limited"],
  ];

  return (
    <div
      className={cn(
        "overflow-hidden rounded-[20px] border border-white/10 bg-[#0c1218] shadow-[0_24px_80px_rgb(0_0_0_/_0.45)]",
        className,
      )}
    >
      <div className="flex min-h-[540px]">
        <Sidebar active="share" />
        <div className="flex-1 p-5">
          <h3 className="font-heading text-[22px] font-semibold text-white">API keys</h3>
          <p className="mt-1 text-xs text-white/50">Per-user token budgets and limits</p>
          <div className="mt-5 space-y-3">
            {keys.map(([name, budget, status]) => (
              <div
                key={name}
                className="flex items-center justify-between rounded-xl border border-white/8 bg-white/4 px-4 py-3"
              >
                <div>
                  <div className="text-sm font-medium text-white">{name}</div>
                  <div className="text-[11px] text-white/45">{budget}</div>
                </div>
                <span className="rounded-full bg-[#6b3eff]/30 px-2.5 py-1 text-[11px] text-[#c5b8ff]">
                  {status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function WorkspaceMockup({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-[20px] border border-white/10 bg-[#0c1218] shadow-[0_24px_80px_rgb(0_0_0_/_0.45)]",
        className,
      )}
    >
      <div className="flex min-h-[540px]">
        <Sidebar active="grid" />
        <div className="flex flex-1 flex-col p-5">
          <div className="flex items-center justify-between">
            <h3 className="font-heading text-[22px] font-semibold text-white">New chat</h3>
            <div className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/70">
              Claude · GPT · Gemini
            </div>
          </div>
          <div className="mt-6 flex-1 rounded-xl border border-white/8 bg-white/[0.03] p-4 text-sm text-white/40">
            Start a conversation with any leading model
          </div>
          <div className="mt-4 h-12 rounded-full border border-white/10 bg-white/4" />
        </div>
      </div>
    </div>
  );
}

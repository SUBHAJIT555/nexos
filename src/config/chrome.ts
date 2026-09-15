export type ChromeTone = "dark" | "light";

/** Homepage, AI Gateway, LLM Caching, Smart LLM Routing, LLM Observability, EU Gateway, and Models use dark overlay chrome. Every other public route is light. */
export function getHeaderTone(pathname: string): ChromeTone {
  return pathname === "/" ||
    pathname === "/ai-gateway" ||
    pathname === "/features/llm-caching" ||
    pathname === "/features/smart-llm-routing" ||
    pathname === "/features/llm-observability" ||
    pathname === "/eu-gateway" ||
    pathname === "/customer-stories/cybercare-nordsecurity" ||
    pathname === "/models"
    ? "dark"
    : "light";
}

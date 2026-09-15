"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { headerCtas, headerNavigation } from "@/config/navigation";
import { getHeaderTone } from "@/config/chrome";
import { Container } from "@/components/layout/Container";
import { Logo } from "@/components/icons/Logo";
import { DesktopNavigation } from "@/components/navigation/DesktopNavigation";
import { MobileNavigation } from "@/components/navigation/MobileNavigation";
import { LinkButton } from "@/components/ui/LinkButton";
import { cn } from "@/lib/utils";

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [pastHero, setPastHero] = useState(false);
  const tone =
    getHeaderTone(pathname) === "dark" && pastHero
      ? "light"
      : getHeaderTone(pathname);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 8);
      setPastHero(
        (pathname === "/" && window.scrollY > 560) ||
          (pathname === "/ai-gateway" && window.scrollY > 2100) ||
          (pathname === "/features/llm-caching" && window.scrollY > 5900) ||
          (pathname === "/features/smart-llm-routing" && window.scrollY > 6200) ||
          (pathname === "/features/llm-observability" && window.scrollY > 5680) ||
          (pathname === "/eu-gateway" && window.scrollY > 1280) ||
          (pathname === "/customer-stories/cybercare-nordsecurity" && window.scrollY > 8670) ||
          (pathname === "/models" && window.scrollY > 12100),
      );
    }

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

  return (
    <header
      data-chrome={tone}
      className={cn(
        "sticky top-0 z-40 transition-[background-color,backdrop-filter,box-shadow] duration-[150ms] ease-[cubic-bezier(0,0,0.2,1)]",
        tone === "dark"
          ? scrolled
            ? "bg-page-dark/90 backdrop-blur-md"
            : "bg-page-dark"
          : pastHero || scrolled
            ? "bg-white shadow-sm"
            : "bg-white",
      )}
    >
      <div className="px-4 md:px-6">
        <Container className="flex h-[var(--header-height)] items-center justify-between gap-4 px-0">
          <Logo />
          <DesktopNavigation items={headerNavigation} />
          <div className="hidden items-center gap-3 lg:flex">
            {headerCtas.map((cta) => (
              <LinkButton
                key={cta.id}
                href={cta.href}
                variant={cta.variant}
                external={cta.external}
                size="sm"
              >
                {cta.label}
              </LinkButton>
            ))}
          </div>
          <MobileNavigation items={headerNavigation} ctas={headerCtas} />
        </Container>
      </div>
    </header>
  );
}

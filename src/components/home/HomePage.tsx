import { Hero } from "@/components/home/Hero";
import { TrustedBy } from "@/components/home/TrustedBy";
import { ProductTabs } from "@/components/home/ProductTabs";
import { CostSavings } from "@/components/home/CostSavings";
import { Security } from "@/components/home/Security";
import { Integrations } from "@/components/home/Integrations";
import { Testimonials } from "@/components/home/Testimonials";
import { CtaBanner } from "@/components/home/CtaBanner";
import { Faq } from "@/components/home/Faq";

export function HomePage() {
  return (
    <div className="bg-page-dark text-white">
      <div data-chrome="dark" className="home-backdrop">
        <Hero />
        <TrustedBy />
        <ProductTabs />
      </div>
      <div data-chrome="dark" className="bg-page-dark">
        <CostSavings />
        <Security />
        <Integrations />
      </div>
      <div data-chrome="light">
        <Testimonials />
      </div>
      <div data-chrome="dark" className="bg-page-dark">
        <CtaBanner />
      </div>
      <div data-chrome="light">
        <Faq />
      </div>
    </div>
  );
}

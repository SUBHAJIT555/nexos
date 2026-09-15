import { compareIllustrations } from "@/assets/compare";
import { assetSrc } from "@/assets/home";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { compareCta } from "@/data/products/compare";

export function CompareCta() {
  return (
    <section className="bg-white py-16">
      <Container>
        <div className="relative overflow-hidden rounded-lg">
          <div className="absolute inset-0 bg-[#071013]" />
          <img
            src={assetSrc(compareIllustrations.animatedGradient)}
            alt=""
            className="pointer-events-none absolute inset-0 h-full w-full object-cover object-center"
          />
          <div className="relative flex flex-col items-center gap-6 px-6 py-16 text-center md:px-10 lg:px-16">
            <h2 className="max-w-[768px] font-heading text-[32px] leading-[1.2] font-semibold tracking-[-0.015em] text-white md:text-[40px] md:leading-[48px]">
              {compareCta.heading}
              <br />
              {compareCta.body}
            </h2>
            <Button
              href={compareCta.primary.href}
              variant="outline"
              className="border-white bg-white text-neutral-900 hover:bg-white/90"
            >
              {compareCta.primary.label}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}

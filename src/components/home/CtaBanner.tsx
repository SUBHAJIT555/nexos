import { homepageCta } from "@/data/homepage";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";

export function CtaBanner() {
  return (
    <section className="relative overflow-hidden py-20 text-center md:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(ellipse 80% 60% at 50% 100%, rgb(107 62 255 / 0.45), transparent 60%)",
        }}
      />
      <Container className="relative">
        <h2 className="mx-auto max-w-[768px] font-heading text-[36px] leading-[1.2] font-semibold tracking-[-0.015em] text-white md:text-[48px] md:leading-[57.6px]">
          {homepageCta.headingLine1}{" "}
          <br className="hidden lg:block" />
          {homepageCta.headingLine2}
        </h2>
        <p className="mx-auto mt-5 max-w-[768px] text-[18px] leading-[28px] text-on-dark md:text-[20px] md:leading-[30px]">
          {homepageCta.body}
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 md:flex-row">
          <Button href={homepageCta.primaryCta.href} variant="hero" className="w-full md:w-fit">
            {homepageCta.primaryCta.label}
          </Button>
          <Button
            href={homepageCta.secondaryCta.href}
            variant="primary"
            className="w-full md:w-fit"
          >
            {homepageCta.secondaryCta.label}
          </Button>
        </div>
      </Container>
    </section>
  );
}

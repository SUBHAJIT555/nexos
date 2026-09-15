import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { ModelsArrowIcon } from "@/components/models/ModelsIcons";
import { modelsHero } from "@/data/models";

export function ModelsHero() {
  return (
    <section id="models-hero" className="relative">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(180deg,#6d28bc_0%,#511a9c_12%,#350b7c_24%,#1e0e48_36%,#120f2d_46%,#071013_60%)]"
      />
      <div className="relative pt-6 pb-6">
        <Container className="px-4 xl:px-0">
          <div className="mx-auto flex max-w-[680px] flex-col items-center gap-y-5 pt-10 text-center md:pt-[72px]">
            <h1 className="font-heading text-[30px] leading-[37.5px] font-semibold tracking-[-0.496px] text-white lg:text-[48px] lg:leading-[57.6px]">
              {modelsHero.headingLead}
              <span className="lg:hidden"> </span>
              <br className="hidden lg:block" />
              {modelsHero.headingTail}
            </h1>
            <p className="max-w-[680px] text-base leading-6 text-[#EFF4F8]">{modelsHero.body}</p>
            <div className="flex w-full flex-col flex-wrap justify-center gap-3 max-md:items-center sm:w-auto md:flex-row">
              <Button href={modelsHero.primary.href} variant="accent">
                {modelsHero.primary.label}
              </Button>
              <Button
                href={modelsHero.secondary.href}
                variant="outline"
                icon={<ModelsArrowIcon />}
                iconPosition="end"
                className="border-[#A3B4C2] bg-transparent text-white hover:bg-white/5 hover:opacity-100"
              >
                {modelsHero.secondary.label}
              </Button>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}

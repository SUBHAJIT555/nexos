import Image from "next/image";
import { cybercareGraphics } from "@/assets/customer-stories/cybercare-nordsecurity";
import { cybercareHero } from "@/data/customer-stories/cybercare-nordsecurity";
import { Container } from "@/components/layout/Container";

export function CyberCareHero() {
  return (
    <section
      id="hero"
      className="relative text-white"
      style={{
        backgroundImage:
          "linear-gradient(180deg, #071013 0%, #071013 51%, #12112C 63.5%, #1D1246 76%, #331378 100%)",
      }}
    >
      <Container className="px-4 py-16 md:px-0">
        <div className="flex flex-col items-start gap-8 lg:flex-row lg:gap-8">
          <div className="flex min-w-0 flex-1 flex-col gap-6">
            <Image
              src={cybercareGraphics.logosStrip}
              alt={cybercareHero.logosAlt}
              width={256}
              height={25}
              priority
              className="h-[25px] w-64 object-contain object-left"
            />
            <h1 className="font-heading text-[32px] leading-10 font-semibold tracking-[-0.256px] text-white md:text-[40px] md:leading-[48px]">
              {cybercareHero.heading}
            </h1>
            <p className="text-base leading-6 text-[#eff4f8]">{cybercareHero.intro}</p>
          </div>
          <div className="w-full shrink-0 lg:w-[454px]">
            <Image
              src={cybercareGraphics.heroChart}
              alt={cybercareHero.chartAlt}
              priority
              sizes="454px"
              className="h-auto w-full rounded-lg"
            />
          </div>
        </div>
        <div className="mt-10 overflow-hidden rounded-md bg-[#131921]/80">
          <div className="grid grid-cols-1 gap-y-10 p-10 md:grid-cols-3 md:gap-x-8">
            {cybercareHero.metrics.map((metric) => (
              <div key={metric.value} className="flex flex-col gap-4">
                <p className="font-heading text-[32px] leading-10 font-semibold tracking-[-0.256px] text-[#7c70fa] md:text-[40px] md:leading-[48px]">
                  {metric.value}
                </p>
                <p className="text-base leading-6 text-neutral-300">{metric.label}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

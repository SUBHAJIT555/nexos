import { Container } from "@/components/layout/Container";
import { assetSrc } from "@/assets/home";
import { euGatewayGraphics } from "@/assets/eu-gateway";
import { euMigrate } from "@/data/features/eu";

export function EuMigrate() {
  return (
    <section
      id="migrate-to-eu"
      className="bg-[linear-gradient(#ffffff_0%,#eff4f8_100%)] py-16 md:py-24"
    >
      <Container>
        <h2 className="mx-auto max-w-[760px] text-center font-heading text-[36px] leading-[1.2] font-semibold tracking-[-0.015em] text-neutral-900 md:text-[48px] md:leading-[57.6px]">
          {euMigrate.heading}
        </h2>
        <div className="mt-12 grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <ol className="flex flex-col gap-8">
            {euMigrate.steps.map((step) => (
              <li key={step.n} className="grid grid-cols-[auto_1fr] gap-x-4">
                <span className="font-heading text-base font-semibold text-accent">{step.n}</span>
                <div>
                  <h3 className="text-base font-semibold text-neutral-900">{step.title}</h3>
                  <p className="mt-2 text-sm leading-[21px] text-neutral-600 md:text-base md:leading-6">
                    {step.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>
          <div className="overflow-hidden rounded-2xl">
            {/* Code window is a permitted SVG still; next/image does not add value. */}
            <img
              src={assetSrc(euGatewayGraphics.apiUrl)}
              alt="Code snippet showing OpenAI SDK pointed to https://api.nexeco-ai.com"
              width={572}
              height={433}
              className="h-auto w-full"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}

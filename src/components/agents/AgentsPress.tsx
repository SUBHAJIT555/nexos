import { agentsPressLogos } from "@/assets/agents";
import { assetSrc } from "@/assets/home";
import { Container } from "@/components/layout/Container";

export function AgentsPress() {
  return (
    <section className="bg-white py-16">
      <Container>
        <div className="flex flex-col items-center gap-6 text-center">
          <p className="text-sm text-neutral-500">Featured in</p>
          <div className="flex w-full flex-wrap items-center justify-between gap-x-6 gap-y-6">
            {agentsPressLogos.map((logo) => (
              <span key={logo.id} className="flex min-h-12 flex-1 items-center justify-center">
                {/* Press SVGs; next/image does not add value here. */}
                <img
                  src={assetSrc(logo.src)}
                  alt={logo.alt}
                  className="h-12 w-auto max-w-[200px] object-contain md:h-14"
                />
              </span>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

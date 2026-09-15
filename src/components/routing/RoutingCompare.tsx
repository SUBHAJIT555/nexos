import { Container } from "@/components/layout/Container";
import { routingCompare } from "@/data/features/routing";

export function RoutingCompare() {
  return (
    <section id="dark-section-smart-llm-routing-vs-one-default-model" className="relative bg-[#071013] py-16 md:py-24">
      <Container>
        <h2 className="mx-auto max-w-[740px] text-center font-heading text-[36px] leading-[1.2] font-semibold tracking-[-0.015em] text-white md:text-[48px] md:leading-[57.6px]">
          Smart LLM routing
          <br className="hidden md:block" /> vs one default model
        </h2>
        <p className="mx-auto mt-5 max-w-[720px] text-center text-base leading-6 text-[#EFF4F8] md:text-[18px] md:leading-[28px]">
          {routingCompare.intro}
        </p>
        <div className="mt-10 overflow-x-auto rounded-2xl border border-[#262B30] bg-[#131921]">
          <table className="w-full min-w-[640px] border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-[#262B30]">
                <th className="px-6 py-5 font-medium text-[#A3B4C2]" />
                <th className="px-6 py-5 font-semibold text-white">{routingCompare.left}</th>
                <th className="px-6 py-5 font-semibold text-white">{routingCompare.right}</th>
              </tr>
            </thead>
            <tbody>
              {routingCompare.rows.map((row) => (
                <tr key={row[0]} className="border-b border-[#262B30] align-top last:border-b-0">
                  <th className="px-6 py-5 font-medium text-[#A3B4C2]">{row[0]}</th>
                  <td className="px-6 py-5 text-[#EFF4F8]">{row[1]}</td>
                  <td className="px-6 py-5 text-[#A3B4C2]">{row[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Container>
    </section>
  );
}

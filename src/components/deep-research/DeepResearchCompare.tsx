import { assetSrc } from "@/assets/home";
import { deepResearchPageGraphics } from "@/assets/deep-research";
import { Container } from "@/components/layout/Container";
import { BrandMark } from "@/components/icons/Logo";
import { deepCompare } from "@/data/features/deep-research";

export function DeepResearchCompare() {
  return (
    <section className="relative py-16 md:py-24">
      <div aria-hidden="true" className="absolute inset-0 bg-neutral-900" />
      <Container className="relative">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-[720px]">
            <p className="font-heading text-[36px] leading-[1.2] font-semibold tracking-[-0.015em] text-accent-soft md:text-[48px] md:leading-[57.6px]">
              {deepCompare.eyebrow}
            </p>
            <h2 className="font-heading text-[36px] leading-[1.2] font-semibold tracking-[-0.015em] text-white md:text-[48px] md:leading-[57.6px]">
              {deepCompare.heading}
            </h2>
          </div>
          <img
            src={assetSrc(deepResearchPageGraphics.providers)}
            alt="nexos.ai, Gemini, OpenAI, and Perplexity logos"
            width={157}
            height={67}
            className="h-[67px] w-[157px] shrink-0"
          />
        </div>
        <div className="mt-8 grid gap-8 md:grid-cols-2">
          <p className="text-base leading-6 text-[#eff4f8] md:text-[20px] md:leading-[30px]">{deepCompare.p1}</p>
          <p className="text-base leading-6 text-[#eff4f8] md:text-[20px] md:leading-[30px]">{deepCompare.p2}</p>
        </div>
        <div className="mt-10 overflow-x-auto rounded-md bg-[#363d44]">
          <table className="w-full min-w-[720px] table-fixed text-left text-base">
            <thead>
              <tr className="border-b border-white/10">
                {deepCompare.columns.map((col) => (
                  <th key={col} className="px-6 py-6 font-bold text-neutral-600">
                    <span className="inline-flex items-center gap-2">
                      {col === "nexos.ai" ? <BrandMark className="size-4 text-white" /> : null}
                      {col}
                    </span>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {deepCompare.rows.map((row, rowIndex) => (
                <tr
                  key={row[0]}
                  className={rowIndex === deepCompare.rows.length - 1 ? undefined : "border-b border-white/10"}
                >
                  {row.map((cell, index) => (
                    <td key={`${row[0]}-${index}`} className="px-6 py-6 text-white">
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Container>
    </section>
  );
}

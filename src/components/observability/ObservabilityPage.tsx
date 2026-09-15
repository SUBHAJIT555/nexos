import { ObservabilityHero } from "@/components/observability/ObservabilityHero";
import { ObservabilityLogos } from "@/components/observability/ObservabilityLogos";
import { ObservabilityControl } from "@/components/observability/ObservabilityControl";
import { ObservabilityExplore } from "@/components/observability/ObservabilityExplore";
import { ObservabilityObserve } from "@/components/observability/ObservabilityObserve";
import { ObservabilityBenefits } from "@/components/observability/ObservabilityBenefits";
import { ObservabilityBlind } from "@/components/observability/ObservabilityBlind";
import { ObservabilityCta } from "@/components/observability/ObservabilityCta";
import { ObservabilityFaq } from "@/components/observability/ObservabilityFaq";

export function ObservabilityPage() {
  return (
    <>
      <div data-chrome="dark" className="bg-[#071013]">
        <div className="relative">
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[linear-gradient(#071013_0%,#071013_8.1%,#13102f_12.4%,#241158_18.6%,#411498_27.9%,#4713a5_33.7%,#5113bd_39.5%,#5214bf_47.2%,#5315c0_54.9%,#5214bf_78.1%,#411298_85.8%,#291161_93.5%,#171039_99.3%,#071013_100%)]"
          />
          <ObservabilityHero />
          <ObservabilityLogos />
          <div className="relative mx-4 md:mx-8">
            <div
              id="ai-tracker"
              className="relative mx-auto w-full max-w-[1232px] isolate overflow-clip rounded-[24px]"
            >
              <div
                aria-hidden="true"
                className="absolute inset-0 rounded-[inherit] bg-[radial-gradient(141.82%_222.7%_at_2%_-33.61%,rgba(104,70,184,0.9)_3.58%,rgba(70,43,142,0.9)_16.34%,rgba(53,30,121,0.9)_22.72%,rgba(36,16,100,0.9)_29.1%,rgba(19,14,64,0.9)_40.63%,rgba(11,13,47,0.9)_46.39%,rgba(3,12,29,0.9)_52.15%,rgba(3,12,29,0.9)_67.89%,rgba(4,16,49,0.9)_71.43%,rgba(5,20,68,0.9)_74.96%,rgba(7,27,108,0.9)_82.02%,rgba(10,34,147,0.9)_89.09%,rgba(12,42,187,0.9)_96.15%)]"
              />
              <ObservabilityControl />
              <ObservabilityExplore />
            </div>
          </div>
        </div>
        <ObservabilityObserve />
        <ObservabilityBenefits />
        <ObservabilityBlind />
        <ObservabilityCta />
      </div>
      <div data-chrome="light">
        <ObservabilityFaq />
      </div>
    </>
  );
}

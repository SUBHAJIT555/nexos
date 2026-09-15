import { Container } from "@/components/layout/Container";
import {
  CachingClipboardIcon,
  CachingCommentsIcon,
  CachingGearSimpleIcon,
  CachingListDotsIcon,
  CachingRotateIcon,
} from "@/components/caching/CachingIcons";
import { cachingComplexity } from "@/data/features/caching";

const icons = {
  gear: CachingGearSimpleIcon,
  clipboard: CachingClipboardIcon,
  comments: CachingCommentsIcon,
  list: CachingListDotsIcon,
};

export function CachingComplexity() {
  return (
    <section id="dark-section-the-complexity-of-llm-caching" className="relative bg-[#071013] py-16 md:py-24">
      <Container>
        <h2 className="mx-auto max-w-[768px] text-center font-heading text-[36px] leading-[1.2] font-semibold tracking-[-0.015em] text-white md:text-[48px] md:leading-[57.6px]">
          The complexity of
          <br /> LLM caching
        </h2>
        <p className="mx-auto mt-5 max-w-[720px] text-center text-base leading-6 text-[#A3B4C2] md:text-[18px] md:leading-[28px]">
          {cachingComplexity.intro}
        </p>
        <div className="mt-10 flex flex-col gap-y-6 rounded-lg border border-neutral-900 p-6">
          <div className="grid grid-cols-1 gap-y-8 sm:gap-x-8 md:grid-cols-2 lg:grid-cols-4">
            {cachingComplexity.items.map((item) => {
              const Icon = icons[item.icon];
              return (
                <article
                  key={item.id}
                  className="flex h-full flex-col gap-y-2 rounded-sm border border-neutral-900 p-6"
                >
                  <span className="inline-flex text-[#9690F8]">
                    <Icon className="size-4" />
                  </span>
                  <h3 className="font-heading text-[18px] leading-[24px] font-semibold text-white">{item.title}</h3>
                  <p className="text-sm leading-[21px] text-[#A3B4C2]">{item.body}</p>
                </article>
              );
            })}
          </div>
          <div className="flex flex-col items-center justify-center gap-x-2 gap-y-2 overflow-hidden rounded-sm bg-[#131921] p-3 md:flex-row">
            <span className="inline-flex shrink-0 text-[#9690F8]">
              <CachingRotateIcon className="size-6" />
            </span>
            <p className="text-center text-sm leading-[21px] font-medium text-white md:text-base md:leading-6">
              {cachingComplexity.footer}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}

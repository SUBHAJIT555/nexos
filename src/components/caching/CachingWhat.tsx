import { Container } from "@/components/layout/Container";
import {
  CachingBooksIcon,
  CachingCommentsIcon,
  CachingGearIcon,
  CachingListIcon,
} from "@/components/caching/CachingIcons";
import { cachingWhat } from "@/data/features/caching";

const contextIcons = {
  list: CachingListIcon,
  gear: CachingGearIcon,
  books: CachingBooksIcon,
  comments: CachingCommentsIcon,
};

export function CachingWhat() {
  return (
    <section id="what-is-llm-caching" className="relative">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(#3f1493_0%,#4915ab_15%,#5f16dd_47.5%,#6d28bc_82%,#59239d_92.5%,#4a1f86_100%)]"
      />
      <div className="relative pt-8 pb-8 md:pb-16">
        <Container>
          <article className="flex h-full w-full flex-col overflow-hidden rounded-lg border border-neutral-900 bg-[#131921] p-6 max-md:p-6 md:p-10">
            <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,527px)] lg:items-start lg:justify-between">
              <div>
                <h2 className="max-w-[480px] font-heading text-[36px] leading-[1.2] font-semibold tracking-[-0.015em] text-white md:text-[40px] md:leading-[48px]">
                  {cachingWhat.heading}
                </h2>
                <p className="mt-5 max-w-[480px] text-base leading-6 text-[#A3B4C2]">{cachingWhat.body}</p>
              </div>
              <div>
                <h3 className="font-heading text-[22px] leading-[28.6px] font-semibold text-white">
                  {cachingWhat.contextsHeading}
                </h3>
                <p className="mt-3 text-base leading-6 text-[#A3B4C2]">{cachingWhat.contextsIntro}</p>
                <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3">
                  {cachingWhat.contexts.map((item) => {
                    const Icon = contextIcons[item.icon];
                    return (
                      <div
                        key={item.id}
                        className="flex h-full flex-col gap-y-6 overflow-hidden rounded-sm border border-neutral-900 bg-[#131921] p-6"
                      >
                        <span className="inline-flex text-[#9690F8]">
                          <Icon className="size-8" />
                        </span>
                        <p className="text-sm leading-[21px] font-medium text-white">{item.title}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </article>
        </Container>
      </div>
    </section>
  );
}

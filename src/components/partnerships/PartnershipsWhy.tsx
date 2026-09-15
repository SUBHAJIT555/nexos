import { partnershipsWhy } from "@/data/partnerships";
import { Container } from "@/components/layout/Container";
import { partnershipsWhyIcons } from "@/components/partnerships/PartnershipsIcons";

export function PartnershipsWhy() {
  return (
    <section id="why-partner" className="bg-white py-16">
      <Container>
        <div className="mb-10">
          <p className="mb-6 text-base leading-6 font-semibold text-neutral-700">
            {partnershipsWhy.eyebrow}
          </p>
          <h2 className="font-heading text-[28px] leading-[36.4px] font-semibold tracking-[-0.256px] text-neutral-900 md:text-[40px] md:leading-[48px]">
            {partnershipsWhy.heading}
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-y-8 sm:gap-x-8 md:grid-cols-2">
          {partnershipsWhy.items.map((item) => {
            const Icon = partnershipsWhyIcons[item.icon];
            return (
              <div key={item.id} className="flex flex-col gap-4 md:flex-row">
                <div className="flex flex-col justify-center">
                  <div className="flex size-fit items-center justify-center rounded-full bg-accent p-3 text-white">
                    <Icon className="size-8 text-white" />
                  </div>
                </div>
                <div className="flex flex-col gap-4">
                  <h3 className="text-[20px] leading-[30px] font-medium text-neutral-900">{item.title}</h3>
                  <p className="text-base leading-6 text-neutral-700">{item.body}</p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

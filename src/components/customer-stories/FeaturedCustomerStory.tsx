import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { assetSrc } from "@/assets/home";
import { listingGraphics, listingLogos } from "@/assets/customer-stories/listing";
import { featuredCustomerStory } from "@/data/customer-stories/listing";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";

export function FeaturedCustomerStory() {
  return (
    <section id="featured-story" className="bg-white pt-16 pb-16">
      <Container>
        <div className="relative overflow-hidden rounded-md">
          <div
            aria-hidden="true"
            className="absolute inset-0 rounded-[inherit] bg-[linear-gradient(270deg,#ffffff_0%,#eff4f8_100%)]"
          />
          <div className="relative p-6">
            <div className="grid grid-cols-1 gap-y-8 sm:grid-cols-12 sm:gap-x-8">
              <div className="sm:col-span-3">
                <div className="relative h-[298px] overflow-hidden rounded-md">
                  <div aria-hidden="true" className="absolute inset-0 bg-neutral-1000" />
                  <Image
                    src={listingGraphics.marijusBriedis}
                    alt={featuredCustomerStory.portraitAlt}
                    fill
                    sizes="(min-width: 640px) 256px, 100vw"
                    className="object-cover object-top"
                    priority
                  />
                  <div className="absolute inset-0 flex flex-col justify-end p-6">
                    <p className="text-sm leading-[21px] font-semibold text-white">
                      {featuredCustomerStory.name}
                    </p>
                    <p className="text-sm leading-[21px] text-white">
                      {featuredCustomerStory.role}
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center gap-y-4 sm:col-span-9">
                <img
                  src={assetSrc(listingLogos["nord-security"])}
                  alt="Nord Security"
                  width={164}
                  height={74}
                  className="h-[74px] w-[164px] object-contain object-left"
                />
                <p className="text-[20px] leading-[30px] text-neutral-900">
                  {featuredCustomerStory.quote}
                </p>
                <Button
                  href={featuredCustomerStory.href}
                  variant="accent"
                  iconPosition="end"
                  icon={<ArrowRight className="size-5" />}
                  className="w-fit"
                >
                  {featuredCustomerStory.ctaLabel}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

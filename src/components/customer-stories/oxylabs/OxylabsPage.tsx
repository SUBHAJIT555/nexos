import type { ReactNode } from "react";
import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import { oxylabsGraphics } from "@/assets/customer-stories/oxylabs";
import {
  oxylabsChallenge,
  oxylabsChallenges,
  oxylabsHow,
  oxylabsQuote,
  oxylabsResult,
  oxylabsSolution,
  oxylabsToc,
  type StoryInline,
} from "@/data/customer-stories/oxylabs";
import { Container } from "@/components/layout/Container";
import { OxylabsFinalCta, OxylabsMidCta } from "@/components/customer-stories/oxylabs/OxylabsCtas";
import { oxylabsChallengeIcons } from "@/components/customer-stories/oxylabs/OxylabsIcons";
import { OxylabsQuote } from "@/components/customer-stories/oxylabs/OxylabsQuote";
import { OxylabsStoryHero } from "@/components/customer-stories/oxylabs/OxylabsStoryHero";
import { cn } from "@/lib/utils";

function StoryColumn({
  id,
  children,
  className,
}: {
  id?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={cn("scroll-mt-[var(--header-height)] bg-white py-16", className)}>
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-x-8">
          <div className="lg:col-span-8 lg:col-start-3">{children}</div>
        </div>
      </Container>
    </section>
  );
}

function StoryText({ parts }: { parts: StoryInline[] }) {
  return (
    <>
      {parts.map((part, index) => {
        if (typeof part === "string") {
          return <span key={index}>{part}</span>;
        }
        if ("bold" in part) {
          return (
            <strong key={index} className="font-semibold">
              {part.bold}
            </strong>
          );
        }
        return (
          <Link
            key={`${part.href}-${index}`}
            href={part.href}
            className="text-accent underline underline-offset-2 hover:text-[var(--accent-hover)]"
          >
            {part.label}
          </Link>
        );
      })}
    </>
  );
}

function StoryHeading({ children }: { children: ReactNode }) {
  return (
    <h2 className="font-heading text-[28px] leading-9 font-semibold tracking-[-0.256px] text-neutral-900 md:text-[32px] md:leading-[40px]">
      {children}
    </h2>
  );
}

function StorySubheading({ children }: { children: ReactNode }) {
  return (
    <h3 className="font-heading text-[22px] leading-[28.6px] font-semibold text-neutral-900">
      {children}
    </h3>
  );
}

function StoryBody({ children }: { children: ReactNode }) {
  return <p className="text-base leading-6 text-neutral-900">{children}</p>;
}

function StoryCard({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className={cn("overflow-hidden rounded-md border border-border", className)}>{children}</div>
  );
}

function ProductVisual({
  src,
  alt,
  maxWidthClass,
}: {
  src: StaticImageData;
  alt: string;
  maxWidthClass?: string;
}) {
  return (
    <Image
      src={src}
      alt={alt}
      sizes="(min-width: 1024px) 768px, 100vw"
      className={cn("h-auto w-full", maxWidthClass)}
    />
  );
}

function OxylabsToc() {
  return (
    <StoryColumn id="tableofcontents">
      <StoryCard className="p-6">
        <div className="flex flex-col gap-4">
          <StorySubheading>{oxylabsToc.heading}</StorySubheading>
          <div className="flex flex-col">
            {oxylabsToc.groups.map((group) => (
              <div key={group.id} className="flex flex-col">
                <p className="text-base leading-6 font-medium text-neutral-900">
                  <Link href={group.href} className="hover:text-neutral-800">
                    {group.label}
                  </Link>
                </p>
                {group.children.length > 0 ? (
                  <div className="flex flex-col gap-2 p-4">
                    {group.children.map((child) => (
                      <Link
                        key={child.label}
                        href={child.href}
                        className="text-base leading-6 text-neutral-900 hover:text-neutral-800"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </StoryCard>
    </StoryColumn>
  );
}

function OxylabsChallenge() {
  return (
    <StoryColumn id="the-challenge">
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-8">
          <StoryHeading>{oxylabsChallenge.heading}</StoryHeading>
          {oxylabsChallenge.paragraphs.map((parts, index) => (
            <StoryBody key={index}>
              <StoryText parts={parts} />
            </StoryBody>
          ))}
        </div>
        <OxylabsQuote>{oxylabsChallenge.quote}</OxylabsQuote>
      </div>
    </StoryColumn>
  );
}

function OxylabsFacedChallenges() {
  return (
    <StoryColumn id="oxylabs-challenges">
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-8">
          <StoryHeading>{oxylabsChallenges.heading}</StoryHeading>
          <StoryBody>{oxylabsChallenges.intro}</StoryBody>
        </div>
        <div className="flex flex-col gap-8">
          {oxylabsChallenges.cards.map((card) => {
            const Icon = oxylabsChallengeIcons[card.icon];
            return (
              <StoryCard key={card.id} className="p-6">
                <div className="flex flex-col gap-6">
                  <div className="flex items-center gap-3">
                    <Icon className="size-6 text-accent" />
                    <p className="text-base leading-6 font-semibold text-neutral-900">{card.title}</p>
                  </div>
                  <StoryBody>
                    <StoryText parts={card.body} />
                  </StoryBody>
                </div>
              </StoryCard>
            );
          })}
        </div>
        <OxylabsMidCta />
      </div>
    </StoryColumn>
  );
}

function OxylabsSolution() {
  return (
    <StoryColumn id="the-solution">
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-8">
          <StoryHeading>{oxylabsSolution.heading}</StoryHeading>
          {oxylabsSolution.paragraphs.map((parts, index) => (
            <StoryBody key={index}>
              <StoryText parts={parts} />
            </StoryBody>
          ))}
        </div>
        <div className="flex flex-col gap-8">
          <StoryHeading>{oxylabsSolution.numbersHeading}</StoryHeading>
          <StoryBody>{oxylabsSolution.numbersIntro}</StoryBody>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {oxylabsSolution.metrics.map((metric) => (
              <StoryCard key={metric.label} className="p-8">
                <div className="flex flex-col gap-4">
                  <p className="font-heading text-[40px] leading-[48px] font-semibold tracking-[-0.496px] text-accent md:text-[48px] md:leading-[57.6px]">
                    {metric.value}
                  </p>
                  <p className="text-base leading-6 text-neutral-900">{metric.label}</p>
                </div>
              </StoryCard>
            ))}
          </div>
        </div>
      </div>
    </StoryColumn>
  );
}

function OxylabsModelAgnostic() {
  return (
    <StoryColumn id="model-agnostic-approach">
      <div className="flex flex-col gap-10">
        <StoryHeading>{oxylabsHow.heading}</StoryHeading>
        <div className="flex flex-col gap-6">
          <StorySubheading>{oxylabsHow.modelAgnostic.heading}</StorySubheading>
          {oxylabsHow.modelAgnostic.paragraphs.map((parts, index) => (
            <StoryBody key={index}>
              <StoryText parts={parts} />
            </StoryBody>
          ))}
        </div>
        <ProductVisual
          src={oxylabsGraphics.compareModels}
          alt={oxylabsHow.modelAgnostic.alt}
          maxWidthClass="max-w-[568px]"
        />
      </div>
    </StoryColumn>
  );
}

function OxylabsObservability() {
  return (
    <StoryColumn id="observability">
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-6">
          <StorySubheading>{oxylabsHow.observability.heading}</StorySubheading>
          {oxylabsHow.observability.paragraphs.map((parts, index) => (
            <StoryBody key={index}>
              <StoryText parts={parts} />
            </StoryBody>
          ))}
        </div>
        <ProductVisual
          src={oxylabsGraphics.teamCostControl}
          alt={oxylabsHow.observability.alt}
          maxWidthClass="max-w-[555px]"
        />
      </div>
    </StoryColumn>
  );
}

function OxylabsGateway() {
  return (
    <StoryColumn id="ai-gateway">
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-6">
          <StorySubheading>{oxylabsHow.gateway.heading}</StorySubheading>
          {oxylabsHow.gateway.paragraphs.map((parts, index) => (
            <StoryBody key={index}>
              <StoryText parts={parts} />
            </StoryBody>
          ))}
        </div>
        <div>
          <Image
            src={oxylabsGraphics.workspaceMetrics}
            alt={oxylabsHow.gateway.alt}
            sizes="(min-width: 1024px) 768px, 100vw"
            className="hidden h-auto w-full md:block"
          />
          <Image
            src={oxylabsGraphics.workspaceMetricsXs}
            alt={oxylabsHow.gateway.altXs}
            sizes="100vw"
            className="h-auto w-full md:hidden"
          />
        </div>
      </div>
    </StoryColumn>
  );
}

function OxylabsResult() {
  return (
    <StoryColumn id="the-result">
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-8">
          <StoryHeading>{oxylabsResult.heading}</StoryHeading>
          {oxylabsResult.paragraphs.map((parts, index) => (
            <StoryBody key={index}>
              <StoryText parts={parts} />
            </StoryBody>
          ))}
        </div>
        <OxylabsQuote title={oxylabsQuote.resultTitle}>{oxylabsResult.quote}</OxylabsQuote>
      </div>
    </StoryColumn>
  );
}

export function OxylabsPage() {
  return (
    <>
      <OxylabsStoryHero />
      <OxylabsToc />
      <OxylabsChallenge />
      <OxylabsFacedChallenges />
      <OxylabsSolution />
      <OxylabsModelAgnostic />
      <OxylabsObservability />
      <OxylabsGateway />
      <OxylabsResult />
      <OxylabsFinalCta />
    </>
  );
}

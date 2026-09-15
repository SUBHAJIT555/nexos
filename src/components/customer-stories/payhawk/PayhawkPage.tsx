import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { payhawkGraphics } from "@/assets/customer-stories/payhawk";
import {
  payhawkChallenge,
  payhawkHero,
  payhawkHow,
  payhawkLack,
  payhawkResult,
  payhawkSolution,
  payhawkToc,
  type StoryInline,
} from "@/data/customer-stories/payhawk";
import { Container } from "@/components/layout/Container";
import { PayhawkFinalCta, PayhawkMidCta } from "@/components/customer-stories/payhawk/PayhawkCtas";
import { PayhawkHero } from "@/components/customer-stories/payhawk/PayhawkHero";
import {
  payhawkLackIcons,
  payhawkTeamIcons,
  StoryCheckIcon,
} from "@/components/customer-stories/payhawk/PayhawkIcons";
import { PayhawkQuote } from "@/components/customer-stories/payhawk/PayhawkQuote";
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

function PayhawkToc() {
  return (
    <StoryColumn id="tableofcontents">
      <StoryCard className="p-6">
        <div className="flex flex-col gap-4">
          <StorySubheading>{payhawkToc.heading}</StorySubheading>
          <div className="flex flex-col">
            {payhawkToc.groups.map((group) => (
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

function PayhawkChallenge() {
  return (
    <StoryColumn id="the-challenge">
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-8">
          <StoryHeading>{payhawkChallenge.heading}</StoryHeading>
          <StoryBody>{payhawkChallenge.intro}</StoryBody>
        </div>
        <div className="flex flex-col gap-8">
          {payhawkChallenge.teams.map((team) => {
            const Icon = payhawkTeamIcons[team.icon];
            return (
              <StoryCard key={team.id} className="p-6">
                <div className="flex flex-col gap-6">
                  <div className="flex items-center gap-3">
                    <Icon className="size-6 text-accent" />
                    <p className="text-base leading-6 font-semibold text-neutral-900">{team.title}</p>
                  </div>
                  <StoryBody>{team.body}</StoryBody>
                </div>
              </StoryCard>
            );
          })}
        </div>
        <PayhawkQuote className="p-6 pb-9" attributionClassName="pb-5">
          {payhawkChallenge.quote.before}
          <strong className="font-bold">{payhawkChallenge.quote.highlight}</strong>
          {payhawkChallenge.quote.after}
        </PayhawkQuote>
      </div>
    </StoryColumn>
  );
}

function PayhawkLack() {
  return (
    <StoryColumn id="lack-of">
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-8">
          <StoryHeading>{payhawkLack.heading}</StoryHeading>
          <StoryBody>{payhawkLack.intro}</StoryBody>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {payhawkLack.cards.map((card) => {
              const Icon = payhawkLackIcons[card.icon];
              return (
                <StoryCard key={card.id} className="p-6">
                  <div className="flex flex-col gap-10">
                    <div className="flex items-center gap-3">
                      <Icon className="size-6 text-neutral-900" />
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
        </div>
      </div>
    </StoryColumn>
  );
}

function PayhawkSolution() {
  return (
    <StoryColumn id="the-solution">
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-8">
          <StoryHeading>{payhawkSolution.heading}</StoryHeading>
          {payhawkSolution.paragraphs.map((paragraph) => (
            <StoryBody key={paragraph.slice(0, 24)}>{paragraph}</StoryBody>
          ))}
        </div>
        <div className="flex flex-col gap-8">
          <StoryHeading>{payhawkSolution.numbersHeading}</StoryHeading>
          <StoryBody>{payhawkSolution.numbersIntro}</StoryBody>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {payhawkHero.metrics.map((metric) => (
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

function PayhawkGuardrails() {
  const section = payhawkHow.guardrails;
  return (
    <StoryColumn id="ai-guardrails">
      <div className="flex flex-col gap-10">
        <StoryHeading>{payhawkHow.heading}</StoryHeading>
        <div className="flex flex-col gap-6">
          <StorySubheading>{section.heading}</StorySubheading>
          {section.paragraphs.map((paragraph) => (
            <StoryBody key={paragraph.slice(0, 24)}>{paragraph}</StoryBody>
          ))}
          <ul className="flex flex-col gap-4">
            {section.bullets.map((bullet) => (
              <li key={bullet} className="flex text-neutral-900">
                <span className="mt-1 mr-2 shrink-0">
                  <StoryCheckIcon />
                </span>
                <p className="text-base leading-6 font-semibold">{bullet}</p>
              </li>
            ))}
          </ul>
          <StoryBody>{section.closing}</StoryBody>
        </div>
        <div>
          <Image
            src={payhawkGraphics.guardrailsHorizontal}
            alt={section.horizontalAlt}
            sizes="(min-width: 1024px) 768px, 100vw"
            className="hidden h-auto w-full md:block"
          />
          <Image
            src={payhawkGraphics.guardrailsVertical}
            alt={section.verticalAlt}
            sizes="100vw"
            className="h-auto w-full md:hidden"
          />
        </div>
      </div>
    </StoryColumn>
  );
}

function ProductVisual({
  src,
  alt,
}: {
  src: (typeof payhawkGraphics)["modelSelection"];
  alt: string;
}) {
  return (
    <div className="flex justify-center">
      <Image src={src} alt={alt} sizes="384px" className="h-auto w-full max-w-[384px]" />
    </div>
  );
}

function PayhawkLlms() {
  return (
    <StoryColumn id="llm-one-place">
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-6">
          <StorySubheading>{payhawkHow.llms.heading}</StorySubheading>
          {payhawkHow.llms.paragraphs.map((parts, index) => (
            <StoryBody key={index}>
              <StoryText parts={parts} />
            </StoryBody>
          ))}
        </div>
        <ProductVisual src={payhawkGraphics.modelSelection} alt={payhawkHow.llms.alt} />
      </div>
    </StoryColumn>
  );
}

function PayhawkCustomization() {
  return (
    <StoryColumn id="customization-control">
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-6">
          <StorySubheading>{payhawkHow.customization.heading}</StorySubheading>
          {payhawkHow.customization.paragraphs.map((parts, index) => (
            <StoryBody key={index}>
              <StoryText parts={parts} />
            </StoryBody>
          ))}
        </div>
        <ProductVisual src={payhawkGraphics.teamManagement} alt={payhawkHow.customization.alt} />
      </div>
    </StoryColumn>
  );
}

function PayhawkObservability() {
  return (
    <StoryColumn id="observability">
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-6">
          <StorySubheading>{payhawkHow.observability.heading}</StorySubheading>
          {payhawkHow.observability.paragraphs.map((parts, index) => (
            <StoryBody key={index}>
              <StoryText parts={parts} />
            </StoryBody>
          ))}
        </div>
        <ProductVisual src={payhawkGraphics.observabilityMetrics} alt={payhawkHow.observability.alt} />
      </div>
    </StoryColumn>
  );
}

function PayhawkResult() {
  return (
    <StoryColumn id="the-result">
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-8">
          <StoryHeading>{payhawkResult.heading}</StoryHeading>
          {payhawkResult.paragraphs.map((paragraph) => (
            <StoryBody key={paragraph.slice(0, 24)}>{paragraph}</StoryBody>
          ))}
        </div>
        <PayhawkQuote className="p-10">{payhawkResult.quote}</PayhawkQuote>
      </div>
    </StoryColumn>
  );
}

export function PayhawkPage() {
  return (
    <>
      <PayhawkHero />
      <PayhawkToc />
      <PayhawkChallenge />
      <PayhawkLack />
      <PayhawkMidCta />
      <PayhawkSolution />
      <PayhawkGuardrails />
      <PayhawkLlms />
      <PayhawkCustomization />
      <PayhawkObservability />
      <PayhawkResult />
      <PayhawkFinalCta />
    </>
  );
}

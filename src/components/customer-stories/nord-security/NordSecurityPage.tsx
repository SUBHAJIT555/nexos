import type { ReactNode } from "react";
import Link from "next/link";
import {
  nordSecurityChallenge,
  nordSecurityHow,
  nordSecurityResult,
  nordSecuritySolution,
  nordSecurityToc,
} from "@/data/customer-stories/nord-security";
import { Container } from "@/components/layout/Container";
import { NordSecurityFinalCta, NordSecurityMidCta } from "@/components/customer-stories/nord-security/NordSecurityCtas";
import { NordSecurityHero } from "@/components/customer-stories/nord-security/NordSecurityHero";
import {
  nordChallengeIcons,
  NordCheckIcon,
  nordStepIcons,
} from "@/components/customer-stories/nord-security/NordSecurityIcons";
import { NordSecurityQuote } from "@/components/customer-stories/nord-security/NordSecurityQuote";
import { NordSecurityRelated } from "@/components/customer-stories/nord-security/NordSecurityRelated";
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

function NordSecurityToc() {
  return (
    <StoryColumn id="tableofcontents">
      <StoryCard className="p-6">
        <div className="flex flex-col gap-4">
          <StorySubheading>{nordSecurityToc.heading}</StorySubheading>
          <div className="flex flex-col">
            {nordSecurityToc.groups.map((group) => (
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

function NordSecurityChallenge() {
  return (
    <StoryColumn id="the-challenge">
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-8">
          <StoryHeading>{nordSecurityChallenge.heading}</StoryHeading>
          <StoryBody>{nordSecurityChallenge.intro}</StoryBody>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {nordSecurityChallenge.cards.map((card) => {
            const Icon = nordChallengeIcons[card.icon];
            return (
              <StoryCard key={card.id} className="p-6">
                <div id={card.id} className="flex scroll-mt-[var(--header-height)] flex-col gap-10">
                  <div className="flex items-center gap-3">
                    <Icon className="size-6 text-neutral-900" />
                    <p className="text-base leading-6 font-semibold text-neutral-900">{card.title}</p>
                  </div>
                  <StoryBody>{card.body}</StoryBody>
                </div>
              </StoryCard>
            );
          })}
        </div>
        <NordSecurityQuote>{nordSecurityChallenge.quote}</NordSecurityQuote>
      </div>
    </StoryColumn>
  );
}

function NordSecuritySolution() {
  return (
    <StoryColumn id="the-solution">
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-8">
          <StoryHeading>{nordSecuritySolution.heading}</StoryHeading>
          {nordSecuritySolution.paragraphs.map((paragraph) => (
            <StoryBody key={paragraph.slice(0, 32)}>{paragraph}</StoryBody>
          ))}
        </div>
        <div className="flex flex-col gap-8">
          <StoryHeading>{nordSecuritySolution.numbersHeading}</StoryHeading>
          <StoryBody>{nordSecuritySolution.numbersIntro}</StoryBody>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {nordSecuritySolution.metrics.map((metric) => (
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

function NordSecurityHow() {
  return (
    <StoryColumn id="ourprocess">
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-6">
          <p className="text-base leading-6 font-semibold text-accent">{nordSecurityHow.kicker}</p>
          <h2 className="font-heading text-[28px] leading-9 font-semibold tracking-[-0.256px] text-neutral-900 md:text-[32px] md:leading-[40px]">
            {nordSecurityHow.headingBefore}
            <span className="text-accent">{nordSecurityHow.headingAccent}</span>
            {nordSecurityHow.headingAfter}
          </h2>
        </div>
        <div className="flex flex-col gap-8">
          {nordSecurityHow.steps.map((step) => {
            const Icon = nordStepIcons[step.icon];
            return (
              <StoryCard key={step.id} className="p-10">
                <div
                  id={step.id}
                  className="flex scroll-mt-[var(--header-height)] flex-col gap-6"
                >
                  <div className="flex flex-col items-start gap-2 md:flex-row md:items-center md:gap-x-2">
                    <Icon className="size-6 shrink-0 text-accent" />
                    <p className="font-heading text-[22px] leading-[28.6px] font-semibold text-neutral-900">
                      {step.title}
                    </p>
                  </div>
                  {step.paragraphs.map((paragraph) => (
                    <StoryBody key={paragraph.slice(0, 32)}>{paragraph}</StoryBody>
                  ))}
                  {step.bullets.length > 0 ? (
                    <ul className="flex flex-col gap-4">
                      {step.bullets.map((bullet) => (
                        <li key={bullet} className="flex text-neutral-900">
                          <span className="mt-1 mr-2 shrink-0">
                            <NordCheckIcon />
                          </span>
                          <p
                            className={cn(
                              "text-base leading-6",
                              step.bulletWeight === "semibold" && "font-semibold",
                            )}
                          >
                            {bullet}
                          </p>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                  {step.closing ? <StoryBody>{step.closing}</StoryBody> : null}
                </div>
              </StoryCard>
            );
          })}
        </div>
      </div>
    </StoryColumn>
  );
}

function NordSecurityResult() {
  return (
    <StoryColumn id="the-result">
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-8">
          <StoryHeading>{nordSecurityResult.heading}</StoryHeading>
          {nordSecurityResult.paragraphs.map((paragraph) => (
            <StoryBody key={paragraph.slice(0, 32)}>{paragraph}</StoryBody>
          ))}
        </div>
        <NordSecurityQuote>{nordSecurityResult.quote}</NordSecurityQuote>
      </div>
    </StoryColumn>
  );
}

export function NordSecurityPage() {
  return (
    <>
      <NordSecurityHero />
      <NordSecurityToc />
      <NordSecurityChallenge />
      <NordSecurityMidCta />
      <NordSecuritySolution />
      <NordSecurityHow />
      <NordSecurityResult />
      <NordSecurityFinalCta />
      <NordSecurityRelated />
    </>
  );
}

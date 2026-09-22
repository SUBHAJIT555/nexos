import type { ReactNode } from "react";
import Image from "next/image";
import { assetSrc } from "@/assets/home";
import { piguLtGraphics, piguLtVideoSrc } from "@/assets/customer-stories/pigu-lt";
import {
  piguLtBefore,
  piguLtFinalCta,
  piguLtFuture,
  piguLtMeet,
  piguLtOutcomes,
  piguLtWithIntro,
  type PiguOutcome,
} from "@/data/customer-stories/pigu-lt";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { piguBeforeIcons, piguOutcomeIcons } from "@/components/customer-stories/pigu-lt/PiguIcons";
import { PiguQuote } from "@/components/customer-stories/pigu-lt/PiguQuote";
import { PiguRelated } from "@/components/customer-stories/pigu-lt/PiguRelated";
import { PiguStoryHero } from "@/components/customer-stories/pigu-lt/PiguStoryHero";
import { cn } from "@/lib/utils";

const outcomeVisuals = {
  descriptionEnhance: piguLtGraphics.descriptionEnhance,
  imageFiltering: piguLtGraphics.imageFiltering,
  productTranslation: piguLtGraphics.productTranslation,
} as const;

function Eyebrow({ children, className }: { children: ReactNode; className?: string }) {
  return <p className={cn("text-sm leading-[21px] text-neutral-700", className)}>{children}</p>;
}

function StoryH2({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <h2
      className={cn(
        "font-heading text-[32px] leading-10 font-semibold tracking-[-0.256px] text-neutral-900 md:text-[40px] md:leading-[48px]",
        className,
      )}
    >
      {children}
    </h2>
  );
}

function StoryH3({ children }: { children: ReactNode }) {
  return (
    <h3 className="font-heading text-[22px] leading-[28.6px] font-semibold text-neutral-900 md:text-[28px] md:leading-9">
      {children}
    </h3>
  );
}

function StoryBody({ children, className }: { children: ReactNode; className?: string }) {
  return <p className={cn("text-base leading-6 text-neutral-700", className)}>{children}</p>;
}

function Badge({ variant }: { variant: "without" | "with" }) {
  if (variant === "without") {
    return (
      <span className="inline-flex rounded-md bg-neutral-200 px-4 py-1 text-xs leading-[18px] text-neutral-600">
        Without NexEco AI
      </span>
    );
  }
  return (
    <span className="inline-flex rounded-md bg-accent px-4 py-1 text-xs leading-[18px] text-white">
      With NexEco AI
    </span>
  );
}

function CompareCard({
  variant,
  body,
  stat,
}: {
  variant: "without" | "with";
  body: string;
  stat?: { kicker: string; value: string; caption: string };
}) {
  return (
    <div
      className={cn(
        "flex h-full flex-col gap-4 rounded-md border bg-white p-8",
        variant === "with" ? "border-accent" : "border-border",
        stat ? "justify-between" : "",
      )}
    >
      <div className="flex flex-col gap-4">
        <Badge variant={variant} />
        <p className="text-base leading-6 text-neutral-900">{body}</p>
      </div>
      {stat ? (
        <div className="flex flex-col gap-2">
          <p className="text-base leading-6 text-neutral-700">{stat.kicker}</p>
          <p
            className={cn(
              "font-heading text-[32px] leading-10 font-semibold tracking-[-0.256px] md:text-[40px] md:leading-[48px]",
              variant === "with" ? "text-accent" : "text-neutral-600",
            )}
          >
            {stat.value}
          </p>
          <p className="text-base leading-6 text-neutral-700">{stat.caption}</p>
        </div>
      ) : null}
    </div>
  );
}

function SavingsBar({ value, label }: { value: string; label: string }) {
  const isPrefix = label.endsWith(":");
  return (
    <div className="flex items-center justify-center gap-2 rounded-md bg-[#f8fafc] px-6 py-6">
      {isPrefix ? (
        <>
          <span className="text-base leading-6 font-semibold text-neutral-900">{label}</span>
          <span className="font-heading text-[20px] leading-[26px] font-semibold text-accent">
            {value}
          </span>
        </>
      ) : (
        <>
          <span className="font-heading text-[20px] leading-[26px] font-semibold text-accent">
            {value}
          </span>
          <span className="text-base leading-6 text-neutral-700">{label}</span>
        </>
      )}
    </div>
  );
}

function StoryRail({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <Container className={className}>
      <div className="mx-auto flex w-full max-w-[768px] flex-col">{children}</div>
    </Container>
  );
}

function OutcomeVisual({ outcome }: { outcome: PiguOutcome }) {
  if (!outcome.visual) return null;
  return (
    <Image
      src={outcomeVisuals[outcome.visual]}
      alt={outcome.visualAlt ?? ""}
      sizes="(min-width: 768px) 768px, 100vw"
      className="h-auto w-full"
    />
  );
}

function OutcomeContent({ outcome }: { outcome: PiguOutcome }) {
  const Icon = piguOutcomeIcons[outcome.icon];
  return (
    <div id={outcome.id} className="flex scroll-mt-[var(--header-height)] flex-col gap-8">
      <div className="flex items-center gap-3">
        <Icon className="size-6 shrink-0 text-accent" />
        <StoryH3>{outcome.heading}</StoryH3>
      </div>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <CompareCard variant="without" body={outcome.without} stat={outcome.from} />
        <CompareCard variant="with" body={outcome.withNexos} stat={outcome.to} />
      </div>
      {outcome.savings ? (
        <SavingsBar value={outcome.savings.value} label={outcome.savings.label} />
      ) : null}
      {outcome.visual ? (
        <div className="pt-8">
          <OutcomeVisual outcome={outcome} />
        </div>
      ) : null}
    </div>
  );
}

function PiguMeet() {
  return (
    <section id={piguLtMeet.id} className="scroll-mt-[var(--header-height)] bg-muted py-16">
      <Container>
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:gap-8">
          <div className="md:w-[568px] md:shrink-0">
            <Image
              src={piguLtGraphics.about}
              alt={piguLtMeet.imageAlt}
              sizes="(min-width: 768px) 568px, 100vw"
              className="h-auto w-full rounded-[24px]"
            />
          </div>
          <div className="flex min-w-0 flex-1 flex-col gap-6">
            <Eyebrow>{piguLtMeet.eyebrow}</Eyebrow>
            <StoryH2>{piguLtMeet.heading}</StoryH2>
            {piguLtMeet.paragraphs.map((paragraph) => (
              <StoryBody key={paragraph.slice(0, 32)}>{paragraph}</StoryBody>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

function PiguBefore() {
  return (
    <section id={piguLtBefore.id} className="scroll-mt-[var(--header-height)] bg-white py-16">
      <StoryRail>
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <Eyebrow>{piguLtBefore.eyebrow}</Eyebrow>
            <StoryH2>{piguLtBefore.heading}</StoryH2>
            <p className="text-base leading-6 text-neutral-900">{piguLtBefore.intro}</p>
          </div>
          <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-2">
            <div className="flex flex-col gap-6">
              {piguLtBefore.cards.map((card) => {
                const Icon = piguBeforeIcons[card.icon];
                return (
                  <div
                    key={card.title}
                    className="flex flex-col gap-6 rounded-md border border-border bg-white p-6"
                  >
                    <div className="flex items-center gap-3">
                      <Icon className="size-6 shrink-0 text-neutral-900" />
                      <p className="font-heading text-base leading-6 font-semibold text-neutral-900">
                        {card.title}
                      </p>
                    </div>
                    <p className="text-base leading-6 text-neutral-700">{card.body}</p>
                  </div>
                );
              })}
            </div>
            <Image
              src={piguLtGraphics.peopleWorking}
              alt={piguLtBefore.imageAlt}
              sizes="(min-width: 768px) 368px, 100vw"
              className="h-auto w-full rounded-md"
            />
          </div>
        </div>
      </StoryRail>
    </section>
  );
}

function PiguWithIntro() {
  const first = piguLtOutcomes[0];
  return (
    <section className="relative overflow-hidden bg-white py-16">
      <picture className="pointer-events-none absolute inset-0">
        <img
          src={assetSrc(piguLtGraphics.gradientLight)}
          alt=""
          className="h-full w-full object-cover object-top"
        />
      </picture>
      <StoryRail className="relative">
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-4">
            <p className="text-base leading-6 font-semibold text-accent">{piguLtWithIntro.eyebrow}</p>
            <StoryH2>{piguLtWithIntro.heading}</StoryH2>
          </div>
          <OutcomeContent outcome={first} />
        </div>
      </StoryRail>
    </section>
  );
}

function PiguOutcomes() {
  return (
    <section className="bg-white py-8 md:py-12">
      <StoryRail>
        <div className="flex flex-col gap-16 md:gap-20">
          {piguLtOutcomes.slice(1).map((outcome) => (
            <OutcomeContent key={outcome.id} outcome={outcome} />
          ))}
        </div>
      </StoryRail>
    </section>
  );
}

function PiguVideo() {
  return (
    <section id="video" className="scroll-mt-[var(--header-height)] bg-white py-16">
      <Container>
        <video
          className="h-auto w-full overflow-hidden rounded-md"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster={assetSrc(piguLtGraphics.videoPoster)}
          suppressHydrationWarning
        >
          <source src={piguLtVideoSrc} type="video/mp4" />
        </video>
      </Container>
    </section>
  );
}

function PiguFuture() {
  return (
    <section
      id={piguLtFuture.id}
      className="relative scroll-mt-[var(--header-height)] overflow-hidden bg-page-dark py-16"
    >
      <picture className="pointer-events-none absolute inset-0">
        <img
          src={assetSrc(piguLtGraphics.gradientDark)}
          alt=""
          className="h-full w-full object-cover object-center"
        />
      </picture>
      <Container className="relative">
        <div className="mx-auto flex max-w-[720px] flex-col items-center gap-4 text-center">
          <p className="text-sm leading-[21px] text-neutral-400">{piguLtFuture.eyebrow}</p>
          <StoryH2 className="text-white">{piguLtFuture.heading}</StoryH2>
          <StoryBody className="text-neutral-300">{piguLtFuture.body}</StoryBody>
        </div>
      </Container>
    </section>
  );
}

function PiguFinalCta() {
  return (
    <section
      id={piguLtFinalCta.id}
      className="scroll-mt-[var(--header-height)] bg-page-dark py-16"
    >
      <Container>
        <div className="relative overflow-hidden rounded-md bg-page-dark">
          <picture className="pointer-events-none absolute inset-0">
            <source
              media="(max-width: 639px)"
              srcSet={assetSrc(piguLtGraphics.ctaBannerXs)}
            />
            <img
              src={assetSrc(piguLtGraphics.ctaBanner)}
              alt=""
              className="h-full w-full object-cover object-right"
            />
          </picture>
          <div className="relative flex min-h-[280px] flex-col items-start justify-center gap-8 px-6 py-16 sm:min-h-[392px] sm:p-16">
            <h2 className="max-w-[720px] font-heading text-[32px] leading-10 font-semibold tracking-[-0.256px] text-white md:text-[48px] md:leading-[57.6px]">
              {piguLtFinalCta.heading}
            </h2>
            <Button href={piguLtFinalCta.cta.href} variant="hero" className="w-fit">
              {piguLtFinalCta.cta.label}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}

export function PiguPage() {
  return (
    <article>
      <PiguStoryHero />
      <PiguMeet />
      <PiguBefore />
      <PiguQuote />
      <PiguWithIntro />
      <PiguOutcomes />
      <PiguVideo />
      <PiguFuture />
      <PiguFinalCta />
      <PiguRelated />
    </article>
  );
}

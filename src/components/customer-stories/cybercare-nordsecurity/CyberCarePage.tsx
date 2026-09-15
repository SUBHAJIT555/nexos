import type { ReactNode } from "react";
import Image from "next/image";
import { assetSrc } from "@/assets/home";
import { cybercareGraphics } from "@/assets/customer-stories/cybercare-nordsecurity";
import {
  cybercareChallenge,
  cybercareCompanies,
  cybercareGlance,
  cybercareLookingAhead,
  cybercarePartnership,
  cybercareQuotes,
  cybercareRelies,
  cybercareResult,
  cybercareSolution,
} from "@/data/customer-stories/cybercare-nordsecurity";
import { Container } from "@/components/layout/Container";
import { CyberCareHero } from "@/components/customer-stories/cybercare-nordsecurity/CyberCareHero";
import {
  CyberArrowIcon,
  CyberCheckCircleIcon,
  cyberGlanceIcons,
  cyberResultIcons,
  CyberTrophyIcon,
  CyberUsersIcon,
} from "@/components/customer-stories/cybercare-nordsecurity/CyberCareIcons";
import { CyberCareQuote } from "@/components/customer-stories/cybercare-nordsecurity/CyberCareQuote";
import { CyberCareRelated } from "@/components/customer-stories/cybercare-nordsecurity/CyberCareRelated";
import { cn } from "@/lib/utils";

const dottedCard =
  "rounded-md border border-neutral-900 [background:radial-gradient(circle,#181F28_1px,transparent_1px)_0_0/6px_6px_repeat,#131921]";
const dottedPanel =
  "rounded-md border border-neutral-900 [background:radial-gradient(circle,#141A24_1px,transparent_1px)_0_0/6px_6px_repeat,#131921]";

const companyLogos = {
  nord: { src: cybercareGraphics.nordLogoWhite, width: 83, height: 23 },
  cybercare: { src: cybercareGraphics.cybercareLogoWhite, width: 59, height: 32 },
  nexos: { src: cybercareGraphics.nexosLogoWhite, width: 95, height: 17 },
} as const;

function StoryContainer({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <Container className={cn("px-4 md:px-0", className)}>{children}</Container>
  );
}

function Kicker({ children }: { children: string }) {
  return <p className="text-[20px] leading-[30px] font-semibold text-[#7c70fa]">{children}</p>;
}

function SectionHeading({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <h2
      className={cn(
        "font-heading text-[32px] leading-10 font-semibold tracking-[-0.256px] text-white md:text-[40px] md:leading-[48px]",
        className,
      )}
    >
      {children}
    </h2>
  );
}

function CyberCareCompanies() {
  return (
    <section
      id="companies-behind-the-story"
      className="text-white"
      style={{
        backgroundImage: "linear-gradient(180deg, #331378 0%, #5E16DA 65%, #6730CB 91%, #5E2EBB 100%)",
      }}
    >
      <StoryContainer className="py-16">
        <SectionHeading className="mb-10">{cybercareCompanies.heading}</SectionHeading>
        <div className="grid grid-cols-1 gap-y-6 md:grid-cols-3 md:gap-x-8">
          {cybercareCompanies.cards.map((card) => {
            const logo = companyLogos[card.key];
            return (
              <article key={card.key} className="flex flex-col gap-6 rounded-md bg-[#131921] p-10">
                <img
                  src={assetSrc(logo.src)}
                  alt={card.logoAlt}
                  width={logo.width}
                  height={logo.height}
                  className="block max-w-none shrink-0 object-contain object-left"
                  style={{ width: logo.width, height: logo.height }}
                />
                <h3 className="text-[20px] leading-[30px] font-semibold text-white">{card.title}</h3>
                <p className="text-base leading-6 text-neutral-300">{card.body}</p>
              </article>
            );
          })}
        </div>
      </StoryContainer>
    </section>
  );
}

function CyberCareGlance() {
  return (
    <section
      id="at-a-glance"
      className="text-white"
      style={{
        backgroundImage: "linear-gradient(180deg, #5E2EBB 0%, #2D1960 35%, #071013 70%, #071013 100%)",
      }}
    >
      <StoryContainer className="py-8 md:py-16">
        <SectionHeading className="mb-10">{cybercareGlance.heading}</SectionHeading>
        <div className="grid grid-cols-1 gap-y-6 sm:gap-x-4 md:grid-cols-2 lg:grid-cols-3">
          {cybercareGlance.cards.map((card) => {
            const Icon = cyberGlanceIcons[card.icon];
            return (
              <div key={card.title} className={cn(dottedCard, "flex flex-col gap-8 p-6 max-md:p-4")}>
                <div className="flex items-center gap-2">
                  <Icon className="text-white" />
                  <span className="text-sm leading-[21px] font-semibold text-white">{card.title}</span>
                </div>
                <div className="flex w-full items-center justify-center gap-3 rounded-sm bg-[#211c3b] px-2 py-4">
                  {card.before ? (
                    <>
                      <span className="text-sm leading-[21px] font-medium text-neutral-400">
                        {card.before}
                      </span>
                      <CyberArrowIcon className="text-[#7c70fa]" />
                    </>
                  ) : null}
                  <span className="text-[20px] leading-[30px] font-semibold text-white">{card.after}</span>
                </div>
              </div>
            );
          })}
        </div>
        <div className="mt-10 flex flex-col gap-8">
          <SectionHeading>{cybercareGlance.comesInHeading}</SectionHeading>
          <div
            className={cn(
              dottedPanel,
              "flex flex-row flex-wrap items-center justify-between gap-x-4 gap-y-4 p-10 max-md:justify-center max-md:px-4 max-md:py-6",
            )}
          >
            {cybercareGlance.pills.map((pill) => (
              <span
                key={pill}
                className="inline-block w-fit rounded-full bg-[#211c3b] px-3 py-1 text-xs leading-[18px] font-medium text-white md:px-6 md:py-4 md:text-base md:leading-6"
              >
                {pill}
              </span>
            ))}
          </div>
        </div>
      </StoryContainer>
    </section>
  );
}

function CyberCareChallenge() {
  return (
    <section id="the-challenge" className="bg-page-dark py-6 text-white">
      <StoryContainer>
        <div className="grid grid-cols-1 items-start gap-y-8 lg:grid-cols-2 lg:gap-x-8">
          <div className="flex flex-col gap-6">
            <Kicker>{cybercareChallenge.kicker}</Kicker>
            <SectionHeading>
              Reliable AI support,
              <br className="hidden lg:block" /> without compromise
            </SectionHeading>
            <p className="text-base leading-6 font-medium text-[#eff4f8]">
              {cybercareChallenge.paragraphs[0]}
            </p>
            {cybercareChallenge.paragraphs.slice(1).map((paragraph) => (
              <p key={paragraph.slice(0, 24)} className="text-base leading-6 text-neutral-300">
                {paragraph}
              </p>
            ))}
          </div>
          <div className="rounded-md border border-neutral-900 p-6 lg:p-8">
            <p className="mb-6 text-sm leading-[21px] font-medium text-neutral-300">
              {cybercareChallenge.panelIntro}
            </p>
            <div className="flex flex-col gap-5">
              {cybercareChallenge.items.map((item) => (
                <div key={item.title} className="flex gap-3">
                  <CyberCheckCircleIcon className="mt-0.5 text-[#7c70fa]" />
                  <div>
                    <p className="text-sm leading-[21px] font-semibold text-[#eff4f8]">{item.title}</p>
                    <p className="text-sm leading-[21px] text-neutral-300">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </StoryContainer>
    </section>
  );
}

function CyberCareSolution() {
  return (
    <section
      id="the-solution"
      className="py-16 text-white"
      style={{ backgroundImage: "linear-gradient(180deg, #071013 0%, #311469 100%)" }}
    >
      <StoryContainer>
        <div className="mb-10 flex flex-col gap-6">
          <Kicker>{cybercareSolution.kicker}</Kicker>
          <SectionHeading>{cybercareSolution.heading}</SectionHeading>
          <p className="text-base leading-6 text-[#eff4f8]">{cybercareSolution.intro}</p>
        </div>
        <div className="grid grid-cols-1 gap-y-6 md:grid-cols-3 md:gap-x-8">
          {cybercareSolution.cards.map((card) => (
            <article
              key={card.title}
              className="flex flex-col gap-4 rounded-md border border-neutral-900 bg-[#131921] p-6"
            >
              <span className="flex size-8 items-center justify-center rounded-sm bg-[#1c232e]">
                <CyberCheckCircleIcon className="text-[#60a5fa]" />
              </span>
              <p className="text-base leading-6 font-semibold text-white">{card.title}</p>
              <p className="text-base leading-6 text-neutral-300">{card.body}</p>
            </article>
          ))}
        </div>
      </StoryContainer>
    </section>
  );
}

function CyberCareRelies() {
  return (
    <>
      <section id="where-cybercare-relies-on-nexosai" className="bg-[#311469] py-16 text-white">
        <StoryContainer>
          <div className="grid grid-cols-1 items-start gap-y-8 lg:grid-cols-2 lg:gap-x-8">
            <div className="flex flex-col gap-6">
              <SectionHeading>{cybercareRelies.heading}</SectionHeading>
              <p className="text-base leading-6 font-medium text-[#eff4f8]">{cybercareRelies.lead}</p>
              {cybercareRelies.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 24)} className="text-base leading-6 text-neutral-300">
                  {paragraph}
                </p>
              ))}
              <div className="rounded-sm border border-neutral-600 p-6">
                <p className="text-base leading-6 text-white">{cybercareRelies.callout}</p>
              </div>
              <p className="text-base leading-6 text-neutral-300">{cybercareRelies.closing}</p>
            </div>
            <Image
              src={cybercareGraphics.team}
              alt={cybercareRelies.teamAlt}
              sizes="(min-width: 1024px) 568px, 100vw"
              className="h-auto w-full rounded-md object-cover"
            />
          </div>
        </StoryContainer>
      </section>
      <section
        id="story-checklist-what-made-nexosai-work-2x3-check-grid"
        className="py-8 text-white md:py-16"
        style={{ backgroundImage: "linear-gradient(180deg, #311469 0%, #071013 91.827%)" }}
      >
        <StoryContainer>
          <div className="grid grid-cols-1 gap-y-8 md:grid-cols-3 md:gap-x-8">
            {cybercareRelies.capabilities.map((item) => (
              <div key={item.title} className="flex flex-col gap-3">
                <div className="flex items-start gap-2">
                  <CyberCheckCircleIcon className="mt-1 text-accent" />
                  <p className="text-base leading-6 font-semibold text-white">{item.title}</p>
                </div>
                <p className="text-base leading-6 text-neutral-300">{item.body}</p>
              </div>
            ))}
          </div>
        </StoryContainer>
      </section>
    </>
  );
}

function CyberCareResult() {
  return (
    <section id="the-result" className="bg-page-dark py-16 text-white">
      <StoryContainer>
        <div className="mb-10 flex flex-col gap-6">
          <Kicker>{cybercareResult.kicker}</Kicker>
          <SectionHeading>
            Faster support,
            <br className="hidden lg:block" /> better customer experience
          </SectionHeading>
          <p className="text-base leading-6 text-[#eff4f8]">{cybercareResult.intro}</p>
        </div>
        <div className="grid grid-cols-1 gap-y-6 md:grid-cols-2 md:gap-x-8 lg:grid-cols-3">
          {cybercareResult.cards.map((card, index) => {
            const Icon = cyberResultIcons[card.icon];
            return (
              <article
                key={index}
                className="flex flex-col gap-6 rounded-md border border-neutral-900 p-6"
              >
                <Icon className="text-white" />
                <p className="text-base leading-6 text-neutral-300">{card.body}</p>
              </article>
            );
          })}
        </div>
      </StoryContainer>
    </section>
  );
}

function CyberCarePartnership() {
  const partnerIcons = [CyberUsersIcon, CyberTrophyIcon];
  return (
    <section id="real-partnership" className="bg-page-dark py-6 text-white">
      <StoryContainer>
        <div className="mb-10">
          <SectionHeading className="mb-6">
            {cybercarePartnership.headingBefore}{" "}
            <br className="hidden lg:block" />
            {cybercarePartnership.headingAfter}
          </SectionHeading>
          <p className="text-[20px] leading-[30px] text-white">{cybercarePartnership.intro}</p>
        </div>
        <div className="grid grid-cols-1 gap-y-6 md:grid-cols-2 md:gap-x-8">
          {cybercarePartnership.cards.map((card, index) => {
            const Icon = partnerIcons[index];
            return (
              <article
                key={card.body.slice(0, 24)}
                className="flex flex-col gap-6 rounded-md border border-neutral-900 p-6"
              >
                <Icon className="text-white" />
                <p className="text-base leading-6 text-neutral-300">{card.body}</p>
              </article>
            );
          })}
        </div>
      </StoryContainer>
    </section>
  );
}

function CyberCareLookingAhead() {
  return (
    <section
      id="looking-ahead"
      className="px-4 py-16 text-center text-white"
      style={{
        backgroundImage:
          "radial-gradient(239% 128% at 50% -28%, #071013 22%, #141130 70.5%, #25174B 74%, #361D66 78%, #582A9D 85%, #6D44A9 87%, #825FB5 89%, #AB94CE 92.5%, #D5CAE6 96%, #FFFFFF 100%)",
      }}
    >
      <div className="mx-auto flex max-w-[768px] flex-col items-center gap-8">
        <h2 className="font-heading text-[40px] leading-[48px] font-semibold tracking-[-0.496px] text-white md:text-[48px] md:leading-[57.6px]">
          {cybercareLookingAhead.heading}
        </h2>
        {cybercareLookingAhead.paragraphs.map((paragraph) => (
          <p key={paragraph.slice(0, 24)} className="text-base leading-6 text-[#eff4f8]">
            {paragraph}
          </p>
        ))}
      </div>
    </section>
  );
}

export function CyberCarePage() {
  return (
    <div className="bg-page-dark">
      <CyberCareHero />
      <CyberCareCompanies />
      <CyberCareGlance />
      <CyberCareChallenge />
      <CyberCareQuote
        id="quote-karolis-valaika-cybercare"
        quote={cybercareQuotes.karolis.quote}
        name={cybercareQuotes.karolis.name}
        title={cybercareQuotes.karolis.title}
        portrait={cybercareGraphics.karolis}
        alt={cybercareQuotes.karolis.alt}
      />
      <CyberCareSolution />
      <CyberCareRelies />
      <CyberCareQuote
        id="quote-justas-morkunas-nexosai"
        quote={cybercareQuotes.justas.quote}
        name={cybercareQuotes.justas.name}
        title={cybercareQuotes.justas.title}
        portrait={cybercareGraphics.justas}
        alt={cybercareQuotes.justas.alt}
      />
      <CyberCareResult />
      <CyberCareQuote
        id="quote-karina-dirvonskiene-nord-security"
        quote={cybercareQuotes.karina.quote}
        name={cybercareQuotes.karina.name}
        title={cybercareQuotes.karina.title}
        portrait={cybercareGraphics.karina}
        alt={cybercareQuotes.karina.alt}
      />
      <CyberCarePartnership />
      <CyberCareQuote
        id="quote-tomas-vilcinskas-cybercare"
        quote={cybercareQuotes.tomas.quote}
        name={cybercareQuotes.tomas.name}
        title={cybercareQuotes.tomas.title}
        portrait={cybercareGraphics.tomas}
        alt={cybercareQuotes.tomas.alt}
      />
      <CyberCareLookingAhead />
      <CyberCareRelated />
    </div>
  );
}

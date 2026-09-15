"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { chatIllustrations } from "@/assets/chat";
import { assetSrc } from "@/assets/home";
import { productToolIcons, type ProductToolId } from "@/assets/products";
import { AiToolsGlyph } from "@/components/builder/BuilderIcons";
import { Container } from "@/components/layout/Container";
import { chatPrompt } from "@/data/products/chat";
import { cn } from "@/lib/utils";

const composerTools: { id: ProductToolId; name: string }[] = [
  { id: "hibob", name: "Hibob" },
  { id: "g-calendar", name: "Google Calendar" },
  { id: "slack", name: "Slack" },
  { id: "g-drive", name: "Google Drive" },
  { id: "ms-sharepoint", name: "Sharepoint" },
  { id: "g-mail", name: "Gmail" },
  { id: "salesforce", name: "Salesforce" },
  { id: "ms-outlook", name: "Microsoft Calendar" },
  { id: "jira", name: "Jira" },
  { id: "ms-onedrive", name: "Microsoft OneDrive" },
  { id: "confluence", name: "Confluence" },
];

export function ChatPrompt() {
  const [value, setValue] = useState("");
  const [toolsOpen, setToolsOpen] = useState(false);
  const canSubmit = value.trim().length > 0;

  return (
    <section className="relative overflow-hidden bg-white py-16">
      <picture className="pointer-events-none absolute inset-0 md:hidden">
        <img
          src={assetSrc(chatIllustrations.promptGridBgXs)}
          alt=""
          className="h-full w-full object-cover object-center"
        />
      </picture>
      <Container className="relative">
        <div className="mx-auto max-w-[768px] text-center">
          <h2 className="font-heading text-[36px] leading-[1.2] font-semibold tracking-[-0.015em] text-neutral-900 md:text-[40px] md:leading-[48px]">
            {chatPrompt.heading}
          </h2>
          <p className="mt-5 text-base leading-6 text-neutral-700">{chatPrompt.body}</p>
        </div>

        <div className="relative mt-10 overflow-hidden rounded-[16px]">
          <div className="pointer-events-none absolute inset-0 hidden bg-neutral-100 md:block" />
          <picture className="pointer-events-none absolute inset-0 hidden md:block">
            <img
              src={assetSrc(chatIllustrations.promptGridBg)}
              alt=""
              className="h-full w-full object-cover object-center"
            />
          </picture>
          <div className="relative flex items-center justify-center px-4 py-16 md:px-28 md:py-28">
            <div className="w-full max-w-[784px]">
              <div className="flex flex-col gap-6 rounded-[20px] border-2 border-accent bg-white px-5 py-5 shadow-[0_8px_32px_rgb(107_62_255_/_0.08)]">
                <textarea
                  rows={1}
                  value={value}
                  onChange={(event) => setValue(event.target.value)}
                  placeholder={chatPrompt.placeholder}
                  className="w-full resize-none bg-transparent text-base leading-6 text-neutral-900 placeholder:text-neutral-500 focus:outline-none"
                />
                <div className="relative flex items-center justify-between gap-3">
                  <button
                    type="button"
                    onClick={() => setToolsOpen((open) => !open)}
                    className={cn(
                      "inline-flex items-center gap-2 rounded-full px-2 py-1 text-sm font-medium text-neutral-700 hover:bg-neutral-100",
                      toolsOpen && "bg-neutral-100",
                    )}
                  >
                    <AiToolsGlyph className="text-neutral-600" />
                    AI Tools
                  </button>
                  {canSubmit ? (
                    <Link
                      href="/pricing"
                      className="flex size-10 items-center justify-center rounded-full bg-neutral-800 text-white hover:bg-neutral-900"
                      aria-label="Continue to pricing"
                    >
                      <ArrowRight className="size-4" />
                    </Link>
                  ) : (
                    <span className="flex size-10 items-center justify-center rounded-full bg-neutral-200 text-neutral-500">
                      <ArrowRight className="size-4" />
                    </span>
                  )}
                  {toolsOpen ? (
                    <div className="absolute bottom-12 left-0 z-10 grid w-[min(100%,360px)] grid-cols-2 gap-2 rounded-[16px] border border-neutral-200 bg-white p-3 shadow-[0_8px_24px_rgb(18_27_36_/_0.12)] sm:grid-cols-3">
                      {composerTools.map((tool) => (
                        <div
                          key={`${tool.id}-${tool.name}`}
                          className="flex items-center gap-2 rounded-lg px-2 py-2 text-sm text-neutral-800"
                        >
                          <Image
                            src={productToolIcons[tool.id]}
                            alt=""
                            width={20}
                            height={20}
                            className="size-5 object-contain"
                          />
                          {tool.name}
                        </div>
                      ))}
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

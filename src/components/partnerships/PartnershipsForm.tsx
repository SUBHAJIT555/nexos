"use client";

import { type FormEvent, useState } from "react";
import { partnershipsGraphics } from "@/assets/partnerships";
import { assetSrc } from "@/assets/home";
import { partnershipsForm } from "@/data/partnerships";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { submitToMailer } from "@/lib/forms/submitToMailer";

const fieldClassName =
  "h-[50px] w-full rounded-sm border border-neutral-500 bg-white px-4 py-3 text-base leading-6 text-neutral-900 outline-none placeholder:text-neutral-500 focus-visible:border-accent";

const labelClassName = "text-xs leading-[18px] font-medium text-neutral-900";

export function PartnershipsForm() {
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitting(true);
    setError(null);
    setSuccess(false);

    const form = event.currentTarget;
    const data = new FormData(form);

    try {
      await submitToMailer({
        formType: "partnership",
        fullName: String(data.get("fullName") ?? ""),
        email: String(data.get("email") ?? ""),
        companyName: String(data.get("companyName") ?? ""),
        website: String(data.get("website") ?? ""),
        partnershipType: String(data.get("partnershipType") ?? ""),
        message: String(data.get("message") ?? ""),
      });
      setSuccess(true);
      form.reset();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unable to send application.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section id="form" className="relative scroll-mt-[var(--header-height)] overflow-hidden py-16">
      <picture className="pointer-events-none absolute inset-0">
        <source media="(max-width: 767px)" srcSet={assetSrc(partnershipsGraphics.bannerGlowXs)} />
        <source media="(max-width: 991px)" srcSet={assetSrc(partnershipsGraphics.bannerGlowMd)} />
        <img
          src={assetSrc(partnershipsGraphics.bannerGlowLg)}
          alt=""
          className="h-full w-full object-cover object-center"
        />
      </picture>
      <Container className="relative">
        <div className="grid grid-cols-1 gap-y-8 md:grid-cols-2 md:gap-x-8">
          <div className="flex max-w-[568px] flex-col gap-4">
            <p className="text-base leading-6 font-semibold text-neutral-700">
              {partnershipsForm.eyebrow}
            </p>
            <h2 className="font-heading text-[30px] leading-[37.5px] font-semibold tracking-[-0.256px] text-neutral-900 md:text-[48px] md:leading-[57.6px] md:tracking-[-0.496px]">
              {partnershipsForm.heading}
            </h2>
            <p className="text-[20px] leading-[30px] text-neutral-700">{partnershipsForm.body}</p>
          </div>
          <form
            className="flex flex-col gap-6 rounded-md border border-neutral-300 bg-white px-4 py-6 md:p-8"
            onSubmit={(event) => void onSubmit(event)}
            noValidate={false}
          >
            {partnershipsForm.fields.map((field) => (
              <div key={field.name} className="flex flex-col gap-1">
                <label htmlFor={field.name} className={labelClassName}>
                  {field.label}
                </label>
                <input
                  id={field.name}
                  name={field.name}
                  type={field.type}
                  placeholder={field.placeholder}
                  required={field.required}
                  autoComplete={field.autoComplete}
                  disabled={submitting}
                  className={fieldClassName}
                />
              </div>
            ))}
            <div className="flex flex-col gap-1">
              <label htmlFor={partnershipsForm.message.name} className={labelClassName}>
                {partnershipsForm.message.label}
              </label>
              <textarea
                id={partnershipsForm.message.name}
                name={partnershipsForm.message.name}
                placeholder={partnershipsForm.message.placeholder}
                rows={5}
                disabled={submitting}
                className="min-h-[146px] w-full resize-y rounded-sm border border-neutral-500 bg-white px-4 py-3 text-base leading-6 text-neutral-900 outline-none placeholder:text-neutral-500 focus-visible:border-accent"
              />
            </div>
            {error ? (
              <p className="text-sm text-red-600" role="alert">
                {error}
              </p>
            ) : null}
            {success ? (
              <p className="text-sm text-neutral-700" role="status">
                Thank you — we received your application and will email you shortly.
              </p>
            ) : null}
            <div>
              <Button type="submit" variant="primary" disabled={submitting}>
                {submitting ? "Sending…" : partnershipsForm.submit}
              </Button>
            </div>
            <p className="text-sm leading-[21px] text-neutral-700 italic">{partnershipsForm.requiredNote}</p>
          </form>
        </div>
      </Container>
    </section>
  );
}

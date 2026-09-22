"use client";

import type { CheckoutCustomer } from "@/types/checkout";

const fieldClassName =
  "h-[50px] w-full rounded-sm border border-neutral-500 bg-white px-4 py-3 text-base leading-6 text-neutral-900 outline-none placeholder:text-neutral-500 focus-visible:border-accent";

const labelClassName = "text-xs leading-[18px] font-medium text-neutral-900";

type CheckoutCustomerFormProps = {
  value: CheckoutCustomer;
  onChange: (value: CheckoutCustomer) => void;
  disabled?: boolean;
};

export function CheckoutCustomerForm({
  value,
  onChange,
  disabled = false,
}: CheckoutCustomerFormProps) {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-1">
        <label htmlFor="checkout-name" className={labelClassName}>
          Full name
        </label>
        <input
          id="checkout-name"
          name="name"
          type="text"
          required
          autoComplete="name"
          disabled={disabled}
          value={value.name}
          onChange={(event) => onChange({ ...value, name: event.target.value })}
          className={fieldClassName}
          placeholder="Jane Doe"
        />
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="checkout-email" className={labelClassName}>
          Work email
        </label>
        <input
          id="checkout-email"
          name="email"
          type="email"
          required
          autoComplete="email"
          disabled={disabled}
          value={value.email}
          onChange={(event) => onChange({ ...value, email: event.target.value })}
          className={fieldClassName}
          placeholder="jane@company.com"
        />
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="checkout-company" className={labelClassName}>
          Company <span className="font-normal text-neutral-600">(optional)</span>
        </label>
        <input
          id="checkout-company"
          name="company"
          type="text"
          autoComplete="organization"
          disabled={disabled}
          value={value.company ?? ""}
          onChange={(event) =>
            onChange({
              ...value,
              company: event.target.value.trim() ? event.target.value : undefined,
            })
          }
          className={fieldClassName}
          placeholder="Company name"
        />
      </div>
    </div>
  );
}

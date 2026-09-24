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
        <label htmlFor="checkout-phone" className={labelClassName}>
          Mobile number (UPI)
        </label>
        <input
          id="checkout-phone"
          name="phone"
          type="tel"
          required
          autoComplete="tel"
          inputMode="numeric"
          disabled={disabled}
          value={value.phone ?? ""}
          onChange={(event) => onChange({ ...value, phone: event.target.value })}
          className={fieldClassName}
          placeholder="10-digit Indian mobile"
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

      <div className="flex flex-col gap-1">
        <label htmlFor="checkout-address" className={labelClassName}>
          Billing address
        </label>
        <input
          id="checkout-address"
          name="address"
          type="text"
          required
          autoComplete="street-address"
          disabled={disabled}
          value={value.address ?? ""}
          onChange={(event) => onChange({ ...value, address: event.target.value })}
          className={fieldClassName}
          placeholder="Street address"
        />
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div className="flex flex-col gap-1">
          <label htmlFor="checkout-town" className={labelClassName}>
            City
          </label>
          <input
            id="checkout-town"
            name="town"
            type="text"
            required
            autoComplete="address-level2"
            disabled={disabled}
            value={value.town ?? ""}
            onChange={(event) => onChange({ ...value, town: event.target.value })}
            className={fieldClassName}
            placeholder="City"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="checkout-state" className={labelClassName}>
            State <span className="font-normal text-neutral-600">(optional)</span>
          </label>
          <input
            id="checkout-state"
            name="state"
            type="text"
            autoComplete="address-level1"
            disabled={disabled}
            value={value.state ?? ""}
            onChange={(event) => onChange({ ...value, state: event.target.value })}
            className={fieldClassName}
            placeholder="State"
          />
        </div>
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="checkout-postcode" className={labelClassName}>
          PIN code <span className="font-normal text-neutral-600">(optional)</span>
        </label>
        <input
          id="checkout-postcode"
          name="postcode"
          type="text"
          autoComplete="postal-code"
          disabled={disabled}
          value={value.postcode ?? ""}
          onChange={(event) => onChange({ ...value, postcode: event.target.value })}
          className={fieldClassName}
          placeholder="400602"
        />
      </div>
    </div>
  );
}

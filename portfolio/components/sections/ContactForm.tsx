"use client";

import { useId, useState } from "react";

import { Icon } from "@/components/ui/Icon";
import { contact, icons } from "@/lib/content";
import {
  EMPTY_CONTACT_VALUES,
  validateContact,
  type ContactErrors,
  type ContactField,
  type ContactValues,
} from "@/lib/validation";

type Status = "idle" | "success";

const fieldBase =
  "w-full rounded-btn px-[17px] py-[13px] type-prose text-field-ink focus-visible:outline-2 focus-visible:outline-offset-2";

// The two upper fields stay white as drawn. The frame's placeholder is
// rgba(144,143,160,.5), which only reaches ~1.8:1 on white, so the grey is
// darkened to hold the same visual weight while clearing WCAG AA (4.8:1).
const lightField = `${fieldBase} bg-white placeholder:text-[#6b7280]`;
const darkField = `${fieldBase} bg-field text-ink placeholder:text-ink-muted placeholder:leading-6`;

/**
 * Quick contact form (Figma 2:530).
 *
 * Validation runs on the client and no request is sent — the design has no
 * backend. Field styling follows the frame, including the two white inputs.
 */
export function ContactForm() {
  const id = useId();
  const [values, setValues] = useState<ContactValues>(EMPTY_CONTACT_VALUES);
  const [errors, setErrors] = useState<ContactErrors>({});
  const [status, setStatus] = useState<Status>("idle");

  const update = (field: ContactField, value: string) => {
    setValues((current) => ({ ...current, [field]: value }));
    setErrors((current) => {
      if (!current[field]) return current;
      const next = { ...current };
      delete next[field];
      return next;
    });
    setStatus("idle");
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validateContact(values);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setStatus("idle");
      const firstField = (Object.keys(nextErrors) as ContactField[])[0];
      document.getElementById(`${id}-${firstField}`)?.focus();
      return;
    }

    setStatus("success");
  };

  const errorText = (field: ContactField) =>
    errors[field] ? (
      <p id={`${id}-${field}-error`} className="type-meta text-teal">
        {errors[field]}
      </p>
    ) : null;

  return (
    <form
      noValidate
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 rounded-panel border border-line bg-code p-6 sm:p-8.25"
    >
      <h3 className="type-card-title text-ink">{contact.form.title}</h3>

      <div className="flex flex-col gap-1.5">
        <label
          htmlFor={`${id}-name`}
          className="font-mono text-[11px]/[14px] font-medium tracking-[0.08em] text-ink-muted"
        >
          {contact.form.nameLabel}
        </label>
        <input
          id={`${id}-name`}
          name="name"
          type="text"
          autoComplete="name"
          placeholder={contact.form.namePlaceholder}
          value={values.name}
          onChange={(event) => update("name", event.target.value)}
          aria-invalid={errors.name ? true : undefined}
          aria-describedby={errors.name ? `${id}-name-error` : undefined}
          className={`${lightField} border ${
            errors.name ? "border-teal" : "border-[#6b7280]"
          }`}
        />
        {errorText("name")}
      </div>

      <div className="flex flex-col gap-1.5">
        <label
          htmlFor={`${id}-email`}
          className="font-mono text-[11px]/[14px] font-medium tracking-[0.08em] text-ink-muted"
        >
          {contact.form.emailLabel}
        </label>
        <input
          id={`${id}-email`}
          name="email"
          type="email"
          autoComplete="email"
          placeholder={contact.form.emailPlaceholder}
          value={values.email}
          onChange={(event) => update("email", event.target.value)}
          aria-invalid={errors.email ? true : undefined}
          aria-describedby={errors.email ? `${id}-email-error` : undefined}
          className={`${lightField} border ${
            errors.email ? "border-teal" : "border-[#6b7280]"
          }`}
        />
        {errorText("email")}
      </div>

      <div className="flex flex-col gap-1.5 pb-1.5">
        <label
          htmlFor={`${id}-message`}
          className="font-mono text-[11px]/[14px] font-medium tracking-[0.08em] text-ink-muted"
        >
          {contact.form.messageLabel}
        </label>
        <textarea
          id={`${id}-message`}
          name="message"
          rows={5}
          placeholder={contact.form.messagePlaceholder}
          value={values.message}
          onChange={(event) => update("message", event.target.value)}
          aria-invalid={errors.message ? true : undefined}
          aria-describedby={errors.message ? `${id}-message-error` : undefined}
          className={`${darkField} resize-y border px-4.25 pt-2.75 pb-3.75 ${
            errors.message ? "border-teal" : "border-edge"
          }`}
        />
        {errorText("message")}
      </div>

      <button
        type="submit"
        className="inline-flex items-center justify-center gap-2 rounded-btn bg-indigo py-3 font-mono text-mono-sm font-bold text-cta-ink shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-2px_rgba(0,0,0,0.1)] transition-opacity hover:opacity-90"
      >
        {contact.form.submit}
        <Icon icon={icons.send} alt="" />
      </button>

      <p aria-live="polite" role="status" className="min-h-0">
        {status === "success" ? (
          <span className="type-meta block rounded-btn border border-teal/40 bg-teal/10 px-3 py-2 text-teal">
            {contact.form.success}
          </span>
        ) : null}
      </p>
    </form>
  );
}
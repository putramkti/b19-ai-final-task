import { contact } from "./content";

export type ContactField = "name" | "email" | "message";

export type ContactValues = Record<ContactField, string>;

export type ContactErrors = Partial<Record<ContactField, string>>;

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export const EMPTY_CONTACT_VALUES: ContactValues = {
  name: "",
  email: "",
  message: "",
};

/**
 * Validates the contact form entirely on the client — the design has no
 * backend, so nothing is sent. Rules mirror the labels in the frame.
 */
export function validateContact(values: ContactValues): ContactErrors {
  const errors: ContactErrors = {};
  const { errors: messages } = contact.form;

  const name = values.name.trim();
  const email = values.email.trim();
  const message = values.message.trim();

  if (name.length === 0) {
    errors.name = messages.nameRequired;
  }

  if (email.length === 0) {
    errors.email = messages.emailRequired;
  } else if (!EMAIL_PATTERN.test(email)) {
    errors.email = messages.emailInvalid;
  }

  if (message.length === 0) {
    errors.message = messages.messageRequired;
  } else if (message.length < 20) {
    errors.message = messages.messageTooShort;
  }

  return errors;
}
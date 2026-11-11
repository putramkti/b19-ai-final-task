import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";

import { ContactForm } from "@/components/sections/ContactForm";
import { contact } from "@/lib/content";

describe("ContactForm", () => {
  it("reports inline errors when submitted empty", async () => {
    const user = userEvent.setup();
    render(<ContactForm />);

    await user.click(screen.getByRole("button", { name: contact.form.submit }));

    expect(screen.getByText(contact.form.errors.nameRequired)).toBeInTheDocument();
    expect(screen.getByText(contact.form.errors.emailRequired)).toBeInTheDocument();
    expect(screen.getByText(contact.form.errors.messageRequired)).toBeInTheDocument();
    expect(screen.getByLabelText(contact.form.nameLabel)).toHaveAttribute(
      "aria-invalid",
      "true",
    );
  });

  it("clears a field error as soon as the user types", async () => {
    const user = userEvent.setup();
    render(<ContactForm />);

    await user.click(screen.getByRole("button", { name: contact.form.submit }));
    expect(screen.getByText(contact.form.errors.nameRequired)).toBeInTheDocument();

    await user.type(screen.getByLabelText(contact.form.nameLabel), "Budi");

    expect(
      screen.queryByText(contact.form.errors.nameRequired),
    ).not.toBeInTheDocument();
  });

  it("shows the success state for a valid submission", async () => {
    const user = userEvent.setup();
    render(<ContactForm />);

    await user.type(screen.getByLabelText(contact.form.nameLabel), "Budi Santoso");
    await user.type(
      screen.getByLabelText(contact.form.emailLabel),
      "budi@perusahaan.com",
    );
    await user.type(
      screen.getByLabelText(contact.form.messageLabel),
      "Kami ingin membangun ulang portal internal tahun ini.",
    );
    await user.click(screen.getByRole("button", { name: contact.form.submit }));

    expect(screen.getByText(contact.form.success)).toBeInTheDocument();
  });
});
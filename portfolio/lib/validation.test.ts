import { describe, expect, it } from "vitest";

import { EMPTY_CONTACT_VALUES, validateContact } from "@/lib/validation";

describe("validateContact", () => {
  it("flags every empty field", () => {
    const errors = validateContact(EMPTY_CONTACT_VALUES);

    expect(errors.name).toBeDefined();
    expect(errors.email).toBeDefined();
    expect(errors.message).toBeDefined();
  });

  it("rejects an address without a dotted domain", () => {
    const errors = validateContact({
      name: "Budi Santoso",
      email: "budi@perusahaan",
      message: "Butuh bantuan untuk membangun dashboard analitik internal.",
    });

    expect(errors.email).toBeDefined();
    expect(errors.name).toBeUndefined();
  });

  it("rejects a message shorter than 20 characters", () => {
    const errors = validateContact({
      name: "Budi Santoso",
      email: "budi@perusahaan.com",
      message: "Halo semuanya",
    });

    expect(errors.message).toBeDefined();
  });

  it("accepts a complete submission and ignores surrounding whitespace", () => {
    const errors = validateContact({
      name: "  Budi Santoso  ",
      email: " budi@perusahaan.com ",
      message: "  Kami ingin membangun ulang portal internal tahun ini.  ",
    });

    expect(errors).toEqual({});
  });
});
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { SkipLink } from "@/components/ui/SkipLink";

describe("SkipLink", () => {
  it("points at the main landmark", () => {
    render(<SkipLink />);

    const link = screen.getByRole("link", { name: /lompat ke konten utama/i });
    expect(link).toHaveAttribute("href", "#main-content");
  });
});
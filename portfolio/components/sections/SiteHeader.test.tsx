import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";

import { SiteHeader } from "@/components/sections/SiteHeader";
import { navItems } from "@/lib/content";

describe("SiteHeader", () => {
  it("keeps the mobile menu closed and the toggle collapsed initially", () => {
    render(<SiteHeader />);

    expect(
      screen.getByRole("button", { name: /buka menu navigasi/i }),
    ).toHaveAttribute("aria-expanded", "false");
    expect(
      screen.queryByRole("navigation", { name: /navigasi seluler/i }),
    ).not.toBeInTheDocument();
  });

  it("opens the slide-down panel and closes it after choosing a link", async () => {
    const user = userEvent.setup();
    render(<SiteHeader />);

    await user.click(screen.getByRole("button", { name: /buka menu navigasi/i }));

    const mobileNav = screen.getByRole("navigation", { name: /navigasi seluler/i });
    expect(mobileNav).toBeInTheDocument();
    expect(mobileNav).toHaveTextContent(navItems[0].label);

    await user.click(
      within(mobileNav).getByRole("link", { name: navItems[0].label }),
    );

    expect(
      screen.queryByRole("navigation", { name: /navigasi seluler/i }),
    ).not.toBeInTheDocument();
  });

  it("closes the panel on Escape and returns focus to the toggle", async () => {
    const user = userEvent.setup();
    render(<SiteHeader />);

    const toggle = screen.getByRole("button", { name: /buka menu navigasi/i });
    await user.click(toggle);
    await user.keyboard("{Escape}");

    expect(
      screen.queryByRole("navigation", { name: /navigasi seluler/i }),
    ).not.toBeInTheDocument();
    expect(toggle).toHaveFocus();
  });
});
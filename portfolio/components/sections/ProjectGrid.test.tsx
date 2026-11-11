import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";

import { ProjectGrid } from "@/components/sections/ProjectGrid";
import { projects } from "@/lib/content";

describe("ProjectGrid", () => {
  it("shows every project by default", () => {
    render(<ProjectGrid />);

    expect(screen.getAllByRole("article")).toHaveLength(projects.items.length);
    expect(
      screen.getByRole("button", { name: projects.filters[0].label }),
    ).toHaveAttribute("aria-pressed", "true");
  });

  it("filters the grid when a category is chosen", async () => {
    const user = userEvent.setup();
    render(<ProjectGrid />);

    await user.click(
      screen.getByRole("button", { name: projects.filters[1].label }),
    );

    const expected = projects.items.filter((item) =>
      item.filters.includes("fullstack"),
    );
    expect(screen.getAllByRole("article")).toHaveLength(expected.length);
    expect(
      screen.getByRole("button", { name: projects.filters[1].label }),
    ).toHaveAttribute("aria-pressed", "true");
  });

  it("restores every project when the default filter is reselected", async () => {
    const user = userEvent.setup();
    render(<ProjectGrid />);

    await user.click(
      screen.getByRole("button", { name: projects.filters[2].label }),
    );
    await user.click(
      screen.getByRole("button", { name: projects.filters[0].label }),
    );

    expect(screen.getAllByRole("article")).toHaveLength(projects.items.length);
  });
});
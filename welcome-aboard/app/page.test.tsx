import { render, screen, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import HomePage from "@/app/page";
import { highlights } from "@/lib/content";

describe("welcome-aboard orientation slide", () => {
  it("renders the single accessible h1 with the batch accent line", () => {
    render(<HomePage />);

    const headings = screen.getAllByRole("heading", { level: 1 });
    expect(headings).toHaveLength(1);

    const h1 = headings[0];
    expect(within(h1).getByText("Welcome Aboard")).toBeInTheDocument();
    expect(within(h1).getByText("Bootcamp Batch 19")).toBeInTheDocument();
  });

  it("exposes a main landmark that the skip link can target", () => {
    render(<HomePage />);

    expect(screen.getByRole("main")).toHaveAttribute("id", "main-content");
  });

  it("renders one card per orientation highlight with a level-2 heading", () => {
    render(<HomePage />);

    const cards = screen.getAllByRole("listitem");
    expect(cards).toHaveLength(highlights.length);

    for (const item of highlights) {
      const card = cards.find((node) =>
        within(node).queryByText(item.title),
      );
      expect(card, `missing card for ${item.title}`).toBeDefined();

      const heading = within(card as HTMLElement).getByRole("heading", {
        level: 2,
      });
      expect(heading).toHaveTextContent(item.title);
      expect(within(card as HTMLElement).getByText(item.body)).toBeInTheDocument();
      expect(
        within(card as HTMLElement).getByText(
          `${item.step} / ${item.code}`,
          { exact: false },
        ),
      ).toBeInTheDocument();
    }
  });

  it("links both CTAs to their destinations", () => {
    render(<HomePage />);

    expect(
      screen.getByRole("link", { name: /mulai sesi orientasi/i }),
    ).toHaveAttribute("href", "/orientasi");

    expect(
      screen.getByRole("link", { name: /akses portal belajar/i }),
    ).toHaveAttribute("href", "/portal");
  });

  it("marks slide pagination controls as disabled for a single-slide deck", () => {
    render(<HomePage />);

    expect(
      screen.getByRole("button", { name: /slide sebelumnya/i }),
    ).toBeDisabled();
    expect(
      screen.getByRole("button", { name: /slide berikutnya/i }),
    ).toBeDisabled();
  });
});
import type { ReactNode } from "react";

import type { Accent } from "@/lib/content";

const accentDot: Record<Accent, string> = {
  teal: "bg-teal",
  indigo: "bg-indigo",
  sky: "bg-sky",
  muted: "bg-ink-muted",
};

type TechChipProps = {
  children: ReactNode;
  dot?: Accent;
  /**
   * `soft` is the hero stack strip (Figma 2:31); `strong` is the skill-cluster
   * cloud (Figma 2:230), which uses a denser overlay and taller padding.
   */
  tone?: "soft" | "strong";
  className?: string;
};

const fromTone: Record<NonNullable<TechChipProps["tone"]>, string> = {
  soft: "bg-chip px-[13px] py-[5px]",
  strong: "bg-chip-strong px-[13px] py-[7px]",
};

/**
 * Mono capsule with an optional leading accent dot. Used by the hero stack
 * strip and the skill category clusters.
 */
export function TechChip({
  children,
  dot,
  tone = "soft",
  className = "",
}: TechChipProps) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-chip border border-line font-mono text-[11px]/[14px] font-medium tracking-[0.08em] text-ink ${fromTone[tone]} ${className}`}
    >
      {dot ? (
        <span className={`size-1.5 shrink-0 rounded-full ${accentDot[dot]}`} aria-hidden="true" />
      ) : null}
      {children}
    </span>
  );
}
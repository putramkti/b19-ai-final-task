import type { ReactNode } from "react";

type PillProps = {
  children: ReactNode;
  dot?: boolean;
  className?: string;
};

/**
 * Small rounded badge used by the hero availability strip (Figma 2:9) and the
 * contact banner eyebrow (Figma 2:497).
 */
export function Pill({ children, dot = false, className = "" }: PillProps) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border border-line bg-surface-chip px-[13px] py-[7px] font-mono text-[11px]/[14px] font-medium tracking-[0.08em] text-ink ${className}`}
    >
      {dot ? (
        <span className="dot-glow size-2 shrink-0 rounded-full bg-teal" aria-hidden="true" />
      ) : null}
      {children}
    </span>
  );
}
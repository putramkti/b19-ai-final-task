import type { ReactNode } from "react";

type PillProps = {
  children: ReactNode;
  dot?: boolean;
  className?: string;
};

/**
 * Rounded capsule used by the header status indicators (Figma 32:20, 32:26).
 */
export function Pill({ children, dot = false, className = "" }: PillProps) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border px-3.5 py-[7px] font-mono text-mono font-medium tracking-[0.08em] uppercase ${className}`}
    >
      {dot ? (
        <span className="relative inline-flex size-2 shrink-0" aria-hidden="true">
          <span className="absolute inset-0 rounded-full bg-teal opacity-75" />
          <span className="relative size-2 rounded-full bg-teal" />
        </span>
      ) : null}
      {children}
    </span>
  );
}
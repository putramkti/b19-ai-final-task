import { heroBadge } from "@/lib/content";

/**
 * Top batch badge (Figma node 32:33).
 */
export function HeroBadge() {
  return (
    <p className="inline-flex items-center gap-2.5 rounded-full border border-hairline-strong bg-panel-soft-strong px-[17px] py-[7px] text-center font-mono text-mono-sm font-medium tracking-[0.1em] text-teal uppercase shadow-[0_1px_2px_0_rgb(0_0_0_/_0.05)] backdrop-blur-xl">
      <span
        className="size-1.5 shrink-0 rounded-full bg-teal shadow-[0_0_8px_0_rgb(79_219_200_/_0.8)]"
        aria-hidden="true"
      />
      {heroBadge}
    </p>
  );
}
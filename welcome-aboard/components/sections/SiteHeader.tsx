import { Icon } from "@/components/ui/Icon";
import { brand, headerStatus } from "@/lib/content";

/**
 * Header slide anchor / status bar (Figma node 32:8).
 */
export function SiteHeader() {
  return (
    <header className="relative z-10 mx-auto flex h-20 w-full max-w-shell items-center justify-between gap-4 px-4 sm:px-6">
      <div className="flex items-center gap-3">
        <span className="inline-flex size-8 shrink-0 items-center justify-center rounded-lg border border-hairline-strong bg-surface-icon p-px">
          <Icon icon={brand.logo} alt="" />
        </span>

        <span className="font-display text-wordmark font-bold tracking-[-0.5px] text-ink">
          {brand.name}
        </span>

        <span className="hidden font-body text-base text-ink-faint sm:inline" aria-hidden="true">
          /
        </span>

        <span className="hidden font-mono text-mono font-medium tracking-[0.05em] text-ink-soft uppercase sm:inline">
          {brand.division}
        </span>
      </div>

      <div className="flex shrink-0 items-center gap-2 sm:gap-3">
        <span className="inline-flex items-center gap-2 rounded-full border border-hairline-strong bg-panel-strong px-3.5 py-[7px] font-mono text-mono font-medium tracking-[0.08em] text-ink-soft uppercase backdrop-blur-xl">
          <span className="relative inline-flex size-2 shrink-0" aria-hidden="true">
            <span className="absolute inset-0 rounded-full bg-teal opacity-75" />
            <span className="relative size-2 rounded-full bg-teal" />
          </span>
          {headerStatus.live}
        </span>

        <span className="hidden items-center gap-2 rounded-full border border-hairline-soft bg-panel-soft px-3.5 py-[7px] font-mono text-mono font-medium tracking-[0.08em] text-ink-soft uppercase sm:inline-flex">
          <Icon icon={headerStatus.cohortIcon} alt="" />
          {headerStatus.cohort}
        </span>
      </div>
    </header>
  );
}
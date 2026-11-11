import { Icon } from "@/components/ui/Icon";
import { deckFooter } from "@/lib/content";

/**
 * Slide deck navigation / contextual controls footer (Figma node 32:97).
 * The design shows a single slide, so prev/next are rendered disabled.
 */
export function DeckFooter() {
  return (
    <footer className="relative z-10 border-t border-divider">
      <div className="mx-auto flex w-full max-w-shell flex-col items-start justify-between gap-4 px-4 py-6 sm:px-6 md:flex-row md:items-center md:pb-6 md:pt-[25px]">
        <p className="flex items-center gap-3 font-mono text-mono font-medium tracking-[0.08em] text-ink-soft uppercase">
          <span className="size-2 shrink-0 rounded-full bg-indigo-soft" aria-hidden="true" />
          {deckFooter.context}
        </p>

        <div className="flex shrink-0 items-center gap-4">
          <p className="inline-flex items-center gap-2 rounded-lg border border-hairline-strong bg-surface-strong px-[13px] py-[7px] font-mono text-mono-sm tracking-[0.06em]">
            <span className="font-bold text-indigo-soft">{deckFooter.current}</span>
            <span aria-hidden="true" className="text-ink-muted">
              /
            </span>
            {/*
              The design uses #464554 here, which only reaches ~1.8:1 contrast on
              #171B26. Raised to ink-muted (#908FA0) to meet WCAG AA for 12px text.
            */}
            <span className="text-ink-muted">{deckFooter.total}</span>
          </p>

          <div className="flex items-center gap-1">
            <button
              type="button"
              disabled
              aria-label={deckFooter.previous.label}
              className="inline-flex size-8 items-center justify-center rounded-lg border border-hairline-soft bg-surface-strong/40 p-px transition-colors duration-200 hover:bg-surface-strong/70 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal disabled:cursor-not-allowed"
            >
              <Icon icon={deckFooter.previous.icon} alt="" />
            </button>

            <button
              type="button"
              disabled
              aria-label={deckFooter.next.label}
              className="inline-flex size-8 items-center justify-center rounded-lg border border-hairline-soft bg-surface-strong/40 p-px transition-colors duration-200 hover:bg-surface-strong/70 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal disabled:cursor-not-allowed"
            >
              <Icon icon={deckFooter.next.icon} alt="" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
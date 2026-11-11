/**
 * Keyboard-first skip link rendered once in the root layout.
 * Hidden until focused, then pinned to the top-left corner.
 */
export function SkipLink() {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:rounded-lg focus:bg-indigo focus:px-4 focus:py-2 focus:font-display focus:text-sm focus:font-semibold focus:text-cta-ink"
    >
      Lompat ke konten utama
    </a>
  );
}
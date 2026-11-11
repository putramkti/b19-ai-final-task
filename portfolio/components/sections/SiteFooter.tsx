import { footer } from "@/lib/content";

/**
 * Shared footer (Figma 2:555).
 */
export function SiteFooter() {
  return (
    <footer className="border-t border-line-soft bg-footer">
      <div className="mx-auto flex w-full max-w-shell flex-col gap-6 px-6 py-12 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-col gap-1">
          <p className="font-display text-xl/[28px] font-bold tracking-[-0.01em] text-ink">
            {footer.name}
          </p>
          <p className="type-meta text-ink-soft">{footer.tagline}</p>
          <p className="pt-1 type-meta text-ink-muted">{footer.copyright}</p>
        </div>

        <nav aria-label="Navigasi footer">
          <ul className="flex flex-wrap items-center gap-x-6 gap-y-2">
            {footer.links.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  aria-current={link.active ? "page" : undefined}
                  className={`font-mono text-[11px]/[14px] font-medium tracking-[0.08em] transition-colors ${
                    link.active ? "text-ink" : "text-ink-soft hover:text-ink"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  );
}
"use client";

import { useEffect, useRef, useState } from "react";

import { brand, headerAction, navItems } from "@/lib/content";

/**
 * Sticky top navigation (Figma 2:573).
 *
 * The Figma frame only draws the desktop variant, so the mobile menu
 * (hamburger + slide-down panel) is an inferred pattern that keeps the same
 * surfaces, typography, and accent colours.
 */
export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-canvas/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 w-full max-w-shell items-center justify-between gap-4 px-6">
        <a
          href="#main-content"
          className="flex items-center gap-3"
          aria-label={`${brand.wordmark} — ${brand.owner}`}
        >
          <span className="inline-flex size-9 shrink-0 items-center justify-center rounded-btn border border-line-strong bg-surface-chip p-px">
            <span className="font-display text-xl/[28px] font-semibold tracking-[-0.01em] text-indigo">
              {brand.monogram}
            </span>
          </span>
          <span className="flex flex-col">
            <span className="font-display text-xl/[28px] font-bold tracking-[-0.025em] text-ink">
              {brand.wordmark}
            </span>
            <span className="font-mono text-[11px]/[14px] font-medium tracking-[0.08em] text-ink-soft">
              {brand.owner}
            </span>
          </span>
        </a>

        <nav aria-label="Navigasi utama" className="hidden items-center lg:flex">
          {navItems.map((item, index) => (
            <a
              key={item.label}
              href={item.href}
              aria-current={item.active ? "page" : undefined}
              className={
                index === 0
                  ? "font-mono text-mono-sm font-medium"
                  : "pl-8 font-mono text-mono-sm font-medium"
              }
            >
              {item.active ? (
                <span className="border-b-2 border-indigo pb-1.5 text-indigo">
                  {item.label}
                </span>
              ) : (
                <span className="text-ink-soft transition-colors hover:text-ink">
                  {item.label}
                </span>
              )}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={headerAction.href}
            className="hidden items-center gap-2 rounded-btn bg-indigo px-4 py-2 font-mono text-mono-sm font-medium text-cta-ink transition-opacity hover:opacity-90 sm:inline-flex"
          >
            {headerAction.label}
          </a>

          <button
            ref={toggleRef}
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Tutup menu navigasi" : "Buka menu navigasi"}
            className="inline-flex size-10 items-center justify-center rounded-btn border border-edge bg-glass text-ink backdrop-blur-md transition-colors hover:border-line-strong lg:hidden"
          >
            <span className="relative block h-3 w-4" aria-hidden="true">
              <span
                className={`absolute left-0 block h-0.5 w-4 rounded-full bg-current transition-transform duration-200 ${
                  open ? "top-1.5 rotate-45" : "top-0"
                }`}
              />
              <span
                className={`absolute left-0 top-1.5 block h-0.5 w-4 rounded-full bg-current transition-opacity duration-200 ${
                  open ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 block h-0.5 w-4 rounded-full bg-current transition-transform duration-200 ${
                  open ? "top-1.5 -rotate-45" : "top-3"
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      {open ? (
        <div
          ref={panelRef}
          id="mobile-nav"
          className="menu-enter border-t border-line bg-canvas/95 backdrop-blur-xl lg:hidden"
        >
          <nav aria-label="Navigasi seluler" className="mx-auto max-w-shell px-6 py-4">
            <ul className="flex flex-col">
              {navItems.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    onClick={() => setOpen(false)}
                    aria-current={item.active ? "page" : undefined}
                    className={`flex items-center justify-between border-b border-line-soft py-3 font-mono text-mono-sm font-medium ${
                      item.active ? "text-indigo" : "text-ink-soft"
                    }`}
                  >
                    {item.label}
                    <span aria-hidden="true" className="text-ink-faint">
                      /
                    </span>
                  </a>
                </li>
              ))}
            </ul>
            <a
              href={headerAction.href}
              onClick={() => setOpen(false)}
              className="mt-4 flex items-center justify-center rounded-btn bg-indigo px-4 py-2.5 font-mono text-mono-sm font-medium text-cta-ink"
            >
              {headerAction.label}
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
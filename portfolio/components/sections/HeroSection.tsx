import { Icon } from "@/components/ui/Icon";
import { Pill } from "@/components/ui/Pill";
import { TechChip } from "@/components/ui/TechChip";
import { hero, icons } from "@/lib/content";

import { TerminalPreview } from "./TerminalPreview";

/**
 * Hero section (Figma 2:6).
 * 12-column desktop grid: copy spans 7, terminal spans 5.
 */
export function HeroSection() {
  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="flex flex-col gap-12 py-12 sm:py-16 lg:gap-16 lg:py-24"
    >
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
        <div className="flex flex-col gap-6 lg:col-span-7">
          <Pill dot>{hero.badge}</Pill>

          <h1 id="hero-heading" className="type-hero text-ink">
            <span className="block">{hero.headline.line1}</span>
            <span className="block">{hero.headline.line2}</span>
            <span className="block">
              <span className="headline-gradient">{hero.headline.accent}</span>
              {hero.headline.accentTail}
            </span>
            <span className="block">{hero.headline.line4}</span>
          </h1>

          <p className="max-w-copy type-subheadline text-ink-soft">
            {hero.description}
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href={hero.primaryCta.href}
              className="inline-flex items-center gap-2 rounded-btn bg-indigo px-6 py-3.5 font-mono text-mono-sm font-bold text-cta-ink shadow-[0_0_20px_-3px_rgba(99,102,241,0.5)] transition-opacity hover:opacity-90"
            >
              {hero.primaryCta.label}
              <Icon icon={icons.arrowDown} alt="" />
            </a>

            <a
              href={hero.secondaryCta.href}
              className="inline-flex items-center gap-2 rounded-btn border border-edge-soft bg-glass px-[25px] py-[15px] font-mono text-mono-sm font-medium text-ink backdrop-blur-md transition-colors hover:border-line-strong"
            >
              {hero.secondaryCta.label}
              <Icon icon={icons.person} alt="" />
            </a>
          </div>

          <div className="flex flex-wrap items-center gap-2.5 border-t border-line-soft pt-[25px]">
            <span className="pr-2 font-mono text-[11px]/[14px] font-medium tracking-[0.08em] uppercase text-ink-muted">
              {hero.stackLabel}
            </span>
            {hero.stack.map((item) => (
              <TechChip key={item.label} dot={item.accent}>
                {item.label}
              </TechChip>
            ))}
          </div>
        </div>

        <div className="lg:col-span-5">
          <TerminalPreview />
        </div>
      </div>
    </section>
  );
}
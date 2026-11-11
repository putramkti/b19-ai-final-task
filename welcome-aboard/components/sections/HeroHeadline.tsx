import { hero } from "@/lib/content";

/**
 * Main presentation headline (Figma nodes 32:37 → 32:42).
 */
export function HeroHeadline() {
  return (
    <div className="flex flex-col items-center gap-3 pt-8">
      <h1 className="font-display text-display-sm font-extrabold tracking-[-0.02em] text-ink sm:text-display-md lg:text-headline">
        <span className="block text-center">{hero.titleLead}</span>
        <span className="headline-gradient block text-center">
          {hero.titleAccent}
        </span>
      </h1>

      <p className="max-w-copy pt-2 text-center text-base leading-[1.625rem] tracking-[-0.005em] text-ink-soft text-pretty sm:text-subheadline">
        {hero.description}
      </p>
    </div>
  );
}
import type { ReactNode } from "react";

type SectionHeadingProps = {
  eyebrow: string;
  eyebrowTone?: "indigo" | "teal";
  title: string;
  description?: ReactNode;
  titleId: string;
  className?: string;
};

/**
 * Eyebrow + H2 + supporting copy block used at the top of every section
 * (Figma 2:119, 2:212, 2:355).
 */
export function SectionHeading({
  eyebrow,
  eyebrowTone = "indigo",
  title,
  description,
  titleId,
  className = "",
}: SectionHeadingProps) {
  return (
    <div className={`flex max-w-narrow flex-col gap-1.5 pt-1.5 ${className}`}>
      <p
        className={`font-mono text-xs/[16px] font-semibold tracking-[0.05em] ${
          eyebrowTone === "teal" ? "text-teal" : "text-indigo"
        }`}
      >
        {eyebrow}
      </p>
      <h2 id={titleId} className="type-section-title text-ink">
        {title}
      </h2>
      {description ? (
        <div className="pt-0.5 type-subheadline text-ink-soft">{description}</div>
      ) : null}
    </div>
  );
}
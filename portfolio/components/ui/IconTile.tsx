import type { ReactNode } from "react";

type IconTileProps = {
  children: ReactNode;
  /**
   * Tile edge in px, matching the Figma `Background` rectangles: 48px behind
   * stats and skill categories, 40px behind pillars and contact rows.
   */
  size?: 10 | 12;
  className?: string;
};

// Radius follows the frame: 8px behind stats, pillars, and contact rows,
// 12px behind the skill category tiles.
const box: Record<NonNullable<IconTileProps["size"]>, string> = {
  10: "size-10 rounded-btn",
  12: "size-12 rounded-card",
};

/**
 * Rounded square that frames an icon, mirroring the Figma `Background`
 * rectangles behind stat, pillar, and category glyphs.
 */
export function IconTile({ children, size = 12, className = "" }: IconTileProps) {
  return (
    <span
      className={`inline-flex shrink-0 items-center justify-center bg-surface ${box[size]} ${className}`}
    >
      {children}
    </span>
  );
}
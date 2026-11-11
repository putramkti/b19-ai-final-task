import type { ReactNode } from "react";

type IconTileProps = {
  children: ReactNode;
  size?: "sm" | "md";
};

/**
 * Rounded square that frames a small SVG icon.
 * 32px in the header, 40px inside the highlight cards (Figma nodes 32:10, 32:48).
 */
export function IconTile({ children, size = "md" }: IconTileProps) {
  const box = size === "md" ? "size-[40px] rounded-lg" : "size-[32px] rounded-lg";

  return (
    <span
      className={`inline-flex shrink-0 items-center justify-center border border-hairline-soft bg-surface-icon p-px ${box}`}
    >
      {children}
    </span>
  );
}
import Image from "next/image";

import type { IconAsset } from "@/lib/content";

type IconProps = {
  icon: IconAsset;
  alt: string;
  /** Wrapper classes, e.g. `shrink-0`. */
  className?: string;
};

/**
 * Renders a static SVG icon exported from the Figma frame at its design-native
 * size (fractional px preserved). Uses `fill` inside a fixed-size wrapper so the
 * intrinsic aspect ratio is never overridden by CSS.
 *
 * SVGs are vectors, so image optimisation is skipped on purpose.
 */
export function Icon({ icon, alt, className = "" }: IconProps) {
  const decorative = alt === "";

  return (
    <span
      className={`relative inline-block shrink-0 ${className}`}
      style={{ width: `${icon.width}px`, height: `${icon.height}px` }}
    >
      <Image
        src={icon.src}
        alt={alt}
        fill
        sizes={`${Math.ceil(icon.width)}px`}
        className="object-contain"
        aria-hidden={decorative || undefined}
        unoptimized
      />
    </span>
  );
}
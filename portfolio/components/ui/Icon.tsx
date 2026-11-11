import Image from "next/image";

import type { IconAsset } from "@/lib/content";

type IconProps = {
  icon: IconAsset;
  /** Empty string marks the icon as decorative (hidden from assistive tech). */
  alt: string;
  /** Optional tint applied with a CSS mask, e.g. `text-teal`. */
  tintClassName?: string;
  className?: string;
};

/**
 * Renders a static SVG exported from the Figma frame at its design-native size.
 * The wrapper keeps the intrinsic aspect ratio; `fill` never overrides it.
 *
 * Icons are vectors, so optimisation is skipped on purpose.
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
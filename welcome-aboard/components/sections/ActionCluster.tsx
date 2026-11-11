import Link from "next/link";

import { Icon } from "@/components/ui/Icon";
import { actions } from "@/lib/content";

/**
 * Action cluster with primary and secondary CTAs (Figma node 32:84).
 */
export function ActionCluster() {
  return (
    <div className="flex w-full flex-col gap-3 pt-10 sm:w-auto sm:flex-row sm:items-center sm:gap-4 sm:pt-12">
      <Link
        href={actions.primary.href}
        className="inline-flex items-center justify-center gap-3 rounded-xl bg-indigo px-8 py-4 font-display text-cta font-semibold text-cta-ink shadow-[0_10px_25px_-5px_rgb(128_131_255_/_0.3),inset_0_1px_0_0_rgb(255_255_255_/_0.2)] transition-[transform,box-shadow] duration-200 hover:shadow-[0_14px_32px_-6px_rgb(128_131_255_/_0.45),inset_0_1px_0_0_rgb(255_255_255_/_0.25)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal active:translate-y-px"
      >
        {actions.primary.label}
        <Icon icon={actions.primary.icon} alt="" />
      </Link>

      <Link
        href={actions.secondary.href}
        className="inline-flex items-center justify-center gap-2.5 rounded-xl border border-hairline-strong bg-panel-soft px-[25px] py-[17px] font-display text-cta font-medium text-ink backdrop-blur-xl transition-colors duration-200 hover:bg-surface-muted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal"
      >
        <Icon icon={actions.secondary.icon} alt="" />
        {actions.secondary.label}
      </Link>
    </div>
  );
}
import { Icon } from "@/components/ui/Icon";
import { IconTile } from "@/components/ui/IconTile";
import { highlights } from "@/lib/content";

/**
 * 3 key orientation highlights / metric bento cards (Figma node 32:44).
 */
export function HighlightCards() {
  return (
    <ul className="grid w-full grid-cols-1 gap-6 pt-10 md:grid-cols-3 sm:pt-14">
      {highlights.map((item) => (
        <li
          key={item.id}
          className="flex flex-col justify-between gap-[21.12px] rounded-xl border border-hairline bg-panel p-[25px] backdrop-blur-xl"
        >
          <div className="flex w-full items-start justify-between pb-4">
            <IconTile>
              <Icon icon={item.icon} alt="" />
            </IconTile>

            <span className="inline-flex shrink-0 items-center rounded border border-hairline-soft bg-surface-muted px-[9px] py-[3px] font-mono text-mono font-medium tracking-[0.08em] text-ink-muted uppercase">
              {item.step} / {item.code}
            </span>
          </div>

          <div className="flex w-full flex-col gap-[7.1px]">
            <h2 className="font-display text-card-title font-semibold tracking-[-0.01em] text-ink">
              {item.title}
            </h2>
            <p className="text-card-body text-ink-soft">{item.body}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}
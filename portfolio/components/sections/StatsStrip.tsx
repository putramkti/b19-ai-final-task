import { Icon } from "@/components/ui/Icon";
import { IconTile } from "@/components/ui/IconTile";
import { stats } from "@/lib/content";

/**
 * Key stats strip under the hero (Figma 2:90).
 */
export function StatsStrip() {
  return (
    <ul className="grid grid-cols-1 gap-6 border-t border-line pt-10 sm:grid-cols-3">
      {stats.map((stat) => (
        <li
          key={stat.id}
          className="flex items-center gap-4 rounded-card border border-edge-soft bg-glass p-[25px] backdrop-blur-md"
        >
          <IconTile size={12}>
            <Icon icon={stat.icon} alt="" />
          </IconTile>
          <div className="flex flex-col">
            <p className="type-stat text-ink">{stat.value}</p>
            <p className="type-meta text-ink-soft">{stat.label}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}
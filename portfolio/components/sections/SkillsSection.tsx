import { Icon } from "@/components/ui/Icon";
import { IconTile } from "@/components/ui/IconTile";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TechChip } from "@/components/ui/TechChip";
import { icons, skills } from "@/lib/content";

/**
 * Skills section (Figma 2:211): four category cards in a row on desktop.
 */
export function SkillsSection() {
  return (
    <section
      id="keahlian"
      aria-labelledby="keahlian-heading"
      className="flex flex-col gap-12 border-t border-line-soft pb-16 pt-16 lg:pb-24 lg:pt-24"
    >
      <SectionHeading
        eyebrow={skills.eyebrow}
        eyebrowTone="teal"
        title={skills.title}
        titleId="keahlian-heading"
        description={skills.description}
      />

      <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {skills.categories.map((category) => (
          <li
            key={category.id}
            className="flex flex-col gap-9 rounded-panel border border-edge bg-panel p-[25px] backdrop-blur-xl"
          >
            <div className="flex flex-col gap-4">
              <IconTile size={12}>
                <Icon icon={category.icon} alt="" />
              </IconTile>

              <div className="flex flex-col gap-1">
                <h3 className="type-card-title font-bold text-ink">{category.title}</h3>
                <p className="type-meta text-ink-muted">{category.blurb}</p>
              </div>

              <ul className="flex flex-wrap content-start gap-2">
                {category.chips.map((chip) => (
                  <li key={chip.label}>
                    <TechChip dot={chip.accent} tone="strong">
                      {chip.label}
                    </TechChip>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-auto border-t border-line-soft pt-[17px]">
              <p className="flex items-center gap-1 type-mono-sm font-normal normal-case tracking-normal text-ink-muted">
                <Icon icon={icons.star} alt="" />
                {category.footer}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
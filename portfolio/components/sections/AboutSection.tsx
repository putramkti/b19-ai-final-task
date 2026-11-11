import Image from "next/image";

import { Icon } from "@/components/ui/Icon";
import { IconTile } from "@/components/ui/IconTile";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { about, icons } from "@/lib/content";

/**
 * About section (Figma 2:118).
 * Left: profile card with avatar, quick specs, CV action.
 * Right: prose, three pillars, career timeline.
 */
export function AboutSection() {
  return (
    <section
      id="tentang"
      aria-labelledby="tentang-heading"
      className="flex flex-col gap-12 border-t border-line-soft pb-16 pt-16 lg:pb-24 lg:pt-24"
    >
      <SectionHeading
        eyebrow={about.eyebrow}
        title={about.title}
        titleId="tentang-heading"
        description={about.description}
      />

      <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12">
        {/* Profile card */}
        <div className="flex flex-col gap-6 rounded-panel border border-edge bg-panel p-6 backdrop-blur-xl sm:p-[33px] lg:col-span-5">
          <div className="relative overflow-hidden rounded-card border border-line-strong bg-surface-chip p-px">
            {/* Square crop, matching the frame's 419×417 image area. */}
            <div className="relative aspect-square w-full">
              <Image
                src={about.profile.image}
                alt={about.profile.imageAlt}
                fill
                sizes="(min-width: 1024px) 420px, 100vw"
                className="object-cover"
                priority
              />
            </div>
            <div
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-footer via-footer/0 to-footer/0 opacity-80"
              aria-hidden="true"
            />
            <div className="absolute inset-x-4 bottom-4">
              <p className="font-display text-xl/[28px] font-bold tracking-[-0.01em] text-ink">
                {about.profile.name}
              </p>
              <p className="font-mono text-[11px]/[14px] font-medium tracking-[0.08em] text-teal">
                {about.profile.role}
              </p>
            </div>
          </div>

          <dl className="flex flex-col gap-3 pt-2">
            {about.specs.map((spec, index) => (
              <div
                key={spec.label}
                className={`flex items-center justify-between gap-4 py-1.5 ${
                  index < about.specs.length - 1 ? "border-b border-line-soft pb-[7px]" : ""
                }`}
              >
                <dt className="type-meta text-ink-muted">{spec.label}</dt>
                <dd
                  className={`flex items-center gap-1.5 type-meta font-medium ${
                    spec.accent ? "text-teal" : "text-ink"
                  }`}
                >
                  {spec.accent ? (
                    <span className="size-1.5 rounded-full bg-teal" aria-hidden="true" />
                  ) : null}
                  {spec.value}
                </dd>
              </div>
            ))}
          </dl>

          <a
            href={about.cvCta.href}
            className="flex items-center justify-center gap-2 rounded-btn border border-line-strong bg-surface p-[13px] font-mono text-mono-sm font-medium text-ink transition-colors hover:border-line-strong hover:bg-surface-hover"
          >
            <Icon icon={icons.download} alt="" />
            {about.cvCta.label}
          </a>
        </div>

        {/* Prose + pillars + timeline */}
        <div className="flex flex-col gap-8 lg:col-span-7">
          <div className="flex flex-col gap-4">
            {about.prose.map((paragraph) => (
              <p key={paragraph.slice(0, 24)} className="type-prose text-ink-soft">
                {paragraph}
              </p>
            ))}
          </div>

          <ul className="grid grid-cols-1 gap-4 pt-2 sm:grid-cols-3">
            {about.pillars.map((pillar) => (
              <li
                key={pillar.id}
                className="flex flex-col gap-1 rounded-card border border-line-soft bg-glass p-[21px] backdrop-blur-md"
              >
                <IconTile size={10}>
                  <Icon icon={pillar.icon} alt="" />
                </IconTile>
                <h3 className="type-card-title pt-2 text-ink">{pillar.title}</h3>
                <p className="type-meta text-ink-muted">{pillar.body}</p>
              </li>
            ))}
          </ul>

          <div className="flex flex-col gap-4 rounded-card border border-edge bg-panel p-[25px] backdrop-blur-xl">
            <h3 className="flex items-center gap-2 type-card-title text-ink">
              <Icon icon={icons.timeline} alt="" />
              {about.timeline.title}
            </h3>

            <ol className="border-l border-line pl-[17px]">
              {about.timeline.entries.map((entry) => (
                <li key={entry.period} className="relative pt-[7px] pb-4 last:pb-0">
                  <span
                    className={`absolute -left-[21px] top-1.5 size-2.5 rounded-full ring-4 ring-canvas ${
                      entry.current ? "bg-teal" : "bg-ink-faint"
                    }`}
                    aria-hidden="true"
                  />
                  <p
                    className={`font-mono text-[11px]/[14px] font-medium tracking-[0.08em] ${
                      entry.current ? "text-teal" : "text-ink-muted"
                    }`}
                  >
                    {entry.period}
                  </p>
                  <h4 className="pt-px font-display text-sm font-medium leading-5 tracking-[-0.01em] text-ink">
                    {entry.title}
                  </h4>
                  <p className="type-meta text-ink-muted">{entry.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
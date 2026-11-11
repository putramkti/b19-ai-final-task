import { SectionHeading } from "@/components/ui/SectionHeading";
import { projects } from "@/lib/content";

import { ProjectGrid } from "./ProjectGrid";

/**
 * Featured projects (Figma 2:353).
 */
export function ProjectsSection() {
  return (
    <section
      id="proyek"
      aria-labelledby="proyek-heading"
      className="flex flex-col gap-12 border-t border-line-soft pb-16 pt-16 lg:pb-24 lg:pt-24"
    >
      <SectionHeading
        eyebrow={projects.eyebrow}
        title={projects.title}
        titleId="proyek-heading"
        description={projects.description}
      />

      <ProjectGrid />
    </section>
  );
}
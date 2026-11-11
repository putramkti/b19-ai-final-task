"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

import { Icon } from "@/components/ui/Icon";
import { icons, projects } from "@/lib/content";
import type { Project, ProjectFilter } from "@/lib/content";

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="flex h-full flex-col justify-between overflow-hidden rounded-panel border border-edge bg-panel backdrop-blur-xl">
      <div>
        <div className="relative">
          {/* 16:10 thumbnail, matching the frame's 600×373.75 image area. */}
          <div className="relative aspect-[16/10] w-full bg-surface-chip">
            <Image
              src={project.image}
              alt={`Pratinjau antarmuka ${project.title}`}
              fill
              sizes="(min-width: 1024px) 592px, 100vw"
              className="object-cover"
            />
          </div>
          <p className="absolute left-4 top-[18px] rounded-full border border-line-strong bg-code px-[13px] py-[5px] font-mono text-[11px]/[14px] font-medium tracking-[0.08em] text-teal backdrop-blur-xl">
            {project.category}
          </p>
        </div>

        <div className="flex flex-col gap-3 p-6 sm:p-8">
          <h3 className="type-project-title text-ink">{project.title}</h3>
          <p className="type-prose text-ink-soft">{project.body}</p>
          <ul className="flex flex-wrap gap-2 pt-2">
            {project.tags.map((tag) => (
              <li
                key={tag}
                className="rounded-chip border border-line bg-surface px-[11px] py-[5px] font-mono text-[11px]/[14px] font-medium tracking-[0.08em] text-ink"
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-4 px-6 pb-6 sm:px-8 sm:pb-8">
        {project.demoHref ? (
          <a
            href={project.demoHref}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center gap-1.5 rounded-btn bg-indigo px-4 py-2 font-mono text-[11px]/[14px] font-semibold tracking-[0.08em] text-cta-ink transition-opacity hover:opacity-90"
          >
            {projects.actions.demo}
            <Icon icon={icons.externalLink} alt="" />
          </a>
        ) : (
          <span
            aria-disabled="true"
            className="inline-flex items-center gap-1.5 rounded-btn border border-edge-soft bg-glass px-4 py-2 font-mono text-[11px]/[14px] font-semibold tracking-[0.08em] text-ink-muted backdrop-blur-md"
          >
            {projects.actions.unavailable}
            <Icon icon={icons.externalLink} alt="" />
          </span>
        )}

        {project.sourceHref ? (
          <a
            href={project.sourceHref}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center gap-1.5 rounded-btn border border-edge-soft bg-glass px-[17px] py-[9px] font-mono text-[11px]/[14px] font-medium tracking-[0.08em] text-ink backdrop-blur-md transition-colors hover:border-line-strong"
          >
            {projects.actions.source}
            <Icon icon={icons.codeBrackets} alt="" />
          </a>
        ) : (
          <span
            aria-disabled="true"
            className="inline-flex items-center gap-1.5 rounded-btn border border-edge-soft bg-glass px-[17px] py-[9px] font-mono text-[11px]/[14px] font-medium tracking-[0.08em] text-ink-muted backdrop-blur-md"
          >
            {projects.actions.unavailable}
            <Icon icon={icons.codeBrackets} alt="" />
          </span>
        )}
      </div>
    </article>
  );
}

/**
 * Filterable project grid (Figma 2:353).
 *
 * The chips come from the frame; filtering is an inferred enhancement because
 * the design ships an active "SEMUA (4)" state.
 */
export function ProjectGrid() {
  const [filter, setFilter] = useState<ProjectFilter>("all");

  const visible = useMemo(
    () =>
      filter === "all"
        ? projects.items
        : projects.items.filter((project) =>
            project.filters.some((category) => category === filter),
          ),
    [filter],
  );

  return (
    <div className="flex flex-col gap-8">
      <div
        role="group"
        aria-label="Filter kategori proyek"
        className="flex flex-wrap items-center gap-2"
      >
        {projects.filters.map((option) => {
          const isActive = filter === option.id;
          return (
            <button
              key={option.id}
              type="button"
              onClick={() => setFilter(option.id)}
              aria-pressed={isActive}
              className={`rounded-full px-4 py-2 font-mono text-[11px]/[14px] tracking-[0.08em] transition-colors ${
                isActive
                  ? "bg-indigo font-semibold text-cta-ink"
                  : "bg-surface-chip font-medium text-ink-soft hover:text-ink"
              }`}
            >
              {option.label}
            </button>
          );
        })}
      </div>

      <p aria-live="polite" className="sr-only">
        {visible.length === 0
          ? projects.emptyState
          : `Menampilkan ${visible.length} proyek.`}
      </p>

      {visible.length === 0 ? (
        <p className="rounded-panel border border-edge bg-panel p-8 text-center type-prose text-ink-muted backdrop-blur-xl">
          {projects.emptyState}
        </p>
      ) : (
        <ul className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {visible.map((project) => (
            <li key={project.id} className="h-full">
              <ProjectCard project={project} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/data/portfolio";

export function ProjectCard({
  project,
  index = 0,
  featured = false,
}: {
  project: Project;
  index?: number;
  featured?: boolean;
}) {
  const number = String(index + 1).padStart(2, "0");

  const mediaClass = featured
    ? "aspect-[4/3] w-full border-b border-line lg:aspect-auto lg:w-1/2 lg:min-h-[24rem] lg:border-b-0 lg:border-r"
    : "aspect-[16/9] w-full border-b border-line";

  const headingClass = featured
    ? "mt-5 text-2xl font-semibold tracking-tight sm:text-3xl"
    : "mt-5 text-lg font-semibold tracking-tight";

  const summaryClass = featured
    ? "mt-3 text-base leading-relaxed text-ink-muted sm:text-lg"
    : "mt-3 text-sm leading-relaxed text-ink-muted";

  return (
    <Link
      href={`/projects/${project.slug}`}
      className={`surface-card card-hover group flex h-full w-full flex-col overflow-hidden rounded-2xl ${
        featured ? "lg:flex-row" : ""
      }`}
    >
      <div
        className={`relative overflow-hidden bg-[radial-gradient(120%_120%_at_20%_0%,color-mix(in_oklab,var(--accent)_22%,transparent),transparent_70%)] ${mediaClass}`}
      >
        {project.image && (
          <span className="absolute inset-6 block">
            <Image
              src={project.image}
              alt={`${project.name} preview`}
              fill
              sizes={featured ? "(max-width: 1024px) 100vw, 50vw" : "100vw"}
              className="object-contain transition-transform duration-700 ease-out group-hover:scale-[1.05]"
            />
          </span>
        )}
        <div className="relative flex h-full items-end justify-between p-5">
          {!project.image && (
            <span className="font-mono text-3xl font-medium text-ink/25 sm:text-4xl">
              {number}
            </span>
          )}
          <span
            aria-hidden
            className={`ml-auto flex h-9 w-9 items-center justify-center rounded-full border text-ink-muted transition-all duration-300 group-hover:border-accent group-hover:text-accent ${
              project.image
                ? "border-white/50 bg-black/30 text-white backdrop-blur-sm"
                : "border-line bg-paper-raised"
            }`}
          >
            ↗
          </span>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <div className="flex items-baseline justify-between gap-4">
          <span className="font-mono text-xs uppercase tracking-[0.14em] text-accent">
            {featured ? "Featured case study" : "Case study"}
          </span>
          <span className="font-mono text-xs text-ink-faint">{project.year}</span>
        </div>

        <h3 className={headingClass}>{project.name}</h3>
        <p className={summaryClass}>{project.summary}</p>

        <ul className="mt-5 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <li
              key={t}
              className="rounded-full border border-line px-2.5 py-1 font-mono text-[0.65rem] uppercase tracking-[0.1em] text-ink-muted"
            >
              {t}
            </li>
          ))}
        </ul>

        <span
          className={`link-underline mt-auto self-start pt-6 text-sm font-medium text-ink ${
            featured ? "" : "hidden"
          }`}
        >
          {project.href ? "Visit live site →" : "Read case study →"}
        </span>
      </div>
    </Link>
  );
}

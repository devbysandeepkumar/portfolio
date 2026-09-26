import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/container";
import { PageHeader } from "@/components/page-header";
import { Reveal } from "@/components/reveal";
import { TagList } from "@/components/tag-list";
import { projects } from "@/data/portfolio";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata(props: PageProps<"/projects/[slug]">) {
  const { slug } = await props.params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return { title: "Project not found" };
  }

  return {
    title: `${project.name} — Sandeep Kumar`,
    description: project.summary,
  };
}

export default async function ProjectPage(props: PageProps<"/projects/[slug]">) {
  const { slug } = await props.params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  const gallery = project.images ?? (project.image ? [project.image] : []);

  return (
    <Container className="w-full py-12 sm:py-16">
      <PageHeader
        title={project.name}
        subtitle={project.summary}
        breadcrumb={`Projects / ${project.name}`}
      />

      {project.href && (
        <div className="mt-10 overflow-hidden rounded-2xl border border-line bg-paper-raised">
          <div className="flex items-center gap-3 border-b border-line px-4 py-3">
            <span aria-hidden className="flex shrink-0 gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-line-strong" />
              <span className="h-2.5 w-2.5 rounded-full bg-line-strong" />
              <span className="h-2.5 w-2.5 rounded-full bg-line-strong" />
            </span>
            <span className="min-w-0 flex-1 truncate rounded-md bg-paper px-3 py-1.5 font-mono text-xs text-ink-faint">
              {project.href.replace(/^https?:\/\//, "")}
            </span>
            <a
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 font-mono text-xs uppercase tracking-[0.14em] text-ink-muted transition hover:text-accent"
            >
              Open ↗
            </a>
          </div>
          <iframe
            src={project.href}
            title={`${project.name} live preview`}
            loading="lazy"
            sandbox="allow-scripts allow-same-origin allow-popups allow-forms allow-modals"
            className="h-[32rem] w-full border-0 bg-white"
          />
        </div>
      )}

      <div className="mt-12 grid w-full gap-12 lg:grid-cols-3 lg:gap-16">
        <Reveal className="lg:col-span-2">
          <div className="space-y-5 text-lg leading-relaxed text-ink-muted">
            <p>{project.description}</p>
            {project.href && (
              <a
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline inline-block text-base font-medium text-ink hover:text-accent"
              >
                {project.href.replace(/^https?:\/\//, "")} ↗
              </a>
            )}
          </div>
        </Reveal>

        <aside className="space-y-8">
          <div className="border-t border-line pt-5">
            <h2 className="eyebrow">Year</h2>
            <p className="mt-3 text-lg font-semibold">{project.year}</p>
          </div>
          <div className="border-t border-line pt-5">
            <h2 className="eyebrow">Stack</h2>
            <div className="mt-4">
              <TagList items={project.tech} />
            </div>
          </div>
          {project.href && (
            <a
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary w-full"
            >
              Visit project <span aria-hidden>↗</span>
            </a>
          )}
        </aside>
      </div>

      {gallery.length > 0 && (
        <section className="mt-16">
          <div className="flex flex-wrap items-baseline justify-between gap-4 border-b border-line pb-5">
            <h2 className="font-display text-section">Gallery</h2>
            <span className="font-mono text-xs tracking-[0.14em] text-accent">
              {gallery.length} images
            </span>
          </div>
          <ul className="mt-7 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-6">
            {gallery.map((src, i) => (
              <li
                key={src}
                className="group relative flex aspect-square items-center justify-center overflow-hidden rounded-xl border border-line bg-[radial-gradient(120%_120%_at_20%_0%,color-mix(in_oklab,var(--accent)_18%,transparent),transparent_70%)] p-4"
              >
                <span className="relative block h-full w-full">
                  <Image
                    src={src}
                    alt={`${project.name} artwork ${i + 1}`}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
                    className="object-contain transition-transform duration-500 ease-out group-hover:scale-110"
                  />
                </span>
              </li>
            ))}
          </ul>
        </section>
      )}

      <div className="mt-16 border-t border-line pt-8">
        <Link
          href="/projects"
          className="link-underline font-mono text-xs uppercase tracking-[0.14em] text-ink-muted hover:text-ink"
        >
          ← All projects
        </Link>
      </div>
    </Container>
  );
}

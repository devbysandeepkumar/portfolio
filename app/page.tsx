import Link from "next/link";
import { Container } from "@/components/container";
import { ProjectCard } from "@/components/project-card";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import {
  projects,
  services,
  siteConfig,
  skills,
} from "@/data/portfolio";

const stack = [...skills, ...skills];

export default function HomePage() {
  return (
    <div className="w-full">
      <section className="relative w-full overflow-hidden border-b border-line">
        <div aria-hidden className="hero-glow absolute inset-0 -z-10" />
        <Container className="py-24 sm:py-32">
          <p className="inline-flex animate-rise items-center gap-2.5 font-mono text-xs uppercase tracking-[0.14em] text-ink-muted">
            <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-success" />
            Available for freelance &amp; full-time roles
          </p>

          <h1
            className="mt-8 animate-rise font-display text-display"
            style={{ animationDelay: "70ms" }}
          >
            {siteConfig.name}
            <span className="text-accent">.</span>
          </h1>

          <p
            className="mt-7 max-w-2xl animate-rise text-xl leading-relaxed text-ink-muted sm:text-2xl"
            style={{ animationDelay: "150ms" }}
          >
            Full stack &amp; AI engineer. I build fast, accessible web apps
            with React and Next.js — and the{" "}
            <span className="text-ink">Node.js APIs, LangChain agents, Docker
            services and AWS deploys</span>{" "}
            behind them.
          </p>

          <div
            className="mt-10 flex animate-rise flex-wrap items-center gap-3"
            style={{ animationDelay: "230ms" }}
          >
            <Link href="/projects" className="btn btn-primary">
              View selected work
              <span aria-hidden>→</span>
            </Link>
            <Link href="/contact" className="btn btn-outline">
              Start a project
            </Link>
          </div>
        </Container>
      </section>

      <section
        aria-label="Technology stack"
        className="w-full overflow-hidden border-b border-line py-4"
      >
        <div className="flex w-max animate-marquee hover:[animation-play-state:paused] motion-reduce:animate-none">
          {[0, 1].map((copy) => (
            <ul
              key={copy}
              aria-hidden={copy === 1 ? "true" : undefined}
              className="flex"
            >
              {stack.map((item, i) => (
                <li
                  key={`${item}-${i}`}
                  className="flex items-center gap-6 pr-6 font-mono text-xs uppercase tracking-[0.14em] text-ink-muted"
                >
                  <span aria-hidden className="text-accent">
                    /
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          ))}
        </div>
      </section>

      <section className="w-full border-b border-line py-16 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="Capabilities"
            title="What I do"
            description="One engineer across the stack — the interface, the model behind it, the API, and the pipeline that puts it in front of users."
          />
          <Reveal className="mt-4" stagger={0.08}>
            <ul className="grid gap-x-14 sm:grid-cols-2">
              {services.map((service) => (
                <li key={service.number} data-reveal className="border-t border-line py-8">
                  <div className="flex items-baseline gap-4">
                    <span className="font-mono text-xs tracking-[0.14em] text-accent">
                      {service.number}
                    </span>
                    <h3 className="text-xl font-semibold tracking-tight">
                      {service.title}
                    </h3>
                  </div>
                  <p className="mt-3.5 leading-relaxed text-ink-muted">
                    {service.description}
                  </p>
                  <ul className="mt-5 flex flex-wrap gap-x-5 gap-y-2 font-mono text-[0.7rem] uppercase tracking-[0.12em] text-ink-faint">
                    {service.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </Reveal>
        </Container>
      </section>

      <section className="w-full border-b border-line py-16 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="Portfolio"
            title="Featured project"
            description="AI powered coffee search — React and Tailwind on the surface, LangChain and LangGraph underneath."
            href="https://devbysandeepkumar.github.io/coffee/"
            linkLabel="Live demo"
          />
          <Reveal className="mt-10">
            <ul>
              {projects.map((project, i) => (
                <li key={project.slug} data-reveal>
                  <ProjectCard project={project} index={i} featured />
                </li>
              ))}
            </ul>
          </Reveal>
        </Container>
      </section>

      <section className="relative w-full overflow-hidden border-b border-line">
        <div aria-hidden className="hero-glow absolute inset-0 -z-10" />
        <Container className="py-20 text-center sm:py-28">
          <p className="eyebrow">Next step</p>
          <h2 className="mx-auto mt-5 max-w-3xl font-display text-hero">
            Got something that needs building?
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg text-ink-muted">
            React rebuild, an AI feature, or a deploy pipeline that keeps
            breaking — send it over. You&apos;ll get a straight answer within a
            day.
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <a href={`mailto:${siteConfig.email}`} className="btn btn-primary">
              {siteConfig.email}
            </a>
            <Link href="/contact" className="btn btn-outline">
              Contact details
            </Link>
          </div>
        </Container>
      </section>
    </div>
  );
}

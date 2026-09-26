import { Container } from "@/components/container";
import { PageHeader } from "@/components/page-header";
import { ProjectCard } from "@/components/project-card";
import { Reveal } from "@/components/reveal";
import { projects, siteConfig } from "@/data/portfolio";

export const metadata = {
  title: `Projects — ${siteConfig.name}`,
  description: "Selected projects and side work by Sandeep Kumar.",
};

export default function ProjectsPage() {
  return (
    <Container className="w-full py-12 sm:py-16">
      <PageHeader
        title="Projects"
        breadcrumb="Projects"
        subtitle="A selection of things I have designed, built and shipped."
      />
      <Reveal className="mt-10" stagger={0.1}>
        <ul className="grid w-full gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <li key={project.slug} data-reveal>
              <ProjectCard project={project} index={i} />
            </li>
          ))}
        </ul>
      </Reveal>
    </Container>
  );
}

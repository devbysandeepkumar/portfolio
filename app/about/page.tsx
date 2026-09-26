import { Container } from "@/components/container";
import { PageHeader } from "@/components/page-header";
import { Reveal } from "@/components/reveal";
import { TagList } from "@/components/tag-list";
import {
  education,
  siteConfig,
  stackGroups,
  tools,
} from "@/data/portfolio";

export const metadata = {
  title: `About — ${siteConfig.name}`,
  description: "About Sandeep Kumar: stack, tools and education.",
};

const sections = [
  { number: "01", label: "Stack" },
  { number: "02", label: "Tools" },
  { number: "03", label: "Education" },
];

function SectionTitle({ index }: { index: number }) {
  const section = sections[index];
  return (
    <div className="flex flex-wrap items-baseline justify-between gap-4 border-b border-line pb-5">
      <h2 className="font-display text-section">{section.label}</h2>
      <span className="font-mono text-xs tracking-[0.14em] text-accent">
        {section.number}
      </span>
    </div>
  );
}

export default function AboutPage() {
  return (
    <Container className="w-full py-12 sm:py-16">
      <PageHeader
        title="About me"
        breadcrumb="About"
        subtitle="A full stack and AI engineer focused on product craft, from frontend interfaces to backend APIs and cloud infra."
      />

      <Reveal className="mt-12">
        <div className="max-w-2xl space-y-5 text-lg leading-relaxed text-ink-muted">
          <p>
            I&apos;m Sandeep, a full stack developer who enjoys turning ideas
            into working products. Day to day that means React and Next.js
            interfaces, Node.js and Express APIs, LangChain features when the
            product needs them, and the Docker and AWS plumbing that gets
            everything live.
          </p>
          <p>
            When I&apos;m not coding you&apos;ll usually find me reading,
            learning something new, or tinkering with a side project.
          </p>
        </div>
      </Reveal>

      <section className="mt-16">
        <SectionTitle index={0} />
        <Reveal className="mt-7" stagger={0.08}>
          <ul className="grid gap-5 sm:grid-cols-2">
            {stackGroups.map((group) => (
              <li key={group.label} data-reveal>
                <div className="surface-card h-full rounded-2xl p-6">
                  <p className="eyebrow">{group.label}</p>
                  <div className="mt-4">
                    <TagList items={group.items} />
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </Reveal>
      </section>

      <section className="mt-16">
        <SectionTitle index={1} />
        <div className="mt-7">
          <TagList items={tools} />
        </div>
      </section>

      <section className="mt-16">
        <SectionTitle index={2} />
        <Reveal className="mt-7">
          <ul className="space-y-5">
            {education.map((item) => (
              <li
                key={item.degree}
                data-reveal
                className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2 border-b border-line pb-5"
              >
                <div>
                  <span className="text-lg font-semibold tracking-tight">
                    {item.degree}
                  </span>
                  <p className="mt-1 text-sm text-ink-muted">{item.school}</p>
                </div>
                <span className="font-mono text-xs uppercase tracking-[0.14em] text-ink-faint">
                  {item.period}
                </span>
              </li>
            ))}
          </ul>
        </Reveal>
      </section>
    </Container>
  );
}

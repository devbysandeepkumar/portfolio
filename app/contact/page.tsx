import { Container } from "@/components/container";
import { PageHeader } from "@/components/page-header";
import { Reveal } from "@/components/reveal";
import { siteConfig } from "@/data/portfolio";

export const metadata = {
  title: `Contact — ${siteConfig.name}`,
  description: "Get in touch with Sandeep Kumar.",
};

export default function ContactPage() {
  return (
    <Container className="w-full py-12 sm:py-16">
      <PageHeader
        title="Contact"
        breadcrumb="Contact"
        subtitle="Have a project in mind or just want to say hi? My inbox is open."
      />

      <div className="mt-12 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        <Reveal>
          <p className="eyebrow">Email</p>
          <a
            href={`mailto:${siteConfig.email}`}
            className="link-underline mt-5 block w-fit break-all text-2xl font-semibold tracking-tight hover:text-accent sm:text-3xl"
          >
            {siteConfig.email}
          </a>

          <div className="mt-9 space-y-5 border-t border-line pt-8 text-ink-muted">
            <p>
              I&apos;m currently open to freelance projects and interesting
              collaborations. The fastest way to reach me is email — I usually
              reply within a day.
            </p>
            <p className="font-mono text-xs uppercase tracking-[0.14em] text-ink-faint">
              {siteConfig.location}
            </p>
          </div>

          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href={`mailto:${siteConfig.email}`}
              className="btn btn-primary"
            >
              Send an email
            </a>
          </div>
        </Reveal>

        <Reveal className="lg:pt-2" stagger={0.08}>
          <ul id="channels" className="grid w-full gap-4">
            {siteConfig.socials.map((social) => (
              <li key={social.label} data-reveal>
                <a
                  href={social.href}
                  target={social.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="surface-card card-hover group flex items-center justify-between gap-6 rounded-2xl p-6"
                >
                  <span>
                    <span className="block text-base font-semibold tracking-tight">
                      {social.label}
                    </span>
                    <span className="mt-1 block font-mono text-xs uppercase tracking-[0.14em] text-ink-faint">
                      {social.href.startsWith("http")
                        ? social.href.replace(/^https?:\/\//, "")
                        : "Direct message"}
                    </span>
                  </span>
                  <span
                    aria-hidden
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-line text-ink-muted transition group-hover:border-accent group-hover:text-accent"
                  >
                    {social.href.startsWith("http") ? "↗" : "→"}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </Container>
  );
}

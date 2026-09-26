import Link from "next/link";
import { Container } from "@/components/container";
import { siteConfig } from "@/data/portfolio";

const footerNav = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

export function SiteFooter() {
  return (
    <footer className="mt-auto w-full border-t border-line bg-paper">
      <Container className="py-14 sm:py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Link
              href="/"
              className="text-base font-semibold tracking-tight"
            >
              {siteConfig.shortName}
              <span className="text-accent">.</span>
            </Link>
            <p className="mt-4 max-w-sm text-sm text-ink-muted">
              Frontend engineer building fast, accessible products with React,
              Next.js and TypeScript.
            </p>
            <a
              href={`mailto:${siteConfig.email}`}
              className="link-underline mt-5 inline-block text-sm font-medium"
            >
              {siteConfig.email}
            </a>
          </div>

          <div>
            <p className="eyebrow">Navigate</p>
            <ul className="mt-4 space-y-2.5">
              {footerNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-ink-muted transition hover:text-ink"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow">Elsewhere</p>
            <ul className="mt-4 space-y-2.5">
              {siteConfig.socials.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target={social.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="text-sm text-ink-muted transition hover:text-ink"
                  >
                    {social.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-line pt-6 text-sm text-ink-faint sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <p className="font-mono text-xs uppercase tracking-[0.14em]">
            Next.js · TypeScript · Tailwind
          </p>
        </div>
      </Container>
    </footer>
  );
}

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Container } from "@/components/container";
import { ThemeToggle } from "@/components/theme-toggle";
import { siteConfig } from "@/data/portfolio";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-line bg-[var(--header-bg)] backdrop-blur-xl">
      <Container className="flex h-16 items-center justify-between gap-6 sm:h-[4.5rem]">
        <Link
          href="/"
          onClick={() => setOpen(false)}
          className="text-base font-semibold tracking-tight"
        >
          {siteConfig.shortName}
          <span className="text-accent">.</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`relative py-1.5 text-sm transition ${
                  active ? "font-medium text-ink" : "text-ink-muted hover:text-ink"
                }`}
              >
                {item.label}
                <span
                  aria-hidden
                  className={`absolute -bottom-0.5 left-0 h-px w-full origin-left bg-accent transition-transform duration-300 ${
                    active ? "scale-x-100" : "scale-x-0"
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2.5">
          <ThemeToggle />
          <Link
            href="/contact"
            className="btn btn-primary hidden !py-2.5 !text-[0.8rem] sm:inline-flex"
          >
            Hire me
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label="Toggle navigation"
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-line text-ink-muted transition hover:border-line-strong hover:text-ink md:hidden"
          >
            <span className="sr-only">Menu</span>
            <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden>
              <path
                d={open ? "M4 4l8 8M12 4l-8 8" : "M2.5 5h11M2.5 11h11"}
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>
      </Container>

      {open && (
        <nav className="border-t border-line md:hidden">
          <Container className="flex flex-col py-3">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`border-b border-line py-3.5 text-[0.95rem] last:border-0 ${
                  pathname === item.href
                    ? "font-medium text-accent"
                    : "text-ink-muted"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="btn btn-primary mt-4"
            >
              Hire me
            </Link>
          </Container>
        </nav>
      )}
    </header>
  );
}

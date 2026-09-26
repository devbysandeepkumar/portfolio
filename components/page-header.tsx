import Link from "next/link";

export function PageHeader({
  title,
  subtitle,
  breadcrumb,
}: {
  title: string;
  subtitle?: string;
  breadcrumb?: string;
}) {
  return (
    <div className="w-full border-b border-line pb-12">
      <nav
        aria-label="Breadcrumb"
        className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.14em] text-ink-faint"
      >
        <Link href="/" className="transition hover:text-ink">
          Home
        </Link>
        <span aria-hidden>/</span>
        <span className="text-ink-muted">{breadcrumb ?? title}</span>
      </nav>
      <h1 className="mt-8 font-display text-hero">{title}</h1>
      {subtitle && (
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-muted">
          {subtitle}
        </p>
      )}
    </div>
  );
}

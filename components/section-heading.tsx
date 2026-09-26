import Link from "next/link";

export function SectionHeading({
  eyebrow,
  title,
  description,
  href,
  linkLabel,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  href?: string;
  linkLabel?: string;
}) {
  return (
    <div className="flex flex-wrap items-end justify-between gap-6 border-b border-line pb-7">
      <div className="max-w-2xl">
        <p className="eyebrow">{eyebrow}</p>
        <h2 className="mt-4 font-display text-section">{title}</h2>
        {description && (
          <p className="mt-4 text-ink-muted">{description}</p>
        )}
      </div>
      {href && linkLabel && (
        <Link
          href={href}
          className="link-underline text-sm font-medium text-ink-muted hover:text-ink"
        >
          {linkLabel} →
        </Link>
      )}
    </div>
  );
}

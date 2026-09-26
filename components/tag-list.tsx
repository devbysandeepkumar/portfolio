export function TagList({ items }: { items: string[] }) {
  return (
    <ul className="flex w-full flex-wrap gap-2.5">
      {items.map((item) => (
        <li
          key={item}
          className="rounded-full border border-line bg-paper-raised px-3.5 py-1.5 font-mono text-xs tracking-[0.06em] text-ink-muted transition hover:border-line-strong hover:text-ink"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

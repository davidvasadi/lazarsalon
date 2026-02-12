import Link from 'next/link';

export type Crumb = { href: string; label: string };

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  if (!items?.length) return null;

  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol className="flex flex-wrap items-center gap-2 text-sm text-neutral-400">
        {items.map((c, i) => {
          const last = i === items.length - 1;
          return (
            <li key={c.href} className="flex items-center gap-2">
              {last ? (
                <span className="text-neutral-200">{c.label}</span>
              ) : (
                <Link
                  href={c.href}
                  className="hover:text-neutral-200 transition-colors"
                >
                  {c.label}
                </Link>
              )}
              {!last && <span className="text-neutral-600">/</span>}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

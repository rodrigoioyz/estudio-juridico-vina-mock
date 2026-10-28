import { SITE_CONFIG } from '@/lib/site-config';

export type Crumb = { name: string; path: string };

/** JSON-LD BreadcrumbList (migas estructuradas para el SERP). */
export function BreadcrumbLd({ items }: { items: Crumb[] }) {
  const base = SITE_CONFIG.url.replace(/\/$/, '');
  const json = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: `${base}${item.path}`,
    })),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(json).replace(/</g, '\\u003c') }}
    />
  );
}

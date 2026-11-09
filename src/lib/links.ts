import { getRelativeLocaleUrl } from 'astro:i18n';
import type { Lang } from './ui';

/** Site-relative URL for a page in the given language, e.g. ('ne', '/visit/') → '/ne/visit/'. */
export function localHref(lang: Lang, path: string) {
  return getRelativeLocaleUrl(lang, path === '/' ? '' : path.replace(/^\//, ''));
}

export const mapsHref = (query: string) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;

export const mapsEmbedSrc = (query: string) =>
  `https://www.google.com/maps?q=${encodeURIComponent(query)}&output=embed`;

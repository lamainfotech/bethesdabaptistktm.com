# Bethesda Baptist Church — bethesdabaptistktm.com

Astro site for Bethesda Baptist Church, Dhumbarahi, Kathmandu, Nepal. Static
site, bilingual (English / Nepali), content in Markdown content collections.

## Structure

```text
src/
  content/          # faith, covenant, ministries, sermons (Markdown)
  content.config.ts # collection schemas
  layouts/          # BaseLayout.astro
  components/       # Nav, Footer, TranslationNotice
  lib/               # site.ts (nav/contact constants), ui.ts (en/ne strings)
  pages/            # English routes (default locale, no prefix)
  pages/ne/         # Nepali routes
```

Nepali routes reuse the English ministries content and show a translation
notice for pages whose copy isn't translated yet — see `CONTENT-TODO.md` for
what's still outstanding.

## Commands

| Command                | Action                                      |
| :---------------------- | :------------------------------------------ |
| `npm install`           | Install dependencies                         |
| `npm run dev`            | Start local dev server at `localhost:4321`   |
| `npm run build`          | Build production site to `./dist/`           |
| `npm run preview`        | Preview the build locally                    |
| `npm run astro check`    | Type-check the project                       |

## Deploy

Static output (`dist/`) — deploy to Netlify/Vercel/Cloudflare Pages and
point the `bethesdabaptistktm.com` DNS (registered via Yoho Cloud) at it.

# pooventhan.com

Personal site and blog, built with [Astro](https://astro.build/) and deployed to
GitHub Pages.

## Develop

```bash
npm install
npm run dev      # local dev server at http://localhost:4321
npm run build    # production build to ./dist
npm run preview  # preview the production build
```

## Writing a post

Add a Markdown or MDX file under `src/content/blog/`. Frontmatter:

```yaml
---
title: "Post title"
description: "One-line summary (used for SEO and previews)."
pubDate: 2026-01-15
updatedDate: 2026-02-01   # optional
tags: ["testing", "automation"]   # optional
draft: false              # set true to hide from the build
---
```

The filename becomes the URL slug (`/blog/<filename>/`).

## Structure

- `src/pages/` — routes (home, about, blog index, post route, RSS, 404)
- `src/layouts/` — page and blog-post layouts
- `src/components/` — head, header, footer, theme toggle
- `src/content/blog/` — blog posts
- `src/consts.ts` — site title, description, nav and social links
- `src/styles/global.css` — design tokens and base styles
- `public/` — static assets (CNAME, favicon, OG image, robots.txt)

## Deploy

Pushing to the default branch triggers `.github/workflows/deploy.yml`, which
builds the site and publishes it to GitHub Pages. In the repo's
**Settings → Pages**, set the source to **GitHub Actions**.

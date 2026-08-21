# San Marina Engineering Limited

Static marketing website for **San Marina Engineering Limited** — solar energy, critical power, building electrical, safety & compliance, and operations & maintenance.

Built with a quiet engineering visual system, strong SEO, and accessibility-first markup.

## Stack (locked)

| Package           | Version |
| ----------------- | ------- |
| Next.js           | 16.3.0  |
| React / React DOM | 19.2.8  |
| Tailwind CSS      | 4.3.3   |

Do not change these versions without an explicit project decision. See `.cursor/rules/stack-versions.mdc`.

## Features

- Quiet engineering design (matte surfaces, hairline borders, restrained color)
- SEO: metadata, Open Graph, JSON-LD, `sitemap.xml`, `robots.txt`, web manifest
- Accessibility: skip link, landmarks, ARIA labels, keyboard-friendly mobile nav, reduced-motion support
- Responsive layout from narrow phones through large desktops (includes `xs` breakpoint)
- Homepage structured as a credibility brief: positioning → capabilities → detail → contact

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command                | Description                       |
| ---------------------- | --------------------------------- |
| `npm run dev`          | Start the development server      |
| `npm run build`        | Production static build → `out/`  |
| `npm run start`        | Serve the production build (Node) |
| `npm run lint`         | Run ESLint                        |
| `npm run lint:fix`     | Run ESLint with autofix           |
| `npm run format`       | Format with Prettier              |
| `npm run format:check` | Check Prettier formatting         |
| `npm run check`        | Lint + format check               |

After any code change in this repo, agents must run:

```bash
npm run format
npm run lint
```

## Project structure

```text
src/
  app/           # App Router pages, layout, globals, sitemap, robots
  components/    # UI (header, hero, capabilities, footer, primitives)
  lib/           # Content + SEO helpers
.cursor/rules/   # Mandatory agent rules (versions, lint/format, design)
public/          # Icons, OG image, web manifest
```

## Configuration notes

- Site URL and contact email live in `src/lib/seo.ts` (`siteConfig`) — update before production deploy.
- ESLint uses `eslint-config-next` plus Prettier compatibility.
- Prettier uses `prettier-plugin-tailwindcss` for class sorting.

## License

Private project for San Marina Engineering Limited.

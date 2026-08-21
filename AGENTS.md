<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# San Marina project agent rules

Mandatory project rules live in `.cursor/rules/` and always apply:

1. **stack-versions.mdc** — Lock `next@16.3.0`, `react@19.2.8`, `react-dom@19.2.8`, `tailwindcss@4.3.3`, `@tailwindcss/postcss@4.3.3`. Static export only. Neumorphic UI.
2. **lint-and-format.mdc** — After every change, run `npm run format` then `npm run lint` before ending the turn.
3. **neumorphic-design.mdc** — Soft UI / neumorphism conventions for San Marina Engineering Limited.

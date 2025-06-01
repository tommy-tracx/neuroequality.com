# Neuro Equality

Static website for NeuroEquality.com built with Next.js and Tailwind CSS.

## Setup

```bash
npm install
npm run dev
```
## Deployment

To build and export the static site for GitHub Pages:

```bash
GITHUB_PAGES=true npm run build
GITHUB_PAGES=true npm run export
```

The contents of the `out` folder can then be published to the `gh-pages` branch.

Deploy via Vercel or any Node.js hosting.
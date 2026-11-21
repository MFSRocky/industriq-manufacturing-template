# INDUSTRIQ — Precision Industrial & Manufacturing Next.js Template

**INDUSTRIQ** is a commercial-grade Next.js (App Router + TypeScript + Tailwind CSS v4) template engineered for precision manufacturing enterprises, CNC machining facilities, turnkey robotics integrators, additive manufacturing bureaus, and aerospace/medical Tier-1 suppliers.

## Quick Start

```bash
npm install
npm run dev
```

Open `http://localhost:3000` in your browser.

## Available Scripts

- `npm run dev` — Starts Next.js development server on `0.0.0.0:3000`
- `npm run build` — Creates production SSR/SSG build
- `npm run start` — Serves the production Next.js server on `0.0.0.0:3000`
- `npm run export` — Outputs a 100% static Jamstack bundle in `./out` (`output: "export"`)
- `npm run typecheck` — Verifies TypeScript across all routes and data files

## Directory Architecture

- `src/app/` — App Router pages (`/` + 10 complete inner routes with SSG dynamic params)
- `src/components/` — Modular section, layout, interactive UI, and form components
- `src/data/` — Structured TypeScript data files (`site.ts`, `solutions.ts`, `capabilities.ts`, `industries.ts`, `projects.ts`, `quality.ts`, `insights.ts`)
- `src/styles/tokens.css` — Core CSS custom property design tokens
- `public/images/` — Local art-directed industrial photography included with commercial redistribution rights

## Documentation & Submission Assets

See the sibling `../documentation/index.html` guide for full customization instructions, asset credits, licensing notices, and ThemeForest packaging details.

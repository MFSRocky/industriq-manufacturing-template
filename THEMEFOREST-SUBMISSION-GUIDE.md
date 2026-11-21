# ThemeForest Submission Readiness Checklist — INDUSTRIQ

Prepared against current Envato Author Help Guidelines (2026) for **ThemeForest → Jamstack / Next.js** (and compatible with **Site Templates → React**).

---

## Part 1: Mandatory ThemeForest Requirements (Must Satisfy for Approval)

1. **Latest Public Minor Release of Next.js & TypeScript**
   - Built on `next@16.4.6`, `react@19.3.1`, and `typescript@5.7.2` with zero TypeScript errors (`npm run typecheck`).
2. **Jamstack Pre-Rendering (SSG) Support**
   - All 26 routes (including dynamic `/projects/[slug]` and `/insights/[slug]` routes via `generateStaticParams()`) pre-render cleanly and support full static export (`npm run export`).
3. **Theme Folder Naming Rule**
   - Main codebase lives inside a folder matching the item brand name: `industriq/`.
4. **English Help File Documentation (HTML / PDF)**
   - Provided in `documentation/index.html` covering prerequisites, installation, file structure, customization tokens, form integration, asset credits, and version changelog.
5. **Authentic Live Preview URL**
   - Requires hosting a working live demo URL (e.g., Vercel, Netlify, or dedicated cloud preview) at submission time where all routes, filters, search, and RFQ forms function identically.
6. **Marketplace Image Assets (Exact Dimensions & Naming)**
   - **Thumbnail:** `80x80` PNG/JPG (`preview-assets/01_thumbnail_80x80.png`)
   - **Theme Preview / Inline Cover:** `590x300` JPG named `01_<item>.jpg` (`preview-assets/02_inline_preview_590x300.jpg` — rename to `01_industriq_preview.jpg` inside `preview.zip`) + optional additional screenshots up to `900px` max width/height (`preview-assets/screenshots/`).
   - **3:2 Cover Asset (Envato Elements / High-Res Market):** `2340x1560` JPG (`preview-assets/03_cover_hero_2340x1560.jpg`).
7. **Commercial & Redistribution Asset Licensing**
   - Documented in `ASSET-CREDITS.md` and `documentation/index.html`. All 10 bundled photographs are original self-contained assets included in the download archive; fonts and libraries are SIL OFL / MIT / ISC.
8. **Title, Description & Tag Rules**
   - Recommended Item Title: `INDUSTRIQ | Industrial & Precision Manufacturing Next.js Template` (Title Case, starts with brand name, under 100 chars, no subjective buzzwords like "Best/Pro").
   - Maximum **15 lowercase tags** (e.g., `manufacturing`, `industrial`, `cnc machining`, `robotics`, `engineering`, `factory`, `nextjs`, `typescript`, `tailwind css`, `aerospace`, `automation`, `b2b`, `corporate`, `portfolio`, `case study`).

---

## Part 2: Recommended Organizational & Engineering Practices

1. **Automated Pre-Release Audit**
   - Verified zero console errors, zero HTTP 4xx/5xx requests, zero broken images, and zero horizontal overflow across 6 responsive breakpoints (`360px`, `390px`, `768px`, `1280px`, `1440px`, `1920px`).
2. **Clean Distribution Packaging**
   - Exclude `node_modules/`, `.next/`, `out/`, and `.git/` before compressing the buyer `.zip` using `./package-themeforest.sh`.
3. **Centralized Content Data Layer**
   - All demo copy, tables, metrics, and case studies live in `industriq/src/data/*.ts` so buyers customize content without touching UI components.
4. **Accessibility & SEO Best Practices**
   - Semantic landmarks (`<header>`, `<nav>`, `<main>`, `<footer>`), skip link, WAI-ARIA tabs/accordions/modals, `sitemap.xml`, `robots.txt`, OpenGraph metadata, and `prefers-reduced-motion` support.

# INDUSTRIQ — Swiss Industrial & Precision Manufacturing Next.js Template

[![Next.js](https://img.shields.io/badge/Next.js-16.4-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.3-blue?style=flat-square&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4.0-38bdf8?style=flat-square&logo=tailwindcss)](https://tailwindcss.com/)
[![ThemeForest Standard](https://img.shields.io/badge/ThemeForest-Approved_Standard-brightgreen?style=flat-square)](https://themeforest.net/)

**INDUSTRIQ** is an engineering-grade, brutalist-industrial Next.js 16 website template engineered for precision manufacturing enterprises, 5-axis CNC machining facilities, turnkey robotics integrators, metal additive (DMLS) bureaus, and aerospace/medical Tier-1 suppliers.

---

## Key Features

- **Next.js 16.4 App Router & React 19:** State-of-the-art Next.js architecture with Turbopack and strict TypeScript 5.7 typings throughout.
- **Dual Architecture (SSR & Pure Jamstack Export):** Run as a full Next.js server or export 100% pure static HTML/CSS/JS via `npm run export` for deployment anywhere.
- **12 High-Impact Homepage Modules:** Asymmetric photographic hero, real-time telemetry HUD, animated stat counters, 6-discipline solution workbench, machine capacity matrix tabs, regulated industry showcase, filterable case studies, 5-phase manufacturing process console, quality plaques, technology focus modules, insights grid, and architectural footer.
- **10 Full Production Inner Pages (26 Total Static Routes):** About Us, Capabilities, Solutions, Industries, Projects Catalog, Project Detail (`/projects/[slug]`), Quality & Certifications, Insights Journal, Article Detail (`/insights/[slug]`), and Contact & RFQ Desk.
- **Global `⌘K` / `Ctrl+K` Engineering Search:** Instant client-side modal indexing solutions, machines, case studies, industries, and technical articles with keyboard navigation.
- **Interactive Multi-Specification RFQ Console:** Validated quotation desk with alloy and tolerance selectors, error handling, and confirmation state.
- **10 Local Industrial Photography Assets:** Bespoke art-directed industrial renders included directly in the template bundle with full commercial rights.
- **Decoupled Data Architecture:** Zero JSX edits needed to update company info, campuses, machine fleets, or case studies—all managed in `src/data/*.ts`.
- **Standalone Offline Documentation:** Comprehensive HTML help documentation in `documentation/index.html`.

---

## Directory Architecture

```text
INDUSTRIQ/
├── documentation/              # Offline HTML help documentation
│   └── index.html              # Standalone documentation website
│
├── industriq/                  # Complete Next.js 16 production codebase
│   ├── public/
│   │   └── images/             # 10 included industrial photography assets
│   ├── src/
│   │   ├── app/                # App Router pages (Home + 10 inner routes)
│   │   │   ├── layout.tsx      # Root layout, fonts & SEO metadata
│   │   │   ├── page.tsx        # 12-section Flagship Homepage
│   │   │   ├── about/          # Company Heritage & Global Campuses
│   │   │   ├── capabilities/   # Machine Fleet & Alloy Matrix
│   │   │   ├── contact/        # Validated RFQ Desk & Campus Switcher
│   │   │   ├── industries/     # 6 Regulated Sector Verticals
│   │   │   ├── insights/       # Technical Journal + [slug] SSG Reader
│   │   │   ├── projects/       # Filterable Case Studies + [slug] Telemetry
│   │   │   ├── quality/        # Accredited Quality & Inspection Gates
│   │   │   ├── solutions/      # 6 Production Division Workbenches
│   │   │   ├── icon.svg        # Scalable favicon vector
│   │   │   ├── robots.ts       # Dynamic robots.txt generator
│   │   │   └── sitemap.ts      # Dynamic sitemap.xml generator
│   │   ├── components/         # Modular layout, section, UI & form components
│   │   ├── data/               # Centralized TypeScript content models
│   │   └── styles/tokens.css   # Industrial brutalist design system custom properties
│   ├── next.config.ts          # Dual SSR & Static Export build config
│   ├── package.json            # Dependencies & scripts
│   └── tsconfig.json           # Strict TypeScript configuration
│
├── marketplace/                # Envato submission materials
│   └── listing-copy.md         # Title, description, specifications, search tags
│
├── preview-assets/             # Promotional screenshots, covers, and thumbnails
│   ├── 01_thumbnail_80x80.png
│   ├── 02_inline_preview_590x300.jpg
│   ├── 03_cover_hero_2340x1560.jpg
│   ├── 04_full_homepage_preview.png
│   ├── 05_full_page_screenshot.jpg
│   ├── 06_features_and_highlights.png
│   ├── 07_responsive_desktop_tablet_mobile.png
│   ├── 08_inner_pages_preview.png
│   └── screenshots/            # Individual route captures
│
├── CHANGELOG.md                # Semantic versioning release history
├── CREDITS.txt                 # Font, icon, and photography attributions
├── LICENSE.txt                 # Envato commercial license terms
├── START-HERE.txt              # Buyer onboarding text file
└── THEMEFOREST-SUBMISSION-GUIDE.md
```

---

## Quick Start

### Prerequisites
Node.js 20.x or newer installed.

### Development Server
```bash
cd industriq
npm install
npm run dev
```
Open `http://localhost:3000` in your browser.

### Production Build & Server
```bash
npm run build
npm run start
```

### Static Jamstack Export
```bash
npm run export
```
The static site is generated inside `industriq/out/` and can be deployed directly to Vercel, Netlify, Cloudflare Pages, GitHub Pages, or any web server.

---

## Design System Tokens

All colors and spacing variables are declared in `src/styles/tokens.css`:

| Token | Hex Value | Role |
|---|---|---|
| `--iq-obsidian` | `#171918` | Dark brutalist surfaces, hero backdrop, footer |
| `--iq-ivory` | `#F3F0E9` | Primary Swiss editorial print surface |
| `--iq-orange` | `#F47732` | Signal accents, primary CTAs, telemetry badges |
| `--iq-steel` | `#747A75` | Technical secondary copy & metadata labels |
| `--iq-concrete` | `#C8C9C3` | 1px hairline structural rules & borders |

---

## License & Credits

- Designed & Developed by **TemplateFlux**.
- Commercial license terms in [LICENSE.txt](file:///C:/Programming/INDUSTRIQ%20%E2%80%94%20Industrial%20%26%20Manufacturing/LICENSE.txt).
- Asset credits & font attributions in [CREDITS.txt](file:///C:/Programming/INDUSTRIQ%20%E2%80%94%20Industrial%20%26%20Manufacturing/CREDITS.txt).

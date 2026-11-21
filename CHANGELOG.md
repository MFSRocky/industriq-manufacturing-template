# Changelog — INDUSTRIQ

All notable changes to the **INDUSTRIQ** template will be documented in this file.
The project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [1.0.0] — 2026-11-21

### Added
- Initial commercial release built on **Next.js 16.4**, **React 19.3**, **TypeScript 5.7**, and **Tailwind CSS v4**.
- Complete **12-section Swiss-industrial brutalist homepage** featuring:
  - Hero with live telemetry badges and equipment status HUD
  - Animated tabular counter stats (Assemblies, Tolerances, Fleet cells, OTD rate)
  - Interactive 6-discipline production solution workbench
  - Machine fleet capacity and travel envelope matrix tabs
  - Regulated industry showcase (Aerospace, Turbomachinery, E-Mobility, Medical, Semiconductor)
  - Filterable case studies with live search and category pills
  - 5-phase manufacturing process console
  - Quality, defense, and metrology accreditation plaques
  - Technology focus modules with precision CNC & robotic welding blueprints
  - Engineering insights journal highlights
  - Conversion RFQ call-to-action banner
  - Architectural footer with plant status HUD and newsletter integration
- **10 Full Production Inner Pages** (26 static build outputs):
  - **About Us** (`/about`): Company heritage, 3 global campus dossiers (Stuttgart, Zurich, Austin), leadership team, and precision engineering ethos.
  - **Solutions** (`/solutions`): Turnkey CNC, robotic welding, DMLS additive, optical metrology, cleanroom assembly, and predictive maintenance divisions.
  - **Capabilities** (`/capabilities`): Filterable machine fleet travel envelopes, spindle specs, and EN 10204 3.1 certified alloy database.
  - **Industries** (`/industries`): 6 regulated vertical sectors with technical specs and defense compliance standards.
  - **Projects Catalog** (`/projects`): Filterable case study dossier library with keyword search and process tags.
  - **Project Dossier Detail** (`/projects/[slug]`): SSG engineering case study featuring Zeiss CMM inspection tables, process parameters, cycle time reductions, and material specs.
  - **Quality & Certifications** (`/quality`): AS9100D Rev D, ISO 13485, IATF 16949, and ISO 9001 frameworks with interactive 4-gate verification process tabs.
  - **Insights Journal** (`/insights`): Searchable engineering whitepapers, metallurgy briefs, and automation case notes.
  - **Article Detail** (`/insights/[slug]`): SSG long-form technical publication with reading progress, sticky table of contents, and related dossiers.
  - **Contact & RFQ Desk** (`/contact`): Validated multi-field quotation request form with interactive campus switcher and direct plant contacts.
  - **Custom 404 Error Page** (`/_not-found`): Industrial blueprint styled error interface with rapid navigation links.
- Global `⌘K` / `Ctrl+K` client-side engineering search modal indexing solutions, machines, case studies, industries, and technical articles with keyboard navigation.
- Self-contained art-directed industrial photography suite (10 images) in `public/images/` with 100% commercial and redistribution rights.
- Full Jamstack static export support (`npm run export` outputs to `out/`).
- Dual SSR / SSG configuration via `next.config.ts`.
- Standalone offline HTML help documentation in `documentation/index.html`.
- ThemeForest marketplace materials, metadata, and packaging scripts.

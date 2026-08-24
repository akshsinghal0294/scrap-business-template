# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — start Vite dev server
- `npm run build` — production build
- `npm run preview` — preview production build
- `npm run lint` — run ESLint (`eslint .`)

There is no test framework or `test` script in this project.

## Architecture

This is a single-page React (v19) + Vite marketing site for a scrap-dealer business, styled with MUI v9 (`@mui/material`, `@emotion/*`) and `framer-motion`.

- `src/main.jsx` mounts `BrowserRouter` + MUI `ThemeProvider`/`CssBaseline` around `App`. `react-router-dom` is installed and wired up, but `src/routes.jsx` is empty and unused — `App.jsx` renders `Home` directly, with no `<Routes>`/`<Route>` defined anywhere.
- `src/pages/Home.jsx` assembles the whole page by importing every section component directly (Navbar, Hero, About, Services, Gallery, Contact, Footer) and wrapping each in a `<section id="...">`. Navigation (`src/components/common/Navbar.jsx`) works by scrolling to these anchor IDs (`scrollIntoView`), not by routing.
- `src/components/layout/MainLayout.jsx` (Navbar/Footer/FloatingWhatsApp/CallButton wrapper) exists but is **not** currently used — `Home.jsx` duplicates Navbar/Footer inline instead of rendering through `MainLayout`. Be aware of this split when touching layout/chrome.
- `src/components/sections/` — one component per landing-page section (Hero, About, Services, Gallery, Contact, WhyChooseUs, Location).
- `src/components/common/` — reusable chrome/widgets (Navbar, Footer, CallButton, FloatingWhatsApp, ScrollToTop, SectionTitle).
- `src/data/*.js` — plain JS arrays/objects are the content source (`business.js`, `services.js`, `menu.js`, `gallery.js`). There is no CMS or API layer; content edits mean editing these files.
- `src/config/branding.js` — site-wide branding (company name, tagline, colors, logo/hero image paths, favicon).
- `src/theme/theme.js` — builds the MUI theme from `branding.js` colors; change brand colors in `branding.js`, not in the theme file.
- `src/utils/constants.js` — shared layout constants (`SECTION_SPACING`, `CONTAINER_WIDTH`, `APP_BAR_HEIGHT`).

## Conventions

- Components are declared as `function ComponentName() { ... }` with `export default ComponentName` at the bottom — not arrow functions, not inline default exports.
- Styling is done via MUI's `sx` prop; no separate CSS-in-JS files per component (only `src/styles/global.css` is global).
- Imports use relative paths (e.g. `../../data/business`) — no path aliases are configured.
- Page content/copy is pulled from `src/data/*` and `src/config/branding.js` rather than hardcoded in components — follow this pattern when adding new content-bearing sections.

## Development rules

1. Inspect the relevant files and existing implementation before making changes.
2. Identify the files that need to change before editing.
3. Briefly explain the planned changes and wait for approval before modifying files.
4. Make the smallest required change.
5. Do not modify unrelated files.
6. Do not install packages or introduce new dependencies without approval.
7. Do not refactor unrelated code.
8. Do not run destructive commands without approval.
9. Do not commit or push Git changes unless explicitly requested.
10. After making changes, report:
    - files changed
    - important lines/areas changed
    - what was changed
    - verification performed
    - remaining issues

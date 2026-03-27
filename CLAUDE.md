# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev        # Dev server at localhost:5173
npm run build      # tsc → vite bundle → prerender (full production build)
npm run lint       # ESLint (TypeScript + React hooks)
npm run preview    # Preview built app locally
npm run prerender  # Run prerender step only (rarely needed standalone)
```

## Architecture

React 19 SPA with build-time prerendering, deployed to GitHub Pages at `www.hdrg-kompass.de`. No backend - all data is static TypeScript.

**Stack:** Vite 7, React Router DOM 7, TypeScript (strict), Chart.js, plain CSS.

**Routing:** `createBrowserRouter` in `App.tsx` with all routes lazy-loaded. `<Layout>` wraps every route. Routes not prerendered (`/fachbereiche`, `/partner-access`, `/customer-access`) are SPA-only.

**Prerendering:** `scripts/prerender.tsx` runs after the Vite build. It uses `renderToString` + `MemoryRouter` to generate static HTML for key routes (`/`, `/hybrid-drg`, `/praxis`, `/kontakt`, `/impressum`, `/datenschutz`) and injects them into `dist/index.html`. This is what makes the site SEO-friendly without a server.

**Data:** `src/data/hybridDrgProcedures.ts` - typed static list of medical procedures (`HybridDrgProcedure[]`) with pricing. The only "database".

**State:** Local `useState` only, no global state library. `AnnouncementBanner` persists dismiss state to `localStorage` (5-day TTL).

**URL state for calculator sharing:** `src/utils/calculatorShare.ts` - builds share URLs, handles print (DOM clone), and email/clipboard fallback.

**Formatters:** `src/utils/formatters.ts` - German locale currency (`Intl`) and date formatting. Shared across components.

**Base URL:** `src/utils/baseUrl.ts` wraps `import.meta.env.BASE_URL` for asset paths (logo, hero images).

## Deployment

Push to `main` triggers GitHub Actions. The deploy workflow builds and publishes to GitHub Pages, and also generates: `CNAME`, `robots.txt`, `sitemap.xml`, `security.txt`, `humans.txt`, `site.webmanifest`, `browserconfig.xml`, and a CustomerAccess chunk alias for dynamic imports.

Stable chunk names are enforced in `vite.config.ts` via `output.entryFileNames`/`chunkFileNames` using `[name].js` (no hashes) so the deploy workflow's alias file keeps working across builds.

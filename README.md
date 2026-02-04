# hDRG-Kompass.de

Landingpage und Informationsplattform rund um Hybrid-DRG (hDRG) mit Fokus auf
Fachbereiche, Team-Checklisten und OP-Kalkulation.

## Lokales Setup

```bash
npm install
npm run dev
```

App läuft standardmäßig auf `http://localhost:5173`.

## Build

```bash
npm run build
npm run preview
```

## Deployment (GitHub Pages)

Das Repo enthält einen GitHub Actions Workflow für Deployments auf GitHub Pages.
Bei Pushes auf `main` wird automatisch gebaut und veröffentlicht.

GitHub Pages URL (Standard):
`https://gilles-pe.github.io/hDRG-Kompass.de/`

Falls Pages noch nicht aktiv ist: In GitHub unter
`Settings → Pages → Build and deployment` den Source auf **GitHub Actions** stellen.

## Struktur

- `src/pages` — Seiten (Start, Hybrid-DRG, Fachbereiche, etc.)
- `src/components` — UI-Komponenten
- `public` — statische Assets

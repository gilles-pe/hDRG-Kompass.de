import { mkdir, readFile, writeFile } from 'node:fs/promises'
import path from 'node:path'
import React from 'react'
import { renderToString } from 'react-dom/server'
import { MemoryRouter, Route, Routes } from 'react-router-dom'

import Layout from '../src/layout/Layout'
import DatenschutzPage from '../src/pages/DatenschutzPage'
import HomePage from '../src/pages/HomePage'
import HybridDrgPage from '../src/pages/HybridDrgPage'
import ImpressumPage from '../src/pages/ImpressumPage'
import KontaktPage from '../src/pages/KontaktPage'
import PraxisPage from '../src/pages/PraxisPage'

const DIST_DIR = path.resolve('dist')
const INDEX_PATH = path.join(DIST_DIR, 'index.html')

const PRE_RENDER_PATHS = ['/', '/hybrid-drg', '/praxis', '/kontakt', '/impressum', '/datenschutz']

function AppForRoute() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="hybrid-drg" element={<HybridDrgPage />} />
        <Route path="praxis" element={<PraxisPage />} />
        <Route path="kontakt" element={<KontaktPage />} />
        <Route path="impressum" element={<ImpressumPage />} />
        <Route path="datenschutz" element={<DatenschutzPage />} />
      </Route>
    </Routes>
  )
}

function renderRoute(routePath: string) {
  return renderToString(
    <MemoryRouter initialEntries={[routePath]}>
      <AppForRoute />
    </MemoryRouter>
  )
}

function injectIntoTemplate(htmlTemplate: string, renderedApp: string) {
  return htmlTemplate.replace(
    /<div id="root">[\s\S]*?<\/div>/,
    `<div id="root">${renderedApp}</div>`
  )
}

function resolveOutputPath(routePath: string) {
  if (routePath === '/') {
    return INDEX_PATH
  }

  const directory = path.join(DIST_DIR, routePath.replace(/^\//, ''))
  return path.join(directory, 'index.html')
}

async function main() {
  const htmlTemplate = await readFile(INDEX_PATH, 'utf-8')

  for (const routePath of PRE_RENDER_PATHS) {
    const rendered = renderRoute(routePath)
    const outputHtml = injectIntoTemplate(htmlTemplate, rendered)
    const outputPath = resolveOutputPath(routePath)
    await mkdir(path.dirname(outputPath), { recursive: true })
    await writeFile(outputPath, outputHtml, 'utf-8')
  }

  console.log(`Prerendered routes: ${PRE_RENDER_PATHS.join(', ')}`)
}

main().catch((error) => {
  console.error('Prerender failed:', error)
  process.exit(1)
})

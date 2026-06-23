import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { readFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { buildLlmsTxt, buildJsonLd } from './scripts/siteMeta.js'

const resumePath = fileURLToPath(new URL('./src/data/resume.json', import.meta.url))
const pkgPath = fileURLToPath(new URL('./package.json', import.meta.url))

// Read fresh each time so dev edits to resume.json are reflected immediately.
const readResume = () => JSON.parse(readFileSync(resumePath, 'utf8'))
const siteUrl = () => JSON.parse(readFileSync(pkgPath, 'utf8')).homepage || '/'

// Derives /llms.txt and a JSON-LD Person schema from resume.json so search
// engines and AI agents stay in sync with site content (see CLAUDE.md).
function portfolioMeta() {
  return {
    name: 'portfolio-meta',
    transformIndexHtml() {
      const jsonLd = JSON.stringify(buildJsonLd(readResume(), siteUrl()))
        .replace(/</g, '\\u003c') // never break out of the <script> tag
      return [
        {
          tag: 'script',
          attrs: { type: 'application/ld+json' },
          children: jsonLd,
          injectTo: 'head',
        },
      ]
    },
    configureServer(server) {
      server.middlewares.use('/llms.txt', (_req, res) => {
        res.setHeader('Content-Type', 'text/plain; charset=utf-8')
        res.end(buildLlmsTxt(readResume(), siteUrl()))
      })
    },
    generateBundle() {
      this.emitFile({
        type: 'asset',
        fileName: 'llms.txt',
        source: buildLlmsTxt(readResume(), siteUrl()),
      })
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), portfolioMeta()],
  base: '/', // Change to '/repo-name/' for GitHub Pages if not using custom domain
})

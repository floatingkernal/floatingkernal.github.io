# React Portfolio — salmansharif.me

## ⚠️ Content Rule — NO HARD-CODED CONTENT (must follow)
**`src/data/resume.json` is the single source of truth for all user-facing content.** Any text, label, list, link, or copy a visitor reads MUST come from `resume.json` and be passed into components as data — never hard-coded in a `.jsx` file.

This includes: section eyebrows/titles/subtitles (`sections.<id>`), the hero greeting and button labels (`hero.*`), stat tiles (`stats[]`), nav links (`nav[]`), the logo (derived from `name`), the "Ask AI" prompt and service list (`askAI.*`), the contact form endpoint (`contactFormEndpoint`), and the footer note (`footerNote`).

When adding or changing anything:
- New copy/data → add a field to `resume.json` and read it via props; do not inline string literals in JSX.
- Need a new content field? Add it to `resume.json` (and the bundled copy stays the fallback) — then consume it.
- **Only exceptions allowed in code:** things that genuinely cannot be serialized to JSON or are structural — icon/gradient *lookup maps* keyed by a string from `resume.json` (e.g. `askAI.services[].icon` → icon component; Skills category icon/color maps), the section render order in `App.jsx`, CSS/Tailwind classes, and the `RESUME_URL` fetch constant. Everything else belongs in `resume.json`.
- Reviews (including cloud `/code-review`) should flag any newly hard-coded user-facing string as a violation of this rule.

## Tech Stack
- **Framework:** React 19 + Vite 7
- **Styling:** Tailwind CSS v4 (via `@tailwindcss/vite` plugin, class-based dark mode)
- **Icons:** react-icons (`fi` for Feather, `si` for Simple Icons)
- **Deployment:** GitHub Pages via `gh-pages` package → `gh-pages` branch
- **Domain:** salmansharif.me (CNAME in `public/`)

## Commands
- `npm run dev` — local dev server
- `npm run build` — production build to `dist/`
- `npm run deploy` — builds then deploys to `gh-pages` branch

## Git
- **Source branch:** `react-source`
- **Deploy branch:** `gh-pages` (auto-managed by `gh-pages` package)
- **Remote:** `git@github.com:floatingkernal/floatingkernal.github.io.git`

## Project Structure
```
src/
├── main.jsx              # Entry point, renders App
├── App.jsx               # Root component, dark mode state, renders all sections
├── index.css             # Tailwind import, CSS variables, dark mode variant, scrollbar
├── data/
│   └── resume.json       # SINGLE SOURCE OF TRUTH — all content (see Content Rule above)
└── components/
    ├── Navbar.jsx         # Fixed nav (links from data.nav), scroll-spy, mobile menu, dark mode toggle, logo from name
    ├── Hero.jsx           # Landing section — name/title/tagline + hero.* greeting & CTA labels
    ├── SectionHeader.jsx  # Shared header; reads eyebrow/title/subtitle from data.sections[name]
    ├── About.jsx          # Bio + stat tiles (data.stats)
    ├── AskAI.jsx          # "Ask AI About Me" — services + prompt from data.askAI; icon map in code
    ├── Toast.jsx          # Self-dismissing toast notification (used by AskAI)
    ├── Experience.jsx     # Work history timeline
    ├── Skills.jsx         # Skills grid (category icon/color maps in code)
    ├── Projects.jsx       # Project cards
    ├── Education.jsx      # Education details
    ├── Contact.jsx        # Contact form/info (endpoint from data.contactFormEndpoint)
    └── Footer.jsx         # Footer with links + footerNote
```

## Section Render Order (in App.jsx)
`Hero → About → AskAI → Experience → Skills → Projects → Education → Contact → Footer`

## Key Patterns
- **Data flow:** `resume.json` is bundled as a static import (default content + fallback) AND fetched at runtime from the GitHub raw URL. `App.jsx` initializes `useState` with the bundled data; on mount a `useEffect` fetches fresh data and **merges it over the bundled defaults** (`{ ...bundled, ...fetched }`) so a stale/partial remote file can never drop newer fields. An `isFresh` flag gates which sections render on fetch failure. All section components (including `AskAI` and `Navbar`) receive `data` as a prop.
- **Theming / tokens:** `index.css` defines semantic CSS variables (`--bg`, `--surface`, `--content`, `--muted`, `--accent`, `--brand`, …) exposed to Tailwind via `@theme inline`, so utilities like `bg-bg`, `text-muted`, `text-accent`, `border-line` adapt automatically between light/dark. Display font = Sora (`font-display`), body = Inter. Reusable helpers: `.card`, `.text-gradient`, `.bg-grid`, animation utilities (`animate-fade-up`, etc.).
- **Dark mode:** Stored in `localStorage`, toggled via `.dark` class on `<html>`. Prefer the semantic tokens over raw `dark:` color literals.
- **Section layout:** all sections sit on `bg-bg` with content grouped into `.card` panels; every section opens with `<SectionHeader data={data} name="<id>" icon={…} />`.
- **Navbar:** `data.nav` drives desktop + mobile nav + scroll-spy. Adding a section = add an entry to `nav[]` and a `sections.<id>` block in `resume.json`, then render the component in `App.jsx` with a matching `id`.
- **Section IDs:** Each section has an `id` matching its `nav` href (e.g., `id="about"`, `id="askai"`).

## Runtime Data Fetching
- App.jsx fetches `resume.json` from the raw GitHub URL of the `react-source` branch on mount
- 1-minute cache: `?v=${Math.floor(Date.now() / 60000)}` query param
- On success: all sections render with fresh data, `isFresh = true`
- On failure: Experience, Projects, and resume link are hidden; other sections use bundled fallback
- **Data-only updates:** edit `resume.json` on `react-source`, push — no rebuild needed

## SEO & Agent Metadata (generated from resume.json)
- The `portfolioMeta` Vite plugin in `vite.config.js` derives all of this from `resume.json` + `package.json` `homepage` — never hand-author it (honors the Content Rule):
  - **`/llms.txt`** ([llmstxt.org](https://llmstxt.org)) — markdown summary for AI agents/search. Served in dev via middleware; emitted into `dist/` at build. Generator: `scripts/siteMeta.js → buildLlmsTxt`.
  - **JSON-LD `Person` schema** — injected into `index.html <head>` via `transformIndexHtml` for search-engine rich results. Generator: `scripts/siteMeta.js → buildJsonLd`.
- Both regenerate on every `npm run build`/`dev`, so editing `resume.json` is enough. The site URL comes from `package.json` `homepage`.
- Note: unlike section content, these are baked at **build time** from the bundled `resume.json` (not the runtime fetch), so they refresh on each `npm run deploy`.

## Config Files
- `vite.config.js` — React + Tailwind plugins, `portfolioMeta` (llms.txt + JSON-LD), `base: '/'`
- `public/CNAME` — custom domain `salmansharif.me`
- `package.json` — `homepage: "https://salmansharif.me"`

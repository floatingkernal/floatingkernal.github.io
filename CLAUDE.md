# React Portfolio — salmansharif.me

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
│   └── resume.json       # All resume content (about, experience, skills, projects, education, contact)
└── components/
    ├── Navbar.jsx         # Fixed nav, scroll-spy, mobile menu, dark mode toggle
    ├── Hero.jsx           # Landing section with name/title
    ├── About.jsx          # Bio + quick facts (bg-gray-50/gray-800)
    ├── AskAI.jsx          # "Ask AI About Me" — 5 AI service buttons, copies prompt to clipboard
    ├── Toast.jsx          # Self-dismissing toast notification (used by AskAI)
    ├── Experience.jsx     # Work history timeline
    ├── Skills.jsx         # Skills grid
    ├── Projects.jsx       # Project cards
    ├── Education.jsx      # Education details
    ├── Contact.jsx        # Contact form/info
    └── Footer.jsx         # Footer with links
```

## Section Render Order (in App.jsx)
`Hero → About → AskAI → Experience → Skills → Projects → Education → Contact → Footer`

## Key Patterns
- **Data flow:** `resume.json` is bundled as a static import fallback AND fetched at runtime from the GitHub raw URL. `App.jsx` uses `useState` initialized with the bundled data and a `useEffect` that fetches fresh data on mount. An `isFresh` flag controls which sections render on fetch failure. `AskAI` and `Toast` are self-contained (no data prop).
- **Dark mode:** Stored in `localStorage`, toggled via class on `<html>`. Components use `dark:` Tailwind variants.
- **Section backgrounds alternate:** `bg-white dark:bg-gray-900` ↔ `bg-gray-50 dark:bg-gray-800` for visual separation.
- **Navbar:** `navLinks` array drives both desktop and mobile nav + scroll-spy. Adding a section = add entry to `navLinks` + render component in App.jsx.
- **Section IDs:** Each section has an `id` matching its `navLinks` href (e.g., `id="about"`, `id="askai"`).

## Runtime Data Fetching
- App.jsx fetches `resume.json` from the raw GitHub URL of the `react-source` branch on mount
- 1-minute cache: `?v=${Math.floor(Date.now() / 60000)}` query param
- On success: all sections render with fresh data, `isFresh = true`
- On failure: Experience, Projects, and resume link are hidden; other sections use bundled fallback
- **Data-only updates:** edit `resume.json` on `react-source`, push — no rebuild needed

## Config Files
- `vite.config.js` — React + Tailwind plugins, `base: '/'`
- `public/CNAME` — custom domain `salmansharif.me`
- `package.json` — `homepage: "https://salmansharif.me"`

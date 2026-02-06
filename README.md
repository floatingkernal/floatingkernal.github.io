# salmansharif.me

Personal portfolio website built with React, Tailwind CSS, and Vite. Deployed to GitHub Pages.

## Live Site

[salmansharif.me](https://salmansharif.me)

## Tech Stack

- **React 19** — UI framework
- **Vite 7** — Build tool and dev server
- **Tailwind CSS v4** — Utility-first styling with class-based dark mode
- **react-icons** — Feather and Simple Icons icon sets

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Opens a local dev server with hot module replacement.

### Production Build

```bash
npm run build
```

Outputs optimized static files to `dist/`.

### Deploy

```bash
npm run deploy
```

Builds the site and publishes the `dist/` folder to the `gh-pages` branch, which GitHub Pages serves at [salmansharif.me](https://salmansharif.me).

## Project Structure

```
src/
├── main.jsx              # App entry point
├── App.jsx               # Root component, dark mode state, section layout
├── index.css             # Tailwind config, CSS variables, global styles
├── data/
│   └── resume.json       # All resume content (bio, experience, skills, projects, etc.)
└── components/
    ├── Navbar.jsx         # Fixed navigation bar with scroll-spy and mobile menu
    ├── Hero.jsx           # Landing hero section
    ├── About.jsx          # About me bio and quick facts
    ├── AskAI.jsx          # "Ask AI About Me" section with AI chat service buttons
    ├── Toast.jsx          # Toast notification component
    ├── Experience.jsx     # Work experience timeline
    ├── Skills.jsx         # Technical skills grid
    ├── Projects.jsx       # Project showcase cards
    ├── Education.jsx      # Education details
    ├── Contact.jsx        # Contact information
    └── Footer.jsx         # Site footer
```

## Features

- **Dark Mode** — Respects system preference, persists choice to localStorage, togglable from the nav bar
- **Responsive Design** — Mobile-first layout with collapsible navigation
- **Ask AI About Me** — One-click buttons to open AI assistants (Claude, ChatGPT, DeepSeek, Gemini, Grok) with a pre-written prompt copied to clipboard
- **Smooth Scrolling** — Scroll-spy highlights the active section in the nav bar

## Customization

All personal content (bio, experience, skills, projects, education, contact info) lives in `src/data/resume.json`. Edit that file to update the site content without touching any components.

## Git Branches

| Branch | Purpose |
|--------|---------|
| `react-source` | Source code |
| `gh-pages` | Built site (auto-managed by `npm run deploy`) |

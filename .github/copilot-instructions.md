<!-- .github/copilot-instructions.md - guidance for AI coding agents -->

# Copilot / AI Agent Instructions — portfolio-react

Purpose

- Short, actionable guidance to make AI agents productive in this Vite + React portfolio.

Quick Start (local)

- Install & run dev server:

```bash
npm install
npm run dev
```

- Build / preview:

```bash
npm run build
npm run preview
```

- Linting: `npm run lint` (uses ESLint configured in repo).

Big picture

- Single-page React app built with Vite. Entry is [src/main.jsx](src/main.jsx) which mounts into `#root` in [index.html](index.html).
- UI is composed of simple functional components under [src/components](src/components) (each imports its own CSS file). Examples: [src/components/ShiningText.jsx](src/components/ShiningText.jsx) and [src/components/Chatbot.jsx](src/components/Chatbot.jsx).
- No backend/API layers in repository — the site is static and client-rendered.

Project-specific conventions & patterns

- Files use `.jsx` for React components and default-export a function component.
- Per-component CSS: components import a matching CSS file (e.g., `ShiningText.jsx` imports `ShiningText.css`). Prefer local CSS edits to global style changes unless intentionally modifying layout.
- Icons and third-party CSS are loaded in [index.html](index.html) (Font Awesome, AOS, Google Fonts). If you need icons, prefer the existing Font Awesome classes used in components.
- Vite config uses `@vitejs/plugin-react` with a `babel-plugin-react-compiler` plugin in [vite.config.js](vite.config.js). Be cautious changing build toolchain settings — small changes can affect dev HMR and build outputs.

Common patterns with examples

- Mounting / app root: see [src/main.jsx](src/main.jsx).
- Component usage: `App` imports components with default exports — e.g. [src/App.jsx](src/App.jsx) imports `Navbar`, `Chatbot`, `ShiningText`, and `Hero`.
- CSS import pattern: each component imports its CSS at top of file (e.g., `import "./Chatbot.css";`).

Known quirks & gotchas

- Case sensitivity: on Windows the import `./components/chatbot` (in [src/App.jsx](src/App.jsx)) resolves to `Chatbot.jsx` fine, but this will break on case-sensitive filesystems (Linux/macOS CI). When editing imports, keep filename casing consistent with the filesystem (prefer `Chatbot.jsx` and `./components/Chatbot`).
- Inline JS attributes in markup: some components (e.g., `Navbar.jsx`) use HTML-style attributes like `onclick="myFunction()"` instead of React `onClick` handlers. When converting or refactoring, translate these to proper React event handlers and move logic into the component.

Workflows for changes

- Small UI fixes: edit component `.jsx` and corresponding `.css`, run `npm run dev` to verify HMR.
- Build verification: run `npm run build` then `npm run preview` to emulate production output.
- Linting: run `npm run lint` before committing changes.

When the agent edits code

- Preserve component export style (default exports) unless the change touches multiple files and the rename is applied everywhere.
- Avoid changing `index.html` external CDN links unless adding a new dependency that cannot be bundled.
- Prefer minimal, well-scoped patches (single component + css) and include a brief test plan (how to verify visually or via dev server).

Files to inspect first for any UI work

- [src/App.jsx](src/App.jsx)
- [src/main.jsx](src/main.jsx)
- [index.html](index.html)
- [vite.config.js](vite.config.js)
- Component examples under [src/components](src/components)

If something is unclear

- Ask: which browsers/OS the change must support; whether to preserve exact markup semantics (e.g., inline event handlers) or modernize to React idioms.

Please review these notes and tell me which section you want expanded or corrected.

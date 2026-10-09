# Antonio Jaramillo — Portfolio

My personal portfolio website: who I am, some of my projects and how to get in touch.

Built with [Vue 3](https://vuejs.org/) and [Rsbuild](https://rsbuild.rs/).

## Getting started

Requires Node.js 22 or later.

```bash
npm install
npm run dev       # dev server at http://localhost:3000
npm run build     # production build in dist/
npm run preview   # preview the production build
```

## Code quality

```bash
npm run lint          # ESLint
npm run format        # format all files with Prettier
npm run format:check  # check formatting (used in CI)
```

Every push and pull request to `master` runs lint, format check and build on GitHub Actions.

## Editing content

- Personal info and links: `src/data/profile.js`
- Projects: `src/data/projects.js` (screenshots in `public/`)
- Skills: `src/data/skills.js` (icons in `public/icons/`)
- CV: `public/cv.pdf`
- Page title and meta tags: `rsbuild.config.mjs` and `index.html`

The version shown in the footer is read from `package.json`.

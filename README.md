# Het Mehta — Portfolio

Personal portfolio site built with React, TypeScript, and Vite. Showcases my experience, skills, and projects, with links to live demos and source code.

**Live site:** https://hetmmehta.github.io/portfolio/

## Tech stack

- React 18 + TypeScript
- Vite
- Deployed via GitHub Actions → GitHub Pages

## Running the project locally

Clone the repo and run it yourself:

```bash
git clone https://github.com/hetmmehta/portfolio.git
cd portfolio
npm install
npm run dev
```

Then open the URL Vite prints (typically `http://localhost:5173`).

### Other commands

```bash
npm run build     # type-check and build a production bundle into dist/
npm run preview   # preview the production build locally
```

## Project structure

```
src/
  components/   UI sections (Nav, Hero, Skills, Experience, Projects, Education, Contact)
  data.ts       Content: profile info, skills, experience, and project list
  App.tsx       Page layout
```

To update content (add a project, tweak experience bullets, etc.), edit [src/data.ts](src/data.ts) — the components render straight from it.

## Deployment

Pushing to `main` triggers [.github/workflows/deploy.yml](.github/workflows/deploy.yml), which builds the site and publishes it to GitHub Pages automatically.

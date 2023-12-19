<h1 align="center">
  astro-template
</h1>

<p align="center">
  Opinionated GitHub template for astro projects.
</p>

## How to use

- Find and replace all references to `astro-template` in the next files:
  - [ ] `astro.config.ts`
  - [ ] `src/layouts/layout.astro`
  - [ ] `package.json`
  - [ ] `README.md`
  - [ ] `LICENSE`

## What includes

### 🛠️ Build tools

- **Bun**: runtime and package manager. It's incredibly fast.
- **TypeScript**: configured by default. Here we don't play with JavaScript.
- **ESLint**: for best standards and quality code. 
- **Renovate**: keep your dependencies up to date.

### 🎨 Styling

- **TailwindCSS**: Style your components with the best utility-first CSS framework.
- **Fontsource**: Personalized fonts with ease.
- **Lucide**: Awesome icons.

### 🚀 Astro

- ViewTransitions enabled by default.
- A bunch of useful astro plugins for SEO and performance.
  - `@astrojs/prefetch`: Prefetch links for faster navigation. 
  - `@astrojs/sitemap`: Generates a sitemap based on your pages.
  - `@vite-pwa/astro`: PWA support for your app.
  - `astro-compress`: Compress your HTML, CSS and JS.
  - `astro-robots-txt`: Generates a robots.txt file.
  - `astro-webmanifest`: Generates a web application manifest, favicon, icons and inserts appropriate html into `<head>`.

## Hexatool Code Quality Standards

Publishing this package we are committing ourselves to the following code quality standards:

- Respect **Semantic Versioning**: No breaking changes in patch or minor versions
- No surprises in transitive dependencies: Use the **bare minimum dependencies** needed to meet the purpose
- **One specific purpose** to meet without having to carry a bunch of unnecessary other utilities
- **Tests** as documentation and usage examples
- **Well documented README** showing how to install and use
- **License favoring Open Source** and collaboration

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

- Bun as runtime and package manager. It's incredibly fast.
- TypeScript configured by default. Here we don't play with JavaScript.
- `@hexatool/eslint-config` for best standards and quality code.
- Renovate configuration. Keep your dependencies up to date.
- Style your components with TailwindCSS.
- A bunch of useful astro plugins for SEO and performance.

## Hexatool Code Quality Standards

Publishing this package we are committing ourselves to the following code quality standards:

- Respect **Semantic Versioning**: No breaking changes in patch or minor versions
- No surprises in transitive dependencies: Use the **bare minimum dependencies** needed to meet the purpose
- **One specific purpose** to meet without having to carry a bunch of unnecessary other utilities
- **Tests** as documentation and usage examples
- **Well documented README** showing how to install and use
- **License favoring Open Source** and collaboration

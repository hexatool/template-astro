import prefetch from '@astrojs/prefetch';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import preact from '@astrojs/preact';
import pwa from '@vite-pwa/astro';
import { defineConfig } from 'astro/config';
import compress from 'astro-compress';
import robotsTxt from 'astro-robots-txt';
import webmanifest from 'astro-webmanifest';

export default defineConfig({
	// TODO: Replace me
	site: 'https://astro-template.com',
	integrations: [
		preact(),
		sitemap(),
		robotsTxt(),
		webmanifest({
			// TODO: Replace me
			name: 'Astro | Basic template',

			// TODO: Replace with your own icon
			icon: 'public/favicon.svg',

			// TODO: Replace me
			short_name: 'Astro template',
			description: 'Opinionated GitHub template for astro projects.',
			start_url: '/',
			theme_color: '#C6F118',
			background_color: '#FDFFF5',
			display: 'standalone',

			config: {
				insertAppleTouchLinks: true,
				insertThemeColorMeta: false,
			},
		}),
		prefetch(),
		compress(),
		tailwind(),
		pwa({
			includeAssets: ['fonts/**/*.otf', 'translations/**/*.json', 'fonts/**/*.woff2', '**/*.svg', '**/*.png'],
			registerType: 'autoUpdate',
			workbox: {
				globPatterns: ['**/*.{js,css,html,svg,png}'],
			},
		}),
	],
});

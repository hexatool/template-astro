import type { Config } from 'tailwindcss';


const config: Config = {
	darkMode: 'media',
	content: ['./src/**/*.{js,ts,jsx,tsx,mdx,astro}', '../node_modules/@mariomh/**/*.{js,ts,jsx,tsx,mdx,astro}'],
	theme: {
		extend: {
			// Tailwind css extensions
		},
	},
};

export default config;

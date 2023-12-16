import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';

const config: Config = {
	darkMode: 'media',
	content: ['./src/**/*.{js,ts,jsx,tsx,mdx,astro}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['InterVariable', 'Inter', ...defaultTheme.fontFamily.sans],
			},
		},
	},
};

export default config;

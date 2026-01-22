// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import catppuccin from "@catppuccin/starlight";

// https://astro.build/config
export default defineConfig({
	site: 'https://rengeos-wiki.vercel.app',
	integrations: [
		starlight({
			title: 'RengeOS wiki',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/RengeOS' }],
			plugins: [
        			catppuccin({
					dark: { flavor: "mocha", accent: "mauve" },
          				light: { flavor: "latte", accent: "mauve" },
       				})
      			],
			logo: {
        			src: './public/RengeOS-logo.svg',
				replacesTitle: false,
      			},
			favicon: './favicon.ico',
			customCss: [
        			'./src/styles/custom.css',
			],
			sidebar: [
				{
					label: 'About',
					items:[
						{ label: 'What is this?', slug: 'guides/example' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});

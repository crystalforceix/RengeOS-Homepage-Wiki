// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import catppuccin from "@catppuccin/starlight";

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'RengeOS docs',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/RengeOS' }],
			plugins: [
        			catppuccin({
					dark: { flavor: "mocha", accent: "mauve" },
          				light: { flavor: "latte", accent: "mauve" },
       				})
      			],
			logo: {
        			src: './public/favicon.svg',
      			},
			favicon: './public/favicon.svg',
			sidebar: [
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Example Guide', slug: 'guides/example' },
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

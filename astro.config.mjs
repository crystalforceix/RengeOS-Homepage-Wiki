// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightThemeGalaxy from 'starlight-theme-galaxy'
// https://astro.build/config
export default defineConfig({
	site: 'https://rengeos-wiki.vercel.app',
	integrations: [
		starlight({
			title: 'RengeOS',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/RengeOS' }],
			plugins: [
       		      starlightThemeGalaxy()
      			 ],
			logo: {
        			src: './public/RengeOS-logo.svg',
			replacesTitle: false,
      			},
			favicon: './favicon.ico',
			lastUpdated: true,
			customCss: [
        			'./src/styles/custom.css',
			],
			sidebar: [
				{
					label: 'Introduction',
					items:[
						{ label: 'Overview', slug: 'introduction/overview' },
					],
					collapsed: false,
				},
				{
					label: 'Getting Started',
					items:[
						{ label: 'Getting an ISO', slug: 'getting-started/getting-an-iso' },
						{ label: 'Create Bootable USB', slug: 'getting-started/create-bootable-usb' },
					],
					collapsed: false,
				},
				{
					label: 'Installation',
					items: [
						{ label: 'Automated Installation (Recommended)', slug: 'installation/automated-installation'},
						{ label: 'Manual Installation (Not Recommended By Author)', slug: 'installation/manual-installation'},
					],
					collapsed: false,
				},
				{
					label: 'Configuration',
					items: [
						{ label: 'Enable Bcachefs Rollback', slug: 'configuration/enable-bcachefs-rollback'},
					],
					collapsed: false,
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
					collapsed: true,
				},
			],
		}),
	],
});

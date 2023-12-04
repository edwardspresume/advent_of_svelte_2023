import { enhancedImages } from '@sveltejs/enhanced-img';
import { sveltekit } from '@sveltejs/kit/vite';
import { kitRoutes } from 'vite-plugin-kit-routes';
import { defineConfig } from 'vitest/config';

export default defineConfig({
	plugins: [
		enhancedImages(),
		sveltekit(),
		kitRoutes({
			format: 'object[path]'
		})
	],
	test: {
		globals: true,
		environment: 'jsdom',
		include: ['tests/**/*.{test,spec}.{js,ts}']
	}
});

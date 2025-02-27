import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";
import adapter from "@sveltejs/adapter-auto";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		outDir: ".svelte-kit",
		files: {
			routes: "src/routes",
		},
		adapter: adapter(),
	},
	preprocess: vitePreprocess(),
};

export default config;

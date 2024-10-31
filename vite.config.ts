import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import topLevelAwait from 'vite-plugin-top-level-await';
import wasm from 'vite-plugin-wasm';
export default defineConfig({
	plugins: [sveltekit(), topLevelAwait(), wasm()],
	server: {
		/* 		proxy: {
			'/index.js': 'http://127.0.0.1:8000',
			'/index.data': 'http://127.0.0.1:8000',
			'/index.wasm': 'http://127.0.0.1:8000',
			'/mem.hex': 'http://127.0.0.1:8000',
			'/firmware.hex': 'http://127.0.0.1:8000'
		}, */
		cors: {
			origin: '*',
			methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
			preflightContinue: false,
			optionsSuccessStatus: 204
		}
	}
});

import { PUBLIC_URL } from '$env/static/public';
import type { RequestHandler } from '@sveltejs/kit';
export const GET: RequestHandler = async ({ setHeaders }) => {
	const response = await fetch(`${PUBLIC_URL}/index.js`);

	setHeaders({
		'cache-control': 'max-age=60'
	});
	const headers = new Headers();
	headers.append('Access-Control-Allow-Methods', 'GET, OPTIONS');
	headers.append('Access-Control-Allow-Origin', '*');
	headers.append('Access-Control-Allow-Headers', '*');
	headers.append('Content-Type', 'text/javascript');
	headers.append('Cross-Origin-Embedder-Policy', 'require-corp');
	return new Response(await response.blob(), {
		headers
	});
};

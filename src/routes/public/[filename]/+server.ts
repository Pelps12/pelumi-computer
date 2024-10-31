// In /src/routes/public/[filename]/+server.ts

import type { RequestHandler } from './$types';

export const GET = (async ({ fetch, url, params }) => {
	const response = await fetch(new URL(`/__public/${params.filename}`, url.origin));

	const headers = new Headers();
	headers.append('Header-Key', 'header value');
	headers.append('Access-Control-Allow-Methods', 'GET, OPTIONS');
	headers.append('Access-Control-Allow-Origin', '*');
	headers.append('Access-Control-Allow-Headers', '*');
	return new Response(response.body, {
		headers: {
			name: 'value'
		}
	});
}) satisfies RequestHandler;

export const OPTIONS = (async ({ fetch, url, params }) => {
	const response = await fetch(new URL(`/__public/${params.filename}`, url.origin), {
		method: 'OPTIONS'
	});
	const headers = new Headers(response.headers);
	headers.append('Header-Key', 'header value');
	headers.append('Access-Control-Allow-Methods', 'GET, OPTIONS');
	headers.append('Access-Control-Allow-Origin', '*');
	headers.append('Access-Control-Allow-Headers', '*');

	return new Response(null, {
		headers
	});
}) satisfies RequestHandler;

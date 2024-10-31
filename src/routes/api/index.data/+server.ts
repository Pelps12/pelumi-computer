import type { RequestHandler } from '@sveltejs/kit';

export const GET: RequestHandler = async () => {
	const response = await fetch(`${'http://localhost:5173'}/index.data`);
	return new Response(await response.blob(), {
		headers: {
			'Cross-Origin-Embedder-Policy': 'require-corp',
			'Content-Type': 'text/javascript'
		}
	});
};

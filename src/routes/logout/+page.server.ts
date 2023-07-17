import { auth } from '$lib/server/auth';
import { redirect } from '@sveltejs/kit';
import type { RequestHandler } from '@sveltejs/kit';

export const POST: RequestHandler = async ({ locals }) => {
	const session = await locals.auth.validateUser();
	if (!session) throw redirect(302, '/');
	await auth.invalidateSession(session.sessionId);
	locals.auth.setSession(null);
	console.log('Logged out');
	throw redirect(302, '/');
};

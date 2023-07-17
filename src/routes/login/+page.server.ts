import type { PageServerLoad } from '../../../.svelte-kit/types/src/routes/$types';
import { fail, redirect } from '@sveltejs/kit';
import type { Actions } from '@sveltejs/kit';
import { auth } from '$lib/server/auth';

export const load: PageServerLoad = async ({ locals }) => {
	const { session } = await locals.auth.validateUser();
	console.log(session);
	if (session) throw redirect(302, '/');
};

export const actions: Actions = {
	default: async ({ request, locals }) => {
		const { username, password } = Object.fromEntries(await request.formData()) as {
			username: string;
			password: string;
		};

		if (!username || !password) {
			return fail(400, { message: 'Invalid request' });
		}

		try {
			const key = await auth.useKey('username', username, password);
			const session = await auth.createSession(key.userId);
			locals.auth.setSession(session);
			console.log(session);
		} catch (error) {
			console.log('Error creating session:', error);
			return fail(400, { message: 'Invalid username or password' });
		}
		throw redirect(302, '/');
	}
};

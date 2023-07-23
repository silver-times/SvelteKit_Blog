import type { PageServerLoad } from '../../../.svelte-kit/types/src/routes/$types';
import type { Actions } from '@sveltejs/kit';
import { fail, redirect } from '@sveltejs/kit';
import { auth } from '$lib/server/auth';

export const load: PageServerLoad = async ({ locals }) => {
	const { session } = await locals.auth.validateUser();
	if (session) throw redirect(302, '/');
	return {};
};

export const actions: Actions = {
	registerUser: async ({ request, locals }) => {
		const { name, username, password } = Object.fromEntries(await request.formData()) as {
			name: string;
			username: string;
			password: string;
		};

		if (!name || !username || !password) {
			return fail(400, { message: 'Invalid request' });
		}
		try {
			const user = await auth.createUser({
				primaryKey: {
					providerId: 'username',
					providerUserId: username,
					password
				},
				attributes: {
					name,
					username
				}
			});
			const session = await auth.createSession(user.userId);
			locals.auth.setSession(session);
		} catch {
			// username taken
			console.log('Username taken');
			return fail(400, { message: 'Username taken' });
		}

		throw redirect(302, '/login');
	}
};

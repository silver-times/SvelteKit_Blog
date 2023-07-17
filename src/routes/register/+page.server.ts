import type { PageServerLoad } from '../../../.svelte-kit/types/src/routes/$types';
import type { Actions } from '@sveltejs/kit';
import { fail, redirect } from '@sveltejs/kit';
import { auth } from '$lib/server/auth';

// export const load: PageServerLoad = async ({ locals }) => {
// 	const session = await locals.auth.validate();
// 	if (session) throw redirect(302, '/');
// };

export const actions: Actions = {
	registerUser: async ({ request }) => {
		const { name, username, password } = Object.fromEntries(await request.formData()) as {
			name: string;
			username: string;
			password: string;
		};

		if (!name || !username || !password) {
			return fail(400, { message: 'Invalid request' });
		}
		try {
			await auth.createUser({
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
		} catch {
			// username taken
			console.log('Username taken');
			return fail(400, { message: 'Username taken' });
		}

		throw redirect(302, '/login');
	}
};

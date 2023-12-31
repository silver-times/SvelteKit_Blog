import type { Actions } from '@sveltejs/kit';
import { prisma } from '$lib/server/prisma';
import { fail } from '@sveltejs/kit';
import type { PageServerLoad } from '../../.svelte-kit/types/src/routes/$types';

export const load: PageServerLoad = async ({ locals }) => {
	const { user } = await locals.auth.validateUser();

	return {
		articles: await prisma.article.findMany(),
		user
	};
};

export const actions: Actions = {
	createArticle: async ({ request }) => {
		const { title, content } = Object.fromEntries(await request.formData()) as {
			title: string;
			content: string;
		};

		if (!title || !content) {
			return fail(400, { message: 'Invalid request' });
		}

		try {
			await prisma.article.create({
				data: {
					title,
					content
				}
			});
		} catch (e) {
			console.error(e);
			return fail(500, { message: 'Failed to create article' });
		}

		return {
			status: 201
		};
	},

	deleteArticle: async ({ url }) => {
		const id = url.searchParams.get('id');
		if (!id) {
			return fail(400, { message: 'Invalid request' });
		}
		try {
			await prisma.article.delete({
				where: {
					id: Number(id)
				}
			});
		} catch (e) {
			console.error(e);
			return fail(500, { message: 'Failed to delete article' });
		}
		return {
			status: 200
		};
	}
};

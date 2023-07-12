import type { Actions } from '@sveltejs/kit';
import { prisma } from '$lib/server/prisma';
import { fail } from '@sveltejs/kit';
import type { PageServerLoad } from '../../.svelte-kit/types/src/routes/$types';

export const load: PageServerLoad = async () => {
	return {
		articles: await prisma.article.findMany()
	};
};

export const actions: Actions = {
	createArticle: async ({ request }) => {
		const { title, content } = Object.fromEntries(await request.formData()) as {
			title: string;
			content: string;
		};

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
	}
};

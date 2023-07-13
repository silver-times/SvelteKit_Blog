import type { PageServerLoad } from '../../../.svelte-kit/types/src/routes/$types';
import { error, fail, redirect } from '@sveltejs/kit';
import { prisma } from '$lib/server/prisma';
import type { Actions } from '@sveltejs/kit';

export const load: PageServerLoad = async ({ params }) => {
	const getArticle = async () => {
		const article = await prisma.article.findUnique({
			where: {
				id: Number(params.articleId)
			}
		});
		if (!article) {
			throw error(404, 'Article not found');
		}
		return article;
	};

	return {
		article: getArticle()
	};
};

export const actions: Actions = {
	editArticle: async ({ request, params }) => {
		const { title, content } = Object.fromEntries(await request.formData()) as {
			title: string;
			content: string;
		};
		try {
			await prisma.article.update({
				where: {
					id: Number(params.articleId)
				},
				data: {
					title,
					content
				}
			});
		} catch (e) {
			console.error(e);
			return fail(500, { message: 'Failed to update article' });
		}
		throw redirect(303, '/');
	}
};

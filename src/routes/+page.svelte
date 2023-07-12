<script lang="ts">
	import type { PageData } from '../../.svelte-kit/types/src/routes/$types';

	export let data: PageData;
	let articles = [];

	$: ({ articles } = data);
</script>

<div class="flex">
	<div class="flex w-full max-w-3xl mx-auto gap-2">
		<!-- Dummy Article Card -->
		<div class="flex flex-col">
			<h1 class="text-3xl p-4 font-extralight">ARTICLES</h1>
			{#each articles as article}
				<div class="card w-96 h-full p-5 bg-primary text-primary-content mb-4">
					<h2 class="card-title font-bold text-2xl py-2">{article.title}</h2>
					<p class="flex justify-center items-center">{article.content}</p>
					<div class="flex card-actions justify-end py-5">
						<button type="submit" class="btn btn-warning">Edit</button>
						<form action="?/deleteArticle&id={article.id}" method="POST">
							<button class="btn btn-error">Delete</button>
						</form>
					</div>
				</div>
			{/each}
		</div>

		<!-- Form -->
		<div class="w-1/2 p-4">
			<form action="?/createArticle" method="POST" class="w-full max-w-sm mx-auto">
				<div>
					<h1 class="text-3xl mb-4 font-extralight">SUBMIT NEW ARTICLE</h1>
					<input
						class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
						placeholder="Article title"
						type="text"
						id="title"
						name="title"
					/>
					<textarea
						rows={10}
						class="w-full px-3 py-2 my-5 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
						placeholder="Article content"
						id="content"
						name="content"
					/>
				</div>
				<button
					type="submit"
					class="w-full bg-indigo-500 text-white py-2 rounded-md hover:bg-indigo-600"
				>
					Submit
				</button>
			</form>
		</div>
	</div>
</div>

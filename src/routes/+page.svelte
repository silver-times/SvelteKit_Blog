<script lang="ts">
	import type { PageData } from '../../.svelte-kit/types/src/routes/$types';
	import { enhance } from '$app/forms';

	export let data: PageData;
	let articles;
	let user;

	$: ({ articles, user } = data);
</script>

<div class="flex justify-around mx-auto">
	<!-- Dummy Article Card -->
	<div class="flex flex-col w-full px-5">
		<div class="flex justify-between items-center">
			<h2 class="text-3xl p-4 font-extralight text-black">ARTICLES</h2>
			{#if user}
				<div>
					<button
						type="submit"
						class="btn bg-[#4A55A2] text-white hover:bg-white hover:text-black mr-2"
						>All articles</button
					>
					<button type="submit" class="btn bg-[#4A55A2] text-white hover:bg-white hover:text-black"
						>My Articles</button
					>
				</div>
			{/if}
		</div>
		{#each articles as article}
			<div class="card w-full p-5 bg-[#A0BFE0] text-black mb-4">
				<h2 class="card-title font-bold text-2xl py-2 uppercase">{article.title}</h2>
				<p class="break-words">
					{article.content}
				</p>
				<div class="flex justify-between items-center">
					<div>
						<p class="text-sm text-black uppercase font-extrabold">Created by: Rajat Sharma</p>
					</div>
					<div class="flex card-actions justify-end py-5">
						<a href="/{article.id}"
							><button
								type="submit"
								class="btn bg-[#4A55A2] text-white hover:bg-white hover:text-black">Edit</button
							></a
						>
						<form action="?/deleteArticle&id={article.id}" method="POST" use:enhance>
							<button class="btn bg-[#4A55A2] text-white hover:bg-white hover:text-black"
								>Delete</button
							>
						</form>
					</div>
				</div>
			</div>
		{/each}
	</div>

	<!-- Form -->
	{#if user}
		<div class="w-1/3 p-4">
			<form action="?/createArticle" method="POST" class="w-full max-w-sm mx-auto" use:enhance>
				<div>
					<h2 class="text-3xl mb-4 font-extralight text-black">SUBMIT NEW ARTICLE</h2>
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
					class="w-full py-4 rounded-md btn bg-[#4A55A2] text-white hover:bg-white hover:text-black"
				>
					Submit
				</button>
			</form>
		</div>
	{/if}
</div>

<script lang="ts">
	import type { enhance } from '$app/forms';
	import type { PageData } from '../../../.svelte-kit/types/src/routes/$types';

	export let data: PageData;

	$: ({ article } = data);
</script>

<div class="w-full p-4">
	<form action="?/editArticle" method="POST" class="w-1/2 mx-auto" use:enhance>
		<div>
			<h2 class="text-3xl mb-4 font-extralight text-black">EDIT ARTICLE</h2>
			<input
				class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
				placeholder="Article title"
				type="text"
				id="title"
				name="title"
				value={article.title}
			/>
			<textarea
				rows={10}
				class="w-full px-3 py-2 my-5 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
				placeholder="Article content"
				id="content"
				name="content"
				value={article.content}
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

<script lang="ts">
	let articles = [
		{
			title: 'Article 1',
			content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates.'
		},
		{
			title: 'Article 1',
			content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates.'
		},
		{
			title: 'Article 1',
			content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates.'
		},
		{
			title: 'Article 1',
			content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates.'
		}
	];
</script>

<div class="flex">
	<div class="flex w-full max-w-3xl mx-auto gap-2">
		<!-- Dummy Article Card -->
		<div class="flex flex-col">
			{#each articles as article}
				<div class="card w-96 h-full p-5 bg-primary text-primary-content mb-4">
					<h2 class="card-title font-bold text-2xl py-2">{article.title}</h2>
					<p class="flex justify-center items-center">{article.content}</p>
					<div class="flex card-actions justify-end py-5">
						<button class="btn">Edit</button>
						<button class="btn">Delete</button>
					</div>
				</div>
			{/each}
		</div>

		<!-- Form -->
		<div class="w-1/2 p-4">
			<form class="w-full max-w-sm mx-auto">
				<div>
					<h1 class="text-4xl py-4">Submit new article</h1>
					<input
						class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
						placeholder="Article title"
					/>
					<textarea
						rows={5}
						class="w-full px-3 py-2 my-5 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
						placeholder="Article content"
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

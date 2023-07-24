<script lang="ts">
	import '../app.css';
	import type { PageData } from './$types';

	let user;
	export let data: PageData;
	$: ({ user } = data);
</script>

<div class="flex flex-col min-h-screen">
	<div class="flex justify-between navbar bg-[#4A55A2] text-primary-content mx-auto px-5">
		<div class="flex gap-1">
			<a href="/" class="material-symbols-outlined text-5xl">menu_book</a>
			<a href="/" class="p-0">
				<h1 class="text-3xl uppercase">SvelteKit-Blog</h1>
			</a>
		</div>

		{#if user?.name}
			<a href="/"><h2 class="text-xl hover:text-gray-200">Hello, {user.name}</h2></a>
		{/if}

		<div class="flex-none">
			<ul class="flex gap-5 px-1">
				{#if !user?.name}
					<li><a href="/register" class="text-md uppercase hover:text-gray-200">Register</a></li>
					<li><a href="/login" class="text-md uppercase hover:text-gray-200">Login</a></li>
				{:else}
					<li><a href="/profile" class="text-md uppercase hover:text-gray-200">Profile</a></li>
					<li><a href="/logout" class="text-md uppercase hover:text-gray-200">Logout</a></li>
				{/if}
			</ul>
		</div>
	</div>

	<slot />

	<footer class="footer footer-center p-4 bg-[#4A55A2] text-primary-content mt-auto">
		<div>
			<p>Copyright © 2023 - All rights reserved by Rajat Sharma</p>
		</div>
	</footer>
</div>

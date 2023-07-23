<script lang="ts">
	import '../app.css';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<div class="flex flex-col min-h-screen">
	<div class="navbar bg-[#4A55A2] text-primary-content mx-auto px-5">
		<div class="flex-1 gap-1">
			<a href="/" class="material-symbols-outlined text-5xl">menu_book</a>
			<a href="/" class="p-0">
				<h1 class="text-3xl uppercase">SvelteKit-Blog</h1>
			</a>
		</div>
		<div class="flex-none">
			<ul class="flex gap-5 px-1">
				<li><a href="/register" class="text-md uppercase hover:text-gray-200">Register</a></li>
				<li><a href="/login" class="text-md uppercase hover:text-gray-200">Login</a></li>

				<li><a href="/profile" class="text-md uppercase hover:text-gray-200">Profile</a></li>
				<li><a href="/logout" class="text-md uppercase hover:text-gray-200">Logout</a></li>
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

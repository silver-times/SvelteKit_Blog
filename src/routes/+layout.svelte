<script>
	import '../app.css';
</script>

<div class="flex flex-col min-h-screen">
	<div class="navbar bg-primary text-primary-content mx-auto px-5">
		<div class="flex-1 gap-1">
			<a href="/" class="material-symbols-outlined text-5xl">menu_book</a>
			<a href="/" class="p-0">
				<h1 class="text-3xl uppercase">SvelteKit-Blog</h1>
			</a>
		</div>
		<div class="flex-none">
			<ul class="menu menu-horizontal px-1">
				<li><a class="bg-sky-500 hover:bg-white">Profile</a></li>
				<li><a>Logout</a></li>
			</ul>
		</div>
	</div>

	<slot />

	<footer class="footer footer-center p-4 bg-primary text-primary-content mt-auto">
		<div>
			<p>Copyright © 2023 - All rights reserved by Rajat Sharma</p>
		</div>
	</footer>
</div>

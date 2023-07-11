<script>
	import '../app.css';
</script>

<div class="navbar bg-base-100 mx-auto px-5">
	<div class="flex-1">
		<a class="btn btn-ghost normal-case text-xl">SvelteKit-Blog</a>
	</div>
	<div class="flex-none">
		<ul class="menu menu-horizontal px-1">
			<li><a>Profile</a></li>
			<li><a>Logout</a></li>
		</ul>
	</div>
</div>
<slot />

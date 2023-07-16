<div class="w-1/4 mx-auto p-8 bg-white rounded-lg shadow-md mt-5">
	<h2 class="text-4xl text-[#4A55A2] font-bold mb-4 text-center uppercase">Login</h2>
	<form action="?/loginUser" method="POST">
		<div class="mb-4">
			<input
				type="text"
				id="username"
				name="username"
				placeholder="Enter your username"
				class="form-input w-full p-3 rounded-lg"
			/>
		</div>
		<div class="mb-4">
			<input
				type="password"
				id="password"
				name="password"
				placeholder="Enter your password"
				class="form-input w-full p-3 rounded-lg"
			/>
		</div>
		<button
			type="submit"
			class="w-full py-4 rounded-md btn bg-[#4A55A2] text-white hover:bg-white hover:text-black"
		>
			Login
		</button>
	</form>
	<p class="mt-5 text-lg text-center text-black font-medium">
		Don't have an account? <a href="/register" class="text-[#4A55A2]">Register</a>
	</p>
</div>

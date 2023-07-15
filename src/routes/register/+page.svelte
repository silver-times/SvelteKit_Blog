<div class="w-1/4 mx-auto p-8 bg-white rounded-lg shadow-md mt-5">
	<h2 class="text-4xl text-[#4A55A2] font-bold mb-4 text-center uppercase">Register</h2>
	<form method="POST">
		<div class="mb-4">
			<input
				type="text"
				id="name"
				name="name"
				placeholder="Enter your name"
				class="form-input w-full p-3 rounded-lg"
			/>
		</div>
		<div class="mb-4">
			<input
				type="email"
				id="email"
				name="email"
				placeholder="Enter your email"
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
			Submit details
		</button>
	</form>
	<p class="mt-5 text-lg text-center text-black font-medium">
		Already have an account? <a href="/login" class="text-xl text-[#4A55A2] font-extrabold">Login</a
		>
	</p>
</div>

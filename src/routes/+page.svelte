<script lang="ts">
	import { signIn, signOut } from '@auth/sveltekit/client';
	import { page } from '$app/stores';
</script>

<div class="h-screen flex flex-col gap-y-3 items-center justify-center">
	<div>
		<h1>welcome to the new and fresh LSAC</h1>
	</div>
	<div>
		{#if $page.data.session}
			<a href="/lsac">
				<button type="button" class="border border-gray-200 py-1 px-7 hover:bg-gray-200">
					your links
				</button></a
			>
			<button
				type="button"
				class="border border-gray-200 py-1 px-7 hover:bg-gray-200"
				on:click={() => signOut()}>sign out</button
			>
		{:else}
			<p>sign in to see your links</p>
			<button
				type="button"
				class="border border-gray-200 py-1 px-7 hover:bg-gray-200"
				on:click={() =>
					signIn('google', {
						callbackUrl: '/lsac'
					})}>sign in</button
			>
		{/if}
	</div>
</div>

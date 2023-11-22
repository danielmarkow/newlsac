<script lang="ts">
	import { signIn, signOut } from '@auth/sveltekit/client';
	import { page } from '$app/stores';
</script>

<h1>welcome to the new and fresh LSAC</h1>
{#if $page.data.session}
	<button type="button" on:click={() => signOut()}>Sign Out</button>
{:else}
	<p>sign in to see your links</p>
	<button
		type="button"
		on:click={() =>
			signIn('google', {
				callbackUrl: '/lsac'
			})}>Sign In</button
	>
{/if}

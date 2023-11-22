<script lang="ts">
	import { enhance } from '$app/forms';
	import type { PageData } from '../$types';

	export let data: PageData;
</script>

<h1 class="text-lg">hello lsac</h1>
<form method="POST" action="?/createlink" use:enhance>
	<div>
		<label for="linkUrl" class="block"> url </label>
		<input type="url" id="linkUrl" name="linkUrl" required class="border border-gray-200 p-1" />
	</div>
	<div>
		<label for="comment" class="block"> comment </label>
		<textarea id="comment" name="comment" class="border border-gray-200 p-1" />
	</div>
	<button
		type="submit"
		formaction="?/createlink"
		class="border border-gray-200 py-1 px-2 hover:bg-gray-200">save</button
	>
</form>
<div>
	{#if data.userLinks.length === 0}
		<p>no links yet</p>
	{:else}
		<ul>
			{#each data.userLinks as link}
				<li>{link.linkUrl}, {link.comment}</li>
			{/each}
		</ul>
	{/if}
</div>

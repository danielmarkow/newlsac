<script lang="ts">
	import { enhance } from '$app/forms';
	import type { PageData } from '../$types';

	export let data: PageData;
</script>

<h1 class="text-lg">hello lsac</h1>
<form method="POST" action="?/createlink" use:enhance>
	<div>
		<label for="linkUrl" class="block"> url </label>
		<input
			type="url"
			id="linkUrl"
			name="linkUrl"
			required
			class="w-full border border-gray-300 p-1"
		/>
	</div>
	<div>
		<label for="comment" class="block"> comment </label>
		<textarea id="comment" name="comment" class="w-full border border-gray-300 p-1" />
	</div>
	<div class="h-1" />
	<button
		type="submit"
		formaction="?/createlink"
		class="border border-gray-300 py-1 px-7 hover:bg-gray-200">save</button
	>
</form>
<div>
	{#if data.userLinks.length === 0}
		<p>no links yet</p>
	{:else}
		<ul>
			{#each data.userLinks as link}
				<li class="flex justify-between py-1">
					<div>
						<span class="block">{link.comment}</span>
						<a href={link.linkUrl} class="text-sm text-gray-600">{link.linkUrl}</a>
					</div>
					<div class="">
						<form method="POST" action="?/deletelink" use:enhance>
							<input type="hidden" name="linkId" value={link.id} />
							<button type="submit" formaction="?/deletelink">❌</button>
						</form>
					</div>
				</li>
			{/each}
		</ul>
	{/if}
</div>

<script lang="ts">
	import { enhance } from '$app/forms';
</script>

<h1>hello lsac</h1>
<form method="POST" action="?/createlink" use:enhance>
	<div>
		<label for="linkUrl"> url </label>
		<input type="url" id="linkUrl" name="linkUrl" required />
	</div>
	<div>
		<label for="comment"> comment </label>
		<textarea id="comment" name="comment" />
	</div>
	<button type="submit" formaction="?/createlink">save</button>
</form>

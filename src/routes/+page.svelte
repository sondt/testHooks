<script lang="ts">
	import { onMount } from 'svelte';
	import type { PageData } from './$types';
	export let data: PageData;	
</script>

<h1>home page</h1>
{#if data.articles}
	{#each data.articles as article}
		<div>
			<p>{article.id} - {article.title}</p>
		</div>
	{/each}
{/if}

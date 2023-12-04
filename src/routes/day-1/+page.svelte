<script lang="ts">
	import type { PageData } from './$types';

	import { writable } from 'svelte/store';

	import ChildrenStatisticsSection from '$components/ChildrenStatisticsSection.svelte';
	import H1 from '$components/H1.svelte';

	export let data: PageData;

	const naughty_or_nice_list_store = writable(data.naughty_or_nice_list);

	$: nicestChild = $naughty_or_nice_list_store
		.filter((child) => child.category === 'nice')
		.reduce((previous, current) => {
			if (current.tally > previous.tally) {
				return current;
			}
			return previous;
		});

	$: naughtiestChild = $naughty_or_nice_list_store
		.filter((child) => child.category === 'naughty')
		.reduce((previous, current) => {
			if (current.tally < previous.tally) {
				return current;
			}
			return previous;
		});
</script>

<H1>Day 1</H1>

{#if $naughty_or_nice_list_store.length === 0}
	<p class="text-center">You haven't added any children yet.</p>
{:else}
	<ChildrenStatisticsSection
		{nicestChild}
		{naughtiestChild}
		totalChildren={$naughty_or_nice_list_store.length}
	/>
{/if}

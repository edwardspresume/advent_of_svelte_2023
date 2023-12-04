<script lang="ts">
	import type { PageData } from './$types';

	import { writable } from 'svelte/store';

	import H1 from '$components/H1.svelte';
	import ChildrenStatisticsSection from './components/ChildrenStatisticsSection.svelte';
	import NaughtyAndNiceTable from './components/NaughtyAndNiceTable.svelte';

	export let data: PageData;

	const naughty_and_nice_list_store = writable(data.naughty_and_nice_list);

	$: nicestChild = $naughty_and_nice_list_store
		.filter((child) => child.category === 'nice')
		.reduce((previous, current) => {
			if (current.tally > previous.tally) {
				return current;
			}
			return previous;
		});

	$: naughtiestChild = $naughty_and_nice_list_store
		.filter((child) => child.category === 'naughty')
		.reduce((previous, current) => {
			if (current.tally < previous.tally) {
				return current;
			}
			return previous;
		});
</script>

<H1>Day 1</H1>

{#if $naughty_and_nice_list_store.length === 0}
	<p class="text-center">You haven't added any children yet.</p>
{:else}
	<ChildrenStatisticsSection
		{nicestChild}
		{naughtiestChild}
		totalChildren={$naughty_and_nice_list_store.length}
	/>

	<NaughtyAndNiceTable data={$naughty_and_nice_list_store} />
{/if}

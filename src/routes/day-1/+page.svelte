<script lang="ts">
	import { writable } from 'svelte/store';
	import type { PageData } from './$types';

	import H1 from '$components/H1.svelte';
	import InputField from '$components/form/InputField.svelte';
	import Button from '$components/ui/button/button.svelte';
	import ChildrenStatisticsSection from './lib/components/ChildrenStatisticsSection.svelte';
	import NaughtyAndNiceTable from './lib/components/NaughtyAndNiceTable.svelte';

	export let data: PageData;

	const naughty_and_nice_list_store = writable(data.naughty_and_nice_list);

	$: nicestChild = $naughty_and_nice_list_store.sort((a, b) => b.tally - a.tally)[0];
	$: naughtiestChild = $naughty_and_nice_list_store.sort((a, b) => a.tally - b.tally)[0];

	let newChildName: string;
	let newChildTally: number = 210;

	function addChild() {
		$naughty_and_nice_list_store = [
			...$naughty_and_nice_list_store,
			{
				name: newChildName,
				tally: newChildTally,
				category: newChildTally >= 0 ? 'nice' : 'naughty'
			}
		];
	}
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

	<div class="flex justify-between gap-2">
		<form
			class="grid items-center gap-2 mb-4 grid-cols-[repeat(auto-fit,minmax(200px,1fr))]"
			on:submit|preventDefault={addChild}
		>
			<InputField type="text" placeholder="Name" bind:value={newChildName} />

			<Button size="sm" class="w-full" type="submit">Add Child</Button>
		</form>

		<Button on:click={() => ($naughty_and_nice_list_store = data.naughty_and_nice_list)}>
			Reset
		</Button>
	</div>

	<NaughtyAndNiceTable {naughty_and_nice_list_store} />
{/if}

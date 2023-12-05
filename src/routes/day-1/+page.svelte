<script lang="ts">
	import { writable } from 'svelte/store';
	import type { PageData } from './$types';

	import { toast } from 'svelte-sonner';

	import H1 from '$components/H1.svelte';
	import InputField from '$components/form/InputField.svelte';
	import Button from '$components/ui/button/button.svelte';
	import ChildrenStatisticsSection from './lib/components/ChildrenStatisticsSection.svelte';
	import NaughtyAndNiceTable from './lib/components/NaughtyAndNiceTable.svelte';

	export let data: PageData;

	const naughty_and_nice_list_store = writable(data.naughty_and_nice_list);

	$: nicestChild = [...$naughty_and_nice_list_store].sort((a, b) => b.tally - a.tally)[0];
	$: naughtiestChild = [...$naughty_and_nice_list_store].sort((a, b) => a.tally - b.tally)[0];

	let newChildName: string;
	let newChildTally: string;
	let addedByYou = 0;

	function addChild() {
		$naughty_and_nice_list_store = [
			...$naughty_and_nice_list_store,
			{
				name: newChildName,
				tally: +newChildTally,
				category: +newChildTally >= 0 ? 'nice' : 'naughty'
			}
		];

		addedByYou += 1;

		toast.success(`Added ${newChildName} to the list!`);

		newChildName = '';
		newChildTally = '';
	}
</script>

<H1>Day 1</H1>

{#if $naughty_and_nice_list_store.length === 0}
	<p class="text-center">You haven't added any children yet.</p>
{:else}
	<div class="grid gap-8">
		<ChildrenStatisticsSection
			{addedByYou}
			{nicestChild}
			{naughtiestChild}
			totalChildren={$naughty_and_nice_list_store.length}
		/>

		<section class="flex flex-col justify-between gap-3 sm:flex-row">
			<form
				class="flex flex-col w-full gap-3 sm:flex-row sm:items-center"
				on:submit|preventDefault={addChild}
			>
				<InputField type="text" placeholder="Name" bind:value={newChildName} required />
				<InputField type="number" placeholder="Tally" bind:value={newChildTally} required />

				<Button size="sm" type="submit">Add Child</Button>
			</form>

			<Button
				on:click={() => {
					addedByYou = 0;
					$naughty_and_nice_list_store = data.naughty_and_nice_list;
				}}
			>
				Reset
			</Button>
		</section>

		<NaughtyAndNiceTable {naughty_and_nice_list_store} />
	</div>
{/if}

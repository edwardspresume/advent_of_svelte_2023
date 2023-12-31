<script context="module" lang="ts">
	import { writable } from 'svelte/store';
	import type { NaughtyOrNiceEntry } from './lib/types';

	export const childListStore = writable<NaughtyOrNiceEntry[]>([]);
</script>

<script lang="ts">
	import type { PageData } from './$types';

	import { toast } from 'svelte-sonner';

	import H1 from '$components/H1.svelte';
	import InputField from '$components/form/InputField.svelte';
	import Button from '$components/ui/button/button.svelte';
	import ChildListTable from './lib/components/ChildListTable.svelte';
	import ChildrenStatisticsSection from './lib/components/ChildrenStatisticsSection.svelte';

	export let data: PageData;

	childListStore.set(data.childList);

	$: nicestChild = [...$childListStore].sort((a, b) => b.tally - a.tally)[0];
	$: naughtiestChild = [...$childListStore].sort((a, b) => a.tally - b.tally)[0];

	let newChildName: string;
	let newChildTally: string;
	let addedByYou = 0;

	function addChild() {
		$childListStore = [
			...$childListStore,
			{
				id: crypto.randomUUID(),
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

<H1>Day 1: Naughty Or Nice</H1>

{#if $childListStore.length === 0}
	<p class="text-center">You haven't added any children yet.</p>
{:else}
	<div class="grid gap-8">
		<ChildrenStatisticsSection
			{addedByYou}
			{nicestChild}
			{naughtiestChild}
			totalChildren={$childListStore.length}
		/>

		<section class="flex flex-col justify-between gap-3 sm:flex-row">
			<form
				class="flex flex-col w-full gap-3 sm:flex-row sm:items-center"
				on:submit|preventDefault={addChild}
			>
				<InputField required type="text" placeholder="Child's name" bind:value={newChildName} />
				<InputField required type="number" placeholder="Child's tally" bind:value={newChildTally} />

				<Button size="sm" type="submit">Add Child</Button>
			</form>

			<Button
				on:click={() => {
					addedByYou = 0;
					$childListStore = data.childList;
				}}
			>
				Reset
			</Button>
		</section>

		<ChildListTable />
	</div>
{/if}

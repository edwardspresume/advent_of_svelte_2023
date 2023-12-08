<script context="module" lang="ts">
	import { writable } from 'svelte/store';
	import type { ChildGiftType } from './lib/types';

	export const childrenGiftsStore = writable<ChildGiftType[]>([]);
</script>

<script lang="ts">
	import type { PageData } from './$types';

	import H1 from '$components/H1.svelte';
	import Button from '$components/ui/button/button.svelte';
	import GiftStatisticsSection from './lib/components/GiftStatisticsSection.svelte';

	export let data: PageData;

	childrenGiftsStore.set(data.childrenGifts);

	$: totalChildren = $childrenGiftsStore.length;
	$: totalWeight = Number(
		$childrenGiftsStore.reduce((acc, curr) => acc + curr.weight, 0).toFixed(2)
	);

	let tripsCreated = 0;
	let isShowingStatus = false;
</script>

<H1>Day 3: Sled Load Balancer</H1>

<Button class="mb-5" on:click={() => (isShowingStatus = !isShowingStatus)}>
	{#if isShowingStatus}
		Hide Status
	{:else}
		Show Status
	{/if}
</Button>

{#if isShowingStatus}
	<GiftStatisticsSection {totalChildren} {totalWeight} {tripsCreated} />
{/if}

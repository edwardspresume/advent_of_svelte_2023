<script lang="ts">
	import Card from '$components/Card.svelte';

	export let totalChildren: number;
	export let totalWeight: number;
	export let tripsCreated: number;
</script>

<section class="grid gap-6 grid-cols-[repeat(auto-fit,minmax(220px,1fr))]">
	<Card>
		<svelte:fragment slot="title">Total Children</svelte:fragment>

		<svelte:fragment slot="icon">
			<iconify-icon icon="twemoji:wrapped-gift" width="22"></iconify-icon>
		</svelte:fragment>

		<svelte:fragment slot="data">{totalChildren}</svelte:fragment>

		<svelte:fragment slot="dataDescription">Children waiting for gifts</svelte:fragment>
	</Card>

	<Card>
		<svelte:fragment slot="title">Total Weight</svelte:fragment>

		<svelte:fragment slot="icon">
			<iconify-icon icon="majesticons:scale-light" width="24" class="text-red-500"></iconify-icon>
		</svelte:fragment>

		<svelte:fragment slot="data">{totalWeight}</svelte:fragment>

		<svelte:fragment slot="dataDescription">Total Weight of gifts for the children</svelte:fragment>
	</Card>

	<Card>
		<svelte:fragment slot="title">Trips Created</svelte:fragment>

		<svelte:fragment slot="icon">
			<iconify-icon icon="material-symbols:travel" class="text-blue-500" width="30"></iconify-icon>
		</svelte:fragment>

		<svelte:fragment slot="data">{tripsCreated}</svelte:fragment>

		<svelte:fragment slot="dataDescription">Trips created by you</svelte:fragment>
	</Card>
</section>

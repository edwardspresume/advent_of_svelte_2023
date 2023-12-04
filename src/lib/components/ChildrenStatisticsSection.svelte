<script>
	import Card from '$components/Card.svelte';
</script>

<section class="grid gap-6 mb-10 grid-cols-[repeat(auto-fit,minmax(220px,1fr))]">
	<Card>
		<svelte:fragment slot="title">Total Children</svelte:fragment>

		<svelte:fragment slot="icon">
			<iconify-icon icon="teenyicons:circle-solid" class="text-blue-500"></iconify-icon>
		</svelte:fragment>

		<svelte:fragment slot="data">100</svelte:fragment>
	</Card>

	<Card>
		<svelte:fragment slot="title">Nicest Child</svelte:fragment>

		<svelte:fragment slot="icon">
			<iconify-icon icon="noto:baby-angel"></iconify-icon>
		</svelte:fragment>

		<svelte:fragment slot="data">100</svelte:fragment>
	</Card>

	<Card>
		<svelte:fragment slot="title">Naughtiest Child</svelte:fragment>

		<svelte:fragment slot="icon">
			<iconify-icon icon="fxemoji:devilhorns"></iconify-icon>
		</svelte:fragment>

		<svelte:fragment slot="data">100</svelte:fragment>
	</Card>

	<Card>
		<svelte:fragment slot="title">Added by You</svelte:fragment>

		<svelte:fragment slot="icon">
			<iconify-icon icon="gala:add" class="text-green-500"></iconify-icon>
		</svelte:fragment>

		<svelte:fragment slot="data">0</svelte:fragment>
	</Card>
</section>

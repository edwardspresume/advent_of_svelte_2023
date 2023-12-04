<script lang="ts">
	import type { PageData } from './$types';

	import * as Table from '$components/ui/table';

	import Card from '$components/Card.svelte';
	import H1 from '$components/H1.svelte';

	export let data: PageData;

	const { nice, naughty } = data.naughty_or_nice_list;

	const lists = [
		{ list: nice, title: 'Nice children', color: 'green' },
		{ list: naughty, title: 'Naughty children', color: 'red' }
	];
</script>

<H1>Day 1</H1>
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

<div class="flex flex-wrap justify-around gap-8">
	{#each lists as { list, title, color }}
		<section class={color === 'green' ? 'text-green-700' : 'text-red-700'}>
			<h2 class="mb-3 text-xl font-bold">
				{title}
			</h2>
			<Table.Root class="w-fit">
				<Table.Header>
					<Table.Row>
						<Table.Head class="w-1">#</Table.Head>
						<Table.Head class="w-[100px]">Name</Table.Head>
						<Table.Head>Tally</Table.Head>
					</Table.Row>
				</Table.Header>
				<Table.Body>
					{#each list as { name, tally }, index}
						<Table.Row class={color === 'green' ? 'hover:bg-green-700/20' : 'hover:bg-red-700/20'}>
							<Table.Cell class="font-medium">{index + 1}</Table.Cell>
							<Table.Cell class="font-medium">{name}</Table.Cell>
							<Table.Cell>{tally}</Table.Cell>
						</Table.Row>
					{/each}
				</Table.Body>
			</Table.Root>
		</section>
	{/each}
</div>

<style>
</style>

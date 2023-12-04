<script lang="ts">
	import type { PageData } from './$types';

	import * as Table from '$components/ui/table';

	import H1 from '$components/H1.svelte';

	export let data: PageData;

	const { nice, naughty } = data.naughty_or_nice_list;

	const lists = [
		{ list: nice, title: 'Nice children', color: 'green' },
		{ list: naughty, title: 'Naughty children', color: 'red' }
	];
</script>

<H1>Day 1</H1>

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

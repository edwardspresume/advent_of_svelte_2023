<script lang="ts">
	import type { PageData } from './$types';

	import * as Table from '$lib/components/ui/table';

	import H1 from '$components/H1.svelte';

	export let data: PageData;

	const { nice, naughty } = data.naughty_or_nice_list;

	const niceList = nice.sort((a, b) => b.tally - a.tally);
	const naughtyList = naughty.sort((a, b) => a.tally - b.tally);
</script>

<H1>Day 1</H1>
<div class="flex justify-between gap-2">
	{#each [{ list: niceList, title: 'Nice children', color: 'green' }, { list: naughtyList, title: 'Naughty children', color: 'red' }] as { list, title, color }}
		<section>
			<h2 class="mb-3 text-xl font-bold text-{color}-700">{title}</h2>
			<Table.Root class="w-fit">
				<Table.Caption>A list of {title.toLowerCase()}</Table.Caption>
				<Table.Header>
					<Table.Row>
						<Table.Head class="w-1">#</Table.Head>
						<Table.Head class="w-[100px]">Name</Table.Head>
						<Table.Head>Tally</Table.Head>
					</Table.Row>
				</Table.Header>
				<Table.Body>
					{#each list as { name, tally }, index}
						<Table.Row class="hover:bg-{color}-700/20">
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

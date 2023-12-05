<script lang="ts">
	import { createTable, Render, Subscribe } from 'svelte-headless-table';
	import { addPagination, addSortBy, addTableFilter } from 'svelte-headless-table/plugins';

	import InputField from '$components/form/InputField.svelte';
	import Button from '$components/ui/button/button.svelte';
	import * as Table from '$components/ui/table';
	import { ArrowUpDown } from 'lucide-svelte';
	import TablePagination from './TablePagination.svelte';

	export let childListStore;

	const table = createTable(childListStore, {
		page: addPagination(),
		sort: addSortBy({
			toggleOrder: ['asc', 'desc']
		}),
		filter: addTableFilter({
			fn: ({ filterValue, value }) => value.toLowerCase().includes(filterValue.toLowerCase())
		})
	});

	const columns = table.createColumns([
		table.column({
			accessor: 'name',
			header: 'Name'
		}),
		table.column({
			accessor: 'category',
			header: 'Category',
			plugins: {
				filter: {
					exclude: true
				}
			}
		}),
		table.column({
			accessor: 'tally',
			header: 'Tally',
			plugins: {
				filter: {
					exclude: true
				}
			}
		})
	]);

	const { headerRows, pageRows, tableAttrs, tableBodyAttrs, pluginStates } =
		table.createViewModel(columns);

	const { hasNextPage, hasPreviousPage, pageIndex, pageSize, pageCount } = pluginStates.page;
	const { filterValue } = pluginStates.filter;
</script>

<div class="border rounded-md">
	<div class="flex items-center p-4">
		<InputField placeholder="Filter name..." type="text" bind:value={$filterValue} />
	</div>

	<div class="overflow-auto max-h-[578px]">
		<Table.Root {...$tableAttrs}>
			<Table.Header>
				{#each $headerRows as headerRow}
					<Subscribe rowAttrs={headerRow.attrs()}>
						<Table.Row>
							{#each headerRow.cells as cell (cell.id)}
								<Subscribe attrs={cell.attrs()} let:attrs props={cell.props()} let:props>
									<Table.Head {...attrs}>
										<Button variant="ghost" on:click={props.sort.toggle}>
											<Render of={cell.render()} />
											<ArrowUpDown class={'ml-2 h-4 w-4'} />
										</Button>
									</Table.Head>
								</Subscribe>
							{/each}
						</Table.Row>
					</Subscribe>
				{/each}
			</Table.Header>
			<Table.Body {...$tableBodyAttrs}>
				{#each $pageRows as row (row.id)}
					<Subscribe rowAttrs={row.attrs()} let:rowAttrs>
						<Table.Row {...rowAttrs}>
							{#each row.cells as cell (cell.id)}
								<Subscribe attrs={cell.attrs()} let:attrs>
									<Table.Cell {...attrs}>
										<Render of={cell.render()} />
									</Table.Cell>
								</Subscribe>
							{/each}
						</Table.Row>
					</Subscribe>
				{/each}
			</Table.Body>
		</Table.Root>
	</div>

	<div class="px-2 border-t">
		<TablePagination
			bind:pageSize={$pageSize}
			bind:pageIndex={$pageIndex}
			pageCount={$pageCount}
			hasPreviousPage={$hasPreviousPage}
			hasNextPage={$hasNextPage}
		/>
	</div>
</div>

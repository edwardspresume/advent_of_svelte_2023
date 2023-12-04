<script lang="ts">
	import { Button } from '$components/ui/button';
	import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from 'lucide-svelte';
	import TableRowSelector from './TableRowSelector.svelte';

	export let pageSize: number;
	export let pageIndex: number;
	export let pageCount: number;
	export let hasPreviousPage: boolean;
	export let hasNextPage: boolean;
</script>

<section class="flex flex-col items-center justify-end gap-5 py-4 sm:gap-9 sm:flex-row">
	<TableRowSelector bind:currentPageSize={pageSize} />

	<p>
		Page {pageIndex + 1} of {pageCount}
	</p>

	<div>
		<Button
			size="icon"
			variant="outline"
			on:click={() => (pageIndex = 0)}
			disabled={!hasPreviousPage}
		>
			<ChevronsLeft size={15} />
		</Button>
		<Button
			size="icon"
			variant="outline"
			on:click={() => {
				pageIndex = pageIndex - 1;
			}}
			disabled={!hasPreviousPage}
		>
			<ChevronLeft size={15} />
		</Button>

		<Button
			size="icon"
			variant="outline"
			disabled={!hasNextPage}
			on:click={() => {
				pageIndex = pageIndex + 1;
			}}
		>
			<ChevronRight size={15} />
		</Button>

		<Button
			size="icon"
			variant="outline"
			disabled={!hasNextPage}
			on:click={() => {
				pageIndex = pageCount - 1;
			}}
		>
			<ChevronsRight size={15} />
		</Button>
	</div>
</section>

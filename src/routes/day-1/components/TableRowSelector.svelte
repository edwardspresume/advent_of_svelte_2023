<script lang="ts">
	import Label from '$components/ui/label/label.svelte';
	import * as Select from '$components/ui/select';

	export let currentPageSize: number;

	const tableRowsPerPage = [10, 20, 30, 40, 50];
</script>

<fieldset class="flex items-center gap-2">
	<Label for="rowSelector">Rows per page</Label>

	<Select.Root
		selected={{ value: 10, label: '10' }}
		onSelectedChange={(selected) => (currentPageSize = Number(selected?.value))}
	>
		<Select.Trigger id="rowSelector" class="w-20">
			<Select.Value />
		</Select.Trigger>
		<Select.Content>
			{#each tableRowsPerPage as row}
				<Select.Item value={row}>{row}</Select.Item>
			{/each}
		</Select.Content>
	</Select.Root>
</fieldset>

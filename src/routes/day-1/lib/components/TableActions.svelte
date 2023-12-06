<script lang="ts">
	import { childListStore } from '../../+page.svelte';

	import { Minus, Plus, Trash } from 'lucide-svelte';
	import { toast } from 'svelte-sonner';
	
	import Button from '$components/ui/button/button.svelte';

	export let id: string;

	function updateTally(change: number) {
		const entry = $childListStore.find((entry) => entry.id === id);

		if (entry) {
			entry.tally += change;
		}

		$childListStore = $childListStore;
	}

	function deleteEntry() {
		$childListStore = $childListStore.filter((entry) => entry.id !== id);

		toast.success('Deleted entry!');
	}
</script>

<div class="text-sm">
	<Button size="icon" variant="outline" on:click={() => updateTally(-1)}>
		<Minus size="15" />
	</Button>
	<Button size="icon" variant="outline" on:click={() => updateTally(1)}>
		<Plus size="15" />
	</Button>

	<Button size="icon" variant="destructive" on:click={deleteEntry}>
		<Trash size="15" />
	</Button>
</div>

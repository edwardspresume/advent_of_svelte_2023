<script lang="ts">
	import H1 from '$components/H1.svelte';
	import Button from '$components/ui/button/button.svelte';

	import { Minus, PlusIcon } from 'lucide-svelte';

	let cookieCounter = $state(0);
</script>

<H1>Day 2</H1>

<p>Cookie munched: {cookieCounter}</p>

<div class="flex gap-2 mt-5">
	<Button size="icon" onclick={() => cookieCounter++}>
		<PlusIcon />
	</Button>

	<Button size="icon" onclick={() => cookieCounter--}>
		<Minus />
	</Button>

	<Button onclick={() => (cookieCounter = 0)}>Reset</Button>
</div>

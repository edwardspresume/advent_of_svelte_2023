<script lang="ts">
	import { derived, writable } from 'svelte/store';
	import { fade, fly } from 'svelte/transition';

	import { Minus, PlusIcon } from 'lucide-svelte';

	import H1 from '$components/H1.svelte';
	import Button from '$components/ui/button/button.svelte';

	const MAX_COUNT = 20;
	let cookieCount = writable(0);
	let isResetting = writable(false);

	let santaStatus = derived([cookieCount, isResetting], ([cookieCount, isResetting]) => {
		if (isResetting) return '🤮';
		if (cookieCount === 0) return '😮‍💨';
		if (cookieCount < 5) return '😌';
		if (cookieCount < 10) return '🤩';
		if (cookieCount < 16) return '😟';
		return cookieCount < MAX_COUNT ? '🥴' : '';
	});

	function delay(ms: number) {
		return new Promise((resolve) => setTimeout(resolve, ms));
	}

	async function resetCountGradually() {
		$isResetting = true;

		while ($cookieCount > 0) {
			$cookieCount--;
			await delay(100);
		}

		$isResetting = false;
	}

	$: if ($cookieCount === MAX_COUNT) resetCountGradually();
</script>

<H1>Day 2: Cookie Counter</H1>

<div class="max-w-xl mx-auto">
	<section class="flex gap-2">
		<Button
			size="icon"
			class="bg-green-600 select-none"
			disabled={$isResetting}
			aria-label="Increase cookie count"
			on:click={() => $cookieCount++}
		>
			<PlusIcon />
		</Button>

		<Button
			size="icon"
			class="bg-red-600 select-none"
			disabled={$cookieCount === 0 || $isResetting}
			aria-label="Decrease cookie count"
			on:click={() => $cookieCount > 0 && $cookieCount--}
		>
			<Minus />
		</Button>

		<Button
			class="select-none"
			disabled={$isResetting}
			aria-label="Reset cookie count"
			on:click={() => ($cookieCount = 0)}>Reset</Button
		>
	</section>

	<header class="flex flex-wrap items-center justify-between gap-3 mb-1 mt-7">
		<p>Cookie munched: {$cookieCount}</p>
		<p>Santa status: <span class="text-2xl">{$santaStatus}</span></p>
	</header>

	<div class="flex flex-wrap gap-2 p-3 border rounded h-36 sm:h-28">
		{#each { length: $cookieCount } as _, index (index)}
			<span class="text-2xl" in:fade out:fly={{ y: 30, duration: 100 }}>🍪</span>
		{/each}
	</div>
</div>

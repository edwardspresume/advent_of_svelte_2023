<script>
	import { route } from '$lib/ROUTES';

	import H1 from '$components/H1.svelte';
	import Button from '$components/ui/button/button.svelte';

	const days = [
		{ name: 'Day 1', path: route('/day-1') },
		{ name: 'Day 2', path: route('/day-2') }
	];
</script>

<H1>Svelte Advent of Code Challenges</H1>

<p class="mb-4 text-lg text-center">
	These are my solutions to the <a
		class="text-blue-500 transition duration-300 hover:text-blue-600"
		href="https://advent.sveltesociety.dev/">Advent of Code 2023</a
	> challenges.
</p>

<nav class="flex items-center justify-center gap-4">
	{#each days as day}
		<Button class="px-2 bg-blue-500 hover:bg-blue-600" href={day.path}>{day.name}</Button>
	{/each}
</nav>

<script>
	import { PAGES } from '$lib/ROUTES';

	import Button from '$components/ui/button/button.svelte';
	import ThemeToggler from './ThemeToggler.svelte';
</script>

<header class="relative mb-10 border-b">
	<div class="container flex items-center justify-between p-2">
		<Button href={PAGES['/']} variant="link" class="text-2xl font-bold"
			>Advent Of Svelte 2023</Button
		>

		<ThemeToggler />
	</div>
</header>

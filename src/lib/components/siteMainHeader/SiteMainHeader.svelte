<script>
	import { Routes } from '$lib/navLinks';

	import Button from '$components/ui/button/button.svelte';
	import ThemeToggler from './ThemeToggler.svelte';
</script>

<header class="relative mb-10 border-b">
	<div class="container flex items-center justify-between p-2">
		<Button href={Routes.HOMEPAGE} variant="ghost" class="gap-1 p-0 text-base font-bold sm:text-xl">
			Svelte advent of code
		</Button>

		<div class="flex gap-2">
			<ThemeToggler />
		</div>
	</div>
</header>

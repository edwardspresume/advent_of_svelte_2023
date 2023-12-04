<script>
	import { PAGES } from '$lib/ROUTES';

	import Button from '$components/ui/button/button.svelte';
	import ThemeToggler from './ThemeToggler.svelte';

	import svelteSanta from '$lib/assets/santa-svelte.png?enhanced';
</script>

<header class="relative mb-10 border-b">
	<div class="container flex items-center justify-between p-2">
		<Button href={PAGES['/']} variant="link" class="text-2xl font-bold">
			<enhanced:img src={svelteSanta} alt="Svelte Santa logo" class="object-contain w-10 h-10" />

			<span> Advent Of Svelte 2023 </span>
		</Button>

		<ThemeToggler />
	</div>
</header>

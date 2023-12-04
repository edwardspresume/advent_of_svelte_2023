<script>
	import { route } from '$lib/ROUTES';

	import SiteMainNav from './SiteMainNav.svelte';
	import ThemeToggler from './ThemeToggler.svelte';
</script>

<header class="relative mb-10 border-b">
	<div class="container flex items-center justify-between p-2">
		<a href={route('/')} class="text-2xl font-bold">Advent Of Svelte 2023</a>

		<div class="flex gap-2">
			<ThemeToggler />
			<SiteMainNav />
		</div>
	</div>
</header>

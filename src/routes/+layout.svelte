<script>
	import '../app.pcss';

	import { Bar } from '@bobbymannino/svelte-progress';
	import { ModeWatcher } from 'mode-watcher';

	import SiteMainHeader from '$lib/components/siteMainHeader/SiteMainHeader.svelte';
</script>

<Bar color="#6D28D9" size="big" speed="fast" />
<ModeWatcher />

<SiteMainHeader />
<main class="container max-w-3xl p-2 pb-10">
	<slot />
</main>

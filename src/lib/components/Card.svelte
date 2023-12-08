<article class="w-full p-2 border rounded-lg shadow sm:p-6 bg-accent">
	<header class="flex items-center justify-between gap-2 mb-4">
		<h2 class="font-semibold leading-none whitespace-nowrap">
			<slot name="title" />
		</h2>

		<span class="text-xl [line-height:0]">
			<slot name="icon" />
		</span>
	</header>

	<var class="text-2xl font-bold">
		<slot name="data" />
	</var>

	<p class="text-xs text-muted-foreground">
		<slot name="dataDescription" />
	</p>
</article>

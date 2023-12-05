<article class="w-full p-6 border rounded-lg shadow bg-accent">
	<header class="flex items-center justify-between gap-2 mb-4">
		<h2 class="leading-none text-muted-foreground whitespace-nowrap">
			<slot name="title" />
		</h2>

		<span class="text-xl [line-height:0]">
			<slot name="icon" />
		</span>
	</header>

	<var class="text-2xl font-bold">
		<slot name="data" />
	</var>
</article>

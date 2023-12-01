import type { PageServerLoad } from './$types';

export const load = (async ({ fetch }) => {
	const adventDataResponse = await fetch('https://advent.sveltesociety.dev/data/2023/day-one.json');

	const childrenTallies = await adventDataResponse.json();

	const listForNaughtyChildren = [];
	const listForNiceChildren = [];

	for (const child of childrenTallies) {
		child.tally >= 0 ? listForNiceChildren.push(child) : listForNaughtyChildren.push(child);
	}

	return {
		naughty_or_nice_list: { naughty: listForNaughtyChildren, nice: listForNiceChildren }
	};
}) satisfies PageServerLoad;

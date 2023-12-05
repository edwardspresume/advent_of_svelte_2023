import type { PageServerLoad } from './$types';

import type { JsonData, NaughtyOrNiceEntry } from './lib/types';

export const load = (async ({ fetch }) => {
	let childList: NaughtyOrNiceEntry[] = [];

	try {
		const adventDataResponse = await fetch(
			'https://advent.sveltesociety.dev/data/2023/day-one.json'
		);

		if (!adventDataResponse.ok) {
			throw new Error(`Failed to fetch advent data: ${adventDataResponse.statusText}`);
		}

		const adventDataJson = (await adventDataResponse.json()) as JsonData[];

		childList = adventDataJson
			.map(
				(child): NaughtyOrNiceEntry => ({
					...child,
					category: child.tally >= 0 ? 'nice' : 'naughty'
				})
			)
			.sort((a, b) => b.tally - a.tally);

		return { childList };
	} catch (error) {
		console.error('Error loading advent data:', error);

		return { childList };
	}
}) satisfies PageServerLoad;

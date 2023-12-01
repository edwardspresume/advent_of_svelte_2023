import type { PageServerLoad } from './$types';

type JsonData = {
	name: string;
	tally: number;
};

export const load = (async ({ fetch }) => {
	try {
		const adventDataResponse = await fetch(
			'https://advent.sveltesociety.dev/data/2023/day-one.json'
		);
		if (!adventDataResponse.ok) {
			throw new Error('Failed to fetch advent data');
		}

		const adventDataJson = (await adventDataResponse.json()) as JsonData[];

		const listForNaughtyChildren = adventDataJson
			.filter((child) => child.tally < 0)
			.sort((a, b) => a.tally - b.tally);

		const listForNiceChildren = adventDataJson
			.filter((child) => child.tally >= 0)
			.sort((a, b) => b.tally - a.tally);

		return {
			naughty_or_nice_list: { naughty: listForNaughtyChildren, nice: listForNiceChildren }
		};
	} catch (error) {
		console.error('Error loading advent data:', error);
		return {
			naughty_or_nice_list: { naughty: [], nice: [] }
		};
	}
}) satisfies PageServerLoad;

import type { PageServerLoad } from './$types';

type JsonData = {
	name: string;
	tally: number;
};

type NaughtyOrNiceEntry = JsonData & {
	category: 'nice' | 'naughty';
};

export const load = (async ({ fetch }) => {
	let naughty_or_nice_list: NaughtyOrNiceEntry[] = [];

	try {
		const adventDataResponse = await fetch(
			'https://advent.sveltesociety.dev/data/2023/day-one.json'
		);

		if (!adventDataResponse.ok) {
			throw new Error(`Failed to fetch advent data: ${adventDataResponse.statusText}`);
		}

		const adventDataJson = (await adventDataResponse.json()) as JsonData[];

		naughty_or_nice_list = adventDataJson
			.map(
				(child): NaughtyOrNiceEntry => ({
					...child,
					category: child.tally >= 0 ? 'nice' : 'naughty'
				})
			)
			.sort((a, b) => b.tally - a.tally);

		return {
			naughty_or_nice_list
		};
	} catch (error) {
		console.error('Error loading advent data:', error);

		return {
			naughty_or_nice_list
		};
	}
}) satisfies PageServerLoad;

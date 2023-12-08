import type { PageServerLoad } from './$types';

type ChildGiftType = {
	id: number;
	name: string;
	weight: number;
};

export const load = (async ({ fetch }) => {
	try {
		const response = await fetch('https://advent.sveltesociety.dev/data/2023/day-three.json');

		if (!response.ok) {
			throw new Error('Network response was not ok');
		}

		const adventDataJson = (await response.json()) as Omit<ChildGiftType, 'id'>[];

		const childrenGifts = adventDataJson
			.map((item) => ({ id: crypto.randomUUID(), ...item }))
			.sort((a, b) => b.weight - a.weight);

		return { childrenGifts };
	} catch (error) {
		console.error('Failed to fetch data:', error);

		return { childrenGifts: [] };
	}
}) satisfies PageServerLoad;

export type JsonData = {
	name: string;
	tally: number;
};

export type NaughtyOrNiceEntry = JsonData & {
	id: string;
	category: 'nice' | 'naughty';
};

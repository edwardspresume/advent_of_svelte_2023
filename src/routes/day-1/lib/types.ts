export type JsonData = {
	name: string;
	tally: number;
};

export type NaughtyOrNiceEntry = JsonData & {
	category: 'nice' | 'naughty';
};

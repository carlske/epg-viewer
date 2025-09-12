export const PX_PER_MINUTE = 250 / 6; // 60px per minute
export const SLOT_WIDTH = 30 * PX_PER_MINUTE;
export const HEIGHT_PROGRAM_CONTAINER = 100;
export const SIZE_BLOCK = 250;

export const FILTER_TYPES = {
	CHANNELS: "channels",
	CATEGORIES: "categories",
	FAVORITES: "favorites",
	ERROR: "error",
} as const;

export type FilterType = (typeof FILTER_TYPES)[keyof typeof FILTER_TYPES];

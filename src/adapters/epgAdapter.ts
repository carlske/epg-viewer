import { z } from "zod";
import type { EpgApiResponse } from "@/types/epg";

const EventSchema = z.object({
	channel_id: z.string(),
	id: z.string(),
	name: z.string(),
	description: z.nullable(z.string()),
	date_begin: z.string(),
	date_end: z.string(),
	unix_begin: z.number(),
	unix_end: z.number(),
	duration: z.string(),
	image_base_horizontal: z.string(),
	image_base_vertical: z.string(),
	image_base_square: z.string(),
});

const CommonSchema = z.object({
	image_large: z.string(),
	image_medium: z.string(),
	image_small: z.string(),
});

const GroupSchema = z.object({
	common: CommonSchema,
});

const ChannelSchema = z.object({
	id: z.string(),
	number: z.string(),
	name: z.string(),
	group: GroupSchema,
	events: z.array(EventSchema),
});

export const EpgEntrySchema = z.object({
	date_from: z.string().optional(),
	date_to: z.string().optional(),
	quantity: z.string().optional(),
});

export const EpgApiResponseSchema = z.object({
	entry: EpgEntrySchema,
	response: z.object({
		channels: z.array(ChannelSchema),
	}),
});

export function parseEpgEntry(data: unknown): EpgApiResponse | null {
	const result = EpgApiResponseSchema.safeParse(data);
	if (result.success) {
		return result.data as EpgApiResponse;
	}
	return null;
}

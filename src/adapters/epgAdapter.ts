import { z } from "zod";

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
	id: z.string(),
	title: z.string(),
	image_large: z.string(),
	image_medium: z.string(),
	image_small: z.string(),
	channel_number: z.string(),
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

export function parseChannelResponse(response: unknown) {
	const result = z.array(ChannelSchema).safeParse(response);
	if (!result.success) return [];
	return result.data.map((ch) => ({
		channel: {
			id: ch.id,
			number: ch.number,
			name: ch.name,
		},
		images: ch.group.common,
		events: ch.events,
	}));
}

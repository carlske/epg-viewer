export interface EpgEntry {
	device_id: string;
	device_category: string;
	device_model: string;
	device_type: string;
	device_so: string;
	format: string;
	device_manufacturer: string;
	authpn: string;
	authpt: string;
	api_version: string;
	region: string;
	HKS: string;
	user_id: string;
	date_from: string;
	date_to: string;
	quantity: string;
}

export interface EpgApiResponse {
	entry: EpgEntry;
	response: {
		channels: Channel[];
	};
}
export interface Event {
	channel_id: string;
	id: string;
	name: string;
	description: string | null;
	date_begin: string;
	date_end: string;
	unix_begin: number;
	unix_end: number;
	duration: string;
	image_base_horizontal: string;
	image_base_vertical: string;
	image_base_square: string;
}

export interface Common {
	image_large: string;
	image_medium: string;
	image_small: string;
}

export interface Group {
	common: Common;
}

export interface Channel {
	id: string;
	number: string;
	name: string;
	group: Group;
	events: Event[];
}

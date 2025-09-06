export interface Temperatures {
	entry: Entry;
	response: Response;
	status: string;
	msg: string;
}

export interface Entry {
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

export interface Response {
	channels: Channel[];
	total: number;
}

export interface Channel {
	id: string;
	number: string;
	name: string;
	hd: boolean;
	image: string;
	group_id: string;
	liveref: string;
	epg_url: null | string;
	source_uri: string;
	provider_metadata_id: number;
	provider_metadata_name: ProviderMetadataName;
	group: Group;
	events: Event[];
}

export interface Event {
	channel_id: string;
	source_uri: string;
	id: string;
	name: Name;
	description: null;
	talent: null;
	date_begin: DateBeginEnum;
	date_end: DateBeginEnum;
	unix_begin: number;
	unix_end: number;
	duration: string;
	language: null;
	type: null;
	group_id: null;
	confirmado: null;
	id_empleado: null;
	tms_id: null;
	event_alf_id: null;
	ext_ncont_id: null;
	ext_nevt_id: null;
	ext_actors: null;
	ext_director: null;
	ext_year: null;
	ext_country: null;
	ext_original_name: null;
	ext_ep_original_name: null;
	ext_series_id: null;
	ext_season_id: null;
	ext_episode_id: null;
	ext_language: null;
	ext_serie_short_desc: null;
	ext_serie_desc: null;
	image_base_horizontal: string;
	image_base_vertical: string;
	image_base_square: string;
	ext_eventimage_name: string;
	ext_eventimage_name_base: string;
	ext_catchup: null;
	ext_startover: null;
	ext_recordable: null;
	parental_rating: null;
	aud_stereo: null;
	aud_dolby: null;
	vid_black_and_white: null;
	dvb_content: null;
	user_content: null;
	group_rel: null;
	gmt: number;
}

export type DateBeginEnum =
	| "2021/08/12 20:02:56"
	| "2021/08/12 21:02:56"
	| "2021/08/12 22:02:56"
	| "2021/08/12 23:02:56"
	| "2021/08/13 00:02:56"
	| "2021/08/13 01:02:56"
	| "2021/08/13 02:02:56"
	| "2021/08/13 03:02:56"
	| "2021/08/13 04:02:56"
	| "2021/08/13 05:02:56"
	| "2021/08/13 06:02:56"
	| "2021/08/13 07:02:56"
	| "2021/08/13 08:02:56"
	| "2021/08/13 09:02:56"
	| "2021/08/13 10:02:56"
	| "2021/08/13 11:02:56"
	| "2021/08/13 12:02:56"
	| "2021/08/13 13:02:56"
	| "2021/08/13 14:02:56"
	| "2021/08/13 15:02:56"
	| "2021/08/13 16:02:56"
	| "2021/08/13 17:02:56"
	| "2021/08/13 18:02:56"
	| "2021/08/13 19:02:56"
	| "2021/08/13 20:02:56";

export type Name = "NA";

export interface Group {
	common: Common;
}

export interface Common {
	id: string;
	title: string;
	title_episode: null;
	title_uri: string;
	title_original: string;
	description: string;
	description_large: string;
	short_description: null;
	image_large: string;
	image_medium: string;
	image_small: string;
	image_still: null;
	image_background: string;
	url_imagen_t1: string;
	url_imagen_t2: string;
	image_base_horizontal: string;
	image_base_vertical: string;
	image_base_square: string;
	image_clean_horizontal: string;
	image_clean_vertical: string;
	image_clean_square: string;
	image_sprites: string;
	image_frames: string;
	image_trickplay: string;
	image_external: null;
	duration: null;
	date: string;
	year: null;
	preview: string;
	season_number: null;
	episode_number: null;
	format_types: FormatTypes;
	live_enabled: string;
	live_type: string;
	live_ref: string;
	source_uri: string;
	timeshift: null | string;
	votes_average: number;
	rating_code: RatingCode;
	proveedor_name: ProveedorName;
	proveedor_code: ProveedorCode;
	encoder_tecnology: Nology;
	recorder_technology: Nology;
	resource_name: null;
	rollingcreditstime: null;
	rollingcreditstimedb: null;
	is_series: boolean;
	channel_number: string;
}

export interface Nology {
	id: null | string;
	desc: Desc | null;
}

export type Desc = "HARMONIC_VOS";

export type FormatTypes = "free" | "susc";

export type ProveedorCode =
	| "amco"
	| "atresplayer"
	| "cvperu"
	| "hbo"
	| "universal";

export type ProveedorName =
	| "AMCO"
	| "ATRESPLAYER"
	| "CLARO VIDEO PERU"
	| "HBO"
	| "UNIVERSAL";

export type RatingCode = "G";

export type ProviderMetadataName = "NAGRA";

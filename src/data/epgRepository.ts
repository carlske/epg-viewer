import AppConfig from "@/config/AppConfig";

export async function fetchEpgRepository() {
	const res = await fetch(AppConfig.API_EPG_URL);
	if (!res.ok) throw new Error("Failed to fetch EPG", { cause: res });
	const {
		response: { channels },
	} = await res.json();
	return channels;
}

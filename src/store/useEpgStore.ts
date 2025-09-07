import { create } from "zustand";
import type { Channel } from "@/types/epg";

type EpgStore = {
	channels: Channel[];
	setChannels: (channels: Channel[]) => void;
};

const useEpgStore = create<EpgStore>((set) => ({
	channels: [],
	setChannels: (channels) => set({ channels }),
}));

export default useEpgStore;

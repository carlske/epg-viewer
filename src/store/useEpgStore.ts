import { create } from "zustand";
import type { EpgApiResponse } from "@/types/epg";

type EpgStore = {
	entry: EpgApiResponse;
	setEntry: (entry: EpgApiResponse) => void;
};

const useEpgStore = create<EpgStore>((set) => ({
	entry: {} as EpgApiResponse,
	setEntry: (entry: EpgApiResponse) => set({ entry }),
}));

export default useEpgStore;

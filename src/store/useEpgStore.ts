import { create } from "zustand";
import type { EpgApiResponse } from "@/types/epg";

interface Program {
	id: string;
	name: string;
	time: string;
	channelId: string;
}

type EpgStore = {
	entry: EpgApiResponse;
	setEntry: (entry: EpgApiResponse) => void;

	hoveredProgram: Program | null;
	selectedProgram: Program | null;

	setHoveredProgram: (program: Program | null) => void;
	setSelectedProgram: (program: Program | null) => void;
};

const useEpgStore = create<EpgStore>((set) => ({
	entry: {} as EpgApiResponse,
	setEntry: (entry: EpgApiResponse) => set({ entry }),
	hoveredProgram: null,
	selectedProgram: null,
	setHoveredProgram: (program: Program | null) =>
		set({ hoveredProgram: program }),
	setSelectedProgram: (program: Program | null) =>
		set({ selectedProgram: program }),
}));

export default useEpgStore;

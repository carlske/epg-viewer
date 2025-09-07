import { useQuery } from "@tanstack/react-query";
import { parseChannelResponse } from "@/adapters/epgAdapter";
import { fetchEpgRepository } from "@/data/epgRepository";

const useEpgData = () => {
	return useQuery({
		queryKey: ["epgData"],
		queryFn: async () => {
			const response = await fetchEpgRepository();
			return parseChannelResponse(response);
		},
		staleTime: 1000 * 60 * 60 * 24, // 24 hours
	});
};
export default useEpgData;

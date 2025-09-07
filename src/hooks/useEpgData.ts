import { useQuery } from "@tanstack/react-query";
import { fetchEpgRepository } from "@/data/epgRepository";

const useEpgData = () => {
	return useQuery({
		queryKey: ["epgData"],
		queryFn: async () => {
			return await fetchEpgRepository();
		},
		staleTime: 1000 * 60 * 60 * 24, // 24 hours
	});
};
export default useEpgData;

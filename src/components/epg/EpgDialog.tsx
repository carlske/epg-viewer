import { useEffect } from "react";
import useEpgData from "@/hooks/useEpgData";
import useEpgStore from "@/store/useEpgStore";
import { Dialog } from "../ui/Dialog";
import Epgcontent from "./internal/EpgContent";
import EpgcontentSkeleton from "./internal/EpgContentSkeleton";

type DialogProps = {
	open: boolean;
	onClose: () => void;
};

const EpgDialog = ({ open, onClose }: DialogProps) => {
	const { data, error } = useEpgData();

	const setEntry = useEpgStore((state) => state.setEntry);

	useEffect(() => {
		if (data) setEntry(data);
	}, [data, setEntry]);

	return (
		<Dialog open={open} onClose={onClose}>
			{!data && !error && <EpgcontentSkeleton />}
			{error && <div data-testid="error">Error loading EPG data</div>}
			{data && <Epgcontent />}
		</Dialog>
	);
};

export default EpgDialog;

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

	if (error) {
		return (
			<Dialog open={open} onClose={onClose}>
				<div data-testid="error">Error loading EPG data</div>
			</Dialog>
		);
	}

	if (!data) {
		return (
			<Dialog open={open} onClose={onClose}>
				<EpgcontentSkeleton />
			</Dialog>
		);
	}

	return (
		<Dialog open={open} onClose={onClose}>
			<Epgcontent />
		</Dialog>
	);
};

export default EpgDialog;

import { Suspense } from "react";
import useEpgData from "@/hooks/useEpgData";
import useEpgStore from "@/store/useEpgStore";
import { Dialog } from "../ui/Dialog";
import Epgcontent from "./internal/EpgContent";

type DialogProps = {
	open: boolean;
	onClose: () => void;
};

const EpgDialog = ({ open, onClose }: DialogProps) => {
	const { data, error } = useEpgData();

	const setEntry = useEpgStore((state) => state.setEntry);

	if (data) {
		setEntry(data);
	}

	return (
		<Dialog open={open} onClose={onClose}>
			{!data && !error && <div>Loading...</div>}
			{error && <div>Error loading EPG data</div>}
			{data && (
				<Suspense fallback={<div>Loading...</div>}>
					<Epgcontent />
				</Suspense>
			)}
		</Dialog>
	);
};

export default EpgDialog;

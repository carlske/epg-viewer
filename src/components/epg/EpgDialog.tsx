import { Dialog } from "../ui/Dialog";
import Epgcontent from "./internal/EpgContent";

type DialogProps = {
	open: boolean;
	onClose: () => void;
};

const EpgDialog = ({ open, onClose }: DialogProps) => {
	return (
		<Dialog open={open} onClose={onClose}>
			<Epgcontent />
		</Dialog>
	);
};

export default EpgDialog;

import { Button } from "./Button";

interface SliderPanelProps {
	children: React.ReactNode;
	width?: string;
	open?: boolean;
	onClose?: () => void;
}

const SliderPanel = ({
	children,
	width = "400px",
	open = false,
	onClose,
}: SliderPanelProps) => {
	return (
		<>
			{open && (
				<div
					className="fixed inset-0 bg-black/60 z-40 transition-opacity duration-300"
					aria-hidden="true"
				/>
			)}
			<div
				className={`fixed top-0 right-0 h-full bg-epg-night shadow-lg transition-transform duration-300 z-50 ${open ? "translate-x-0" : "translate-x-full"}`}
				style={{ width }}
				role="dialog"
				aria-modal="true"
			>
				<Button
					className="absolute top-4 right-4 text-gray-700"
					aria-label="Close panel"
					onClick={onClose}
				>
					&times;
				</Button>

				<div className="p-6 h-full overflow-y-auto text-epg-baby-powder">
					{children}
				</div>
			</div>
		</>
	);
};

export default SliderPanel;

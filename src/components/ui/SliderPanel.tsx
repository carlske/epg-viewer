import { Button } from "./Button";

interface SliderPanelProps {
	children: React.ReactNode;
	width?: string;
	open?: boolean;
	title?: string;
	onClose?: () => void;
}

const SliderPanel = ({
	children,
	open = false,
	onClose,
	title = "Slider Title",
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
				className={`w-full sm:w-[40vw] fixed top-0 right-0 h-full bg-epg-night shadow-lg transition-transform duration-300 z-50 ${open ? "translate-x-0" : "translate-x-full"}`}
				role="dialog"
				aria-modal="true"
			>
				<header className="p-4 border-b border-gray-700">
					<h2 className="text-lg text-epg-baby-powder font-bold mb-4">
						{title}
					</h2>

					<Button
						className="absolute top-4 right-4 text-gray-700"
						aria-label="Close panel"
						onClick={onClose}
					>
						&times;
					</Button>
				</header>

				<div className="p-6 h-full overflow-y-auto text-epg-baby-powder">
					{children}
				</div>
			</div>
		</>
	);
};

export default SliderPanel;

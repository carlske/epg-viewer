import { X } from "lucide-react";
import { useEffect, useLayoutEffect, useRef } from "react";
import { Button } from "./Button";

type DialogProps = {
	open: boolean;
	onClose: () => void;
	children: React.ReactNode;
};

export const Dialog = ({ open, onClose, children }: DialogProps) => {
	const dialogRef = useRef<HTMLDivElement>(null);

	useLayoutEffect(() => {
		const originalOverflow = document.body.style.overflow;
		if (open) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = originalOverflow;
		}
		return () => {
			document.body.style.overflow = originalOverflow;
		};
	}, [open]);

	useEffect(() => {
		if (open) {
			dialogRef.current?.focus();
		}
	}, [open]);

	if (!open) return null;

	const handleBackdropKeyDown = () => {
		onClose();
	};

	return (
		<div
			className={`animate-fade-up animate-duration-300 animate-ease-out fixed inset-0 z-50 flex items-center justify-center`}
			role="dialog"
			aria-modal="true"
			aria-label="EPG Premium Dialog"
			tabIndex={-1}
			ref={dialogRef}
			onKeyDown={handleBackdropKeyDown}
		>
			<div className="bg-black/60 h-screen w-screen relative">
				<Button
					variant="ghost"
					className="absolute top-4 cursor-pointer right-1 text-epg-baby-powder hover:opacity-70"
					onClick={onClose}
					aria-label="Close Dialog"
					aria-labelledby="Close Dialog button"
					type="button"
				>
					<X aria-hidden="true" size={35} />
				</Button>
				{children}
			</div>
		</div>
	);
};

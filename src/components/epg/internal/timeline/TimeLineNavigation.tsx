import { ChevronLeft, ChevronRight } from "lucide-react";
import { memo } from "react";
import { Button } from "@/components/ui/Button";

interface TimeLineNavigationProps {
	ref: React.RefObject<HTMLDivElement | null>;
}

const TimeLineNavigation = memo(({ ref }: TimeLineNavigationProps) => {
	const pxPerMinute = 6;
	const slotWidth = 15 * pxPerMinute;

	const scrollBy = (amount: number) => {
		if (ref.current) {
			ref.current.scrollLeft += amount;
		}
	};

	return (
		<nav className="text-white flex items-center fixed z-20 right-0">
			<Button
				variant="ghost"
				size="icon"
				className="bg-black"
				onClick={() => scrollBy(-slotWidth * 2)}
				aria-label="Desplazar a la izquierda"
			>
				<ChevronLeft aria-hidden="true" size={20} />
			</Button>
			<Button
				size="icon"
				variant="ghost"
				className="bg-black"
				onClick={() => scrollBy(slotWidth * 2)}
				aria-label="Desplazar a la derecha"
			>
				<ChevronRight aria-hidden="true" size={20} />
			</Button>
		</nav>
	);
});

export default TimeLineNavigation;

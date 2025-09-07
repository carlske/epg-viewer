import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";
import { Button } from "@/components/ui/Button";
import useEpgStore from "@/store/useepgStore";
import TimeLineChannels from "./TimeLineChannels";

const TimeLineGrid = () => {
	const pxPerMinute = 11;
	const minutesPerSlot = 30;
	const slotWidth = pxPerMinute * minutesPerSlot;

	const scrollerRef = useRef<HTMLDivElement>(null);

	console.log("setChannels function from store:", useEpgStore.getState());

	const scrollBy = (delta: number) => {
		const el = scrollerRef.current;
		if (!el) return;
		el.scrollTo({ left: el.scrollLeft + delta, behavior: "smooth" });
	};

	const slots = [
		"13:00",
		"13:30",
		"14:00",
		"14:30",
		"15:00",
		"15:30",
		"16:00",
		"16:30",
		"17:00",
		"17:30",
		"18:00",
	];

	return (
		<aside className="w-full h-full flex  bg-black text-epg-baby-powder">
			<div>
				<TimeLineChannels />
			</div>
			<div className="text-white flex items-center fixed z-20 right-0 mt-[1px]">
				<Button
					variant="ghost"
					className="bg-black"
					onClick={() => scrollBy(-slotWidth * 2)}
					aria-label="Scroll Left"
				>
					<ChevronLeft aria-hidden="true" size={20} />
				</Button>
				<Button
					variant="ghost"
					className="bg-black"
					onClick={() => scrollBy(slotWidth * 2)}
					aria-label="Scroll Right"
				>
					<ChevronRight aria-hidden="true" size={20} />
				</Button>
			</div>
			<div
				ref={scrollerRef}
				className="overflow-x-auto border-t border-neutral-700"
				style={{ "--slot": `${slotWidth}px` } as Record<string, string>}
			>
				<div className="grid grid-flow-col auto-cols-[var(--slot)] sticky top-0 bg-black/90 backdrop-blur-0 z-10 text-white text-sm">
					{slots.map((label) => (
						<div key={label} className="h-10 flex items-center justify-center ">
							{label}
						</div>
					))}
				</div>

				<div className="relative h-[400px]">
					<div className="relative h-16"></div>
				</div>
			</div>
		</aside>
	);
};

export default TimeLineGrid;

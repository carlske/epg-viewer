import { memo } from "react";
import TimeLineHours from "./TimeLineHours";

interface TimeLineHeaderProps {
	ref: React.RefObject<HTMLDivElement | null>;
	visibleHours: string[];
}

const TimeLineHeader = memo(({ ref, visibleHours }: TimeLineHeaderProps) => {
	return (
		<header className="">
			{/* Hours Header */}
			<div className="w-[250px] h-[50px] text-center text-epg-baby-powder  flex items-center justify-center fixed z-10 bg-black">
				<span>DIA</span>
			</div>
			<TimeLineHours ref={ref} visibleHours={visibleHours} />
		</header>
	);
});

export default TimeLineHeader;

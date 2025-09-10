import { memo } from "react";

interface TimeLineHoursProps {
	ref: React.RefObject<HTMLDivElement | null>;
	visibleHours: string[];
}

const TimeLineHours = memo(({ ref, visibleHours }: TimeLineHoursProps) => {
	return (
		<div
			ref={ref}
			className="flex flex-row  top-0 bg-black [&>div]:w-[250px] ml-[250px] [&>div]:h-[50px] overflow-hidden [&>div]:shrink-0 gap-1"
			data-testid="time-header"
		>
			{visibleHours.map((hour, index) => (
				<div
					key={`${index}-${hour}`}
					className="h-full flex flex-col justify-center items-center text-epg-baby-powder"
				>
					<span>{hour}</span>
				</div>
			))}
		</div>
	);
});

export default TimeLineHours;

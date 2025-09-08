import { useVirtualizer } from "@tanstack/react-virtual";
import { useCallback, useRef } from "react";
import Channel from "@/components/ui/Channel";
import Program from "@/components/ui/Program";
import useScrollHeader from "@/hooks/useScrollHeader";
import useEpgStore from "@/store/useEpgStore";
import { getHoursHeaderFromDates } from "@/utils";

const TimeLine = () => {
	const timesDivRef = useRef<HTMLDivElement>(null);
	const containerRef = useRef<HTMLDivElement>(null);
	const channels = useEpgStore.getState();

	useScrollHeader({ containerRef, timesDivRef });

	const { entry, response } = channels.entry;
	const { channels: channelsList } = response;

	const getVisibleHours = useCallback(() => {
		return getHoursHeaderFromDates(entry.date_from, entry.date_to);
	}, [entry.date_from, entry.date_to]);

	const visibleHours = getVisibleHours();

	const columnVirtualizer = useVirtualizer({
		horizontal: false,
		count: channelsList.length,
		getScrollElement: () => containerRef.current,
		estimateSize: () => 100,
		overscan: 5,
	});

	const channelsItems = columnVirtualizer.getVirtualItems();

	const heightProgramContainer = 100;

	return (
		<div className="bg-black overflow-hidden">
			<div className=" top-0">
				{/* Header */}
				<div className="w-[250px] h-[50px] text-center text-epg-baby-powder fixed z-10 bg-primary ">
					DIA
				</div>

				{/* Time */}

				<div
					ref={timesDivRef}
					className="flex  flex-row   top-0 bg-black
						[&>div]:w-[250px] ml-[250px]  [&>div]:h-[50px] overflow-hidden [&>div]:shrink-0 gap-1"
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
			</div>

			{/* Content */}
			<div
				ref={containerRef}
				className="flex flex-row w-full overflow-x-auto hide-scroll overflow-y-auto bg-black/10 scrollbar-hide"
				style={{ height: "90dvh" }}
			>
				<div
					style={{
						width: `${columnVirtualizer.getTotalSize()}px`,
						height: "100%",
						position: "relative",
					}}
				></div>

				<div className="flex flex-col sticky z-10  bg-black left-0 h-full gap-1 [&>div]:w-[250px]  [&>div]:h-[100px] [&>div]:shrink-0">
					{channelsItems.map((virtual) => {
						const ch = channelsList[virtual.index];
						return (
							<div
								key={ch.id}
								className="absolute top-0 left-0 w-[250px] h-[100px]"
								style={{ transform: `translateY(${virtual.start}px)` }}
							>
								<Channel
									key={ch.id}
									imageLarge={ch.group.common.image_large}
									imageMedium={ch.group.common.image_medium}
									imageSmall={ch.group.common.image_small}
									canalNumber={ch.name}
									alt={ch.name}
								/>
							</div>
						);
					})}
				</div>

				{/* Program Items */}
				<div className="h-[100px] ml-[250px] border-2">
					<div
						style={{
							width: `${columnVirtualizer.getTotalSize()}px`,
							height: "100%",
							position: "relative",
						}}
					>
						{channelsItems.map((virtual) => {
							const ch = channelsList[virtual.index];
							const { events } = ch;
							return (
								<div
									key={ch.id}
									className="absolute top-0"
									style={{
										transform: `translateY(${virtual.start}px)`,
									}}
								>
									<div className="flex flex-row flex-nowrap gap-1 overflow-x-auto overflow-y-auto [&>div]:shrink-0">
										{events.map((event) => {
											const { name, unix_begin, unix_end } = event;
											return (
												<Program
													key={event.id ?? unix_begin}
													name={name}
													time={`${new Date(unix_begin * 1000).toLocaleTimeString()} - ${new Date(unix_end * 1000).toLocaleTimeString()}`}
													width={250}
													height={heightProgramContainer}
												/>
											);
										})}
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
};
export default TimeLine;

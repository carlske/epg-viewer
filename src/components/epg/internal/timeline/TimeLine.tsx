import { useVirtualizer } from "@tanstack/react-virtual";
import { useCallback, useEffect, useRef } from "react";
import Channel from "@/components/ui/Channel";
import Program from "@/components/ui/Program";
import useEpgStore from "@/store/useEpgStore";
import { getHoursHeaderFromDates } from "@/utils";

const Demo = () => {
	const timesDivRef = useRef<HTMLDivElement>(null);
	const containerRef = useRef<HTMLDivElement>(null);
	const channels = useEpgStore.getState();

	const { entry, response } = channels.entry;
	const { channels: channelsList } = response;

	const getVisibleHours = useCallback(() => {
		return getHoursHeaderFromDates(entry.date_from, entry.date_to);
	}, [entry.date_from, entry.date_to]);

	const visibleHours = getVisibleHours();

	console.log("visibleHours :;", visibleHours);

	const columnVirtualizer = useVirtualizer({
		horizontal: false,
		count: channelsList.length,
		getScrollElement: () => containerRef.current,
		estimateSize: () => 100,
		overscan: 5,
	});

	useEffect(() => {
		const el = containerRef.current;
		if (!el) return;

		// Set initial scroll position to 250px to match timesDivRef
		el.scrollLeft = 0;

		let raf = 0;
		const onScroll = () => {
			const x = el.scrollLeft;
			if (!raf) {
				raf = requestAnimationFrame(() => {
					raf = 0;
					if (timesDivRef.current) {
						timesDivRef.current.scrollLeft = x;
					}
				});
			}
		};

		if (timesDivRef.current) {
			timesDivRef.current.style.transform = "translateX(0px)";
		}

		el.addEventListener("scroll", onScroll, { passive: true });
		return () => {
			el.removeEventListener("scroll", onScroll);
			if (raf) cancelAnimationFrame(raf);
		};
	}, []);

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

				<div className="flex flex-col sticky  bg-black left-0 h-full gap-1 [&>div]:w-[250px]  [&>div]:h-[100px] [&>div]:shrink-0">
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
						className="flex flex-row  flex-nowrap gap-1 overflow-x-auto overflow-y-auto
                           [&>div]:shrink-0 "
					>
						<div className="h-[100px] w-[250px] bg-violet-300 border-2 border-violet-700">
							program 1
						</div>
						<Program
							name="Program 1"
							time="10:00 AM"
							width={250}
							height={heightProgramContainer}
						/>

						<Program
							name="Program 1"
							time="10:00 AM"
							width={250}
							height={heightProgramContainer}
						/>

						<Program
							name="Program 1"
							time="10:00 AM"
							width={250}
							height={heightProgramContainer}
						/>

						<div className="h-[100px] w-[250px] bg-violet-300  border-2 border-violet-700 ">
							program 1
						</div>
						<div className="h-[100px] w-[250px] bg-violet-300  border-2 border-violet-700 ">
							program 1
						</div>
						<div className="h-[100px] w-[250px] bg-violet-300  border-2 border-violet-700 ">
							program 1
						</div>
						<div className="h-[100px] w-[250px] bg-violet-300  border-2 border-violet-700 ">
							program 1
						</div>
						<div className="h-[100px] w-[250px] bg-violet-300  border-2 border-violet-700 ">
							program 1
						</div>
						<div className="h-[100px] w-[250px] bg-violet-300  border-2 border-violet-700 ">
							program 1
						</div>
						<div className="h-[100px] w-[250px] bg-violet-300  border-2 border-violet-700 ">
							program 1
						</div>
						<div className="h-[100px] w-[250px] bg-violet-300  border-2 border-violet-700 ">
							program 1
						</div>
						<div className="h-[100px] w-[250px] bg-violet-300  border-2 border-violet-700 ">
							program 1
						</div>
						<div className="h-[100px] w-[250px] bg-violet-300  border-2 border-violet-700 ">
							program 1
						</div>
						<div className="h-[100px] w-[250px] bg-violet-300  border-2 border-violet-700 ">
							program 1
						</div>
						<div className="h-[100px] w-[250px] bg-violet-300  border-2 border-violet-700 ">
							program 155
						</div>
					</div>
					<div
						className="flex flex-row  flex-nowrap gap-1 overflow-x-auto
                           [&>div]:shrink-0 "
					>
						<div className="h-[100px] w-[250px] bg-violet-300 border-2 border-violet-700">
							program 1
						</div>
						<div className="h-[100px] w-[500px]  bg-violet-300  border-2 border-violet-700 ">
							program 1
						</div>
						<div className="h-[100px] w-[250px] bg-violet-300  border-2 border-violet-700 ">
							program 1
						</div>
						<div className="h-[100px] w-[250px] bg-violet-300  border-2 border-violet-700 ">
							program 1
						</div>
						<div className="h-[100px] w-[250px] bg-violet-300  border-2 border-violet-700 ">
							program 1
						</div>
						<div className="h-[100px] w-[250px] bg-violet-300  border-2 border-violet-700 ">
							program 1
						</div>
						<div className="h-[100px] w-[250px] bg-violet-300  border-2 border-violet-700 ">
							program 1
						</div>
						<div className="h-[100px] w-[250px] bg-violet-300  border-2 border-violet-700 ">
							program 1
						</div>
						<div className="h-[100px] w-[250px] bg-violet-300  border-2 border-violet-700 ">
							program 1
						</div>
						<div className="h-[100px] w-[250px] bg-violet-300  border-2 border-violet-700 ">
							program 1
						</div>
						<div className="h-[100px] w-[250px] bg-violet-300  border-2 border-violet-700 ">
							program 1
						</div>
						<div className="h-[100px] w-[250px] bg-violet-300  border-2 border-violet-700 ">
							program 1
						</div>
						<div className="h-[100px] w-[250px] bg-violet-300  border-2 border-violet-700 ">
							program 1
						</div>
						<div className="h-[100px] w-[250px] bg-violet-300  border-2 border-violet-700 ">
							program 1
						</div>
						<div className="h-[100px] w-[250px] bg-violet-300  border-2 border-violet-700 ">
							program 1
						</div>
						<div className="h-[100px] w-[250px] bg-violet-300  border-2 border-violet-700 ">
							program 1
						</div>
						<div className="h-[100px] w-[250px] bg-violet-300  border-2 border-violet-700 ">
							program 1
						</div>
						<div className="h-[100px] w-[250px] bg-violet-300  border-2 border-violet-700 ">
							program 1
						</div>
						<div className="h-[100px] w-[250px] bg-violet-300  border-2 border-violet-700 ">
							program 1
						</div>
						<div className="h-[100px] w-[250px] bg-violet-300  border-2 border-violet-700 ">
							program 1
						</div>
						<div className="h-[100px] w-[250px] bg-violet-300  border-2 border-violet-700 ">
							program 1
						</div>
						<div className="h-[100px] w-[250px] bg-violet-300  border-2 border-violet-700 ">
							program 1
						</div>
						<div className="h-[100px] w-[250px] bg-violet-300  border-2 border-violet-700 ">
							program 1
						</div>
						<div className="h-[100px] w-[250px] bg-violet-300  border-2 border-violet-700 ">
							program 1
						</div>
						<div className="h-[100px] w-[250px] bg-violet-300  border-2 border-violet-700 ">
							program 1
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Demo;

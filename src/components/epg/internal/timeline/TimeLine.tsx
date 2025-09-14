import { useVirtualizer } from "@tanstack/react-virtual";
import {
	useCallback,
	useEffect,
	useLayoutEffect,
	useMemo,
	useRef,
} from "react";
import Channel from "@/components/ui/Channel";
import Program from "@/components/ui/Program";
import useEpgStore from "@/store/useEpgStore";
import { getHoursHeaderFromDates } from "@/utils";
import { HEIGHT_PROGRAM_CONTAINER, SIZE_BLOCK } from "@/utils/constants";
import TimeLineHours from "./TimeLineHours";
import TimeLineNavigation from "./TimeLineNavigation";

const TimeLine = () => {
	const timesDivRef = useRef<HTMLDivElement>(null);
	const containerRef = useRef<HTMLDivElement>(null);

	const { entry, response } = useEpgStore((state) => state.entry) || {};

	const channelsList = response?.channels || [];

	const MAX_SCROLL_WIDTH = 5000;

	const visibleHours = useMemo(() => {
		if (!entry || !entry.date_from || !entry.date_to) return [];
		return getHoursHeaderFromDates(entry.date_from, entry.date_to);
	}, [entry]);

	const columnVirtualizer = useVirtualizer({
		horizontal: false,
		count: channelsList.length,
		getScrollElement: () => containerRef.current,
		estimateSize: () => HEIGHT_PROGRAM_CONTAINER,
		overscan: 20,
	});

	const channelsItems = columnVirtualizer.getVirtualItems();

	useLayoutEffect(() => {
		columnVirtualizer.measure();
	}, [columnVirtualizer]);

	const totalSize = Math.min(
		visibleHours.length * SIZE_BLOCK,
		MAX_SCROLL_WIDTH,
	);
	const totalSizeChannels = channelsList.length * HEIGHT_PROGRAM_CONTAINER;

	const formatHour = useCallback(
		(unix: number) =>
			new Date(unix * 1000).toLocaleTimeString([], {
				hour: "2-digit",
				minute: "2-digit",
			}),
		[],
	);

	useEffect(() => {
		const el = containerRef.current;
		if (!el) return;
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
			timesDivRef.current.scrollLeft = 0;
		}
		el.addEventListener("scroll", onScroll, { passive: true });
		return () => {
			el.removeEventListener("scroll", onScroll);
			if (raf) cancelAnimationFrame(raf);
		};
	}, []);

	return (
		<div
			aria-label="EPG timeline"
			className="bg-black overflow-hidden"
			role="presentation"
		>
			<header className="top-0">
				<div className="w-[250px] h-[50px] text-center text-epg-baby-powder  flex items-center justify-center fixed z-10 bg-black">
					<span>DIA</span>
				</div>

				<TimeLineNavigation ref={containerRef} />
				<TimeLineHours ref={timesDivRef} visibleHours={visibleHours} />
			</header>
			<main
				ref={containerRef}
				className="flex flex-row w-full overflow-x-auto hide-scroll overflow-y-auto bg-black/10 scrollbar-hide"
				style={{ height: "60vh", minHeight: "400px" }}
				aria-label="EPG timeline Main content"
				data-testid="epg-timeline-main-content"
			>
				<div
					style={{
						width: `${totalSizeChannels}px`,
						height: `${channelsList.length * HEIGHT_PROGRAM_CONTAINER}px`,
						position: "relative",
					}}
					aria-hidden="true"
				></div>

				<aside
					className="flex flex-col sticky z-10 bg-black left-0  [&>div]:w-[250px] [&>div]:h-[100px] [&>div]:shrink-0"
					style={{
						height: `${totalSizeChannels}px`,
					}}
					aria-label="List of channels"
					data-testid="channels-list"
				>
					{channelsItems.map((virtual) => {
						const ch = channelsList[virtual.index];
						return (
							<div
								key={ch.id}
								className="absolute border-1   border-gray-700 top-0 left-0 w-[250px] h-[100px]"
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
				</aside>

				<section
					className="ml-[250px] border-2"
					style={{
						height: `${totalSizeChannels}px`,
					}}
					aria-label="Programs by channel"
					data-testid="programs-by-channel-section"
				>
					<div
						style={{
							width: `${totalSize}px`,
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
									data-testid="channel-list"
									style={{
										transform: `translateY(${virtual.start}px)`,
									}}
								>
									<ul className="flex lex-row flex-nowrap gap-1 overflow-x-auto overflow-y-auto [&>div]:shrink-0">
										{events.map((event, index) => {
											const { name, unix_begin, unix_end } = event;
											const start = formatHour(unix_begin);
											const end = formatHour(unix_end);
											return (
												<Program
													description=""
													key={`${index}-${ch.id}`}
													name={name}
													time={`${start} - ${end}`}
													width={SIZE_BLOCK}
													height={HEIGHT_PROGRAM_CONTAINER}
													aria-label={`Program ${name} of ${start} to ${end}`}
												/>
											);
										})}
									</ul>
								</div>
							);
						})}
					</div>
				</section>
			</main>
		</div>
	);
};
export default TimeLine;

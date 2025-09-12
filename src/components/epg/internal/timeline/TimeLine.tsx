import { useVirtualizer } from "@tanstack/react-virtual";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useMemo, useRef } from "react";
import { Button } from "@/components/ui/Button";
import Channel from "@/components/ui/Channel";
import Program from "@/components/ui/Program";
import useEpgStore from "@/store/useEpgStore";
import { getHoursHeaderFromDates } from "@/utils";
import { HEIGHT_PROGRAM_CONTAINER, SIZE_BLOCK } from "@/utils/constants";
import TimeLineFilter from "./TimeLineFilter";
import TimeLineHours from "./TimeLineHours";

const TimeLine = () => {
	const timesDivRef = useRef<HTMLDivElement>(null);
	const containerRef = useRef<HTMLDivElement>(null);

	const channels = useEpgStore.getState();
	const { entry, response } = channels.entry;
	const { channels: channelsList } = response;

	const pxPerMinute = 6;
	const slotWidth = 15 * pxPerMinute;
	const MAX_SCROLL_WIDTH = 5000;

	const visibleHours = useMemo(() => {
		return getHoursHeaderFromDates(entry.date_from, entry.date_to);
	}, [entry.date_from, entry.date_to]);

	const columnVirtualizer = useVirtualizer({
		horizontal: false,
		count: channelsList.length,
		getScrollElement: () => containerRef.current,
		estimateSize: () => HEIGHT_PROGRAM_CONTAINER,
		overscan: 5,
	});
	const channelsItems = columnVirtualizer.getVirtualItems();

	const scrollBy = (amount: number) => {
		if (containerRef.current) {
			containerRef.current.scrollLeft += amount;
		}
	};

	const totalSize = Math.min(
		visibleHours.length * SIZE_BLOCK,
		MAX_SCROLL_WIDTH,
	);
	const totalSizeChannels = Math.min(
		channelsList.length * SIZE_BLOCK,
		MAX_SCROLL_WIDTH,
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
				<TimeLineFilter />
				<div className="w-[250px] h-[50px] text-center text-epg-baby-powder  flex items-center justify-center fixed z-10 bg-black">
					<span>DIA</span>
				</div>
				<nav
					className=" text-white flex items-center fixed z-20 right-0"
					aria-label="Controles de desplazamiento temporal"
				>
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

				{/* Hours Header */}
				<TimeLineHours ref={timesDivRef} visibleHours={visibleHours} />
			</header>

			<main
				ref={containerRef}
				className="flex flex-row w-full overflow-x-auto hide-scroll overflow-y-auto bg-black/10 scrollbar-hide"
				style={{ height: "90vh", minHeight: "400px" }}
				aria-label="EPG timeline Main content"
				data-testid="epg-timeline-main-content"
			>
				<div
					style={{
						width: `${totalSizeChannels}px`,
						height: "100%",
						position: "relative",
					}}
					aria-hidden="true"
				></div>

				<aside
					className="flex flex-col sticky z-10 bg-black left-0 h-full  [&>div]:w-[250px] [&>div]:h-[100px] [&>div]:shrink-0"
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
					className="h-[100px] ml-[250px] border-2"
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
											return (
												<Program
													key={`${index}-${ch.id}`}
													name={name}
													time={`${new Date(unix_begin * 1000).toLocaleTimeString()} - ${new Date(unix_end * 1000).toLocaleTimeString()}`}
													width={SIZE_BLOCK}
													height={HEIGHT_PROGRAM_CONTAINER}
													aria-label={`Programs ${name} from ${new Date(unix_begin * 1000).toLocaleTimeString()} to ${new Date(unix_end * 1000).toLocaleTimeString()}`}
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

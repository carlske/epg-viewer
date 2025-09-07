import { ChevronLeft, ChevronRight } from "lucide-react";
import { Fragment, useRef } from "react";
import { Button } from "@/components/ui/Button";
import Channel from "@/components/ui/Channel";
import useEpgStore from "@/store/useEpgStore";
import { getHoursHeaderFromDates } from "@/utils";

const pxPerMinute = 6;
const slotWidth = 30 * pxPerMinute;
const baseUnix = 13 * 60 * 60;

const TimeLineGrid = () => {
	const { entry, response } = useEpgStore.getState().entry;
	const { channels: channelsList } = response;

	const hours = getHoursHeaderFromDates(entry.date_from, entry.date_to);

	const scrollerRef = useRef<HTMLDivElement>(null);

	const scrollBy = (amount: number) => {
		if (scrollerRef.current) scrollerRef.current.scrollLeft += amount;
	};

	function toPx(unix: number) {
		return ((unix - baseUnix) / 60) * pxPerMinute;
	}

	return (
		<div className="w-full h-full relative">
			<div className="text-epg-baby-powder absolute right-2 top-0 z-50 flex gap-1">
				<Button
					variant="ghost"
					size="icon"
					className="bg-black pointer-events-auto"
					onClick={() => scrollBy(-slotWidth * 2)}
					aria-label="Scroll Left"
				>
					<ChevronLeft aria-hidden="true" size={20} />
				</Button>
				<Button
					size="icon"
					variant="ghost"
					className="bg-black pointer-events-auto"
					onClick={() => scrollBy(slotWidth * 2)}
					aria-label="Scroll Right"
				>
					<ChevronRight aria-hidden="true" size={20} />
				</Button>
			</div>

			<div ref={scrollerRef} className="w-full h-full overflow-auto">
				<div
					className="relative grid"
					style={{
						gridTemplateColumns: `300px repeat(${hours.length}, ${slotWidth}px)`,
					}}
				>
					<div className="sticky top-0 left-0 z-40 h-10 bg-black text-white flex items-center justify-center border-b border-gray-800">
						Hoy
					</div>

					{hours.map((h) => (
						<div
							key={h}
							className="sticky top-0 z-30 h-10 bg-black text-white flex items-center justify-center border-b border-gray-800"
						>
							{h}
						</div>
					))}

					{channelsList.map((ch) => (
						<Fragment key={ch.id}>
							<div className="sticky left-0 z-20 h-[100px] bg-black border-b border-gray-800 flex items-center gap-4 p-1">
								<Channel
									imageLarge={ch.group.common.image_large}
									imageMedium={ch.group.common.image_medium}
									imageSmall={ch.group.common.image_small}
									canalNumber={ch.name}
									alt={ch.name}
								/>
							</div>

							{hours.map((_, i) => {
								const hourStartUnix = baseUnix + i * 60 * 60;
								const hourEndUnix = hourStartUnix + 60 * 60;
								const eventsInCell = ch.events
									.slice(0, 50)
									.filter(
										(event) =>
											event.unix_begin < hourEndUnix &&
											event.unix_end > hourStartUnix,
									);

								return (
									<div
										key={hours[i]}
										className="relative h-[100px] border-b border-gray-800"
									>
										{eventsInCell.map((event) => {
											const clampedStart = Math.max(
												event.unix_begin,
												hourStartUnix,
											);
											const clampedEnd = Math.min(event.unix_end, hourEndUnix);

											const left = toPx(clampedStart) - toPx(hourStartUnix);
											const width = Math.max(
												1,
												toPx(clampedEnd) - toPx(clampedStart),
											);

											return (
												<div
													key={`${event.id}-${i}`}
													className="absolute top-1 h-16 bg-blue-500 text-white px-2 flex items-center overflow-hidden rounded"
													style={{ left, width }}
													title={event.name}
												>
													<span className="truncate">{event.name}</span>
												</div>
											);
										})}
									</div>
								);
							})}
						</Fragment>
					))}
				</div>
			</div>
		</div>
	);
};

export default TimeLineGrid;

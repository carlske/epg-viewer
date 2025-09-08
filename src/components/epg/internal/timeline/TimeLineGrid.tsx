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
	const channels = useEpgStore.getState();

	const { entry, response } = channels.entry;
	const { channels: channelsList } = response;

	console.log("channels :;", entry);
	console.log("entry :;", channelsList);

	const hours = Array.from({ length: 12 }, (_, i) => `${13 + i}:00`);

	const visibleHours = getHoursHeaderFromDates(entry.date_from, entry.date_to);

	console.log("visibleHours :;", visibleHours);

	const gridRef = useRef<HTMLDivElement>(null);
	const scrollBy = (amount: number) => {
		if (gridRef.current) {
			gridRef.current.scrollLeft += amount;
		}
	};

	function toPx(unix: number) {
		return ((unix - baseUnix) / 60) * pxPerMinute;
	}

	return (
		<div className="w-full h-full overflow-auto" ref={gridRef}>
			<div
				className="grid"
				style={{
					gridTemplateColumns: `300px repeat(${hours.length}, ${slotWidth}px)`,
					scrollBehavior: "smooth",
				}}
			>
				<div className="sticky top-0 left-0 z-20 bg-black text-white flex items-center justify-center">
					Hoy
				</div>
				{hours.map((h) => (
					<div
						key={h}
						className="sticky top-0 z-10 bg-black text-white text-center h-10"
					>
						{h}
					</div>
				))}

				<div className="text-white flex items-center fixed z-20 right-0">
					<Button
						variant="ghost"
						size="icon"
						className="bg-black"
						onClick={() => scrollBy(-slotWidth * 2)}
						aria-label="Scroll Left"
					>
						<ChevronLeft aria-hidden="true" size={20} />
					</Button>
					<Button
						size="icon"
						variant="ghost"
						className="bg-black"
						onClick={() => scrollBy(slotWidth * 2)}
						aria-label="Scroll Right"
					>
						<ChevronRight aria-hidden="true" size={20} />
					</Button>
				</div>

				{channelsList.map((ch) => (
					<Fragment key={ch.id}>
						<div className="sticky left-0 z-10 bg-gray-900 h-[100px] flex items-center gap-4 p-1">
							<Channel
								imageLarge={ch.group.common.image_large}
								imageMedium={ch.group.common.image_medium}
								imageSmall={ch.group.common.image_small}
								canalNumber={ch.name}
								alt={ch.name}
							/>
						</div>

						{hours.map((hour, i) => {
							const hourStartUnix = baseUnix + i * 60 * 60;
							const hourEndUnix = hourStartUnix + 60 * 60;
							const eventsInCell = ch.events
								.slice(0, 2)
								.filter(
									(event) =>
										event.unix_begin >= hourStartUnix &&
										event.unix_begin < hourEndUnix,
								);
							return (
								<div key={hour} className="border-b h-[100px] relative">
									{eventsInCell.map((event) => {
										const left = toPx(event.unix_begin) - toPx(hourStartUnix);
										const width = toPx(event.unix_end) - toPx(event.unix_begin);
										return (
											<div
												key={event.id}
												className="absolute top-0 h-16 bg-blue-500"
												style={{ left, width }}
											>
												{event.name}
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
	);
};

export default TimeLineGrid;

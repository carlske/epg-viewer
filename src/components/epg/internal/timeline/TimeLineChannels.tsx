import { useVirtualizer } from "@tanstack/react-virtual";
import { useId, useRef } from "react";
import Channel from "@/components/ui/Channel";
import useEpgStore from "@/store/useEpgStore";

const TimeLineChannels = () => {
	const entry = useEpgStore.getState().entry;
	const parentRef = useRef<HTMLDivElement>(null);
	const id = useId();

	const rowVirtualizer = useVirtualizer({
		count: entry.response.channels.length,
		getScrollElement: () => parentRef.current,
		estimateSize: () => 70,
	});

	return (
		<div className="md:w-[300px]">
			<div className="flex items-center justify-center p-2">
				<span>HOY</span>
			</div>
			<div
				className="overflow-y-auto scrollbar-hide"
				style={{ height: rowVirtualizer.getTotalSize() }}
				id={`${id}-list`}
				ref={parentRef}
			>
				<div className="grid grid-row-1 gap-2">
					{entry.response.channels.map((channel) => (
						<Channel
							key={channel.id}
							canalNumber={channel.number}
							alt={channel.name}
							imageLarge={channel.group.common.image_large}
							imageMedium={channel.group.common.image_medium}
							imageSmall={channel.group.common.image_small}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export default TimeLineChannels;

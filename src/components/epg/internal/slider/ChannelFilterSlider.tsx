import { useVirtualizer } from "@tanstack/react-virtual";
import { useRef } from "react";
import Channel from "@/components/ui/Channel";
import useEpgStore from "@/store/useEpgStore";
import { HEIGHT_PROGRAM_CONTAINER } from "@/utils/constants";

const ChannelFilterSlider = () => {
	const { response } = useEpgStore((state) => state.entry) || {};
	const containerRef = useRef<HTMLDivElement>(null);
	const channelsList = response?.channels || [];

	const columnVirtualizer = useVirtualizer({
		horizontal: false,
		count: channelsList.length,
		getScrollElement: () => containerRef.current,
		estimateSize: () => HEIGHT_PROGRAM_CONTAINER,
		overscan: 10,
	});

	const virtualItems = columnVirtualizer.getVirtualItems();

	return (
		<section ref={containerRef} className="w-[450px] overflow-y-auto relative">
			<div
				style={{
					height: `100vh`,
				}}
			>
				{virtualItems.map((virtualItem) => {
					const channel = channelsList[virtualItem.index];
					return (
						<div
							key={channel.id}
							className="absolute p-1 "
							style={{
								top: `${virtualItem.start}px`,
							}}
						>
							<Channel
								imageLarge={channel.group.common.image_large}
								imageMedium={channel.group.common.image_medium}
								imageSmall={channel.group.common.image_small}
								canalNumber={channel.name}
								alt={channel.name}
							/>
						</div>
					);
				})}
			</div>
		</section>
	);
};

export default ChannelFilterSlider;

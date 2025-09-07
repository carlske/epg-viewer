import Channel from "@/components/ui/Channel";
import useEpgStore from "@/store/useEpgStore";

const TimeLineChannels = () => {
	const channels = useEpgStore.getState().channels;

	return (
		<div className="md:w-[300px]">
			<div className="flex items-center justify-center p-3">
				<span>HOY</span>
			</div>
			<div className="overflow-y-auto max-h-[40em]">
				<div className="grid grid-row-1 gap-2">
					{channels.map((channel) => (
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

import { memo } from "react";
import useEpgStore from "@/store/useEpgStore";

interface ProgramProps {
	id?: string;
	name: string;
	time: string;
	width: number;
	height: number;
	channelId?: string;
}

const Program = memo<ProgramProps>(
	({ id, name, time, width, height, channelId }: ProgramProps) => {
		const setSelectedProgram = useEpgStore((state) => state.setSelectedProgram);

		const handleMouseEnter = () => {
			setSelectedProgram({
				id: id ?? "",
				name,
				time,
				channelId: channelId ?? "",
			});
		};

		return (
			<li
				data-testid="program-item"
				onMouseEnter={handleMouseEnter}
				className="bg-gray-600 text-epg-baby-powder cursor-pointer hover:bg-primary  p-4 flex flex-col justify-center"
				style={{ width, height }}
			>
				<span>{name}</span>
				<span>{time}</span>
			</li>
		);
	},
);

export default Program;

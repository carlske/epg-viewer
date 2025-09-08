interface ProgramProps {
	name: string;
	time: string;
	width: number;
	height: number;
}

const Program = ({ name, time, width, height }: ProgramProps) => {
	return (
		<div
			className="bg-gray-600 text-epg-baby-powder cursor-pointer hover:bg-primary  p-4 flex flex-col justify-center"
			style={{ width, height }}
		>
			<span>{name}</span>
			<span>{time}</span>
		</div>
	);
};

export default Program;

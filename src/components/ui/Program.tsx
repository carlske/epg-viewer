interface ProgramProps {
	name: string;
	time: string;
}

const Program = ({ name, time }: ProgramProps) => {
	return (
		<div className="bg-epg-eerie-black border-1 hover:bg-gray-700  border-gray-700 p-4 flex flex-col justify-center">
			<span>{name}</span>
			<span>{time}</span>
		</div>
	);
};

export default Program;

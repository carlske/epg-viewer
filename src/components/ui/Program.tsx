interface ProgramProps {
	name: string;
	time: string;
}

const Program = ({ name, time }: ProgramProps) => {
	return (
		<div className="bg-epg-baby-powder border-2 border-epg-eerie-black p-4  w-full h-full flex flex-col justify-center">
			<div>
				<span>{name}</span>
				<span>{time}</span>
			</div>
		</div>
	);
};

export default Program;

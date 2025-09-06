import { useId } from "react";

type ProgramInfoProps = {
	title: string;
	description: string;
	time: string;
};

const ProgramInfo = ({ title, description, time }: ProgramInfoProps) => {
	const programTitleId = useId();
	return (
		<section
			className="mb-4 mt-5 flex flex-col text-epg-baby-powder gap-3 p-4 w-[95%] sm:w-[90%] md:w-[80%] lg:w-[60%] xl:w-[50%]"
			aria-label={`Information program: ${title}`}
		>
			<h2 id={programTitleId}>{title}</h2>
			<span aria-describedby={programTitleId}>{time}</span>
			<p className="text-balance leading-relaxed">{description}</p>
		</section>
	);
};

export default ProgramInfo;

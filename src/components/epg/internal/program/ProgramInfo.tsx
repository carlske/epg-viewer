import { useId } from "react";

type ProgramInfoProps = {
	title?: string;
	description?: string;
	time?: string;
};

const ProgramInfo = ({
	title = "Unknown Program",
	description = "No description available",
	time = "Unknown time",
}: ProgramInfoProps) => {
	const programTitleId = useId();

	return (
		<section
			aria-label="Program information"
			className="justify-start mt-6 p-2 flex flex-col text-epg-baby-powder gap-3 w-[95%] sm:w-[90%] md:w-[80%] lg:w-[60%] xl:w-[50%]"
		>
			<h2 className="title" id={programTitleId}>
				{title}
			</h2>
			<span aria-describedby={programTitleId}>{time}</span>
			<p className="text-balance leading-relaxed">{description}</p>
		</section>
	);
};

export default ProgramInfo;

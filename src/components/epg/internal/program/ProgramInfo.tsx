import { useId } from "react";
import useEpgStore from "@/store/useEpgStore";

const ProgramInfo = () => {
	const programTitleId = useId();

	const selectedProgram = useEpgStore((state) => state.selectedProgram);

	return (
		<section
			aria-label="Program information"
			className="justify-start mt-6 p-4 flex flex-col text-epg-baby-powder gap-3 w-[95%] sm:w-[90%] md:w-[80%] lg:w-[60%] xl:w-[50%]"
		>
			<h2 className="channel-details-animation  title" id={programTitleId}>
				{selectedProgram?.name || "Unknown Program"}
			</h2>
			<span
				className="channel-details-animation "
				aria-describedby={programTitleId}
			>
				{selectedProgram?.time || "Unknown time"}
			</span>
			<p className="channel-details-animation  text-balance leading-relaxed">
				{selectedProgram?.channelId || "No description available"}
			</p>
		</section>
	);
};

export default ProgramInfo;

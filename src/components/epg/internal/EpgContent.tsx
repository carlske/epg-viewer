import Demo from "@/components/epg/internal/timeline/Demo";
import ProgramInfo from "./program/ProgramInfo";

const Epgcontent = () => {
	return (
		<div
			className="grid grid-cols-1 gap-4 h-screen"
			style={{ gridTemplateRows: "40% 60%" }}
		>
			<div className="flex items-center justify-start ">
				<ProgramInfo
					title="Program Title"
					time="10:00 AM - 11:00 AM"
					description="This is a detailed description of the program. It provides insights into the content and what viewers can expect."
				/>
			</div>
			<Demo />
		</div>
	);
};
export default Epgcontent;

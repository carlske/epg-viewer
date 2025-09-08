import ProgramInfo from "./program/ProgramInfo";
import TimeLine from "./timeline/TimeLine";

const Epgcontent = () => {
	return (
		<article
			className="grid grid-cols-1 gap-4 h-screen"
			style={{ gridTemplateRows: "40% 60%" }}
			aria-label="EPG main content"
		>
			<section
				className="flex items-center justify-start"
				aria-label="Program information"
			>
				<ProgramInfo
					title="Program Title"
					time="10:00 AM - 11:00 AM"
					description="This is a detailed description of the program. It provides insights into the content and what viewers can expect."
				/>
			</section>
			<section aria-label="EPG timeline">
				<TimeLine />
			</section>
		</article>
	);
};
export default Epgcontent;

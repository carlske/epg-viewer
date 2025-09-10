import ProgramInfo from "./program/ProgramInfo";
import TimeLine from "./timeline/TimeLine";

const Epgcontent = () => {
	return (
		<article
			className="grid grid-cols-1 gap-4 h-screen"
			style={{ gridTemplateRows: "40% 60%" }}
			aria-label="EPG main content"
		>
			<ProgramInfo />
			<TimeLine />
		</article>
	);
};
export default Epgcontent;

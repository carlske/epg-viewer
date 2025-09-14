import ProgramInfo from "./program/ProgramInfo";
import TimeLine from "./timeline/TimeLine";
import TimeLineFilter from "./timeline/TimeLineFilter";

const EpgContent = () => {
	return (
		<article aria-label="EPG main content">
			<ProgramInfo />
			<div className="fixed left-0 right-0 bottom-0 w-full">
				<TimeLineFilter />
				<TimeLine />
			</div>
		</article>
	);
};

export default EpgContent;

import Skeleton from "./Skeleton";

interface SkeletonSliderProps {
	open?: boolean;
}

const SkeletonSlider = ({ open }: SkeletonSliderProps) => {
	return (
		<div
			className={
				open
					? "animate-fade-up animate-duration-[700ms] animate-ease-in-out"
					: ""
			}
		>
			<div className="h-4" />
			<Skeleton width="100%" height="200px" />
			<div className="h-4" />
			<Skeleton width="100%" height="200px" />
			<div className="h-4" />
			<Skeleton width="100%" height="200px" />
			<div className="h-4" />
			<Skeleton width="100%" height="200px" />
			<div className="h-4" />
			<Skeleton width="100%" height="200px" />
		</div>
	);
};
export default SkeletonSlider;

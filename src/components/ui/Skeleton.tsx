interface SkeletonProps {
	width: string;
	height: string;
}

const Skeleton = ({ width = "100%", height = "24px" }: SkeletonProps) => {
	return (
		<div className="animate-pulse bg-gray-300" style={{ width, height }} />
	);
};

export default Skeleton;

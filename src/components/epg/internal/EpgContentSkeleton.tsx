import Skeleton from "@/components/ui/Skeleton";

const EpgcontentSkeleton = () => {
	return (
		<article
			className="grid grid-cols-1 gap-4 h-screen"
			style={{ gridTemplateRows: "40% 60%" }}
			aria-label="EPG main content skeleton"
		>
			<section
				className="flex flex-col gap-2 items-start justify-center"
				aria-label="Program information"
			>
				<Skeleton width="60vw" height="4em" />
				<Skeleton width="60vw" height="4em" />
				<Skeleton width="60vw" height="4em" />
			</section>
			<section aria-label="EPG timeline">
				<Skeleton width="100vw" height="100vh" />
			</section>
		</article>
	);
};
export default EpgcontentSkeleton;

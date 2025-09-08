import { useEffect } from "react";

interface ScrollHeaderProps {
	containerRef: React.RefObject<HTMLDivElement | null>;
	timesDivRef: React.RefObject<HTMLDivElement | null>;
}

const useScrollHeader = ({ containerRef, timesDivRef }: ScrollHeaderProps) => {
	useEffect(() => {
		const el = containerRef.current;
		if (!el) return;

		el.scrollLeft = 0;

		let raf = 0;
		const onScroll = () => {
			const x = el.scrollLeft;
			if (!raf) {
				raf = requestAnimationFrame(() => {
					raf = 0;
					if (timesDivRef.current) {
						timesDivRef.current.scrollLeft = x;
					}
				});
			}
		};

		if (timesDivRef.current) {
			timesDivRef.current.scrollLeft = 0;
		}

		el.addEventListener("scroll", onScroll, { passive: true });
		return () => {
			el.removeEventListener("scroll", onScroll);
			if (raf) cancelAnimationFrame(raf);
		};
	}, [containerRef.current, timesDivRef.current]);
};
export default useScrollHeader;

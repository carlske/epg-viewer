import { type ImgHTMLAttributes, memo, useMemo } from "react";

interface CustomImageProps
	extends Omit<
		ImgHTMLAttributes<HTMLImageElement>,
		"src" | "srcSet" | "sizes"
	> {
	imageLarge: string;
	imageMedium?: string;
	imageSmall?: string;
	width?: number;
	height?: number;
	className?: string;
}

const Image = memo(
	({
		imageLarge,
		imageMedium,
		imageSmall,
		alt,
		className,
		width,
		height,
		...rest
	}: CustomImageProps) => {
		const srcSet = useMemo(() => {
			const sources = [];

			if (imageSmall) sources.push(`${imageSmall} 640w`);
			if (imageMedium) sources.push(`${imageMedium} 1024w`);
			sources.push(`${imageLarge} 1920w`);

			return sources.join(", ");
		}, [imageLarge, imageMedium, imageSmall]);

		return (
			<img
				src={imageLarge}
				srcSet={srcSet}
				sizes="(max-width: 640px) 640px, (max-width: 1024px) 1024px, 1920px"
				alt={alt}
				loading="lazy"
				className={className}
				width={width}
				height={height}
				{...rest}
			/>
		);
	},
);

export default Image;

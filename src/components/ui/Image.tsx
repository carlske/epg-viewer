import type { ImgHTMLAttributes } from "react";

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

const Image = ({
	imageLarge,
	imageMedium,
	imageSmall,
	alt,
	className,
	width,
	height,
	...rest
}: CustomImageProps) => {
	const srcSet = [
		imageSmall ? `${imageSmall} 640w` : "",
		imageMedium ? `${imageMedium} 1024w` : "",
		`${imageLarge} 1920w`,
	]
		.filter(Boolean)
		.join(", ");

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
};

export default Image;

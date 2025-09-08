import Image from "./Image";

interface ChannelProps {
	imageLarge: string;
	imageMedium: string;
	imageSmall: string;
	canalNumber: string;
	alt: string;
}

const Channel = ({ canalNumber, alt, ...props }: ChannelProps) => {
	return (
		<div className="h-full w-full  grid grid-cols-2 items-center gap-5 justify-center bg-epg-eerie-black">
			<div className="font-font-bold text-epg-baby-powder text-balance p-2 ">
				<span>{canalNumber}</span>
			</div>
			<div className="">
				<Image className="w-[80%]" {...props} width={250} height={250} />
			</div>
		</div>
	);
};
export default Channel;

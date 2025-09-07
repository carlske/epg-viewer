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
		<div className=" md:w-[300px] p-1 flex items-center  bg-epg-eerie-black">
			<div className="ml-6 font-font-bold text-lg w-full">
				<span>{canalNumber}</span>
			</div>
			<div className="p-1">
				<Image {...props} width={250} height={250} />
			</div>
		</div>
	);
};
export default Channel;

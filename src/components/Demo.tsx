import { useRef } from "react";
import Channel from "./ui/Channel";
import Program from "./ui/Program";

const Demo = () => {
	const timesDivRef = useRef<HTMLDivElement>(null);
	const containerRef = useRef<HTMLDivElement>(null);

	const handleContainerScroll = () => {
		if (timesDivRef.current && containerRef.current) {
			timesDivRef.current.scrollLeft = containerRef.current.scrollLeft;
		}
	};

	const heightProgramContainer = 100;

	return (
		<div className="bg-black overflow-hidden">
			<div className=" top-0">
				{/* Header */}
				<div className="w-[250px] h-[50px] text-center text-epg-baby-powder fixed z-10 bg-primary ">
					DIA
				</div>

				{/* Time */}

				<div
					ref={timesDivRef}
					className="flex fixed flex-row  left-[250px] top-0 bg-black
						[&>div]:w-[250px] [&>div]:h-[50px] overflow-hidden [&>div]:shrink-0 gap-1"
				>
					<div className="h-full flex justify-center items-center text-epg-baby-powder">
						<span>1444</span>
					</div>
					<div className="h-full flex justify-center items-center text-epg-baby-powder">
						<span>1444</span>
					</div>{" "}
					<div className="h-full flex justify-center items-center text-epg-baby-powder">
						<span>1444</span>
					</div>{" "}
					<div className="h-full flex justify-center items-center text-epg-baby-powder">
						<span>1444</span>
					</div>{" "}
					<div className="h-full flex justify-center items-center text-epg-baby-powder">
						<span>1444</span>
					</div>{" "}
					<div className="h-full flex justify-center items-center text-epg-baby-powder">
						<span>1444</span>
					</div>{" "}
					<div className="h-full flex justify-center items-center text-epg-baby-powder">
						<span>1444</span>
					</div>{" "}
					<div className="h-full flex justify-center items-center text-epg-baby-powder">
						<span>1444</span>
					</div>{" "}
					<div className="h-full flex justify-center items-center text-epg-baby-powder">
						<span>1444</span>
					</div>{" "}
					<div className="h-full flex justify-center items-center text-epg-baby-powder">
						<span>1444</span>
					</div>{" "}
					<div className="h-full flex justify-center items-center text-epg-baby-powder">
						<span>1444</span>
					</div>{" "}
					<div className="h-full flex justify-center items-center text-epg-baby-powder">
						<span>1444</span>
					</div>{" "}
					<div className="h-full flex justify-center items-center text-epg-baby-powder">
						<span>1444</span>
					</div>{" "}
					<div className="h-full flex justify-center items-center text-epg-baby-powder">
						<span>1444</span>
					</div>{" "}
					<div className="h-full flex justify-center items-center text-epg-baby-powder">
						<span>1444</span>
					</div>{" "}
					<div className="h-full flex justify-center items-center text-epg-baby-powder">
						<span>1444</span>
					</div>{" "}
					<div className="h-full flex justify-center items-center text-epg-baby-powder">
						<span>1444</span>
					</div>{" "}
					<div className="h-full flex justify-center items-center text-epg-baby-powder">
						<span>1444</span>
					</div>{" "}
					<div className="h-full flex justify-center items-center text-epg-baby-powder">
						<span>1444</span>
					</div>{" "}
					<div className="h-full flex justify-center items-center text-epg-baby-powder">
						<span>1444</span>
					</div>{" "}
					<div className="h-full flex justify-center items-center text-epg-baby-powder">
						<span>1444</span>
					</div>{" "}
					<div className="h-full flex justify-center items-center text-epg-baby-powder">
						<span>1444</span>
					</div>{" "}
					<div className="h-full flex justify-center items-center text-epg-baby-powder">
						<span>1444</span>
					</div>
				</div>
			</div>

			{/* Content */}
			<div
				ref={containerRef}
				className="flex flex-row w-full mt-[50px] overflow-x-auto bg-black/10 scrollbar-hide"
				onScroll={handleContainerScroll}
			>
				{/* Primera columna fija */}
				<div className="flex flex-col sticky  bg-black left-0 h-full gap-1 [&>div]:w-[250px]  [&>div]:h-[100px] [&>div]:shrink-0">
					<Channel
						alt=""
						canalNumber="1333"
						imageLarge="https://clarovideocdn6.clarovideo.net/CVPERU/PELICULAS/CANAL3GUATEMALA/EXPORTACION_WEB/SS/CANAL3GUATEMALAWHORIZONTAL.jpg?size=675x380"
						imageMedium="https://clarovideocdn4.clarovideo.net/CVPERU/PELICULAS/CANAL3GUATEMALA/EXPORTACION_WEB/SS/CANAL3GUATEMALAWVERTICAL.jpg?size=200x300"
						imageSmall="https://clarovideocdn6.clarovideo.net/CVPERU/PELICULAS/CANAL3GUATEMALA/EXPORTACION_WEB/SS/CANAL3GUATEMALAWHORIZONTAL.jpg?size=290x163"
					/>

					<Channel
						alt=""
						canalNumber="1333"
						imageLarge="https://clarovideocdn6.clarovideo.net/CVPERU/PELICULAS/CANAL3GUATEMALA/EXPORTACION_WEB/SS/CANAL3GUATEMALAWHORIZONTAL.jpg?size=675x380"
						imageMedium="https://clarovideocdn4.clarovideo.net/CVPERU/PELICULAS/CANAL3GUATEMALA/EXPORTACION_WEB/SS/CANAL3GUATEMALAWVERTICAL.jpg?size=200x300"
						imageSmall="https://clarovideocdn6.clarovideo.net/CVPERU/PELICULAS/CANAL3GUATEMALA/EXPORTACION_WEB/SS/CANAL3GUATEMALAWHORIZONTAL.jpg?size=290x163"
					/>

					<Channel
						alt=""
						canalNumber="1333"
						imageLarge="https://clarovideocdn6.clarovideo.net/CVPERU/PELICULAS/CANAL3GUATEMALA/EXPORTACION_WEB/SS/CANAL3GUATEMALAWHORIZONTAL.jpg?size=675x380"
						imageMedium="https://clarovideocdn4.clarovideo.net/CVPERU/PELICULAS/CANAL3GUATEMALA/EXPORTACION_WEB/SS/CANAL3GUATEMALAWVERTICAL.jpg?size=200x300"
						imageSmall="https://clarovideocdn6.clarovideo.net/CVPERU/PELICULAS/CANAL3GUATEMALA/EXPORTACION_WEB/SS/CANAL3GUATEMALAWHORIZONTAL.jpg?size=290x163"
					/>
					<Channel
						alt=""
						canalNumber="1333"
						imageLarge="https://clarovideocdn6.clarovideo.net/CVPERU/PELICULAS/CANAL3GUATEMALA/EXPORTACION_WEB/SS/CANAL3GUATEMALAWHORIZONTAL.jpg?size=675x380"
						imageMedium="https://clarovideocdn4.clarovideo.net/CVPERU/PELICULAS/CANAL3GUATEMALA/EXPORTACION_WEB/SS/CANAL3GUATEMALAWVERTICAL.jpg?size=200x300"
						imageSmall="https://clarovideocdn6.clarovideo.net/CVPERU/PELICULAS/CANAL3GUATEMALA/EXPORTACION_WEB/SS/CANAL3GUATEMALAWHORIZONTAL.jpg?size=290x163"
					/>
					<Channel
						alt=""
						canalNumber="1333"
						imageLarge="https://clarovideocdn6.clarovideo.net/CVPERU/PELICULAS/CANAL3GUATEMALA/EXPORTACION_WEB/SS/CANAL3GUATEMALAWHORIZONTAL.jpg?size=675x380"
						imageMedium="https://clarovideocdn4.clarovideo.net/CVPERU/PELICULAS/CANAL3GUATEMALA/EXPORTACION_WEB/SS/CANAL3GUATEMALAWVERTICAL.jpg?size=200x300"
						imageSmall="https://clarovideocdn6.clarovideo.net/CVPERU/PELICULAS/CANAL3GUATEMALA/EXPORTACION_WEB/SS/CANAL3GUATEMALAWHORIZONTAL.jpg?size=290x163"
					/>
					<Channel
						alt=""
						canalNumber="1333"
						imageLarge="https://clarovideocdn6.clarovideo.net/CVPERU/PELICULAS/CANAL3GUATEMALA/EXPORTACION_WEB/SS/CANAL3GUATEMALAWHORIZONTAL.jpg?size=675x380"
						imageMedium="https://clarovideocdn4.clarovideo.net/CVPERU/PELICULAS/CANAL3GUATEMALA/EXPORTACION_WEB/SS/CANAL3GUATEMALAWVERTICAL.jpg?size=200x300"
						imageSmall="https://clarovideocdn6.clarovideo.net/CVPERU/PELICULAS/CANAL3GUATEMALA/EXPORTACION_WEB/SS/CANAL3GUATEMALAWHORIZONTAL.jpg?size=290x163"
					/>
					<Channel
						alt=""
						canalNumber="1333"
						imageLarge="https://clarovideocdn6.clarovideo.net/CVPERU/PELICULAS/CANAL3GUATEMALA/EXPORTACION_WEB/SS/CANAL3GUATEMALAWHORIZONTAL.jpg?size=675x380"
						imageMedium="https://clarovideocdn4.clarovideo.net/CVPERU/PELICULAS/CANAL3GUATEMALA/EXPORTACION_WEB/SS/CANAL3GUATEMALAWVERTICAL.jpg?size=200x300"
						imageSmall="https://clarovideocdn6.clarovideo.net/CVPERU/PELICULAS/CANAL3GUATEMALA/EXPORTACION_WEB/SS/CANAL3GUATEMALAWHORIZONTAL.jpg?size=290x163"
					/>
					<Channel
						alt=""
						canalNumber="1333"
						imageLarge="https://clarovideocdn6.clarovideo.net/CVPERU/PELICULAS/CANAL3GUATEMALA/EXPORTACION_WEB/SS/CANAL3GUATEMALAWHORIZONTAL.jpg?size=675x380"
						imageMedium="https://clarovideocdn4.clarovideo.net/CVPERU/PELICULAS/CANAL3GUATEMALA/EXPORTACION_WEB/SS/CANAL3GUATEMALAWVERTICAL.jpg?size=200x300"
						imageSmall="https://clarovideocdn6.clarovideo.net/CVPERU/PELICULAS/CANAL3GUATEMALA/EXPORTACION_WEB/SS/CANAL3GUATEMALAWHORIZONTAL.jpg?size=290x163"
					/>
					<Channel
						alt=""
						canalNumber="1333"
						imageLarge="https://clarovideocdn6.clarovideo.net/CVPERU/PELICULAS/CANAL3GUATEMALA/EXPORTACION_WEB/SS/CANAL3GUATEMALAWHORIZONTAL.jpg?size=675x380"
						imageMedium="https://clarovideocdn4.clarovideo.net/CVPERU/PELICULAS/CANAL3GUATEMALA/EXPORTACION_WEB/SS/CANAL3GUATEMALAWVERTICAL.jpg?size=200x300"
						imageSmall="https://clarovideocdn6.clarovideo.net/CVPERU/PELICULAS/CANAL3GUATEMALA/EXPORTACION_WEB/SS/CANAL3GUATEMALAWHORIZONTAL.jpg?size=290x163"
					/>
					<Channel
						alt=""
						canalNumber="1333"
						imageLarge="https://clarovideocdn6.clarovideo.net/CVPERU/PELICULAS/CANAL3GUATEMALA/EXPORTACION_WEB/SS/CANAL3GUATEMALAWHORIZONTAL.jpg?size=675x380"
						imageMedium="https://clarovideocdn4.clarovideo.net/CVPERU/PELICULAS/CANAL3GUATEMALA/EXPORTACION_WEB/SS/CANAL3GUATEMALAWVERTICAL.jpg?size=200x300"
						imageSmall="https://clarovideocdn6.clarovideo.net/CVPERU/PELICULAS/CANAL3GUATEMALA/EXPORTACION_WEB/SS/CANAL3GUATEMALAWHORIZONTAL.jpg?size=290x163"
					/>
					<Channel
						alt=""
						canalNumber="1333"
						imageLarge="https://clarovideocdn6.clarovideo.net/CVPERU/PELICULAS/CANAL3GUATEMALA/EXPORTACION_WEB/SS/CANAL3GUATEMALAWHORIZONTAL.jpg?size=675x380"
						imageMedium="https://clarovideocdn4.clarovideo.net/CVPERU/PELICULAS/CANAL3GUATEMALA/EXPORTACION_WEB/SS/CANAL3GUATEMALAWVERTICAL.jpg?size=200x300"
						imageSmall="https://clarovideocdn6.clarovideo.net/CVPERU/PELICULAS/CANAL3GUATEMALA/EXPORTACION_WEB/SS/CANAL3GUATEMALAWHORIZONTAL.jpg?size=290x163"
					/>
					<Channel
						alt=""
						canalNumber="1333"
						imageLarge="https://clarovideocdn6.clarovideo.net/CVPERU/PELICULAS/CANAL3GUATEMALA/EXPORTACION_WEB/SS/CANAL3GUATEMALAWHORIZONTAL.jpg?size=675x380"
						imageMedium="https://clarovideocdn4.clarovideo.net/CVPERU/PELICULAS/CANAL3GUATEMALA/EXPORTACION_WEB/SS/CANAL3GUATEMALAWVERTICAL.jpg?size=200x300"
						imageSmall="https://clarovideocdn6.clarovideo.net/CVPERU/PELICULAS/CANAL3GUATEMALA/EXPORTACION_WEB/SS/CANAL3GUATEMALAWHORIZONTAL.jpg?size=290x163"
					/>
				</div>

				{/* Program Items */}
				<div className="h-[100px] border-2">
					<div
						className="flex flex-row  flex-nowrap gap-1 overflow-x-auto
                           [&>div]:shrink-0 "
					>
						<div className="h-[100px] w-[250px] bg-violet-300 border-2 border-violet-700">
							program 1
						</div>
						<Program
							name="Program 1"
							time="10:00 AM"
							width={250}
							height={heightProgramContainer}
						/>

						<Program
							name="Program 1"
							time="10:00 AM"
							width={250}
							height={heightProgramContainer}
						/>

						<Program
							name="Program 1"
							time="10:00 AM"
							width={250}
							height={heightProgramContainer}
						/>

						<div className="h-[100px] w-[250px] bg-violet-300  border-2 border-violet-700 ">
							program 1
						</div>
						<div className="h-[100px] w-[250px] bg-violet-300  border-2 border-violet-700 ">
							program 1
						</div>
						<div className="h-[100px] w-[250px] bg-violet-300  border-2 border-violet-700 ">
							program 1
						</div>
						<div className="h-[100px] w-[250px] bg-violet-300  border-2 border-violet-700 ">
							program 1
						</div>
						<div className="h-[100px] w-[250px] bg-violet-300  border-2 border-violet-700 ">
							program 1
						</div>
						<div className="h-[100px] w-[250px] bg-violet-300  border-2 border-violet-700 ">
							program 1
						</div>
						<div className="h-[100px] w-[250px] bg-violet-300  border-2 border-violet-700 ">
							program 1
						</div>
						<div className="h-[100px] w-[250px] bg-violet-300  border-2 border-violet-700 ">
							program 1
						</div>
						<div className="h-[100px] w-[250px] bg-violet-300  border-2 border-violet-700 ">
							program 1
						</div>
						<div className="h-[100px] w-[250px] bg-violet-300  border-2 border-violet-700 ">
							program 1
						</div>
						<div className="h-[100px] w-[250px] bg-violet-300  border-2 border-violet-700 ">
							program 1
						</div>
						<div className="h-[100px] w-[250px] bg-violet-300  border-2 border-violet-700 ">
							program 1
						</div>

						{/* ... */}
					</div>
					<div
						className="flex flex-row  flex-nowrap gap-1 overflow-x-auto
                           [&>div]:shrink-0 "
					>
						<div className="h-[100px] w-[250px] bg-violet-300 border-2 border-violet-700">
							program 1
						</div>
						<div className="h-[100px] w-[500px]  bg-violet-300  border-2 border-violet-700 ">
							program 1
						</div>
						<div className="h-[100px] w-[250px] bg-violet-300  border-2 border-violet-700 ">
							program 1
						</div>
						<div className="h-[100px] w-[250px] bg-violet-300  border-2 border-violet-700 ">
							program 1
						</div>
						<div className="h-[100px] w-[250px] bg-violet-300  border-2 border-violet-700 ">
							program 1
						</div>
						<div className="h-[100px] w-[250px] bg-violet-300  border-2 border-violet-700 ">
							program 1
						</div>
						<div className="h-[100px] w-[250px] bg-violet-300  border-2 border-violet-700 ">
							program 1
						</div>
						<div className="h-[100px] w-[250px] bg-violet-300  border-2 border-violet-700 ">
							program 1
						</div>
						<div className="h-[100px] w-[250px] bg-violet-300  border-2 border-violet-700 ">
							program 1
						</div>
						<div className="h-[100px] w-[250px] bg-violet-300  border-2 border-violet-700 ">
							program 1
						</div>
						<div className="h-[100px] w-[250px] bg-violet-300  border-2 border-violet-700 ">
							program 1
						</div>
						<div className="h-[100px] w-[250px] bg-violet-300  border-2 border-violet-700 ">
							program 1
						</div>
						<div className="h-[100px] w-[250px] bg-violet-300  border-2 border-violet-700 ">
							program 1
						</div>
						<div className="h-[100px] w-[250px] bg-violet-300  border-2 border-violet-700 ">
							program 1
						</div>
						<div className="h-[100px] w-[250px] bg-violet-300  border-2 border-violet-700 ">
							program 1
						</div>
						<div className="h-[100px] w-[250px] bg-violet-300  border-2 border-violet-700 ">
							program 1
						</div>
						<div className="h-[100px] w-[250px] bg-violet-300  border-2 border-violet-700 ">
							program 1
						</div>
						<div className="h-[100px] w-[250px] bg-violet-300  border-2 border-violet-700 ">
							program 1
						</div>
						<div className="h-[100px] w-[250px] bg-violet-300  border-2 border-violet-700 ">
							program 1
						</div>
						<div className="h-[100px] w-[250px] bg-violet-300  border-2 border-violet-700 ">
							program 1
						</div>
						<div className="h-[100px] w-[250px] bg-violet-300  border-2 border-violet-700 ">
							program 1
						</div>
						<div className="h-[100px] w-[250px] bg-violet-300  border-2 border-violet-700 ">
							program 1
						</div>
						<div className="h-[100px] w-[250px] bg-violet-300  border-2 border-violet-700 ">
							program 1
						</div>
						<div className="h-[100px] w-[250px] bg-violet-300  border-2 border-violet-700 ">
							program 1
						</div>
						<div className="h-[100px] w-[250px] bg-violet-300  border-2 border-violet-700 ">
							program 1
						</div>

						{/* ... */}
					</div>
				</div>
			</div>
		</div>
	);
};
export default Demo;

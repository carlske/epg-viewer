import { useId, useState } from "react";
import EpgDialog from "@/components/epg/EpgDialog";
import { Button } from "@/components/ui/Button";
import Image from "@/components/ui/Image";

export const MainLayout = () => {
	const [open, setOpen] = useState(false);
	const idEpg = useId();

	return (
		<div className="min-h-screen flex flex-col bg-epg-baby-powder">
			<header className="p-4  text-epg-night shadow-sm">
				<h1 className="text-xl font-semibold">EPG</h1>
			</header>

			<Image
				alt="Canal 3 Guatemala"
				imageLarge="https://clarovideocdn6.clarovideo.net/CVPERU/PELICULAS/CANAL3GUATEMALA/EXPORTACION_WEB/SS/CANAL3GUATEMALAWHORIZONTAL.jpg?size=675x380"
				imageMedium="https://clarovideocdn4.clarovideo.net/CVPERU/PELICULAS/CANAL3GUATEMALA/EXPORTACION_WEB/SS/CANAL3GUATEMALAWVERTICAL.jpg?size=200x300"
				imageSmall="https://clarovideocdn6.clarovideo.net/CVPERU/PELICULAS/CANAL3GUATEMALA/EXPORTACION_WEB/SS/CANAL3GUATEMALAWHORIZONTAL.jpg?size=290x163"
				className="rounded shadow-lg"
				width={675}
				height={380}
			/>

			<main className="flex-1 p-6 flex items-center justify-center">
				<Button
					aria-label="Open Epg"
					aria-describedby={idEpg}
					onClick={() => setOpen(true)}
				>
					Mostrar EPG
				</Button>
				<span id={idEpg} className="sr-only">
					Open the Epg Timeline Tv
				</span>
				<EpgDialog open={open} onClose={() => setOpen(false)} />
			</main>
		</div>
	);
};

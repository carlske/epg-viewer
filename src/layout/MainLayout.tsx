import { ChevronUp } from "lucide-react";
import { useId, useState } from "react";
import EpgDialog from "@/components/epg/EpgDialog";
import { Button } from "@/components/ui/Button";

export const MainLayout = () => {
	const [open, setOpen] = useState(false);
	const idEpg = useId();
	const mainTitleId = useId();
	const subtitleId = useId();

	return (
		<>
			<div
				className="default-bg-header absolute w-dvw h-dvh"
				aria-hidden="true"
			></div>
			<div className="min-h-screen flex flex-col bg-epg-baby-powder main-bg">
				<main
					className="flex-1 z-10 p-6 flex flex-col gap-8 items-center justify-center"
					aria-label="Main content"
				>
					<header className=" z-10 flex flex-col items-center text-epg-night shadow-sm">
						<h1
							className="text-xl text-epg-baby-powder font-semibold text-center"
							id={mainTitleId}
						>
							Películas, series y mucho más, sin límites
						</h1>
						<h2
							className="text-xl text-epg-baby-powder font-semibold text-center"
							id={subtitleId}
						>
							Desde MXN 119. Cancela cuando quieras.
						</h2>
					</header>
					<Button
						name="open-epg"
						data-testid="open-epg"
						className="font-stretch-100% w-2xs h-14 px-6 py-3 text-lg flex items-center justify-center"
						aria-describedby={idEpg}
						aria-labelledby={`${mainTitleId} ${subtitleId}`}
						onClick={() => setOpen(true)}
					>
						Mostrar EPG Premium <ChevronUp className="ml-2" />
					</Button>
					<span id={idEpg} className="sr-only">
						Open the EPG Timeline TV dialog
					</span>
					<EpgDialog open={open} onClose={() => setOpen(false)} />
				</main>
			</div>
		</>
	);
};

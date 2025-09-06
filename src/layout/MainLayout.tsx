import { useId, useState } from "react";
import EpgDialog from "@/components/epg/EpgDialog";
import { Button } from "@/components/ui/Button";

export const MainLayout = () => {
	const [open, setOpen] = useState(false);
	const idEpg = useId();

	return (
		<div className="min-h-screen flex flex-col bg-epg-baby-powder">
			<header className="p-4  text-epg-night shadow-sm">
				<h1 className="text-xl font-semibold">EPG</h1>
			</header>

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

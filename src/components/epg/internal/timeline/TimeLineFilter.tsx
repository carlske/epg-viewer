import { Button } from "@/components/ui/Button";

const TimeLineFilter = () => {
	return (
		<section className="flex flex-col sm:flex-row justify-end gap-2 sm:gap-4 bg-black/65 p-2 w-full">
			<Button variant="secondary" size="lg" className="w-full sm:w-auto">
				CANALES
			</Button>
			<Button variant="secondary" size="lg" className="w-full sm:w-auto">
				CATEGORIAS
			</Button>
			<Button variant="secondary" size="lg" className="w-full sm:w-auto">
				FAVORITOS
			</Button>
		</section>
	);
};

export default TimeLineFilter;

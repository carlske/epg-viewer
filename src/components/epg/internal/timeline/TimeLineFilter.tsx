import { Button } from "@/components/ui/Button";

const TimeLineFilter = () => {
	return (
		<section
			className="flex flex-col sm:flex-row justify-end gap-2 sm:gap-4 bg-black/65 p-2 w-full"
			aria-label="EPG guide filters"
		>
			<Button
				variant="secondary"
				size="lg"
				className="w-full sm:w-auto"
				aria-label="Filter by channels"
			>
				CANALES
			</Button>
			<Button
				variant="secondary"
				size="lg"
				className="w-full sm:w-auto"
				aria-label="Filter by categories"
			>
				CATEGORIAS
			</Button>
			<Button
				variant="secondary"
				size="lg"
				className="w-full sm:w-auto"
				aria-label="Filter by favorites"
			>
				FAVORITOS
			</Button>
		</section>
	);
};

export default TimeLineFilter;

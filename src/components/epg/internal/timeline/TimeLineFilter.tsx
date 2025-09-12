import { useState } from "react";
import { Button } from "@/components/ui/Button";
import SliderPanel from "@/components/ui/SliderPanel";
import { FILTER_TYPES, type FilterType } from "@/utils/constants";

import CategoryFilterSlider from "../slider/CategoryFilterSlider";
import ChannelFilterSlider from "../slider/ChannelFilterSlider";
import ErrorFilterSlider from "../slider/ErrorFilterSlider";
import FavoritesFilterSlider from "../slider/FavoritesFilterSlider";

const ChannelFilterContent: React.ComponentType = ChannelFilterSlider;
const CategoryFilterContent: React.ComponentType = CategoryFilterSlider;
const FavoritesFilterContent: React.ComponentType = FavoritesFilterSlider;
const ErrorFilterContent: React.ComponentType = ErrorFilterSlider;

const TimeLineFilter = () => {
	const [panelOpen, setPanelOpen] = useState(false);
	const [activedFilter, setActivedFilter] = useState<FilterType>(
		FILTER_TYPES.CHANNELS,
	);

	const FILTER_MAP: Record<FilterType, React.ComponentType> = {
		[FILTER_TYPES.CHANNELS]: ChannelFilterContent,
		[FILTER_TYPES.CATEGORIES]: CategoryFilterContent,
		[FILTER_TYPES.FAVORITES]: FavoritesFilterContent,
		[FILTER_TYPES.ERROR]: ErrorFilterContent,
	};

	const activeContent = (type: FilterType) => {
		setPanelOpen(true);
		setActivedFilter(type);
	};

	const renderPanelContent = () => {
		const ContentComponent = FILTER_MAP[activedFilter];
		return ContentComponent ? <ContentComponent /> : null;
	};

	return (
		<section
			className="flex flex-col sm:flex-row justify-end b gap-2 sm:gap-4 bg-black/65 p-2 w-full"
			aria-label="EPG guide filters"
		>
			<Button
				variant="secondary"
				size="lg"
				className="w-full sm:w-auto"
				aria-label="Filter by channels"
				onClick={() => activeContent(FILTER_TYPES.CHANNELS)}
			>
				CANALES
			</Button>
			<Button
				variant="secondary"
				size="lg"
				onClick={() => activeContent(FILTER_TYPES.CATEGORIES)}
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
				onClick={() => activeContent(FILTER_TYPES.FAVORITES)}
			>
				FAVORITOS
			</Button>
			<SliderPanel
				open={panelOpen}
				onClose={() => setPanelOpen(false)}
				width="50vw"
			>
				<h2 className="text-lg font-bold mb-4">Filtrar canales</h2>
				{renderPanelContent()}
			</SliderPanel>
		</section>
	);
};

export default TimeLineFilter;

import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import TimeLineHours from "../../../components/epg/internal/timeline/TimeLineHours";

const mockHours = ["3:00", "4:00", "5:00"];

describe("TimeLineHours", () => {
	it("renders all hours as items", () => {
		const ref = { current: null };
		render(<TimeLineHours ref={ref} visibleHours={mockHours} />);
		mockHours.forEach((hour) => {
			expect(screen.getByText(hour)).toBeInTheDocument();
		});
	});

	it("renders correct number of hour items", () => {
		const ref = { current: null };
		render(<TimeLineHours ref={ref} visibleHours={mockHours} />);
		const items = screen.getAllByText(/:\d{2}/);
		expect(items.length).toBe(mockHours.length);
	});
});

// biome-ignore assist/source/organizeImports: <IGNORE>
import { describe, it, expect, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import ProgramInfo from "../../components/epg/internal/program/ProgramInfo";
import useEpgStore from "../../store/useEpgStore";
import "@testing-library/jest-dom";

describe("ProgramInfo", () => {
	beforeEach(() => {
		useEpgStore.getState().setSelectedProgram({
			id: "1",
			name: "Sport Program",
			time: "10:00 AM - 11:00 AM",
			channelId: "Channel 5",
		});
	});

	it("renders selected program info from store", () => {
		render(<ProgramInfo />);
		const heading = screen.getByRole("heading", { level: 2 });
		expect(heading).toHaveTextContent("Sport Program");
		expect(screen.getByText("Channel 5")).toBeInTheDocument();
		expect(screen.getByText("10:00 AM - 11:00 AM")).toBeInTheDocument();
	});

	it("sets correct aria-label and aria-describedby", () => {
		render(<ProgramInfo />);
		const section = screen.getByLabelText("Program information");
		expect(section).toBeInTheDocument();

		const heading = screen.getByRole("heading", { level: 2 });
		const timeSpan = screen.getByText("10:00 AM - 11:00 AM");
		expect(timeSpan).toHaveAttribute("aria-describedby", heading.id);
	});
});

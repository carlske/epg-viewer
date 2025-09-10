// biome-ignore assist/source/organizeImports: <IGNORE>
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import ProgramInfo from "../../components/epg/internal/program/ProgramInfo";
import "@testing-library/jest-dom";

describe("ProgramInfo", () => {
	const props = {
		title: "Sport Program",
		description: "This is a Sport program description.",
		time: "10:00 AM - 11:00 AM",
	};

	it("renders title, description, and time", () => {
		render(<ProgramInfo {...props} />);
		const heading = screen.getByRole("heading", { level: 2 });
		expect(heading).toHaveTextContent(props.title);
		expect(screen.getByText(props.description)).toBeInTheDocument();
		expect(screen.getByText(props.time)).toBeInTheDocument();
	});

	it("sets correct aria-label and aria-describedby", () => {
		render(<ProgramInfo {...props} />);
		const section = screen.getByLabelText("Program information");
		expect(section).toBeInTheDocument();

		const heading = screen.getByRole("heading", { level: 2 });
		const timeSpan = screen.getByText(props.time);
		expect(timeSpan).toHaveAttribute("aria-describedby", heading.id);
	});
});

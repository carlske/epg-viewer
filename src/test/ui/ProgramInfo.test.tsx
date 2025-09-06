import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import ProgramInfo from "../../components/epg/internal/program/ProgramInfo";
import "@testing-library/jest-dom";

describe("ProgramInfo", () => {
	const props = {
		title: "Sample Program",
		description: "This is a sample program description.",
		time: "10:00 AM - 11:00 AM",
	};

	it("renders title, description, and time", () => {
		render(<ProgramInfo {...props} />);
		expect(screen.getByRole("heading", { level: 2 })).toHaveTextContent(
			props.title,
		);
		expect(screen.getByText(props.description)).toBeInTheDocument();
		expect(screen.getByText(props.time)).toBeInTheDocument();
	});

	it("sets correct aria-label on section", () => {
		render(<ProgramInfo {...props} />);
		const section = screen.getByLabelText(
			`Information program: ${props.title}`,
		);
		expect(section).toBeInTheDocument();
	});
});

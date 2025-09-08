import { describe, expect, it } from "vitest";
import { getHoursHeaderFromDates } from "../../utils/index";

describe("getHoursHeaderFromDates", () => {
	it("should return correct hours between two dates on the same day", () => {
		const start = "20250907080000";
		const end = "20250907110000";
		const result = getHoursHeaderFromDates(start, end);
		expect(result).toEqual(["08:00", "09:00", "10:00", "11:00"]);
	});

	it("should return correct hours across days", () => {
		const start = "20250907230000";
		const end = "20250908020000";
		const result = getHoursHeaderFromDates(start, end);
		expect(result).toEqual(["23:00", "00:00", "01:00", "02:00"]);
	});

	it("should return a single hour if start and end are the same hour", () => {
		const start = "20250907150000";
		const end = "20250907150000";
		const result = getHoursHeaderFromDates(start, end);
		expect(result).toEqual(["15:00"]);
	});

	it("should handle midnight correctly", () => {
		const start = "20250908000000";
		const end = "20250908020000";
		const result = getHoursHeaderFromDates(start, end);
		expect(result).toEqual(["00:00", "01:00", "02:00"]);
	});
});

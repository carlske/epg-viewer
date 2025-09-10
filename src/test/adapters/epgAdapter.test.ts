import { describe, it, expect } from "vitest";
import { parseEpgEntry } from "../../adapters/epgAdapter";
import mockApiResponse from "../mocks/mockApiResponse.json";

describe("parseEpgEntry", () => {
	it("returns parsed object for valid input", () => {
		const result = parseEpgEntry(mockApiResponse);
		expect(result).not.toBeNull();
		expect(result?.entry.date_from).toBe("20250909");
		expect(result?.response.channels[0].id).toBe("1");
		expect(result?.response.channels[0].events[0].name).toBe("Program 1");
	});

	it("returns null for invalid input", () => {
		const result = parseEpgEntry({ invalid: true });
		expect(result).toBeNull();
	});
});

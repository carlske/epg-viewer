import { resolve } from "node:path";
import { defineConfig } from "vitest/config";

export default defineConfig({
	test: {
		globals: true,
		environment: "jsdom",
		setupFiles: [],
		include: ["src/test/**/*.test.{ts,tsx}"],
	},
	resolve: {
		alias: {
			"@": resolve(__dirname, "src"),
			"@epg": resolve(__dirname, "src/components/epg"),
		},
	},
});

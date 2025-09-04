import { test, expect } from "@playwright/test";

test("app loads and has expected title", async ({ page }) => {
	await page.goto("http://localhost:5173");
	await expect(page).toHaveTitle("EPG-VIEWER");
});

// Add more tests for your app below

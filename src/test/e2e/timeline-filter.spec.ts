import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
	await page.goto("http://localhost:5173");
});

test("app loads ", async ({ page }) => {
	await expect(page).toHaveTitle("EPG-VIEWER");
});

test.describe("EPG Timeline Render Didalog", () => {
	test("should render the Channels button", async ({ page }) => {
		await page.getByRole("button", { name: "Open Epg" }).click();
		await expect(page.getByRole("dialog")).toBeVisible();
	});
});

test.describe("EPG Timeline Main Content Render", () => {
	test("should render the Channels button", async ({ page }) => {
		await page.getByRole("button", { name: "Open Epg" }).click();
		await expect(page.getByRole("dialog")).toBeVisible();

		await expect(
			page.locator("main[aria-label='EPG timeline Main content']"),
		).toBeVisible();
	});
});

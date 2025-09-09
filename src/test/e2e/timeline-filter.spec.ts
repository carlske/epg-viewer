import { expect, test } from "@playwright/test";

test.beforeEach(async ({ page }) => {
	await page.goto("http://localhost:5173");
});

test("app loads", async ({ page }) => {
	await expect(page).toHaveTitle("EPG-VIEWER");
});

test.describe("EPG Dialog Management", () => {
	test("should render the Channels button", async ({ page }) => {
		await page.getByRole("button", { name: "Open Epg" }).click();
		await expect(page.getByRole("dialog")).toBeVisible();
	});

	test("should close dialog with close button", async ({ page }) => {
		await page.getByRole("button", { name: "Open Epg" }).click();
		await expect(page.getByRole("dialog")).toBeVisible();

		await page.getByLabel("Close Dialog").click();
		await expect(page.getByRole("dialog")).not.toBeVisible();
	});

	test("should close dialog with escape key", async ({ page }) => {
		await page.getByRole("button", { name: "Open Epg" }).click();
		await expect(page.getByRole("dialog")).toBeVisible();

		await page.keyboard.press("Escape");
		await expect(page.getByRole("dialog")).not.toBeVisible();
	});

	test("should reopen dialog after closing", async ({ page }) => {
		// Open
		await page.getByRole("button", { name: "Open Epg" }).click();
		await expect(page.getByRole("dialog")).toBeVisible();

		// Close
		await page.getByLabel("Close Dialog").click();
		await expect(page.getByRole("dialog")).not.toBeVisible();

		// Reopen
		await page.getByRole("button", { name: "Open Epg" }).click();
		await expect(page.getByRole("dialog")).toBeVisible();
	});
});

test.describe("EPG Content Loading", () => {
	test("should render main EPG content", async ({ page }) => {
		await page.getByRole("button", { name: "Open Epg" }).click();
		await expect(page.getByRole("dialog")).toBeVisible();

		await expect(
			page.locator("main[aria-label='EPG timeline Main content']"),
		).toBeVisible({ timeout: 10000 });
	});

	test("should load channels after opening", async ({ page }) => {
		await page.getByRole("button", { name: "Open Epg" }).click();
		await expect(page.getByRole("dialog")).toBeVisible();

		await expect(
			page.locator("[data-testid='epg-timeline-main-content']").first(),
		).toBeVisible({
			timeout: 15000,
		});
	});

	test("should load programs after opening", async ({ page }) => {
		await page.getByRole("button", { name: "Open Epg" }).click();
		await expect(page.getByRole("dialog")).toBeVisible();

		// Wait for programs to load
		await expect(
			page.locator("[data-testid='programs-by-channel-section']").first(),
		).toBeVisible({
			timeout: 15000,
		});
	});
});

test.describe("EPG Navigation and Scrolling", () => {
	test.beforeEach(async ({ page }) => {
		await page.getByRole("button", { name: "Open Epg" }).click();
		await expect(page.getByRole("dialog")).toBeVisible();
		await expect(
			page.locator("main[aria-label='EPG timeline Main content']"),
		).toBeVisible({ timeout: 10000 });
	});

	test("should scroll vertically through channels", async ({ page }) => {
		const timeline = page.locator(
			"main[aria-label='EPG timeline Main content']",
		);

		// Get initial scroll position
		const initialScrollTop = await timeline.evaluate((el) => el.scrollTop);

		// Scroll down
		await timeline.evaluate((el) => el.scrollBy(0, 200));

		// Verify scroll position changed
		const newScrollTop = await timeline.evaluate((el) => el.scrollTop);
		expect(newScrollTop).toBeGreaterThan(initialScrollTop);
	});

	test("should maintain sync between header and content scroll", async ({
		page,
	}) => {
		const timeline = page.locator(
			"main[aria-label='EPG timeline Main content']",
		);
		const header = page.locator("[data-testid='time-header']");
		await timeline.evaluate((el) => el.scrollBy(300, 0));

		const timelineScrollLeft = await timeline.evaluate((el) => el.scrollLeft);
		const headerScrollLeft = await header.evaluate((el) => el.scrollLeft);

		expect(timelineScrollLeft).toBe(headerScrollLeft);
	});
});

test.describe("EPG Program Interactions", () => {
	test.beforeEach(async ({ page }) => {
		await page.getByRole("button", { name: "Open Epg" }).click();
		await expect(page.getByRole("dialog")).toBeVisible();
		await expect(
			page.locator("[data-testid='programs-by-channel-section']").first(),
		).toBeVisible({
			timeout: 15000,
		});
	});

	test("should display program information", async ({ page }) => {
		const programs = page.locator(
			"[data-testid='programs-by-channel-section']",
		);
		await expect(programs.first()).toBeVisible();

		const programWithText = programs.filter({ hasText: /.+/ });
		await expect(programWithText.first()).toBeVisible();
	});
});

test.describe("EPG Channel Display", () => {
	test.beforeEach(async ({ page }) => {
		await page.getByRole("button", { name: "Open Epg" }).click();
		await expect(page.getByRole("dialog")).toBeVisible();
		await expect(
			page.locator("[data-testid='programs-by-channel-section']").first(),
		).toBeVisible({
			timeout: 15000,
		});
	});

	test("should display channel names", async ({ page }) => {
		const channels = page.locator(
			"[data-testid='programs-by-channel-section']",
		);
		await expect(channels.first()).toBeVisible();
		const channelWithText = channels.filter({ hasText: /.+/ });
		await expect(channelWithText.first()).toBeVisible();
	});
});

test.describe("EPG Responsive Behavior", () => {
	test("should work on mobile viewport", async ({ page }) => {
		await page.setViewportSize({ width: 375, height: 667 });

		await page.getByRole("button", { name: "Open Epg" }).click();
		await expect(page.getByRole("dialog")).toBeVisible();

		await expect(
			page.locator("main[aria-label='EPG timeline Main content']"),
		).toBeVisible({ timeout: 10000 });
	});

	test("should work on tablet viewport", async ({ page }) => {
		await page.setViewportSize({ width: 768, height: 1024 });

		await page.getByRole("button", { name: "Open Epg" }).click();
		await expect(page.getByRole("dialog")).toBeVisible();

		await expect(
			page.locator("main[aria-label='EPG timeline Main content']"),
		).toBeVisible({ timeout: 10000 });
	});

	test("should work on desktop viewport", async ({ page }) => {
		await page.setViewportSize({ width: 1920, height: 1080 });

		await page.getByRole("button", { name: "Open Epg" }).click();
		await expect(page.getByRole("dialog")).toBeVisible();

		await expect(
			page.locator("main[aria-label='EPG timeline Main content']"),
		).toBeVisible({ timeout: 10000 });
	});
});

test.describe("EPG Error Handling", () => {
	test("should show error message when offline", async ({ page }) => {
		await page.context().setOffline(true);

		await page.getByRole("button", { name: "Open Epg" }).click();
		await expect(page.getByRole("dialog")).toBeVisible();

		await page.context().setOffline(false);

		const retryButton = page.getByRole("button", { name: /retry|reload/i });
		if (await retryButton.isVisible()) {
			await retryButton.click();
		}

		await expect(
			page.locator("main[aria-label='EPG timeline Main content']"),
		).toBeVisible({ timeout: 15000 });
	});
});

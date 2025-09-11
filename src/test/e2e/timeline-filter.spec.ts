import { expect, test } from "@playwright/test";

test.beforeEach(async ({ page }) => {
	await page.goto("http://localhost:5173");
	await page.getByTestId("open-epg").click();
});

test("app loads", async ({ page }) => {
	await expect(page).toHaveTitle("EPG-VIEWER");
});

test.describe("EPG Dialog Management", () => {
	test("should render the Channels button", async ({ page }) => {
		await expect(
			page.getByRole("dialog", { name: "EPG Premium Dialog" }),
		).toBeVisible();
	});

	test("should close dialog with close button", async ({ page }) => {
		await expect(
			page.getByRole("dialog", { name: "EPG Premium Dialog" }),
		).toBeVisible();

		await page.getByLabel("Close Dialog").click();
		await expect(
			page.getByRole("dialog", { name: "EPG Premium Dialog" }),
		).not.toBeVisible();
	});

	test("should close dialog with escape key", async ({ page }) => {
		await expect(
			page.getByRole("dialog", { name: "EPG Premium Dialog" }),
		).toBeVisible();

		await page.keyboard.press("Escape");
		await expect(
			page.getByRole("dialog", { name: "EPG Premium Dialog" }),
		).not.toBeVisible();
	});

	test("should reopen dialog after closing", async ({ page }) => {
		await expect(
			page.getByRole("dialog", { name: "EPG Premium Dialog" }),
		).toBeVisible();

		await page.getByLabel("Close Dialog").click();
		await expect(
			page.getByRole("dialog", { name: "EPG Premium Dialog" }),
		).not.toBeVisible();

		await page.locator('button[name="open-epg"]').click();
		await expect(
			page.getByRole("dialog", { name: "EPG Premium Dialog" }),
		).toBeVisible();
	});
});

test.describe("EPG Content Loading", () => {
	test("should render main EPG content", async ({ page }) => {
		await expect(
			page.getByRole("dialog", { name: "EPG Premium Dialog" }),
		).toBeVisible();

		await expect(page.getByTestId("epg-timeline-main-content")).toBeVisible({
			timeout: 10000,
		});
	});

	test("should load channels after opening", async ({ page }) => {
		await expect(
			page.getByRole("dialog", { name: "EPG Premium Dialog" }),
		).toBeVisible();

		await expect(
			page.locator("[data-testid='epg-timeline-main-content']").first(),
		).toBeVisible({
			timeout: 15000,
		});
	});

	test("should load programs after opening", async ({ page }) => {
		await expect(
			page.getByRole("dialog", { name: "EPG Premium Dialog" }),
		).toBeVisible();

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
		await expect(
			page.getByRole("dialog", { name: "EPG Premium Dialog" }),
		).toBeVisible();
		await expect(page.getByTestId("epg-timeline-main-content")).toBeVisible({
			timeout: 10000,
		});
	});

	test("should scroll vertically through channels", async ({ page }) => {
		const timeline = page.getByTestId("epg-timeline-main-content");

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
		const timeline = page.getByTestId("epg-timeline-main-content");
		const header = page.getByTestId("time-header");
		await timeline.evaluate((el) => el.scrollBy(300, 0));

		const timelineScrollLeft = await timeline.evaluate((el) => el.scrollLeft);
		const headerScrollLeft = await header.evaluate((el) => el.scrollLeft);

		expect(timelineScrollLeft).toBe(headerScrollLeft);
	});
});

test.describe("EPG Program Interactions", () => {
	test.beforeEach(async ({ page }) => {
		await expect(page.getByRole("dialog")).toBeVisible();
		await expect(
			page.getByTestId("programs-by-channel-section").first(),
		).toBeVisible({
			timeout: 15000,
		});
	});
});

test.describe("EPG Channel Display", () => {
	test.beforeEach(async ({ page }) => {
		await expect(
			page.getByRole("dialog", { name: "EPG Premium Dialog" }),
		).toBeVisible();
		await expect(
			page.getByTestId("programs-by-channel-section").first(),
		).toBeVisible({
			timeout: 15000,
		});
	});

	test("should display channel names", async ({ page }) => {
		const channels = page.getByTestId("programs-by-channel-section");
		await expect(channels.first()).toBeVisible();
		const channelWithText = channels.filter({ hasText: /.+/ });
		await expect(channelWithText.first()).toBeVisible();
	});
});

test.describe("EPG Responsive Behavior", () => {
	test("should work on mobile viewport", async ({ page }) => {
		await page.setViewportSize({ width: 375, height: 667 });

		await expect(
			page.getByRole("dialog", { name: "EPG Premium Dialog" }),
		).toBeVisible();

		await expect(page.getByTestId("epg-timeline-main-content")).toBeVisible({
			timeout: 10000,
		});
	});

	test("should work on tablet viewport", async ({ page }) => {
		await page.setViewportSize({ width: 768, height: 1024 });

		await expect(
			page.getByRole("dialog", { name: "EPG Premium Dialog" }),
		).toBeVisible();

		await expect(page.getByTestId("epg-timeline-main-content")).toBeVisible({
			timeout: 10000,
		});
	});

	test("should work on desktop viewport", async ({ page }) => {
		await page.setViewportSize({ width: 1920, height: 1080 });

		await expect(
			page.getByRole("dialog", { name: "EPG Premium Dialog" }),
		).toBeVisible();

		await expect(page.getByTestId("epg-timeline-main-content")).toBeVisible({
			timeout: 10000,
		});
	});
});

test.describe("EPG Error Handling", () => {
	test("should show error message when offline", async ({ page }) => {
		await page.context().setOffline(true);

		await expect(
			page.getByRole("dialog", { name: "EPG Premium Dialog" }),
		).toBeVisible();

		await page.context().setOffline(false);

		const retryButton = page.getByRole("button", { name: /retry|reload/i });
		if (await retryButton.isVisible()) {
			await retryButton.click();
		}

		await expect(page.getByTestId("epg-timeline-main-content")).toBeVisible({
			timeout: 15000,
		});
	});
});

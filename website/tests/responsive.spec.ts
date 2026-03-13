import { test, expect } from "@playwright/test";

const viewports = [
  { name: "Mobile", width: 375, height: 812 },
  { name: "Tablet", width: 768, height: 1024 },
  { name: "Desktop", width: 1280, height: 800 },
];

for (const vp of viewports) {
  test.describe(`${vp.name} (${vp.width}x${vp.height})`, () => {
    test.use({ viewport: { width: vp.width, height: vp.height } });

    test("header renders correctly", async ({ page }) => {
      await page.goto("/de/");
      const header = page.locator("header").first();
      await expect(header).toBeVisible();
    });

    test("main content is visible", async ({ page }) => {
      await page.goto("/de/");
      const main = page.locator("main, [role='main'], .content, body > div").first();
      await expect(main).toBeVisible();
    });

    test("no horizontal overflow", async ({ page }) => {
      await page.goto("/de/");
      const scrollWidth = await page.evaluate(() => document.documentElement.scrollWidth);
      const clientWidth = await page.evaluate(() => document.documentElement.clientWidth);
      // Allow 1px tolerance for rounding
      expect(scrollWidth).toBeLessThanOrEqual(clientWidth + 1);
    });
  });
}

test.describe("Mobile-specific", () => {
  test.use({ viewport: { width: 375, height: 812 } });

  test("hamburger menu button exists", async ({ page }) => {
    await page.goto("/de/");
    // Look for common hamburger menu patterns
    const hamburger = page.locator(
      'button[aria-label*="menu" i], button[aria-label*="Menu" i], ' +
      'button[aria-label*="nav" i], [class*="hamburger"], [class*="mobile-menu"], ' +
      'button[class*="menu"], header button'
    ).first();
    await expect(hamburger).toBeVisible();
  });
});

test.describe("Desktop-specific", () => {
  test.use({ viewport: { width: 1280, height: 800 } });

  test("horizontal nav is visible", async ({ page }) => {
    await page.goto("/de/");
    const nav = page.locator("header nav").first();
    await expect(nav).toBeVisible();
  });
});

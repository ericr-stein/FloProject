import { test, expect } from "@playwright/test";

test.describe("Desktop navigation", () => {
  test.use({ viewport: { width: 1280, height: 800 } });

  test("header nav links navigate correctly", async ({ page }) => {
    await page.goto("/de/");

    // Collect all nav links in the header
    const navLinks = page.locator("header nav a, header a[href]");
    const count = await navLinks.count();
    expect(count).toBeGreaterThan(0);

    // Test each visible nav link
    for (let i = 0; i < count; i++) {
      const link = navLinks.nth(i);
      if (!(await link.isVisible())) continue;

      const href = await link.getAttribute("href");
      if (!href || href.startsWith("http") || href.startsWith("#")) continue;

      await link.click();
      await page.waitForLoadState("domcontentloaded");

      // Should not be an error page
      const body = page.locator("body");
      await expect(body).toBeVisible();

      // Navigate back for the next link
      await page.goto("/de/");
    }
  });

  test("logo links to home", async ({ page }) => {
    await page.goto("/de/ueber-uns/");

    // Click logo (usually an img or svg inside an anchor, or a branded link)
    const logo = page.locator('header a[href="/de/"], header a[href="/"]').first();
    if (await logo.isVisible()) {
      await logo.click();
      await page.waitForLoadState("domcontentloaded");
      expect(page.url()).toMatch(/\/(de\/)?$/);
    }
  });

  test("footer links work", async ({ page }) => {
    await page.goto("/de/");

    const footerLinks = page.locator("footer a[href]");
    const count = await footerLinks.count();

    for (let i = 0; i < Math.min(count, 5); i++) {
      const link = footerLinks.nth(i);
      if (!(await link.isVisible())) continue;

      const href = await link.getAttribute("href");
      if (!href || href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("#")) continue;

      await link.click();
      await page.waitForLoadState("domcontentloaded");

      const response = await page.goto(href);
      expect(response).not.toBeNull();
      expect(response!.status()).toBeLessThan(400);

      await page.goto("/de/");
    }
  });
});

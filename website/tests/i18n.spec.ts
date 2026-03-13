import { test, expect } from "@playwright/test";

test.describe("Bilingual content", () => {
  test("DE homepage contains German content", async ({ page }) => {
    await page.goto("/de/");
    const text = await page.textContent("body");
    // Expect common German words on the page
    expect(text).toMatch(/Verein|Über|Kontakt|Nachhaltigkeit|Sport|Graubünden|Willkommen|News|Events/i);
  });

  test("EN homepage contains English content", async ({ page }) => {
    await page.goto("/en/");
    const text = await page.textContent("body");
    // Expect common English words on the page
    expect(text).toMatch(/Association|About|Contact|Sustainability|Sport|Welcome|News|Events/i);
  });

  test("DE pages have lang=de attribute", async ({ page }) => {
    await page.goto("/de/");
    const lang = await page.getAttribute("html", "lang");
    expect(lang).toMatch(/de/i);
  });

  test("EN pages have lang=en attribute", async ({ page }) => {
    await page.goto("/en/");
    const lang = await page.getAttribute("html", "lang");
    expect(lang).toMatch(/en/i);
  });

  test("language switcher: DE → EN", async ({ page }) => {
    await page.goto("/de/");

    // Look for language switch link (EN or English)
    const enLink = page.locator('a[href*="/en"], a[hreflang="en"]').first();
    if (await enLink.isVisible()) {
      await enLink.click();
      await page.waitForLoadState("domcontentloaded");
      expect(page.url()).toContain("/en");
    }
  });

  test("language switcher: EN → DE", async ({ page }) => {
    await page.goto("/en/");

    // Look for language switch link (DE or Deutsch)
    const deLink = page.locator('a[href*="/de"], a[hreflang="de"]').first();
    if (await deLink.isVisible()) {
      await deLink.click();
      await page.waitForLoadState("domcontentloaded");
      expect(page.url()).toContain("/de");
    }
  });
});

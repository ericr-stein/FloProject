import { test, expect } from "@playwright/test";

const dePages = [
  { path: "/", desc: "Root redirect" },
  { path: "/de/", desc: "DE Home" },
  { path: "/de/ueber-uns/", desc: "DE Über uns" },
  { path: "/de/news/", desc: "DE News" },
  { path: "/de/events/", desc: "DE Events" },
  { path: "/de/galerie/", desc: "DE Galerie" },
  { path: "/de/daten/", desc: "DE Daten" },
  { path: "/de/kontakt/", desc: "DE Kontakt" },
  { path: "/de/impressum/", desc: "DE Impressum" },
  { path: "/de/datenschutz/", desc: "DE Datenschutz" },
];

const enPages = [
  { path: "/en/", desc: "EN Home" },
  { path: "/en/about/", desc: "EN About" },
  { path: "/en/news/", desc: "EN News" },
  { path: "/en/events/", desc: "EN Events" },
  { path: "/en/gallery/", desc: "EN Gallery" },
  { path: "/en/data/", desc: "EN Data" },
  { path: "/en/contact/", desc: "EN Contact" },
];

const allPages = [...dePages, ...enPages];

for (const page of allPages) {
  test(`${page.desc} (${page.path}) loads successfully`, async ({ page: p }) => {
    const response = await p.goto(page.path);
    expect(response).not.toBeNull();
    expect(response!.status()).toBeLessThan(400);

    // Page should have visible content
    const body = p.locator("body");
    await expect(body).toBeVisible();

    // Should contain a header or nav element
    const header = p.locator("header, nav").first();
    await expect(header).toBeVisible();
  });
}

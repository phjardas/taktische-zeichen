import { test, expect } from "@playwright/test";

test("rendert ein taktisches Zeichen im Custom Element", async ({ page }) => {
  await page.goto("/");

  await page.selectOption("#grundzeichen", "kraftfahrzeug-landgebunden");
  await page.selectOption("#organisation", "feuerwehr");
  await page.selectOption("#fachaufgabe", "brandbekaempfung");

  const svg = page.locator("#zeichen svg");
  await expect(svg).toHaveAttribute("xmlns", "http://www.w3.org/2000/svg");
  await expect(svg.locator("> *")).not.toHaveCount(0);
});

test("entfernt das SVG wieder, wenn kein Grundzeichen mehr gesetzt ist", async ({
  page,
}) => {
  await page.goto("/");

  await page.selectOption("#grundzeichen", "stelle");
  await expect(page.locator("#zeichen svg")).toBeVisible();

  await page.selectOption("#grundzeichen", "");
  await expect(page.locator("#zeichen svg")).toHaveCount(0);
});

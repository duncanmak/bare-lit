import { expect, type Page, test } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("http://localhost:8000/");
});

const MOCK_DATA = [
  "English mock data",
  "French mock data",
];

test.describe("Great Tests", () => {
  test("Hello page", async ({ page }) => {
    // navigate
    await page.locator("a.hello").click();

    // check
    await expect(page.locator("button.hello")).toHaveText(["Hello"]);

    // click
    await page.locator("button.hello").click();

    // wait
    await new Promise((r) => setTimeout(r, 6000));

    // check
    await expect(page.locator("p.hello")).toHaveText([MOCK_DATA[0]]);
  });

  test("Bonjour page", async ({ page }) => {
    // navigate
    await page.locator("a.bonjour").click();

    // check
    await expect(page.locator("button.bonjour")).toHaveText(["Bonjour"]);

    // click
    await page.locator("button.bonjour").click();

    // wait
    await new Promise((r) => setTimeout(r, 6000));

    // check
    await expect(page.locator("p.bonjour")).toHaveText([MOCK_DATA[1]]);
  });
});

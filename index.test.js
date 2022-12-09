import { test, expect } from "@playwright/test";
import { login, initialiseBankAccount, waitForMe } from "../../utils";

test("Buy Auction Biddz Test @e2e @structural @slow", async ({ page }) => {
  await login(page);
  await initialiseBankAccount(page);
  // Go to /deals/${process.env.TEST_AUCTION_ID}
  await page.goto(`/deals/${process.env.TEST_AUCTION_ID}`);
  // Delay Playwright
  await waitForMe(2000);
  // Click div[role="button"]:has-text("biddz kaufen")
  await page.locator('div[role="button"]:has-text("biddz kaufen")').click();
  await expect(page).toHaveURL(
    `/deals/${process.env.TEST_AUCTION_ID}/orders/create`
  );
  // Click div[role="button"]:has-text("Kaufvorschau")
  await page.locator('div[role="button"]:has-text("Kaufvorschau")').click();
  // Click text=ABN AMRO Bank, Frankfurt Branch****0524󰆴
  await page.locator("text=ABN AMRO Bank, Frankfurt Branch****0524󰆴").click();
  // Click svg[role="img"] >> nth=0
  await page.locator('svg[role="img"]').first().click();
  // Click svg[role="img"] >> nth=1
  await page.locator('svg[role="img"]').nth(1).click();
  await page.locator('div[role="button"]:has-text("Jetzt kaufen")').click();
  // Click div[role="button"]:has-text("Meine Karten")
  await page
    .locator('div[role="button"]:has-text("Meine Karten")')
    .click({ timeout: 120000 });
  await expect(page).toHaveURL(`/lounge`);
});

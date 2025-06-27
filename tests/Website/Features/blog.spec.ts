import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('https://muzz.com/en-GB');
});

test('open a recent blog article', async ({ page }) => {
  await page.locator('#navigation').getByRole('link', { name: 'Blog' }).click();
  await page.getByRole('link', { name: 'relationships 8 Pieces of' }).click();
});
import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('https://muzz.com/en-GB');
});

test('I can buy event tickets', async ({ page }) => {
    await page.getByRole('link', { name: 'Events' }).click();
    await page.getByRole('link', { name: 'Find an event near you' }).click();
    await page.locator('.flex.flex-col.justify-between.h-full.p-5').first().click();
    await page.getByRole('button', { name: 'Buy ticket' }).click();
    await page.getByText('Scan this QR code on your').isVisible();
    await page.locator('#modal path').nth(2).isVisible();
  });
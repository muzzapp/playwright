import { test, expect } from '@playwright/test';

test('I can view the app in the app store via the Muzz website', async ({ page }) => {
    await page.goto('https://muzz.com/en-GB/');
    await page.getByRole('link', { name: 'Download', exact: true }).click();
    const page1Promise = page.waitForEvent('popup');
    await page.getByRole('link', { name: 'App Store icon' }).click();
    const page1 = await page1Promise;
  });
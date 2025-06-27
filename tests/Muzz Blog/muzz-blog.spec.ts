import { test, expect } from '@playwright/test';

test('I can view the app in the app store via the Muzz website', async ({ page }) => {
    await page.goto('https://muzz.com/en-GB/');
    await page.getByRole('link', { name: 'Download', exact: true }).click();
    const page1Promise = page.waitForEvent('popup');
    await page.getByRole('link', { name: 'App Store icon' }).click();
    const page1 = await page1Promise;
  });

  test('I can view the app in the play store via the Muzz website', async ({ page }) => {
    await page.goto('https://muzz.com/en-GB/');
    await page.getByRole('link', { name: 'Download', exact: true }).click();
    const page1Promise = page.waitForEvent('popup');
    await page.getByRole('link', { name: 'Google Play icon' }).click();
    const page1 = await page1Promise;
  });

  test('I can apply for an open role via the Muzz website', async ({ page }) => {
    await page.goto('https://muzz.com/en-GB/');
    await page.locator('#navigation').getByRole('link', { name: 'Careers' }).click();
    await page.getByRole('link', { name: 'See Open Roles' }).click();
    await page.getByRole('link', { name: 'Senior iOS Engineer Full-time' }).click();
    await page.locator('div').filter({ hasText: 'Apply Now' }).getByRole('link').click();
    const page1Promise = page.waitForEvent('popup');
    await page.getByRole('button', { name: 'Apply Now' }).getByRole('link').click();
    const page1 = await page1Promise;
  });
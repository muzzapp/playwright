import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('https://muzz.com/en-GB');
});

test('has title', async ({ page }) => {
  await expect(page).toHaveTitle("World's largest free Single Muslim marriage and Muslim dating app - Over 10 million Single Muslims");
});

test('I can download android app from play store via header Download button', async ({ page }) => {
  await page.getByRole('link', { name: 'Download', exact: true }).click();
  const page1Promise = page.waitForEvent('popup');
  await page.locator('#modal').getByRole('link', { name: 'Google Play icon' }).click();
  const page1 = await page1Promise;
  await expect(page1).toHaveTitle('Muzz: Muslim Marriage & Social - Apps on Google Play')
  await page1.getByLabel('Install').click();
  await page1.getByRole('button', { name: 'Sign in' }).isVisible();
});

test('I can download iOS app from the apple store via header Download button', async ({ page }) => {
  await page.getByRole('link', { name: 'Download', exact: true }).click();
  const page3Promise = page.waitForEvent('popup');
  await page.locator('#modal').getByRole('link', { name: 'App Store icon' }).click();
  const page3 = await page3Promise;
  await page3.getByRole('link', { name: 'MUZZ LTD' }).click();
});

test('I can download android app from play store via description Download app button', async ({ page }) => {
  await page.getByRole('link', { name: 'Download the app' }).click();
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'Google Play icon' }).click();
  const page1 = await page1Promise;
  await page1.getByLabel('Install').isEnabled();
  await page1.getByRole('button', { name: 'Sign in' }).isVisible();
});

test('I can download iOS app from the apple store via description Download app button', async ({ page }) => {
  await page.getByRole('link', { name: 'Download', exact: true }).click();
  const page3Promise = page.waitForEvent('popup');
  await page.locator('#modal').getByRole('link', { name: 'App Store icon' }).click();
  const page3 = await page3Promise;
  await page3.getByRole('link', { name: 'MUZZ LTD' }).click();
});

test('I can open muzz social page', async ({ page }) => {
  await page.locator('section').filter({ hasText: 'Make meaningful local' }).getByRole('button').click();
  await page.getByRole('heading', { name: 'Muzz Social' }).isVisible();
});
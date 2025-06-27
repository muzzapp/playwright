import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('https://muzz.com/en-GB/'); 
});

test('I can buy event tickets', async ({ page }) => {
    await page.goto('https://muzz.com/en-GB/events/');
    await page.getByRole('link', { name: 'Events' }).click();
    await page.getByRole('link', { name: 'Find an event near you' }).click();
    await page.locator('.flex.flex-col.justify-between.h-full.p-5').first().click();
    await page.getByRole('button', { name: 'Buy ticket' }).click();
    await page.getByText('Scan this QR code on your').isVisible();
    await page.locator('#modal path').nth(2).isVisible();
  });

// There is a bug in the app that prevents the download from working.
// test('I can download iOS app from the apple store via header Download button', async ({ page }) => {
//     await page.goto('https://muzz.com/en-GB/events/');
//     await page.getByRole('link', { name: 'Events' }).click();
//     await page.locator('div').filter({ hasText: /^Download Muzz to get the latest on all upcoming events happening near you$/ }).locator('a').first().click();
//     const page3Promise = page.waitForEvent('popup');
//     await page.locator('#modal').getByRole('link', { name: 'App Store icon' }).click();
//     const page1 = await page3Promise;
//     await page1.getByRole('link', { name: 'MUZZ LTD' }).click();
//   });

// test('I can download android app from play store via header Download app button', async ({ page }) => {
//     await page.goto('https://muzz.com/en-GB/events/');
//     await page.getByRole('link', { name: 'Events' }).click();
//     await page.locator('div').filter({ hasText: /^Download Muzz to get the latest on all upcoming events happening near you$/ }).locator('a').nth(1).click();
//     const page1Promise = page.waitForEvent('popup');
//     await page.getByRole('link', { name: 'Google Play icon' }).click();
//     const page1 = await page1Promise;
//     await page1.getByLabel('Install').isEnabled();
//     await page1.getByRole('button', { name: 'Sign in' }).isVisible();
//   });

test('I can download iOS app from the apple store from "Download the Muzz app" section', async ({ page }) => {
    await page.goto('https://muzz.com/en-GB/events/');
    const section = await page.locator('text=Download the Muzz app');
    await page.getByText('Download the Muzz app').scrollIntoViewIfNeeded();
    const page1Promise = page.waitForEvent('popup');
    await page.getByRole('link', { name: 'App Store icon' }).click();
    const page1 = await page1Promise;
    await page1.getByLabel('Install').isEnabled();
    await page1.getByRole('button', { name: 'Sign in' }).isVisible();
  });

test('I can download android app from app store from "Download the Muzz app" section', async ({ page }) => {
    await page.goto('https://muzz.com/en-GB/events/');
    const section = await page.locator('text=Download the Muzz app');
    await page.getByText('Download the Muzz app').scrollIntoViewIfNeeded();
    const page1Promise = page.waitForEvent('popup');
    await page.getByRole('link', { name: 'Google Play icon' }).click();
    const page1 = await page1Promise;
    await page1.getByLabel('Install').isEnabled();
    await page1.getByRole('button', { name: 'Sign in' }).isVisible();
  });

  
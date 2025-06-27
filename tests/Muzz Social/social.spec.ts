import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('https://social.muzz.com/en-GB/post/pos_2youlAHFvXjjQVn45hxXMBXT1JQ/?referrer=srf_2Zl2yqrNQ3X4nfmQjs7bgHqjyB0&location=feed&t=1750757673');
});

test('I can see the post, tap follow and download the app', async ({ page }) => {
  await page.getByTestId('post-context-author').isVisible()
  await page.getByTestId('post-context').getByText('Likes').click();
  await page.getByTestId('post-context').getByText('Share').click();
  await page.getByRole('heading', { name: 'Share with friends' }).isVisible();;
  await page.getByRole('button', { name: 'Close' }).click();
  await page.getByRole('button', { name: 'Follow' }).click();
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('button', { name: 'Get the app' }).click();
  const page1 = await page1Promise;
  const page2Promise = page1.waitForEvent('popup');
  await page1.locator('#Header').getByRole('link', { name: 'App Store icon' }).click();
  const page2 = await page2Promise;
  const page3Promise = page2.waitForEvent('popup');
  await page2.locator('#Header').getByRole('link', { name: 'Google Play icon' }).click();
  const page3 = await page3Promise;
  await page.getByRole('test');
});

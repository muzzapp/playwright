import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('https://social.muzz.com/en-GB/post/pos_2youlAHFvXjjQVn45hxXMBXT1JQ/?referrer=srf_2Zl2yqrNQ3X4nfmQjs7bgHqjyB0&location=feed&t=1750757673');
});

test('I can tap to open app', async ({ page }) => {
  await page.getByRole('button', { name: 'Open app' }).first().click();
  await page.getByText('read more').click();
});

test('I can navigte to thread', async ({ page }) => {
  await page.getByText('read more').click();
  await page.getByText('711').click();
  await page.getByRole('button', {name:'Get the app'}).click();
  await expect(page).toHaveTitle(/Muzz Social/);
});

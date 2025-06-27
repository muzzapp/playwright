import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('https://wali2.dev.muzz.com/engineering/members');
  await page.getByRole('button', { name: 'Login with work account' }).click();
  await page.getByLabel('Email or phone').click();
  await page.getByLabel('Email or phone').click();
  await page.getByLabel('Email or phone').fill('tarek.ahmed@muzz.com');
  await page.getByLabel('Email or phone').press('Enter');
  await page.getByLabel('Enter your password').click();
  await page.getByLabel('Enter your password').click();
  await page.getByLabel('Enter your password').fill('RTK271694.');
  await page.getByLabel('Enter your password').press('Enter');
});


test('I can search for a member', async ({ page }) => {
  await page.getByPlaceholder('Search').click();
  await page.getByPlaceholder('Search').fill('tarek+3@muzz.com');
  await page.getByRole('button', { name: 'Search' }).click();
  await page.getByRole('link', { name: 'Tee++3' }).click();
});

test('I can generate 10 compliments for member', async ({ page }) => {
  await page.getByPlaceholder('Search').click();
  await page.getByPlaceholder('Search').fill('tarek+3@muzz.com');
  await page.getByRole('button', { name: 'Search' }).click();
  await page.getByRole('link', { name: 'Tee++3' }).click();
  await page.getByText('Take an action').click(); 
  await page.getByText('Generate 10 Compliments').click();
  await page.getByRole('button', { name: 'Confirm' }).click();
});

test('I can generate likes for member', async ({ page }) => {
  await page.getByPlaceholder('Search').click();
  await page.getByPlaceholder('Search').fill('tarek+3@muzz.com');
  await page.getByRole('button', { name: 'Search' }).click();
  await page.getByRole('link', { name: 'Tee++3' }).click();
  await page.getByText('Take an action').click(); 
  await page.getByText('Generate Likes').click();
  await page.getByRole('button', { name: 'Confirm' }).click();
});

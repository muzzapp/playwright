import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('https://wali2.dev.muzz.com/engineering/members');
  await page.getByRole('button', { name: 'Login with work account' }).click();
  await page.getByLabel('Email or phone').click();
  await page.getByLabel('Email or phone').click();
  await page.getByLabel('Email or phone').fill('adnan@muzz.com');
  await page.getByLabel('Email or phone').press('Enter');
  await page.getByLabel('Enter your password').click();
  await page.getByLabel('Enter your password').click();
  await page.getByLabel('Enter your password').fill('R3$1l1entAC');
  await page.getByLabel('Enter your password').press('Enter');
});


test('I can search for a member', async ({ page }) => {
  await page.getByPlaceholder('Search').click();
  await page.getByPlaceholder('Search').fill('adnan+054@dev.muzz.com');
  await page.getByRole('button', { name: 'Search' }).click();
  await page.getByRole('link', { name: 'Adnan+054 @Adnan+' }).click();
});




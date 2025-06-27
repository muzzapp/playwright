import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('https://social.muzz.com/en-GB/group/gro_2YnhkQP6rqmOIye8InEL0cuKsyg/');
});

test('I can see the group name and description and tap Share Group', async ({ page }) => {
  await page.getByTestId('post-context').getByText('Random').isVisible();
  await page.getByTestId('post-context').getByText('Share amusing anecdotes, bizarre facts, and hilarious memes 🤪 Whether you\'re a master of chaos or just here for a wild ride, our group is your playground of random delights 🐧 No theme, no judgement - only one rule... keep it halal ✨').isVisible();
  await page.getByTestId('post-context').getByText('Share group').isVisible();
  await page.getByText('Share group').click();
  await page.getByRole('button', { name: 'Copy' }).click();
});
import { test, expect } from '@playwright/test';

test('Has Title', async ({ page }) => {
  await page.goto('https://www.ecstuning.com/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/ECS/);
});


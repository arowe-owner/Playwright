import { test, expect, type Page } from '@playwright/test';

test.beforeEach(async ({ page }) => {
    await page.goto('https://ypaos:7CfDF99m&%Z4>7oWY2@five.libsyn.cloud/stats/show');
    await page.getByPlaceholder('email').fill('alex@libsyn.com');
    await page.getByPlaceholder('email').press('Tab');
    await page.getByPlaceholder('password').fill('AlexanderLibsyn1!!');
    await page.getByPlaceholder('password').press('Enter');
  });
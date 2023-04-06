//npx playwright codegen "URL"

import { test, expect, type Page } from '@playwright/test';

const headerButtonOne = 'a:visible >> text = how to start a podcast >> nth = 0'

test.beforeEach(async ({ page }) => {
    await page.goto('https://libsyn.com/');
  });

test.describe('Header', () => {
    test('Should click "How To Start a Podcast"', async ({page}) => {
        //locator 
        await expect(page.locator(headerButtonOne)).toBeVisible();
        await page.locator(headerButtonOne).click()
        expect(page.url()).toContain('how-to-start-a-podcast');
    })
    test('Should click "Plans & Pricing"', async ({page}) => {
        //locator 
        await expect(page.locator('a:visible >> text = plans & pricing >> nth = 0')).toBeVisible();
    })
});
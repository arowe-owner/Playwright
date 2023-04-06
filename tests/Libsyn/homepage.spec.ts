//npx playwright codegen "URL"

import { test, expect, type Page } from '@playwright/test';

const howToStartAPodcast = 'a:visible >> text = how to start a podcast >> nth = 0';
const plansAndPricing = 'a:visible >> text = plans & pricing >> nth = 0';
const features = 'a:visible >> text = features >> nth = 0';
const monetization = 'a:visible >> text = monetization >> nth = 0';
const enterprise = 'a:visible >> text = enterprise >> nth = 0';
const blog = 'a:visible >> text = blog >> nth = 0';
const support = 'a:visible >> text = support >> nth = 0';

test.beforeEach(async ({ page }) => {
    await page.goto('https://libsyn.com/');
  });

test.describe('HomePage Header Buttons', () => {
    //Click the button and checks its the correct page loaded
    //How To Start a Podcast
    test('Should click "How To Start a Podcast"', async ({page}) => {
        await expect(page.locator(howToStartAPodcast)).toBeVisible();
        await page.locator(howToStartAPodcast).click();
        expect(page.url()).toContain('how-to-start-a-podcast');
    })
    //Plans & Pricing
    test('Should click "Plans & Pricing"', async ({page}) => {
        await expect(page.locator(plansAndPricing)).toBeVisible();
        await page.locator(plansAndPricing).click();
        expect(page.url()).toContain('plans-and-pricing');
    })
    //Features
    test('Should click "Features"', async ({page}) => {
        await expect(page.locator(features)).toBeVisible();
        await page.locator(features).click();
        expect(page.url()).toContain('libsyn-podcast-hosting-features');
    })
    //Monetization
    test('Should click "Monetization"', async ({page}) => {
        await expect(page.locator(monetization)).toBeVisible();
        await page.locator(monetization).click();
        expect(page.url()).toContain('podcast-monetization');
    })
    //Enterprise
    test('Should click "Enterprise"', async ({page}) => {
        await expect(page.locator(enterprise)).toBeVisible();
        await page.locator(enterprise).click();
        expect(page.url()).toContain('libsynpro-enterprise-podcasting');
    })
    //Blog
    test('Should click "Blog"', async ({page}) => {
        await expect(page.locator(blog)).toBeVisible();
        await page.locator(blog).click();
        expect(page.url()).toContain('blog');
    })
    //Support
    test('Should click "Support"', async ({page}) => {
        await expect(page.locator(support)).toBeVisible();
        await page.locator(support).click();
        expect(page.url()).toContain('support');
    })
});
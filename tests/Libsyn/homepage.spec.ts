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
    //This is here to click the Accpet in the Privacy Policy
    await page.locator('a:visible >> text = accept').click()
  });

test.describe('HomePage Header Buttons', () => {
    //Click the button and checks its the correct page loaded
    
    //Libsyn Logo
    test('Should click Libsyn Logo', async ({page}) => {
        await expect(page.locator('img:visible >> nth = 0')).toBeVisible();
        await page.locator('img:visible >> nth = 0').click();
    })
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
    test.describe('Monitization Buttons', () => {
        test('Should click "Monetization Button"', async ({page}) => {
            await expect(page.locator(monetization)).toBeVisible();
            await page.locator(monetization).dblclick();
            expect(page.url()).toContain('podcast-monetization');
        })
        test('Should click "Monetization Dropdown 1"', async ({page}) => {
            await expect(page.locator(monetization)).toBeVisible();
            await page.locator(monetization).click();
            await page.locator('.elementor-sub-item:visible >> nth = 0').click();
        });
    })
    //Enterprise
    test('Should click "Enterprise"', async ({page}) => {
        await expect(page.locator(enterprise)).toBeVisible();
        await page.locator(enterprise).dblclick();
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
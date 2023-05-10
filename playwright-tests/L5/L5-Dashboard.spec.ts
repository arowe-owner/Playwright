import { test, expect, type Page } from '@playwright/test';

test.beforeEach(async ({ page }) => {
    await page.goto('https://five.libsyn.com/');
    await page.goto('https://five-api.libsyn.com/auth/authorize?client_id=Libsyn5&state=iv1onb5y5ll&redirect_uri=https%3A%2F%2Ffive.libsyn.com%2F');
    await page.getByPlaceholder('email').fill('alex@libsyn.com');
    await page.getByPlaceholder('email').press('Tab');
    await page.getByPlaceholder('password').fill('AlexanderLibsyn1!');
    await page.getByPlaceholder('password').press('Enter');
  });

test.describe('Dashboard', () => {
    test('Check Links', async ({page}) => {
        //All Time Downloads
        await page.locator('#all-time-chart canvas').nth(1).click({position: {x: 55,y: 148}});
        expect(page.url()).toContain('https://five.libsyn.com/show/stats');
        await page.getByRole('link', { name: 'dashboard' }).click();

        //This Month
        await page.locator('#this-month-chart canvas').nth(1).click({position: {x: 65,y: 140}});
        expect(page.url()).toContain('https://five.libsyn.com/show/stats');
        await page.getByRole('link', { name: 'dashboard' }).click();

        //This Week
        await page.locator('#this-week-chart canvas').nth(1).click({position: {x: 87,y: 132}});
        expect(page.url()).toContain('https://five.libsyn.com/show/stats');
        await page.getByRole('link', { name: 'dashboard' }).click();

        //IAB / Unique Swith
        await page.getByLabel('IAB').check();
        await page.getByLabel('IAB').uncheck();

        //New Products Modal
        await page.getByRole('button', { name: 'Next' }).nth(1).click();
        await page.getByRole('button', { name: 'Next' }).nth(1).click();
        await page.getByRole('button', { name: 'Next' }).nth(1).click();

        //Did You Know Modal
        await page.getByRole('button', { name: 'Next' }).first().click();
        await page.getByRole('button', { name: 'Next' }).first().click();
        await page.getByRole('button', { name: 'Next' }).first().click();

        //Recent Episode View All Button
        await page.getByRole('button', { name: 'View All' }).click();
        expect(page.url()).toContain('https://five.libsyn.com/show/episodes');
        await page.getByRole('link', { name: 'dashboard' }).click();

        //Quick Links
            //Feed
            await page.locator('#copy-rss-link').click();
            await page.locator('#libsyn-notifications').getByRole('button').click();
            //Website
            await page.locator('#copy-website-link').click();
            await page.locator('#libsyn-notifications').getByRole('button').first().click();
            //Player
            await page.locator('#copy-player-0-link').click();
            await page.locator('.modal-close > .libsyn-icon').click();

        /*
        //Embed Single Episode
        await page.locator('.libsyn-select__input-container').click();
        await page.locator('#react-select-5-input').fill('test');
        await page.locator('#react-select-5-input').press('Enter');
        await page.getByRole('button', { name: 'Get Code' }).click();
        await page.locator('.modal-close > .libsyn-icon > .libsyn-icon__main').click();
        */

        //Montly Storage
        await page.getByRole('button', { name: 'Manage' }).click();
        expect(page.url()).toContain('https://five.libsyn.com/show/file-manager');
        await page.getByRole('link', { name: 'dashboard' }).click();
    })
})
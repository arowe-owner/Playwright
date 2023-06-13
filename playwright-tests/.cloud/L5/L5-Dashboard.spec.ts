import { test, expect, type Page } from '@playwright/test';

test.beforeEach(async ({ page }) => {
    await page.goto('https://ypaos:7CfDF99m&%Z4>7oWY2@five.libsyn.cloud/');
    await page.getByPlaceholder('email').fill('alex@libsyn.com');
    await page.getByPlaceholder('email').press('Tab');
    await page.getByPlaceholder('password').fill('AlexanderLibsyn1!!');
    await page.getByPlaceholder('password').press('Enter');
  });

test.describe('Dashboard', () => {
    test('Check Links', async ({page}) => {

        await page.pause();

        await page.getByRole('cell', { name: 'Alex\'s Even Cooler Cloud Test Show' }).click();

        //All Time Downloads
        await page.locator('#all-time-chart canvas').nth(1).click({position: {x: 184,y: 139}});
        expect(page.url()).toContain('https://five.libsyn.cloud/show/stats');
        await page.getByRole('link', { name: 'dashboard' }).click();
        console.log('       CLICK "ALL TIME DOWNLOADS"')

        //This Month
        await page.locator('#this-month-chart canvas').nth(1).click({position: {x: 65,y: 140}});
        expect(page.url()).toContain('https://five.libsyn.cloud/show/stats');
        await page.getByRole('link', { name: 'dashboard' }).click();
        console.log('       CLICKED "THIS MONTH"')

        //This Week
        await page.locator('#this-week-chart canvas').nth(1).click({position: {x: 87,y: 132}});
        expect(page.url()).toContain('https://five.libsyn.cloud/show/stats');
        await page.getByRole('link', { name: 'dashboard' }).click();
        console.log('       CLICKED "THIS WEEK"')

        //IAB / Unique Swith
        await page.getByLabel('IAB').check();
        console.log('       CHECKED IAB')
        await page.getByLabel('IAB').uncheck();
        console.log('       UNCHECKED IAB')

        //New Products Modal
        await page.getByRole('button', { name: 'Next' }).nth(1).click();
        await page.getByRole('button', { name: 'Next' }).nth(1).click();
        await page.getByRole('button', { name: 'Next' }).nth(1).click();
        console.log('       CLICKED THROUGH "NEW PRODUCTS" MODAL')

        //Did You Know Modal
        await page.getByRole('button', { name: 'Next' }).first().click();
        await page.getByRole('button', { name: 'Next' }).first().click();
        await page.getByRole('button', { name: 'Next' }).first().click();
        console.log('       CLICKED THROUGH "DID YOU KNOW" MODAL')

        //Recent Episode View All Button
        await page.getByRole('button', { name: 'View All' }).click();
        expect(page.url()).toContain('https://five.libsyn.cloud/show/episodes');
        console.log('       CLICKED "VIEW ALL" BUTTON')
        await page.getByRole('link', { name: 'dashboard' }).click();
        console.log('       RETURNED TO DASHBOARD')

        //Quick Links
            //Feed
            await page.locator('#copy-rss-link').click();
            console.log('       CLICKED "FEED" QUICK LINK')
            await page.locator('#libsyn-notifications').getByRole('button').click();
            //Website
            await page.locator('#copy-website-link').click();
            console.log('       CLICKED "WEBISTE" QUICK LINK')
            await page.locator('#libsyn-notifications').getByRole('button').first().click();
            //Player
            await page.locator('#copy-player-0-link').click();
            console.log('       CLICKED "PLAYER" QUICK LINK')
            await page.locator('.modal-close > .libsyn-icon').click();

        
        //Embed Single Episode
        await page.locator('#dashboard__embed-select svg').click();
        await page.locator('#react-select-6-option-0').click();
        await page.getByRole('button', { name: 'Get Code' }).click();
        await page.getByRole('dialog').locator('path').first().click();
        

        //Montly Storage
        await page.getByRole('button', { name: 'Manage' }).click();
        expect(page.url()).toContain('https://five.libsyn.cloud/show/file-manager');
        console.log('       CLICKED "MONTHLY STORAGE" BUTTON')
        await page.getByRole('link', { name: 'dashboard' }).click();
        console.log('       RETURNED TO DASHBOARD')
    })
})
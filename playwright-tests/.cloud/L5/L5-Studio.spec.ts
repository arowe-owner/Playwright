import { test, expect, type Page, chromium } from '@playwright/test';

test('Studio Smoke Test', async ({}) => {

    // Create a new incognito browser context
    const browser = await chromium.launch()
    const context = await browser.newContext();
    //Grants Mic Permissions
    await context.grantPermissions(['microphone'])
    // Create a new page inside context.
    const page = await context.newPage();

    await page.goto('https://ypaos:7CfDF99m&%Z4>7oWY2@five.libsyn.cloud/');
    await page.getByPlaceholder('email').fill('alex@libsyn.com');
    await page.getByPlaceholder('email').press('Tab');
    await page.getByPlaceholder('password').fill('AlexanderLibsyn1!!');
    await page.getByPlaceholder('password').press('Enter');

    //await page.pause();

    await page.getByRole('cell', { name: 'Alex\'s Even Cooler Cloud Test Show' }).click();

    await page.getByRole('button', { name: 'New' }).click();
    await page.locator('#navbar_dropdown_new_studio').click();

    await page.getByRole('textbox').click();
    await page.getByRole('textbox').type('TEST Episode');
    await page.getByRole('button', { name: 'Start Episode' }).click();
    
    await page.getByRole('link', { name: '' }).click();
    await page.locator('input[name="title"]').fill('TEST STUDIO EPISODE');
    await page.getByRole('link', { name: 'Update' }).click();

    await page.getByRole('button', { name: 'Connect Files' }).click();
    await page.getByRole('cell', { name: '#3 - L5-2002.1' }).click();

    //Intro
        await page.getByRole('link', { name: 'Intro' }).click();

        //Play and Pause Intro
        await page.getByRole('button', { name: 'Play' }).click();
        await page.getByRole('button', { name: 'Pause' }).click();

        await page.getByRole('link', { name: 'Edit Intro' }).click();

        await page.getByRole('link', { name: '' }).first().click();
        await page.getByRole('link', { name: '' }).click();
        await page.getByRole('link', { name: '' }).nth(1).click();
        await page.getByRole('link', { name: '' }).click();
        await page.getByRole('link', { name: '' }).nth(2).click();
        await page.getByRole('link', { name: '' }).click();

        await page.getByPlaceholder('Write a compelling Intro here, you\'ll record it next. Listen to examples under Tips for ideas.').fill('NOTES');

        await page.getByRole('button', { name: 'Save' }).click();

})
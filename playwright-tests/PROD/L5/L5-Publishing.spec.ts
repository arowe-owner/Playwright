import { test, expect, type Page } from '@playwright/test';

test.beforeEach(async ({ page }) => {

    await page.goto('https://ypaos:7CfDF99m&%Z4>7oWY2@five.libsyn.cloud/');
    await page.getByPlaceholder('email').fill('alex@libsyn.com');
    await page.getByPlaceholder('email').press('Tab');
    await page.getByPlaceholder('password').fill('AlexanderLibsyn1!!');
    await page.getByPlaceholder('password').press('Enter');
  });

test.describe('Publishing Episode', () => {
    test('Publish Episode', async ({page}) => {

        await page.pause();
        //Clicks on the NEW button to upload new episode
        await page.getByRole('button', { name: 'New' }).click();
        await page.locator('#navbar_dropdown_new_upload').isVisible();
        await page.locator('#navbar_dropdown_new_upload').click();
        expect(page.url()).toContain('https://five.libsyn.com/show/episodes/add');
        console.log('       CLICKED NEW BUTTON')

        //Confirms you cannot publish without filling required fields
        await page.getByRole('button', { name: 'Publish' }).click();
        expect(page.url()).toContain('https://five.libsyn.com/show/episodes/add');
        console.log('       CANNOT PUBLISH WITHOUT REQUIRED FIELDS')

        //Selects audio from Published
        await page.locator('#libsyn-notifications').getByRole('button').click();
        await page.getByRole('button', { name: 'Media Library' }).click();
        await page.getByRole('link', { name: 'Published' }).click();
        await page.getByRole('row', { name: '241_thefeed.mp3 audio/mpeg 29.29 MB Select', exact: true }).getByRole('link', { name: 'Select' }).click();
        console.log('       SELECTED AUDIO FROM PUBLISHED')

        //Fills Title
        await page.getByRole('textbox', { name: 'Episode Title' }).fill('TEST TITLE');
        console.log('       FILLED TITLE')

        //Fills Description
        await page.frameLocator('iframe[title="Rich Text Area"]').locator('#tinymce').fill('This is a test description');
        console.log('       FILLED DESCRIPTION')

        //Need to add multiple kinds of files, deleting and replacing file

        //Fills Episode Type
        /*
        await page.locator('#itunes_episode_type div').nth(3).click();
        await page.locator('#react-select-2-option-0').click();
        console.log('       SET EPISODE TYPE TO FULL')
        */

        //Fills Season and Episode Number
        await page.getByLabel('Season Number').fill('1');
        console.log('       SET SEASON NUMBER TO "1"')
        await page.getByLabel('Episode Number').fill('1');
        console.log('       SET EPISODE NUMBER TO "1"')

        //Fills Apple Podcast Title
        /*
        await page.getByLabel('Apple Podcasts Title').click();
        await page.getByLabel('Apple Podcasts Title').fill('TEST APPLE TITLE');
        console.log('       FILLED APPLE PODCAST TITLE')
        */

        //Upload Artwork Image
        
        await page.locator('input[type="file"]').setInputFiles('playwright-tests/Fixtures/Episode Artwork Image.png');
        await page.getByText('Add Episode Artwork').click();
        console.log('       UPLOADED EPISODE ARTWORK')


    })
  })
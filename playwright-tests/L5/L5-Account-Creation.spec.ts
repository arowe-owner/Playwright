import { test, expect, type Page } from '@playwright/test';
import { L5Variables } from '../Fixtures/L5-Fixtures';

//const vary = new L5Variables(page);

const unique = Math.floor(Math.random()*100000);
const firstName = 'Test';
const lastName = 'User' + unique;
const uniqueEmail = 'qalibsyn+' + unique + '@gmail.com';
const uniquePass = 'Password' + unique + '!';

test.beforeEach(async ({ page }) => {
    await page.goto('https://five.libsyn.com/');
    await page.goto('https://five-api.libsyn.com/auth/authorize?client_id=Libsyn5&state=iv1onb5y5ll&redirect_uri=https%3A%2F%2Ffive.libsyn.com%2F');
  });

test.describe('New Account Creation', () => {
    test('Create New Customer Account', async ({page}) => {
        await page.getByRole('link', { name: 'Sign Up' }).click();
        console.log('     CLICKED SIGN UP');

        //First Name
        await page.getByPlaceholder('* First Name').fill(firstName);
        console.log('     FILLED FIRST NAME');

        //Last Name
        await page.getByPlaceholder('* Last Name').fill(lastName);
        console.log('     FILLED LAST NAME');

        //Email
        await page.getByPlaceholder('* Email').fill(uniqueEmail);
        console.log('     FILLED EMAIL');

        //Password
        await page.getByPlaceholder('* Password').fill(uniquePass);
        console.log('     FILLED PASSWORD');
 
        await page.getByLabel('Sign me up to receive Libsyn service, community, industry and podcast educational communications.').check();
        console.log('     CHECKED "SIGN ME UP TO RECEIVE..."');

        //Agree to Terms and Services
        await page.getByRole('checkbox', { name: 'I accept and agree to <a href=\'https://libsyn.com/tos-policies/tos-website/\' target=\'blank\'> Libsyn’s Terms of Service </a> and <a href=\'https://libsyn.com/tos-policies/privacy-policy/\' target=\'blank\'>Privacy Policy</a>' }).check();
        console.log('     AGREE TO TERMS AND SERVICES');

        //Create Account Button
        await page.getByRole('button', { name: 'Create Your Account' }).click();
        console.log('     CLICKED CREATE ACCOUNT');
        
        console.log('     ******************************');
        console.log('     email: ' + uniqueEmail);
        console.log('     password: ' + uniquePass);
        console.log('     ******************************');
    })
    test('Choose Plan for new Podcast', async ({page}) => {
        
        //Login to new account
        await page.getByPlaceholder('email').fill(uniqueEmail);
        await page.getByPlaceholder('password').fill(uniquePass);
        await page.getByPlaceholder('password').press('Enter');

        //Podcast Unique Title
        await page.getByRole('textbox', { name: 'Podcast Title' }).fill('Test Title' + unique);

        //Enter Location
        await page.getByPlaceholder('Enter a location').fill('1000 Seville Road');
        await page.getByText('1000 Seville RoadWadsworth, OH, USA').click();

        //Enter Card Information
        await page.frameLocator('iframe[name="recurly-element--lxRHXnJsLvHZ6oPX"]').getByPlaceholder('Card number').fill('4111 1111 1111 1111');
        await page.frameLocator('iframe[name="recurly-element--lxRHXnJsLvHZ6oPX"]').getByPlaceholder('MM / YY').fill('02 / 25');
        await page.frameLocator('iframe[name="recurly-element--lxRHXnJsLvHZ6oPX"]').getByPlaceholder('CVV').fill('123');
        await page.getByRole('button', { name: 'OK' }).click();
        await page.getByRole('textbox', { name: 'Payment Method Nickname' }).fill('TEST CARD');

        //$5 / Month
        await page.getByRole('checkbox').first().check();

        /*
        //$7 / Month
        await page.getByRole('checkbox').nth(1).check();

        //$15 / Month
        await page.getByRole('checkbox').nth(2).check();

        //$20 / Month
        await page.getByRole('checkbox').nth(3).check();
        */

        //Save
        await page.getByRole('button', { name: 'Save' }).click();
    })
})
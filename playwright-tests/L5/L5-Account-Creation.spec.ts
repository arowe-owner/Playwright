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
        await page.pause();

        await page.getByRole('link', { name: 'Sign Up' }).click();

        await page.getByPlaceholder('* First Name').fill(firstName);

        await page.getByPlaceholder('* Last Name').fill(lastName);

        await page.getByPlaceholder('* Email').fill(uniqueEmail);

        await page.getByPlaceholder('* Password').fill(uniquePass);
 
        await page.getByLabel('Sign me up to receive Libsyn service, community, industry and podcast educational communications.').check();

        await page.getByRole('checkbox', { name: 'I accept and agree to <a href=\'https://libsyn.com/tos-policies/tos-website/\' target=\'blank\'> Libsyn’s Terms of Service </a> and <a href=\'https://libsyn.com/tos-policies/privacy-policy/\' target=\'blank\'>Privacy Policy</a>' }).check();

        await page.getByRole('button', { name: 'Create Your Account' }).click();

        console.log('email: ' + uniqueEmail);
        console.log('password: ' + uniquePass);
    })
})
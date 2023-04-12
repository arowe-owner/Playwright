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

test.describe('HomePage Testing Links', () => {
    //Click the button and checks its the correct page loaded
    
    //Libsyn Logo
    test('Click Libsyn Logo', async ({page}) => {
        await expect(page.locator('img:visible >> nth = 0')).toBeVisible();
        await page.locator('img:visible >> nth = 0').click();
    })
    //How To Start a Podcast
    test('Click "How To Start a Podcast"', async ({page}) => {
        await expect(page.locator(howToStartAPodcast)).toBeVisible();
        await page.locator(howToStartAPodcast).click();
        expect(page.url()).toContain('how-to-start-a-podcast');
    })
    //Plans & Pricing
    test('Click "Plans & Pricing"', async ({page}) => {
        await expect(page.locator(plansAndPricing)).toBeVisible();
        await page.locator(plansAndPricing).click();
        expect(page.url()).toContain('plans-and-pricing');
    })
    //Features
    test('Click "Features"', async ({page}) => {
        await expect(page.locator(features)).toBeVisible();
        await page.locator(features).click();
        expect(page.url()).toContain('libsyn-podcast-hosting-features');
    })
})

//Monetization
test.describe('Monitization Options', () => {
    test('Click "Monetization Button"', async ({page}) => {
        await expect(page.locator(monetization)).toBeVisible();
        await page.locator(monetization).dblclick();
        expect(page.url()).toContain('podcast-monetization');
    })
    test('Click "Monetization Dropdown 1"', async ({page}) => {
        await expect(page.locator(monetization)).toBeVisible();
        await page.locator(monetization).click();
        await page.locator('.elementor-sub-item:visible >> nth = 0').click();
    });
    test('Click "Monetization Dropdown 2"', async ({page}) => {
        await expect(page.locator(monetization)).toBeVisible();
        await page.locator(monetization).click();
        await page.locator('.elementor-sub-item:visible >> nth = 1').click();
    });
    test('Click "Monetization Dropdown 3"', async ({page}) => {
        await expect(page.locator(monetization)).toBeVisible();
        await page.locator(monetization).click();
        await page.locator('.elementor-sub-item:visible >> nth = 2').click();
    });
})

//Enterprise
test.describe('Enterprise Options', () => {
    test('Click "Enterprise Button"', async ({page}) => {
        await expect(page.locator(enterprise)).toBeVisible();
        await page.locator(enterprise).dblclick();
        expect(page.url()).toContain('libsynpro-enterprise-podcasting');
    })
    test('Click "Enterprise Dropdown 1"', async ({page}) => {
        await expect(page.locator(enterprise)).toBeVisible();
        await page.locator(enterprise).click();
        await page.locator('.elementor-sub-item:visible >> nth = 0').click();
    });
    test('Click "Enterprise Dropdown 2"', async ({page}) => {
        await expect(page.locator(enterprise)).toBeVisible();
        await page.locator(enterprise).click();
        await page.locator('.elementor-sub-item:visible >> nth = 1').click();
    });
})

//Blog
test('Click "Blog"', async ({page}) => {
    await expect(page.locator(blog)).toBeVisible();
    await page.locator(blog).click();
    expect(page.url()).toContain('blog');
})

//Support
test('Click "Support"', async ({page}) => {
    await expect(page.locator(support)).toBeVisible();
    await page.locator(support).click();
    expect(page.url()).toContain('support');
})

//Test to switching to English
test('Should switch site to US', async ({page}) => {
    await page.getByRole('link', { name: 'en', exact: true }).click();
})

//Test to switching to Espanol
test('Should switch site to ES', async ({page}) => {
    await page.getByRole('link', { name: 'es', exact: true }).click();
})

test.describe('HomePage Body Buttons', () => {
//Click Start Broadcasting Button
    test('Click "Start Podcasting" button', async ({page}) => {
        await page.getByRole('button', { name: 'START PODCASTING' }).click();
    })
    //Click Libsyn Studio Link
    test('Click "Learn More About Libsyn Studio" link', async ({page}) => {
        await page.getByRole('link', { name: 'Learn more about Libsyn Studio.' }).click();
        expect(page.url()).toContain('libsyn-podcast-hosting-features');
    })
})

//Clicks on Appple, Google and Spotify links
test.describe('"Be Everywhere" Apple, Google and Spotify Links', () => {
    test('Click "Apple Podcasts" Link', async ({page}) => {
        const page1Promise = page.waitForEvent('popup');
        await page.getByRole('link', { name: 'Apple Podcasts' }).click();
        const page1 = await page1Promise;
    })
    test('Click "Google Podcasts" Link', async ({page}) => {
        const page2Promise = page.waitForEvent('popup');
        await page.getByRole('link', { name: 'Google Podcasts' }).click();
        const page2 = await page2Promise;
    })
    test('Click "Spotify" Link', async ({page}) => {
        const page3Promise = page.waitForEvent('popup');
        await page.getByRole('link', { name: 'Spotify' }).click();
        const page3 = await page3Promise;
    })
})

//Clicks Learn more about Connect
test('Click "Learn more about Connect" link', async ({page}) => {
    await page.getByRole('link', { name: 'Learn more about Connect.' }).click();
    expect(page.url()).toContain('libsyn-podcast-hosting-features');
})

//Clicks on Appple, Google and Spotify links
test.describe('Reviews', () => {
    test('Click first review', async ({page}) => {
        const page4Promise = page.waitForEvent('popup');
        await page.frameLocator('iframe[title="Customer reviews powered by Trustpilot"] >> nth=0').getByRole('link', { name: 'As a newbie podcaster who is not a tech wizard, I was very leery about starting my ow...' }).click();
        const page4 = await page4Promise;
    })
    test('Click second review', async ({page}) => {
        const page5Promise = page.waitForEvent('popup');
        await page.frameLocator('iframe[title="Customer reviews powered by Trustpilot"] >> nth=0').getByRole('link', { name: 'I\'ve always found the support service at Libsyn to be timely, very helpful and always...' }).click();
        const page5 = await page5Promise;
    })
    test('Click thrid review', async ({page}) => {
        const page6Promise = page.waitForEvent('popup');
        await page.frameLocator('iframe[title="Customer reviews powered by Trustpilot"] >> nth=0').getByRole('link', { name: 'Long story short, the credit card on file for our show wasn\'t updated and no one on t...' }).click();
        const page6 = await page6Promise;
    })
    test('Click forth review', async ({page}) => {
        const page7Promise = page.waitForEvent('popup');
        await page.frameLocator('iframe[title="Customer reviews powered by Trustpilot"] >> nth=0').getByRole('link', { name: 'Libsyn has been my host since mid-2000s, and zero complaints from me. It\'s an excelle...' }).click();
        const page7 = await page7Promise;
    })
    //Confirm left arrow works
    test('Clicks left arrow in reviews', async ({page}) => {
        await page.frameLocator('iframe[title="Customer reviews powered by Trustpilot"] >> nth=0').locator('#review-arrow-left svg').click();
    })
    //Confrims right arrow works
    test('Clicks right arrow in reviews', async ({page}) => {
        await page.frameLocator('iframe[title="Customer reviews powered by Trustpilot"] >> nth=0').locator('#review-arrow-left svg').click();
    })
    //Clicks total reviews link
    test('Clicks total reviews link', async ({page}) => {
        const page8Promise = page.waitForEvent('popup');
        await page.frameLocator('iframe[title="Customer reviews powered by Trustpilot"] >> nth=0').getByRole('link', { name: '368 reviews' }).click();
        const page8 = await page8Promise;
    })
})

//Clicks Social Destinations Calendar Link
test('Click "Social Destinations Calendar" link', async ({page}) => {
    const page9Promise = page.waitForEvent('popup');
    await page.getByRole('link', { name: 'The Social Destinations Calendar' }).click();
    const page9 = await page9Promise;
})

//Clicks on Create a Launch Worthy... Links
test.describe('"Create a Launch Worthy..." Links', () => {
    test('Click "media players" Link', async ({page}) => {
        const page10Promise = page.waitForEvent('popup');
        await page.getByRole('link', { name: 'media players' }).click();
        const page10 = await page10Promise;
    })
    test('Click "podcast website" Link', async ({page}) => {
        const page11Promise = page.waitForEvent('popup');
        await page.getByRole('link', { name: 'podcast website' }).click();
        const page11 = await page11Promise;
    })
    test('Click "Design with Canva." Link', async ({page}) => {
        const page12Promise = page.waitForEvent('popup');
        await page.getByRole('link', { name: 'Design with Canva' }).click();
        const page12 = await page12Promise;
    })
})

//Clicks on Explore Global... Links
test.describe('"Explore Global..." Links', () => {
    test('Click "podcast analytics" Link', async ({page}) => {
        await page.getByRole('link', { name: 'podcast analytics' }).click();
        expect(page.url()).toContain('watch?v=kQm7sXCRpLs&t=14s');
    })
    test('Click "IAB Tech Lab-verified stats" Link', async ({page}) => {
        const page14Promise = page.waitForEvent('popup');
        await page.getByRole('link', { name: 'IAB Tech Lab-verified stats' }).click();
        const page14 = await page14Promise;
    })
})

//Clicks on Audio & Video Podcast... Links
test.describe('"Create a Launch Worthy..." Links', () => {
    test('Click "all plans" Link', async ({page}) => {
        await page.getByRole('link', { name: 'all plans' }).click();
        expect(page.url()).toContain('plans-and-pricing');
    })
})

//Clicks on Start a Podcast... Links
test.describe('"Start a Podcast..." Links', () => {
    test('Click first video Link', async ({page}) => {
        const page15Promise = page.waitForEvent('popup');
        await page.locator('div:nth-child(6) > a').click();
        const page15 = await page15Promise;
    })
    test('Click second video Link', async ({page}) => {
        const page16Promise = page.waitForEvent('popup');
        await page.locator('div:nth-child(7) > a').click();
        const page16 = await page16Promise;
    })
    test('Click third video Link', async ({page}) => {
        const page17Promise = page.waitForEvent('popup');
        await page.locator('div:nth-child(8) > a').click();
        const page17 = await page17Promise;
    })
    test('Click forth video Link', async ({page}) => {
        const page18Promise = page.waitForEvent('popup');
        await page.locator('div:nth-child(9) > a').click();
        const page18 = await page18Promise;
    })
    test('Click fifth video Link', async ({page}) => {
        const page19Promise = page.waitForEvent('popup');
        await page.locator('div:nth-child(10) > a').click();
        const page19 = await page19Promise;
    })
})

//Clicks Youtube, The Feed, and How to Start a Podcast Links
test.describe('"YT, TheFeed, and HSP" Links', () => {
    test('Click "Start a Podcast under $100" Link', async ({page}) => {
        await page.getByRole('link', { name: 'Start a Podcast under $100' }).click();
        expect(page.url()).toContain('https://signup.libsyn.com/');
    })
    test('Click "The Feed:..." Link', async ({page}) => {
        const page20Promise = page.waitForEvent('popup');
        await page.getByRole('link', { name: 'The Feed: The Official Libsyn Podcast' }).click();
        const page20 = await page20Promise;
    })
    test('Click "How to Start a Podcast" Link', async ({page}) => {
        await page.getByRole('link', { name: 'How to Start a Podcast', exact: true }).click();
        expect(page.url()).toContain('https://libsyn.com/how-to-start-a-podcast/');
    })
})

//Click "Built for Creators..." Link
test.describe('"Built for Creators..." Links', () => {
    test('Click "acces the information" Link', async ({page}) => {
        const page21Promise = page.waitForEvent('popup');
        await page.getByRole('link', { name: 'access the information' }).click();
        const page21 = await page21Promise;
    })
})

//Click Buttons near Footer
test.describe('Buttons Near Footer', () => {
    test('Click "Podcast Monetization" Button', async ({page}) => {
        await page.getByRole('button', { name: 'PODCAST MONETIZATION' }).click();
        expect(page.url()).toContain('https://libsyn.com/podcast-monetization/');
    })
    test('Click "Enterprise Podcasting" Button', async ({page}) => {
        await page.getByRole('button', { name: 'ENTERPRISE PODCASTING' }).click();
        expect(page.url()).toContain('https://signup.libsyn.com/');
    })
    test('Click "Get Started" Button', async ({page}) => {
        await page.getByRole('button', { name: 'GET STARTED' }).click();
        expect(page.url()).toContain('https://signup.libsyn.com/');
    })
})

//Click Footer Links
test.describe('Footer Links/Buttons', () => {
    test('Click "Move to Libsyn" Button', async ({page}) => {
        await page.getByRole('button', { name: 'MOVE TO LIBSYN' }).click();
        expect(page.url()).toContain('https://libsyn.com/move-to-libsyn/');
    })
    test('Click "Start on Libsyn" Button', async ({page}) => {
        await page.getByRole('button', { name: 'START ON LIBSYN' }).click();
        expect(page.url()).toContain('https://libsyn.com/plans-and-pricing/');
    })

    //Clicks Social Media Links
    test.describe('Social Media Links', () => {
        test('"FaceBook" Button', async ({page}) => {
            const page22Promise = page.waitForEvent('popup');
            await page.getByRole('link', { name: 'Facebook-f ' }).click();
            const page22 = await page22Promise;
        })
        test('"Instagram" Button', async ({page}) => {
            const page23Promise = page.waitForEvent('popup');
            await page.getByRole('link', { name: 'Instagram ' }).click();
            const page23 = await page23Promise;
        })
        test('"Twitter" Button', async ({page}) => {
            await page.getByRole('link', { name: 'Twitter ' }).click();
            expect(page.url()).toContain('https://twitter.com/libsyn');
        })
        test('"LinkedIn" Button', async ({page}) => {
            const page24Promise = page.waitForEvent('popup');
            await page.getByRole('link', { name: 'Linkedin ' }).click();
            const page24 = await page24Promise;
        })
        test('"YouTube" Button', async ({page}) => {
            const page25Promise = page.waitForEvent('popup');
            await page.getByRole('link', { name: 'Youtube ' }).click();
            const page25 = await page25Promise;
        })
    })

    //Clicks "Company" Links
    test.describe('"Company" Links', () => {
        test('About', async ({page}) => {
            await page.getByRole('link', { name: 'About', exact: true }).click();
            expect(page.url()).toContain('https://libsyn.com/about-libsyn/');
        })
        test('Investor Relations', async ({page}) => {
            await page.getByRole('link', { name: 'Investor Relations' }).click();
            expect(page.url()).toContain('https://investor.libsyn.com/');
        })
        test('Careers', async ({page}) => {
            await page.getByRole('link', { name: 'Careers', exact: true }).click();
            expect(page.url()).toContain('https://libsyn.com/libsyn-careers/');
        })
        test('Press Kit', async ({page}) => {
            await page.getByRole('link', { name: 'Press Kit', exact: true }).click();
            expect(page.url()).toContain('https://libsyn.com/press-kit/');
        })
        test('Contact', async ({page}) => {
            await page.getByRole('link', { name: 'Contact', exact: true }).click();
            expect(page.url()).toContain('https://libsyn.com/contact-connect/');
        })
    })

    //Clicks "Community" Links
    test.describe('"Community" Links', () => {
        test('The Feed', async ({page}) => {
            await page.getByRole('link', { name: 'The Feed', exact: true }).click();
            expect(page.url()).toContain('https://libsyn.com/the-feed/');
        })
        test('Testimonials', async ({page}) => {
            await page.getByRole('link', { name: 'Testimonials' }).click();
            expect(page.url()).toContain('https://libsyn.com/testimonials/');
        })
        test('Education, Events and Webinars', async ({page}) => {
            await page.getByRole('link', { name: 'Education, Events and Webinars', exact: true }).click();
            expect(page.url()).toContain('https://libsyn.com/support/');
        })
        test('Directory', async ({page}) => {
            await page.getByRole('link', { name: 'Directory', exact: true }).click();
            expect(page.url()).toContain('https://directory.libsyn.com/');
        })
    })

    //Clicks "Support" Links
    test.describe('"Support" Links', () => {
        test('System Status', async ({page}) => {
            await page.getByRole('link', { name: 'System Status', exact: true }).click();
            expect(page.url()).toContain('https://status.libsyn.com/');
        })
        test('Legal', async ({page}) => {
            await page.getByRole('link', { name: 'Legal' }).click();
            expect(page.url()).toContain('https://libsyn.com/tos-policies/legal/');
        })
        test('Privacy Policy', async ({page}) => {
            await page.getByRole('listitem').filter({ hasText: 'Privacy Policy' }).getByRole('link', { name: 'Privacy Policy' }).click();
            expect(page.url()).toContain('https://libsyn.com/tos-policies/privacy-policy/');
        })
        test('Help Center', async ({page}) => {
            await page.getByRole('link', { name: 'Help Center', exact: true }).click();
            expect(page.url()).toContain('https://five.libsynsupport.com/hc/en-us');
        })
    })
})
import { expect, Page } from '@playwright/test'

export class L5Variables {
    readonly page: Page;
    readonly L5StageURL: string;
    readonly L5ProdURL: string;
    readonly unique = Math.floor(Math.random()*100000);

    constructor(page: Page) {
        this.page = page;
    }

    async genEmail() {
        return 'alex+' + this.unique + '@libsyn.com';
    }
}

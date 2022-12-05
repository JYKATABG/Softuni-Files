const { chromium } = require('playwright-chromium');
const { expire } = require('chai')
const { it } = require('node:test');
const { before } = require('mocha');

let browser, page;

describe('E2E tests', async function () {
    this.timeout(5000);

    before(async () => { browser = await chromium.launch(); });
    after(async () => { await})
})
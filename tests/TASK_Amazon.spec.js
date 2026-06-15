import {test} from '@playwright/test'

test('',async ({page}) => {
    await page.goto('https://www.amazon.in/')
    await page.getByPlaceholder('Search Amazon.in').fill('mobile')
    await page.locator('//input[@type="submit"]').click()
    await page.locator('//img[@src="https://m.media-amazon.com/images/I/81dblfYZOYL._AC_SR160,134_CB1169409_QL70_.jpg"]').click()
    await page.locator('(//input[@id="add-to-cart-button"])[2]'.aaaaaaa).click()
})
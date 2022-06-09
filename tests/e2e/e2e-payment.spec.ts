import { test, expect } from "@playwright/test"
import { HomePage } from "../../page-objects/HomePage"
import { LoginPage } from "../../page-objects/LoginPage"

test.describe("New Payment", () => {
    let homePage: HomePage
    let loginPage: LoginPage
    test.beforeEach(async ({ page }) => {
        homePage = new HomePage(page)
        loginPage = new LoginPage(page)

        homePage.visit()
        homePage.clickOnSignIn()
        loginPage.login("username", "password")
    })

    test("Should send new payment", async ({ page }) => {
        await page.click("#pay_bills_tab")
        await page.selectOption("#sp_payee", "apple")
        await page.click("#sp_get_payee_details")
        await page.waitForSelector("#sp_get_payee_details")
        await page.selectOption("#sp_account", "6")
        await page.type("#sp_amount", "5000")
        await page.type("#sp_date", "2022-04-27")
        await page.type("#sp_description", "Some message")
        await page.click("#pay_saved_payees")

        const message = await page.locator("#alert_content > span")
        await expect(message).toBeVisible()
        await expect(message).toContainText("The payment was successfully submitted")
    })
})
import { test, expect } from "@playwright/test"
import { HomePage } from "../../page-objects/HomePage"
import { LoginPage } from "../../page-objects/LoginPage"
import { NavBar } from "../../page-objects/components/Navbar"
import { TransferFundsPage } from "../../page-objects/TransferFundsPage"

test.describe("Transfer Funds and Make Payments", () => {
    let homePage: HomePage
    let loginPage: LoginPage
    let navBar: NavBar
    let transferFundsPage: TransferFundsPage
    test.beforeEach(async ({ page }) => {
        homePage = new HomePage(page)
        loginPage = new LoginPage(page)
        navBar = new NavBar(page)
        transferFundsPage = new TransferFundsPage(page)

        homePage.visit()
        homePage.clickOnSignIn()
        loginPage.login("username", "password")
    })

    test("Transfer funds", async({ page }) => {
        await navBar.clickOnTab("Transfer Funds")
        await transferFundsPage.transferFunds()
        await transferFundsPage.successMessage()

        // await page.click("#transfer_funds_tab")
        // await page.selectOption("#tf_fromAccountId", "2")
        // await page.selectOption("#tf_toAccountId", "3")
        // await page.type("#tf_amount", "500")
        // await page.type("#tf_description", "Text message")
        // await page.click("#btn_submit")

        // const boardHeader = await page.locator("h2.board-header")
        // expect(boardHeader).toContainText("Verify")
        // await page.click("#btn_submit")

        // const message = await page.locator(".alert-success")
        // expect(message).toContainText("You successfully submitted your transaction")
    })
})
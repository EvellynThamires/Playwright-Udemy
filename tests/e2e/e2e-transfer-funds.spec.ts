import { test } from "@playwright/test"
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
    })
})
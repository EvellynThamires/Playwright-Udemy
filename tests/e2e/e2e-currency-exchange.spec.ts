import { test } from "@playwright/test"
import { HomePage } from "../../page-objects/HomePage"
import { LoginPage } from "../../page-objects/LoginPage"
import { NavBar } from "../../page-objects/components/Navbar"
import { CurrencyExchangePage } from "../../page-objects/CurrencyExchangePage"

test.describe("Currency Exchange form", () => {
    let homePage: HomePage
    let loginPage: LoginPage
    let navBar: NavBar
    let currencyExchangePage: CurrencyExchangePage
    test.beforeEach(async ({ page }) => {
        homePage = new HomePage(page)
        loginPage = new LoginPage(page)
        navBar = new NavBar(page)
        currencyExchangePage = new CurrencyExchangePage(page)

        homePage.visit()
        homePage.clickOnSignIn()
        loginPage.login("username", "password")
    })

    test("Should make currency exchange", async({ page }) => {
        await navBar.clickOnTab("Pay Bills")
        await currencyExchangePage.currencyExchange()
        await currencyExchangePage.assertSuccessMessage()
    })
})
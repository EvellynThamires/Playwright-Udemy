import { test } from "@playwright/test"
import { HomePage } from "../../page-objects/HomePage"
import { LoginPage } from "../../page-objects/LoginPage"
import { NavBar } from "../../page-objects/components/Navbar"
import { FilterTransactionsPage } from "../../page-objects/FilterTransactionsPage"

test.describe("Filter Transactions", () => {
    let homePage: HomePage
    let loginPage: LoginPage
    let navBar: NavBar
    let filterTransactionPage: FilterTransactionsPage
    test.beforeEach(async ({ page }) => {
        homePage = new HomePage(page)
        loginPage = new LoginPage(page)
        navBar = new NavBar(page)
        filterTransactionPage = new FilterTransactionsPage(page)
 
        homePage.visit()
        homePage.clickOnSignIn()
        loginPage.login("username", "password")
    })

    test("Verify the results for each account", async ({ page }) => {
        await navBar.clickOnTab("Account Activity")
        await filterTransactionPage.checkingAccountFilter()
        await filterTransactionPage.loanAccountFilter()
        await filterTransactionPage.noResultsFilter()
    })
})
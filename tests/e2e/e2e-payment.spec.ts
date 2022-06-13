import { test } from "@playwright/test"
import { HomePage } from "../../page-objects/HomePage"
import { LoginPage } from "../../page-objects/LoginPage"
import { NavBar } from "../../page-objects/components/Navbar"
import { PaymentPage } from "../../page-objects/PaymentPage"

test.describe("New Payment", () => {
    let homePage: HomePage
    let loginPage: LoginPage
    let navBar: NavBar
    let paymentPage: PaymentPage
    test.beforeEach(async ({ page }) => {
        homePage = new HomePage(page)
        loginPage = new LoginPage(page)
        navBar = new NavBar(page)
        paymentPage = new PaymentPage(page)

        homePage.visit()
        homePage.clickOnSignIn()
        loginPage.login("username", "password")
    })

    test("Should send new payment", async ({ page }) => {
        await navBar.clickOnTab("Pay Bills")
        await paymentPage.createPayment()
        await paymentPage.assertSuccessMessage()
    })
})
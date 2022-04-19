import { test, expect } from '@playwright/test'

test.describe.parallel("Login / Logout Flow", () => {
    test.beforeEach(async ({ page }) => {
        await page.goto("http://zero.webappsecurity.com/")
    })

    test("Negative Scenario for login", async ({ page }) => {
        await page.click("#signin_button")
        await page.type("#user_login", "invalid username")
        await page.type("#user_password", "invalid password")
        await page.click("text=Sign in")

        const errorMessage = await page.locator(".alert-error")
        await expect(errorMessage).toContainText("Login and/or password are wrong")
    })

    test("Positive Scenario for login + logout", async ({ page }) => {
        await page.click("#signin_button")
        await page.type("#user_login", "username")
        await page.type("#user_password", "password")
        await page.click("text=Sign in")

       //const accountSumaryTab = await page.locator("#account_summary_tab")
        //await expect(accountSumaryTab).toBeVisible()

        await page.goto("http://zero.webappsecurity.com/logout.html")
        await expect(page).toHaveURL("http://zero.webappsecurity.com/index.html")
    })
})
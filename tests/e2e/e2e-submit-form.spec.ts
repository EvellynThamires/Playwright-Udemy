import { test, expect } from "@playwright/test"

test.describe("Feedback form", () => {
    test.beforeEach(async ({ page }) => {
        await page.goto("http://zero.webappsecurity.com/index.html")  
        await page.click("#feedback")
    })

    test("Reset Feedback form", async ({ page }) => {
        await page.type("#name", "Evellyn")
        await page.type("#email", "email@email.com")
        await page.type("#subject", "Subject")
        await page.type("#comment", "Something nice about the application")
        await page.click("input[name='clear']")

        const nameInput = await page.locator("#name")
        const commentInput = await page.locator("#comment")

        await expect(nameInput).toBeEmpty()
        await expect(commentInput).toBeEmpty()
    })

    test("Submit Feedback form", async ({ page }) => {
        await page.type("#name", "Evellyn")
        await page.type("#email", "email@email.com")
        await page.type("#subject", "Subject")
        await page.type("#comment", "Something nice about the application")
        await page.click("input[type='submit']")

        await page.waitForSelector("#feedback-title")
    })
})
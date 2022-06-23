import { test, expect } from "@playwright/test"

test.describe.only("Tips and Tricks Section", () => {
    //Bring a lot of information about your test
    test("TestInfo Object", async ({ page }, testInfo) => {
        await page.goto("https://www.example.com")
        console.log(testInfo)
        console.log(testInfo.title)
    })
})
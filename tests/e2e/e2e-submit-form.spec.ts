import { test, expect } from "@playwright/test"
import { HomePage } from "../../page-objects/HomePage"
import { FeedbackPage } from "../../page-objects/FeedbackPage"

test.describe("Feedback form", () => {
    let homePage: HomePage
    let feedbackPage: FeedbackPage

    test.beforeEach(async ({ page }) => {
        homePage = new HomePage(page)
        feedbackPage = new FeedbackPage(page)

        await homePage.visit()
        await homePage.clickOnFeedbackLink()
    })

    test("Reset Feedback form", async ({ page }) => {
       await feedbackPage.fillForm("Evellyn", "evellyn@email.com", "Subject", "Awesome message")
       await feedbackPage.resetForm()

       await feedbackPage.assertReset()
    })

    test("Submit Feedback form", async ({ page }) => {
        await feedbackPage.fillForm("Evellyn", "evellyn@email.com", "Subject", "Awesome message")
        await feedbackPage.submitForm()

        await feedbackPage.feedbackFormSent()
    })
})
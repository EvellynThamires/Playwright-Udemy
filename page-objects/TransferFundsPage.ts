import { expect, Locator, Page } from "@playwright/test"

export class TransferFundsPage {
    readonly page: Page
    readonly fromAccountId: Locator 
    readonly toAccountId: Locator 
    readonly amount: Locator 
    readonly description: Locator 
    readonly submitButton: Locator 
    readonly boardHeader: Locator 
    readonly message: Locator 

    constructor(page: Page) {
        this.page = page 
        this.fromAccountId = page.locator("#tf_fromAccountId")
        this.toAccountId = page.locator("#tf_toAccountId")
        this.amount = page.locator("#tf_amount")
        this.description = page.locator("#tf_description")
        this.submitButton = page.locator("#btn_submit")
        this.boardHeader = page.locator("h2.board-header")
        this.message = page.locator(".alert-success")
    }

    async transferFunds() {
        await this.fromAccountId.selectOption("2")
        await this.toAccountId.selectOption("3")
        await this.amount.type("500")
        await this.description.type("Text message")
        await this.submitButton.click()

        await expect(this.boardHeader).toContainText("Verify")
        await this.submitButton.click()
    }

    async successMessage() {
        await expect(this.message).toContainText("You successfully submitted your transaction")
    }
}
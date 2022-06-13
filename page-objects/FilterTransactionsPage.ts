import { expect, Locator, Page } from "@playwright/test"

export class FilterTransactionsPage {
    readonly page: Page
    readonly accountIdSelectBox: Locator 
    readonly checkingAccount: Locator 
    readonly loanAccount: Locator 
    readonly noResults: Locator 

    constructor(page: Page) {
        this.page = page
        this.accountIdSelectBox = page.locator("#aa_accountId")
        this.checkingAccount = page.locator("#all_transactions_for_account tbody tr")
        this.loanAccount = page.locator("#all_transactions_for_account_body tbody tr")
        this.noResults = page.locator(".well")
    }

    async checkingAccountFilter() {
        await this.accountIdSelectBox.selectOption("2")
        await expect(this.checkingAccount).toHaveCount(3)
    }

    async loanAccountFilter() {
        await this.accountIdSelectBox.selectOption("4")
        await expect(this.loanAccount).toHaveCount(2)
    }

    async noResultsFilter() {
        await this.accountIdSelectBox.selectOption("6")
        await expect(this.noResults).toBeVisible()
    }
}
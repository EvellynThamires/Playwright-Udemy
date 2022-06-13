import { expect, Locator, Page } from "@playwright/test"

export class CurrencyExchangePage {
    readonly page: Page 
    readonly purchaseForeignCurrencyButton: Locator 
    readonly currencySelectBox: Locator 
    readonly sellRate: Locator
    readonly purchaseAmount: Locator  
    readonly purchaseInDollar: Locator 
    readonly purchaseCalculateCosts: Locator 
    readonly purchaseConversionAmount: Locator 
    readonly purchaseCashButton: Locator 
    readonly message: Locator 

    constructor(page: Page) {
        this.page = page 
        this.purchaseForeignCurrencyButton = page.locator("text='Purchase Foreign Currency'")
        this.currencySelectBox = page.locator("#pc_currency")
        this.sellRate = page.locator("#sp_sell_rate")
        this.purchaseAmount = page.locator("#pc_amount")
        this.purchaseInDollar = page.locator("#pc_inDollars_true")
        this.purchaseCalculateCosts = page.locator("#pc_calculate_costs")
        this.purchaseConversionAmount = page.locator("#pc_coversion_amount")
        this.purchaseCashButton = page.locator("#purchase_cash")
        this.message = page.locator("#alert_content")
    }

    async currencyExchange() {
        await this.purchaseForeignCurrencyButton.click()
        await this.currencySelectBox.selectOption("EUR")
        await expect(this.sellRate).toContainText("1 euro (EUR)")
        await this.purchaseAmount.type("1000")
        await this.purchaseInDollar.click()
        await this.purchaseCalculateCosts.click()
        // await expect(this.purchaseConversionAmount).toContainText("1000.00 U.S. dollar (USD)")
        await this.purchaseCashButton.click()
    }

    async assertSuccessMessage() {
        await expect(this.message).toBeVisible()
        await expect(this.message).toContainText("Foreign currency cash was successfully purchased")
    }
}
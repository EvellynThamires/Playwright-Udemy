import { test, expect } from '@playwright/test'
import { loadHomePage, assertTitle } from "../helpers"
 
test("Simple basic test", async ({ page }) => {
  await page.goto("https://www.example.com")
  const pageTitle = await page.locator("h1")
  
  await expect(pageTitle).toContainText("Example Domain")
})

test("Clicking on Elements", async ({page}) => {
  await page.goto("http://zero.webappsecurity.com/index.html")
  await page.click("#signin_button")
  await page.click("text=Sign in")

  const errorMessage = await page.locator(".alert-error")
  await expect(errorMessage).toContainText("Login and/or password are wrong.")
})

test.skip("Selectors", async ({page}) => {
  //text
  await page.click("text= some text")

  //Css selectors
  await page.click("button")
  await page.click("#id")
  await page.click(".class")

  //Only visible CSS Selector
  await page.click(".submit-button:visible")

  //Combinations
  await page.click("#username .first")

  //XPath
  await page.click("//button")
})

test.skip("Social Media", async ({page}) => {
  await page.goto("https://socialmedia-sit.bees-platform.dev/bees-social-web")

  await page.type('//input[@type="email"]','evellynthamires.tiemyuyemura-ext@ab-inbev.com')
  await page.click('//input[@type="submit"]')
  await page.type('//input[@type="password"]','Aqu@rius2109')
  await page.click("#idSIButton9")
  await page.click(".table")
  await page.click("#idTxtBx_SAOTCC_OTC")
  await page.waitForTimeout(20000)
  await page.click("#idSubmit_SAOTCC_Continue")
  await page.click("#idSIButton9")
  await page.waitForTimeout(20000)

  const client = await page.locator("h1")
  await expect(client).toContainText("CLIENTES")
})

test.describe("My first test suite", () => {
  test("Working with inputs @myTag", async ({page}) => {
    await page.goto("http://zero.webappsecurity.com/index.html")
    await page.click("#signin_button")
  
    await page.type("#user_login", "some username")
    await page.type("#user_password", "some password")
    await page.click("text=Sign in")
  
    const errorMessage = await page.locator(".alert-error")
    await expect(errorMessage).toContainText("Login and/or password are wrong.")
  })
  
  test("Assertions @myTag", async ({page}) => {
    await page.goto("https://example.com/")
  
    await expect(page).toHaveURL("https://example.com/")
    await expect(page).toHaveTitle("Example Domain")
  
    const element = await page.locator("h1")
    await expect(element).toBeVisible()
    await expect(element).toHaveText("Example Domain")
    await expect(element).toHaveCount(1)
  
    const nonExistingElement = await page.locator("h5")
    await expect(nonExistingElement).not.toBeVisible()
  })
})

test.describe.parallel.only("Hooks", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://example.com/")
  })

  test("Screenshots", async ({ page }) => {
    await page.screenshot({ path: "screenshot.png", fullPage: true })
  })
  
  test("Single element screenshot", async({ page }) => {
    const element = await page.$("h1")
    await element.screenshot({ path: "single_element_screenshot.png" })
  })
})

test("Custom Helpers", async ({page}) => {
  await loadHomePage(page)
  await assertTitle(page)
})
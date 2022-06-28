const {Builder, Capabilities, By} = require('selenium-webdriver');

require("chromedriver");

const driver = new Builder().withCapabilities(Capabilities.chrome()).build();

beforeAll(async () => {
    await driver.get("http://127.0.0.1:5500/movieList/index.html")
})

afterAll(async () => {
    await driver.quit()
})

test("Check title", async () => {
    await driver.findElement(By.xpath("//h1[contains(text(), 'Movie')]"))
    await driver.sleep(5000)
})

test("Add movie!", async () => {
    await driver.findElement(By.xpath("//input")).sendKeys("Finding Nemo")
    await driver.findElement(By.xpath("//button")).click()
    await driver.sleep(5000)
})

test("Deleted Movie!", async () => {
    await driver.findElement(By.xpath("//li/button")).click()
    await driver.sleep(2000)
})


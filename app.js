const { Builder, Key, By, until } = require('selenium-webdriver')
const driver = new Builder().forBrowser('chrome').build(),
    pleaseClass = require('./master/input'),
    AuthComponent = require('./components/auth'),
    please = new pleaseClass(driver)

driver.manage().window().maximize()
module.exports = {
    please: please,
    AUTH: new AuthComponent(please)
}
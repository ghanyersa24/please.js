const { Builder } = require('selenium-webdriver')
const driver = new Builder().forBrowser('chrome').build().manage().window().maximize()
module.exports = { driver: driver }
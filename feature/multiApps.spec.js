const { please } = require('../app')
const pleaseClass = require('../master/input')
const { URL } = require('../data/main')

describe('Coba multi apps', () => {
    it('login bo', async() => {
        await please.goTo(URL.loginEmailPassword)
        const driver = await please.newTab()

        const bo = new pleaseClass(driver)
        bo.goTo(URL.loginEmailPassword)

        await please.setInput('email', 'id', 'email', 'lalalala')
        await bo.setInput('email', 'id', 'email', 'inputan BO')
        await bo.quit()
    });
})
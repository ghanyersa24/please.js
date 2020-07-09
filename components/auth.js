let please
class Auth {
    constructor(master) {
        please = master
    }

    async loginEmail(user) {
        await please.setInput('input email', 'id', 'email', user.email)
        await please.setInput('input password', 'id', 'password', user.password)
        await please.click('button login', 'xpath', '//*[@id="login-form"]/div[2]/form/div[4]/div/button')
    }
    async loginNIK(user) {
        await please.setInput('input NIK', 'id', 'nik', user.nik)
        await please.setInput('input PIN', 'id', 'password', user.pin)
        await please.click('button login', 'xpath', '//*[@id="login-form"]/div[2]/form/div[4]/div/button')
    }
    async logout() {
        await please.click('profile', 'xpath', '//*[@id="app"]/div/nav/ul/li/a')
        await please.click('button logout', 'xpath', '//*[@id="app"]/div/nav/ul/li/div/a', 500)
    }
}

module.exports = Auth;
const base_url = 'http://manage.bisoul.bigio.id'
module.exports = {
    URL: {
        main: {
            url: `${base_url}/dashboard`,
            title: 'Backoffice iBUS'
        },
        loginEmailPassword: {
            url: `${base_url}/login`,
            title: 'Login BACKOFFICE:POS'
        },
        loginNIKPIN: {
            url: `${base_url}/login/store/testo`,
            title: 'Login BACKOFFICE:POS'
        },
        loginNIKPINSalah: {
            url: `${base_url}/login/store/test`,
            title: 'Login BACKOFFICE:POS'
        },

    },
    ACCOUNT: {
        main: {
            email: 'test@gmail.com',
            password: '@Bigio000'
        },
        salahEmail: {
            email: 'test@gmail',
            password: '@Bigio000'
        },
        salahPassword: {
            email: 'test@gmail.com',
            password: 'Bigio'
        },
        kosongSemua: {
            email: '',
            password: ''
        },
        kosongPassword: {
            email: 'test@gmail.com',
            password: ''
        },
        kosongEmail: {
            email: '',
            password: '@Bigio000'
        },
        NIKPIN: {
            nik: 2412970003,
            pin: '000000'
        },
        companyLain: {
            nik: '000000',
            pin: '000000'
        },
        outletLain: {
            nik: 0011,
            pin: 111111
        },
        NIKPINKosong: {
            nik: '',
            pin: ''
        },
        nikKosong: {
            nik: '',
            pin: '000000'
        },
        pinKosong: {
            nik: 2412970003,
            pin: ''
        }
    }
}
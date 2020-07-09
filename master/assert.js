const assert = require('assert');
module.exports = {
    checkTitle: async(actual, expected) => {
        assert.equal(actual.url, expected.url, `Harusnya aplikasi berada pada url "${expected.url}", bukan url "${actual.url}".`)
        assert.equal(actual.title, expected.title, `Harusnya aplikasi berada pada halaman "${expected.title}", bukan halaman "${actual.title}".`)
    },
    equal: async(type, actual, expected, message) => {
        if (type == 'value')
            assert.equal(actual, expected, message !== undefined ? message : `Harusnya element bernilai "${expected}", bukan bernilai "${actual}".`)
        else if (type == 'response')
            assert.equal(actual, expected, message !== undefined ? message : `Harusnya response message "${expected}", bukan "${actual}".`)
        else
            assert.equal(actual, expected, message !== undefined ? message : 'message assert equal tidak boleh sampai kosong')
    },

    notEqual: (type, actual, expected, message) => {
        if (type == 'value')
            assert.notEqual(actual, expected, message !== undefined ? message : `Harusnya element tidak bernilai "${expected}", bukan bernilai "${actual}".`)
        else if (type == 'response')
            assert.notEqual(actual, expected, message !== undefined ? message : `Harusnya response message tidak bernilai "${expected}", bukan "${actual}".`)
        else
            assert.notEqual(actual, expected, message !== undefined ? message : 'message assert not equal tidak boleh sampai kosong')
    },

    fail: (message) => {
        assert.fail(message !== undefined ? message : 'message assert fail tidak boleh kosong')
    }
};
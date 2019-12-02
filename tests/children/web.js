module.exports = function ({ web }, { assert, tests, test }) {
    tests('web', () => {
        test('web.domain()', () => web.domain(), (value) => {
            assert.isString(value)
            assert.isMatch(value, /^(\w+\.)+\w+$/)
        })
        test('web.url()', () => web.url(), (value) => {
            assert.isString(value)
            assert.isMatch(value, /^https:\/\/(\w+\.)+\w+$/)
        })
        test('web.url(isHttps)', () => web.url(false), (value) => {
            assert.isString(value)
            assert.isMatch(value, /^http:\/\/(\w+\.)+\w+$/)
        })
        test('web.email()', () => web.email(), (value) => {
            assert.isString(value)
            assert.isEmail(value)
        })
        test('web.ipv4', () => web.ipv4(), (value) => {
            assert.isString(value)
            assert.isMatch(value, /^(\d{1,3}\.){3}\d{1,3}$/)
        })
    })
}

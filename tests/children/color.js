module.exports = function ({ color }, { tests, test, assert }) {
    tests('color', () => {
        test('color.color()', () => color.color(), value => {
            assert.isString(value)
            assert.isLength(value, 7)
            assert.isMatch(value, /^#[a-z\d]{6}$/)
        })
        test('color.color(name)', () => color.color('red'), value => {
            assert.isString(value)
            assert.isBe(value, '#ff4136')
        })

        test('color.hex()', () => color.hex(), value => {
            assert.isString(value)
            assert.isLength(value, 7)
            assert.isMatch(value, /^#[a-z\d]{6}$/)
        })

        test('color.rgb()', () => color.rgb(), value => {
            assert.isString(value)
            assert.isLength(value, 10, 16)
            assert.isMatch(value, /^rgb\(\d{1,3},\d{1,3},\d{1,3}\)/)
        })

        test('color.rgba()', () => color.rgba(), value => {
            assert.isString(value)
            assert.isLength(value, 13, 22)
            assert.isMatch(value, /^rgba\(\d{1,3},\d{1,3},\d{1,3},0(\.\d\d?)?\)$/)
        })
    })
}

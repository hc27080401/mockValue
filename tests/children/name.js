
module.exports = function ({ name }, { tests, test, assert }) {
    tests('name', () => {
        test('name.name()', () => name.name(), (value) => { // 从a-z，A-Z中获取一个字符
            assert.isString(value)
            assert.isTrue(value.length >= 2)
            assert.isTrue(value.length <= 3)
            assert.isText(value)
        })

        test('name.familyName()', () => name.familyName(), (value) => {
            assert.isString(value)
            assert.isLength(value, 1)
            assert.isText(value)
        })

        test('name.firstName()', () => name.firstName(), (value) => {
            assert.isString(value)
            assert.isText(value)
        })
    })
}

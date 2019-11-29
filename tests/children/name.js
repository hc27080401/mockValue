const isText = (value) => /^[\u4e00-\u9fa5]+$/.test(value) // 判断是否中文

module.exports = function ({ name }, { tests, test, assert }) {
    tests('name', () => {
        test('name.name()', () => name.name(), (value) => { // 从a-z，A-Z中获取一个字符
            assert.isString(value)
            assert.isTrue(value.length >= 2)
            assert.isTrue(value.length <= 3)
            assert.isTrue(isText(value))
        })

        test('name.familyName()', name.familyName(), (value) => {
            assert.isString(value)
            assert.isLength(value, 1)
        })
    })
}

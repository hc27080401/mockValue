module.exports = function ({ text }, { tests, test, assert }) {
    tests('text', () => {
        test('text.text()', () => text.text(), (value) => {
            assert.isString(value)
            assert.isLength(value, 5)
            assert.isText(value)
        })

        test('text.text(length)', () => text.text(3), (value) => {
            assert.isString(value)
            assert.isLength(value, 3)
            assert.isText(value)
        })

        test('text.sentence()', () => text.sentence(), (value) => {
            assert.isString(value)
            assert.isMatch(value, /^[\u4e00-\u9fa5]+，[\u4e00-\u9fa5]+。$/)
        })

        test('text.paragraph()', () => text.paragraph(), (value) => {
            assert.isString(value)
            assert.isMatch(value, /^([\u4e00-\u9fa5]+，[\u4e00-\u9fa5]+。){3}$/)
        })

        test('text.paragraph(length)', () => text.paragraph(6), (value) => {
            assert.isString(value)
            assert.isMatch(value, /^([\u4e00-\u9fa5]+，[\u4e00-\u9fa5]+。){6}$/)
        })
    })
}

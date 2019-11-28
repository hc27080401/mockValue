module.exports = function ({ basic }, { tests, test, assert }) {
    tests('basic', () => {
        test('basic.letter()', basic.letter(), (value) => { // 从a-z，A-Z中获取一个字符
            assert.isString(value)
            assert.isMatch(value, /^[a-z]$/i)
        })

        test('basic.number()', basic.number(), (value) => { // 从 0-9中获取一个数字
            assert.isNumber(value)
            assert.isTrue(value >= 0)
            assert.isTrue(value < 10)
        })

        test('basic.bool(), basic.boolean()', basic.bool(), (value) => { // 随机生成true或false
            assert.isBoolean(value)
        })

        test('basic.integer()', basic.integer(), (value) => { // 随机获取正整数
            assert.isNumber(value)
            assert.isTrue(value > 0)
        })

        test('basic.integer(m, n)', basic.integer(-100, 100), (value) => { // 随机获取区间 [m, n] 之间的整数
            assert.isNumber(value)
            assert.isTrue(value >= -100)
            assert.isTrue(value <= 100)
        })

        test('basic.decimal()', basic.decimal(), (value) => { // 随机获取2位小数的大于0的数字
            assert.isNumber(value)
            assert.isMatch(value, /(\.\d\d?)?$/)
        })

        test('basic.symbol()', basic.symbol(), (value) => {
            assert.isString(value)
            assert.isMatch(value, /^[!]$/) // !@#$%^&*()[]
        })

        test('basic.string()', basic.string(), (value) => { // 字符串，默认5个字符
            assert.isString(value)
            assert.isLength(value, 5)
        })

        test('basic.range(m, n)', basic.range(10, 15), (value) => { // 返回一个区间数组[m, n]
            assert.isArray(value)
            assert.isEqual(value, [ 10, 11, 12, 13, 14, 15 ])
        })
    })
}

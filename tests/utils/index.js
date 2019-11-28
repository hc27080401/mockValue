module.exports = function ({ utils }, { assert, tests, test }) {
    tests('utils', () => {
        test('utils.random(length)', utils.random(10), (value) => { // 随机获取从 [0 - length) 区间的整数
            assert.isNumber(value)
            assert.isTrue(value >= 0)
            assert.isTrue(value < 10)
        })

        test('utils.random(m, n)', utils.random(5, 20), (value) => { // 随机获取 [m, n) 区间的整数
            assert.isNumber(value)
            assert.isTrue(value >= 5)
            assert.isTrue(value < 20)
        })

        test('utils.random(list)', utils.random([ 'A', 'B', 'C' ]), (value) => { // 从列表中随机获取值
            assert.isTrue([ 'A', 'B', 'C' ].includes(value))
        })

        test('utils.capitalize(string)', utils.capitalize('abcdefg'), (value) => {
            assert.isBe(value, 'Abcdefg')
        })
    })
}

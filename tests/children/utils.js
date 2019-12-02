module.exports = function ({ utils }, { assert, tests, test }) {
    tests('utils', () => {
        test('utils.random(length)', () => utils.random(10), (value) => {
            assert.isNumber(value)
            assert.isTrue(value >= 0)
            assert.isTrue(value < 10)
        })

        test('utils.random(m, n)', () => utils.random(5, 20), (value) => { // 随机获取 [m, n) 区间的整数
            assert.isNumber(value)
            assert.isTrue(value >= 5)
            assert.isTrue(value < 20)
        })

        test('utils.random(list)', () => utils.random([ 'A', 'B', 'C' ]), (value) => { // 从列表中随机获取值
            assert.isTrue([ 'A', 'B', 'C' ].includes(value))
        })

        test('utils.range(m, n)', utils.range(10, 15), (value) => { // 返回一个区间数组[m, n]
            assert.isArray(value)
            assert.isEqual(value, [ 10, 11, 12, 13, 14, 15 ])
        })

        test('utils.repeat(callback)', () => utils.repeat(() => 'A'), (value) => {
            assert.isArray(value)
            assert.isEqual(value, [ 'A', 'A', 'A' ])
        })

        test('utils.repeat(callback, count)', () => utils.repeat((i) => `A${i}`, 6), (value) => {
            assert.isArray(value)
            assert.isEqual(value, [ 'A0', 'A1', 'A2', 'A3', 'A4', 'A5' ])
        })

        test('utils.capitalize(string)', utils.capitalize('abcdefg'), (value) => {
            assert.isBe(value, 'Abcdefg')
        })
    })
}

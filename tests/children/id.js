module.exports = function ({ id }, { tests, test, assert }) {
    tests('id', () => {
        test('id.cardNo()', () => id.cardNo(), (value) => {
            console.info({ cardNo: value })
        })
    })
}

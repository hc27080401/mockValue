module.exports = function ({ MockValue, mockValue, def }, utils) {
    console.info({ MockValue, mockValue, def })

    describe('\n=== 基础类型 ===', () => {
        test('letter()', () => {
            utils.waitDevelop()
        })

        test('letter({pool:})', () => {
            utils.waitDevelop()
        })
    })
}

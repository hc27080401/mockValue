module.exports = function ({ date }, { tests, test, assert }) {
    tests('date', () => {
        const now = new Date()

        test('date.date()', () => date.date(), value => {
            assert.isString(value)
            assert.isLength(value, 10)
            assert.isMatch(value, /^\d{4}-\d{2}-\d{2}$/)

            const nowDate = [
                now.getFullYear(),
                (`${now.getMonth() + 1}`).padStart(2, '0'),
                (`${now.getDate()}`).padStart(2, 0),
            ].join('-')

            assert.isBe(value, nowDate)
        })

        test('date.date("yyyy")', () => date.date('yyyy'), value => {
            assert.isString(value)
            assert.isLength(value, 4)
            assert.isNumberString(value)
            assert.isBe(value, `${new Date().getFullYear()}`)
        })

        test('date.date("MM")', () => date.date('MM'), value => {
            assert.isString(value)
            assert.isLength(value, 2)
            assert.isNumberString(value)
            assert.isBe(value, `${new Date().getMonth() + 1}`.padStart(2, '0'))
        })

        test('date.date("M")', () => date.date('M'), value => {
            assert.isString(value)
            assert.isLength(value, 1, 2)
            assert.isNumberString(value)
            assert.isBe(value, `${new Date().getMonth() + 1}`)
        })

        test('date.date("dd")', () => date.date('dd'), value => {
            assert.isString(value)
            assert.isLength(value, 2)
            assert.isNumberString(value)
            assert.isBe(value, `${new Date().getDate()}`.padStart(2, '0'))
        })
        test('date.date("d")', () => date.date('d'), value => {
            assert.isString(value)
            assert.isLength(value, 1, 2)
            assert.isNumberString(value)
            assert.isBe(value, `${new Date().getDate()}`)
        })
        test('date.date("HH")', () => date.date('HH'), value => {
            assert.isString(value)
            assert.isLength(value, 2)
            assert.isNumberString(value)
            assert.isBe(value, `${new Date().getHours()}`.padStart(2, '0'))
        })
        test('date.date("H")', () => date.date('H'), value => {
            assert.isString(value)
            assert.isLength(value, 1, 2)
            assert.isNumberString(value)
            assert.isBe(value, `${new Date().getHours()}`)
        })
        test('date.date("hh")', () => date.date('hh'), value => {
            assert.isString(value)
            assert.isLength(value, 2)
            assert.isNumberString(value)
            const hours = new Date().getHours() % 12
            assert.isBe(value, hours === 0 ? '12' : `${hours}`.padStart(2, '0'))
        })
        test('date.date("h")', () => date.date('h'), value => {
            assert.isString(value)
            assert.isLength(value, 1, 2)
            assert.isNumberString(value)
            const hours = new Date().getHours() % 12
            assert.isBe(value, hours === 0 ? '12' : `${hours}`)
        })
        test('date.date("mm")', () => date.date('mm'), value => {
            assert.isString(value)
            assert.isLength(value, 2)
            assert.isNumberString(value)
            assert.isBe(value, `${new Date().getMinutes()}`.padStart(2, '0'))
        })
        test('date.date("m")', () => date.date('m'), value => {
            assert.isString(value)
            assert.isLength(value, 1, 2)
            assert.isNumberString(value)
            assert.isBe(value, `${new Date().getMinutes()}`)
        })

        test('date.date("SS")', () => date.date('SS'), value => {
            assert.isString(value)
            assert.isLength(value, 4)
            assert.isNumberString(value)
        })

        test('date.date("S")', () => date.date('S'), value => {
            assert.isString(value)
            assert.isLength(value, 1, 4)
            assert.isNumberString(value)
        })

        test('date.date("A")', () => date.date('A'), value => {
            assert.isString(value)
            assert.isBelong(value, [ 'AM', 'PM' ])
        })

        test('date.date("a")', () => date.date('a'), value => {
            assert.isString(value)
            assert.isBelong(value, [ 'am', 'pm' ])
        })

        test('date.date("C")', () => date.date('C'), value => {
            assert.isString(value)
            assert.isBelong(value, [ '上午', '下午' ])
        })

        test('date.date("D")', () => date.date('D'), value => {
            assert.isString(value)
            assert.isBelong(value, [ '周一', '周二', '周三', '周四', '周五', '周六', '周日' ])
        })

        test('date.date("T")', () => date.date('T'), value => {
            assert.isString(value)
            assert.isLength(value, 13)
            assert.isNumberString(value)
        })

        test('date.date("\\y\\M\\d\\H\\h\\m\\s\\S\\A\\a\\C\\D")', date.date('\\y\\M\\d\\H\\h\\m\\s\\S\\A\\a\\C\\D'), value => {
            assert.isString(value)
            assert.isBe(value, 'yMdHhmsSAaCD')
        })


        test('date.datetime()', () => date.datetime(now), value => {
            assert.isString(value)
            assert.isMatch(value, /^\d{4}-\d\d-\d\d \d\d:\d\d:\d\d/)
            const nowTime = [
                now.getFullYear(),
                `-${(`${now.getMonth() + 1}`).padStart(2, '0')}`,
                `-${(`${now.getDate()}`).padStart(2, '0')}`,
                ` ${(`${now.getHours()}`).padStart(2, '0')}`,
                `:${(`${now.getMinutes()}`).padStart(2, '0')}`,
                `:${(`${now.getSeconds()}`).padStart(2, '0')}`,
            ].join('')
            assert.isBe(value, nowTime)
        })

        test('date.time()', () => date.time(now), value => {
            assert.isString(value)
            const nowTime = [
                `${(`${now.getHours()}`).padStart(2, '0')}`,
                `:${(`${now.getMinutes()}`).padStart(2, '0')}`,
                `:${(`${now.getSeconds()}`).padStart(2, '0')}`,
            ].join('')
            assert.isBe(value, nowTime)
        })

        test('date.day()', () => date.day(), value => {
            assert.isString(value)
            assert.isBelong(value, [ '周一', '周二', '周三', '周四', '周五', '周六', '周日' ])
        })
    })
}

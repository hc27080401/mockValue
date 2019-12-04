
// 测试是否
module.exports = function ({ exports, utils, basic, name, text, web, id, date, image, color, address }, { tests, test, assert }) {
    tests('exports', () => {
        test('exports.random', () => exports.random, value => {
            assert.isBe(value, utils.random)
        })
        test('exports.range', () => exports.range, value => {
            assert.isBe(value, utils.range)
        })
        test('exports.repeat', () => exports.repeat, value => {
            assert.isBe(value, utils.repeat)
        })
        test('exports.capitalize', () => exports.capitalize, value => {
            assert.isBe(value, utils.capitalize)
        })

        test('exports.letter', () => exports.letter, value => {
            assert.isBe(value, basic.letter)
        })
        test('exports.number', () => exports.number, value => {
            assert.isBe(value, basic.number)
        })
        test('exports.bool', () => exports.bool, value => {
            assert.isBe(value, basic.bool)
        })
        test('exports.boolean', () => exports.boolean, value => {
            assert.isBe(value, basic.boolean)
        })
        test('exports.integer', () => exports.integer, value => {
            assert.isBe(value, basic.integer)
        })
        test('exports.decimal', () => exports.decimal, value => {
            assert.isBe(value, basic.decimal)
        })
        test('exports.symbol', () => exports.symbol, value => {
            assert.isBe(value, basic.symbol)
        })
        test('exports.string', () => exports.string, value => {
            assert.isBe(value, basic.string)
        })

        test('exports.name', () => exports.name, value => {
            assert.isBe(value, name.name)
        })
        test('exports.familyname', () => exports.familyname, value => {
            assert.isBe(value, name.familyname)
        })
        test('exports.firstname', () => exports.firstname, value => {
            assert.isBe(value, name.firstname)
        })

        test('exports.text', () => exports.text, value => {
            assert.isBe(value, text.text)
        })
        test('exports.sentence', () => exports.sentence, value => {
            assert.isBe(value, text.sentence)
        })
        test('exports.paragraph', () => exports.paragraph, value => {
            assert.isBe(value, text.paragraph)
        })

        test('exports.text', () => exports.text, value => {
            assert.isBe(value, text.text)
        })
        test('exports.sentence', () => exports.sentence, value => {
            assert.isBe(value, text.sentence)
        })
        test('exports.paragraph', () => exports.paragraph, value => {
            assert.isBe(value, text.paragraph)
        })

        test('exports.domain', () => exports.domain, value => {
            assert.isBe(value, web.domain)
        })
        test('exports.url', () => exports.url, value => {
            assert.isBe(value, web.url)
        })
        test('exports.email', () => exports.email, value => {
            assert.isBe(value, web.email)
        })
        test('exports.ipv4', () => exports.ipv4, value => {
            assert.isBe(value, web.ipv4)
        })

        test('exports.cardno', () => exports.cardno, value => {
            assert.isBe(value, id.cardno)
        })
        test('exports.guid', () => exports.guid, value => {
            assert.isBe(value, id.guid)
        })
        test('exports.mobile', () => exports.mobile, value => {
            assert.isBe(value, id.mobile)
        })
        test('exports.qq', () => exports.qq, value => {
            assert.isBe(value, id.qq)
        })
        test('exports.user', () => exports.user, value => {
            assert.isBe(value, id.user)
        })
        test('exports.password', () => exports.password, value => {
            assert.isBe(value, id.password)
        })

        test('exports.date', () => exports.date, value => {
            assert.isBe(value, date.date)
        })
        test('exports.datetime', () => exports.datetime, value => {
            assert.isBe(value, date.datetime)
        })
        test('exports.time', () => exports.time, value => {
            assert.isBe(value, date.time)
        })
        test('exports.day', () => exports.day, value => {
            assert.isBe(value, date.day)
        })

        test('exports.img', () => exports.img, value => {
            assert.isBe(value, image.img)
        })

        test('exports.color', () => exports.color, value => {
            assert.isBe(value, color.color)
        })
        test('exports.hex', () => exports.hex, value => {
            assert.isBe(value, color.hex)
        })
        test('exports.rgb', () => exports.rgb, value => {
            assert.isBe(value, color.rgb)
        })
        test('exports.rgba', () => exports.rgba, value => {
            assert.isBe(value, color.rgba)
        })
        test('exports.hsl', () => exports.hsl, value => {
            assert.isBe(value, color.hsl)
        })

        test('exports.region', () => exports.region, value => {
            assert.isBe(value, address.region)
        })
        test('exports.region', () => exports.region, value => {
            assert.isBe(value, address.region)
        })
        test('exports.province', () => exports.province, value => {
            assert.isBe(value, address.province)
        })
        test('exports.city', () => exports.city, value => {
            assert.isBe(value, address.city)
        })
        test('exports.fullcity', () => exports.fullcity, value => {
            assert.isBe(value, address.fullcity)
        })
        test('exports.county', () => exports.county, value => {
            assert.isBe(value, address.county)
        })
        test('exports.fullcounty', () => exports.fullcounty, value => {
            assert.isBe(value, address.fullcounty)
        })
        test('exports.street', () => exports.street, value => {
            assert.isBe(value, address.street)
        })
        test('exports.fullstreet', () => exports.fullstreet, value => {
            assert.isBe(value, address.fullstreet)
        })
        test('exports.zip', () => exports.zip, value => {
            assert.isBe(value, address.zip)
        })
    })
}

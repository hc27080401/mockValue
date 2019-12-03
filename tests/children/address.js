const area = require('../../lib/area')
const regions = area.regions.map(item => item.text)
const provinces = area.provinces.map(item => item.text)

module.exports = function ({ address }, { tests, test, assert }) {
    tests('address', () => {
        const isAreaData = value => {
            assert.isObject(value)
            assert.isString(value.text)
            assert.isNumberString(value.code)
        }

        test('address.region()', () => address.region(), value => {
            assert.isString(value)
            assert.isBelong(value, regions)
        })

        test('address.province()', () => address.province(), value => {
            assert.isString(value)
            assert.isBelong(value, provinces)
        })

        test('address.province(type)', () => {
            const value1 = address.province('code')
            assert.isNumberString(value1)

            const value2 = address.province('text')
            assert.isString(value2)
            assert.isBelong(value2, provinces)

            const value3 = address.province('data')
            isAreaData(value3)
            assert.isBelong(value3.text, provinces)
        })

        test('address.city()', () => address.city(), value => {
            assert.isString(value)
        })

        test('address.city(type)', () => {
            const value1 = address.city('code')
            assert.isNumberString(value1)

            const value2 = address.city('text')
            assert.isString(value2)

            const value3 = address.city('data')
            isAreaData(value3)
        })

        test('address.fullcity()', () => address.fullcity(), value => {
            assert.isString(value)
        })

        test('address.fullcity(type)', () => {
            const value1 = address.fullcity('code')
            assert.isArray(value1)
            assert.isLength(value1, 2)
            assert.isNumberString(value1[0])
            assert.isNumberString(value1[1])
            const value2 = address.fullcity('text')
            assert.isString(value2)

            const value3 = address.fullcity('data')
            assert.isArray(value3)
            assert.isLength(value3, 2)
            isAreaData(value3[0])
            isAreaData(value3[1])

            const value4 = address.fullcity('textArray')
            assert.isArray(value4)
            assert.isLength(value4, 2)
            assert.isString(value4[0])
            assert.isString(value4[1])
        })

        test('address.county()', () => address.county(), value => {
            assert.isString(value)
        })

        test('address.county(type)', () => {
            const value1 = address.county('code')
            assert.isNumberString(value1)

            const value2 = address.county('text')
            assert.isString(value2)

            const value3 = address.county('data')
            isAreaData(value3)
        })

        test('address.fullcounty()', () => address.fullcounty(), value => {
            assert.isString(value)
        })

        test('address.fullcounty(type)', () => {
            const value1 = address.fullcounty('code')
            assert.isArray(value1)
            assert.isLength(value1, 3)
            assert.isNumberString(value1[0])
            assert.isNumberString(value1[1])
            assert.isNumberString(value1[2])

            const value2 = address.fullcounty('text')
            assert.isString(value2)

            const value3 = address.fullcounty('data')
            assert.isArray(value3)
            assert.isLength(value3, 3)
            value3.forEach(isAreaData)

            const value4 = address.fullcounty('textArray')
            assert.isArray(value4)
            assert.isLength(value4, 3)
            value4.forEach(assert.isString)
        })

        test('address.street()', () => address.street(), value => {
            assert.isString(value)
        })

        test('address.fullstreet()', () => address.fullstreet(), value => {
            assert.isString(value)
        })

        test('address.zip()', () => address.zip(), value => {
            assert.isNumberString(value)
            assert.isLength(value, 6)
        })
    })
}

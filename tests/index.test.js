const ijest = require('../packages/ijest')

ijest({
    context: {
        def: { a: 1, b: 2 },
        utils: require('../lib/utils'),
        basic: require('../lib/mockValue/basic'),
        name: require('../lib/mockValue/name'),
        text: require('../lib/mockValue/text'),
        web: require('../lib/mockValue/web'),
        id: require('../lib/mockValue/id'),
        date: require('../lib/mockValue/date'),
        image: require('../lib/mockValue/image'),
        color: require('../lib/mockValue/color'),
        address: require('../lib/mockValue/address'),
        exports: require('../lib'),
    },
    tests: {
        utils: require('./children/utils'),
        basic: require('./children/basic'),
        name: require('./children/name'),
        text: require('./children/text'),
        web: require('./children/web'),
        id: require('./children/id'),
        date: require('./children/date'),
        image: require('./children/image'),
        color: require('./children/color'),
        address: require('./children/address'),
        exports: require('./exports'),
    },
    asserts: {
        isText: (value) => { // 判断是否纯中文组成的字符串
            expect(/^[\u4e00-\u9fa5]+$/.test(value)).toBe(true)
        },
        isEmail: (value) => { // 是否email
            expect(/^(\w+\.)*\w+@\w+\.\w+$/.test(value)).toBe(true)
        },
        iscardno: (value) => {
            expect(/(^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$)|(^[1-9]\d{5}\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{2}[0-9Xx]$)/.test(value)).toBe(true)
        },
        isNumberString (value) {
            expect(/^\d+$/.test(value)).toBe(true)
        },
    },
    defaultNum: 10,
})

const ijest = require('../packages/ijest')

ijest({
    context: {
        def: { a: 1, b: 2 },
        utils: require('../lib/utils'),
        basic: require('../lib/mockValue/basic'),
        name: require('../lib/mockValue/name'),
        text: require('../lib/mockValue/text'),
        web: require('../lib/mockValue/web'),
    },
    tests: {
        utils: require('./children/utils'),
        basic: require('./children/basic'),
        name: require('./children/name'),
        text: require('./children/text'),
        web: require('./children/web'),
    },
    asserts: {
        isText: (value) => { // 判断是否纯中文组成的字符串
            expect(/^[\u4e00-\u9fa5]+$/.test(value)).toBe(true)
        },
        isEmail: (value) => { // 是否email
            expect(/^(\w+\.)*\w+@\w+\.\w+$/.test(value)).toBe(true)
        },
    },
})

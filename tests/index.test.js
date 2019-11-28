const ijest = require('../packages/ijest')

ijest({
    context: {
        def: { a: 1, b: 2 },
        utils: require('../lib/utils'),
        basic: require('../lib/mockValue/basic'),
    },
    tests: {
        utils: require('./utils'),
        basic: require('./basic'),
    },
})

const ijest = require('../packages/ijest')

ijest({
    context: {
        def: { a: 1, b: 2 },
        utils: require('../lib/utils'),
        basic: require('../lib/mockValue/basic'),
        name: require('../lib/mockValue/name'),
    },
    tests: {
        utils: require('./children/utils'),
        basic: require('./children/basic'),
        name: require('./children/name'),
    },
})

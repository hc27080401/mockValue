const ijest = require('../packages/ijest')

ijest({
    context: {
        def: { a: 1, b: 2 },
    },
    tests: {
        utils: require('./utils'),
        basic: require('./basic'),
    },
})

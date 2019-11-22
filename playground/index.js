const MockValue = require('../index')


const ijest = require('../packages/ijest')

ijest({
    context: {
        data: { a: 1, b: 2 },
    },
    tests: {
        basic: require('./basic'),
    },

    actives: '',
})

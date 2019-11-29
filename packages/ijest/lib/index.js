const assert = require('./assert')
const cacheTests = {}
const cacheContext = { ijest }
const defaultMultipleCallNum = 10
const utils = {
    assert,
    tests (title, callback) {
        describe(`\n=== ${title} ===`, callback)
    },
    test (title, value, asserts, count) {
        // test(title, value, asserts) 对value进行一次测试
        if (typeof value !== 'function' && typeof asserts === 'function') {
            return test(title, () => {
                asserts(value)
            })
        }

        // test(title, valueGetter, asserts, count) 对valueGetter返回的值进行多次测试
        if (typeof value === 'function' && typeof asserts === 'function') {
            return test(title, () => {
                multipleCall(count || defaultMultipleCallNum, () => asserts(value()))
            })
        }

        //  test(title, assert) 使用原生的方式进行测试，一般在场景比较复杂的时候使用
        if (typeof value === 'function' && typeof asserts !== 'function') {
            return test(title, value)
        }

        throw Error('arguments error!')
    },
}

module.exports = ijest

function ijest ({ context = {}, tests = {}, actives = '' }) {
    Object.assign(cacheContext, context)
    add(tests)
    start(actives)
}

function add (name, test) {
    if (typeof name === 'object') {
        const myTests = name
        for (const key in myTests) {
            add(key, myTests[key])
        }
        return
    }
    cacheTests[name] = test
}

function start (actives) {
    const { actived, a } = parseArgv()

    if (actived && !actived.isShort) {
        actives = actived.value
    } else if (a && a.isShort) {
        actives = a.value
    }

    if (actives === '') {
        actives = Object.keys(cacheTests)
    } else if (typeof actives === 'string') {
        actives = actives.slice(/,\s*/)
    }

    for (const key in cacheTests) {
        if (actives.includes(key)) {
            cacheTests[key](cacheContext, utils)
        }
    }
}

function multipleCall (count, callback) {
    for (let i = 0; i < count; i++) {
        callback()
    }
}

function parseArgv () {
    const params = {}
    process.argv.forEach(arg => {
        const matches = arg.match(/-(-)?(\w+)(?:=(.+))?/)
        if (matches) {
            const [ , notShort, key, value ] = matches
            params[key] = { isShort: !notShort, value: value.split(/,\s*/) }
        }
    })
    return params
}

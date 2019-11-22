const cacheTests = {}
const cacheContext = { ijest }
const util = {
    placeholder () {
        expect(true).toBe(false)
    },
    waitDevelop () {
        expect(true).toBe(false)
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
            cacheTests[key](cacheContext, util)
        }
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
